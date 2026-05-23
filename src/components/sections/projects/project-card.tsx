import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cardReveal } from "@/lib/motion";
import type { Project } from "@/lib/types";
import { TechList, type IconColorGetter } from "./tech-list";

interface ProjectCardProps {
  project: Project;
  getIconColor: IconColorGetter;
  onOpen: (project: Project) => void;
  shouldReduce: boolean;
  compact?: boolean;
}

export function ProjectCard({
  project,
  getIconColor,
  onOpen,
  shouldReduce,
  compact = false,
}: ProjectCardProps) {
  const titleId = `project-card-title-${project.id}`;

  return (
    <motion.article
      variants={cardReveal}
      whileHover={shouldReduce ? undefined : { y: compact ? -4 : -6 }}
      whileTap={shouldReduce ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      aria-labelledby={titleId}
      className="group flex h-full flex-col overflow-hidden rounded-xl supabase-card dark:shadow-none transition-colors hover:shadow-md dark:hover:shadow-none isolate"
    >
      <div 
        className="relative aspect-video w-full overflow-hidden rounded-t-xl transition-all duration-500 cursor-pointer"
        style={{ backgroundColor: project.bgColor || "#1e293b" }}
        onClick={() => onOpen(project)}
      >
        <div className="absolute inset-0 flex items-center justify-center p-5 md:p-6 select-none">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border border-white/10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <Image
              src={project.thumbnail}
              alt={`${project.title} preview`}
              fill
              sizes={
                compact
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  : "(max-width: 1024px) 100vw, 33vw"
              }
              className="object-cover object-top transition-[filter] duration-500 group-hover:brightness-105"
            />
          </div>
        </div>

        {/* Floating action arrow button on hover */}
        <div className="absolute bottom-4 right-4 z-10 translate-y-2 scale-75 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-xs border border-white/10 hover:bg-black hover:scale-105 active:scale-95 transition-all">
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2 z-10">
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

        <h3
          id={titleId}
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
        >
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
