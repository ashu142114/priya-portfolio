"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparkleIcon } from "@/components/common/Stickers";
import { ScrollDraw } from "@/components/motion";
import { Sparkles, Palette, Layers, Check } from "lucide-react";

export default function Chapter6BrandKit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".brand-specimen-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <div
      id="chapter-brand-kit"
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 border-b border-[var(--border-color)] bg-cream-50 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-200 text-xs font-semibold text-rose-700 mb-3 shadow-soft-sm">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>Chapter 06 • Brand Identity Kit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            How The Brand Assembles
          </h2>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-2">
            From geometric SVG vector stroke curves to tangible marketing touchpoints: stationery, social kits, and advertising collateral.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vector Logo Stroke Draw-in & Swatches */}
          <div className="lg:col-span-6 space-y-6">
            {/* SVG Logo Stroke Box */}
            <div className="brand-specimen-card p-8 rounded-4xl bg-white border border-blush-200 shadow-soft-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-rose-700 uppercase">
                  01 • Geometric Vector Stroke Draw-In
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-lilac-200 text-plum uppercase">
                  Concept
                </span>
              </div>

              {/* Animated SVG Monogram Draw */}
              <div className="w-full h-44 rounded-3xl bg-cream-100/70 border border-blush-200 flex items-center justify-center p-6">
                <ScrollDraw className="w-40 h-32">
                  <path
                    d="M 30 110 C 30 50, 70 20, 100 20 C 130 20, 150 40, 150 70 C 150 100, 120 120, 70 120 M 70 60 C 110 60, 130 80, 130 100 C 130 115, 110 125, 80 125"
                    stroke="#D9577B"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </ScrollDraw>
              </div>

              <div className="flex items-center justify-between text-xs text-plum-600 pt-2 border-t border-blush-100">
                <span>Golden-ratio curves in Figma</span>
                <span className="font-mono text-rose-700 font-bold">1:1.618 Proportion</span>
              </div>
            </div>

            {/* Swatches & Specimen Card */}
            <div className="brand-specimen-card p-8 rounded-4xl bg-white border border-blush-200 shadow-soft-lg space-y-4">
              <span className="font-mono text-xs font-bold text-rose-700 uppercase block">
                02 • Palette Harmony & Type Specimen
              </span>
              <div className="flex gap-2">
                {["#FFF8F5", "#F8D7DF", "#D9577B", "#E6DDF7", "#2B1B2E"].map((hex, i) => (
                  <div
                    key={i}
                    className="flex-1 h-12 rounded-2xl border border-black/10 shadow-xs flex items-center justify-center"
                    style={{ backgroundColor: hex }}
                  >
                    <span className="font-mono text-[9px] font-bold text-black/50">{hex}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 text-xs text-plum-600 space-y-1">
                <div><strong>Primary Headings:</strong> Fraunces (Editorial Display Serif)</div>
                <div><strong>Functional UI:</strong> DM Sans (Clean Geometric Body)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Assembled Collateral Suite (Business Card, Social Post, Banner) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tactile Business Card Mockup */}
            <div className="brand-specimen-card p-8 rounded-4xl bg-gradient-to-br from-cream-100 via-white to-blush-100 border border-blush-300/80 shadow-soft-xl relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rose-700 block">
                    Luxury Foil Business Card
                  </span>
                  <h4 className="font-serif font-bold text-lg text-plum mt-0.5">Priya K. Lakkad</h4>
                  <span className="text-xs text-plum-600">UI/UX & Product Designer</span>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-serif font-bold text-sm shadow-soft">
                  P.
                </div>
              </div>
              <div className="pt-4 border-t border-blush-200 flex justify-between text-[11px] text-plum-500 font-mono">
                <span>priyalakkad11@gmail.com</span>
                <span>Surat, India</span>
              </div>
            </div>

            {/* Social Post / Instagram Carousel Mockup */}
            <div className="brand-specimen-card p-6 rounded-4xl bg-white border border-blush-200 shadow-soft-lg flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blush-200 to-rose-200 shrink-0 flex items-center justify-center p-3 text-center">
                <span className="font-serif font-bold text-[10px] text-plum leading-tight">Healthcare UX Tip</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
                  Social Creative Kit (Canva & Figma)
                </span>
                <h5 className="font-serif font-bold text-sm text-plum mt-0.5">
                  1080x1350 Carousel Templates
                </h5>
                <p className="text-xs text-plum-600 mt-1">
                  Structured multi-slide design systems for thought leadership and clinic awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
