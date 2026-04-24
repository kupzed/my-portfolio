"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { modalOverlay, modalContent } from "@/lib/motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // ── Scroll lock ──
  useEffect(() => {
    if (isOpen) {
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
          onClick={onClose}
        >
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl border border-black/10 dark:bg-background dark:border-white/10"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              suppressHydrationWarning
              className="sticky top-0 right-0 z-10 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-background/80 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors"
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
