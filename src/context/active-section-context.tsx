"use client"

import React from "react";
import { commonProps } from "@/lib/types";

import { sectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeLink: sectionName;
  setActiveLink: React.Dispatch<React.SetStateAction<sectionName>>;
  timeOflastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({children}: commonProps) => {
  const [activeLink, setActiveLink] = React.useState<sectionName>("Home");
  const[timeOflastClick, setTimeOfLastClick] = React.useState<number>(0);
  
  return (<ActiveSectionContext.Provider value={{activeLink, setActiveLink, timeOflastClick, setTimeOfLastClick}}>{children}</ActiveSectionContext.Provider>);
};

export default ActiveSectionContextProvider;


export const useActiveSectionContext = () => {
  const context = React.useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionProvider");
  }
  return context;
}