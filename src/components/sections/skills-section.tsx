"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { skillsByTab, SKILL_TABS } from "@/lib/data";
import type { Skill, SkillTab } from "@/lib/data";
import {
  blurIn,
  scaleIn,
  staggerWithExit,
  cardReveal,
  viewportOnceMore,
} from "@/lib/motion";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillTab>("Frontend");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const getIconColor = (skill: Skill) =>
    isDark && skill.darkColor ? skill.darkColor : skill.color;

  return (
    <section id="skills" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={blurIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceMore}
          className="mb-12 text-center font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceMore}
          className="mb-10 flex justify-center"
        >
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex gap-0 border-b border-border-light dark:border-border"
          >
            {SKILL_TABS.map((tab) => (
              <motion.button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`skills-panel-${tab}`}
                onClick={() => setActiveTab(tab)}
                suppressHydrationWarning
                whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                whileTap={shouldReduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative -mb-px border-b-2 px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? "border-accent text-background dark:text-foreground"
                    : "border-transparent text-gray-500 hover:text-background dark:text-foreground/40 dark:hover:text-foreground/70"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`skills-panel-${activeTab}`}
              role="tabpanel"
              aria-label={`${activeTab} skills`}
              variants={staggerWithExit}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5"
            >
              {skillsByTab[activeTab].map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardReveal}
                  whileHover={shouldReduce ? undefined : { y: -4, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="supabase-card group flex flex-col items-center justify-center gap-4 p-6 sm:p-8"
                >
                  <motion.div
                    whileHover={
                      shouldReduce ? undefined : { rotate: [0, -10, 10, 0] }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <skill.icon
                      size={48}
                      style={{ color: getIconColor(skill) }}
                      aria-hidden="true"
                    />
                  </motion.div>
                  <span className="text-center text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900 dark:text-white/60 dark:group-hover:text-white/90">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
