import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface HeroData {
  role: string;
  description: string;
  typewriterTexts: string[];
  contactHref: string;
  resumeHref: string;
  trustSignals: string[];
  quickStats: {
    id: string;
    value: string;
    label: string;
  }[];
}

export interface AboutData {
  description: string;
}

export interface AboutCard {
  id: string;
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  date: string;
  details: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: string;
  date: string;
}

export type SkillTab = "Frontend" | "Backend" | "Tech" | "Design";

export interface Skill {
  id: string;
  name: string;
  icon: IconType | LucideIcon;
  color: string;
  darkColor?: string;
}

export interface TechIcon {
  id: string;
  icon: IconType;
  color: string;
  darkColor?: string;
  label: string;
}

export interface ProjectLink {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface Project {
  id: string;
  title: string;
  role: string;
  type: string;
  description: string;
  impact: string;
  highlights: string[];
  tech: TechIcon[];
  links: ProjectLink[];
  thumbnail: string;
  featured?: boolean;
  year?: string;
  status?: string;
}
