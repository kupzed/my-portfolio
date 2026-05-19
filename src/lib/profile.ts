import { Github, Linkedin, Mail } from "lucide-react";
import type { HeroData, NavLink, SocialLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "project", label: "Project", href: "#project" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { id: "github", icon: Github, href: "https://github.com/kupzed", label: "GitHub" },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://linkedin.com/in/riza-fahdan-syahda",
    label: "LinkedIn",
  },
  { id: "email", icon: Mail, href: "mailto:rizafahdansyahda3@gmail.com", label: "Email" },
];

export const heroData: HeroData = {
  role: "Fullstack Developer",
  description:
    "I build production-minded web applications from responsive interfaces to backend APIs, databases, authentication, and deployment. Based in Bogor, Indonesia, I work across Next.js, React, SvelteKit, Laravel, Supabase, and PostgreSQL.",
  typewriterTexts: [
    "Hi, I'm Riza Fahdan Syahda.",
    "I turn product ideas into reliable web apps.",
  ],
  contactHref: "https://wa.me/+628988449176",
  resumeHref:
    "https://drive.google.com/file/d/1752AUQMoKYAMlMwdAe3U5eQZUnSWwl1n/view?usp=drive_link",
  trustSignals: [
    "Next.js and React UI",
    "Laravel and REST APIs",
    "Supabase Auth and PostgreSQL",
    "Deployment-ready delivery",
  ],
  quickStats: [
    { id: "projects-shipped", value: "8+", label: "Projects shipped" },
    { id: "production-apps", value: "2", label: "Production apps" },
    { id: "fullstack-scope", value: "Fullstack", label: "Frontend to database" },
  ],
};
