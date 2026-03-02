"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const inputClasses =
  "w-full rounded-xl border border-black/20 bg-transparent px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-black/50 focus:ring-1 focus:ring-black/20 dark:border-white/20 dark:text-white dark:placeholder-gray-500 dark:focus:border-white/50 dark:focus:ring-white/20";

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        {/* ── Header ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
            I&apos;d love to hear from you! If you have any questions, comments,
            or feedback, please use the form below.
          </motion.p>
        </motion.div>

        {/* ── Form ── */}
        <motion.form
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name & Email row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <input
              type="text"
              placeholder="Enter your name"
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className={inputClasses}
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp}>
            <textarea
              rows={5}
              placeholder="Enter your message"
              className={`${inputClasses} min-h-[150px] resize-none`}
            />
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeUp} className="flex justify-center pt-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-900 bg-transparent px-7 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
            >
              Submit now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
