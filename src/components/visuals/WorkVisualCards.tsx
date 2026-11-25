"use client";

import React from "react";
import { QrCode, Sparkles, Heart, FileText, Layers, Calendar, Clock } from "lucide-react";

interface BrandCardVisualProps {
  slug: string;
  title: string;
  palette: Array<{ name: string; hex: string }>;
}

export function BrandKitVisualCard({ slug, title, palette }: BrandCardVisualProps) {
  const primaryHex = palette[0]?.hex || "#D9577B";
  const secondaryHex = palette[1]?.hex || "#F8D7DF";
  const darkHex = palette[2]?.hex || "#2B1B2E";
  const brandWord = title.split(" ")[0];

  return (
    <div className="w-full aspect-[16/10] rounded-2xl bg-gradient-to-br from-cream-100 via-blush-50 to-lilac-100/50 p-4 border border-blush-200 relative overflow-hidden flex items-center justify-center">
      {/* Background Subtle Arc */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 200 120" fill="none">
        <circle cx="100" cy="60" r="50" stroke={primaryHex} strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* 3D Tilted Card 1 (Back Layer) */}
      <div
        className="absolute w-44 h-24 rounded-xl p-3 shadow-soft-lg transform -rotate-6 -translate-x-4 -translate-y-2 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0"
        style={{ backgroundColor: darkHex }}
      >
        <div className="h-full flex flex-col justify-between text-white">
          <span className="font-serif font-bold text-xs" style={{ color: secondaryHex }}>
            {brandWord}
          </span>
          <span className="text-[7px] font-mono opacity-70">Identity & Design System</span>
        </div>
      </div>

      {/* 3D Tilted Card 2 (Front Layer) */}
      <div
        className="relative z-10 w-44 h-24 rounded-xl bg-white p-3 shadow-soft-xl border border-blush-200 transform rotate-3 translate-x-3 translate-y-2 transition-transform duration-500 group-hover:scale-105"
      >
        <div className="h-full flex flex-col justify-between text-plum">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-serif font-bold text-[11px] text-plum block">{brandWord}</span>
              <span className="text-[8px] text-rose-700 font-semibold block">Brand Kit</span>
            </div>
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[9px] font-bold"
              style={{ backgroundColor: primaryHex }}
            >
              {brandWord.slice(0, 2).toUpperCase()}
            </div>
          </div>
          <div className="flex gap-1 pt-1 border-t border-blush-100">
            {palette.slice(0, 4).map((p) => (
              <span key={p.name} className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ backgroundColor: p.hex }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface GraphicVisualCardProps {
  category: string;
  title: string;
  dimensions?: string;
}

export function LogoVisualCard({ title, industry, index }: { title: string; industry: string; index: number }) {
  const letters = title.split(" ")[0].slice(0, 2).toUpperCase();
  const colors = ["#D9577B", "#C25E71", "#7B5EA7", "#D48B47"];
  const color = colors[index % colors.length];

  return (
    <div className="w-full aspect-square rounded-2xl bg-cream-100/70 border border-blush-200 relative flex items-center justify-center p-4 mb-4 overflow-hidden group-hover:bg-cream-100 transition-colors">
      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
        <line x1="10" y1="50" x2="90" y2="50" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" />
      </svg>
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-serif text-2xl font-bold shadow-soft relative z-10 transform group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: color }}
      >
        {letters}
      </div>
      <div className="absolute bottom-2 right-2 text-[8px] font-mono text-plum-400">1:1.618</div>
    </div>
  );
}
export function GraphicVisualCard({ category, title, dimensions }: GraphicVisualCardProps) {
  switch (category) {
    case "invitation":
      return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-cream-100 via-rose-50 to-amber-50 p-4 border border-blush-300 relative overflow-hidden flex flex-col justify-between text-center shadow-soft-sm">
          <div className="text-[8px] font-bold uppercase tracking-widest text-rose-700">
            Luxury Event Invitation
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-xs text-plum">{title}</h4>
            <div className="text-[8px] text-plum-500">Gold Foil Pressed • RSVP</div>
          </div>
          <div className="text-[7px] font-mono text-plum-400">Canva & Figma Print Ready</div>
        </div>
      );

    case "brochure":
      return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-cream-50 p-3 border border-blush-200 grid grid-cols-3 gap-1.5 shadow-soft-sm">
          <div className="h-full rounded-lg bg-white border border-blush-200 p-1.5 flex flex-col justify-between text-[7px] text-center">
            <span className="font-serif font-bold text-plum">01</span>
            <span className="text-plum-500">Intro</span>
          </div>
          <div className="h-full rounded-lg bg-blush-100 border border-blush-300 p-1.5 flex flex-col justify-between text-[7px] text-center">
            <span className="font-serif font-bold text-rose-800">02</span>
            <span className="text-rose-700 font-bold">Services</span>
          </div>
          <div className="h-full rounded-lg bg-white border border-blush-200 p-1.5 flex flex-col justify-between text-[7px] text-center">
            <span className="font-serif font-bold text-plum">03</span>
            <QrCode className="w-4 h-4 mx-auto text-plum-600" />
          </div>
        </div>
      );

    case "flyer":
      return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blush-100 via-white to-rose-100 p-4 border border-blush-300 flex flex-col justify-between shadow-soft-sm">
          <div className="flex justify-between items-center">
            <span className="px-2 py-0.5 rounded-full text-[8px] font-bold bg-rose-500 text-white">
              Special Offer
            </span>
            <span className="text-[8px] font-mono text-plum-500">A5 Glossy</span>
          </div>
          <div>
            <h4 className="font-serif font-bold text-xs text-plum">{title}</h4>
            <p className="text-[8px] text-plum-600 mt-0.5">High-impact marketing creative with clear CTA.</p>
          </div>
          <div className="h-1.5 w-full bg-rose-400 rounded-full" />
        </div>
      );

    case "business-card":
      return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-cream-100 p-4 border border-blush-200 flex items-center justify-center relative overflow-hidden shadow-soft-sm">
          <div className="w-40 h-22 rounded-xl bg-plum-900 text-white p-3 shadow-soft-lg transform -rotate-3 text-xs flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="font-serif font-bold text-[10px] text-rose-300">Priya K. Lakkad</span>
              <span className="text-[7px] font-mono text-white/60">UI/UX Designer</span>
            </div>
            <div className="flex justify-between items-end text-[7px] font-mono text-white/70">
              <span>Foil Debossed</span>
              <span>Surat, India</span>
            </div>
          </div>
        </div>
      );

    case "social":
    default:
      return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-tr from-blush-100 via-white to-lilac-100 p-3 border border-blush-200 grid grid-cols-2 gap-2 shadow-soft-sm">
          <div className="rounded-xl bg-rose-500 text-white p-2 flex flex-col justify-between text-[8px]">
            <span className="font-mono opacity-80">Slide 1</span>
            <span className="font-serif font-bold text-[9px] leading-tight">Healthcare UX</span>
            <span className="opacity-70">Swipe →</span>
          </div>
          <div className="rounded-xl bg-white border border-blush-200 p-2 flex flex-col justify-between text-[8px] text-plum">
            <span className="font-mono text-rose-700 font-bold">Slide 2</span>
            <span className="font-sans text-[8px]">User Flows</span>
            <span className="text-plum-400">Save ↗</span>
          </div>
        </div>
      );
  }
}
