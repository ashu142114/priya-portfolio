"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparkleIcon } from "@/components/common/Stickers";
import { brandKits } from "@/data/brandKits";
import {
  ArrowRight,
  Layers,
  Palette,
  Check,
  Sparkles,
  QrCode,
  ShieldCheck,
  Compass,
  FileText,
  CreditCard,
  Package,
  ShoppingBag,
  Instagram,
} from "lucide-react";

const brandThemes = [
  {
    id: "careflow",
    name: "CareFlow Telehealth",
    tagline: "Empathetic healthcare identity with calming rose & warm cream tones",
    primaryColor: "#D9577B",
    secondaryColor: "#F8D7DF",
    darkColor: "#2B1B2E",
    symbol: "CF",
  },
  {
    id: "aura",
    name: "Aura Women's Health",
    tagline: "Holistic feminine wellness system with lilac curves and warm terracotta",
    primaryColor: "#C25E71",
    secondaryColor: "#E6DDF7",
    darkColor: "#2B1B2E",
    symbol: "AW",
  },
  {
    id: "zenith",
    name: "Zenith Cloud SaaS",
    tagline: "High-performance enterprise software branding with electric plum contrast",
    primaryColor: "#7B5EA7",
    secondaryColor: "#F0EBF9",
    darkColor: "#1A1024",
    symbol: "ZS",
  },
  {
    id: "celebre",
    name: "Célèbre Event Design",
    tagline: "Luxury bespoke celebration branding with gold accents and editorial typography",
    primaryColor: "#D48B47",
    secondaryColor: "#FDF4EB",
    darkColor: "#2D1D14",
    symbol: "CE",
  },
];

export default function Chapter6BrandKit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentBrand = brandKits[activeBrandIndex] || brandKits[0];
  const activeTheme = brandThemes[activeBrandIndex] || brandThemes[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 25%",
      end: "bottom 75%",
      scrub: 0.4,
      onUpdate: (self) => {
        setProgress(self.progress);
        const idx = Math.min(
          Math.floor(self.progress * brandThemes.length),
          brandThemes.length - 1
        );
        setActiveBrandIndex(idx);
      },
    });

    stRef.current = st;

    return () => {
      st.kill();
      stRef.current = null;
    };
  }, []);

  const handleBrandClick = (idx: number) => {
    setActiveBrandIndex(idx);
    const st = stRef.current;
    if (st) {
      const targetScroll = st.start + (st.end - st.start) * ((idx + 0.1) / brandThemes.length);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <div
      id="chapter-brand-kit"
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 border-b border-blush-200/80 bg-cream-50 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-200 text-xs font-semibold text-rose-700 mb-3 shadow-soft-sm">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>Chapter 06 • Brand Identity Kit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            How The Brand Assembles
          </h2>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            From geometric SVG vector curves to tangible, real-world touchpoints: luxury stationery, packaging, 
            social marketing systems, and advertising collateral.
          </p>
        </div>

        {/* Sticky Scroll-Synced Concept Brand Switcher */}
        <div className="sticky top-20 z-20 max-w-4xl mx-auto mb-10 py-3 px-4 rounded-3xl bg-cream-50/90 backdrop-blur-md border border-blush-200/70 shadow-soft-sm">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-2.5">
            {brandThemes.map((brand, idx) => (
              <button
                key={brand.id}
                onClick={() => handleBrandClick(idx)}
                className={`min-h-[40px] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeBrandIndex === idx
                    ? "bg-rose-500 text-white shadow-soft scale-105"
                    : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/10 shrink-0 shadow-xs"
                  style={{ backgroundColor: brand.primaryColor }}
                />
                <span>{brand.name}</span>
                <span className="text-[10px] uppercase font-bold opacity-80 px-1.5 py-0.5 rounded-md bg-black/10">
                  Concept
                </span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 px-2">
            <span className="font-mono text-[11px] font-bold text-rose-700 shrink-0">
              0{activeBrandIndex + 1} / 0{brandThemes.length}
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-cream-200 overflow-hidden">
              <div
                className="h-full bg-rose-500 rounded-full transition-all duration-200"
                style={{
                  width: `${Math.max(((activeBrandIndex + 1) / brandThemes.length) * 100, progress * 100)}%`,
                }}
              />
            </div>
            <span className="font-mono text-[10px] text-plum-400 shrink-0">Scroll to switch brand kit</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TANGIBLE VISUAL COLLATERAL SHOWCASE (2-COLUMN GRID) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Vector Logo Mark & 3D Luxury Business Cards */}
          <div className="lg:col-span-6 space-y-8">
            {/* 1. Vector Logo & Golden Ratio Construction Grid */}
            <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-rose-700 uppercase block mb-1">
                    01 • Geometric Vector Mark & Geometry
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-plum">{activeTheme.name}</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blush-100 text-rose-800 border border-blush-200">
                  Concept Brand
                </span>
              </div>

              {/* Construction Grid Canvas with SVG circles and arcs */}
              <div className="w-full h-56 rounded-3xl bg-cream-100/90 border border-blush-200/80 relative flex items-center justify-center p-6 overflow-hidden">
                {/* SVG Geometry Grid Background */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  viewBox="0 0 400 220"
                  fill="none"
                  stroke={activeTheme.primaryColor}
                  strokeWidth="0.8"
                >
                  <circle cx="200" cy="110" r="90" strokeDasharray="3 3" />
                  <circle cx="200" cy="110" r="55" strokeDasharray="3 3" />
                  <circle cx="160" cy="110" r="40" strokeDasharray="2 2" />
                  <circle cx="240" cy="110" r="40" strokeDasharray="2 2" />
                  <line x1="20" y1="110" x2="380" y2="110" strokeDasharray="4 4" />
                  <line x1="200" y1="10" x2="200" y2="210" strokeDasharray="4 4" />
                </svg>

                {/* Main Prominent Vector Monogram Mark */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-soft-xl border-2 border-white/80 transition-all duration-500 transform hover:scale-110"
                    style={{ backgroundColor: activeTheme.primaryColor }}
                  >
                    <span className="font-serif text-4xl font-bold tracking-tight">
                      {activeTheme.symbol}
                    </span>
                  </div>
                  <span className="font-serif font-bold text-base text-plum mt-3 tracking-wide">
                    {activeTheme.name.split(" ")[0]}
                  </span>
                </div>

                {/* Subtle Grid Measure Chips */}
                <div className="absolute left-4 bottom-3 px-2 py-1 rounded-md bg-white/90 border border-blush-200 text-[10px] font-mono text-plum-600">
                  Golden Ratio • 1:1.618
                </div>
                <div className="absolute right-4 bottom-3 px-2 py-1 rounded-md bg-white/90 border border-blush-200 text-[10px] font-mono text-plum-600">
                  48px Baseline Grid
                </div>
              </div>

              {/* Color Ramp Swatches */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-plum-500 block mb-2">
                  Harmonized Color System (HEX / Tokens)
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: "Primary", hex: activeTheme.primaryColor },
                    { name: "Secondary", hex: activeTheme.secondaryColor },
                    { name: "Contrast", hex: activeTheme.darkColor },
                    { name: "Base Cream", hex: "#FFF8F5" },
                  ].map((color) => (
                    <div key={color.name} className="p-2 rounded-xl bg-cream-50 border border-blush-200 text-center">
                      <div
                        className="w-full h-8 rounded-lg mb-1.5 shadow-xs border border-black/5"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-[10px] font-bold text-plum block">{color.name}</span>
                      <span className="text-[9px] font-mono text-plum-500 block">{color.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Dual-Sided 3D Luxury Foil Business Cards */}
            <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg space-y-4">
              <span className="font-mono text-xs font-bold text-rose-700 uppercase block mb-1">
                02 • Tactile Dual-Sided Foil Business Cards
              </span>
              <p className="text-xs text-plum-600 mb-4">
                3D rotated cotton paper stock with rose-gold metallic foil debossing and NFC chip contact sharing.
              </p>

              {/* Cards Perspective Stage */}
              <div className="relative h-64 rounded-3xl bg-gradient-to-br from-cream-100 via-blush-50 to-lilac-100/40 p-6 flex items-center justify-center overflow-hidden border border-blush-200">
                {/* Back Card (Angled & Tilted) */}
                <div
                  className="absolute w-64 h-36 rounded-2xl p-5 shadow-soft-xl border border-blush-300 transition-all duration-700 ease-out transform -rotate-6 -translate-x-6 -translate-y-4 hover:rotate-0 hover:translate-x-0"
                  style={{ backgroundColor: activeTheme.darkColor }}
                >
                  <div className="h-full flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="font-serif font-bold text-lg tracking-wider" style={{ color: activeTheme.secondaryColor }}>
                        {activeTheme.name.split(" ")[0]}
                      </span>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs"
                        style={{ backgroundColor: activeTheme.primaryColor }}
                      >
                        {activeTheme.symbol}
                      </div>
                    </div>
                    <div className="flex justify-between items-end text-[9px] font-mono text-white/70">
                      <span>Identity & Experience System</span>
                      <span>Verified Concept</span>
                    </div>
                  </div>
                </div>

                {/* Front Card (Elevated with Drop Shadow) */}
                <div
                  className="relative z-10 w-64 h-36 rounded-2xl bg-white p-5 shadow-soft-2xl border border-blush-200 transition-all duration-700 ease-out transform rotate-3 translate-x-4 translate-y-3 hover:rotate-0 hover:scale-105"
                >
                  <div className="h-full flex flex-col justify-between text-plum">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif font-bold text-sm text-plum">Priya K. Lakkad</h4>
                        <span className="text-[10px] text-rose-700 font-medium">UI/UX & Product Designer</span>
                      </div>
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-serif font-bold text-xs shadow-soft"
                        style={{ backgroundColor: activeTheme.primaryColor }}
                      >
                        {activeTheme.symbol}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-blush-100 flex justify-between items-end text-[9px] font-mono text-plum-500">
                      <div>
                        <div>priyalakkad11@gmail.com</div>
                        <div>Surat, Gujarat, India</div>
                      </div>
                      <QrCode className="w-5 h-5 text-plum-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Office Stationery, Product Packaging, & Instagram Carousel */}
          <div className="lg:col-span-6 space-y-8">
            {/* 3. Tangible Office Stationery (Letterhead, Envelope & ID Badge) */}
            <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg space-y-4">
              <span className="font-mono text-xs font-bold text-rose-700 uppercase block mb-1">
                03 • Corporate Stationery & Identity Suite
              </span>
              <p className="text-xs text-plum-600 mb-4">
                Formal A4 letterhead with watermarked seal, DL envelope, and magnetic staff lanyard badge.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* A4 Letterhead Preview */}
                <div className="p-5 rounded-2xl bg-cream-50 border border-blush-200 relative overflow-hidden shadow-soft-sm space-y-3">
                  <div className="flex justify-between items-center border-b border-blush-200 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[9px] font-bold"
                        style={{ backgroundColor: activeTheme.primaryColor }}
                      >
                        {activeTheme.symbol}
                      </div>
                      <span className="font-serif font-bold text-xs text-plum">{activeTheme.name.split(" ")[0]}</span>
                    </div>
                    <span className="text-[8px] font-mono text-plum-400">OFFICIAL A4</span>
                  </div>

                  <div className="space-y-1.5 py-1">
                    <div className="h-2 w-3/4 bg-plum-100 rounded-sm" />
                    <div className="h-2 w-full bg-plum-50 rounded-sm" />
                    <div className="h-2 w-5/6 bg-plum-50 rounded-sm" />
                    <div className="h-2 w-2/3 bg-plum-50 rounded-sm" />
                  </div>

                  <div className="pt-2 border-t border-blush-200 flex justify-between items-center text-[8px] text-plum-500 font-mono">
                    <span>Confidential Healthcare</span>
                    <span className="text-rose-600 font-bold">Authorized Seal</span>
                  </div>
                </div>

                {/* Staff ID Lanyard Badge */}
                <div className="p-5 rounded-2xl bg-white border border-blush-200 shadow-soft-sm flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase text-rose-700 tracking-wider">Access Pass</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blush-200 to-rose-200 flex items-center justify-center font-bold text-xs text-plum border border-blush-300">
                      PK
                    </div>
                    <div>
                      <div className="text-xs font-bold text-plum">Priya K. Lakkad</div>
                      <div className="text-[10px] text-plum-500">UI/UX Designer</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-blush-100 flex justify-between items-center text-[9px] font-mono text-plum-400">
                    <span>ID: #PK-2026</span>
                    <div className="flex gap-0.5">
                      <span className="w-1 h-3 bg-plum-900" />
                      <span className="w-1.5 h-3 bg-plum-900" />
                      <span className="w-0.5 h-3 bg-plum-900" />
                      <span className="w-1 h-3 bg-plum-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Product Packaging Box & Cotton Tote Bag */}
            <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg space-y-4">
              <span className="font-mono text-xs font-bold text-rose-700 uppercase block mb-1">
                04 • Packaging & Merchandise Mockups
              </span>
              <p className="text-xs text-plum-600 mb-4">
                Rigid premium delivery box and organic cotton screen-printed tote bag.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 3D Packaging Box Mockup */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cream-100 to-blush-100 border border-blush-200 flex flex-col items-center justify-center text-center shadow-soft-sm min-h-[140px]">
                  <Package className="w-8 h-8 text-rose-600 mb-2" />
                  <span className="text-xs font-serif font-bold text-plum">{activeTheme.name.split(" ")[0]} Care Kit</span>
                  <span className="text-[10px] text-plum-500 mt-0.5">Embossed Foil Rigid Box</span>
                </div>

                {/* Cotton Tote Bag Mockup */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-cream-100 border border-blush-200 flex flex-col items-center justify-center text-center shadow-soft-sm min-h-[140px]">
                  <ShoppingBag className="w-8 h-8 text-plum-600 mb-2" />
                  <span className="text-xs font-serif font-bold text-plum">Organic Cotton Tote</span>
                  <span className="text-[10px] text-plum-500 mt-0.5">Eco Silk-Screened Canvas</span>
                </div>
              </div>
            </div>

            {/* 5. Multi-Slide Instagram & Social Media Kit */}
            <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-rose-700 uppercase block mb-1">
                    05 • Social Media & Campaign Kit
                  </span>
                  <h4 className="font-serif font-bold text-lg text-plum">1080x1350 Carousel Design System</h4>
                </div>
                <Instagram className="w-5 h-5 text-rose-600" />
              </div>
              <p className="text-xs text-plum-600">
                Created in Figma & Canva: modular multi-slide educational carousels with infographics and typography rules.
              </p>

              {/* 3-Slide Carousel Preview */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {/* Slide 1 */}
                <div
                  className="aspect-[4/5] rounded-2xl p-3 flex flex-col justify-between text-white shadow-soft-sm border border-black/5"
                  style={{ backgroundColor: activeTheme.primaryColor }}
                >
                  <span className="text-[9px] font-mono opacity-80">Slide 01</span>
                  <div className="font-serif font-bold text-[11px] leading-tight">
                    Healthcare UX Made Simple
                  </div>
                  <span className="text-[8px] opacity-75">Swipe →</span>
                </div>

                {/* Slide 2 */}
                <div className="aspect-[4/5] rounded-2xl bg-white p-3 flex flex-col justify-between text-plum shadow-soft-sm border border-blush-200">
                  <span className="text-[9px] font-mono text-rose-700 font-bold">Slide 02</span>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-plum">3-Tap Flow</div>
                    <div className="h-1.5 w-full bg-blush-100 rounded-sm" />
                    <div className="h-1.5 w-3/4 bg-blush-200 rounded-sm" />
                  </div>
                  <span className="text-[8px] text-plum-400">Zero Friction</span>
                </div>

                {/* Slide 3 */}
                <div
                  className="aspect-[4/5] rounded-2xl p-3 flex flex-col justify-between text-white shadow-soft-sm border border-black/5"
                  style={{ backgroundColor: activeTheme.darkColor }}
                >
                  <span className="text-[9px] font-mono opacity-80">Slide 03</span>
                  <div className="font-serif font-bold text-[11px] leading-tight">
                    Empathy & Care in Every Pixel
                  </div>
                  <span className="text-[8px] text-rose-300">Save Post ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Link to Full Branding Page */}
        <div className="p-8 sm:p-10 rounded-4xl bg-gradient-to-br from-cream-100 via-blush-100 to-white border border-blush-300 shadow-soft-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 block mb-1">
              Explore Complete Brand Identities
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
              Want to see full Brand Identity Kits?
            </h3>
            <p className="text-xs sm:text-sm text-plum-600 mt-1 max-w-xl">
              Inspect comprehensive brand systems with full stationery sets, packaging guidelines, logo construction grids, and color rules.
            </p>
          </div>
          <Link
            href="/work/branding"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-soft hover:bg-rose-600 transition-all shrink-0 active:scale-95"
          >
            <span>View All Brand Kits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
