"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_EASINGS, MOTION_DURATIONS } from "./tokens";

interface MaskImageProps {
  children: React.ReactNode;
  className?: string;
  direction?: "inset" | "left" | "top";
  scaleInitial?: number;
  duration?: number;
}

export default function MaskImage({
  children,
  className = "",
  scaleInitial = 1.25,
  duration = MOTION_DURATIONS.slow,
}: MaskImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !innerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(containerRef.current, { clipPath: "inset(100% 0% 0% 0%)" });
    gsap.set(innerRef.current, { scale: scaleInitial });

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(containerRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration,
          ease: MOTION_EASINGS.reveal,
        });
        gsap.to(innerRef.current, {
          scale: 1,
          duration: duration * 1.15,
          ease: MOTION_EASINGS.smooth,
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [scaleInitial, duration]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden will-change-[clip-path] ${className}`}
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div ref={innerRef} className="w-full h-full transform-gpu will-change-transform">
        {children}
      </div>
    </div>
  );
}
