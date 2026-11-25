"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface SmoothScrollProps {
  children: React.ReactNode;
  lerp?: number;
}

export default function SmoothScroll({ children, lerp = 0.08 }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp,
      duration: 1.1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [lerp]);

  return <div className="relative w-full min-h-screen">{children}</div>;
}
