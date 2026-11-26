"use client";

import React from "react";
import { Check, Loader2, Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export interface KitThemeProps {
  primary?: string;
  primarySoft?: string;
  ink?: string;
  muted?: string;
  border?: string;
  radius?: string;
  wireframe?: boolean;
}

export function KitButton({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  primary = "#0D7C85",
  border = "#CBE6E6",
  wireframe = false,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
} & KitThemeProps) {
  const sizeCls =
    size === "sm"
      ? "px-2.5 py-1 text-[10px]"
      : size === "lg"
      ? "px-5 py-2.5 text-xs"
      : "px-3.5 py-1.5 text-[11px]";

  if (wireframe) {
    return (
      <span
        className={`inline-flex items-center justify-center gap-1.5 rounded-lg font-mono border border-gray-400 bg-gray-200 text-gray-600 ${sizeCls} ${className}`}
      >
        {children}
      </span>
    );
  }

  const style: React.CSSProperties =
    variant === "primary"
      ? { backgroundColor: primary, color: "#FFFFFF" }
      : variant === "destructive"
      ? { backgroundColor: "#DC2626", color: "#FFFFFF" }
      : variant === "secondary"
      ? { backgroundColor: "#FFFFFF", color: "#0F172A", border: `1px solid ${border}` }
      : { backgroundColor: "transparent", color: primary };

  return (
    <span
      style={style}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full font-semibold select-none ${sizeCls} ${
        disabled ? "opacity-50" : ""
      } ${className}`}
    >
      {loading && <Loader2 className="w-3 h-3 animate-spin" />}
      {children}
    </span>
  );
}

export function KitInput({
  label,
  value,
  placeholder,
  border = "#CBD5E1",
  wireframe = false,
}: {
  label?: string;
  value?: string;
  placeholder?: string;
} & KitThemeProps) {
  return (
    <div className="space-y-1">
      {label && <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500 block">{label}</span>}
      <div
        className={`px-2.5 py-1.5 rounded-lg text-[10px] border ${
          wireframe ? "bg-gray-100 border-gray-300 text-gray-400" : "bg-white text-slate-800"
        }`}
        style={!wireframe ? { borderColor: border } : undefined}
      >
        {value || placeholder || "Enter value..."}
      </div>
    </div>
  );
}

export function KitSelect({
  label,
  value,
  border = "#CBD5E1",
  wireframe = false,
}: {
  label?: string;
  value: string;
} & KitThemeProps) {
  return (
    <div className="space-y-1">
      {label && <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500 block">{label}</span>}
      <div
        className={`px-2.5 py-1.5 rounded-lg text-[10px] border flex items-center justify-between ${
          wireframe ? "bg-gray-100 border-gray-300 text-gray-400" : "bg-white text-slate-800"
        }`}
        style={!wireframe ? { borderColor: border } : undefined}
      >
        <span>{value}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </div>
    </div>
  );
}

export function KitCheckbox({
  label,
  checked = false,
  primary = "#0D7C85",
  wireframe = false,
}: {
  label: string;
  checked?: boolean;
} & KitThemeProps) {
  return (
    <div className="flex items-center gap-2 text-[10px]">
      <span
        className="w-3.5 h-3.5 rounded flex items-center justify-center border"
        style={
          wireframe
            ? { backgroundColor: "#E5E7EB", borderColor: "#9CA3AF" }
            : checked
            ? { backgroundColor: primary, borderColor: primary, color: "#FFF" }
            : { backgroundColor: "#FFF", borderColor: "#CBD5E1" }
        }
      >
        {checked && <Check className="w-2.5 h-2.5" />}
      </span>
      <span className={wireframe ? "text-gray-500" : "text-slate-700"}>{label}</span>
    </div>
  );
}

export function KitToggle({
  label,
  on = true,
  primary = "#0D7C85",
  wireframe = false,
}: {
  label: string;
  on?: boolean;
} & KitThemeProps) {
  return (
    <div className="flex items-center justify-between gap-2 text-[10px]">
      <span className={wireframe ? "text-gray-500" : "text-slate-700"}>{label}</span>
      <span
        className="w-7 h-4 rounded-full p-0.5 flex items-center transition-all"
        style={{
          backgroundColor: wireframe ? "#D1D5DB" : on ? primary : "#CBD5E1",
          justifyContent: on ? "flex-end" : "flex-start",
        }}
      >
        <span className="w-3 h-3 rounded-full bg-white shadow-2xs" />
      </span>
    </div>
  );
}

export function KitChip({
  label,
  active = false,
  primary = "#0D7C85",
  primarySoft = "#E4F5F4",
  border = "#CBE6E6",
  wireframe = false,
}: {
  label: string;
  active?: boolean;
} & KitThemeProps) {
  return (
    <span
      className="px-2 py-0.5 rounded-full text-[9px] font-semibold border whitespace-nowrap"
      style={
        wireframe
          ? { backgroundColor: "#E5E7EB", borderColor: "#9CA3AF", color: "#4B5563" }
          : active
          ? { backgroundColor: primary, borderColor: primary, color: "#FFFFFF" }
          : { backgroundColor: primarySoft, borderColor: border, color: primary }
      }
    >
      {label}
    </span>
  );
}

export function KitBadge({
  label,
  tone = "neutral",
  wireframe = false,
}: {
  label: string;
  tone?: "success" | "warn" | "error" | "info" | "neutral";
} & KitThemeProps) {
  if (wireframe) {
    return <span className="px-2 py-0.5 rounded text-[8px] font-mono bg-gray-200 text-gray-500">{label}</span>;
  }
  const tones = {
    success: "bg-emerald-100 text-emerald-800",
    warn: "bg-amber-100 text-amber-800",
    error: "bg-rose-100 text-rose-800",
    info: "bg-sky-100 text-sky-800",
    neutral: "bg-slate-100 text-slate-700",
  };
  return <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${tones[tone]}`}>{label}</span>;
}

export function KitAvatar({
  name,
  size = "md",
  primary = "#0D7C85",
  primarySoft = "#E4F5F4",
  wireframe = false,
}: {
  name: string;
  size?: "sm" | "md" | "lg";
} & KitThemeProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  const sz = size === "sm" ? "w-6 h-6 text-[9px]" : size === "lg" ? "w-10 h-10 text-xs" : "w-8 h-8 text-[10px]";

  return (
    <div
      className={`${sz} rounded-full flex items-center justify-center font-bold shrink-0`}
      style={
        wireframe
          ? { backgroundColor: "#E5E7EB", color: "#6B7280" }
          : { background: `linear-gradient(135deg, ${primary} 0%, ${primarySoft} 140%)`, color: "#FFFFFF" }
      }
    >
      {initials}
    </div>
  );
}

export function KitSearch({
  placeholder = "Search...",
  border = "#CBE6E6",
  wireframe = false,
}: {
  placeholder?: string;
} & KitThemeProps) {
  return (
    <div
      className={`px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 text-[10px] ${
        wireframe ? "bg-gray-100 border-gray-300 text-gray-400" : "bg-white text-slate-500"
      }`}
      style={!wireframe ? { borderColor: border } : undefined}
    >
      <Search className="w-3 h-3 shrink-0" />
      <span className="truncate">{placeholder}</span>
    </div>
  );
}

export function KitFilters({
  items,
  activeIndex = 0,
  primary = "#0D7C85",
  primarySoft = "#E4F5F4",
  border = "#CBE6E6",
  wireframe = false,
}: {
  items: string[];
  activeIndex?: number;
} & KitThemeProps) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
      <SlidersHorizontal className="w-3 h-3 text-slate-400 shrink-0" />
      {items.map((item, i) => (
        <KitChip
          key={item}
          label={item}
          active={i === activeIndex}
          primary={primary}
          primarySoft={primarySoft}
          border={border}
          wireframe={wireframe}
        />
      ))}
    </div>
  );
}
