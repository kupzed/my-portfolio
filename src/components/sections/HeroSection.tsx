"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroData } from "@/lib/data";
import { stagger, blurIn, slideUpFade, scaleIn, floatLoop } from "@/lib/motion";

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index % texts.length];
    const currentChars = Array.from(currentText);
    const textChars = Array.from(text);

    let typeSpeed = 80;
    if (isDeleting) typeSpeed = 40;

    if (!isDeleting && text === currentText) {
      typeSpeed = 2000;
    } else if (isDeleting && text === "") {
      typeSpeed = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      } else {
        const nextChars = isDeleting
          ? currentChars.slice(0, textChars.length - 1)
          : currentChars.slice(0, textChars.length + 1);
        setText(nextChars.join(""));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, texts]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      {/* Terminal-style cursor: scaleY blink instead of opacity flicker */}
      <span className="cursor-blink ml-[2px] inline-block h-[1.2em] w-[2px] bg-current" />
    </span>
  );
};

export default function HeroSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-24 pb-16 md:pt-28 md:pb-24"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex max-w-3xl flex-col items-center text-center"
      >
        {/* ── Avatar — scaleIn mount + floatLoop ── */}
        <motion.div
          variants={scaleIn}
          className="mb-6"
          animate={shouldReduce ? undefined : "animate"}
        >
          <motion.div
            variants={floatLoop}
            animate={shouldReduce ? undefined : "animate"}
            className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-gray-700 md:h-32 md:w-32"
          >
            <Image
              src="/avatar/avatar-01.png"
              alt="Riza Fahdan Syahda — Frontend Developer"
              fill
              sizes="(max-width: 768px) 112px, 128px"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* ── Greeting / Typewriter ── */}
        <motion.p
          variants={blurIn}
          className="mb-4 flex h-[20px] items-center text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400 md:h-[24px] md:text-base"
        >
          <Typewriter texts={heroData.typewriterTexts} />
        </motion.p>

        {/* ── Headline — blurIn for cinematic focus ── */}
        <motion.h1
          variants={blurIn}
          className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {heroData.role}{" "}
          <span className="text-gray-500 dark:text-gray-400">based in</span>{" "}
          Bogor City<span className="text-accent">.</span>
        </motion.h1>

        {/* ── Sub-headline — slideUpFade with slight delay ── */}
        <motion.p
          variants={slideUpFade}
          className="mb-10 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400 md:text-lg"
        >
          {heroData.description}
        </motion.p>

        {/* ── CTA Buttons — slideUpFade spring ── */}
        <motion.div
          variants={slideUpFade}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Contact Me */}
          <motion.a
            href={heroData.contactHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduce ? undefined : { scale: 1.05 }}
            whileTap={shouldReduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 dark:bg-transparent dark:border dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 sm:px-8"
          >
            contact me <ArrowRight size={16} />
          </motion.a>

          {/* My Resume */}
          <motion.a
            href={heroData.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduce ? undefined : { scale: 1.05 }}
            whileTap={shouldReduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-900 bg-transparent px-7 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:bg-white dark:text-gray-900 dark:hover:bg-transparent dark:hover:text-white sm:px-8"
          >
            my resume <Download size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
