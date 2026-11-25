"use client";

import React from "react";
import { Wifi, Battery, Signal, Lock, Shield, ChevronLeft, ChevronRight, RotateCw } from "lucide-react";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  wireframe?: boolean;
  time?: string;
}

export function PhoneFrame({
  children,
  className = "",
  wireframe = false,
  time = "09:41",
}: PhoneFrameProps) {
  return (
    <div
      className={`relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/19.2] rounded-[48px] p-2.5 sm:p-3 shadow-soft-xl select-none transition-all duration-500 ease-out ${
        wireframe
          ? "bg-slate-200 border-2 border-slate-400 text-slate-500"
          : "bg-gradient-to-b from-slate-900 via-plum-950 to-slate-900 border-[3px] border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(43,27,46,0.25)] ring-1 ring-white/20"
      } ${className}`}
    >
      {/* Outer Titanium Edge Reflection */}
      <div className="absolute inset-0 rounded-[45px] pointer-events-none ring-1 ring-white/10" />

      {/* Hardware Buttons (Volume & Action on Left, Power on Right) */}
      <div className="absolute -left-[5px] top-24 w-[3px] h-8 rounded-l-sm bg-slate-700" />
      <div className="absolute -left-[5px] top-36 w-[3px] h-11 rounded-l-sm bg-slate-700" />
      <div className="absolute -left-[5px] top-50 w-[3px] h-11 rounded-l-sm bg-slate-700" />
      <div className="absolute -right-[5px] top-32 w-[3px] h-14 rounded-r-sm bg-slate-700" />

      {/* Screen Glass Canvas */}
      <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-cream-50 flex flex-col justify-between border border-black/10">
        {/* Subtle Screen Reflection Glare */}
        <div
          className="absolute inset-0 pointer-events-none z-40 bg-gradient-to-tr from-transparent via-white/5 to-white/15 opacity-60 rounded-[38px]"
          aria-hidden="true"
        />

        {/* Dynamic Island & Status Bar */}
        <div className="relative z-30 pt-3 px-6 flex items-center justify-between text-[11px] font-semibold text-plum-900 select-none">
          <span className="font-mono text-[11px] font-bold tracking-tight text-plum-900">{time}</span>

          {/* Dynamic Island pill with interactive camera and sensor indicator */}
          <div className="w-24 h-[22px] rounded-full bg-black flex items-center justify-end px-2.5 gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500/90 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
          </div>

          <div className="flex items-center gap-1.5 text-plum-900">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center">
              <div className="w-5 h-2.5 rounded-sm border border-plum-900/80 p-0.5 flex items-center">
                <div className="w-3.5 h-1.5 rounded-2xs bg-plum-900" />
              </div>
              <div className="w-0.5 h-1 rounded-r-2xs bg-plum-900/80 ml-px" />
            </div>
          </div>
        </div>

        {/* Screen Viewport Content */}
        <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar flex flex-col">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="relative z-30 pb-2 pt-1 flex justify-center bg-transparent pointer-events-none">
          <div className="w-32 h-1 rounded-full bg-plum-900/40" />
        </div>
      </div>
    </div>
  );
}

interface BrowserFrameProps {
  children: React.ReactNode;
  url?: string;
  title?: string;
  className?: string;
  wireframe?: boolean;
}

export function BrowserFrame({
  children,
  url = "priya.design/preview",
  title = "Responsive Experience",
  className = "",
  wireframe = false,
}: BrowserFrameProps) {
  return (
    <div
      className={`w-full rounded-3xl overflow-hidden border shadow-soft-xl transition-all duration-300 ${
        wireframe
          ? "bg-gray-100 border-gray-400 text-gray-500"
          : "bg-white border-blush-300/80 shadow-[0_20px_50px_-10px_rgba(43,27,46,0.12)]"
      } ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="px-4 py-3 bg-cream-200/90 border-b border-blush-200/80 flex items-center justify-between gap-4">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-3 h-3 rounded-full bg-rose-400/90 shadow-xs" />
          <span className="w-3 h-3 rounded-full bg-amber-400/90 shadow-xs" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/90 shadow-xs" />
        </div>

        {/* Navigation Buttons */}
        <div className="hidden sm:flex items-center gap-2 text-plum-400">
          <ChevronLeft className="w-3.5 h-3.5" />
          <ChevronRight className="w-3.5 h-3.5" />
          <RotateCw className="w-3 h-3 ml-1" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-auto px-3.5 py-1.5 rounded-full bg-white/95 border border-blush-200/90 text-xs text-plum-600 flex items-center justify-center gap-2 shadow-soft-sm truncate">
          <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
          <span className="font-mono text-[11px] truncate">{url}</span>
        </div>

        {/* Right Tab Status */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-plum-500 font-medium shrink-0">
          <Shield className="w-3.5 h-3.5 text-rose-500" />
          <span className="truncate max-w-[100px]">{title}</span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="relative w-full bg-cream-50 min-h-[340px] overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
}
