"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const customCursorElem = target.closest("[data-cursor]");
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest("[data-cursor-hover]") ||
        customCursorElem;

      if (customCursorElem) {
        const text = customCursorElem.getAttribute("data-cursor");
        setCursorText(text && text !== "Hover" ? text : null);
      } else {
        setCursorText(null);
      }

      setIsHovered(Boolean(isInteractive));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Outer soft follower */}
      <div
        className={`custom-cursor ${isHovered ? "active" : ""} ${cursorText ? "has-text" : ""}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          ...(cursorText
            ? {
                width: "60px",
                height: "60px",
                backgroundColor: "var(--accent-primary, #D9577B)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }
            : {}),
        }}
        aria-hidden="true"
      >
        {cursorText}
      </div>
      {/* Small crisp center dot (hidden when text badge is active) */}
      {!cursorText && (
        <div
          className="custom-cursor-dot"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
