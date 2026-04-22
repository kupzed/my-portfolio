"use client";

import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { fadeIn, stagger, viewportOnce } from "@/lib/motion";

export default function Footer() {
  const shouldReduce = useReducedMotion();
  return (
    <motion.footer
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="border-t border-black/10 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 text-center">
        {/* Logo */}
        <motion.p
          variants={fadeIn}
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Kupzed<span className="text-accent">.</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeIn}
          className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500 dark:text-white/60"
        >
          A Full-stack Developer &amp; Tech Enthusiast exploring AI &amp; Web3.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          variants={fadeIn}
          className="mt-6 flex items-center justify-center gap-6"
        >
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={shouldReduce ? undefined : { y: -3, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white"
            >
              <s.icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          variants={fadeIn}
          className="mt-8 text-xs text-gray-400/80 dark:text-white/30"
        >
          © 2026 Riza Fahdan Syahda. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
