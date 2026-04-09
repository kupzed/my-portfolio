"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalContent = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2 },
  },
};

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
            className="relative my-auto w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl dark:bg-[#0e0b1e] dark:border dark:border-white/10"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              suppressHydrationWarning
              className="sticky top-0 right-0 z-10 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:bg-[#0e0b1e]/80 dark:hover:bg-white/10 dark:hover:text-white"
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
