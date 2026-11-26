"use client";

import React, { useEffect, useState } from "react";
import {
  ACCENT_SWATCHES,
  THEME_STORAGE_KEY,
  ThemePreferences,
  applyTheme,
  themePresets,
} from "@/data/themes";
import { Check, Copy, RotateCcw, Sparkles, X } from "lucide-react";

interface ThemeStudioDrawerProps {
  open: boolean;
  onClose: () => void;
  prefs: ThemePreferences;
  onUpdatePrefs: (next: ThemePreferences) => void;
}

export function ThemeStudioDrawer({
  open,
  onClose,
  prefs,
  onUpdatePrefs,
}: ThemeStudioDrawerProps) {
  const [copied, setCopied] = useState(false);

  const activeTheme =
    themePresets.find((t) => t.id === prefs.skinId) || themePresets[0];
  const activeAccent = prefs.accentOverride || activeTheme.tokens.accentPrimary;
  const activeRadius =
    prefs.cardRadiusPx ?? parseInt(activeTheme.tokens.cardRadius, 10);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSurprise = () => {
    const randomTheme =
      themePresets[Math.floor(Math.random() * themePresets.length)];
    const randomSwatch =
      ACCENT_SWATCHES[Math.floor(Math.random() * ACCENT_SWATCHES.length)];
    const radii = [16, 20, 24, 28, 32];
    const next: ThemePreferences = {
      skinId: randomTheme.id,
      accentOverride: randomSwatch.hex,
      cardRadiusPx: radii[Math.floor(Math.random() * radii.length)],
      paperGrain: Math.random() > 0.35,
      reducedMotion: false,
    };
    onUpdatePrefs(next);
  };

  const handleReset = () => {
    const next: ThemePreferences = {
      skinId: "studio",
      accentOverride: undefined,
      cardRadiusPx: 28,
      paperGrain: true,
      reducedMotion: false,
    };
    onUpdatePrefs(next);
    if (typeof window !== "undefined") {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }
  };

  const tokensCss = `/* Priya K. Lakkad — Studio Tokens (${activeTheme.id}) */
:root[data-skin="${activeTheme.id}"] {
  --bg-primary: ${activeTheme.tokens.bgPrimary};
  --text-primary: ${activeTheme.tokens.textPrimary};
  --accent-primary: ${activeAccent};
  --card-radius: ${activeRadius}px;
}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(tokensCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex justify-end">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close Theme Studio"
        onClick={onClose}
        className="fixed inset-0 bg-black/35 backdrop-blur-xs transition-opacity"
      />

      {/* Right Sidebar Drawer */}
      <aside
        aria-label="Live Theme Studio"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
          borderColor: "var(--border-color)",
        }}
        className="relative z-10 w-full max-w-[380px] h-full overflow-y-auto border-l shadow-2xl p-6 flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest block"
              style={{ color: "var(--accent-primary)" }}
            >
              • Live Theme Studio
            </span>
            <h2 className="font-serif text-xl font-bold mt-0.5">
              Customize the Studio
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
            className="w-9 h-9 rounded-full border flex items-center justify-center hover:opacity-80 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Surprise me + Reset */}
        <div className="grid grid-cols-[1fr_auto] gap-2.5">
          <button
            type="button"
            onClick={handleSurprise}
            style={{ backgroundColor: activeAccent, color: "#FFFFFF" }}
            className="px-4 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Surprise me</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
            className="px-4 py-2.5 rounded-full border text-xs font-semibold flex items-center gap-1.5 hover:opacity-85 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* 1. Theme Skins (3 Light + 1 Dark) */}
        <div className="space-y-2.5">
          <span
            className="text-[10px] font-mono font-bold uppercase tracking-widest block"
            style={{ color: "var(--text-secondary)" }}
          >
            Studio Skin
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            {themePresets.map((preset) => {
              const isSelected = preset.id === prefs.skinId;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() =>
                    onUpdatePrefs({
                      ...prefs,
                      skinId: preset.id,
                      accentOverride: undefined,
                      cardRadiusPx: parseInt(preset.tokens.cardRadius, 10),
                    })
                  }
                  style={{
                    backgroundColor: preset.tokens.bgPrimary,
                    color: preset.tokens.textPrimary,
                    borderColor: isSelected
                      ? activeAccent
                      : preset.tokens.borderColor,
                  }}
                  className={`p-3 rounded-2xl border-2 text-left transition-all ${
                    isSelected ? "shadow-md scale-[1.01]" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif font-bold text-sm">Aa</span>
                    <div className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: preset.dotColor }}
                      />
                      <span
                        className="w-3 h-3 rounded-full border border-black/15"
                        style={{ backgroundColor: preset.tokens.surface }}
                      />
                    </div>
                  </div>
                  <span className="block text-xs font-bold leading-tight">
                    {preset.name}
                  </span>
                  <span className="block text-[10px] opacity-75 mt-0.5 truncate">
                    {preset.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Accent Ink */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest">
            <span style={{ color: "var(--text-secondary)" }}>Accent Ink</span>
            <span>{activeAccent.toUpperCase()}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {ACCENT_SWATCHES.map((sw) => {
              const selected =
                activeAccent.toLowerCase() === sw.hex.toLowerCase();
              return (
                <button
                  key={sw.hex}
                  type="button"
                  onClick={() =>
                    onUpdatePrefs({ ...prefs, accentOverride: sw.hex })
                  }
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: selected ? sw.hex : "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  className="px-2.5 py-2 rounded-xl border text-[11px] font-semibold flex items-center gap-1.5 transition"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: sw.hex }}
                  />
                  <span className="truncate">{sw.name}</span>
                </button>
              );
            })}
          </div>

          <div
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border-color)",
            }}
            className="flex items-center gap-2.5 p-2 rounded-xl border"
          >
            <input
              type="color"
              aria-label="Pick custom accent color"
              value={activeAccent}
              onChange={(e) =>
                onUpdatePrefs({ ...prefs, accentOverride: e.target.value })
              }
              className="w-8 h-7 rounded cursor-pointer border-0 bg-transparent"
            />
            <input
              type="text"
              aria-label="Custom accent hex"
              value={activeAccent}
              onChange={(e) => {
                if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) {
                  onUpdatePrefs({ ...prefs, accentOverride: e.target.value });
                }
              }}
              style={{ color: "var(--text-primary)" }}
              className="flex-1 bg-transparent font-mono text-xs outline-none"
            />
          </div>
        </div>

        {/* 3. Card Roundness */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest">
            <span style={{ color: "var(--text-secondary)" }}>
              Card Roundness
            </span>
            <span>{activeRadius}px</span>
          </div>
          <input
            type="range"
            min={8}
            max={40}
            step={2}
            value={activeRadius}
            onChange={(e) =>
              onUpdatePrefs({
                ...prefs,
                cardRadiusPx: Number(e.target.value),
              })
            }
            style={{ accentColor: activeAccent }}
            className="w-full cursor-pointer"
          />
        </div>

        {/* 4. Paper Grain & Motion */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest block"
              style={{ color: "var(--text-secondary)" }}
            >
              Paper Grain
            </span>
            <div
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-color)",
              }}
              className="grid grid-cols-2 p-1 rounded-xl border text-[11px] font-semibold"
            >
              <button
                type="button"
                onClick={() => onUpdatePrefs({ ...prefs, paperGrain: true })}
                style={
                  prefs.paperGrain
                    ? { backgroundColor: activeAccent, color: "#FFFFFF" }
                    : { color: "var(--text-primary)" }
                }
                className="py-1.5 rounded-lg transition"
              >
                Grain
              </button>
              <button
                type="button"
                onClick={() => onUpdatePrefs({ ...prefs, paperGrain: false })}
                style={
                  !prefs.paperGrain
                    ? { backgroundColor: activeAccent, color: "#FFFFFF" }
                    : { color: "var(--text-primary)" }
                }
                className="py-1.5 rounded-lg transition"
              >
                Clean
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest block"
              style={{ color: "var(--text-secondary)" }}
            >
              Motion
            </span>
            <div
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border-color)",
              }}
              className="grid grid-cols-2 p-1 rounded-xl border text-[11px] font-semibold"
            >
              <button
                type="button"
                onClick={() =>
                  onUpdatePrefs({ ...prefs, reducedMotion: false })
                }
                style={
                  !prefs.reducedMotion
                    ? { backgroundColor: activeAccent, color: "#FFFFFF" }
                    : { color: "var(--text-primary)" }
                }
                className="py-1.5 rounded-lg transition"
              >
                Full
              </button>
              <button
                type="button"
                onClick={() =>
                  onUpdatePrefs({ ...prefs, reducedMotion: true })
                }
                style={
                  prefs.reducedMotion
                    ? { backgroundColor: activeAccent, color: "#FFFFFF" }
                    : { color: "var(--text-primary)" }
                }
                className="py-1.5 rounded-lg transition"
              >
                Reduced
              </button>
            </div>
          </div>
        </div>

        {/* 5. Export Tokens.css */}
        <div className="space-y-2 mt-auto pt-2">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest">
            <span style={{ color: "var(--text-secondary)" }}>
              Export • Tokens.css
            </span>
            <button
              type="button"
              onClick={handleCopy}
              style={{ color: activeAccent }}
              className="inline-flex items-center gap-1 hover:underline"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> Copy
                </>
              )}
            </button>
          </div>
          <pre className="p-3.5 rounded-2xl bg-[#18101A] text-[#FAF3F6] text-[10px] font-mono leading-relaxed overflow-x-auto border border-white/10">
            {tokensCss}
          </pre>
        </div>
      </aside>
    </div>
  );
}

export function useThemeController() {
  const [prefs, setPrefs] = useState<ThemePreferences>({
    skinId: "studio",
    paperGrain: true,
    reducedMotion: false,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as ThemePreferences;
        setPrefs(parsed);
        const preset =
          themePresets.find((t) => t.id === parsed.skinId) || themePresets[0];
        applyTheme(preset, parsed);
        return;
      }
    } catch {
      // ignore storage errors
    }
    applyTheme(themePresets[0]);
  }, []);

  const updatePrefs = (next: ThemePreferences) => {
    setPrefs(next);
    const preset =
      themePresets.find((t) => t.id === next.skinId) || themePresets[0];
    applyTheme(preset, next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  };

  const isDark =
    (themePresets.find((t) => t.id === prefs.skinId) || themePresets[0]).isDark;

  const toggleDarkLight = () => {
    updatePrefs({
      ...prefs,
      skinId: isDark ? "studio" : "midnight",
      accentOverride: undefined,
    });
  };

  return { prefs, updatePrefs, isDark, toggleDarkLight };
}
