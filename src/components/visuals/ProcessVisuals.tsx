"use client";

import React from "react";
import { PhoneFrame } from "@/components/visuals/DeviceFrame";
import {
  Compass,
  Layers,
  Smartphone,
  Sparkles,
  Cpu,
  CheckCircle2,
  ArrowRight,
  User,
  Heart,
  Clock,
  Video,
  FileText,
  CornerDownRight,
} from "lucide-react";

export function ProcessStepVisual({ stepNumber }: { stepNumber: string }) {
  switch (stepNumber) {
    case "01":
      return (
        <div className="w-full h-full min-h-[280px] rounded-3xl bg-cream-100/90 p-5 border border-blush-200 flex flex-col justify-between shadow-soft-sm">
          <div className="flex justify-between items-center pb-2 border-b border-blush-200">
            <span className="text-xs font-serif font-bold text-plum">Empathy Map & Mental Models</span>
            <span className="text-[10px] font-mono text-rose-700 font-bold uppercase">Discovery</span>
          </div>

          {/* Sticky Notes Canvas */}
          <div className="grid grid-cols-2 gap-3 py-2">
            <div className="p-3.5 rounded-2xl bg-[#FFF9D2] border border-amber-300 shadow-soft-sm transform -rotate-2 text-plum">
              <span className="text-[9px] font-bold text-amber-800 uppercase block mb-1">Pain Point</span>
              <p className="text-[11px] font-sans leading-tight">
                "Finding an appointment when anxious shouldn't require 14 steps."
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FFE2E8] border border-rose-300 shadow-soft-sm transform rotate-2 text-plum">
              <span className="text-[9px] font-bold text-rose-800 uppercase block mb-1">User Need</span>
              <p className="text-[11px] font-sans leading-tight">
                "Immediate reassurance and upfront pricing transparency."
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-blush-200 flex items-center justify-between text-[10px] text-plum-600">
            <span>Primary Persona: Working Parent / Healthcare Caregiver</span>
            <span className="font-bold text-rose-700">Surat & Remote</span>
          </div>
        </div>
      );

    case "02":
      return (
        <div className="w-full h-full min-h-[280px] rounded-3xl bg-white p-5 border border-blush-200 flex flex-col justify-between shadow-soft-sm">
          <div className="flex justify-between items-center pb-2 border-b border-blush-100">
            <span className="text-xs font-serif font-bold text-plum">Task Flow & Architecture</span>
            <span className="text-[10px] font-mono text-rose-700 font-bold uppercase">3-Tap Gate</span>
          </div>

          {/* Flow Nodes with Connecting SVG */}
          <div className="space-y-2.5 py-2">
            <div className="p-2.5 rounded-xl bg-cream-50 border border-blush-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  1
                </span>
                <span className="font-medium text-plum">Select Specialty or Symptom</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-bold">1 Tap</span>
            </div>

            <div className="pl-6">
              <CornerDownRight className="w-4 h-4 text-rose-400" />
            </div>

            <div className="p-2.5 rounded-xl bg-blush-50 border border-blush-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-plum-800 text-white text-[10px] font-bold flex items-center justify-center">
                  2
                </span>
                <span className="font-medium text-plum">Pick Verified Doctor & Time Slot</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-bold">2 Taps</span>
            </div>

            <div className="pl-6">
              <CornerDownRight className="w-4 h-4 text-rose-400" />
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-bold text-emerald-900">Instant Confirmation & Video Room</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-800">Done</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-plum-500 text-center pt-1 border-t border-blush-100">
            Friction eliminated • 0 redundant form gates
          </div>
        </div>
      );

    case "03":
      return (
        <div className="w-full flex justify-center py-2">
          <PhoneFrame wireframe time="09:41" className="scale-90 shadow-soft-lg">
            <div className="p-4 space-y-3 bg-gray-100 h-full flex flex-col justify-between">
              <div>
                <div className="h-4 w-3/4 bg-gray-300 rounded mb-3" />
                <div className="h-16 w-full bg-white border border-dashed border-gray-400 rounded-xl mb-3 flex items-center justify-center text-[10px] text-gray-500">
                  [ 48px Hero CTA Container ]
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-full bg-white border border-gray-300 rounded-lg" />
                  <div className="h-8 w-full bg-white border border-gray-300 rounded-lg" />
                  <div className="h-8 w-full bg-white border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div className="p-2 bg-white border border-gray-300 rounded text-center text-[9px] text-gray-500 font-mono">
                Low-Fi Wireframe Stage
              </div>
            </div>
          </PhoneFrame>
        </div>
      );

    case "04":
      return (
        <div className="w-full flex justify-center py-2">
          <PhoneFrame time="09:41" className="scale-90 shadow-soft-xl">
            <div className="p-4 space-y-3 bg-cream-50 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-serif font-bold text-xs text-plum">Telemedicine Suite</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-blush-200 shadow-soft-sm mb-2.5">
                  <div className="text-[11px] font-bold text-plum">Dr. Ananya Shah</div>
                  <div className="text-[9px] text-rose-700 font-semibold">Cardiologist • Verified</div>
                </div>
                <div className="p-3 rounded-2xl bg-blush-100 border border-blush-200 space-y-1">
                  <span className="text-[9px] font-bold text-plum-700 block">Prescription Ready</span>
                  <div className="h-1.5 w-3/4 bg-rose-400 rounded-sm" />
                </div>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-rose-500 text-white font-sans text-[11px] font-semibold shadow-soft">
                Book Consultation
              </button>
            </div>
          </PhoneFrame>
        </div>
      );

    case "05":
    default:
      return (
        <div className="w-full h-full min-h-[280px] rounded-3xl bg-slate-900 text-white p-5 border border-slate-800 flex flex-col justify-between shadow-soft-xl">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-slate-200">Interactive Hotspots</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Ready for Code</span>
          </div>

          <div className="space-y-3 py-2">
            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs flex items-center justify-between">
              <span>Drawer Slide Transition</span>
              <span className="font-mono text-[10px] text-rose-300">0.35s cubic-bezier</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs flex items-center justify-between">
              <span>Haptic Touch Feedback</span>
              <span className="font-mono text-[10px] text-emerald-300">Active State</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800">
            <span>Clean Figma Component Tokens</span>
            <span className="text-rose-400">Export Ready</span>
          </div>
        </div>
      );
  }
}
