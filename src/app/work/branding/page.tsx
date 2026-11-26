"use client";

import { useState } from "react";
import Link from "next/link";
import { brandKits } from "@/data/brandKits";
import { CareFlowLogo, AuraWellnessLogo, ZenithLogo, CelebreLogo } from "@/components/visuals/LogoVisuals";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowLeft, Sparkles, CheckCircle2, XCircle, Layers, Check } from "lucide-react";

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean, 16);
  if (Number.isNaN(num)) return "";
  return `rgb(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255})`;
}

export default function BrandingPage() {
  const [activeKitId, setActiveKitId] = useState("careflow-brand-identity");
  const selectedKit = brandKits.find((k) => k.id === activeKitId) || brandKits[0];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all work</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Identity Systems</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight">
              Brand Identity Systems & Style Guides
            </h1>
            <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
              Explore 4 holistic brand identity systems: vector marks, color tokens, typography specimens, dos & don'ts, and real-world collateral mockups with CSS 3D depth.
            </p>
          </div>
        </div>

        {/* Kit Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-blush-200">
          {brandKits.map((kit) => (
            <button
              key={kit.id}
              onClick={() => setActiveKitId(kit.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                activeKitId === kit.id
                  ? "bg-rose-500 text-white shadow-soft"
                  : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-lilac-200 text-plum-900">
                Concept
              </span>
              <span>{kit.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Brand System Showcase */}
        <div className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg space-y-12">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-blush-100">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-lilac-200 text-plum-900 border border-lilac-300">
                  Concept System
                </span>
                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blush-100 text-rose-800">
                  {selectedKit.industry} • {selectedKit.year}
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-plum">{selectedKit.title}</h2>
              <p className="font-sans text-xs sm:text-sm text-plum-600 mt-1 max-w-2xl">{selectedKit.summary}</p>
            </div>
          </div>

          {/* Section 1: Color System & Typography Specimen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                01 • Color Hierarchy & Semantic Tokens
              </span>
              <div className="space-y-2">
                {selectedKit.palette.map((p) => (
                  <div key={p.name} className="p-3 rounded-2xl bg-cream-50 border border-blush-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-xl border border-black/10 shrink-0" style={{ backgroundColor: p.hex }} />
                      <span className="font-bold text-plum">{p.name}</span>
                    </div>
                    <span className="font-mono text-plum-500 text-[10px]">{p.hex} • {hexToRgb(p.hex)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                02 • Typography Pairing & Scale
              </span>
              <div className="p-6 rounded-3xl bg-cream-50 border border-blush-200 space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-plum-500 block">Editorial Display Headings</span>
                  <span className="font-serif font-bold text-2xl text-plum block mt-0.5">{selectedKit.typography.heading}</span>
                </div>
                <div className="pt-3 border-t border-blush-200">
                  <span className="text-[10px] uppercase font-bold text-plum-500 block">Functional Body & Interface</span>
                  <span className="font-sans text-sm text-plum-700 block mt-0.5">{selectedKit.typography.body}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Real-World Collateral Applications (CSS 3D Depth) */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
              03 • Tangible Applications & 3D Collateral
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Business Card Front/Back */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-cream-100 via-white to-blush-100 border border-blush-300 shadow-soft-md aspect-[16/10] flex flex-col justify-between transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase font-mono text-rose-700 font-bold">Business Card</span>
                  <span className="scale-75 origin-right">
                    {selectedKit.id.includes("careflow") ? <CareFlowLogo variant="symbol" /> : selectedKit.id.includes("aura") ? <AuraWellnessLogo variant="symbol" /> : selectedKit.id.includes("zenith") ? <ZenithLogo variant="symbol" /> : <CelebreLogo variant="symbol" />}
                  </span>
                </div>
                <span className="font-serif font-bold text-base text-plum">{selectedKit.title.split(" ")[0]}</span>
                <span className="text-[9px] font-mono text-plum-500">350gsm Spot UV • Front/Back</span>
              </div>

              {/* Letterhead & Envelope */}
              <div className="p-6 rounded-3xl bg-white border border-blush-300 shadow-soft-md aspect-[16/10] flex flex-col justify-between transform hover:-translate-y-1 transition-transform">
                <span className="text-[9px] uppercase font-mono text-rose-700 font-bold">Stationery Suite</span>
                <span className="font-serif font-bold text-sm text-plum">Executive Letterhead & Envelope</span>
                <span className="text-[9px] font-mono text-plum-500">Watermarked 120 GSM</span>
              </div>

              {/* Fabric Tote Bag Mockup */}
              <div className="p-6 rounded-3xl bg-cream-200/90 border border-blush-300 shadow-soft-md aspect-[16/10] flex flex-col justify-between transform hover:-translate-y-1 transition-transform">
                <span className="text-[9px] uppercase font-mono text-rose-700 font-bold">Packaging &amp; Tote</span>
                <span className="font-serif font-bold text-sm text-plum">Organic Cotton Tote</span>
                <span className="text-[9px] font-mono text-plum-500">Screenprinted Vector Spec</span>
              </div>

              {/* SVG Brand Pattern & Iconography */}
              <div className="p-6 rounded-3xl bg-plum-950 text-white shadow-soft-md aspect-[16/10] flex flex-col justify-between transform hover:-translate-y-1 transition-transform relative overflow-hidden">
                <svg className="absolute right-0 bottom-0 w-24 h-24 opacity-20" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="40" cy="40" r="16" stroke="white" strokeWidth="1.5" />
                </svg>
                <span className="text-[9px] uppercase font-mono text-rose-300 font-bold">SVG Pattern &amp; Imagery</span>
                <span className="font-serif font-bold text-sm text-white">Geometric Motif + Icon Set</span>
                <span className="text-[9px] font-mono text-rose-200/70">Warm editorial tone • 1.5px stroke</span>
              </div>
            </div>
          </div>

          {/* Section 3: Brand Guidelines & Usage Rules (Dos & Don'ts) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-cream-50 border border-blush-200 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-plum-500 block">
              04 • Brand Usage & Guidelines (Dos & Don'ts)
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Approved Practices (DO)</span>
                </div>
                {selectedKit.usageRules.map((rule, idx) => (
                  <div key={idx} className="text-xs text-plum-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white border border-rose-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-800">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Forbidden Practices (DON'T)</span>
                </div>
                <div className="text-xs text-plum-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>Do not stretch or distort the vector aspect ratio.</span>
                </div>
                <div className="text-xs text-plum-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>Do not place on low-contrast patterned backgrounds.</span>
                </div>
                <div className="text-xs text-plum-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>Do not recolor using unauthorized neon or saturated hues.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
