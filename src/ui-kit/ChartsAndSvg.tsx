"use client";

import React from "react";
import { ArrowUpDown, MapPin } from "lucide-react";
import { KitThemeProps } from "./Controls";

export function KitTable({
  headers,
  rows,
  border = "#E2E8F0",
}: {
  headers: string[];
  rows: Array<string[]>;
} & KitThemeProps) {
  return (
    <div className="rounded-xl bg-white border overflow-hidden text-[9px]" style={{ borderColor: border }}>
      <div className="grid bg-slate-50 border-b px-3 py-1.5 font-bold text-slate-600" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`, borderColor: border }}>
        {headers.map((h) => (
          <span key={h} className="flex items-center gap-1 truncate">
            {h} <ArrowUpDown className="w-2.5 h-2.5 opacity-50" />
          </span>
        ))}
      </div>
      <div className="divide-y" style={{ borderColor: border }}>
        {rows.map((r, i) => (
          <div key={i} className="grid px-3 py-2 items-center" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
            {r.map((cell, j) => (
              <span key={j} className={j === 0 ? "font-semibold truncate" : "text-slate-600 truncate"}>
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="px-3 py-1 bg-slate-50/70 border-t flex justify-between text-[8px] text-slate-500" style={{ borderColor: border }}>
        <span>Showing {rows.length} rows</span>
        <span>Page 1 of 3</span>
      </div>
    </div>
  );
}

export function KitLineChart({ primary = "#0D7C85" }: KitThemeProps) {
  return (
    <svg viewBox="0 0 220 64" className="w-full h-14" fill="none">
      <line x1="0" y1="56" x2="220" y2="56" stroke="#E2E8F0" strokeWidth="1" />
      <path d="M 8 44 Q 45 20, 82 34 T 156 22 T 212 12" stroke={primary} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="82" cy="34" r="3" fill={primary} />
      <circle cx="156" cy="22" r="3" fill={primary} />
      <circle cx="212" cy="12" r="3.5" fill={primary} />
    </svg>
  );
}

export function KitBarChart({ values = [38, 62, 50, 84, 72, 92], primary = "#0D7C85", primarySoft = "#E4F5F4" }: { values?: number[] } & KitThemeProps) {
  return (
    <div className="flex items-end justify-between gap-1.5 h-14 pt-2">
      {values.map((v, i) => (
        <div key={i} className="flex-1 h-full flex items-end rounded-t-md overflow-hidden" style={{ backgroundColor: primarySoft }}>
          <div className="w-full rounded-t-md" style={{ height: `${v}%`, backgroundColor: primary }} />
        </div>
      ))}
    </div>
  );
}

export function KitDonutChart({ percent = 72, label = "72%", primary = "#0D7C85", primarySoft = "#E4F5F4" }: { percent?: number; label?: string } & KitThemeProps) {
  const dash = 138;
  const offset = dash - (dash * percent) / 100;
  return (
    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 54 54" className="w-full h-full -rotate-90">
        <circle cx="27" cy="27" r="22" fill="none" stroke={primarySoft} strokeWidth="6" />
        <circle cx="27" cy="27" r="22" fill="none" stroke={primary} strokeWidth="6" strokeDasharray={dash} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <span className="absolute text-[9px] font-bold">{label}</span>
    </div>
  );
}

export function KitRingChart({ percent = 68, title = "Day 14", primary = "#C8556B", primarySoft = "#FBE9ED" }: { percent?: number; title?: string } & KitThemeProps) {
  return <KitDonutChart percent={percent} label={title} primary={primary} primarySoft={primarySoft} />;
}

export function KitSparkline({ primary = "#0D7C85" }: KitThemeProps) {
  return (
    <svg viewBox="0 0 120 26" className="w-24 h-6" fill="none">
      <polyline points="2,20 22,14 42,17 62,8 82,12 102,4 118,7" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function KitHeatmap({ primary = "#15803D" }: KitThemeProps) {
  const ops = [0.2, 0.5, 0.9, 0.4, 0.8, 1, 0.3, 0.6, 0.85, 0.5, 0.95, 0.7, 0.35, 0.65];
  return (
    <div className="grid grid-cols-7 gap-1">
      {ops.map((o, i) => (
        <span key={i} className="aspect-square rounded-sm" style={{ backgroundColor: primary, opacity: o }} />
      ))}
    </div>
  );
}

export function KitCalendar({ activeDay = 14, primary = "#C8556B", primarySoft = "#FBE9ED" }: { activeDay?: number } & KitThemeProps) {
  const days = Array.from({ length: 14 }, (_, i) => i + 8);
  return (
    <div className="grid grid-cols-7 gap-1 text-center text-[8px]">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
        <span key={i} className="font-bold text-slate-400">{d}</span>
      ))}
      {days.map((d) => (
        <span
          key={d}
          className="py-1 rounded-md font-semibold"
          style={d === activeDay ? { backgroundColor: primary, color: "#FFF" } : d === activeDay - 1 || d === activeDay + 1 ? { backgroundColor: primarySoft, color: primary } : undefined}
        >
          {d}
        </span>
      ))}
    </div>
  );
}

export function KitTimeSlotPicker({
  slots = ["09:30 AM", "10:30 AM", "12:00 PM", "04:00 PM"],
  selected = 1,
  primary = "#2563EB",
  primarySoft = "#EFF6FF",
  border = "#D6E2F2",
}: { slots?: string[]; selected?: number } & KitThemeProps) {
  return (
    <div className="grid grid-cols-2 gap-1.5 text-[9px]">
      {slots.map((s, i) => (
        <span
          key={s}
          className="py-1.5 px-2 rounded-lg border text-center font-semibold"
          style={i === selected ? { backgroundColor: primary, borderColor: primary, color: "#FFF" } : { backgroundColor: primarySoft, borderColor: border }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export function KitSvgMap({ label = "Surat • Vesu Clinic", primary = "#0D7C85" }: { label?: string } & KitThemeProps) {
  return (
    <div className="relative h-20 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
      <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full opacity-40" fill="none">
        <path d="M0 20 L200 20 M0 55 L200 55 M45 0 L45 80 M135 0 L135 80" stroke="#94A3B8" strokeWidth="2" />
      </svg>
      <div className="relative z-10 px-2.5 py-1 rounded-full bg-white shadow-sm border text-[9px] font-bold flex items-center gap-1" style={{ color: primary }}>
        <MapPin className="w-3 h-3" /> {label}
      </div>
    </div>
  );
}

export function KitSpotIllustration({ styleType = "healthcare", primary = "#0D7C85", primarySoft = "#E4F5F4" }: { styleType?: string } & KitThemeProps) {
  return (
    <svg viewBox="0 0 80 60" className="w-16 h-12 shrink-0" fill="none">
      <rect width="80" height="60" rx="14" fill={primarySoft} />
      {styleType === "wellness" ? (
        <>
          <circle cx="40" cy="30" r="16" stroke={primary} strokeWidth="2.5" />
          <path d="M40 18 C48 24, 48 36, 40 42 C32 36, 32 24, 40 18 Z" fill={primary} opacity="0.25" />
        </>
      ) : (
        <>
          <rect x="20" y="14" width="40" height="32" rx="8" fill="#FFFFFF" stroke={primary} strokeWidth="2" />
          <path d="M40 23 V37 M33 30 H47" stroke={primary} strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
