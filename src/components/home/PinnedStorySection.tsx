"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparkleIcon, FourPointStar } from "@/components/common/Stickers";
import { Check, Sparkles, Layers, Palette } from "lucide-react";

export default function PinnedStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    // Only register ScrollTrigger on client side
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !triggerRef.current || !containerRef.current) {
      return;
    }

    const stages = 3;
    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: `+=${stages * 850}`,
      pin: true,
      scrub: 0.8,
      snap: {
        snapTo: 1 / (stages - 1),
        duration: { min: 0.25, max: 0.5 },
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const stageIndex = Math.min(Math.floor(progress * stages), stages - 1);
        setActiveStage(stageIndex);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="relative w-full overflow-hidden bg-cream-100">
      <div
        ref={containerRef}
        className="w-full min-h-screen flex flex-col justify-center py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-3">
              <SparkleIcon className="w-3 h-3 text-rose-500" />
              <span>Design Process in Action</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
              The design builds itself as you scroll.
            </h2>
            <p className="font-sans text-sm sm:text-base text-plum-600 mt-3">
              From raw user research to wireframing and high-fidelity creative systems.
            </p>
          </div>

          {/* Desktop Interactive Stages */}
          <div className="hidden md:grid grid-cols-12 gap-8 items-center bg-white/80 backdrop-blur-md rounded-4xl p-8 lg:p-12 border border-blush-200/80 shadow-soft-lg min-h-[500px]">
            {/* Left Narrative Stage Info */}
            <div className="col-span-5 flex flex-col justify-between h-full">
              <div>
                {/* Stage Counter 01 / 03 */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-serif text-2xl font-bold text-rose-500">
                    0{activeStage + 1}
                  </span>
                  <span className="text-xs font-sans uppercase tracking-widest text-plum-400">
                    / 03 Stage
                  </span>
                  {/* Progress Indicator Dots */}
                  <div className="flex gap-1.5 ml-auto">
                    {[0, 1, 2].map((idx) => (
                      <span
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === activeStage ? "w-8 bg-rose-500" : "w-2 bg-blush-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Stage Titles & Descriptions */}
                {activeStage === 0 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 text-rose-600 font-sans text-xs font-semibold uppercase tracking-wider">
                      <Layers className="w-4 h-4" />
                      <span>Stage 01: Discovery & Architecture</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-plum">
                      Research, User Journeys & Flows
                    </h3>
                    <p className="font-sans text-sm text-plum-600 leading-relaxed">
                      Scattered user notes, emotional pain points, and medical requirements are
                      organized into clear, structured user flows. Every friction point is resolved
                      before touching high-fidelity visuals.
                    </p>
                    <ul className="space-y-2 pt-2 text-xs text-plum-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Empathetic user journey mapping</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Information architecture & task trees</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Frictionless 3-tap booking pathways</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeStage === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 text-rose-600 font-sans text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>Stage 02: Interface Synthesis</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-plum">
                      Wireframes to Polished UI
                    </h3>
                    <p className="font-sans text-sm text-plum-600 leading-relaxed">
                      Low-fidelity wireframes morph into soft, human-centered UI screens. Calming
                      colors, generous whitespace, clear typography, and accessible tap targets
                      bring comfort to the patient experience.
                    </p>
                    <ul className="space-y-2 pt-2 text-xs text-plum-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Low-fidelity layout validation in Figma</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Warm cream & blush pastel design system</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Interactive prototype micro-interactions</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeStage === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 text-rose-600 font-sans text-xs font-semibold uppercase tracking-wider">
                      <Palette className="w-4 h-4" />
                      <span>Stage 03: Cohesive Touchpoints</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-plum">
                      Brand Identity & Collateral
                    </h3>
                    <p className="font-sans text-sm text-plum-600 leading-relaxed">
                      Extending the digital product experience across social media creatives, marketing
                      banners, flyers, brochures, business cards, and bespoke invitation suites for a
                      consistent, recognizable brand presence.
                    </p>
                    <ul className="space-y-2 pt-2 text-xs text-plum-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Consistent typography & color guidelines</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Social media posts & promotional assets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500" />
                        <span>Print-ready business cards & invitations</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Scrub Instruction */}
              <div className="mt-8 pt-4 border-t border-blush-200/60 flex items-center gap-2 text-xs text-plum-400">
                <SparkleIcon className="w-3 h-3 text-rose-400" />
                <span>Scroll down smoothly to advance stages</span>
              </div>
            </div>

            {/* Right Interactive Visual Stage Representation */}
            <div className="col-span-7 relative flex justify-center items-center min-h-[420px] bg-cream-50/70 rounded-3xl p-6 border border-blush-200/60 overflow-hidden">
              {/* Stage 01 Visual: Connecting Research Nodes & Flow */}
              {activeStage === 0 && (
                <div className="w-full flex flex-col items-center justify-center gap-6 animate-fadeIn">
                  <div className="flex items-center justify-between w-full max-w-md">
                    <div className="p-3.5 rounded-2xl bg-white border border-blush-200 shadow-soft text-center">
                      <span className="block text-[10px] uppercase font-bold text-rose-600">
                        Step 1
                      </span>
                      <span className="font-serif font-bold text-xs text-plum">Patient Intake</span>
                    </div>
                    {/* Connecting SVG Flow Line */}
                    <div className="flex-1 mx-2 flex items-center justify-center">
                      <svg className="w-full h-4" fill="none">
                        <path
                          d="M0 8H120"
                          stroke="#D9577B"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-rose-300 shadow-soft text-center ring-2 ring-rose-100">
                      <span className="block text-[10px] uppercase font-bold text-rose-600">
                        Step 2
                      </span>
                      <span className="font-serif font-bold text-xs text-plum">Specialist Match</span>
                    </div>
                    {/* Connecting SVG Flow Line */}
                    <div className="flex-1 mx-2 flex items-center justify-center">
                      <svg className="w-full h-4" fill="none">
                        <path
                          d="M0 8H120"
                          stroke="#D9577B"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-blush-200 shadow-soft text-center">
                      <span className="block text-[10px] uppercase font-bold text-rose-600">
                        Step 3
                      </span>
                      <span className="font-serif font-bold text-xs text-plum">Tele-Visit</span>
                    </div>
                  </div>

                  {/* Flow Details Card */}
                  <div className="w-full max-w-md p-5 rounded-2xl bg-white border border-blush-200 shadow-soft-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-blush-100 mb-3">
                      <span className="text-xs font-semibold text-plum">Task Flow Efficiency</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        3-Tap Booking
                      </span>
                    </div>
                    <div className="space-y-2 text-xs text-plum-600">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-400" />
                        <span>Friction points removed: 4 redundant confirmation steps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-lilac-400" />
                        <span>Emergency helplines pinned accessible on all views</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 02 Visual: Wireframe morphs into Hi-Fi UI */}
              {activeStage === 1 && (
                <div className="w-full flex items-center justify-center gap-6 animate-fadeIn">
                  {/* Left: Grey Wireframe */}
                  <div className="w-44 p-3 rounded-3xl bg-gray-100 border-2 border-dashed border-gray-300 opacity-60">
                    <div className="h-3 w-16 bg-gray-300 rounded mb-3 mx-auto" />
                    <div className="h-16 bg-gray-200 rounded-xl mb-3" />
                    <div className="h-3 w-full bg-gray-200 rounded mb-2" />
                    <div className="h-3 w-3/4 bg-gray-200 rounded mb-4" />
                    <div className="h-8 bg-gray-300 rounded-lg" />
                    <span className="block text-[10px] text-center text-gray-500 font-medium mt-2">
                      Lo-Fi Wireframe
                    </span>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="text-rose-500">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>

                  {/* Right: Finished Pastel UI */}
                  <div className="w-48 p-3.5 rounded-3xl bg-white border border-blush-300 shadow-soft-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-4 h-4 rounded-full bg-rose-200 flex items-center justify-center text-[8px] font-bold text-rose-700">
                        ✓
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold">
                        Hi-Fi
                      </span>
                    </div>
                    <div className="p-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[10px] font-semibold mb-2 shadow-sm">
                      Upcoming Consultation
                    </div>
                    <div className="p-2 rounded-xl bg-blush-50 border border-blush-100 text-[10px] text-plum mb-2">
                      <span className="font-bold block">Dr. Alena Vance</span>
                      <span className="text-plum-400 text-[9px]">Confirmed for 2:30 PM</span>
                    </div>
                    <button className="w-full py-1.5 rounded-xl bg-rose-500 text-white text-[10px] font-bold">
                      Join Video Call
                    </button>
                    <span className="block text-[10px] text-center text-rose-600 font-medium mt-2">
                      Final Pastel UI
                    </span>
                  </div>
                </div>
              )}

              {/* Stage 03 Visual: Brand & Creative Board */}
              {activeStage === 2 && (
                <div className="w-full max-w-md flex flex-col gap-4 animate-fadeIn">
                  {/* Brand Swatches & Logo */}
                  <div className="p-4 rounded-2xl bg-white border border-blush-200 shadow-soft-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-blush-200 flex items-center justify-center font-serif text-lg font-bold text-plum">
                        P.
                      </div>
                      <div>
                        <h5 className="font-serif font-bold text-xs text-plum">CareFlow Brand</h5>
                        <span className="text-[10px] text-plum-400">Design System Palette</span>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#FFF8F5] border border-blush-300 shadow-xs" />
                      <span className="w-5 h-5 rounded-full bg-[#F8D7DF] shadow-xs" />
                      <span className="w-5 h-5 rounded-full bg-[#D9577B] shadow-xs" />
                      <span className="w-5 h-5 rounded-full bg-[#E6DDF7] shadow-xs" />
                      <span className="w-5 h-5 rounded-full bg-[#2B1B2E] shadow-xs" />
                    </div>
                  </div>

                  {/* Assembled Marketing Collateral */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-blush-100 border border-blush-200 text-center">
                      <span className="block font-serif text-xs font-bold text-plum mb-1">
                        Social Creative
                      </span>
                      <span className="text-[10px] text-plum-500">Instagram Carousel & Ads</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-lilac-100 border border-lilac-200 text-center">
                      <span className="block font-serif text-xs font-bold text-plum mb-1">
                        Invitation Suite
                      </span>
                      <span className="text-[10px] text-plum-500">Digital RSVP & Print Card</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Fallback: Stacked Clean Cards (no pinning, perfectly smooth scroll at 390px) */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Mobile Card 1 */}
            <div className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft">
              <span className="text-xs font-bold font-serif text-rose-700">01 / 03</span>
              <h3 className="font-serif text-xl font-bold text-plum mt-1 mb-2">
                Research & User Flows
              </h3>
              <p className="text-xs text-plum-600 leading-relaxed mb-4">
                Scattered user notes and emotional pain points organized into clear, structured user flows.
              </p>
              <div className="p-3 rounded-2xl bg-cream-50 border border-blush-200 text-xs font-medium text-plum flex items-center justify-between">
                <span>Task Mapping</span>
                <span className="text-rose-700 font-bold">3-Tap Flow</span>
              </div>
            </div>

            {/* Mobile Card 2 */}
            <div className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft">
              <span className="text-xs font-bold font-serif text-rose-700">02 / 03</span>
              <h3 className="font-serif text-xl font-bold text-plum mt-1 mb-2">
                Wireframes to Finished UI
              </h3>
              <p className="text-xs text-plum-600 leading-relaxed mb-4">
                Grey wireframe layouts morph into soft, human-centered pastel interfaces with Figma prototypes.
              </p>
              <div className="p-3 rounded-2xl bg-blush-100 border border-blush-200 text-xs font-medium text-rose-800 flex items-center justify-between">
                <span>Hi-Fi Screens</span>
                <span className="font-bold">Warm Cream & Rose</span>
              </div>
            </div>

            {/* Mobile Card 3 */}
            <div className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft">
              <span className="text-xs font-bold font-serif text-rose-700">03 / 03</span>
              <h3 className="font-serif text-xl font-bold text-plum mt-1 mb-2">
                Brand & Marketing Design
              </h3>
              <p className="text-xs text-plum-600 leading-relaxed mb-4">
                Logos, social media creatives, flyers, brochures, and bespoke invitation suites.
              </p>
              <div className="p-3 rounded-2xl bg-lilac-100 border border-lilac-200 text-xs font-medium text-plum flex items-center justify-between">
                <span>Collateral Suite</span>
                <span className="text-rose-700 font-bold">Canva & Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
