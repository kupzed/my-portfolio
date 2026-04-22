"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiReactrouter,
  SiBootstrap,
  SiTailwindcss,
  SiAxios,
  SiPhp,
  SiLaravel,
  SiPython,
  SiNodedotjs,
  SiGo,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiFirebase,
  SiPrisma,
  SiSequelize,
  SiPostgresql,
  SiExpress,
  SiJsonwebtokens,
  SiVite,
  SiNpm,
  SiPostman,
  SiVercel,
  SiApache,
  SiWordpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiLinux,
  SiUbuntu,
  SiWeb3Dotjs,
  SiSolidity,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiCoreldraw,
  SiAdobeacrobatreader,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiCanva,
  SiBehance,
  SiAnthropic,
  SiGooglegemini,
  SiOpenai,
  SiDocker,
} from "react-icons/si";
import { FileCode2 } from "lucide-react";
import { skillsByTab, SKILL_TABS } from "@/lib/data";
import type { Skill, SkillTab } from "@/lib/data";
import {
  blurIn,
  scaleIn,
  staggerWithExit,
  cardReveal,
  viewportOnceMore,
} from "@/lib/motion";

// Re-export icon imports so tree-shaking keeps them (they're referenced via data.ts)
void [
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiReactrouter,
  SiBootstrap,
  SiTailwindcss,
  SiAxios,
  SiPhp,
  SiLaravel,
  SiPython,
  SiNodedotjs,
  SiGo,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiFirebase,
  SiPrisma,
  SiSequelize,
  SiPostgresql,
  SiExpress,
  SiJsonwebtokens,
  SiVite,
  SiNpm,
  SiPostman,
  SiVercel,
  SiApache,
  SiWordpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiLinux,
  SiUbuntu,
  SiWeb3Dotjs,
  SiSolidity,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiCoreldraw,
  SiAdobeacrobatreader,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiCanva,
  SiBehance,
  SiAnthropic,
  SiGooglegemini,
  SiOpenai,
  SiDocker,
  FileCode2,
];

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
        {/* ── Heading — blurIn for cinematic focus ── */}
        <motion.h2
          variants={blurIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceMore}
          className="mb-12 text-center font-serif text-4xl font-bold tracking-tight text-gray-900 dark:bg-linear-to-r dark:from-white dark:via-purple-200 dark:to-purple-400 dark:bg-clip-text dark:text-transparent sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          My Skills
        </motion.h2>

        {/* ── Tab Navigation with sliding pill ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceMore}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/50 p-1.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            {SKILL_TABS.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                suppressHydrationWarning
                whileHover={shouldReduce ? undefined : { scale: 1.03 }}
                whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative rounded-full px-5 py-2.5 text-xs md:text-base font-medium transition-colors duration-200"
              >
                {/* Sliding pill indicator */}
                {activeTab === tab && (
                  <motion.div
                    layoutId="skill-tab-pill"
                    className="absolute inset-0 rounded-full bg-gray-900 shadow-lg dark:bg-purple-600"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
                >
                  {tab}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Skill Cards Grid ── */}
        <div className="min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
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
                  whileHover={
                    shouldReduce ? undefined : { y: -4, scale: 1.03 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="skill-card-glow group flex flex-col items-center justify-center gap-4 rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111027] dark:hover:border-white/20 sm:p-8"
                >
                  <motion.div
                    whileHover={
                      shouldReduce
                        ? undefined
                        : { rotate: [0, -10, 10, 0] }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <skill.icon
                      size={48}
                      style={{ color: getIconColor(skill) }}
                      className="dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                    />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
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
