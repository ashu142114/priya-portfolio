"use client";

import { useEffect, useRef, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_EASINGS } from "./tokens";

interface ScrollDrawProps {
  children: React.ReactElement<React.SVGProps<SVGPathElement>>;
  className?: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
}

export default function ScrollDraw({
  children,
  className = "",
  triggerRef,
  start = "top 80%",
  end = "bottom 20%",
}: ScrollDrawProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !pathRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const triggerElem = triggerRef?.current || path.closest("svg") || path;

    const anim = gsap.to(path, {
      strokeDashoffset: 0,
      ease: MOTION_EASINGS.scrubbed,
      scrollTrigger: {
        trigger: triggerElem,
        start,
        end,
        scrub: 0.5,
      },
    });

    return () => {
      anim.kill();
    };
  }, [triggerRef, start, end]);

  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {cloneElement(children, { ref: pathRef } as any)}
    </svg>
  );
}
