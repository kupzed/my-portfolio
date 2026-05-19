import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";
import { TechList, type IconColorGetter } from "./tech-list";

interface ProjectDetailProps {
  project: Project;
  getIconColor: IconColorGetter;
  titleId: string;
}

export function ProjectDetail({
  project,
  getIconColor,
  titleId,
}: ProjectDetailProps) {
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
        id={titleId}
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
              key={link.id}
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
