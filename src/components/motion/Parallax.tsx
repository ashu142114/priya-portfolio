"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_EASINGS } from "./tokens";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: "slow" | "medium" | "fast" | number;
  className?: string;
  direction?: "up" | "down";
}

export default function Parallax({
  children,
  speed = "medium",
  className = "",
  direction = "up",
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const distance =
      typeof speed === "number"
        ? speed
        : speed === "slow"
        ? 40
        : speed === "fast"
        ? 120
        : 75;

    const yVal = direction === "up" ? -distance : distance;

    const anim = gsap.fromTo(
      containerRef.current,
      { y: -yVal * 0.5 },
      {
        y: yVal * 0.5,
        ease: MOTION_EASINGS.scrubbed,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, [speed, direction]);

  return (
    <div ref={containerRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
