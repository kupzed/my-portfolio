"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  stagger,
  fadeUp,
  slideLeft,
  viewportOnce,
  viewportOnceMore,
} from "@/lib/motion";

const inputClasses =
  "w-full rounded-xl border border-black/20 bg-transparent px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-black/50 focus:ring-2 focus:ring-black/10 dark:border-white/20 dark:text-white dark:placeholder-gray-500 dark:focus:border-white/50 dark:focus:ring-white/10";

export default function ContactSection() {
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
            className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Get in touch
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400"
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
            <button
              type="submit"
              suppressHydrationWarning
              className="group inline-flex items-center gap-2 rounded-full border border-gray-900 bg-transparent px-7 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-[1.04] hover:bg-gray-900 hover:text-white active:scale-[0.98] dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
            >
              Submit now
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
