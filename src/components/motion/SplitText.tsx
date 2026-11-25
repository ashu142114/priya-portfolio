"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_EASINGS, MOTION_DURATIONS } from "./tokens";

interface SplitTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
  className?: string;
  splitBy?: "lines" | "words";
  autoPlay?: boolean;
  delay?: number;
}

export default function SplitText({
  children,
  as: Component = "div",
  className = "",
  splitBy = "words",
  autoPlay = false,
  delay = 0,
}: SplitTextProps) {
  const containerRef = useRef<any>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const validElements = spansRef.current.filter(Boolean);
    if (!validElements.length) return;

    gsap.set(validElements, { y: "110%", opacity: 0 });

    const animConfig = {
      y: "0%",
      opacity: 1,
      duration: MOTION_DURATIONS.reveal,
      stagger: MOTION_DURATIONS.stagger,
      ease: MOTION_EASINGS.reveal,
      delay,
    };

    if (autoPlay) {
      gsap.to(validElements, animConfig);
    } else {
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(validElements, animConfig);
        },
      });

      return () => {
        st.kill();
      };
    }
  }, [autoPlay, delay]);

  const units =
    splitBy === "lines"
      ? children.split("\n")
      : children.split(" ");

  return (
    <Component ref={containerRef} className={`inline-block ${className}`}>
      {units.map((unit, idx) => (
        <span key={idx} className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0">
          <span
            ref={(el) => {
              spansRef.current[idx] = el;
            }}
            className="inline-block transform-gpu will-change-transform"
          >
            {unit}
          </span>
        </span>
      ))}
    </Component>
  );
}
