"use client";

import React from "react";
import { Wifi, Battery, Signal, Lock, Shield, ChevronLeft, ChevronRight, RotateCw, Plus } from "lucide-react";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  wireframe?: boolean;
  time?: string;
  screenBg?: string;
}

export function PhoneFrame({
  children,
  className = "",
  wireframe = false,
  time = "09:41",
  screenBg = "#FFF8F5",
}: PhoneFrameProps) {
  return (
    <div
      className={`relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/19.2] rounded-[46px] p-2.5 sm:p-3 shadow-soft-xl select-none transition-all duration-500 ease-out ${
        wireframe
          ? "bg-slate-200 border-2 border-slate-400 text-slate-500"
          : "bg-gradient-to-b from-slate-900 via-plum-950 to-slate-900 border-[3px] border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(43,27,46,0.25)] ring-1 ring-white/20"
      } ${className}`}
    >
      <div className="absolute inset-0 rounded-[44px] pointer-events-none ring-1 ring-white/10" />
      <div className="absolute -left-[5px] top-24 w-[3px] h-8 rounded-l-sm bg-slate-700" />
      <div className="absolute -left-[5px] top-36 w-[3px] h-11 rounded-l-sm bg-slate-700" />
      <div className="absolute -left-[5px] top-50 w-[3px] h-11 rounded-l-sm bg-slate-700" />
      <div className="absolute -right-[5px] top-32 w-[3px] h-14 rounded-r-sm bg-slate-700" />

      <div
        className="relative w-full h-full rounded-[36px] overflow-hidden flex flex-col justify-between border border-black/10"
        style={{ backgroundColor: wireframe ? "#F3F4F6" : screenBg }}
      >
        <div
          className="absolute inset-0 pointer-events-none z-40 bg-gradient-to-tr from-transparent via-white/5 to-white/15 opacity-50 rounded-[36px]"
          aria-hidden="true"
        />

        <div className="relative z-30 pt-2.5 px-5 flex items-center justify-between text-[10px] font-semibold text-slate-900 select-none shrink-0">
          <span className="font-mono text-[10px] font-bold tracking-tight">{time}</span>
          <div className="w-20 h-[18px] rounded-full bg-black flex items-center justify-end px-2 gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90" />
            <span className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700" />
          </div>
          <div className="flex items-center gap-1 text-slate-900">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        <div data-device-screen="true" className="relative z-10 flex-1 overflow-y-auto no-scrollbar flex flex-col">
          {children}
        </div>

        <div className="relative z-30 pb-1.5 pt-1 flex justify-center bg-transparent pointer-events-none shrink-0">
          <div className="w-28 h-1 rounded-full bg-slate-900/30" />
        </div>
      </div>
    </div>
  );
}

export function AndroidFrame({
  children,
  className = "",
  wireframe = false,
  time = "09:41",
  screenBg = "#FFFFFF",
}: PhoneFrameProps) {
  return (
    <div
      className={`relative w-full max-w-[320px] aspect-[9/19.5] rounded-[34px] p-2.5 shadow-soft-xl select-none ${
        wireframe
          ? "bg-slate-200 border-2 border-slate-400 text-slate-500"
          : "bg-slate-900 border-2 border-slate-700 ring-1 ring-white/15"
      } ${className}`}
    >
      <div
        className="relative w-full h-full rounded-[26px] overflow-hidden flex flex-col justify-between border border-black/10"
        style={{ backgroundColor: wireframe ? "#F3F4F6" : screenBg }}
      >
        {/* Punch-hole Android Status Bar */}
        <div className="relative z-30 pt-2 px-4 flex items-center justify-between text-[10px] font-mono font-semibold text-slate-800 shrink-0">
          <span>{time}</span>
          <span className="w-3 h-3 rounded-full bg-black border border-slate-700" />
          <div className="flex items-center gap-1">
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>
        <div data-device-screen="true" className="relative z-10 flex-1 overflow-y-auto no-scrollbar flex flex-col">
          {children}
        </div>
        <div className="relative z-30 pb-1.5 pt-1 flex justify-center pointer-events-none shrink-0">
          <div className="w-20 h-1 rounded-full bg-slate-800/35" />
        </div>
      </div>
    </div>
  );
}

interface TabletFrameProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function TabletFrame({
  children,
  className = "",
  title = "iPadOS Preview",
}: TabletFrameProps) {
  return (
    <div
      className={`relative w-full rounded-[32px] p-3 bg-gradient-to-b from-slate-900 to-slate-800 border-2 border-slate-700 shadow-soft-xl select-none ${className}`}
    >
      <div className="w-full rounded-[22px] overflow-hidden bg-white flex flex-col border border-black/10">
        <div className="px-5 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-600">
          <span>09:41 • {title}</span>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3 h-3" />
            <span>100%</span>
          </div>
        </div>
        <div data-device-screen="true" className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

interface BrowserFrameProps {
  children: React.ReactNode;
  url?: string;
  title?: string;
  tabTitle?: string;
  className?: string;
  wireframe?: boolean;
}

export function BrowserFrame({
  children,
  url = "app.concept.design",
  title = "Web Experience",
  tabTitle,
  className = "",
  wireframe = false,
}: BrowserFrameProps) {
  return (
    <div
      className={`w-full rounded-3xl overflow-hidden border shadow-soft-xl transition-all duration-300 ${
        wireframe
          ? "bg-gray-100 border-gray-400 text-gray-500"
          : "bg-white border-blush-300/80 shadow-[0_20px_50px_-10px_rgba(43,27,46,0.14)]"
      } ${className}`}
    >
      {/* Tab Strip */}
      <div className="px-4 pt-2.5 bg-slate-100/95 border-b border-slate-200/70 flex items-end gap-3">
        <div className="flex items-center gap-1.5 pb-2.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="px-3.5 py-1.5 rounded-t-xl bg-white border-t border-x border-slate-200/80 text-[10px] font-semibold text-slate-800 flex items-center gap-2 max-w-[180px] truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">{tabTitle || title}</span>
        </div>
        <Plus className="w-3.5 h-3.5 text-slate-400 mb-2 hidden sm:block" />
      </div>

      {/* Address Toolbar */}
      <div className="px-4 py-2 bg-white border-b border-slate-200/80 flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
          <ChevronLeft className="w-3.5 h-3.5" />
          <ChevronRight className="w-3.5 h-3.5" />
          <RotateCw className="w-3 h-3 ml-1" />
        </div>
        <div className="flex-1 max-w-md mx-auto px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-center gap-1.5 truncate">
          <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
          <span className="font-mono text-[10px] truncate">{url}</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-slate-500 font-medium shrink-0">
          <Shield className="w-3 h-3 text-slate-500" />
          <span className="truncate max-w-[110px]">{title}</span>
        </div>
      </div>

      <div data-device-screen="true" className="relative w-full bg-white overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
}

/** 2-Device Hero Combo Scene (Clean Desktop Browser + Floating Phone) */
export function ComboSceneFrame({
  desktop,
  mobile,
  url,
  title,
  screenBg,
}: {
  desktop: React.ReactNode;
  tablet?: React.ReactNode;
  mobile: React.ReactNode;
  url: string;
  title: string;
  screenBg?: string;
}) {
  return (
    <div className="relative w-full pb-8 sm:pb-12">
      {/* Main Desktop Browser */}
      <div className="w-full lg:w-[92%]">
        <BrowserFrame url={url} title={title} className="shadow-soft-xl">
          <div className="min-h-[260px] pr-0 md:pr-28">{desktop}</div>
        </BrowserFrame>
      </div>

      {/* Floating Right Phone */}
      <div className="relative md:absolute mt-4 md:mt-0 mx-auto md:mx-0 md:right-0 md:bottom-0 w-[195px] sm:w-[210px] z-30 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
        <PhoneFrame screenBg={screenBg} className="shadow-soft-2xl">
          {mobile}
        </PhoneFrame>
      </div>
    </div>
  );
}

/** Flat-Lay on Desk Surface Scene */
export function DeskFlatLayScene({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption?: string;
}) {
  return (
    <div className="p-6 sm:p-10 rounded-4xl bg-gradient-to-br from-cream-200/80 via-cream-100 to-blush-100/60 border border-blush-200 shadow-inner">
      <div className="transform hover:-translate-y-1 transition-transform duration-500">
        {children}
      </div>
      {caption && (
        <p className="text-xs text-plum-600 mt-5 pt-3 border-t border-blush-200/60">
          {caption}
        </p>
      )}
    </div>
  );
}
