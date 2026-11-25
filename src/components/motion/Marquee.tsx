"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export default function Marquee({
  children,
  speed = 40,
  className = "",
  reverse = false,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    let xPos = 0;
    const direction = reverse ? 1 : -1;
    let velocityMultiplier = 1;

    // Listen to scroll velocity
    ScrollTrigger.create({
      onUpdate: (self) => {
        velocityMultiplier = Math.min(4, 1 + Math.abs(self.getVelocity()) / 400);
      },
    });

    const ticker = () => {
      const step = (speed / 60) * direction * velocityMultiplier;
      xPos += step;

      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(xPos) >= halfWidth) {
        xPos = 0;
      }

      gsap.set(track, { x: xPos });

      // Decay velocity multiplier back to 1
      velocityMultiplier += (1 - velocityMultiplier) * 0.05;
    };

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
    };
  }, [speed, reverse]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden select-none whitespace-nowrap flex w-full ${className}`}
    >
      <div ref={trackRef} className="flex shrink-0 items-center gap-8 will-change-transform">
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
