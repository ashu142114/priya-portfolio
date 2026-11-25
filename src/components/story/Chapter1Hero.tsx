"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { siteConfig } from "@/data/site";
import { themePresets, applyTheme, ThemePreset } from "@/data/themes";
import { SparkleIcon, FourPointStar } from "@/components/common/Stickers";
import { MockupFrame } from "@/components/common/MockupFrame";
import { ArrowDown, MessageCircle, Palette } from "lucide-react";

export default function Chapter1Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeThemeId, setActiveThemeId] = useState("studio");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Line-by-line reveal animation using power3.out
    const validLines = headlineLinesRef.current.filter(Boolean);
    gsap.fromTo(
      validLines,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.18,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  const handleSelectTheme = (theme: ThemePreset) => {
    setActiveThemeId(theme.id);
    applyTheme(theme);
  };

  return (
    <section
      id="chapter-hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Line-by-line headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-secondary)]/80 border border-[var(--border-color)] text-xs sm:text-sm font-medium text-[var(--text-primary)] shadow-soft-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span>Chapter 01 • Priya K. Lakkad</span>
              <SparkleIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </div>

            {/* Headline revealing line by line */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] mb-6 flex flex-col">
              <span
                ref={(el) => { headlineLinesRef.current[0] = el; }}
                className="inline-block"
              >
                Designing simple,
              </span>
              <span
                ref={(el) => { headlineLinesRef.current[1] = el; }}
                className="inline-block"
              >
                <span className="italic font-normal text-[var(--accent-primary)]">
                  caring digital
                </span>{" "}
                experiences
              </span>
              <span
                ref={(el) => { headlineLinesRef.current[2] = el; }}
                className="inline-block"
              >
                for healthcare & SaaS.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="font-sans text-plum-600 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
              {siteConfig.bio}
            </p>

            {/* 4 Interactive Live Theme Dots */}
            <div className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-md border border-[var(--border-color)] shadow-soft-sm mb-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                <Palette className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Live Theme Preset:</span>
              </div>
              <div className="flex items-center gap-2">
                {themePresets.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleSelectTheme(t)}
                    className={`group relative min-h-[36px] px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeThemeId === t.id
                        ? "bg-white shadow-soft ring-2 ring-[var(--accent-primary)] text-plum font-bold"
                        : "bg-cream-100 text-plum-600 hover:bg-white"
                    }`}
                    aria-label={`Switch theme to ${t.name}`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: t.dotColor }}
                    />
                    <span>{t.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#chapter-themes"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent-primary)] text-white font-sans text-sm font-semibold tracking-wide shadow-soft hover:opacity-90 transition-all duration-200 active:scale-95"
              >
                <span>Scroll the Story</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[var(--text-primary)] border border-[var(--border-color)] font-sans text-sm font-semibold shadow-soft-sm hover:border-[var(--accent-primary)] transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Say hello</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Empathic Mockup preview */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Decorative Stars */}
            <div className="absolute -top-6 -right-2 pointer-events-none z-20">
              <FourPointStar className="w-8 h-8 text-[var(--accent-primary)] animate-float-slow" />
            </div>

            {/* Glowing blur */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-secondary)]/70 via-[var(--border-color)]/30 to-transparent rounded-full blur-2xl transform scale-90"
              aria-hidden="true"
            />

            <div className="relative z-10 w-full max-w-[310px] transform hover:-translate-y-2 transition-transform duration-500 ease-out">
              <MockupFrame
                type="mobile"
                variant="healthcare"
                title="Healthcare Companion"
                category="Healthcare"
              />
              <div className="absolute -bottom-4 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[var(--border-color)] shadow-soft-lg flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--accent-secondary)] flex items-center justify-center text-[var(--accent-primary)] font-serif font-bold text-xs">
                  01
                </span>
                <div>
                  <span className="block text-[11px] font-semibold text-plum">User-Centered</span>
                  <span className="block text-[10px] text-plum-500">Calm, accessible flows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
