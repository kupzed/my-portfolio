"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroData } from "@/lib/data";
import { stagger, blurIn, slideUpFade } from "@/lib/motion";
import { useState, useEffect } from "react";
import { SkillsMarquee } from "@/components/ui/skills-marquee";

export default function HeroSection() {
  const shouldReduce = useReducedMotion();
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typewriterText = shouldReduce
    ? heroData.typewriterTexts[0]
    : displayText;

  useEffect(() => {
    if (shouldReduce) return;

    const currentText = heroData.typewriterTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          if (displayText === currentText)
            setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setTextIndex(
              (prev) => (prev + 1) % heroData.typewriterTexts.length,
            );
          }
        }
      },
      isDeleting ? 30 : 60,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, shouldReduce]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* ── Announcement Badge ── */}
        <motion.a
          variants={blurIn}
          href={heroData.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-sm text-gray-600 dark:text-white/70 hover:border-accent/40 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
          </span>
          <span className="text-left">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.a>

        {/* ── Headline ── */}
        <motion.h1
          variants={blurIn}
          className="flex flex-col items-center justify-center font-sans text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl leading-tight"
        >
          <span>{heroData.role}</span>
          <span className="text-accent">Based in Bogor City.</span>
        </motion.h1>

        {/* ── Description ── */}
        <motion.p
          variants={slideUpFade}
          className="mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 dark:text-white/50 md:text-lg"
        >
          {heroData.description}
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          variants={slideUpFade}
          className="mt-10 flex items-center gap-4"
        >
          <motion.a
            href={heroData.contactHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduce ? undefined : { scale: 1.05 }}
            whileTap={shouldReduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="btn-scale btn-primary rounded-md px-5 py-2 font-semibold transition-colors"
          >
            Start a project
          </motion.a>

          <motion.a
            href={heroData.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduce ? undefined : { scale: 1.05 }}
            whileTap={shouldReduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="btn-scale btn-secondary rounded-md px-5 py-2 transition-colors"
          >
            My Resume
          </motion.a>
        </motion.div>

        {/* ── Infinite Scrolling Skills Carousel ── */}
        <SkillsMarquee duration={200} iconSize={32} showLabel={true} />
      </motion.div>
    </section>
  );
}
