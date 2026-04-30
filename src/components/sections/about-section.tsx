"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PhotoCard from "@/components/ui/photocard";
import { Plus, Minus, Trophy } from "lucide-react";
import {
  aboutData,
  aboutCards,
  experiences,
  educations,
  certifications,
} from "@/lib/data";
import {
  stagger,
  staggerCards,
  fadeUp,
  slideLeft,
  slideRight,
  cardReveal,
  accordionTransition,
  viewportOnce,
  viewportOnceMore,
  viewportOnceLess,
} from "@/lib/motion";

export default function AboutSection() {
  const [openExp, setOpenExp] = useState<number | null>(null);
  const [openEdu, setOpenEdu] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  return (
    <section id="about" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceMore}
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
            className="font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* 2-Column Layout */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16"
        >
          {/* Left: Portrait */}
          <motion.div variants={slideLeft} className="lg:col-span-2">
            <PhotoCard
              imageSrc="/avatar/avatar-02.png"
              name="Riza Fahdan Syahda"
              subtitle="Full-Stack Engineer"
              avatarSrc="/avatar/avatar-01.png"
              username="@kupzed"
              isOnline={true}
              ctaLabel="Contact Me"
              ctaHref="https://wa.me/+628988449176"
            />
          </motion.div>

          {/* Right: Text & Cards */}
          <motion.div variants={slideRight} className="lg:col-span-3">
            <p className="mb-10 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg md:leading-loose">
              {aboutData.description}
            </p>

            {/* Cards Grid — hover lift (desktop) + tap press (mobile) */}
            <motion.div
              variants={staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {aboutCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={cardReveal}
                  whileHover={shouldReduce ? undefined : { scale: 1.03, y: -3 }}
                  whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="supabase-card group cursor-default p-5"
                >
                  <card.icon
                    size={28}
                    className="mb-3 text-background dark:text-foreground"
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-1 text-base font-bold">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Experiences Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceLess}
          className="mt-28 md:mt-36"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-12 font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Experiences
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="flex flex-col border-t border-border-light dark:border-border"
          >
            {experiences.map((exp, idx) => {
              const isOpen = openExp === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenExp(isOpen ? null : idx)}
                  className="group cursor-pointer border-b border-border-light dark:border-border py-8 hover:bg-black/5 dark:hover:bg-white/2 px-4 -mx-4 rounded-2xl transition-colors"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-accent md:text-3xl lg:text-4xl transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 md:text-base">
                        {exp.date} | {exp.company}
                      </p>
                    </div>
                    <button
                      className="mt-2 flex shrink-0 items-center justify-center text-gray-400 transition-transform duration-200 group-hover:scale-110 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-white"
                      aria-label={isOpen ? "Collapse" : "Expand"}
                    >
                      {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                    </button>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 24 : 0,
                    }}
                    transition={accordionTransition}
                    className="overflow-hidden"
                  >
                    <ul className="list-disc space-y-4 pl-5 text-sm leading-relaxed text-gray-700 marker:text-gray-400 dark:text-gray-300 md:text-base">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceLess}
          className="mt-16 md:mt-24"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-12 font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Education
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="flex flex-col border-t border-border-light dark:border-border"
          >
            {educations.map((edu, idx) => {
              const isOpen = openEdu === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenEdu(isOpen ? null : idx)}
                  className="group cursor-pointer border-b border-border-light dark:border-border py-8 hover:bg-black/5 dark:hover:bg-white/2 px-4 -mx-4 rounded-2xl transition-colors"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-accent md:text-3xl lg:text-4xl transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 md:text-base">
                        {edu.date} | {edu.school}
                      </p>
                    </div>
                    <button
                      className="mt-2 flex shrink-0 items-center justify-center text-gray-400 transition-transform duration-200 group-hover:scale-110 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-white"
                      aria-label={isOpen ? "Collapse" : "Expand"}
                    >
                      {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                    </button>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 24 : 0,
                    }}
                    transition={accordionTransition}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-base">
                      {edu.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Awards & Certifications */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceLess}
          className="mt-28 md:mt-36"
        >
          <div className="mb-12 text-center">
            <motion.div
              variants={fadeUp}
              className="mb-3 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400"
            >
              <Trophy size={16} />
              <span>Recognition</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Awards &amp; Certifications
            </motion.h2>
          </div>

          {/* Certification cards — x:-30 horizontal stagger from left + tap feedback */}
          <div className="flex flex-col gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnceLess}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduce ? undefined : { scale: 1.02, y: -2 }}
                whileTap={shouldReduce ? undefined : { scale: 0.97 }}
                className="supabase-card group cursor-default flex flex-col justify-between gap-4 p-6 hover:border-accent/30 sm:flex-row sm:items-center sm:p-8"
              >
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent md:text-2xl transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {cert.issuer} • {cert.type}
                  </p>
                </div>
                <div className="text-sm font-bold text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 sm:text-base">
                  {cert.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
