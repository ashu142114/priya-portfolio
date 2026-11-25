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
  time = "9:41",
}: PhoneFrameProps) {
  return (
    <div
      className={`relative w-full max-w-[340px] aspect-[9/19] rounded-[48px] p-3 shadow-soft-xl border-4 ${
        wireframe
          ? "bg-gray-100 border-gray-400 text-gray-500"
          : "bg-plum-950 border-plum-900/40 text-plum shadow-[0_25px_60px_-15px_rgba(43,27,46,0.18)]"
      } select-none transition-all duration-300 ${className}`}
    >
      {/* Outer rim subtle shine */}
      <div className="absolute inset-0 rounded-[44px] pointer-events-none ring-1 ring-white/20" />

      {/* Screen Canvas */}
      <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-cream-100 flex flex-col justify-between">
        {/* Dynamic Island & Status Bar */}
        <div className="relative z-30 pt-3 px-6 flex items-center justify-between text-[11px] font-semibold text-plum-900 select-none">
          <span className="font-mono text-[11px] font-bold tracking-tight">{time}</span>

          {/* Dynamic Island pill */}
          <div className="w-24 h-5 rounded-full bg-black/90 flex items-center justify-end px-2 gap-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>

          <div className="flex items-center gap-1.5">
            <Signal className="w-3 h-3 text-plum-900" />
            <Wifi className="w-3 h-3 text-plum-900" />
            <Battery className="w-3.5 h-3.5 text-plum-900" />
          </div>
        </div>

        {/* Screen Viewport Content */}
        <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar flex flex-col">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="relative z-30 pb-2 pt-1 flex justify-center bg-transparent pointer-events-none">
          <div className="w-32 h-1 rounded-full bg-plum-900/30" />
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
          <span className="w-3 h-3 rounded-full bg-rose-400/90" />
          <span className="w-3 h-3 rounded-full bg-amber-300/90" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
        </div>

        {/* Navigation Buttons */}
        <div className="hidden sm:flex items-center gap-2 text-plum-400">
          <ChevronLeft className="w-3.5 h-3.5" />
          <ChevronRight className="w-3.5 h-3.5" />
          <RotateCw className="w-3 h-3 ml-1" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-auto px-3.5 py-1.5 rounded-full bg-white/90 border border-blush-200/90 text-xs text-plum-600 flex items-center justify-center gap-2 shadow-soft-sm truncate">
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
