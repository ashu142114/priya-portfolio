"use client";

import { useState, useRef, useCallback } from "react";
import { SlidersHorizontal, Check, AlertCircle } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeComponent?: React.ReactNode;
  afterComponent?: React.ReactNode;
  beforeTitle?: string;
  afterTitle?: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeComponent,
  afterComponent,
  beforeTitle = "Before (Legacy Interface)",
  afterTitle = "After (Redesigned with Care)",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
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
      data-cursor="Drag"
      className={`relative w-full overflow-hidden rounded-3xl border border-blush-200 select-none bg-white shadow-soft-lg cursor-ew-resize min-h-[460px] ${className}`}
    >
      {/* "AFTER" (Redesigned) Content - Full Background Layer */}
      <div className="absolute inset-0 p-6 sm:p-8 bg-gradient-to-br from-cream-100 via-white to-blush-50 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-blush-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-serif font-bold text-sm text-plum">{afterTitle}</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 font-bold text-[10px]">
            {afterLabel}
          </span>
        </div>

        {/* Content */}
        <div className="my-auto max-w-sm mx-auto w-full">
          {afterComponent || (
            <div className="space-y-4">
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
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-xs text-plum-500">
          <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <Check className="w-4 h-4" /> 48px+ touch targets & empathetic spacing
          </span>
          <span className="font-semibold text-rose-600">{afterLabel}</span>
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
            {beforeLabel}
          </span>
        </div>

        {/* Content */}
        <div className="my-auto max-w-sm mx-auto w-full">
          {beforeComponent || (
            <div className="space-y-2 opacity-85">
              <div className="p-3 bg-red-100 border border-red-300 rounded text-[11px] text-red-800 font-mono flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>ATTENTION: System slot confirmation pending. Do not refresh!</span>
              </div>
              <div className="p-2.5 bg-gray-200 border border-gray-400 rounded text-[10px] font-mono text-gray-700 space-y-1">
                <div className="flex justify-between">
                  <span>DOC_ID: #49281-A</span>
                  <span>SLOT: 14:30:00 UTC</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-gray-300 flex items-center justify-between text-xs text-gray-600 font-mono">
          <span>BEFORE: High friction & cluttered hierarchy</span>
          <span className="font-bold text-red-600">{beforeLabel}</span>
        </div>
      </div>

      {/* Draggable Slider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-rose-500 shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          data-cursor="Drag"
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-rose-500 shadow-soft-lg flex items-center justify-center text-rose-600 pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
