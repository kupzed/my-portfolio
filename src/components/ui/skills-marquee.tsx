"use client";

import { motion } from "framer-motion";
import { slideUpFade } from "@/lib/motion";
import { skillsByTab } from "@/lib/data";

const allSkills = Object.values(skillsByTab).flat();

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
  return (
    <motion.div
      variants={slideUpFade}
      className="my-16 w-full max-w-[100vw] overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex w-max py-4 hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${duration}s linear infinite` }}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex w-max items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-12 md:pr-12"
          >
            {allSkills.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
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
