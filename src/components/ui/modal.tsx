"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { modalOverlay, modalContent } from "@/lib/motion";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter(
    (element) =>
      !element.hasAttribute("disabled") &&
      element.getAttribute("aria-hidden") !== "true",
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  titleId?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  titleId,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const previouslyFocused = document.activeElement;

    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    html.style.scrollBehavior = originalScrollBehavior;

    requestAnimationFrame(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      const firstFocusable = getFocusableElements(dialog)[0];
      (firstFocusable ?? dialog).focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      const dialog = dialogRef.current;

      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab" || !dialog) return;

      const focusableElements = getFocusableElements(dialog);
      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0]!;
      const lastElement = focusableElements[focusableElements.length - 1]!;
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      
      const htmlElement = document.documentElement;
      const prevScrollBehavior = htmlElement.style.scrollBehavior;
      htmlElement.style.scrollBehavior = "auto";

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      
      window.scrollTo(0, scrollY);
      
      htmlElement.style.scrollBehavior = prevScrollBehavior;

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/60 p-5 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) onCloseRef.current();
          }}
        >
          <motion.div
            ref={dialogRef}
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative my-auto max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border-light bg-surface-light p-8 shadow-2xl outline-none dark:border-border dark:bg-background"
          >
            <button
              type="button"
              onClick={() => onCloseRef.current()}
              aria-label="Close modal"
              suppressHydrationWarning
              className="sticky top-0 right-0 z-10 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-surface-light/80 text-background/50 transition-colors hover:bg-black/5 hover:text-background dark:bg-background/80 dark:text-foreground/50 dark:hover:bg-white/10 dark:hover:text-foreground"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
