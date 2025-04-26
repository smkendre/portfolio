import { links } from "@/lib/data";

export type ProjectItemProps = {
  title: string;
  description: string;
  tags: [];
  imageUrl: string;
};

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type commonProps = {
  children: React.ReactNode;
};

export type sectionName = (typeof links)[number]["name"];

export type ContactFormEmailProps = {
  name: string;
  email: string;
  message: string;
};

export type themeType = "light" | "dark";
