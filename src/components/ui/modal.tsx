"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { modalOverlay, modalContent } from "@/lib/motion";

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

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const previouslyFocused = document.activeElement;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => dialogRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/60 p-5 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative my-auto max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border-light bg-surface-light p-8 shadow-2xl outline-none dark:border-border dark:bg-background"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              suppressHydrationWarning
              className="sticky top-0 right-0 z-10 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-surface-light/80 text-background/50 transition-colors hover:bg-black/5 hover:text-background dark:bg-background/80 dark:text-foreground/50 dark:hover:bg-white/10 dark:hover:text-foreground"
            >
              <X size={18} />
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
