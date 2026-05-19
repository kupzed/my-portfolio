"use client";

import { motion, useReducedMotion } from "framer-motion";
import { slideUpFade } from "@/lib/motion";
import { allSkills } from "@/lib/skills";

export interface SkillsMarqueeProps {
  duration?: number;
  iconSize?: number;
  showLabel?: boolean;
}

export function SkillsMarquee({
  duration = 40,
  iconSize = 40,
  showLabel = true,
}: SkillsMarqueeProps) {
  const shouldReduce = useReducedMotion();
  const skillRows = shouldReduce ? [allSkills] : [allSkills, allSkills];

  return (
    <motion.div
      variants={slideUpFade}
      className="skills-marquee-mask my-16 w-full max-w-[100vw] overflow-hidden"
      aria-label="Technology stack carousel"
    >
      <div
        className={
          shouldReduce
            ? "flex w-max py-4"
            : "skills-marquee-track flex w-max py-4"
        }
        style={
          {
            "--marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        {skillRows.map((row, rowIndex) => (
          <div
            key={rowIndex === 0 ? "primary-skills" : "duplicate-skills"}
            aria-hidden={rowIndex > 0}
            className="flex w-max items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-12 md:pr-12"
          >
            {row.map((tech) => (
              <div
                key={`${rowIndex}-${tech.id}`}
                className="group flex cursor-default items-center gap-3"
              >
                <tech.icon
                  size={iconSize}
                  className="text-(--icon-color) dark:text-(--icon-dark) opacity-70 grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  style={
                    {
                      "--icon-color": tech.color,
                      "--icon-dark": tech.darkColor || tech.color,
                    } as React.CSSProperties
                  }
                  aria-hidden="true"
                />
                {showLabel && (
                  <span className="text-sm font-semibold text-gray-500 transition-colors duration-300 group-hover:text-gray-900 dark:text-white/50 dark:group-hover:text-white sm:text-base">
                    {tech.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
