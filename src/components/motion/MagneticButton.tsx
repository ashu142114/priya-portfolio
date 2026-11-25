"use client";

import { useRef } from "react";
import gsap from "gsap";
import { MOTION_EASINGS } from "./tokens";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  cursorState?: "View" | "Drag" | "Play" | "Hover";
  strength?: number;
  as?: "button" | "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  cursorState = "Hover",
  strength = 0.35,
  as: Component = "button",
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const buttonRef = useRef<any>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;

    gsap.to(buttonRef.current, {
      x,
      y,
      duration: 0.3,
      ease: MOTION_EASINGS.hover,
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <Component
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorState}
      className={`relative inline-flex items-center justify-center transition-shadow will-change-transform ${className}`}
    >
      {children}
    </Component>
  );
}
