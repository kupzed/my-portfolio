"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Standard next-themes hydration pattern
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  // ── Scroll lock when mobile menu is open ──
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo({ top: scrollY, behavior: "instant" });
      };
    }
  }, [mobileOpen]);

  // ── 3-state theme cycle: system → light → dark ──
  const cycleTheme = useCallback(() => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  }, [theme, setTheme]);

  const themeIcon = !mounted ? (
    <Monitor size={18} />
  ) : theme === "light" ? (
    <Sun size={18} />
  ) : theme === "dark" ? (
    <Moon size={18} />
  ) : (
    <Monitor size={18} />
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-[#0b0716]/70 border-b border-gray-200/30 dark:border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          {/* ── Logo ── */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white select-none"
          >
            Kupzed<span className="text-accent">.</span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop Right ── */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={cycleTheme}
              aria-label="Toggle theme"
              suppressHydrationWarning
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
            >
              {themeIcon}
            </button>
            <a
              href="https://t.me/kupzed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-scale inline-flex items-center gap-1.5 rounded-full border border-gray-900 dark:border-white px-5 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
            >
              Contact me <ArrowUpRight size={14} />
            </a>
          </div>

          {/* ── Mobile Right ── */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={cycleTheme}
              aria-label="Toggle theme"
              suppressHydrationWarning
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
            >
              {themeIcon}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              suppressHydrationWarning
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-white/95 dark:bg-[#0b0716]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col items-center justify-center gap-8 pt-20">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                <a
                  href="https://t.me/kupzed"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="btn-scale inline-flex items-center gap-1.5 rounded-full border border-gray-900 dark:border-white px-6 py-2.5 text-base font-medium text-gray-900 dark:text-white"
                >
                  Contact me <ArrowUpRight size={16} />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
