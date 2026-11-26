"use client";

import { useState } from "react";
import Link from "next/link";
import { logos } from "@/data/logos";
import * as LogoSVGs from "@/components/visuals/LogoVisuals";
import BeforeAfterSlider from "@/components/common/BeforeAfterSlider";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowLeft, Palette, CheckCircle2, Sliders, Eye, Sparkles } from "lucide-react";

export default function LogoDesignPage() {
  const [activeLogoId, setActiveLogoId] = useState("careflow-identity");
  const [colorMode, setColorMode] = useState<"light" | "dark" | "mono">("light");
  const [viewMode, setViewMode] = useState<"full" | "grid" | "mockups">("full");

  const selectedLogo = logos.find((l) => l.id === activeLogoId) || logos[0];

  const renderLogoComponent = (mode: "light" | "dark" | "mono", variant: "full" | "grid" | "symbol") => {
    switch (activeLogoId) {
      case "aura-menstrual-wellness":
        return <LogoSVGs.AuraWellnessLogo mode={mode} variant={variant} />;
      case "zenith-saas-platform":
        return <LogoSVGs.ZenithLogo mode={mode} variant={variant} />;
      case "celebre-invitations-mark":
        return <LogoSVGs.CelebreLogo mode={mode} variant={variant} />;
      case "careflow-identity":
      default:
        return <LogoSVGs.CareFlowLogo mode={mode} variant={variant} />;
    }
  };

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

          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
              <Palette className="w-3.5 h-3.5 text-rose-600" />
              <span>Identity Design Lab</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight">
              Logo Design & Vector Brand Marks
            </h1>
            <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
              Explore 4 concept vector marks crafted with mathematical harmony, golden-ratio construction grids, and real-world stationery applications.
            </p>
          </div>
        </div>

        {/* Logo Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-blush-200">
          {logos.map((logo) => (
            <button
              key={logo.id}
              onClick={() => setActiveLogoId(logo.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                activeLogoId === logo.id
                  ? "bg-rose-500 text-white shadow-soft"
                  : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-lilac-200 text-plum-900">
                Concept
              </span>
              <span>{logo.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Logo Studio Workspace */}
        <div className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-blush-100">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-lilac-200 text-plum-900 border border-lilac-300">
                  Concept
                </span>
                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blush-100 text-rose-800">
                  {selectedLogo.industry}
                </span>
                <span className="text-xs text-plum-500">{selectedLogo.year}</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-plum">{selectedLogo.title}</h2>
            </div>

            {/* View Mode Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("full")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${viewMode === "full" ? "bg-plum text-white" : "bg-cream-100 text-plum-700"}`}
              >
                Mark View
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${viewMode === "grid" ? "bg-plum text-white" : "bg-cream-100 text-plum-700"}`}
              >
                Geometry Grid
              </button>
              <button
                onClick={() => setViewMode("mockups")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${viewMode === "mockups" ? "bg-plum text-white" : "bg-cream-100 text-plum-700"}`}
              >
                Applications
              </button>
            </div>
          </div>

          {/* Canvas Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Canvas (Light / Dark / Mono / Grid) */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-cream-50 border border-blush-200 min-h-[360px] relative">
              {/* Color Mode Switcher */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 p-1 rounded-full bg-white border border-blush-200 text-[10px] shadow-xs">
                {(["light", "dark", "mono"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setColorMode(m)}
                    className={`px-2.5 py-1 rounded-full capitalize font-semibold ${colorMode === m ? "bg-rose-500 text-white" : "text-plum-600"}`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {viewMode === "grid" ? (
                <div className="w-56 h-56 flex items-center justify-center">
                  {renderLogoComponent(colorMode, "grid")}
                </div>
              ) : viewMode === "mockups" ? (
                <div className="grid grid-cols-2 gap-3 w-full">
                  {/* Business Card Mockup */}
                  <div className="p-4 rounded-2xl bg-white border border-blush-200 shadow-soft text-center aspect-[16/10] flex flex-col justify-center items-center">
                    {renderLogoComponent("light", "symbol")}
                    <span className="font-serif font-bold text-xs text-plum mt-2">Executive Card</span>
                  </div>
                  {/* App Icon Mockup */}
                  <div className="p-4 rounded-2xl bg-plum-950 text-white shadow-soft text-center aspect-[16/10] flex flex-col justify-center items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      {renderLogoComponent("dark", "symbol")}
                    </div>
                    <span className="font-sans text-[10px] text-rose-200 mt-2">iOS App Icon</span>
                  </div>
                </div>
              ) : (
                <div className="scale-125 transform">
                  {renderLogoComponent(colorMode, "full")}
                </div>
              )}
            </div>

            {/* Right Details: Concept Notes & Typography Pair */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-5 rounded-2xl bg-cream-50 border border-blush-200 text-xs space-y-1">
                <span className="font-bold text-rose-700 block uppercase tracking-wider">Concept Rationale:</span>
                <p className="text-plum-600 leading-relaxed italic">{selectedLogo.conceptNotes}</p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-plum-500 block mb-2">
                  Color Formula & Swatches
                </span>
                <div className="flex gap-2">
                  {selectedLogo.colors.map((c) => (
                    <div key={c.name} className="flex-1 p-2.5 rounded-xl bg-cream-50 border border-blush-200 text-center">
                      <span className="w-5 h-5 rounded-full border border-black/10 mx-auto block mb-1" style={{ backgroundColor: c.hex }} />
                      <span className="font-mono text-[9px] text-plum-600 block">{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-plum-500 block mb-1">
                  Typography Pairing
                </span>
                <span className="text-xs font-semibold text-plum block">{selectedLogo.typography}</span>
              </div>
            </div>
          </div>

          {/* 3-Stage Evolution: Sketch -> Construction Grid -> Clear-Space -> Min Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-blush-100">
            <div className="p-5 rounded-3xl bg-cream-50 border border-blush-200 flex flex-col items-center justify-between text-center space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase text-rose-700">01 • Rough Sketch</span>
              <div className="w-24 h-24 rounded-2xl bg-white border border-dashed border-plum-300 flex items-center justify-center p-3 opacity-75">
                {renderLogoComponent("mono", "grid")}
              </div>
              <span className="text-[10px] text-plum-500">Initial proportions &amp; stroke balance</span>
            </div>

            <div className="p-5 rounded-3xl bg-cream-50 border border-blush-200 flex flex-col items-center justify-between text-center space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase text-rose-700">02 • Construction Grid</span>
              <div className="w-24 h-24 rounded-2xl bg-white border border-blush-200 flex items-center justify-center p-2">
                {renderLogoComponent("light", "grid")}
              </div>
              <span className="text-[10px] text-plum-500">Geometric arcs &amp; optical alignment</span>
            </div>

            <div className="p-5 rounded-3xl bg-cream-50 border border-blush-200 flex flex-col items-center justify-between text-center space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase text-rose-700">03 • Clear-Space (1x)</span>
              <div className="p-4 rounded-2xl bg-white border border-dashed border-rose-400 flex items-center justify-center">
                {renderLogoComponent("light", "symbol")}
              </div>
              <span className="text-[10px] text-plum-500">Minimum margin = 1x icon height</span>
            </div>

            <div className="p-5 rounded-3xl bg-cream-50 border border-blush-200 flex flex-col items-center justify-between text-center space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase text-rose-700">04 • Minimum Sizes</span>
              <div className="flex items-end gap-3 py-3">
                <div className="scale-100">{renderLogoComponent("light", "symbol")}</div>
                <div className="scale-75 opacity-80">{renderLogoComponent("light", "symbol")}</div>
              </div>
              <span className="text-[10px] text-plum-500">Digital 24px • Print 12mm</span>
            </div>
          </div>

          {/* Section: Draggable Old vs New Logo Slider */}
          <div className="pt-8 border-t border-blush-100 space-y-4">
            <span className="font-mono text-xs font-bold text-rose-700 uppercase block">
              Redesign Evolution: Previous Mark vs. Final Vector Identity
            </span>
            <BeforeAfterSlider
              beforeComponent={
                <div className="w-full h-36 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 font-serif font-bold text-lg mb-2">
                    OLD
                  </div>
                  <span className="text-[11px] font-mono text-gray-600">Unbalanced stroke widths & inconsistent clear-space</span>
                </div>
              }
              afterComponent={
                <div className="w-full h-36 flex flex-col items-center justify-center text-center p-4">
                  <div className="scale-110 mb-2">{renderLogoComponent("light", "symbol")}</div>
                  <span className="text-[11px] font-serif font-bold text-plum">Balanced Golden-Ratio Vector Mark</span>
                </div>
              }
              beforeLabel="OLD LOGO"
              afterLabel="NEW VECTOR"
            />
          </div>

          {/* Section: Real-World Brand Applications (App Icon, Signage, Packaging, Stationery) */}
          <div className="pt-8 border-t border-blush-100 space-y-4">
            <span className="font-mono text-xs font-bold text-rose-700 uppercase block">
              Real-World Mark Applications • Concept
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* App Icon */}
              <div className="p-5 rounded-3xl bg-cream-50 border border-blush-200 flex flex-col items-center justify-between text-center space-y-3">
                <span className="text-[10px] font-mono uppercase text-plum-500">iOS / Android App Icon</span>
                <div className="w-20 h-20 rounded-[22px] bg-white shadow-soft-md border border-black/5 flex items-center justify-center">
                  {renderLogoComponent("light", "symbol")}
                </div>
                <span className="text-[10px] text-plum-600">Squircle safe-area 1024px</span>
              </div>

              {/* Architectural Signage */}
              <div className="p-5 rounded-3xl bg-slate-900 text-white flex flex-col items-center justify-between text-center space-y-3">
                <span className="text-[10px] font-mono uppercase text-slate-400">Outdoor Facade Signage</span>
                <div className="px-4 py-3 rounded-xl bg-slate-800 border border-white/10 shadow-inner">
                  {renderLogoComponent("dark", "full")}
                </div>
                <span className="text-[10px] text-slate-300">Brushed aluminum + backlit halo</span>
              </div>

              {/* Packaging Box */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#FBF7F0] to-[#F3E9DC] border border-amber-200/70 flex flex-col items-center justify-between text-center space-y-3">
                <span className="text-[10px] font-mono uppercase text-amber-900">Kraft Packaging Sleeve</span>
                <div className="w-28 h-20 rounded-xl bg-white/90 border border-amber-200 shadow-sm flex items-center justify-center p-2">
                  {renderLogoComponent("light", "full")}
                </div>
                <span className="text-[10px] text-amber-900/80">Matte soy-ink spot print</span>
              </div>

              {/* Stationery Card */}
              <div className="p-5 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col items-center justify-between text-center space-y-3">
                <span className="text-[10px] font-mono uppercase text-plum-500">Letterhead &amp; Card</span>
                <div className="w-full p-3 rounded-xl bg-cream-50 border border-blush-100 flex items-center justify-between">
                  <div className="scale-75 origin-left">{renderLogoComponent("light", "symbol")}</div>
                  <div className="text-right text-[9px] text-plum-500 font-mono">
                    <div>350gsm Cotton</div>
                    <div>Surat Studio</div>
                  </div>
                </div>
                <span className="text-[10px] text-plum-600">Stationery lockup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
