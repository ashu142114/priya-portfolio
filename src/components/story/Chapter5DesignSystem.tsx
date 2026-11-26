"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparkleIcon } from "@/components/common/Stickers";
import { Heart, Check } from "lucide-react";

const TABS = [
  { id: "colors", label: "Color Tokens" },
  { id: "type", label: "Typography Scale" },
  { id: "radius", label: "Spacing & Radius" },
  { id: "components", label: "Component Assembly" },
  { id: "code", label: "tokens.css" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Chapter5DesignSystem() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeTab: TabId = TABS[activeIndex]?.id ?? "colors";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile || !triggerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: `+=${TABS.length * 500}`,
      pin: true,
      scrub: 0.4,
      snap: {
        snapTo: 1 / (TABS.length - 1),
        duration: { min: 0.2, max: 0.45 },
        ease: "power2.inOut",
      },
      onUpdate: (self) => {
        setProgress(self.progress);
        const idx = Math.min(
          Math.floor(self.progress * TABS.length),
          TABS.length - 1
        );
        setActiveIndex(idx);
      },
    });

    stRef.current = st;

    return () => {
      st.kill();
      stRef.current = null;
    };
  }, []);

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
    const st = stRef.current;
    if (st) {
      const targetScroll = st.start + (st.end - st.start) * (idx / (TABS.length - 1));
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const colorTokens = [
    { name: "--bg-cream", hex: "#FFF8F5", label: "Cream 100", role: "Primary Background" },
    { name: "--accent-blush", hex: "#F8D7DF", label: "Blush 200", role: "Secondary Soft Canvas" },
    { name: "--accent-rose", hex: "#D9577B", label: "Rose 500", role: "Primary Accent & CTAs" },
    { name: "--accent-lilac", hex: "#E6DDF7", label: "Lilac 200", role: "Gentle Neutral Tint" },
    { name: "--text-plum", hex: "#2B1B2E", label: "Plum 950", role: "High-Contrast Deep Text" },
  ];

  const typeTokens = [
    { tag: "Display", size: "48px / 1.15", font: "Fraunces Serif", sample: "Designing Caring Digital Experiences" },
    { tag: "Heading 1", size: "32px / 1.25", font: "Fraunces Serif", sample: "Patient Consultation Matrix" },
    { tag: "Heading 2", size: "22px / 1.35", font: "Fraunces Serif", sample: "Doctor Profile & Available Slots" },
    { tag: "Body Regular", size: "14px / 1.6", font: "DM Sans", sample: "Soothing touch ergonomics crafted for comfort." },
    { tag: "Caption / Mono", size: "11px / 1.4", font: "DM Sans Mono", sample: "TOKEN: --radius-pill (9999px)" },
  ];

  const radiusTokens = [
    { name: "--radius-sm", val: "12px", usage: "Badges & micro-chips" },
    { name: "--radius-md", val: "20px", usage: "Standard cards & buttons" },
    { name: "--radius-lg", val: "32px", usage: "Container panels & frames" },
    { name: "--radius-full", val: "9999px", usage: "Pill buttons & avatars" },
  ];

  return (
    <div
      id="chapter-design-system"
      ref={triggerRef}
      className="relative w-full min-h-screen py-16 sm:py-24 border-b border-[var(--border-color)] bg-white transition-colors duration-500 flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-200 text-xs font-semibold text-rose-700 mb-3 shadow-soft-sm">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>Chapter 05 • Design System Lab</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            Atomic Tokens & Component Library
          </h2>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-2">
            Every screen across my 6 portfolio projects is built on a mathematically harmonious design system.
          </p>
        </div>

        {/* Scroll-Synced Tab Controls + Progress Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-rose-500 text-white shadow-soft scale-105"
                    : "bg-cream-100 text-plum-700 hover:bg-cream-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Smooth Scroll Progress Indicator */}
          <div className="hidden md:flex items-center gap-3 px-4">
            <span className="font-mono text-[11px] font-bold text-rose-700 shrink-0">
              0{activeIndex + 1} / 0{TABS.length}
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-cream-200 overflow-hidden">
              <div
                className="h-full bg-rose-500 rounded-full transition-all duration-200"
                style={{
                  width: `${Math.max(((activeIndex + 1) / TABS.length) * 100, progress * 100)}%`,
                }}
              />
            </div>
            <span className="font-mono text-[10px] text-plum-400 shrink-0">Scroll to inspect</span>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[340px]">
          {activeTab === "colors" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 animate-fade-in">
              {colorTokens.map((c, i) => (
                <div
                  key={i}
                  className="ds-token-card p-4 rounded-3xl bg-cream-50 border border-blush-200 shadow-soft-sm flex flex-col justify-between aspect-[3/4]"
                >
                  <div
                    className="w-full h-24 rounded-2xl border border-black/10 shadow-xs mb-3"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="font-mono text-[10px] text-rose-700 font-bold block">{c.name}</span>
                    <span className="font-serif font-bold text-sm text-plum block">{c.label}</span>
                    <span className="text-[10px] text-plum-500 mt-0.5 block">{c.role}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "type" && (
            <div className="space-y-4 animate-fade-in">
              {typeTokens.map((t, i) => (
                <div
                  key={i}
                  className="ds-token-card p-5 sm:p-6 rounded-3xl bg-cream-50 border border-blush-200 shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="sm:w-48 shrink-0">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blush-100 text-rose-800">
                      {t.tag}
                    </span>
                    <span className="font-mono text-[10px] text-plum-500 block mt-1.5">{t.size} • {t.font}</span>
                  </div>
                  <div className="flex-1">
                    <span
                      className={`text-plum font-bold ${
                        i === 0
                          ? "font-serif text-2xl sm:text-3xl"
                          : i === 1
                          ? "font-serif text-xl"
                          : i === 2
                          ? "font-serif text-lg"
                          : i === 3
                          ? "font-sans text-sm"
                          : "font-mono text-xs"
                      }`}
                    >
                      {t.sample}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "radius" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
              {radiusTokens.map((r, i) => (
                <div
                  key={i}
                  className="ds-token-card p-6 rounded-3xl bg-cream-50 border border-blush-200 shadow-soft-sm flex flex-col justify-between"
                >
                  <div
                    className="w-16 h-16 bg-blush-200 border-2 border-rose-400 mb-4 mx-auto"
                    style={{ borderRadius: r.val }}
                  />
                  <div className="text-center">
                    <span className="font-mono text-xs font-bold text-rose-700 block">{r.name} ({r.val})</span>
                    <span className="text-xs text-plum-600 mt-1 block">{r.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "components" && (
            <div className="p-8 rounded-4xl bg-cream-50 border border-blush-200 shadow-soft space-y-8 animate-fade-in">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-plum-500 block mb-3">
                  Buttons States & Pills
                </span>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="px-6 py-3 rounded-full bg-rose-500 text-white font-sans text-xs font-semibold shadow-soft hover:bg-rose-600">
                    Primary Solid
                  </button>
                  <button className="px-6 py-3 rounded-full bg-white text-plum border border-blush-300 font-sans text-xs font-semibold shadow-soft-sm hover:border-rose-400">
                    Secondary Outline
                  </button>
                  <button className="px-5 py-2.5 rounded-full bg-blush-100 text-rose-800 font-sans text-xs font-bold">
                    Pill Badge
                  </button>
                  <button className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-soft">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-blush-200">
                <span className="text-xs font-bold uppercase tracking-wider text-plum-500 block mb-3">
                  Card & Modal Primitives
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-3xl bg-white border border-blush-200 shadow-soft-sm">
                    <span className="text-[10px] font-bold text-rose-700 uppercase">Consultation</span>
                    <h4 className="font-serif font-bold text-sm text-plum mt-0.5">Card Token (radius-lg)</h4>
                    <p className="text-xs text-plum-600 mt-1">Light 1px border with soft ambient elevation.</p>
                  </div>
                  <div className="p-4 rounded-3xl bg-blush-100 border border-blush-300 shadow-soft-sm">
                    <span className="text-[10px] font-bold text-plum-800 uppercase">Interactive Tag</span>
                    <h4 className="font-serif font-bold text-sm text-plum mt-0.5">Filter Chip Group</h4>
                    <p className="text-xs text-plum-600 mt-1">Single-tap selection with immediate feedback.</p>
                  </div>
                  <div className="p-4 rounded-3xl bg-white border border-blush-200 shadow-soft-sm flex items-center justify-between">
                    <div>
                      <span className="font-serif font-bold text-xs text-plum block">Notification Toast</span>
                      <span className="text-[10px] text-plum-500">Auto-dismiss 3s</span>
                    </div>
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="p-6 rounded-3xl bg-plum-950 text-white font-mono text-xs overflow-x-auto shadow-soft-lg border border-plum-800 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-plum-800 mb-3 text-rose-300">
                <span>{"/* tokens.css - Live Design System Variables */"}</span>
                <span className="text-[10px] text-plum-400">CSS Custom Properties</span>
              </div>
              <pre className="text-rose-100/90 leading-relaxed">
{`:root {
  /* Colors */
  --bg-primary: #FFF8F5;
  --bg-secondary: #F8D7DF;
  --accent-primary: #D9577B;
  --accent-secondary: #E6DDF7;
  --text-primary: #2B1B2E;

  /* Typography */
  --font-display: 'Fraunces', serif;
  --font-body: 'DM Sans', sans-serif;

  /* Spacing & Radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 9999px;

  /* Elevation */
  --shadow-soft: 0 10px 30px -5px rgba(43, 27, 46, 0.06);
  --shadow-elevated: 0 20px 45px -10px rgba(43, 27, 46, 0.12);
}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
