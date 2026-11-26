"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { themePresets, applyTheme } from "@/data/themes";
import { SparkleIcon } from "@/components/common/Stickers";
import { Palette, Terminal, Sliders, Check } from "lucide-react";

export default function Chapter2Themes() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !triggerRef.current) return;

    const totalSteps = themePresets.length;

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: `+=${totalSteps * 650}`,
      pin: true,
      scrub: 0.5,
      snap: {
        snapTo: 1 / (totalSteps - 1),
        duration: { min: 0.25, max: 0.5 },
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const step = Math.min(
          Math.floor(self.progress * totalSteps),
          totalSteps - 1
        );
        setCurrentStep(step);
        applyTheme(themePresets[step]);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  const activeTheme = themePresets[currentStep] || themePresets[0];

  return (
    <div
      id="chapter-themes"
      ref={triggerRef}
      className="relative w-full min-h-screen flex flex-col justify-center py-16 md:py-24 overflow-hidden border-y border-[var(--border-color)] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)] mb-3 shadow-soft-sm">
            <Palette className="w-3.5 h-3.5" />
            <span>Chapter 02 • Multi-Theme Dynamic Tokens</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            The Design System Changes as You Scroll
          </h2>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            Watch the entire page transform live: background shades, accent hues, typography weights, and corner radii
            update seamlessly across 4 design presets.
          </p>
        </div>

        {/* Desktop Presentation Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/80 backdrop-blur-md rounded-4xl p-8 lg:p-12 border border-[var(--border-color)] shadow-soft-xl">
          {/* Left Column: Live Token HUD Inspector */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    CSS Variables Inspector
                  </span>
                </div>
                <span className="text-xs font-serif font-bold text-[var(--accent-primary)]">
                  0{currentStep + 1} / 04
                </span>
              </div>

              {/* Live Token Terminal Card */}
              <div className="p-5 rounded-2xl bg-plum-950 text-plum-100 font-mono text-xs space-y-2 border border-plum-800 shadow-soft">
                <div className="flex justify-between items-center pb-2 border-b border-plum-800/80 text-[10px] text-plum-400">
                  <span>:root &#123; live update 0.6s &#125;</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="flex justify-between">
                  <span className="text-rose-300">--theme-name:</span>
                  <span className="text-white font-bold">"{activeTheme.name}"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rose-300">--bg-primary:</span>
                  <span className="text-amber-200">{activeTheme.tokens.bgPrimary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rose-300">--accent-primary:</span>
                  <span className="text-emerald-300 font-bold">{activeTheme.tokens.accentPrimary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rose-300">--card-radius:</span>
                  <span className="text-cyan-200">{activeTheme.tokens.cardRadius}</span>
                </div>
              </div>
            </div>

            {/* Theme Description & Attributes */}
            <div className="p-4 rounded-2xl bg-cream-50 border border-[var(--border-color)]">
              <h3 className="font-serif font-bold text-lg text-[var(--text-primary)] mb-1">
                {activeTheme.name}
              </h3>
              <p className="text-xs text-plum-600 mb-3">{activeTheme.tagline}</p>
              <div className="flex gap-2">
                {themePresets.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setCurrentStep(idx);
                      applyTheme(t);
                    }}
                    className={`h-7 px-3 rounded-full text-[10px] font-medium transition-all ${
                      currentStep === idx
                        ? "bg-[var(--accent-primary)] text-white font-bold"
                        : "bg-white text-plum-600 border border-blush-200"
                    }`}
                  >
                    {t.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <span className="text-[11px] text-plum-400 italic block">
              💡 Tip: Continue scrolling down to experience Chapter 03: Before & After.
            </span>
          </div>

          {/* Right Column: Dynamic Component Preview reacting to the tokens */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div
              className="p-6 sm:p-8 border border-[var(--border-color)] bg-white/95 shadow-soft-lg transition-all duration-500"
              style={{ borderRadius: activeTheme.tokens.cardRadius }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-serif text-lg font-bold text-white transition-colors duration-500"
                    style={{ backgroundColor: activeTheme.tokens.accentPrimary }}
                  >
                    P.
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[var(--text-primary)]">
                      Component Library Preview
                    </h4>
                    <span className="text-xs text-plum-500">Active Token: {activeTheme.name}</span>
                  </div>
                </div>

                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white transition-colors duration-500"
                  style={{ backgroundColor: activeTheme.tokens.accentPrimary }}
                >
                  Live Token
                </span>
              </div>

              {/* Sample Morphing UI Elements */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-cream-50 border border-[var(--border-color)]">
                    <span className="block text-[10px] uppercase font-bold text-plum-400">
                      Primary Action
                    </span>
                    <button
                      className="mt-2 w-full py-2.5 px-4 text-xs font-semibold text-white transition-all duration-500 shadow-sm"
                      style={{
                        backgroundColor: activeTheme.tokens.accentPrimary,
                        borderRadius: `calc(${activeTheme.tokens.cardRadius} / 2)`,
                      }}
                    >
                      Confirm Appointment
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-cream-50 border border-[var(--border-color)]">
                    <span className="block text-[10px] uppercase font-bold text-plum-400">
                      Input Field
                    </span>
                    <input
                      type="text"
                      readOnly
                      value="priyalakkad11@gmail.com"
                      className="mt-2 w-full py-2 px-3 text-xs bg-white border border-[var(--border-color)] text-plum"
                      style={{ borderRadius: `calc(${activeTheme.tokens.cardRadius} / 2)` }}
                    />
                  </div>
                </div>

                {/* Status Bar */}
                <div className="p-4 rounded-xl bg-cream-50 border border-[var(--border-color)] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-plum-700 font-medium">Design Tokens Synchronized</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[var(--accent-primary)]">
                    radius: {activeTheme.tokens.cardRadius}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
