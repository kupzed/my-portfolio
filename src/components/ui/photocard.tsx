"use client";

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";

interface PhotoCardProps {
  imageSrc: string;
  name: string;
  subtitle: string;
  avatarSrc: string;
  username: string;
  isOnline?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

const SPRING_CONFIG = { stiffness: 180, damping: 22, mass: 0.6 };
const MAX_TILT = 14; // degrees

export default function PhotoCard({
  imageSrc,
  name,
  subtitle,
  avatarSrc,
  username,
  isOnline = true,
  ctaLabel = "Contact Me",
  ctaHref = "#contact",
}: PhotoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduce = useReducedMotion();

  // Raw pointer values (–1 to 1)
  const rawX = useRef(0);
  const rawY = useRef(0);

  // Smoothed spring values
  const springX = useSpring(0, SPRING_CONFIG);
  const springY = useSpring(0, SPRING_CONFIG);
  const glareX = useSpring(50, { stiffness: 120, damping: 20 });
  const glareY = useSpring(50, { stiffness: 120, damping: 20 });

  // Derived transforms
  const rotateY = useTransform(springX, [-1, 1], [-MAX_TILT, MAX_TILT]);
  const rotateX = useTransform(springY, [-1, 1], [MAX_TILT, -MAX_TILT]);
  const glareOpacity = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduce) return;
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width; // 0-1
      const cy = (e.clientY - rect.top) / rect.height; // 0-1
      rawX.current = cx * 2 - 1; // -1 to 1
      rawY.current = cy * 2 - 1;
      springX.set(rawX.current);
      springY.set(rawY.current);
      glareX.set(cx * 100);
      glareY.set(cy * 100);
    },
    [springX, springY, glareX, glareY, shouldReduce],
  );

  const handleMouseEnter = useCallback(() => {
    if (shouldReduce) return;
    setIsHovered(true);
    glareOpacity.set(1);
  }, [glareOpacity, shouldReduce]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    springX.set(0);
    springY.set(0);
    glareX.set(50);
    glareY.set(50);
    glareOpacity.set(0);
  }, [springX, springY, glareX, glareY, glareOpacity]);

  // Glare gradient position string
  const glareGradient = useTransform(
    [glareX, glareY],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 35%, transparent 65%)`,
  );

  // Subtle shimmer: a thin bright line that sweeps across
  const shimmerX = useTransform(springX, [-1, 1], ["-30%", "130%"]);

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ perspective: "1000px" }}
    >
      {/* ── Ambient Glow Behind Card ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(113,196,255,0.22) 0%, rgba(96,73,110,0.18) 45%, transparent 75%)",
          filter: "blur(40px)",
          transform: "scale(1.3)",
        }}
      />

      {/* ── Card Shell ── */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          shouldReduce
            ? { transformStyle: "preserve-3d" }
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative w-[300px] sm:w-[340px] cursor-pointer"
      >
        {/* Outer border glow ring */}
        <motion.div
          animate={isHovered && !shouldReduce ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden
          className="absolute -inset-[1.5px] rounded-[30px] pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(113,196,255,0.6) 0%, rgba(96,73,110,0.5) 50%, rgba(113,196,255,0.3) 100%)",
          }}
        />

        {/* Inner card */}
        <div
          className="relative overflow-hidden rounded-[28px] z-10"
          style={{
            background: "linear-gradient(145deg, #0d1525 0%, #05070d 100%)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.7), 0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* ── Portrait Image ── */}
          <div className="relative aspect-3/4 w-full">
            {/* Background noise / texture overlay */}
            <div
              aria-hidden
              className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Photo */}
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width: 640px) 300px, 340px"
              className="object-cover object-top grayscale"
            />

            {/* Gradient overlay — bottom fade */}
            <div
              aria-hidden
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(5,7,13,0.45) 0%, transparent 30%, transparent 55%, rgba(5,7,13,0.92) 100%)",
              }}
            />

            {/* ── Shine Layer (edge specular highlight) ── */}
            <motion.div
              aria-hidden
              className="absolute inset-0 z-30 pointer-events-none rounded-[28px]"
              style={{
                background: glareGradient,
                opacity: shouldReduce ? 0 : glareOpacity,
              }}
            />

            {/* ── Moving shimmer streak ── */}
            <motion.div
              aria-hidden
              className="absolute top-0 bottom-0 z-30 w-[60px] pointer-events-none"
              style={{
                left: shimmerX,
                background:
                  "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
                opacity: isHovered && !shouldReduce ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            />

            {/* ── Top Identity ── */}
            <div
              className="absolute top-0 left-0 right-0 z-40 p-6 pt-7"
              style={{ transform: "translateZ(20px)" }}
            >
              <motion.h2
                initial={shouldReduce ? false : { opacity: 0, y: 10 }}
                animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[22px] font-semibold leading-tight tracking-tight text-white"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
              >
                {name}
              </motion.h2>
              <motion.p
                initial={shouldReduce ? false : { opacity: 0, y: 8 }}
                animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-1 text-[13px] font-medium tracking-wide"
                style={{
                  color: "#bfc7d4",
                  textShadow: "0 1px 8px rgba(0,0,0,0.9)",
                }}
              >
                {subtitle}
              </motion.p>
            </div>

            {/* ── Bottom Floating Info Panel ── */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute grayscale bottom-5 left-4 right-4 z-40 flex items-center justify-between gap-3 px-4 py-3 rounded-[20px]"
              style={{
                background: "rgba(10, 14, 26, 0.72)",
                backdropFilter: "blur(18px) saturate(180%)",
                WebkitBackdropFilter: "blur(18px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
                transform: "translateZ(24px)",
              }}
            >
              {/* Left: Avatar + Name + Status */}
              <div className="flex items-center gap-3 min-w-0">
                {/* Mini avatar with online ring */}
                <div className="relative shrink-0">
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden"
                    style={{
                      border: "2px solid rgba(113,196,255,0.5)",
                      boxShadow: "0 0 12px rgba(113,196,255,0.3)",
                    }}
                  >
                    <Image
                      src={avatarSrc}
                      alt={username}
                      width={40}
                      height={40}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  {/* Online indicator */}
                  {isOnline && (
                    <span className="absolute bottom-0 right-0 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span
                        className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"
                        style={{ border: "2px solid #0a0e1a" }}
                      />
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold truncate text-white leading-none">
                    {username}
                  </p>
                  <p
                    className="mt-1 text-[11px] font-medium"
                    style={{ color: isOnline ? "#34d399" : "#94a3b8" }}
                  >
                    {isOnline ? "● Online" : "○ Offline"}
                  </p>
                </div>
              </div>

              {/* Right: CTA Button */}
              <motion.a
                href={ctaHref}
                whileHover={shouldReduce ? undefined : { scale: 1.06 }}
                whileTap={shouldReduce ? undefined : { scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="shrink-0 text-[12px] font-semibold px-4 py-2 rounded-full text-white"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(113,196,255,0.25) 0%, rgba(96,73,110,0.35) 100%)",
                  border: "1px solid rgba(113,196,255,0.4)",
                  boxShadow: "0 0 18px rgba(113,196,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {ctaLabel}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
