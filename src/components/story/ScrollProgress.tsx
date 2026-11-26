"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "chapter-hero", number: "01", label: "Intro" },
  { id: "chapter-themes", number: "02", label: "Theme Lab" },
  { id: "chapter-before-after", number: "03", label: "Before / After" },
  { id: "chapter-process", number: "04", label: "Process" },
  { id: "chapter-design-system", number: "05", label: "Design System" },
  { id: "chapter-brand-kit", number: "06", label: "Brand Kit" },
  { id: "chapter-work-cta", number: "07", label: "Selected Work" },
];

export default function ScrollProgress() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      const viewportMid = window.innerHeight * 0.42;

      let matched = 0;
      for (let i = 0; i < chapters.length; i++) {
        const el = document.getElementById(chapters[i].id);
        if (!el) continue;
        // GSAP ScrollTrigger wraps pinned elements in a .pin-spacer whose rect tracks true scroll span
        const target = el.parentElement?.classList.contains("pin-spacer")
          ? el.parentElement
          : el;
        const rect = target.getBoundingClientRect();
        if (rect.top <= viewportMid) {
          matched = i;
        }
      }
      setActiveChapter(matched);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const target = el.parentElement?.classList.contains("pin-spacer")
      ? el.parentElement
      : el;
    const top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <aside
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-end gap-3 transition-opacity duration-300 pointer-events-auto ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Story chapter navigation"
    >
      {/* Chapter Counter 01 / 07 */}
      <div className="px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[var(--border-color)] shadow-soft text-right">
        <span className="font-serif font-bold text-sm text-[var(--accent-primary)]">
          {chapters[activeChapter].number}
        </span>
        <span className="text-[10px] font-sans text-plum-400"> / 07</span>
      </div>

      {/* 7 Chapter Trackers */}
      <nav className="flex flex-col gap-2 p-2 rounded-2xl bg-white/70 backdrop-blur-md border border-[var(--border-color)] shadow-soft-sm">
        {chapters.map((ch, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="group relative flex items-center justify-end py-1 px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg"
              aria-label={`Scroll to ${ch.number} ${ch.label}`}
              aria-current={isActive ? "step" : undefined}
            >
              <span className="absolute right-7 px-2.5 py-1 rounded-lg bg-plum text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-soft">
                {ch.number} {ch.label}
              </span>

              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 h-1.5 bg-[var(--accent-primary)] shadow-sm"
                    : "w-2 h-1.5 bg-plum-200 group-hover:bg-plum-400"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
