import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sangita Kendre",
  description: "Senior Software Developer @ Tech Mahindra ✦ Project Manager ✦ API Development & Integration ✦ Automation & RPA ✦ Full Stack Developer ✦ DSA ✦ Nodejs ✦ Reactjs ✦ 12+Yrs Exp ✦ Software Engineer ✦ Cloud Solutions Architect ✦ AWS Certified Solutions Architect ✦ DevOps Engineer ✦ CI/CD ✦ Agile & Scrum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-gray-50 text-gray-950 relative pt-28 sm"pt-36 dark:!bg-gray-900 dark:!text-gray-50 dark:tex-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-1rem] right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
