import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiReactrouter,
  SiBootstrap,
  SiTailwindcss,
  SiAxios,
  SiPhp,
  SiLaravel,
  SiPython,
  SiNodedotjs,
  SiGo,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiFirebase,
  SiPrisma,
  SiSequelize,
  SiPostgresql,
  SiExpress,
  SiJsonwebtokens,
  SiVite,
  SiNpm,
  SiPostman,
  SiVercel,
  SiApache,
  SiWordpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiLinux,
  SiUbuntu,
  SiWeb3Dotjs,
  SiSolidity,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiCoreldraw,
  SiAdobeacrobatreader,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiCanva,
  SiBehance,
  SiAnthropic,
  SiGooglegemini,
  SiOpenai,
  SiDocker,
} from "react-icons/si";
import {
  FileCode2,
  Github,
  Linkedin,
  Mail,
  Code,
  GraduationCap,
  Briefcase,
} from "lucide-react";

// ─────────────────────────────────────────────
// INTERFACES
// ─────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  /** Lucide icon component */
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  href: string;
  label: string;
}

export interface HeroData {
  typewriterTexts: string[];
  contactHref: string;
  resumeHref: string;
}

export interface AboutCard {
  /** Lucide icon component */
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>;
  title: string;
  text: string;
}

/** Shared icon type — supports both react-icons (IconType) and Lucide components */
export type AnyIcon =
  | IconType
  | React.ComponentType<{
      size?: number;
      style?: React.CSSProperties;
      className?: string;
    }>;

export interface Skill {
  name: string;
  icon: AnyIcon;
  color: string;
  darkColor?: string;
}

export const SKILL_TABS = [
  "Frontend",
  "Backend",
  "Tools & Tech",
  "Design",
] as const;
export type SkillTab = (typeof SKILL_TABS)[number];

export interface TechIcon {
  icon: IconType;
  color: string;
  darkColor?: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface Project {
  title: string;
  description: string;
  tech: TechIcon[];
  links: ProjectLink[];
  thumbnail: string;
}

// ─────────────────────────────────────────────
// NAV LINKS
// ─────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

// ─────────────────────────────────────────────
// SOCIAL LINKS  (Footer + any future widget)
// ─────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/kupzed", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/riza-fahdan-syahda",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:rizafahdansyahda3@gmail.com", label: "Email" },
];

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────

export const heroData: HeroData = {
  typewriterTexts: [
    "Hi! I'm Riza Fahdan Syahda 👋",
    "Or you can call me Kupzed 👋",
  ],
  contactHref: "https://t.me/kupzed",
  resumeHref:
    "https://drive.google.com/file/d/1752AUQMoKYAMlMwdAe3U5eQZUnSWwl1n/view?usp=drive_link",
};

// ─────────────────────────────────────────────
// ABOUT SECTION — info cards
// ─────────────────────────────────────────────

export const aboutCards: AboutCard[] = [
  {
    icon: Code,
    title: "Top Skills",
    text: "React JS, SvelteKit, Next.js, Laravel.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Information Systems graduate from Gunadarma University",
  },
  {
    icon: Briefcase,
    title: "Projects",
    text: "Built multiple fullstack apps.",
  },
];

// ─────────────────────────────────────────────
// SKILLS SECTION
// ─────────────────────────────────────────────

export const skillsByTab: Record<SkillTab, Skill[]> = {
  Frontend: [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      darkColor: "#ffffff",
    },
    { name: "SvelteKit", icon: SiSvelte, color: "#FF3E00" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer", icon: SiFramer, color: "#0055FF" },
    { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
    { name: "Axios", icon: SiAxios, color: "#5A29E4" },
  ],
  Backend: [
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
    { name: "Java", icon: FileCode2 as Skill["icon"], color: "#ED8B00" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "Firebase", icon: SiFirebase, color: "#DD2C00" },
    { name: "Prisma", icon: SiPrisma, color: "#3178C6" },
    { name: "Sequelize", icon: SiSequelize, color: "#01AFEF" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#306095" },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#000000",
      darkColor: "#ffffff",
    },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
      color: "#000000",
      darkColor: "#ffffff",
    },
  ],
  "Tools & Tech": [
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "NPM", icon: SiNpm, color: "#CB3837" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Vercel", icon: SiVercel, color: "#000000", darkColor: "#ffffff" },
    { name: "Apache", icon: SiApache, color: "#D22128" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "Framer", icon: SiFramer, color: "#0055FF" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717", darkColor: "#e6edf3" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
    { name: "Docker", icon: SiDocker, color: "#000000", darkColor: "#ffffff" },
    {
      name: "Smart Contracts",
      icon: FileCode2 as Skill["icon"],
      color: "#8B5CF6",
    },
    { name: "Web3", icon: SiWeb3Dotjs, color: "#F16822" },
    {
      name: "Solidity",
      icon: SiSolidity,
      color: "#000000",
      darkColor: "#ffffff",
    },
    {
      name: "Anthropic",
      icon: SiAnthropic,
      color: "#000000",
      darkColor: "#ffffff",
    },
    {
      name: "Google Gemini",
      icon: SiGooglegemini,
      color: "#000000",
      darkColor: "#ffffff",
    },
    { name: "OpenAI", icon: SiOpenai, color: "#000000", darkColor: "#ffffff" },
  ],
  Design: [
    { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
    { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#00A1EF" },
    { name: "Adobe Lightroom", icon: SiAdobelightroom, color: "#31A8FF" },
    { name: "Adobe Premiere Pro", icon: SiAdobepremierepro, color: "#9999FF" },
    {
      name: "Adobe After Effects",
      icon: SiAdobeaftereffects,
      color: "#9999FF",
    },
    { name: "Adobe Audition", icon: SiAdobeaudition, color: "#00E4B5" },
    {
      name: "Adobe Acrobat XI Pro",
      icon: SiAdobeacrobatreader,
      color: "#FF0000",
    },
    {
      name: "CorelDRAW",
      icon: SiCoreldraw,
      color: "#000000",
      darkColor: "#ffffff",
    },
    { name: "Canva", icon: SiCanva, color: "#00C4CC" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Behance", icon: SiBehance, color: "#1769FF" },
  ],
};

// ─────────────────────────────────────────────
// PORTFOLIO / PROJECTS
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Project Management System",
    description:
      "A robust enterprise resource and project management system built to streamline business operations. Features include comprehensive modules for managing projects, partners (Mitras), financial records, certificates, and daily activities with file attachment support. The platform ensures secure data handling through JWT authentication and role-based access control (RBAC), complemented by an interactive dashboard for seamless monitoring.",
    tech: [
      { icon: SiSvelte, color: "#FF3E00", label: "SvelteKit" },
      { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
      { icon: SiVite, color: "#646CFF", label: "Vite" },
      { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
      { icon: SiPhp, color: "#777BB4", label: "PHP" },
      { icon: SiLaravel, color: "#FF2D20", label: "Laravel" },
      { icon: SiMysql, color: "#4479A1", label: "MySQL" },
      {
        icon: SiJsonwebtokens,
        color: "#000000",
        darkColor: "#ffffff",
        label: "JWT Auth",
      },
      { icon: SiAxios, color: "#5A29E4", label: "Axios" },
      { icon: SiBootstrap, color: "#7952B3", label: "Bootstrap" },
      { icon: SiNpm, color: "#CB3837", label: "NPM" },
      { icon: SiApache, color: "#D62D20", label: "Apache" },
      { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
      { icon: SiGit, color: "#F05032", label: "Git" },
      {
        icon: SiGithub,
        color: "#181717",
        darkColor: "#e6edf3",
        label: "GitHub",
      },
      { icon: SiGithubactions, color: "#2088FF", label: "GitHub Actions" },
      { icon: SiLinux, color: "#FCC624", label: "Linux" },
      { icon: SiUbuntu, color: "#E95420", label: "Ubuntu" },
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/indogreen/project-management",
        variant: "primary",
      },
      {
        label: "Backend",
        href: "https://github.com/indogreen/project-management",
        variant: "secondary",
      },
    ],
    thumbnail: "/projects/project-management.png",
  },
  {
    title: "My Portfolio",
    description:
      "A modern, responsive personal portfolio website crafted to showcase projects, skills, and professional background. Built with Next.js 16 and React 19 on a TypeScript foundation, the site features a sleek dark/light theme system powered by next-themes, fluid page animations using Framer Motion, and a fully responsive layout styled with Tailwind CSS v4. Key highlights include an animated typing hero section, an interactive project gallery with detail modals, a categorized skills showcase, and a functional contact form.",
    tech: [
      {
        icon: SiNextdotjs,
        color: "#000000",
        darkColor: "#ffffff",
        label: "Next.js",
      },
      { icon: SiReact, color: "#61DAFB", label: "React" },
      { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
      { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
      { icon: SiFramer, color: "#0055FF", label: "Framer Motion" },
      { icon: SiNpm, color: "#CB3837", label: "NPM" },
      { icon: SiGit, color: "#F05032", label: "Git" },
      {
        icon: SiGithub,
        color: "#181717",
        darkColor: "#e6edf3",
        label: "GitHub",
      },
      { icon: SiGithubactions, color: "#2088FF", label: "GitHub Actions" },
      {
        icon: SiVercel,
        color: "#000000",
        darkColor: "#ffffff",
        label: "Vercel",
      },
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://kupzed.vercel.app",
        variant: "primary",
      },
      {
        label: "Source Code",
        href: "https://github.com/kupzed/my-portfolio",
        variant: "secondary",
      },
    ],
    thumbnail: "/projects/my-portfolio.png",
  },
  {
    title: "Project Management System V2",
    description:
      "The second iteration of the enterprise management platform, featuring a completely overhauled, highly responsive user interface. This version focuses on a superior user experience by introducing dark mode support, a more intuitive modern layout, and advanced data filtering systems optimized separately for mobile and desktop views. It seamlessly connects to the existing secure backend to manage projects, financial records, partners, and certificates with improved speed and accessibility.",
    tech: [
      { icon: SiSvelte, color: "#FF3E00", label: "SvelteKit" },
      { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
      { icon: SiVite, color: "#646CFF", label: "Vite" },
      { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
      { icon: SiPhp, color: "#777BB4", label: "PHP" },
      { icon: SiLaravel, color: "#FF2D20", label: "Laravel" },
      { icon: SiMysql, color: "#4479A1", label: "MySQL" },
      {
        icon: SiJsonwebtokens,
        color: "#000000",
        darkColor: "#ffffff",
        label: "JWT Auth",
      },
      { icon: SiBootstrap, color: "#7952B3", label: "Bootstrap" },
      { icon: SiNpm, color: "#CB3837", label: "NPM" },
      { icon: SiApache, color: "#D62D20", label: "Apache" },
      { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
      { icon: SiGit, color: "#F05032", label: "Git" },
      {
        icon: SiGithub,
        color: "#181717",
        darkColor: "#e6edf3",
        label: "GitHub",
      },
      { icon: SiGithubactions, color: "#2088FF", label: "GitHub Actions" },
      { icon: SiLinux, color: "#FCC624", label: "Linux" },
      { icon: SiUbuntu, color: "#E95420", label: "Ubuntu" },
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/indogreen/project-management",
        variant: "primary",
      },
      {
        label: "Backend",
        href: "https://github.com/indogreen/project-management",
        variant: "secondary",
      },
    ],
    thumbnail: "/projects/project-management-v2.png",
  },
  {
    title: "Inner Strength",
    description:
      "Sebuah platform kesehatan mental komprehensif yang dirancang untuk membantu pengguna mengelola kondisi psikologis seperti Anxiety, Bipolar, dan Depresi. Fitur utama mencakup sistem konsultasi online/offline dengan terapis profesional, komunitas berbagi antar pengguna, konten edukasi interaktif, serta dashboard manajemen data pasien dan jadwal konsultasi yang terintegrasi.",
    tech: [
      { icon: SiReact, color: "#61DAFB", label: "React.js" },
      { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
      { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
      { icon: SiNodedotjs, color: "#339933", label: "Node.js" },
      {
        icon: SiExpress,
        color: "#000000",
        darkColor: "#ffffff",
        label: "Express.js",
      },
      { icon: SiMysql, color: "#4479A1", label: "MySQL" },
      { icon: SiSequelize, color: "#52B0E7", label: "Sequelize" },
      { icon: SiAxios, color: "#5A29E4", label: "Axios" },
      { icon: SiReactrouter, color: "#CA4245", label: "React Router" },
      { icon: SiNpm, color: "#CB3837", label: "NPM" },
      { icon: SiApache, color: "#D62D20", label: "Apache" },
      { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
      { icon: SiGit, color: "#F05032", label: "Git" },
      {
        icon: SiGithub,
        color: "#181717",
        darkColor: "#e6edf3",
        label: "GitHub",
      },
      { icon: SiGithubactions, color: "#2088FF", label: "GitHub Actions" },
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/kupzed/InnerStrength-Full",
        variant: "primary",
      },
      {
        label: "Backend",
        href: "https://github.com/kupzed/InnerStrength-Full",
        variant: "secondary",
      },
    ],
    thumbnail: "/projects/innerstrength.png",
  },
  {
    title: "Graphic Design & Photography Portfolio",
    description:
      "A comprehensive showcase of creative works featuring graphic design, professional photography, and user interface design. This portfolio highlights expertise in social media design, branding, visual identification, and creative content creation.",
    tech: [
      {
        icon: SiAdobeillustrator,
        color: "#FF9A00",
        label: "Adobe Illustrator",
      },
      { icon: SiAdobephotoshop, color: "#31A8FF", label: "Adobe Photoshop" },
      { icon: SiAdobelightroom, color: "#31A8FF", label: "Adobe Lightroom" },
      {
        icon: SiAdobeacrobatreader,
        color: "#FF0000",
        label: "Adobe Acrobat XI Pro",
      },
      { icon: SiBehance, color: "#1769FF", label: "Behance" },
    ],
    links: [
      {
        label: "Behance",
        href: "https://www.behance.net/gallery/186828953/Graphic-Design-and-Photography-Portfolio",
        variant: "primary",
      },
      {
        label: "Files",
        href: "https://drive.google.com/file/d/1sYY7UXvSd7d_aamqVoAYvFtopnpI43ql/view?usp=sharing",
        variant: "secondary",
      },
    ],
    thumbnail: "/projects/graphic-design-portfolio.png",
  },
  {
    title: "Go Travel",
    description:
      "A comprehensive UI/UX mockup for an open and private trip application focused on nature tourism. Designed to simplify travel planning, the prototype features intuitive destination discovery, quick reviews, an integrated booking and payment system, as well as real-time messaging. The interface was carefully crafted to ensure a seamless and engaging user experience for travelers.",
    tech: [{ icon: SiFigma, color: "#F24E1E", label: "Figma" }],
    links: [
      {
        label: "Prototype",
        href: "https://www.figma.com/proto/Hn9TuKyPPGrfJ3WKZ8o5Zr/Go-Travel?node-id=34-11409&p=f&t=MUXUc93hgzurvwQP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A8998",
        variant: "primary",
      },
      {
        label: "Design",
        href: "https://www.figma.com/design/Hn9TuKyPPGrfJ3WKZ8o5Zr/Go-Travel?node-id=0-1&t=PAR1i2kolXYbRXig-1",
        variant: "secondary",
      },
    ],
    thumbnail: "/projects/gotravel.png",
  },
  {
    title: "Pencatatan Keuangan",
    description:
      "A comprehensive UI/UX design for an Android-based personal financial tracking application. Developed using the Design Thinking methodology, this project focuses on creating an intuitive and user-friendly mobile experience to help users effortlessly record, monitor, and manage their daily income and expenses.",
    tech: [{ icon: SiFigma, color: "#F24E1E", label: "Figma" }],
    links: [
      {
        label: "Prototype",
        href: "https://www.figma.com/proto/X7wjaJqbbG5x1nvxMOfcbA/Pencatatan-Keuangan?node-id=34-11409&p=f&t=MUXUc93hgzurvwQP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A8998",
        variant: "primary",
      },
      {
        label: "Design",
        href: "https://www.figma.com/design/X7wjaJqbbG5x1nvxMOfcbA/Pencatatan-Keuangan?t=PAR1i2kolXYbRXig-1",
        variant: "secondary",
      },
    ],
    thumbnail: "/projects/pencatatan-keuangan.png",
  },
];
