import { Briefcase, Code, GraduationCap } from "lucide-react";
import type {
  AboutCard,
  AboutData,
  Certification,
  Education,
  Experience,
} from "@/lib/types";

export const aboutData: AboutData = {
  description:
    "I am a self-driven fullstack developer who enjoys building practical systems with clean interfaces, secure data flow, and maintainable implementation. I have experience collaborating with teams, translating requirements into working features, and learning new tools quickly when a project needs them.",
};

export const aboutCards: AboutCard[] = [
  {
    id: "fullstack-delivery",
    icon: Code,
    title: "Fullstack Delivery",
    text: "React, Next.js, SvelteKit, Laravel, REST APIs, and databases.",
  },
  {
    id: "product-mindset",
    icon: GraduationCap,
    title: "Product Mindset",
    text: "Focused on usable flows, responsive UI, auth, data, and deployment.",
  },
  {
    id: "growing-edge",
    icon: Briefcase,
    title: "Growing Edge",
    text: "Exploring AI agents, Web3, smart contracts, and automation.",
  },
];

export const experiences: Experience[] = [
  {
    id: "indogreen-fullstack",
    role: "Fullstack Developer",
    company: "PT. Indogreen Technology And Management",
    date: "May 2025 - Apr 2026",
    description: [
      "Built, developed, and maintained the integrated Project Management System version 1 and version 2 (frontend-v2) to support operational solutions in the Solar Power Plant (PLTS) sector.",
      "Designed robust backend architectures using Laravel, including the creation of project data management systems and secure authentication.",
      "Developed dynamic, responsive, and interactive User Interfaces (UI) on the frontend using Svelte and SvelteKit frameworks.",
      "Designed, built, and integrated RESTful APIs to ensure seamless data communication between the frontend and backend.",
    ],
  },
  {
    id: "infinite-learning-web-uiux",
    role: "Web Development & UI UX Design",
    company: "Infinite Learning (PT. Kinema Systrans Multimedia)",
    date: "Feb 2024 - Jun 2024",
    description: [
      "Participated in the MSIB 6 Independent Study Program, focusing on modern web development practices and user interface design.",
      'Collaborated as a Front-End Developer using React JS and Tailwind CSS to build a mental health web application prototype named "InnerStrength".',
      'Acted as a UI Design & UX Research specialist in designing the prototype for the "GoTravel" travel website, ensuring user-centric design.',
      "Developed various independent projects, including creating a responsive portfolio website based on HTML and CSS.",
    ],
  },
  {
    id: "gamagudabo-media-2024",
    role: "Documentation & Creative Media Coordinator",
    company: "Gamagudabo Championship 2024",
    date: "Nov 2023 - Sep 2024",
    description: [
      "Managed the organization's social media content production cycle (YouTube, Instagram, TikTok, Twitter) from copywriting and design to editing.",
      "Analyzed social media data insights to formulate more effective content strategies, budgets, and production schedules.",
      "Managed the content production process, starting from writing and editing to design, collaborating with the creative team to produce high-quality content.",
    ],
  },
  {
    id: "gamagudabo-design-photo",
    role: "Graphic Designer & Photographer",
    company: "Gamagudabo Championship (2022 & 2023)",
    date: "Mar 2022 & 2023 - Sep 2022 & 2023",
    description: [
      "Assisted Pre-Event and Event activities with the Creative Team job desk for an inter-school Futsal Event across Bogor City.",
      "Responsible for visual documentation as a field photographer and videographer for the competition's event teaser.",
      "Executed graphic design and photo editing for branding and publication purposes on the event's official Instagram.",
    ],
  },
  {
    id: "gundaling-deskprint",
    role: "Deskprint",
    company: "Gundaling Sholeh Iskandar (Internship)",
    date: "Oct 2019 - Feb 2020",
    description: [
      "Communicated with customers to finalize designs to be printed according to the printing press requirements using Adobe Acrobat, Adobe Illustrator, Adobe Photoshop, and CorelDRAW.",
      "Finished printouts such as Banners, Books, Stickers, Laminating, Calendars, Spiral Binding, Hard Covers, etc., commonly referred to by the company as Binding and Banner Finishing.",
      "Demonstrated an understanding of printing materials.",
    ],
  },
];

export const educations: Education[] = [
  {
    id: "gunadarma-information-systems",
    degree: "Bachelor's Degree in Information Systems",
    school: "Gunadarma University - Depok, Indonesia",
    date: "Aug 2021 - Aug 2025",
    details: ["Final GPA : 3.48 / 4.00"],
  },
  {
    id: "smkn-1-bogor-multimedia",
    degree: "Multimedia",
    school: "SMKN 1 KOTA BOGOR - Bogor, Indonesia",
    date: "2018 - 2021",
    details: ["Final Score : 84 / 100"],
  },
];

export const certifications: Certification[] = [
  {
    id: "bnsp-system-analyst-2025",
    title: "Occupation System Analyst",
    type: "Certification",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "03 September 2025",
  },
  {
    id: "gunadarma-aptitude-2025",
    title: "Aptitude Test",
    type: "Certification",
    issuer: "Gunadarma University",
    date: "30 July 2025",
  },
  {
    id: "lepkom-csharp-intermediate-2024",
    title: "Course C# for Intermediate",
    type: "Certification",
    issuer: "Lepkom Gunadarma University",
    date: "20 November 2024",
  },
  {
    id: "msib-batch-6-award-2024",
    title: "Participation in the MSIB Kampus Merdeka Batch 6 Program",
    type: "Awards",
    issuer: "Pelaksana Pusat Kampus Merdeka",
    date: "01 July 2024",
  },
  {
    id: "infinite-learning-web-uiux-2024",
    title: "Studi Independen Web Development & UI UX Design",
    type: "Certification",
    issuer: "Infinite Learning",
    date: "30 June 2024",
  },
  {
    id: "lepkom-golang-intermediate-2024",
    title: "Course Golang for Intermediate",
    type: "Certification",
    issuer: "Lepkom Gunadarma University",
    date: "17 April 2024",
  },
  {
    id: "lepkom-csharp-beginner-2023",
    title: "Course C# for Beginner",
    type: "Certification",
    issuer: "Lepkom Gunadarma University",
    date: "15 November 2023",
  },
  {
    id: "lepkom-golang-beginner-2023",
    title: "Course Golang for Beginner",
    type: "Certification",
    issuer: "Lepkom Gunadarma University",
    date: "23 June 2023",
  },
  {
    id: "gunadarma-html5-workshop-2023",
    title: "Workshop Building Website using HTML 5",
    type: "Certification",
    issuer: "Gunadarma University",
    date: "16 June 2023",
  },
  {
    id: "lepkom-dbms-fundamental-2022",
    title: "Course Fundamental DBMS",
    type: "Certification",
    issuer: "Lepkom Gunadarma University",
    date: "23 November 2022",
  },
  {
    id: "lepkom-web-fundamental-2022",
    title: "Course Fundamental Web",
    type: "Certification",
    issuer: "Lepkom Gunadarma University",
    date: "23 May 2022",
  },
  {
    id: "gundaling-internship-2020",
    title: "Internship Certificate",
    type: "Certification",
    issuer: "Gundaling Sholeh Iskandar",
    date: "28 February 2020",
  },
];
