"use client";

import React from "react";
import { CheckCircle2, AlertCircle, Inbox, ChevronRight, X } from "lucide-react";
import { KitThemeProps } from "./Controls";

export function KitCard({
  children,
  border = "#E2E8F0",
  wireframe = false,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
} & KitThemeProps) {
  return (
    <div
      className={`p-3 rounded-2xl border ${wireframe ? "bg-gray-50 border-gray-300" : "bg-white shadow-2xs"} ${className}`}
      style={!wireframe ? { borderColor: border } : undefined}
    >
      {children}
    </div>
  );
}

export function KitListItem({
  title,
  subtitle,
  leading,
  trailing,
  border = "#E2E8F0",
  wireframe = false,
}: {
  title: string;
  subtitle?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
} & KitThemeProps) {
  return (
    <div
      className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 ${
        wireframe ? "bg-gray-100 border-gray-300 text-gray-500" : "bg-white text-slate-800"
      }`}
      style={!wireframe ? { borderColor: border } : undefined}
    >
      <div className="flex items-center gap-2 min-w-0">
        {leading}
        <div className="min-w-0">
          <div className="text-[10px] font-bold truncate">{title}</div>
          {subtitle && <div className="text-[8px] text-slate-500 truncate">{subtitle}</div>}
        </div>
      </div>
      {trailing || <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />}
    </div>
  );
}

export function KitTabs({
  tabs,
  activeIndex = 0,
  primary = "#0D7C85",
  wireframe = false,
}: {
  tabs: string[];
  activeIndex?: number;
} & KitThemeProps) {
  return (
    <div className="flex border-b border-slate-200 gap-3 text-[10px]">
      {tabs.map((t, i) => (
        <span
          key={t}
          className={`pb-1.5 font-semibold border-b-2 ${
            i === activeIndex ? "text-slate-900" : "text-slate-400 border-transparent"
          }`}
          style={i === activeIndex && !wireframe ? { borderColor: primary, color: primary } : undefined}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function KitSegmentedControl({
  items,
  activeIndex = 0,
  primary = "#0D7C85",
  wireframe = false,
}: {
  items: string[];
  activeIndex?: number;
} & KitThemeProps) {
  return (
    <div className="p-0.5 rounded-lg bg-slate-100 grid gap-0.5 text-[9px] font-semibold text-center" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map((item, i) => (
        <span
          key={item}
          className={`py-1 rounded-md ${i === activeIndex ? "bg-white shadow-2xs" : "text-slate-500"}`}
          style={i === activeIndex && !wireframe ? { color: primary } : undefined}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function KitBottomTabBar({
  items,
  activeIndex = 0,
  primary = "#0D7C85",
  border = "#E2E8F0",
  wireframe = false,
}: {
  items: Array<{ label: string; icon: React.ReactNode }>;
  activeIndex?: number;
} & KitThemeProps) {
  return (
    <div
      className={`pt-1.5 pb-0.5 border-t flex justify-around items-center text-[8px] shrink-0 ${
        wireframe ? "border-gray-300 text-gray-500" : "bg-white/95"
      }`}
      style={!wireframe ? { borderColor: border } : undefined}
    >
      {items.map((it, i) => (
        <span
          key={it.label}
          className="flex flex-col items-center gap-0.5 font-medium"
          style={!wireframe && i === activeIndex ? { color: primary, fontWeight: 700 } : { color: "#64748B" }}
        >
          {it.icon}
          <span>{it.label}</span>
        </span>
      ))}
    </div>
  );
}

export function KitTopAppBar({
  title,
  subtitle,
  right,
  wireframe = false,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
} & KitThemeProps) {
  return (
    <div className={`flex items-center justify-between pb-2 border-b ${wireframe ? "border-gray-300" : "border-slate-200/70"}`}>
      <div>
        {subtitle && <span className="text-[8px] uppercase font-bold tracking-wider text-slate-400 block">{subtitle}</span>}
        <h4 className="font-bold text-xs leading-tight">{title}</h4>
      </div>
      {right}
    </div>
  );
}

export function KitSidebarNav({
  brand,
  items,
  activeIndex = 0,
  primary = "#0D7C85",
  primarySoft = "#E4F5F4",
}: {
  brand: string;
  items: Array<{ label: string; icon: React.ReactNode }>;
  activeIndex?: number;
} & KitThemeProps) {
  return (
    <div className="space-y-3">
      <div className="font-bold text-xs px-2">{brand}</div>
      <div className="space-y-1">
        {items.map((it, i) => (
          <div
            key={it.label}
            className="px-2.5 py-1.5 rounded-lg text-[10px] font-semibold flex items-center gap-2"
            style={i === activeIndex ? { backgroundColor: primarySoft, color: primary } : { color: "#64748B" }}
          >
            {it.icon}
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function KitBreadcrumbs({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-1 text-[9px] text-slate-500">
      {items.map((item, i) => (
        <React.Fragment key={item}>
          <span className={i === items.length - 1 ? "font-bold text-slate-800" : ""}>{item}</span>
          {i < items.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export function KitKpiCard({
  label,
  value,
  sub,
  primary = "#0D7C85",
  border = "#E2E8F0",
  wireframe = false,
}: {
  label: string;
  value: string;
  sub?: string;
} & KitThemeProps) {
  return (
    <div className={`p-2.5 rounded-xl border ${wireframe ? "bg-gray-100 border-gray-300" : "bg-white"}`} style={!wireframe ? { borderColor: border } : undefined}>
      <span className="text-[8px] text-slate-500 block">{label}</span>
      <strong className="text-xs block mt-0.5">{value}</strong>
      {sub && <span className="text-[8px] font-semibold block" style={!wireframe ? { color: primary } : undefined}>{sub}</span>}
    </div>
  );
}

export function KitModal({ title, body, cta }: { title: string; body: string; cta: string } & KitThemeProps) {
  return (
    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold text-xs">{title}</span>
        <X className="w-3 h-3 text-slate-400" />
      </div>
      <p className="text-[10px] text-slate-600">{body}</p>
      <div className="text-right text-[10px] font-bold text-emerald-700">{cta}</div>
    </div>
  );
}

export function KitToast({ message, tone = "success" }: { message: string; tone?: "success" | "error" }) {
  return (
    <div className={`px-3 py-2 rounded-xl border text-[10px] font-semibold flex items-center gap-2 ${tone === "success" ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-rose-50 border-rose-200 text-rose-900"}`}>
      {tone === "success" ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
      <span>{message}</span>
    </div>
  );
}

export function KitStepper({ steps, current = 1, primary = "#0D7C85" }: { steps: string[]; current?: number } & KitThemeProps) {
  return (
    <div className="flex items-center justify-between gap-1 text-[8px]">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-1 flex-1">
          <span
            className="w-4 h-4 rounded-full flex items-center justify-center font-bold shrink-0"
            style={i <= current ? { backgroundColor: primary, color: "#FFF" } : { backgroundColor: "#E2E8F0", color: "#64748B" }}
          >
            {i + 1}
          </span>
          <span className="truncate font-medium">{s}</span>
        </div>
      ))}
    </div>
  );
}

export function KitProgress({ value = 65, primary = "#0D7C85" }: { value?: number } & KitThemeProps) {
  return (
    <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: primary }} />
    </div>
  );
}

export function KitEmptyState({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1">
      <Inbox className="w-5 h-5 mx-auto text-slate-400" />
      <div className="text-[11px] font-bold">{title}</div>
      <div className="text-[9px] text-slate-500">{subtitle}</div>
    </div>
  );
}

export function KitSkeletonState() {
  return (
    <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-2 animate-pulse">
      <div className="h-3 w-1/2 bg-slate-200 rounded" />
      <div className="h-8 w-full bg-slate-100 rounded-xl" />
    </div>
  );
}

export function KitErrorState({ title, retryLabel = "Retry" }: { title: string; retryLabel?: string }) {
  return (
    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between text-[10px] text-rose-900">
      <span className="font-semibold flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" />{title}</span>
      <span className="font-bold underline">{retryLabel}</span>
    </div>
  );
}
