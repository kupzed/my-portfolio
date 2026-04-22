"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";
import { fadeIn, stagger, viewportOnce } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8 lg:grid-cols-6"
        >
          {/* Left Column: Brand & Info */}
          <motion.div
            variants={fadeIn}
            className="col-span-2 md:col-span-2 lg:col-span-4"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kupzed<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Crafting digital experiences that blend aesthetic with functional
              precision.
            </p>
            <a
              href="mailto:rizafahdansyahda3@gmail.com"
              className="mt-6 btn-scale inline-flex items-center gap-1.5 rounded-full border border-gray-900 dark:border-white px-5 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
            >
              <Mail size={16} strokeWidth={2} />
              rizafahdansyahda3@gmail.com
            </a>
          </motion.div>

          {/* Middle Column: Sitemap */}
          <motion.div
            variants={fadeIn}
            className="col-span-1 md:col-span-1 lg:col-span-1"
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Sitemap
            </h3>
            <ul className="flex flex-col space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-700 transition-colors hover:text-accent dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Socials */}
          <motion.div
            variants={fadeIn}
            className="col-span-1 md:col-span-1 lg:col-span-1"
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Socials
            </h3>
            <ul className="flex flex-col space-y-3 text-sm">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-fit items-center gap-2 text-gray-700 transition-colors hover:text-accent dark:text-gray-400 dark:hover:text-white"
                    >
                      <span className="transition-transform group-hover:scale-110">
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section: Copyright & Location */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="border-t border-black/10 dark:border-white/10"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-gray-500 dark:text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Riza Fahdan Syahda. All Rights
            Reserved.
          </p>
          <p>
            Based in Bogor, Indonesia
            <span className="ml-1 uppercase tracking-wider opacity-70">ID</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
