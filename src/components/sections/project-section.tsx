"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Modal from "../ui/modal";
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
import {
  stagger,
  staggerCards,
  fadeUp,
  cardReveal,
  viewportOnce,
  viewportOnceMore,
} from "@/lib/motion";

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

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduce = useReducedMotion();

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
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceMore}
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
              className="font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Selected Works
            </motion.h2>
          </motion.div>

          {/* ── Project Cards Grid ── */}
          <motion.div
            variants={staggerCards}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardReveal}
                whileHover={shouldReduce ? undefined : { y: -6 }}
                whileTap={shouldReduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex flex-col overflow-hidden rounded-xl supabase-card dark:shadow-none transition-colors hover:shadow-md dark:hover:shadow-none"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="eager"
                    className="object-cover transition-[transform,filter] duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
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

                  {/* Detail button — motion.button with spring feedback */}
                  <motion.button
                    onClick={() => setSelected(project)}
                    suppressHydrationWarning
                    whileHover={shouldReduce ? undefined : { scale: 1.05 }}
                    whileTap={shouldReduce ? undefined : { scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="btn-scale btn-primary mt-auto w-full rounded-md px-4 py-2.5 text-sm font-semibold transition-colors"
                  >
                    Detail
                  </motion.button>
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
                  className={`btn-scale inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${
                    link.variant === "primary" ? "btn-primary" : "btn-secondary"
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
