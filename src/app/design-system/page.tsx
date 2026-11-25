"use client";

import { useState } from "react";
import { themePresets, applyTheme } from "@/data/themes";
import { SparkleIcon } from "@/components/common/Stickers";
import {
  Sliders,
  Check,
  Copy,
  Sun,
  Moon,
  ChevronDown,
  Bell,
  Search,
  AlertCircle,
  CheckCircle2,
  Info,
  X,
  User,
  ExternalLink,
  Layers,
  Palette,
  Type,
  Maximize2,
  Box,
} from "lucide-react";

export default function DesignSystemPage() {
  const [activeTheme, setActiveTheme] = useState(themePresets[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"tokens" | "components" | "export">("tokens");
  const [switchOn, setSwitchOn] = useState(true);
  const [radioVal, setRadioVal] = useState("figma");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(true);

  const handleThemeChange = (t: (typeof themePresets)[0]) => {
    setActiveTheme(t);
    applyTheme(t);
  };

  const currentBg = isDarkMode ? "#1A141E" : activeTheme.tokens.bgPrimary;
  const currentText = isDarkMode ? "#F5EEF8" : activeTheme.tokens.textPrimary;
  const currentCardBg = isDarkMode ? "#241D29" : "#FFFFFF";
  const currentBorder = isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(217, 87, 123, 0.18)";

  const generatedCss = `/* ========================================================
   Priya K. Lakkad — Design System Tokens
   Active Preset: ${activeTheme.name} (${isDarkMode ? "Dark" : "Light"})
   ======================================================== */
:root {
  /* Color Palette Tokens */
  --bg-primary: ${currentBg};
  --bg-surface: ${currentCardBg};
  --accent-primary: ${activeTheme.tokens.accentPrimary};
  --accent-secondary: ${activeTheme.tokens.accentSecondary};
  --text-primary: ${currentText};
  --text-muted: ${isDarkMode ? "#A898B0" : "#6E5E72"};
  --border-subtle: ${currentBorder};

  /* Typography Scale */
  --font-display: var(--font-fraunces), serif;
  --font-body: var(--font-dm-sans), sans-serif;
  --text-display: 3.5rem; /* 56px */
  --text-h1: 2.5rem;      /* 40px */
  --text-h2: 2rem;        /* 32px */
  --text-h3: 1.5rem;      /* 24px */
  --text-body: 0.9375rem; /* 15px */
  --text-small: 0.8125rem;/* 13px */
  --text-micro: 0.6875rem;/* 11px */

  /* Spacing Scale (4px base) */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */

  /* Shape & Radius Tokens */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-card: ${activeTheme.tokens.cardRadius};
  --radius-pill: 9999px;

  /* Elevation & Shadows */
  --shadow-soft-sm: 0 2px 8px rgba(43, 27, 46, 0.04);
  --shadow-soft-md: 0 8px 24px rgba(43, 27, 46, 0.07);
  --shadow-soft-lg: 0 16px 40px rgba(43, 27, 46, 0.1);
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4 shadow-soft-sm">
            <Sliders className="w-3.5 h-3.5 text-rose-600" />
            <span>Interactive Design Lab</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight">
            Design System Lab
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-4 leading-relaxed">
            A comprehensive Figma-to-code design system featuring live CSS variable tokens, accessible color scales, 
            typography hierarchy, and interactive atomic UI primitives.
          </p>

          {/* Theme Switcher & Dark Mode Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {themePresets.map((t) => (
              <button
                key={t.id}
                onClick={() => handleThemeChange(t)}
                className={`min-h-[44px] px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2.5 ${
                  activeTheme.id === t.id
                    ? "bg-rose-500 text-white shadow-soft font-semibold scale-105"
                    : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0 shadow-xs"
                  style={{ backgroundColor: t.dotColor }}
                />
                <span>{t.name}</span>
              </button>
            ))}

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white text-plum-700 border border-blush-200 hover:bg-blush-50 flex items-center gap-2 transition-all shadow-soft-sm"
              aria-label="Toggle Light/Dark Preview"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-plum-600" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-cream-200/80 border border-blush-200 shadow-soft-sm">
            <button
              onClick={() => setActiveTab("tokens")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "tokens"
                  ? "bg-white text-plum shadow-soft"
                  : "text-plum-600 hover:text-plum"
              }`}
            >
              Design Tokens
            </button>
            <button
              onClick={() => setActiveTab("components")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "components"
                  ? "bg-white text-plum shadow-soft"
                  : "text-plum-600 hover:text-plum"
              }`}
            >
              Component Library
            </button>
            <button
              onClick={() => setActiveTab("export")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "export"
                  ? "bg-white text-plum shadow-soft"
                  : "text-plum-600 hover:text-plum"
              }`}
            >
              Live tokens.css
            </button>
          </div>
        </div>

        {/* ========================================================
            TAB 1: DESIGN TOKENS
            ======================================================== */}
        {activeTab === "tokens" && (
          <div className="space-y-12">
            {/* Color Scales & Semantics */}
            <div className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-5 h-5 text-rose-600" />
                <h2 className="font-serif text-2xl font-bold text-plum">Color Scales & Semantic Tokens</h2>
              </div>
              <p className="text-xs text-plum-600 mb-8 max-w-2xl">
                Dynamic palette tokens reactive to the active theme preset ({activeTheme.name}).
                All foreground/background pairings exceed WCAG AA 4.5:1 contrast standards.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200">
                  <div
                    className="w-full h-16 rounded-xl border border-blush-300 mb-3 shadow-xs transition-colors duration-500"
                    style={{ backgroundColor: activeTheme.tokens.bgPrimary }}
                  />
                  <span className="block font-mono text-[11px] font-bold text-plum">--bg-primary</span>
                  <span className="text-[10px] text-plum-500 font-mono">{activeTheme.tokens.bgPrimary}</span>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200">
                  <div
                    className="w-full h-16 rounded-xl border border-blush-300 mb-3 shadow-xs transition-colors duration-500"
                    style={{ backgroundColor: activeTheme.tokens.accentPrimary }}
                  />
                  <span className="block font-mono text-[11px] font-bold text-plum">--accent-primary</span>
                  <span className="text-[10px] text-plum-500 font-mono">{activeTheme.tokens.accentPrimary}</span>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200">
                  <div
                    className="w-full h-16 rounded-xl border border-blush-300 mb-3 shadow-xs transition-colors duration-500"
                    style={{ backgroundColor: activeTheme.tokens.accentSecondary }}
                  />
                  <span className="block font-mono text-[11px] font-bold text-plum">--accent-secondary</span>
                  <span className="text-[10px] text-plum-500 font-mono">{activeTheme.tokens.accentSecondary}</span>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200">
                  <div
                    className="w-full h-16 rounded-xl border border-blush-300 mb-3 shadow-xs transition-colors duration-500"
                    style={{ backgroundColor: activeTheme.tokens.textPrimary }}
                  />
                  <span className="block font-mono text-[11px] font-bold text-plum">--text-primary</span>
                  <span className="text-[10px] text-plum-500 font-mono">{activeTheme.tokens.textPrimary}</span>
                </div>
              </div>

              {/* 50 - 900 Ramp */}
              <div className="pt-6 border-t border-blush-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-plum-500 block mb-3">
                  Tonal Ramp (50 — 900)
                </span>
                <div className="grid grid-cols-10 gap-1.5 h-12 rounded-xl overflow-hidden border border-blush-200">
                  <div className="bg-blush-50 flex items-center justify-center text-[10px] text-plum-600 font-mono">50</div>
                  <div className="bg-blush-100 flex items-center justify-center text-[10px] text-plum-600 font-mono">100</div>
                  <div className="bg-blush-200 flex items-center justify-center text-[10px] text-plum-600 font-mono">200</div>
                  <div className="bg-blush-300 flex items-center justify-center text-[10px] text-plum-700 font-mono">300</div>
                  <div className="bg-rose-400 flex items-center justify-center text-[10px] text-white font-mono">400</div>
                  <div className="bg-rose-500 flex items-center justify-center text-[10px] text-white font-mono font-bold">500</div>
                  <div className="bg-rose-600 flex items-center justify-center text-[10px] text-white font-mono">600</div>
                  <div className="bg-rose-700 flex items-center justify-center text-[10px] text-white font-mono">700</div>
                  <div className="bg-plum-800 flex items-center justify-center text-[10px] text-white font-mono">800</div>
                  <div className="bg-plum-900 flex items-center justify-center text-[10px] text-white font-mono">900</div>
                </div>
              </div>
            </div>

            {/* Typography Scale */}
            <div className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg">
              <div className="flex items-center gap-3 mb-3">
                <Type className="w-5 h-5 text-rose-600" />
                <h2 className="font-serif text-2xl font-bold text-plum">Typography Scale & Hierarchy</h2>
              </div>
              <p className="text-xs text-plum-600 mb-8 max-w-2xl">
                Editorial pairing of Fraunces (warm optical serif) and DM Sans (accessible geometric grotesque).
              </p>

              <div className="space-y-6 divide-y divide-blush-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-4">
                  <div className="w-48 mb-1 sm:mb-0">
                    <span className="font-mono text-xs text-plum-500 block">Display 1 (56px)</span>
                    <span className="font-mono text-[10px] text-plum-400">Fraunces 700 / 1.1</span>
                  </div>
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-plum flex-1">
                    Caring Healthcare UX
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-4">
                  <div className="w-48 mb-1 sm:mb-0">
                    <span className="font-mono text-xs text-plum-500 block">Heading 1 (36px)</span>
                    <span className="font-mono text-[10px] text-plum-400">Fraunces 600 / 1.2</span>
                  </div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-plum flex-1">
                    Patient Consultation Flow
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-4">
                  <div className="w-48 mb-1 sm:mb-0">
                    <span className="font-mono text-xs text-plum-500 block">Body Regular (15px)</span>
                    <span className="font-mono text-[10px] text-plum-400">DM Sans 400 / 1.6</span>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-plum-700 flex-1 leading-relaxed max-w-xl">
                    Every digital interaction is mapped with empathy, ensuring users navigate vital records and telehealth
                    with calmness and confidence.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-4">
                  <div className="w-48 mb-1 sm:mb-0">
                    <span className="font-mono text-xs text-plum-500 block">Micro Label (11px)</span>
                    <span className="font-mono text-[10px] text-plum-400">DM Sans 700 / Caps</span>
                  </div>
                  <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-rose-700 flex-1">
                    TELEMEDICINE • VERIFIED DOCTOR ON-CALL
                  </span>
                </div>
              </div>
            </div>

            {/* Spacing, Radius & Elevation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Spacing */}
              <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg">
                <h3 className="font-serif text-lg font-bold text-plum mb-3">4px Spacing Grid</h3>
                <div className="space-y-3">
                  {[
                    { label: "--space-2 (8px)", w: "w-2" },
                    { label: "--space-4 (16px)", w: "w-4" },
                    { label: "--space-6 (24px)", w: "w-6" },
                    { label: "--space-8 (32px)", w: "w-8" },
                    { label: "--space-12 (48px)", w: "w-12" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between text-xs font-mono text-plum-600">
                      <span>{s.label}</span>
                      <div className={`h-4 bg-rose-400 rounded-sm ${s.w}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Radius */}
              <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg">
                <h3 className="font-serif text-lg font-bold text-plum mb-3">Container Radius</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-cream-50 border border-blush-200 rounded-lg text-xs font-mono text-plum">
                    --radius-sm: 8px (Buttons/Inputs)
                  </div>
                  <div className="p-3 bg-cream-50 border border-blush-200 rounded-2xl text-xs font-mono text-plum">
                    --radius-md: 16px (Modals)
                  </div>
                  <div
                    className="p-3 bg-cream-50 border border-blush-200 text-xs font-mono text-plum transition-all duration-500"
                    style={{ borderRadius: activeTheme.tokens.cardRadius }}
                  >
                    --radius-card: {activeTheme.tokens.cardRadius} (Active)
                  </div>
                  <div className="p-3 bg-cream-50 border border-blush-200 rounded-full text-xs font-mono text-plum text-center">
                    --radius-pill: 9999px
                  </div>
                </div>
              </div>

              {/* Elevation */}
              <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft-lg">
                <h3 className="font-serif text-lg font-bold text-plum mb-3">Soft Elevation</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-xl shadow-soft-sm text-xs font-mono text-plum border border-blush-100">
                    shadow-soft-sm (Subtle)
                  </div>
                  <div className="p-3 bg-white rounded-xl shadow-soft text-xs font-mono text-plum border border-blush-100">
                    shadow-soft (Card Base)
                  </div>
                  <div className="p-3 bg-white rounded-xl shadow-soft-lg text-xs font-mono text-plum border border-blush-100">
                    shadow-soft-lg (Hover / Floating)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: COMPONENT LIBRARY
            ======================================================== */}
        {activeTab === "components" && (
          <div
            className="p-8 sm:p-12 rounded-4xl border transition-colors duration-500 shadow-soft-xl space-y-12"
            style={{
              backgroundColor: currentCardBg,
              borderColor: currentBorder,
              color: currentText,
            }}
          >
            {/* 1. Button States */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block mb-2">
                01 • Interactive Buttons
              </span>
              <h3 className="font-serif text-2xl font-bold mb-6">Button Hierarchy & Micro-States</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="px-6 py-3 text-xs font-semibold text-white shadow-soft hover:opacity-95 active:scale-98 transition-all"
                  style={{
                    backgroundColor: activeTheme.tokens.accentPrimary,
                    borderRadius: activeTheme.tokens.cardRadius,
                  }}
                >
                  Primary Action (48px)
                </button>

                <button
                  className="px-6 py-3 text-xs font-semibold border transition-all"
                  style={{
                    borderColor: currentBorder,
                    borderRadius: activeTheme.tokens.cardRadius,
                    color: currentText,
                  }}
                >
                  Secondary Neutral
                </button>

                <button
                  className="px-5 py-3 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-full transition-all"
                >
                  Ghost / Text Action →
                </button>

                <button
                  disabled
                  className="px-6 py-3 text-xs font-semibold bg-gray-200 text-gray-400 rounded-full cursor-not-allowed opacity-60"
                >
                  Disabled State
                </button>
              </div>
            </div>

            {/* 2. Inputs, Selects & Toggles */}
            <div className="pt-8 border-t" style={{ borderColor: currentBorder }}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block mb-2">
                02 • Form Controls
              </span>
              <h3 className="font-serif text-2xl font-bold mb-6">Inputs, Dropdowns & Accessible Toggles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-semibold block mb-2">Specialist Search</label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-400" />
                    <input
                      type="text"
                      readOnly
                      value="Gynecology & Wellness"
                      className="w-full pl-10 pr-3 py-2.5 text-xs bg-cream-50/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
                      style={{ borderColor: currentBorder, color: currentText }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-2">Consultation Mode</label>
                  <div className="relative">
                    <select
                      className="w-full px-3.5 py-2.5 text-xs bg-cream-50/50 border rounded-xl appearance-none focus:outline-none"
                      style={{ borderColor: currentBorder, color: currentText }}
                    >
                      <option>Video Telemedicine (45 mins)</option>
                      <option>In-Clinic Visit (Surat)</option>
                      <option>Quick Chat Follow-up</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-plum-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold block mb-2">Reminders & Push</label>
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setSwitchOn(!switchOn)}
                      className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                        switchOn ? "bg-rose-500" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                          switchOn ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                    <span className="text-xs font-medium">Daily Cycle Log Reminder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Cards, Chips & Avatars */}
            <div className="pt-8 border-t" style={{ borderColor: currentBorder }}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block mb-2">
                03 • Status Badges & Pill Chips
              </span>
              <h3 className="font-serif text-2xl font-bold mb-6">Categorical Tags & Indicators</h3>
              <div className="flex flex-wrap gap-2.5 items-center">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  ✓ Verified Provider
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blush-200 text-rose-800 border border-blush-300">
                  High Priority Triage
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-lilac-200 text-plum-800 border border-lilac-300">
                  Cycle Day 14 • Ovulation Window
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                  Pending Lab Results
                </span>
              </div>
            </div>

            {/* 4. Live Interactive Modal & Toast Trigger */}
            <div className="pt-8 border-t" style={{ borderColor: currentBorder }}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block mb-2">
                04 • Feedback & Overlays
              </span>
              <h3 className="font-serif text-2xl font-bold mb-6">Modal Dialog & Floating Toast</h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-blush-300 shadow-soft hover:bg-blush-50 text-plum transition-all"
                >
                  Preview Appointment Modal
                </button>
                <button
                  onClick={() => setShowToast(true)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-blush-300 shadow-soft hover:bg-blush-50 text-plum transition-all"
                >
                  Trigger Success Toast
                </button>
              </div>

              {/* Inline Toast Preview */}
              {showToast && (
                <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between max-w-md shadow-soft">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-emerald-900 block">Design tokens synced!</span>
                      <span className="text-[11px] text-emerald-700">WCAG AA contrast verified across 4 presets.</span>
                    </div>
                  </div>
                  <button onClick={() => setShowToast(false)} className="text-emerald-700 hover:text-emerald-900">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* 5. Data Table Specimen */}
            <div className="pt-8 border-t" style={{ borderColor: currentBorder }}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block mb-2">
                05 • Data Table Specimen
              </span>
              <h3 className="font-serif text-2xl font-bold mb-6">Patient Appointment Records</h3>
              <div className="overflow-x-auto rounded-2xl border border-blush-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-cream-100 text-plum-700 font-semibold border-b border-blush-200">
                    <tr>
                      <th className="p-3.5">Patient / Service</th>
                      <th className="p-3.5">Specialist</th>
                      <th className="p-3.5">Scheduled Time</th>
                      <th className="p-3.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blush-100 text-plum-600">
                    <tr>
                      <td className="p-3.5 font-medium text-plum">Comprehensive Wellness Review</td>
                      <td className="p-3.5">Dr. Ananya Shah</td>
                      <td className="p-3.5">Today, 10:30 AM</td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                          Confirmed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-medium text-plum">PCOD Nutritional Consultation</td>
                      <td className="p-3.5">Riya Patel, RD</td>
                      <td className="p-3.5">Tomorrow, 02:00 PM</td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-100 text-blue-800">
                          Video Ready
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: LIVE TOKENS.CSS CODE BLOCK
            ======================================================== */}
        {activeTab === "export" && (
          <div className="p-8 sm:p-12 rounded-4xl bg-slate-900 border border-slate-800 shadow-soft-xl text-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-rose-400 block mb-1">
                  LIVE EXPORT • {activeTheme.name.toUpperCase()}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">Generated tokens.css</h3>
              </div>
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-500 text-white font-sans text-xs font-semibold shadow-soft hover:bg-rose-600 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy tokens.css"}</span>
              </button>
            </div>

            <pre className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
              <code>{generatedCss}</code>
            </pre>
          </div>
        )}

        {/* Modal Dialog Backdrop Preview */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-md p-8 rounded-4xl bg-white border border-blush-200 shadow-soft-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Confirm Appointment</span>
                <button onClick={() => setShowModal(false)} className="text-plum-500 hover:text-plum">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h4 className="font-serif text-xl font-bold text-plum">Telemedicine Video Consult</h4>
              <p className="text-xs text-plum-600 leading-relaxed">
                You are scheduling a 45-minute consultation with Dr. Ananya Shah. An instant Google Meet link and
                prescription vault access will be generated.
              </p>
              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 text-xs font-semibold text-white bg-rose-500 rounded-full shadow-soft hover:bg-rose-600 transition-all"
                >
                  Confirm (Mock)
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-3 text-xs font-semibold text-plum bg-cream-100 rounded-full hover:bg-cream-200 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
