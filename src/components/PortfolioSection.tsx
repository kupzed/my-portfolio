"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import {
  SiSvelte,
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiWeb3Dotjs,
  SiNodedotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

/* ── Types ── */
interface TechIcon {
  icon: IconType;
  color: string;
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
  gradient: string; // thumbnail gradient
}

/* ── Project data ── */
const projects: Project[] = [
  {
    title: "Project Management System",
    description:
      "A comprehensive project management web application designed to track tasks, manage team collaboration, and monitor productivity. Features include role-based access control, real-time updates, and an intuitive dashboard.",
    tech: [
      { icon: SiSvelte, color: "#FF3E00", label: "Svelte" },
      { icon: SiLaravel, color: "#FF2D20", label: "Laravel" },
      { icon: SiMysql, color: "#4479A1", label: "MySQL" },
      { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
    ],
    links: [
      { label: "Frontend", href: "#", variant: "primary" },
      { label: "Backend", href: "#", variant: "secondary" },
    ],
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    title: "Web3 Crypto Tracker",
    description:
      "A cryptocurrency portfolio tracking application that allows users to monitor their digital assets in real-time, view historical charts, and track market trends using blockchain APIs.",
    tech: [
      { icon: SiNextdotjs, color: "#000000", label: "Next.js" },
      { icon: SiReact, color: "#61DAFB", label: "React" },
      { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
      { icon: SiWeb3Dotjs, color: "#F16822", label: "Web3.js" },
    ],
    links: [
      { label: "Live Demo", href: "#", variant: "primary" },
      { label: "Source Code", href: "#", variant: "secondary" },
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Company Profile CMS",
    description:
      "A dynamic company profile website with a custom Content Management System (CMS) allowing the admin to easily manage services, blog posts, and contact inquiries without touching the code.",
    tech: [
      { icon: SiNextdotjs, color: "#000000", label: "Next.js" },
      { icon: SiNodedotjs, color: "#5FA04E", label: "Node.js" },
      { icon: SiMysql, color: "#4479A1", label: "MySQL" },
    ],
    links: [{ label: "Live Demo", href: "#", variant: "primary" }],
    gradient: "from-orange-500 to-rose-600",
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

  return (
    <>
      <section id="portfolio" className="relative px-5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* ── Heading ── */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-white/10 dark:bg-[#111027]"
              >
                {/* Thumbnail */}
                <div
                  className={`aspect-video w-full bg-linear-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-3xl font-bold text-white/30 select-none">
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Tech icons */}
                  <div className="mb-4 flex items-center gap-2.5">
                    {project.tech.map((t) => (
                      <t.icon
                        key={t.label}
                        size={18}
                        style={{ color: t.color }}
                        title={t.label}
                        className="dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.1)]"
                      />
                    ))}
                  </div>

                  {/* Detail button */}
                  <button
                    onClick={() => setSelected(project)}
                    className="btn-scale w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500"
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
                <span className="mr-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Tools:
                </span>
                <span className="inline-flex items-center gap-3">
                  {selected.tech.map((t) => (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-1.5"
                    >
                      <t.icon size={22} style={{ color: t.color }} />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {t.label}
                      </span>
                    </span>
                  ))}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <span className="mr-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Go to project:
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
