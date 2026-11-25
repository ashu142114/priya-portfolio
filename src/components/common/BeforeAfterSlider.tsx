"use client";

import { useState, useRef, useCallback } from "react";
import { SparkleIcon } from "@/components/common/Stickers";
import { SlidersHorizontal, Check, AlertCircle } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeTitle?: string;
  afterTitle?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeTitle = "Before (Legacy Interface)",
  afterTitle = "After (Redesigned with Care)",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={`relative w-full overflow-hidden rounded-3xl border border-blush-200 select-none bg-white shadow-soft-lg cursor-ew-resize min-h-[460px] ${className}`}
    >
      {/* "AFTER" (Redesigned) Content - Full Background Layer */}
      <div className="absolute inset-0 p-6 sm:p-8 bg-gradient-to-br from-cream-100 via-white to-blush-50 flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 border-b border-blush-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-serif font-bold text-sm text-plum">{afterTitle}</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 font-bold text-[10px]">
            Redesign
          </span>
        </div>

        {/* Clean, spacious card UI */}
        <div className="space-y-4 my-auto max-w-sm mx-auto w-full">
          <div className="p-4 rounded-2xl bg-white border border-blush-200 shadow-soft">
            <div className="flex justify-between items-center text-xs text-plum-500 mb-2">
              <span>Next Telemedicine Visit</span>
              <span className="text-rose-600 font-bold">2:30 PM Today</span>
            </div>
            <h4 className="font-serif font-bold text-base text-plum">Dr. Alena Vance</h4>
            <span className="text-xs text-plum-500">General Physician & Wellness</span>
            <button className="mt-3 w-full py-2.5 rounded-xl bg-rose-500 text-white font-sans text-xs font-semibold shadow-sm">
              Join Video Consultation
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-lilac-100/60 border border-lilac-200 flex items-center justify-between text-xs">
            <span className="text-plum-700 font-medium">Digital Lab Report Available</span>
            <span className="text-rose-600 font-bold">Preview</span>
          </div>
        </div>

        <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-xs text-plum-500">
          <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <Check className="w-4 h-4" /> 48px+ touch targets & empathetic spacing
          </span>
          <span className="font-semibold text-rose-600">AFTER</span>
        </div>
      </div>

      {/* "BEFORE" (Legacy) Content - Clipped Layer */}
      <div
        className="absolute inset-0 p-6 sm:p-8 bg-gray-100 border-r-2 border-rose-500 flex flex-col justify-between overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="flex items-center justify-between pb-3 border-b border-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="font-sans font-bold text-sm text-gray-800">{beforeTitle}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-gray-300 text-gray-700 font-mono text-[10px]">
            v1.0 Legacy
          </span>
        </div>

        {/* Cluttered, cramped old UI */}
        <div className="space-y-2 my-auto max-w-sm mx-auto w-full opacity-85">
          <div className="p-3 bg-red-100 border border-red-300 rounded text-[11px] text-red-800 font-mono flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>ATTENTION: System slot confirmation pending. Do not refresh!</span>
          </div>
          <div className="p-2.5 bg-gray-200 border border-gray-400 rounded text-[10px] font-mono text-gray-700 space-y-1">
            <div className="flex justify-between">
              <span>DOC_ID: #49281-A</span>
              <span>SLOT: 14:30:00 UTC</span>
            </div>
            <div className="flex gap-1 mt-1">
              <button className="px-2 py-1 bg-gray-300 text-[9px] border border-gray-500">Cancel</button>
              <button className="px-2 py-1 bg-gray-300 text-[9px] border border-gray-500">Resched</button>
              <button className="px-2 py-1 bg-gray-400 font-bold text-[9px] border border-gray-600">Submit</button>
            </div>
          </div>
          <div className="p-2 bg-gray-200 border border-gray-300 rounded text-[10px] text-gray-600">
            Form fields: 12 mandatory inputs before tele-call.
          </div>
        </div>

        <div className="pt-3 border-t border-gray-300 flex items-center justify-between text-xs text-gray-600 font-mono">
          <span>BEFORE: High friction & cluttered hierarchy</span>
          <span className="font-bold text-red-600">BEFORE</span>
        </div>
      </div>

      {/* Draggable Slider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-rose-500 shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-rose-500 shadow-soft-lg flex items-center justify-center text-rose-600 pointer-events-auto cursor-ew-resize">
          <SlidersHorizontal className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
