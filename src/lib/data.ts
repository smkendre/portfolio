import { GraduationCap } from "lucide-react";
import Image1 from "../../public/imag1.png";
import Image2 from "../../public/image2.png";
import Image3 from "../../public/image3.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";
import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "Python",
  "FastAPI",
  "NodeJS",
  "Document AI",
  "ReactJS",
  "Typescript",
  "Tesseract",
  "Pandas",
  "Django",
  "MySQL",
  "TailwindCSS",
  "Jira",
  "Laravel",
  "MongoDB",
  "Mailchimp",
  "AWS SES, EC2, S3",
  "Socket.io",
  "PostgreSQL",
  "SoapUI",
  "Stripe",
  "Apache2",
  "Nginx",
  "Docker",
  "Kubernetes",
  "CI/CD Pipeline",
  "Jenkins",
  "Git",
  "GitHub",
  "Bitbucket",
  "GitLab",
] as const;

export const projectsData = [
  {
    title: "OCR Tool",
    description:
      "An in-house tool developed to extract data from PDFs and images using OCR capabilities. Reduced project cost by 50%. Added features like data extraction, redaction, document translation.",
    tags: [
      "ReactJS",
      "Typescript",
      "Python",
      "Tesseract",
      "Pandas",
      "Document AI",
      "Django",
      "MySQL",
      "TailwindCSS",
      "Jira",
    ],
    imageUrl: Image1,
  },
  {
    title: "Event Management System (CRM)",
    description:
      "Project Description: A CRM platform to manage both online and oﬄine events, monitor team activities, and schedule communication campaigns.",
    tags: [
      "ReactJS",
      "Typescript",
      "Laravel",
      "MySQL",
      "TailwindCSS",
      "Jira",
      "MongoDB",
      "Mailchimp",
      "AWS SES, EC2, S3",
    ],
    imageUrl: Image2,
  },
  {
    title: "Webinar Panel",
    description:
      ": A platform for live streaming Zoom sessions, tracking video engagement, and generating dynamic reports for each webinar session.",
    tags: [
      "ReactJS",
      "Typescript",
      "Laravel",
      "MySQL",
      "TailwindCSS",
      "Jira",
      "Socket.io",
      "NodeJS",
    ],
    imageUrl: Image3,
  },
  {
    title: "Fusion",
    description:
      "A telesales marketing CRM supporting outbound calls and multilevel user access with integrations for data validation and customer tracking.",
    tags: [
      "ReactJS",
      "Typescript",
      "Python",
      "PostgreSQL",
      "TailwindCSS",
      "SoapUI",
      "Jira",
      "Django",
    ],
    imageUrl: Image3,
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering (B.E.) in Computer Science",
    location: "Mumbai, India",
    description:
      "I graduated after 4 years of studying from Thakur College of Engineering and Technology. I have done 4 months internship after graduation.",
    icon: React.createElement(GraduationCap),
    date: "2010",
  },
  {
    title: "Software Engineer, OSP Labs",
    location: "Mumbai, India",
    description:
      "Developed responsive client websites using PHP, WordPress, and front-end technologies; built Python-Flask-based CRM applications, integrated backend modules, and implemented automated testing to enhance performance and reduce deployment errors by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2012 - August 2014",
  },
  {
    title: "Web Developer, Exa India Private Limited",
    location: "Mumbai, India",
    description:
      "Developed responsive, cross-browser-compatible client websites using PHP, WordPress, and front-end technologies; optimized backend functionality, integrated data solutions, migrated jQuery UIs to React.js, and improved accessibility and load performance using Tailwind CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2014 - February 2016",
  },
  {
    title: "Software Developer, Appetals Solutions Pvt. Ltd",
    location: "Mumbai, India",
    description:
      "Led full-cycle development of PHP web applications with a focus on performance and scalability. Built interactive microsites for marketing campaigns using CodeIgniter and integrated Facebook APIs for social engagement. Developed user-centric frontends with React.js and Redux, implementing secure authentication via OAuth and JWT.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2016 - April 2017",
  },
  {
    title: "Full Stack Developer, Greatstart India",
    location: "Mumbai, India",
    description:
      "Experienced in WordPress and WooCommerce development with custom theme/plugin expertise and secure Stripe integration. Proficient in building custom CMS solutions using Node.js and React.js. Skilled in third-party API integration, PWA implementation, and project estimation, with a strong focus on performance, scalability, and user engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2017 - January 2018",
  },
  {
    title: "Senior Software Developer, Bitstreet Technologies",
    location: "Mumbai, India",
    description:
      "Experienced in developing secure cryptocurrency platforms and integrating payment gateways with robust API security. Skilled in building real-time dashboards, embedding AI/ML with FastAPI, and modernizing codebases with TypeScript. Proficient in microservices migration, enhancing scalability, system reliability, and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Janury 2018 - June 2019",
  },
  {
    title: "Full Stack Developer, The Indian Express Private Limited",
    location: "Mumbai, India",
    description:
      "Skilled in designing AWS-based solutions and developing end-to-end systems for newsletters, events, and webinars. Expertise in building CRM tools, live streaming platforms with real-time features, and managing high-traffic WordPress sites. Proficient in performance optimization, serverless cloud implementation, and enhancing SEO with SSR using Next.js.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2019 - November 2021",
  },
  {
    title: "Senior Software Developer, Tech Mahindra Limited",
    location: "Mumbai, India",
    description:
      "Experienced in scalable web application development using CakePHP and modern frontend technologies like React.js and TypeScript. Skilled in automating business workflows with Power Automate, and implementing OCR solutions using Python and Document AI. Adept at designing microservices-based systems, secure API/GraphQL architectures, and modernizing legacy codebases. Proven ability in application support, performance optimization, and CI/CD pipeline integration using Docker and Kubernetes, leading to enhanced efficiency, maintainability, and user engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2021 - Present",
  },
] as const;
