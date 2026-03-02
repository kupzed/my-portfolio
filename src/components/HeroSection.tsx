"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="ml-[2px] inline-block h-[1.2em] w-[2px] bg-current"
      />
    </span>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-24 pb-16 md:pt-28 md:pb-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex max-w-3xl flex-col items-center text-center"
      >
        {/* ── Avatar ── */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-gray-700 md:h-32 md:w-32">
            <Image
              src="/avatar.png"
              alt="Riza Fahdan Syahda — Frontend Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* ── Greeting ── */}
        <motion.p
          variants={itemVariants}
          className="mb-4 flex h-[20px] items-center text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400 md:h-[24px] md:text-base"
        >
          <Typewriter
            texts={[
              "Hi! I'm Riza Fahdan Syahda 👋",
              "Or you can call me Kupzed 👋",
            ]}
          />
        </motion.p>

        {/* ── Headline ── */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          junior web developer{" "}
          <span className="text-gray-500 dark:text-gray-400">based in</span>{" "}
          Bogor City<span className="text-accent">.</span>
        </motion.h1>

        {/* ── Sub-headline ── */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400 md:text-lg"
        >
          I am a Junior Web Developer from Bogor City, Indonesia. Has experience
          as a Junior Full-stack Developer. Passionate about Web Development,
          UI/UX, and Blockchain/Web3.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Contact Me */}
          <a
            href="#contact"
            className="btn-scale inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 dark:bg-transparent dark:border dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 sm:px-8"
          >
            contact me <ArrowRight size={16} />
          </a>

          {/* My Resume */}
          <a
            href="#"
            className="btn-scale inline-flex items-center justify-center gap-2 rounded-full border border-gray-900 bg-transparent px-7 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:bg-white dark:text-gray-900 dark:hover:bg-transparent dark:hover:text-white sm:px-8"
          >
            my resume <Download size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
