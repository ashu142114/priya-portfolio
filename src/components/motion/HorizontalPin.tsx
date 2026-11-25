"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_EASINGS } from "./tokens";

interface HorizontalPinProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
}

export default function HorizontalPin({
  children,
  className = "",
  trackClassName = "",
}: HorizontalPinProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile || !sectionRef.current || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

    const anim = gsap.to(track, {
      x: getScrollAmount,
      ease: MOTION_EASINGS.scrubbed,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${Math.max(800, track.scrollWidth - window.innerWidth + 200)}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full overflow-hidden md:min-h-screen flex flex-col justify-center ${className}`}
    >
      {/* Desktop Scrubbed Progress Bar */}
      <div className="hidden md:block absolute top-6 left-8 right-8 z-20 h-1 rounded-full bg-blush-200/60 overflow-hidden">
        <div
          className="h-full bg-rose-500 rounded-full transition-[width] duration-75"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      {/* Track: horizontal scroll on desktop, snap-carousel on mobile */}
      <div
        ref={trackRef}
        className={`flex items-center gap-6 px-6 md:px-16 w-max overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory md:snap-none no-scrollbar ${trackClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
