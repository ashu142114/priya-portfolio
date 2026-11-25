"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_EASINGS } from "./tokens";

interface StackedCardsProps {
  children: React.ReactNode[];
  className?: string;
  cardClassName?: string;
}

export default function StackedCards({
  children,
  className = "",
  cardClassName = "",
}: StackedCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length <= 1) return;

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      const nextCard = cards[index + 1];

      gsap.to(card, {
        scale: 0.92,
        opacity: 0.45,
        filter: "blur(2px)",
        ease: MOTION_EASINGS.scrubbed,
        scrollTrigger: {
          trigger: nextCard,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (cards.some((c) => c === st.trigger)) {
          st.kill();
        }
      });
    };
  }, [children.length]);

  return (
    <div ref={containerRef} className={`relative flex flex-col gap-8 md:gap-16 ${className}`}>
      {children.map((child, idx) => (
        <div
          key={idx}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className={`sticky top-28 md:top-36 rounded-3xl will-change-transform ${cardClassName}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
