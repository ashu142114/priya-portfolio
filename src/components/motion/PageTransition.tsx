"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { MOTION_EASINGS } from "./tokens";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    window.scrollTo({ top: 0, behavior: "instant" });

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: MOTION_EASINGS.smooth,
        clearProps: "transform",
      }
    );
  }, [pathname]);

  return (
    <div ref={containerRef} className="w-full flex-1 flex flex-col">
      {children}
    </div>
  );
}
