"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";
import Modal from "../ui/modal";
import { ProjectCard } from "./projects/project-card";
import { ProjectDetail } from "./projects/project-detail";
import { projects } from "@/lib/projects";
import type { Project, TechIcon } from "@/lib/types";
import {
  stagger,
  staggerCards,
  fadeUp,
  viewportOnce,
  viewportOnceMore,
} from "@/lib/motion";

const PROJECT_MODAL_TITLE_ID = "project-modal-title";
const featuredProjects = projects.filter((project) => project.featured);
const supportingProjects = projects.filter((project) => !project.featured);

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
                key={project.id}
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
                  key={project.id}
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
        titleId={PROJECT_MODAL_TITLE_ID}
      >
        {selected && (
          <ProjectDetail
            project={selected}
            getIconColor={getIconColor}
            titleId={PROJECT_MODAL_TITLE_ID}
          />
        )}
      </Modal>
    </>
  );
}
