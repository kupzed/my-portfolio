"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import Modal from "../ui/modal";
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

type IconColorGetter = (tech: TechIcon) => string;

interface TechListProps {
  tech: TechIcon[];
  getIconColor: IconColorGetter;
  limit?: number;
  size?: number;
  showLabels?: boolean;
}

interface ProjectCardProps {
  project: Project;
  getIconColor: IconColorGetter;
  onOpen: (project: Project) => void;
  shouldReduce: boolean;
  compact?: boolean;
}

function TechList({
  tech,
  getIconColor,
  limit,
  size = 18,
  showLabels = false,
}: TechListProps) {
  const visibleTech = limit ? tech.slice(0, limit) : tech;
  const hiddenCount = limit ? Math.max(tech.length - limit, 0) : 0;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {visibleTech.map((item) => (
        <span
          key={item.label}
          className={
            showLabels
              ? "inline-flex items-center gap-1.5 rounded-full border border-border-light px-2.5 py-1 text-xs text-gray-600 dark:border-border dark:text-gray-300"
              : "inline-flex items-center"
          }
          title={item.label}
        >
          <item.icon
            size={size}
            style={{ color: getIconColor(item) }}
            aria-hidden="true"
            className="dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.1)]"
          />
          {showLabels && <span>{item.label}</span>}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className="rounded-full border border-border-light px-2.5 py-1 text-xs font-medium text-gray-500 dark:border-border dark:text-gray-400">
          +{hiddenCount}
        </span>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  getIconColor,
  onOpen,
  shouldReduce,
  compact = false,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={cardReveal}
      whileHover={shouldReduce ? undefined : { y: compact ? -4 : -6 }}
      whileTap={shouldReduce ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl supabase-card dark:shadow-none transition-colors hover:shadow-md dark:hover:shadow-none"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          fill
          sizes={
            compact
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          priority={project.featured}
          className="object-cover transition-[transform,filter] duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-background">
              <Sparkles size={13} aria-hidden="true" />
              Featured
            </span>
          )}
          {project.status && (
            <span className="rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
              {project.status}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          <span>{project.type}</span>
          {project.year && (
            <>
              <span aria-hidden="true">/</span>
              <span>{project.year}</span>
            </>
          )}
        </div>

        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{project.role}</p>

        <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {project.impact}
        </p>

        {!compact && (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5">
          <TechList
            tech={project.tech}
            getIconColor={getIconColor}
            limit={compact ? 6 : 8}
          />
        </div>

        <motion.button
          type="button"
          onClick={() => onOpen(project)}
          suppressHydrationWarning
          whileHover={shouldReduce ? undefined : { scale: 1.03 }}
          whileTap={shouldReduce ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="btn-scale btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors"
          aria-label={`View ${project.title} case study details`}
        >
          View case study
          <ArrowUpRight size={15} aria-hidden="true" />
        </motion.button>
      </div>
    </motion.article>
  );
}

function ProjectDetail({
  project,
  getIconColor,
}: {
  project: Project;
  getIconColor: IconColorGetter;
}) {
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        <span>{project.type}</span>
        {project.year && (
          <>
            <span aria-hidden="true">/</span>
            <span>{project.year}</span>
          </>
        )}
        {project.status && (
          <>
            <span aria-hidden="true">/</span>
            <span>{project.status}</span>
          </>
        )}
      </div>

      <h3
        id="project-modal-title"
        className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {project.title}
      </h3>
      <p className="mt-2 text-sm font-semibold text-accent">{project.role}</p>

      <p className="mt-5 rounded-lg border border-border-light bg-black/5 p-4 text-sm leading-relaxed text-gray-700 dark:border-border dark:bg-white/5 dark:text-gray-200 md:text-base">
        {project.impact}
      </p>

      <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
        {project.description}
      </p>

      <div className="mt-6">
        <span className="mb-3 block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Key responsibilities
        </span>
        <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <span className="mb-3 block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Tools and stack
        </span>
        <TechList
          tech={project.tech}
          getIconColor={getIconColor}
          size={18}
          showLabels
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          Open project:
        </span>
        <div className="flex flex-wrap items-center gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} ${link.label} in a new tab`}
              className={`btn-scale inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${
                link.variant === "primary" ? "btn-primary" : "btn-secondary"
              }`}
            >
              {link.label}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const getIconColor = (tech: TechIcon) =>
    isDark && tech.darkColor ? tech.darkColor : tech.color;
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <section id="project" className="relative px-5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceMore}
            className="mb-14 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500"
            >
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Selected fullstack work
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base"
            >
              A curated view of systems I have built or shaped, with the role,
              stack, and project outcomes made easy to scan.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerCards}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                getIconColor={getIconColor}
                onOpen={setSelected}
                shouldReduce={Boolean(shouldReduce)}
              />
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-16"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  More proof
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                  Supporting projects and design work
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Additional frontend, UI/UX, and creative projects that round
                out the product-building background.
              </p>
            </motion.div>

            <motion.div
              variants={staggerCards}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {supportingProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  getIconColor={getIconColor}
                  onOpen={setSelected}
                  shouldReduce={Boolean(shouldReduce)}
                  compact
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        titleId="project-modal-title"
      >
        {selected && (
          <ProjectDetail project={selected} getIconColor={getIconColor} />
        )}
      </Modal>
    </>
  );
}
