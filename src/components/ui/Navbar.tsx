"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { mobileMenuOverlay, mobileMenuItem } from "@/lib/motion";

export default function Navbar() {
  const shouldReduce = useReducedMotion();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Standard next-themes hydration pattern
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  // ── Scroll detection for navbar background ──
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Scroll lock when mobile menu is open ──
  // We store the scrollY on a data attribute so the click handler can read it.
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.dataset.lockedScrollY = String(scrollY);
      return () => {
        const savedY = Number(document.body.dataset.lockedScrollY ?? 0);
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        delete document.body.dataset.lockedScrollY;
        window.scrollTo({ top: savedY, behavior: "instant" });
      };
    }
  }, [mobileOpen]);

  // ── 3-state theme cycle: system → light → dark ──
  const cycleTheme = useCallback(() => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  }, [theme, setTheme]);

  // ── Mobile nav: close menu then smooth-scroll to target ──
  // We need two rAF frames so the body scroll-lock is fully released before scroll.
  const handleMobileNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const targetId = href.replace("#", "");
      // Double rAF: first frame restores body styles (cleanup runs),
      // second frame the layout is stable and scrollIntoView works.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    },
    [],
  );

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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-surface-light/80 dark:bg-background/80 border-border-light dark:border-border shadow-sm"
            : "bg-surface-light/0 dark:bg-background/0 border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          {/* ── Logo — playful letterSpacing spring on hover ── */}
          <motion.a
            href="#home"
            whileHover={shouldReduce ? undefined : { letterSpacing: "0.05em" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white select-none"
          >
            Kupzed<span className="text-accent">.</span>
          </motion.a>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
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
              href="https://wa.me/+628988449176"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-scale btn-primary inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold transition-colors"
            >
              Contact me
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
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              suppressHydrationWarning
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
            >
              {/* Animated icon swap */}
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 top-16 z-40 bg-[#f9f9f9]/98 dark:bg-background/98 backdrop-blur-xl md:hidden overflow-y-auto"
          >
            <ul className="flex flex-col items-center justify-center gap-10 py-16 min-h-[calc(100vh-4rem)]">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  variants={mobileMenuItem}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    className="text-2xl font-semibold text-gray-800 dark:text-white/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}

              {/* Thin divider */}
              <motion.li
                variants={mobileMenuItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: navLinks.length * 0.06 }}
                aria-hidden="true"
                className="w-12 border-t border-black/10 dark:border-white/10"
              />

              {/* Contact CTA — solid pill, matches desktop intent */}
              <motion.li
                variants={mobileMenuItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: (navLinks.length + 1) * 0.06 }}
              >
                <a
                  href="https://wa.me/+628988449176"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="btn-scale inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold bg-accent text-background hover:bg-accent-dark transition-colors"
                >
                  Contact me <ArrowUpRight size={18} />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
