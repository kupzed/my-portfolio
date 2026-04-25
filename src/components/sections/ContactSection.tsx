"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  stagger,
  fadeUp,
  slideLeft,
  viewportOnce,
  viewportOnceMore,
} from "@/lib/motion";

const inputClasses =
  "input-glow w-full rounded-md border border-border-light dark:border-border bg-black/5 dark:bg-surface px-4 py-3 text-background dark:text-foreground placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/10";

export default function ContactSection() {
  const shouldReduce = useReducedMotion();
  return (
    <section id="contact" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceMore}
          className="mb-10 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500"
          >
            Connect with me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-4 font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            Get in touch
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-10 text-base leading-relaxed text-gray-600 dark:text-white/50 md:text-lg"
          >
            Feel free to contact me. My inbox is always open. Whether you have
            any questions or just want to say hello, I&apos;ll try my best to
            back to you!
          </motion.p>
        </motion.div>

        {/* ── Form ── */}
        <motion.form
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 space-y-5"
          action="https://formspree.io/f/mojkavgj"
          method="POST"
        >
          <motion.div
            variants={slideLeft}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              suppressHydrationWarning
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              suppressHydrationWarning
              className={inputClasses}
            />
          </motion.div>

          <motion.div variants={slideLeft}>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Enter your message"
              className={`${inputClasses} min-h-[150px] resize-none`}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center pt-2">
            <motion.button
              type="submit"
              suppressHydrationWarning
              whileHover={shouldReduce ? undefined : { scale: 1.05 }}
              whileTap={shouldReduce ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="btn-scale btn-primary inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold transition-colors"
            >
              Submit now
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
