"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparkleIcon } from "@/components/common/Stickers";
import { PhoneFrame } from "@/components/visuals/DeviceFrame";
import { HealthcareDashboardScreen } from "@/components/visuals/ProjectScreens";
import { Search, GitBranch, Layout, Sparkles, Smartphone, Check } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Empathic UX Research",
    short: "Research",
    desc: "Uncovering user pain points, patient anxiety triggers, and cognitive friction through qualitative discovery.",
    deliverables: ["User Journey Maps", "Empathy Personas", "Friction Drop-off Audit"],
    icon: Search,
  },
  {
    step: "02",
    title: "User Flows & Architecture",
    short: "User Flows",
    desc: "Mapping seamless multi-step decision trees into zero-friction funnels with clear wayfinding.",
    deliverables: ["Task Trees", "Information Architecture", "Decision Matrix"],
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Low-Fidelity Wireframes",
    short: "Wireframe",
    desc: "Translating architecture into tactile structural layouts, thumb-zone ergonomics, and 48px+ touch targets.",
    deliverables: ["Greyscale Layouts", "Touch-Zone Optimization", "Screen Hierarchy"],
    icon: Layout,
  },
  {
    step: "04",
    title: "High-Fidelity UI Design",
    short: "Hi-Fi UI",
    desc: "Applying soothing color tokens, editorial serif headlines, accessible contrast, and soothing visual care.",
    deliverables: ["Design System Tokens", "WCAG AA Compliance", "Atomic Components"],
    icon: Sparkles,
  },
  {
    step: "05",
    title: "Interactive Prototyping",
    short: "Prototype",
    desc: "Clickable Figma prototypes validating micro-interactions, modal drawers, and developer handoff specs.",
    deliverables: ["Clickable Figma Prototypes", "Handoff Tokens", "Interactive Easing"],
    icon: Smartphone,
  },
];

export default function Chapter4Process() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile || !triggerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: `+=${processSteps.length * 600}`,
      pin: true,
      scrub: 0.5,
      snap: {
        snapTo: 1 / (processSteps.length - 1),
        duration: { min: 0.2, max: 0.4 },
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const step = Math.min(
          Math.floor(self.progress * processSteps.length),
          processSteps.length - 1
        );
        setCurrentStep(step);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  const active = processSteps[currentStep] || processSteps[0];
  const isWireframeStage = currentStep <= 2;

  return (
    <div
      id="chapter-process"
      ref={triggerRef}
      className="relative w-full min-h-screen flex flex-col justify-center py-16 md:py-24 border-b border-[var(--border-color)] bg-cream-50 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-200 text-xs font-semibold text-rose-700 mb-3 shadow-soft-sm">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>Chapter 04 • The Design Process</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            How The Design Builds Itself
          </h2>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-2">
            Scroll to watch one phone transform from raw research insights into a polished, interactive design.
          </p>
        </div>

        {/* 2-Column Split: Left Controls / Description -> Right Transforming Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Step Cards & Methodology */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Step Progress Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {processSteps.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => setCurrentStep(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    currentStep === idx
                      ? "bg-rose-500 text-white font-bold shadow-soft"
                      : "bg-white text-plum-600 border border-blush-200"
                  }`}
                >
                  <span>{s.step} {s.short}</span>
                </button>
              ))}
            </div>

            {/* Active Stage Info Card */}
            <div className="p-8 rounded-4xl bg-white border border-blush-200 shadow-soft-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-rose-700 uppercase tracking-widest">
                  Stage {active.step} of 05
                </span>
                <span className="px-3 py-1 rounded-full bg-blush-100 text-rose-800 text-[10px] font-bold">
                  {currentStep === 0 ? "Research" : currentStep === 1 ? "Flows" : currentStep === 2 ? "Wireframes" : currentStep === 3 ? "UI Tokens" : "Interactive"}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                {active.title}
              </h3>

              <p className="font-sans text-sm text-plum-600 leading-relaxed">
                {active.desc}
              </p>

              <div className="pt-4 border-t border-blush-100 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-plum-500 block">
                  Stage Deliverables:
                </span>
                {active.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-plum-700">
                    <Check className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Transforming Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Stage Indicator floating pill */}
            <div className="absolute -top-4 right-4 z-30 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blush-200 shadow-soft text-xs font-mono font-bold text-rose-700">
              {currentStep === 0 && "1/5: Raw Sticky Notes"}
              {currentStep === 1 && "2/5: User Flow Lines"}
              {currentStep === 2 && "3/5: Grey Wireframe"}
              {currentStep === 3 && "4/5: Styled Pastel UI"}
              {currentStep === 4 && "5/5: Tap Hotspot Prototype"}
            </div>

            {/* Transforming Device Canvas */}
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <PhoneFrame wireframe={isWireframeStage}>
                {currentStep === 0 ? (
                  // STAGE 01: Scattered Research Sticky Notes
                  <div className="p-4 space-y-3">
                    <div className="pb-1 border-b border-gray-300">
                      <span className="font-serif font-bold text-xs text-gray-700">Patient Journey Insights</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 text-xs shadow-xs transform -rotate-1">
                      <span className="font-bold block text-[10px] mb-0.5">Pain Point #1</span>
                      "Patients feel stressed when booking telemedicine because cancellation rules are hidden."
                    </div>
                    <div className="p-3.5 rounded-2xl bg-rose-100 border border-rose-300 text-rose-900 text-xs shadow-xs transform rotate-1">
                      <span className="font-bold block text-[10px] mb-0.5">Core Need #2</span>
                      "Lab test values need clear reference ranges (Normal vs. Elevated) without medical jargon."
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-100 border border-purple-300 text-purple-900 text-xs shadow-xs transform -rotate-1">
                      <span className="font-bold block text-[10px] mb-0.5">Architecture #3</span>
                      "Emergency consultations must be reachable in 1 single tap from the home screen."
                    </div>
                  </div>
                ) : currentStep === 1 ? (
                  // STAGE 02: Flow Nodes Connected by SVG lines
                  <div className="p-4 space-y-4">
                    <div className="pb-1 border-b border-gray-300">
                      <span className="font-serif font-bold text-xs text-gray-700">Frictionless Funnel (3 Taps)</span>
                    </div>
                    <div className="space-y-3 relative">
                      <div className="p-3 rounded-2xl bg-white border border-gray-300 shadow-xs text-center text-xs font-mono font-bold text-gray-700">
                        [01. Search Specialist]
                      </div>
                      <div className="w-0.5 h-4 bg-gray-400 mx-auto" />
                      <div className="p-3 rounded-2xl bg-white border border-gray-300 shadow-xs text-center text-xs font-mono font-bold text-gray-700">
                        [02. Select Slot & Mode]
                      </div>
                      <div className="w-0.5 h-4 bg-gray-400 mx-auto" />
                      <div className="p-3 rounded-2xl bg-white border border-gray-300 shadow-xs text-center text-xs font-mono font-bold text-gray-700">
                        [03. Instant Confirmation]
                      </div>
                    </div>
                  </div>
                ) : (
                  // STAGE 03, 04, 05: Wireframe -> Hi-Fi -> Clickable Prototype
                  <div className="relative">
                    <HealthcareDashboardScreen wireframe={isWireframeStage} />
                    {currentStep === 4 && (
                      // Hotspot pulses for clickable prototype
                      <div className="absolute inset-0 pointer-events-none flex flex-col justify-around p-6">
                        <div className="w-10 h-10 rounded-full bg-rose-500/30 border-2 border-rose-500 animate-ping self-end mr-4" />
                        <div className="w-8 h-8 rounded-full bg-rose-500/40 border-2 border-rose-500 animate-ping self-center" />
                      </div>
                    )}
                  </div>
                )}
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
