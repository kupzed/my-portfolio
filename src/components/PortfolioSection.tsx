"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiReactrouter,
  SiTailwindcss,
  SiAxios,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiSequelize,
  SiFigma,
  SiTypescript,
  SiJavascript,
  SiFramer,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobeacrobatreader,
  SiBehance,
  SiExpress,
  SiJsonwebtokens,
  SiVercel,
  SiPhp,
  SiVite,
  SiBootstrap,
  SiNpm,
  SiApache,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiLinux,
  SiUbuntu,
} from "react-icons/si";
import type { IconType } from "react-icons";

/* ── Types ── */
interface TechIcon {
  icon: IconType;
  color: string;
  darkColor?: string;
  label: string;
}

interface ProjectLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface Project {
  title: string;
  description: string;
  tech: TechIcon[];
  links: ProjectLink[];
  thumbnail: string;
}

/* ── Project data ── */
const projects: Project[] = [
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
        href: "https://github.com/kupzed/indogreen-frontend",
        variant: "primary",
      },
      {
        label: "Backend",
        href: "https://github.com/kupzed/indogreen-backend",
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
        label: "Frontend",
        href: "https://github.com/kupzed/my-portfolio",
        variant: "primary",
      },
      {
        label: "Backend",
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
        href: "https://github.com/kupzed/indogreen-frontend-v2",
        variant: "primary",
      },
      {
        label: "Backend",
        href: "https://github.com/kupzed/indogreen-backend",
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

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalContent = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2 },
  },
};

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const getIconColor = (t: TechIcon) =>
    isDark && t.darkColor ? t.darkColor : t.color;

  // ── Scroll lock when modal is open ──
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section id="portfolio" className="relative px-5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* ── Heading ── */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="mb-14 text-center font-serif text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            My Portfolio
          </motion.h2>

          {/* ── Project Cards Grid ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-white/10 dark:bg-[#111027]"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="eager"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-3 text-base font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Tech icons */}
                  <div className="mb-4 flex flex-wrap items-center gap-2.5">
                    {project.tech.map((t) => (
                      <t.icon
                        key={t.label}
                        size={18}
                        style={{ color: getIconColor(t) }}
                        title={t.label}
                        className="dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.1)]"
                      />
                    ))}
                  </div>

                  {/* Detail button */}
                  <button
                    onClick={() => setSelected(project)}
                    suppressHydrationWarning
                    className="btn-scale mt-auto w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500"
                  >
                    Detail
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl dark:bg-[#0e0b1e] dark:border dark:border-white/10"
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Close modal"
                suppressHydrationWarning
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X size={18} />
              </button>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Project Description
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
                {selected.description}
              </p>

              {/* Tools */}
              <div className="mb-8">
                <span className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Tools:
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {selected.tech.map((t) => (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-1.5"
                    >
                      <t.icon size={22} style={{ color: getIconColor(t) }} />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {t.label}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <span className="mr-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Go to:
                </span>
                {selected.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-scale inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${
                      link.variant === "primary"
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-rose-500 text-white hover:bg-rose-600"
                    }`}
                  >
                    {link.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
