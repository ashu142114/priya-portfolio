"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparkleIcon } from "@/components/common/Stickers";
import { Check, AlertTriangle, ArrowRight, Layers, Maximize2, HeartHandshake } from "lucide-react";

export default function Chapter3BeforeAfter() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !triggerRef.current) return;

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: "+=1800",
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  // Scrubbed values (mutually exclusive crossfade to prevent text overlap)
  const beforeOpacity = Math.max(0, 1 - scrollProgress * 2.5);
  const afterOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.42) * 2.2));
  const isAfter = scrollProgress >= 0.5;

  return (
    <div
      id="chapter-before-after"
      ref={triggerRef}
      className="relative w-full min-h-screen flex flex-col justify-center py-16 md:py-24 overflow-hidden border-b border-[var(--border-color)] bg-cream-100"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-200 text-xs font-semibold text-rose-700 mb-3 shadow-soft-sm">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>Chapter 03 • Product Redesign</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            From Friction to Flow: Before & After
          </h2>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            Scroll down to watch a cluttered, anxiety-inducing legacy healthcare portal morph into a calm,
            accessible patient experience.
          </p>
        </div>

        {/* Morphing Stage Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/85 backdrop-blur-md rounded-4xl p-8 lg:p-12 border border-blush-200/90 shadow-soft-xl min-h-[520px]">
          {/* Left Column: 3 Sequential Callouts */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                    isAfter ? "bg-rose-100 text-rose-700" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {isAfter ? "Redesign (After)" : "Legacy System (Before)"}
                </span>
                <span className="text-xs font-serif font-bold text-rose-500">
                  Before → After Transition
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mb-3">
                {isAfter
                  ? "Empathetic, Human-Centered Interface"
                  : "Cluttered, Anxiety-Inducing Interface"}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-plum-600 leading-relaxed mb-6">
                Redesigning healthcare software requires more than visual polish; it requires peeling back
                cognitive friction and reducing patient panic at every step.
              </p>

              {/* 3 Callouts Appearing Sequentially */}
              <div className="space-y-3">
                {/* Callout 1: Hierarchy (>= 25%) */}
                <div
                  className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-3 ${
                    scrollProgress >= 0.25
                      ? "bg-rose-50/80 border-rose-200 opacity-100 translate-x-0"
                      : "bg-gray-50 border-gray-200 opacity-40 -translate-x-2"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-rose-200 flex items-center justify-center text-rose-700 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs text-plum">1. Hierarchy</h4>
                    <p className="text-[11px] text-plum-600 leading-snug">
                      Prioritized critical patient actions with a single, clear primary confirmation step.
                    </p>
                  </div>
                </div>

                {/* Callout 2: Spacing (>= 55%) */}
                <div
                  className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-3 ${
                    scrollProgress >= 0.55
                      ? "bg-blush-50/80 border-blush-300 opacity-100 translate-x-0"
                      : "bg-gray-50 border-gray-200 opacity-40 -translate-x-2"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-blush-200 flex items-center justify-center text-rose-700 shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs text-plum">2. Spacing</h4>
                    <p className="text-[11px] text-plum-600 leading-snug">
                      Expanded touch targets to 48px+ with generous whitespace for effortless one-handed use.
                    </p>
                  </div>
                </div>

                {/* Callout 3: Clarity (>= 85%) */}
                <div
                  className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-3 ${
                    scrollProgress >= 0.85
                      ? "bg-lilac-50/80 border-lilac-300 opacity-100 translate-x-0"
                      : "bg-gray-50 border-gray-200 opacity-40 -translate-x-2"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-lilac-200 flex items-center justify-center text-plum shrink-0">
                    <HeartHandshake className="w-4 h-4 text-rose-700" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs text-plum">3. Clarity</h4>
                    <p className="text-[11px] text-plum-600 leading-snug">
                      Replaced clinical panic warnings with empathetic, plain-language guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <span className="text-[11px] text-plum-400 italic block">
              💡 Keep scrolling down to enter Chapter 04: The 5-Step Design Process.
            </span>
          </div>

          {/* Right Column: Morphing Screen Canvas */}
          <div className="md:col-span-7 relative flex justify-center items-center min-h-[440px]">
            {/* Morphing Screen Card Frame */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-blush-200 shadow-soft-lg min-h-[420px] flex flex-col justify-between p-6 transition-all duration-300 bg-white">
              {/* BEFORE STATE (Messy Old UI) */}
              <div
                className="absolute inset-0 p-6 bg-gray-100 flex flex-col justify-between transition-opacity duration-200 pointer-events-none"
                style={{ opacity: beforeOpacity }}
              >
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300 text-xs font-mono text-gray-700 mb-3">
                    <span>LEGACY_PORTAL_V1</span>
                    <span className="text-red-600 font-bold">ERROR_WARNING</span>
                  </div>
                  <div className="p-2.5 bg-red-100 border border-red-300 rounded text-[10px] text-red-800 font-mono mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>ATTENTION: Booking slot will expire in 01:29!</span>
                  </div>
                  <div className="space-y-1.5 text-[10px] font-mono text-gray-600 bg-gray-200 p-3 rounded border border-gray-300">
                    <div className="flex justify-between border-b pb-1">
                      <span>DOC_NAME: Dr. Vance</span>
                      <span>TIME: 14:30</span>
                    </div>
                    <div>STATUS: UNCONFIRMED</div>
                    <div>INSURANCE: POLICY_NOT_FOUND</div>
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-gray-300">
                  <button className="flex-1 py-1.5 bg-gray-300 text-[10px] border">Cancel</button>
                  <button className="flex-1 py-1.5 bg-gray-400 font-bold text-[10px] border">Submit</button>
                </div>
              </div>

              {/* AFTER STATE (Clean Redesigned Pastel UI) */}
              <div
                className="relative z-10 w-full flex flex-col justify-between flex-1 transition-opacity duration-200"
                style={{ opacity: afterOpacity }}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-blush-100 mb-4">
                    <div>
                      <span className="text-[10px] font-semibold text-rose-700 uppercase tracking-wider block">
                        CareFlow Telemedicine (Concept)
                      </span>
                      <h4 className="font-serif font-bold text-base text-plum">
                        Appointment Confirmed
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Ready
                    </span>
                  </div>

                  {/* Doctor Card */}
                  <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200/80 shadow-soft-sm mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blush-200 flex items-center justify-center font-serif font-bold text-sm text-rose-700">
                        AV
                      </div>
                      <div>
                        <h5 className="font-serif font-bold text-sm text-plum">Dr. Alena Vance</h5>
                        <p className="text-[11px] text-plum-500">General Physician & Wellness</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-blush-100 flex justify-between items-center text-xs text-plum-700">
                      <span>Today at 2:30 PM</span>
                      <span className="font-medium text-rose-700">Video Call Ready</span>
                    </div>
                  </div>

                  {/* Digital Lab Record Pill */}
                  <div className="p-3 rounded-xl bg-lilac-100/70 border border-lilac-200 flex items-center justify-between text-xs">
                    <span className="text-plum-700 font-medium">Digital Lab Reports Attached</span>
                    <span className="text-rose-700 font-bold text-[11px]">View (2)</span>
                  </div>
                </div>

                {/* Primary Action Button (48px height) */}
                <div className="pt-4 border-t border-blush-100 mt-4">
                  <button className="w-full min-h-[48px] py-3 rounded-full bg-rose-500 text-white font-sans text-xs font-semibold shadow-soft hover:bg-rose-600 transition-all flex items-center justify-center gap-2">
                    <span>Join Video Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
