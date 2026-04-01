"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutCards } from "@/lib/data";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

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

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const cardStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardSlideUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500"
          >
            Introduction
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* ── 2-Column Layout ── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16"
        >
          {/* ── Left: Portrait (40%) — slide from left ── */}
          <motion.div variants={slideLeft} className="lg:col-span-2">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/avatar/avatar-02.png"
                alt="Riza Fahdan Syahda — Portrait"
                fill
                sizes="(max-width: 1024px) 448px, 40vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* ── Right: Text & Cards (60%) — slide from right ── */}
          <motion.div variants={slideRight} className="lg:col-span-3">
            <p className="mb-10 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg md:leading-loose">
              Learned a lot of new technologies on my own in recent years
              through the internet. Can work well with others in a team, put in
              hard work, be flexible, have strong honesty, and communicate
              clearly. High motivation and commitment to deliver the best
              possible performance for the company.
            </p>

            {/* ── Cards Grid ── */}
            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {aboutCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={cardSlideUp}
                  className="group rounded-2xl border border-black/10 bg-white/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-black/25 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30 dark:hover:shadow-white/5"
                >
                  <card.icon
                    size={28}
                    className="mb-3 text-gray-700 dark:text-gray-300"
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
