"use client";

import { useState } from "react";
import { themePresets, applyTheme } from "@/data/themes";
import { SparkleIcon } from "@/components/common/Stickers";
import { Sliders, Layers, Check, Palette } from "lucide-react";

export default function DesignSystemPage() {
  const [activeTheme, setActiveTheme] = useState(themePresets[0]);

  const handleThemeChange = (t: typeof themePresets[0]) => {
    setActiveTheme(t);
    applyTheme(t);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <Sliders className="w-3.5 h-3.5 text-rose-600" />
            <span>Interactive Design Lab</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight">
            Design System Lab
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-4 leading-relaxed">
            Explore live tokens, typography scales, container radii, and atomic component primitives designed in Figma.
          </p>

          {/* Theme Preset Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {themePresets.map((t) => (
              <button
                key={t.id}
                onClick={() => handleThemeChange(t)}
                className={`min-h-[44px] px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTheme.id === t.id
                    ? "bg-rose-500 text-white shadow-soft font-semibold"
                    : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: t.dotColor }}
                />
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Lab Showcase Grid */}
        <div className="space-y-12">
          {/* Section 1: Color Tokens */}
          <div className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg">
            <h2 className="font-serif text-2xl font-bold text-plum mb-2">1. Color Tokens & Semantic Roles</h2>
            <p className="text-xs text-plum-600 mb-6">
              Defined CSS variables with strict WCAG AA contrast rules for accessibility and emotional comfort.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200">
                <div
                  className="w-full h-16 rounded-xl border border-blush-300 mb-3 shadow-xs"
                  style={{ backgroundColor: activeTheme.tokens.bgPrimary }}
                />
                <span className="block font-mono text-[11px] font-bold text-plum">--bg-primary</span>
                <span className="text-[10px] text-plum-500">{activeTheme.tokens.bgPrimary}</span>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200">
                <div
                  className="w-full h-16 rounded-xl border border-blush-300 mb-3 shadow-xs"
                  style={{ backgroundColor: activeTheme.tokens.accentPrimary }}
                />
                <span className="block font-mono text-[11px] font-bold text-plum">--accent-primary</span>
                <span className="text-[10px] text-plum-500">{activeTheme.tokens.accentPrimary}</span>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200">
                <div
                  className="w-full h-16 rounded-xl border border-blush-300 mb-3 shadow-xs"
                  style={{ backgroundColor: activeTheme.tokens.accentSecondary }}
                />
                <span className="block font-mono text-[11px] font-bold text-plum">--accent-secondary</span>
                <span className="text-[10px] text-plum-500">{activeTheme.tokens.accentSecondary}</span>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-blush-200">
                <div
                  className="w-full h-16 rounded-xl border border-blush-300 mb-3 shadow-xs"
                  style={{ backgroundColor: activeTheme.tokens.textPrimary }}
                />
                <span className="block font-mono text-[11px] font-bold text-plum">--text-primary</span>
                <span className="text-[10px] text-plum-500">{activeTheme.tokens.textPrimary}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Typography Scale */}
          <div className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg">
            <h2 className="font-serif text-2xl font-bold text-plum mb-2">2. Typography Scale</h2>
            <p className="text-xs text-plum-600 mb-6">
              Fraunces Serif Display paired with DM Sans geometric body for warmth, clarity, and readability.
            </p>
            <div className="space-y-4 divide-y divide-blush-100">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-3">
                <span className="font-mono text-xs text-plum-400">Display 1 (48px - 60px)</span>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-plum">Empathetic Design</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-3">
                <span className="font-mono text-xs text-plum-400">Heading 2 (28px - 36px)</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-plum">Telemedicine & Health Hub</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-3">
                <span className="font-mono text-xs text-plum-400">Body Large (16px)</span>
                <span className="font-sans text-base text-plum-700 max-w-lg">
                  Patient vitals and daily reminders organized with generous line height and whitespace.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-3">
                <span className="font-mono text-xs text-plum-400">Micro Label (11px)</span>
                <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-rose-700">
                  Auto-Confirmed Appointment
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Component Library Primitives */}
          <div className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft-lg">
            <h2 className="font-serif text-2xl font-bold text-plum mb-2">3. Component Library Primitives</h2>
            <p className="text-xs text-plum-600 mb-6">
              Accessible buttons, input drawers, status chips, and cards reacting live to active card radius ({activeTheme.tokens.cardRadius}).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Primary & Secondary Buttons */}
              <div className="p-6 rounded-3xl bg-cream-50 border border-blush-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-plum-500 block">
                  Buttons & CTAs
                </span>
                <button
                  className="w-full py-3 px-4 text-xs font-semibold text-white shadow-soft transition-all"
                  style={{
                    backgroundColor: activeTheme.tokens.accentPrimary,
                    borderRadius: activeTheme.tokens.cardRadius,
                  }}
                >
                  Primary Action (48px)
                </button>
                <button
                  className="w-full py-3 px-4 text-xs font-semibold text-plum bg-white border border-blush-300 shadow-xs"
                  style={{ borderRadius: activeTheme.tokens.cardRadius }}
                >
                  Secondary Action
                </button>
              </div>

              {/* Status Chips */}
              <div className="p-6 rounded-3xl bg-cream-50 border border-blush-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-plum-500 block">
                  Badges & Chips
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    ✓ Verified Provider
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-200 text-rose-800">
                    High Priority
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-lilac-200 text-plum-700">
                    Cycle Day 14
                  </span>
                </div>
              </div>

              {/* Input Form Elements */}
              <div className="p-6 rounded-3xl bg-cream-50 border border-blush-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-plum-500 block">
                  Form Field
                </span>
                <label className="text-[11px] font-semibold text-plum block">Specialist Search</label>
                <input
                  type="text"
                  readOnly
                  value="General Physician & Wellness"
                  className="w-full px-3 py-2 text-xs bg-white border border-blush-200 text-plum shadow-xs"
                  style={{ borderRadius: `calc(${activeTheme.tokens.cardRadius} / 2)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
