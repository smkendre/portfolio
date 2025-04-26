"use client"
import { commonProps, themeType } from '@/lib/types';
import React, { useState } from 'react'


type ActiveSectionContextType = {
  theme: themeType;
  setTheme: React.Dispatch<React.SetStateAction<themeType>>;
  handleThemeSwitch: () => void;
}

const ThemeContext = React.createContext<ActiveSectionContextType | null>(null);

const ThemeContextProvider = ({children}: commonProps) => {

  const [theme, setTheme] = useState<themeType>("light");

  const handleThemeSwitch = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as themeType;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemeSwitch}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider


export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionProvider");
  }
  return context;
}