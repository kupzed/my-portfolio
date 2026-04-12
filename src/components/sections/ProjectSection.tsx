"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Modal from "../ui/Modal";
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
import { projects } from "@/lib/data";
import type { Project, TechIcon } from "@/lib/data";

// Retained so bundler doesn't tree-shake icons referenced through data objects
void [
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
];

/* ── Animation variants ── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

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

  return (
    <>
      <section id="project" className="relative px-5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* ── Heading ── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500"
            >
              PORTFOLIO
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Selected Works
            </motion.h2>
          </motion.div>

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
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
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
          </>
        )}
      </Modal>
    </>
  );
}
