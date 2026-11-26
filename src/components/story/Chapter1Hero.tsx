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
import { ArrowDown, ArrowRight, MessageCircle, Palette, Pencil, GitBranch, Layout, Layers, Monitor } from "lucide-react";

const HERO_STEPS = [
  { id: 0, label: "01 Sketch", title: "Paper Sketch & Sticky Notes", icon: Pencil, badge: "Paper Work" },
  { id: 1, label: "02 Flow", title: "User Flow & Information Architecture", icon: GitBranch, badge: "Architecture" },
  { id: 2, label: "03 Wireframe", title: "8px-Grid Low-Fi Wireframe", icon: Layout, badge: "Structure" },
  { id: 3, label: "04 System", title: "Design System & UI Tokens", icon: Layers, badge: "UI Kit" },
  { id: 4, label: "05 Website", title: "Final Website & Product UI", icon: Monitor, badge: "Recreated concept" },
];

export default function Chapter1Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeThemeId, setActiveThemeId] = useState("studio");
  const [activeStep, setActiveStep] = useState(4);

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

  // Scroll-linked 5-step progression from Paper Sketch -> Live Website
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=420",
      scrub: 0.4,
      onUpdate: (self) => {
        const idx = Math.min(Math.floor(self.progress * HERO_STEPS.length), HERO_STEPS.length - 1);
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

  const currentStep = HERO_STEPS[activeStep] || HERO_STEPS[4];
  const progressPct = ((activeStep + 1) / HERO_STEPS.length) * 100;

  return (
    <section
      id="chapter-hero"
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline + Theme Presets + CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <div
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium shadow-soft-sm mb-6"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent-primary, #D9577B)" }}
              />
              <span>Chapter 01 • Priya K. Lakkad</span>
              <SparkleIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-[54px] font-bold tracking-tight leading-[1.08] mb-5">
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
              className="font-sans text-base sm:text-lg max-w-xl leading-relaxed mb-6"
            >
              {siteConfig.bio}
            </p>

            {/* 4 Interactive Live Theme Presets */}
            <div
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-color)",
              }}
              className="p-3 rounded-2xl backdrop-blur-md border shadow-soft-sm mb-7 flex flex-col sm:flex-row sm:items-center gap-2.5 w-full sm:w-auto"
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

          {/* Right Column: 5-Step Interactive Paper-to-Website Studio Card */}
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

              {/* Stage Title */}
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

              {/* Stage Canvas */}
              <div data-device-screen="true" className="rounded-2xl overflow-hidden border border-black/10 bg-white text-slate-900">
                {activeStep === 0 && (
                  <div className="p-5 bg-[#FFFDF7] space-y-3 min-h-[260px] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[10px] font-mono text-amber-800">
                      <span>NOTEBOOK SKETCH • PEN ON DOT GRID</span>
                      <span>FIGMA PREP</span>
                    </div>
                    <svg viewBox="0 0 420 175" className="w-full h-44" role="img" aria-label="Paper wireframe sketch">
                      <rect x="8" y="8" width="404" height="158" rx="12" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="5 4" />
                      <line x1="24" y1="34" x2="170" y2="34" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="24" y="50" width="170" height="48" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
                      <text x="34" y="70" fontSize="10" fill="#92400E" fontWeight="700">Pain: Hidden slot fees</text>
                      <text x="34" y="86" fontSize="9" fill="#92400E">Show INR + instant video join</text>
                      <rect x="210" y="50" width="186" height="96" rx="10" fill="none" stroke="#475569" strokeWidth="1.5" />
                      <circle cx="235" cy="76" r="12" fill="none" stroke="#475569" strokeWidth="1.5" />
                      <line x1="256" y1="72" x2="368" y2="72" stroke="#475569" strokeWidth="2" />
                      <line x1="256" y1="84" x2="335" y2="84" stroke="#94A3B8" strokeWidth="1.5" />
                      <rect x="226" y="106" width="154" height="24" rx="12" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.2" />
                      <text x="262" y="122" fontSize="10" fill="#9D174D" fontWeight="700">Primary CTA</text>
                    </svg>
                    <p className="text-[11px] text-slate-600">
                      Started on paper to simplify booking steps and surface transparent INR fees.
                    </p>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="p-5 bg-slate-50 min-h-[260px] flex flex-col justify-between space-y-4">
                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                      Information Architecture &amp; User Flow
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 items-center">
                      {[
                        { step: "01", name: "Home", sub: "Next Consult" },
                        { step: "02", name: "Doctor Search", sub: "Filter Specialty" },
                        { step: "03", name: "Slot & UPI", sub: "₹650 Transparent" },
                        { step: "04", name: "Video Room", sub: "Rx + Labs" },
                      ].map((node, i) => (
                        <div key={node.step} className="relative p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-[9px] font-mono font-bold text-teal-700">{node.step}</span>
                          <div className="font-bold text-xs text-slate-900 mt-0.5">{node.name}</div>
                          <div className="text-[10px] text-slate-500">{node.sub}</div>
                          {i < 3 && (
                            <ArrowRight className="hidden sm:block w-3.5 h-3.5 text-slate-400 absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 bg-slate-50 rounded-full" />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-[11px] text-teal-900 font-medium">
                      Zero dead-end modals — every flow ends with confirmation, lab attachment, or reschedule.
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="p-4 bg-slate-100 min-h-[260px]">
                    <BrowserFrame url="wireframe.medicareplus" title="Low-Fi 8px Grid" wireframe>
                      <div className="p-4 space-y-3 bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div className="h-4 w-32 rounded bg-gray-300" />
                          <div className="h-6 w-24 rounded-full bg-gray-300" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-16 rounded-lg border border-dashed border-gray-400 bg-white p-2 text-[9px] font-mono text-gray-500">KPI Card 1</div>
                          <div className="h-16 rounded-lg border border-dashed border-gray-400 bg-white p-2 text-[9px] font-mono text-gray-500">KPI Card 2</div>
                          <div className="h-16 rounded-lg border border-dashed border-gray-400 bg-white p-2 text-[9px] font-mono text-gray-500">KPI Card 3</div>
                        </div>
                        <div className="h-20 rounded-lg border border-dashed border-gray-400 bg-white p-2 text-[9px] font-mono text-gray-500">
                          Table: Patient | Specialist | Slot | INR Fee
                        </div>
                      </div>
                    </BrowserFrame>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="p-5 bg-white min-h-[260px] flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Atomic Design System</span>
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
                          <div className="h-7 w-full rounded-lg mb-1.5 border border-black/10" style={{ backgroundColor: sw.hex }} />
                          <div className="text-[10px] font-bold text-slate-800">{sw.name}</div>
                          <div className="text-[9px] font-mono text-slate-500">{sw.hex}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                      <span className="px-3 py-1.5 rounded-full bg-[#0D7C85] text-white text-[10px] font-bold">Primary Button</span>
                      <span className="px-3 py-1.5 rounded-full border border-slate-300 text-slate-800 text-[10px] font-semibold">Secondary</span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Normal Range</span>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="bg-white">
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
        <div className="mt-14 pt-8 border-t border-[var(--border-color)] flex flex-wrap items-center justify-center sm:justify-between gap-3 text-xs sm:text-sm font-sans font-medium">
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
