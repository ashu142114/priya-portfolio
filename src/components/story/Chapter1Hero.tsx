"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/site";
import { themePresets, applyTheme, ThemePreset, THEME_STORAGE_KEY } from "@/data/themes";
import { SparkleIcon } from "@/components/common/Stickers";
import { BrowserFrame } from "@/components/visuals/DeviceFrame";
import { HcWebPatientPortal } from "@/components/factory/Project1Healthcare";
import { ArrowDown, ArrowRight, MessageCircle, Palette, Pencil, GitBranch, Layout, Layers, Monitor, CheckCircle2 } from "lucide-react";

const HERO_STEPS = [
  { id: 0, label: "01 Sketch", title: "Paper Sketch & Sticky Notes", icon: Pencil, badge: "Paper Work", note: "Exploring layout hierarchy on dot-grid paper before opening Figma." },
  { id: 1, label: "02 Flow", title: "User Flow & Information Architecture", icon: GitBranch, badge: "Architecture", note: "Mapping zero-dead-end patient journeys from discovery to video consult." },
  { id: 2, label: "03 Wireframe", title: "8px-Grid Low-Fi Wireframe", icon: Layout, badge: "Structure", note: "Validating spacing, table density, and 48px+ tap targets in greybox." },
  { id: 3, label: "04 System", title: "Design System & UI Tokens", icon: Layers, badge: "UI Kit", note: "Applying WCAG AA color tokens, typography scale, and reusable UI Kit." },
  { id: 4, label: "05 Website", title: "Final Website & Product UI", icon: Monitor, badge: "Recreated concept", note: "Finished MediCare Plus patient portal ready for developer handoff." },
];

export default function Chapter1Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeThemeId, setActiveThemeId] = useState("studio");
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const syncSkin = () => {
      const skin = document.documentElement.getAttribute("data-skin");
      if (skin) setActiveThemeId(skin);
    };
    syncSkin();
    const obs = new MutationObserver(syncSkin);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-skin"] });
    return () => obs.disconnect();
  }, []);

  // Pin / Hold Hero section on desktop until all 5 steps complete on scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const totalSteps = HERO_STEPS.length;
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${(totalSteps - 1) * 420}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.35,
      snap: {
        snapTo: 1 / (totalSteps - 1),
        duration: { min: 0.18, max: 0.38 },
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const idx = Math.min(Math.floor(self.progress * totalSteps), totalSteps - 1);
        setActiveStep(idx);
      },
    });
    return () => st.kill();
  }, []);

  const handleSelectTheme = (theme: ThemePreset) => {
    setActiveThemeId(theme.id);
    applyTheme(theme);
    try {
      localStorage.setItem(
        THEME_STORAGE_KEY,
        JSON.stringify({
          skinId: theme.id,
          cardRadiusPx: parseInt(theme.tokens.cardRadius, 10),
          paperGrain: true,
          reducedMotion: false,
        })
      );
    } catch {
      // ignore
    }
  };

  const currentStep = HERO_STEPS[activeStep] || HERO_STEPS[0];
  const progressPct = ((activeStep + 1) / HERO_STEPS.length) * 100;

  return (
    <section
      id="chapter-hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline + Theme Presets + CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <div
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium shadow-soft-sm mb-5"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent-primary, #D9577B)" }}
              />
              <span>Chapter 01 • Priya K. Lakkad</span>
              <SparkleIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.08] mb-4">
              Designing simple,{" "}
              <span
                className="italic font-normal"
                style={{ color: "var(--accent-primary, #D9577B)" }}
              >
                caring digital
              </span>{" "}
              experiences for healthcare &amp; SaaS.
            </h1>

            <p
              style={{ color: "var(--text-secondary)" }}
              className="font-sans text-sm sm:text-base max-w-xl leading-relaxed mb-5"
            >
              {siteConfig.bio}
            </p>

            {/* 4 Interactive Live Theme Presets */}
            <div
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-color)",
              }}
              className="p-2.5 sm:p-3 rounded-2xl backdrop-blur-md border shadow-soft-sm mb-6 flex flex-col sm:flex-row sm:items-center gap-2.5 w-full sm:w-auto"
            >
              <div className="flex items-center gap-2 text-xs font-semibold pr-1">
                <Palette
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--accent-primary, #D9577B)" }}
                />
                <span>Theme:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {themePresets.map((t) => {
                  const isActive = activeThemeId === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleSelectTheme(t)}
                      style={
                        isActive
                          ? {
                              backgroundColor: "var(--surface)",
                              borderColor: "var(--accent-primary, #D9577B)",
                              color: "var(--text-primary)",
                            }
                          : {
                              backgroundColor: "var(--surface-muted)",
                              borderColor: "transparent",
                              color: "var(--text-secondary)",
                            }
                      }
                      className="min-h-[34px] px-3 py-1 rounded-full border-2 text-xs font-semibold transition-all flex items-center gap-1.5"
                      aria-label={`Switch theme to ${t.name}`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: t.dotColor }}
                      />
                      <span>{t.name.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#chapter-themes"
                style={{
                  backgroundColor: "var(--accent-primary, #D9577B)",
                  color: "#FFFFFF",
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold tracking-wide shadow-soft hover:opacity-90 transition-all duration-200 active:scale-95"
              >
                <span>Scroll the Story</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                style={{
                  backgroundColor: "var(--surface)",
                  color: "var(--text-primary)",
                  borderColor: "var(--border-color)",
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border font-sans text-sm font-semibold shadow-soft-sm hover:opacity-90 transition-all duration-200 active:scale-95"
              >
                <MessageCircle
                  className="w-4 h-4"
                  style={{ color: "var(--accent-primary, #D9577B)" }}
                />
                <span>Say hello</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Pinned 5-Step Paper-to-Website Studio Card */}
          <div className="lg:col-span-6 relative">
            <div
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-color)",
                borderRadius: "var(--card-radius, 28px)",
              }}
              className="border shadow-soft-xl p-5 sm:p-6 space-y-4"
            >
              {/* Top Bar + Progress */}
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span
                  className="font-bold uppercase tracking-wider"
                  style={{ color: "var(--accent-primary, #D9577B)" }}
                >
                  • {currentStep.badge}
                </span>
                <span style={{ color: "var(--text-secondary)" }}>
                  STEP 0{activeStep + 1} / 05 • {Math.round(progressPct)}%
                </span>
              </div>

              <div className="h-1.5 w-full rounded-full overflow-hidden bg-black/10">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${progressPct}%`,
                    backgroundColor: "var(--accent-primary, #D9577B)",
                  }}
                />
              </div>

              {/* Stage Title + Caption */}
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-serif text-base sm:text-lg font-bold">
                    {currentStep.title}
                  </h2>
                  <span
                    style={{
                      backgroundColor: "var(--surface-muted)",
                      color: "var(--text-primary)",
                      borderColor: "var(--border-color)",
                    }}
                    className="px-2.5 py-0.5 rounded-full border text-[10px] font-semibold shrink-0"
                  >
                    MediCare Plus
                  </span>
                </div>
                <p
                  style={{ color: "var(--text-secondary)" }}
                  className="text-xs mt-1"
                >
                  {currentStep.note}
                </p>
              </div>

              {/* Stage Canvas */}
              <div data-device-screen="true" className="rounded-2xl overflow-hidden border border-black/10 bg-white text-slate-900">
                {activeStep === 0 && (
                  <div
                    className="p-5 min-h-[280px] flex flex-col justify-between space-y-3"
                    style={{
                      backgroundColor: "#FFFDF7",
                      backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                    }}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-amber-900 font-bold">
                      <span>PAPER SKETCHBOOK • PEN ON DOT GRID</span>
                      <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-300">STEP 01</span>
                    </div>
                    <svg viewBox="0 0 420 185" className="w-full h-44" role="img" aria-label="Hand-drawn paper wireframe sketch">
                      <rect x="8" y="8" width="404" height="168" rx="12" fill="#FFFFFF" fillOpacity="0.85" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="5 4" />
                      <line x1="24" y1="30" x2="175" y2="30" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="24" y="44" width="166" height="52" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
                      <text x="34" y="64" fontSize="10" fill="#92400E" fontWeight="700">Note: Hidden slot fees</text>
                      <text x="34" y="80" fontSize="9" fill="#92400E">Show INR + 1-tap video join</text>
                      <rect x="24" y="106" width="166" height="54" rx="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.2" />
                      <text x="34" y="126" fontSize="10" fill="#075985" fontWeight="700">Goal: Calm hierarchy</text>
                      <text x="34" y="142" fontSize="9" fill="#075985">48px+ touch targets</text>
                      <rect x="210" y="40" width="186" height="122" rx="12" fill="#FFFFFF" stroke="#475569" strokeWidth="1.6" />
                      <circle cx="236" cy="68" r="12" fill="none" stroke="#475569" strokeWidth="1.5" />
                      <line x1="256" y1="64" x2="372" y2="64" stroke="#475569" strokeWidth="2" />
                      <line x1="256" y1="76" x2="338" y2="76" stroke="#94A3B8" strokeWidth="1.5" />
                      <rect x="226" y="96" width="154" height="18" rx="6" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
                      <rect x="226" y="124" width="154" height="26" rx="13" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.3" />
                      <text x="266" y="141" fontSize="10" fill="#9D174D" fontWeight="700">Book Consult</text>
                    </svg>
                    <p className="text-[11px] text-slate-700 font-medium">
                      Sketching key patient needs on paper before opening Figma.
                    </p>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="p-5 bg-slate-50 min-h-[280px] flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-600 uppercase">
                      <span>Information Architecture &amp; User Flow</span>
                      <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800">4 Core Screens</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 items-center">
                      {[
                        { step: "01", name: "Home", sub: "Next Consult" },
                        { step: "02", name: "Doctor Search", sub: "Filter Specialty" },
                        { step: "03", name: "Slot & UPI", sub: "₹650 Transparent" },
                        { step: "04", name: "Video Room", sub: "Rx + Labs" },
                      ].map((node, i) => (
                        <div key={node.step} className="relative p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                          <span className="text-[9px] font-mono font-bold text-teal-700">{node.step}</span>
                          <div className="font-bold text-xs text-slate-900">{node.name}</div>
                          <div className="h-1.5 w-full rounded bg-slate-100" />
                          <div className="text-[10px] text-slate-500">{node.sub}</div>
                          {i < 3 && (
                            <ArrowRight className="hidden sm:block w-3.5 h-3.5 text-teal-600 absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 bg-slate-50 rounded-full" />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-[11px] text-teal-900 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>Zero dead-end modals — every flow leads directly to booking, labs, or video join.</span>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="p-4 bg-slate-100 min-h-[280px] flex flex-col justify-center">
                    <BrowserFrame url="wireframe.medicareplus" title="Low-Fi 8px Grid" wireframe>
                      <div className="p-4 space-y-3 bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div className="h-4 w-36 rounded bg-gray-300" />
                          <div className="h-6 w-24 rounded-full bg-gray-300" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-16 rounded-lg border border-dashed border-gray-400 bg-white p-2 text-[9px] font-mono text-gray-500">Next Visit Card</div>
                          <div className="h-16 rounded-lg border border-dashed border-gray-400 bg-white p-2 text-[9px] font-mono text-gray-500">Lab Status KPI</div>
                          <div className="h-16 rounded-lg border border-dashed border-gray-400 bg-white p-2 text-[9px] font-mono text-gray-500">Family Profiles</div>
                        </div>
                        <div className="h-20 rounded-lg border border-dashed border-gray-400 bg-white p-2 text-[9px] font-mono text-gray-500">
                          Data Table: Patient | Specialist | Slot | INR Fee
                        </div>
                      </div>
                    </BrowserFrame>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="p-5 bg-white min-h-[280px] flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">Atomic Design System</span>
                      <span className="text-[10px] font-mono text-teal-700 font-bold">WCAG AA • 8px Grid</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { name: "Primary", hex: "#0D7C85" },
                        { name: "Surface", hex: "#F4FAFA" },
                        { name: "Ink", hex: "#0F292E" },
                        { name: "Rose CTA", hex: "#D9577B" },
                      ].map((sw) => (
                        <div key={sw.name} className="p-2 rounded-xl border border-slate-200 text-center">
                          <div className="h-8 w-full rounded-lg mb-1.5 border border-black/10" style={{ backgroundColor: sw.hex }} />
                          <div className="text-[10px] font-bold text-slate-800">{sw.name}</div>
                          <div className="text-[9px] font-mono text-slate-500">{sw.hex}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-slate-900">Fraunces Display + DM Sans</span>
                      <span className="font-mono text-[10px] text-slate-500">Radius: 16px</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#0D7C85] text-white text-[10px] font-bold">Primary Button</span>
                      <span className="px-3.5 py-1.5 rounded-full border border-slate-300 text-slate-800 text-[10px] font-semibold">Secondary</span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Normal Range</span>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="bg-white min-h-[280px]">
                    <BrowserFrame url="medicareplus.concept.design" title="MediCare Plus • Live Web UI">
                      <HcWebPatientPortal />
                    </BrowserFrame>
                  </div>
                )}
              </div>

              {/* 5-Step Selector Pills */}
              <div className="grid grid-cols-5 gap-1.5 pt-1">
                {HERO_STEPS.map((st) => {
                  const Icon = st.icon;
                  const active = activeStep === st.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setActiveStep(st.id)}
                      style={
                        active
                          ? {
                              backgroundColor: "var(--accent-primary, #D9577B)",
                              color: "#FFFFFF",
                              borderColor: "var(--accent-primary, #D9577B)",
                            }
                          : {
                              backgroundColor: "var(--surface-muted)",
                              color: "var(--text-primary)",
                              borderColor: "var(--border-color)",
                            }
                      }
                      className="px-2 py-2 rounded-xl border text-[10px] font-semibold flex flex-col items-center justify-center gap-1 transition-all"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="truncate max-w-full">{st.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Roles Strip */}
        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-center sm:justify-between gap-3 text-xs sm:text-sm font-sans font-medium">
          {[
            "UI/UX Designer",
            "Mobile App Designer",
            "Website Designer",
            "Logo Designer",
            "Brand & Advertising Kit Designer",
          ].map((role, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-xs border shadow-soft-xs"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: "var(--accent-primary, #D9577B)" }}
              />
              <span className="font-semibold">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
