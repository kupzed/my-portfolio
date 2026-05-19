"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { heroData, socialLinks } from "@/lib/data";
import { stagger, blurIn, slideUpFade } from "@/lib/motion";
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
          const nextText = currentText.substring(0, displayText.length + 1);
          setDisplayText(nextText);
          if (nextText === currentText) {
            window.setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          const nextText = currentText.substring(0, displayText.length - 1);
          setDisplayText(nextText);
          if (nextText === "") {
            setIsDeleting(false);
            setTextIndex(
              (prev) => (prev + 1) % heroData.typewriterTexts.length,
            );
          }
        }
      },
      isDeleting ? 28 : 54,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, shouldReduce]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 pb-14 md:pt-28 md:pb-20"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-6xl flex-col items-center text-center"
      >
        <motion.a
          variants={blurIn}
          href={heroData.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Riza Fahdan Syahda resume"
          className="mb-6 inline-flex max-w-full cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-accent/40 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="truncate text-left">
            {typewriterText}
            <span className="cursor-blink ml-0.5 inline-block">|</span>
          </span>
        </motion.a>

        {/* <motion.p
          variants={slideUpFade}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent"
        >
          {heroData.availability}
        </motion.p> */}

        <motion.h1
          variants={blurIn}
          aria-label={`${heroData.role} from interface to database.`}
          className="mx-auto flex max-w-5xl flex-col items-center justify-center font-sans text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          <span>{heroData.role}</span>
          <span className="text-accent">from interface to database.</span>
        </motion.h1>

        <motion.p
          variants={slideUpFade}
          className="mt-6 max-w-3xl text-center text-base leading-relaxed text-gray-600 dark:text-white/55 md:text-lg"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          variants={slideUpFade}
          className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <motion.a
            href={heroData.contactHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduce ? undefined : { scale: 1.04 }}
            whileTap={shouldReduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="btn-scale btn-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            Discuss a role
            <ArrowUpRight size={16} aria-hidden="true" />
          </motion.a>

          <motion.a
            href={heroData.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduce ? undefined : { scale: 1.04 }}
            whileTap={shouldReduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="btn-scale btn-secondary inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            View resume
            <FileText size={16} aria-hidden="true" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={slideUpFade}
          className="mt-5 flex flex-wrap items-center justify-center gap-2"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-white/60 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-accent/50 hover:text-gray-900 dark:border-border dark:bg-white/5 dark:text-white/55 dark:hover:text-white"
              >
                <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
                {social.label}
              </a>
            );
          })}
        </motion.div>

        <motion.div
          variants={slideUpFade}
          className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {heroData.quickStats.map((stat) => (
            <div
              key={stat.label}
              className="supabase-card px-4 py-4 text-left sm:text-center"
            >
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={slideUpFade}
          className="mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2"
        >
          {heroData.trustSignals.map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-border-light bg-black/5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-border dark:bg-white/5 dark:text-white/55"
            >
              {signal}
            </span>
          ))}
        </motion.div>

        <SkillsMarquee duration={160} iconSize={30} showLabel />
      </motion.div>
    </section>
  );
}
