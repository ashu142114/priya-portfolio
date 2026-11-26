"use client";

import React, { useState } from "react";
import { getScenario } from "@/data/scenarios";
import { KitAvatar, KitBadge, KitCard, KitChip } from "@/ui-kit";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Monitor,
  MousePointerClick,
  Smartphone,
  Tablet,
} from "lucide-react";

interface ProcessArtifactsProps {
  slug: string;
  mode?: "full" | "research" | "flow" | "wireframes" | "system" | "prototype";
}

const SITEMAPS: Record<string, { root: string; branches: { title: string; nodes: string[] }[] }> = {
  "healthcare-mobile-app": {
    root: "MediCare Plus App",
    branches: [
      { title: "Home", nodes: ["Vitals Summary", "Quick Consult", "Reminders"] },
      { title: "Book Care", nodes: ["Doctor Search", "Slot Picker", "UPI Checkout"] },
      { title: "Telemedicine", nodes: ["Video Room", "Live Notes", "Rx Download"] },
      { title: "Records", nodes: ["Lab Reports", "Insurance Card", "Family Profiles"] },
    ],
  },
  "womens-health-app": {
    root: "Aura Cycle & Wellness",
    branches: [
      { title: "Cycle Ring", nodes: ["Phase Status", "Fertile Window", "Daily Tip"] },
      { title: "Calendar", nodes: ["Month Grid", "History Log", "Predictions"] },
      { title: "Logger", nodes: ["Flow & Mood", "Sleep & Cravings", "Notes"] },
      { title: "Library", nodes: ["PCOD Guides", "Lab Vault", "Reminders"] },
    ],
  },
  "ai-healthcare-module": {
    root: "CarePulse AI Triage",
    branches: [
      { title: "Chat Triage", nodes: ["Symptom Input", "Quick Replies", "Voice Mode"] },
      { title: "Assessment", nodes: ["Urgency Level", "Next Steps", "Red Flags"] },
      { title: "Handoff", nodes: ["Doctor Summary", "Slot Transfer", "Emergency Alert"] },
      { title: "Admin Desk", nodes: ["Queue Table", "Protocol Rules", "Audit Log"] },
    ],
  },
  "diet-nutrition-module": {
    root: "NutriTrack India",
    branches: [
      { title: "Daily Rings", nodes: ["Calorie Target", "Protein/Carbs/Fat", "Water"] },
      { title: "Meal Log", nodes: ["Indian Portions", "Quick Add", "Barcode"] },
      { title: "Insights", nodes: ["Weekly Trend", "Macro Split", "Streak"] },
      { title: "Recipes", nodes: ["Tiffin Plans", "Prep Time", "Grocery List"] },
    ],
  },
  "invitation-app": {
    root: "Utsav Studio",
    branches: [
      { title: "Templates", nodes: ["Wedding", "Birthday", "Festive Filter"] },
      { title: "Canvas Editor", nodes: ["Typography", "Foil Palette", "Bilingual Text"] },
      { title: "Guests", nodes: ["Family Groups", "RSVP Status", "Meal Count"] },
      { title: "Share", nodes: ["WhatsApp Card", "QR Print", "Web RSVP"] },
    ],
  },
  "service-based-booking-platform": {
    root: "BookEase Local",
    branches: [
      { title: "Discover", nodes: ["Category Grid", "Surat Filters", "Pricing"] },
      { title: "Booking", nodes: ["Provider Bio", "Time Slots", "UPI Deposit"] },
      { title: "Provider Web", nodes: ["Today Queue", "Calendar", "Payouts"] },
      { title: "Comms", nodes: ["HTML Email", "SMS Reminder", "Reschedule"] },
    ],
  },
};

const JOURNEY_STAGES = [
  { stage: "1. Trigger", action: "Needs quick clarity without digging through menus", point: "Overwhelmed by dense legacy layout" },
  { stage: "2. Entry", action: "Opens primary screen and scans key status", point: "Needs immediate hierarchy & plain labels" },
  { stage: "3. Core Task", action: "Completes selection, booking, or logging", point: "Guided step-by-step with clear feedback" },
  { stage: "4. Confirmation", action: "Receives instant summary & next action", point: "Calm confidence & zero ambiguity" },
];

export function ProcessArtifacts({ slug, mode = "full" }: ProcessArtifactsProps) {
  const scenario = getScenario(slug);
  const sitemap = SITEMAPS[slug] || SITEMAPS["healthcare-mobile-app"];
  const [activeHotspot, setActiveHotspot] = useState<number>(1);
  const [showWireframe, setShowWireframe] = useState<boolean>(false);

  const showSection = (target: ProcessArtifactsProps["mode"]) => mode === "full" || mode === target;

  return (
    <div className="space-y-12">
      {/* Personas + User Journey Map */}
      {showSection("research") && (
        <div className="space-y-10">
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
                  Scenario Personas • {scenario.brandName}
                </p>
                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                  Target User Profiles
                </h3>
              </div>
              <KitBadge tone="neutral" label="Concept Persona Set" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {scenario.personas.map((p) => (
                <KitCard key={p.name} className="p-5">
                  <div className="flex items-center gap-3">
                    <KitAvatar name={p.name} primary={scenario.palette.primary} primarySoft={scenario.palette.primarySoft} size="md" />
                    <div>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{p.name}</p>
                      <p className="text-xs text-[var(--text-secondary)]">Age {p.age} • {p.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-xs leading-relaxed">
                    <div className="rounded-xl bg-black/[0.03] p-2.5">
                      <span className="font-bold text-[var(--text-primary)]">Goal: </span>
                      <span className="text-[var(--text-secondary)]">{p.goal}</span>
                    </div>
                    {p.pain && (
                      <div className="rounded-xl bg-rose-50/70 p-2.5 text-rose-900">
                        <span className="font-bold">Friction: </span>
                        <span>{p.pain}</span>
                      </div>
                    )}
                  </div>
                </KitCard>
              ))}
            </div>
          </div>

          {/* User Journey Map */}
          <KitCard className="p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
                  User Journey Map
                </p>
                <h4 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                  End-to-End Emotional & Task Arc
                </h4>
              </div>
              <KitBadge tone="info" label={scenario.tone} />
            </div>

            <div className="mb-4 overflow-hidden rounded-xl border border-black/5 bg-slate-50 p-3">
              <svg viewBox="0 0 600 84" className="h-20 w-full" role="img" aria-label="User journey emotion curve">
                <line x1="20" y1="70" x2="580" y2="70" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                <path
                  d="M 40 58 C 120 55, 160 36, 220 32 C 290 28, 350 20, 410 16 C 480 12, 520 12, 560 10"
                  fill="none"
                  stroke={scenario.palette.primary}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {[
                  { x: 40, y: 58, l: "Trigger" },
                  { x: 220, y: 32, l: "Entry" },
                  { x: 410, y: 16, l: "Core Task" },
                  { x: 560, y: 10, l: "Done" },
                ].map((pt) => (
                  <g key={pt.l}>
                    <circle cx={pt.x} cy={pt.y} r="5" fill="#fff" stroke={scenario.palette.primary} strokeWidth="2.5" />
                    <text x={pt.x} y="80" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="600">
                      {pt.l}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {JOURNEY_STAGES.map((st) => (
                <div key={st.stage} className="rounded-xl border border-black/5 bg-white p-3.5 text-xs">
                  <p className="font-bold text-[var(--text-primary)]">{st.stage}</p>
                  <p className="mt-1.5 text-[var(--text-secondary)]">{st.action}</p>
                  <p className="mt-2 rounded-lg bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600">
                    {st.point}
                  </p>
                </div>
              ))}
            </div>
          </KitCard>
        </div>
      )}

      {/* IA Sitemap Tree + User Flow Diagram */}
      {showSection("flow") && (
        <div className="space-y-8">
          <KitCard className="p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
                  Information Architecture
                </p>
                <h4 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                  {sitemap.root} — Sitemap Tree
                </h4>
              </div>
              <KitBadge tone="neutral" label="4 Primary Modules" />
            </div>

            <div className="flex flex-col items-center">
              <div
                className="rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: scenario.palette.primary }}
              >
                {sitemap.root}
              </div>
              <div className="h-5 w-px bg-slate-300" />
              <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {sitemap.branches.map((br) => (
                  <div key={br.title} className="rounded-xl border border-black/10 bg-slate-50/70 p-3.5">
                    <div className="mb-2.5 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{br.title}</span>
                      <Layers className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                    <div className="space-y-1.5">
                      {br.nodes.map((node) => (
                        <div
                          key={node}
                          className="rounded-lg border border-black/5 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-700"
                        >
                          {node}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </KitCard>

          {/* User Flow Diagram with Thumbnails */}
          <KitCard className="p-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
              Core Task Flow
            </p>
            <h4 className="mb-5 font-serif text-xl font-bold text-[var(--text-primary)]">
              Screen-to-Screen Decision Flow
            </h4>
            <div className="grid gap-3 md:grid-cols-4">
              {sitemap.branches.map((br, idx) => (
                <div key={br.title} className="relative flex items-center gap-2">
                  <div className="w-full rounded-xl border border-black/10 bg-white p-3 shadow-xs">
                    <div className="mb-2 flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span>STEP 0{idx + 1}</span>
                      <span>{br.title}</span>
                    </div>
                    <div className="space-y-1.5 rounded-lg bg-slate-50 p-2">
                      <div className="h-2.5 w-3/4 rounded" style={{ backgroundColor: scenario.palette.primary, opacity: 0.85 }} />
                      <div className="h-2 w-full rounded bg-slate-200" />
                      <div className="h-2 w-2/3 rounded bg-slate-200" />
                    </div>
                    <p className="mt-2 text-[11px] font-semibold text-slate-800">{br.nodes[0]}</p>
                  </div>
                  {idx < 3 && (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-slate-400 md:block" />
                  )}
                </div>
              ))}
            </div>
          </KitCard>
        </div>
      )}

      {/* Wireframes / Responsive Breakpoints / Spec Redlines */}
      {showSection("wireframes") && (
        <div className="space-y-8">
          <KitCard className="p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
                  Responsive Breakpoints & Redlines
                </p>
                <h4 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                  390px Mobile / 768px Tablet / 1280px Desktop Grid
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowWireframe((v) => !v)}
                className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-xs transition hover:bg-slate-50"
              >
                {showWireframe ? "Showing Wireframe Skeleton" : "Toggle Wireframe Mode"}
              </button>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {[
                { label: "Mobile • 390px", icon: Smartphone, cols: "4-col • 16px margin", width: "max-w-[200px]" },
                { label: "Tablet • 768px", icon: Tablet, cols: "8-col • 24px margin", width: "max-w-[260px]" },
                { label: "Desktop • 1280px", icon: Monitor, cols: "12-col • 32px gutter", width: "w-full" },
              ].map((bp) => {
                const Icon = bp.icon;
                return (
                  <div key={bp.label} className="rounded-2xl border border-black/10 bg-slate-50 p-4">
                    <div className="mb-3 flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5" />
                        {bp.label}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500">{bp.cols}</span>
                    </div>
                    <div className={`mx-auto rounded-xl border border-dashed border-rose-300 bg-white p-3 ${bp.width}`}>
                      <div className="mb-2 flex items-center justify-between border-b border-dashed border-rose-200 pb-1.5 text-[9px] font-mono text-rose-500">
                        <span>pad: 16px</span>
                        <span>8px grid</span>
                      </div>
                      <div
                        className="mb-2 h-8 rounded-lg p-2 text-[10px] font-bold text-white"
                        style={{
                          backgroundColor: showWireframe ? "#cbd5e1" : scenario.palette.primary,
                          color: showWireframe ? "#334155" : "#fff",
                        }}
                      >
                        {scenario.brandName}
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="h-10 rounded-md border border-slate-200 bg-slate-50 p-1.5 text-[9px] text-slate-500">
                          Card A (gap 8px)
                        </div>
                        <div className="h-10 rounded-md border border-slate-200 bg-slate-50 p-1.5 text-[9px] text-slate-500">
                          Card B (r: {scenario.radius || "16px"})
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </KitCard>
        </div>
      )}

      {/* Token Sheet + Component Inventory */}
      {showSection("system") && (
        <KitCard className="p-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
            Token Sheet & Component Inventory
          </p>
          <h4 className="mb-4 font-serif text-xl font-bold text-[var(--text-primary)]">
            {scenario.brandName} Visual Tokens
          </h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Primary Accent", hex: scenario.palette.primary },
              { name: "Secondary Accent", hex: scenario.palette.accent },
              { name: "Surface Tint", hex: scenario.palette.surface },
              { name: "Ink / Text", hex: scenario.palette.ink },
            ].map((sw) => (
              <div key={sw.name} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3">
                <div className="h-10 w-10 shrink-0 rounded-lg border border-black/10" style={{ backgroundColor: sw.hex }} />
                <div>
                  <p className="text-xs font-bold text-slate-900">{sw.name}</p>
                  <p className="font-mono text-[11px] text-slate-500">{sw.hex}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <KitChip label={`Typography: ${scenario.typography.displayFont} / ${scenario.typography.bodyFont}`} active />
            <KitChip label={`Radius: ${scenario.radius || "16px"}`} />
            <KitChip label={`Icons: ${scenario.iconStyle || "Rounded 1.5px stroke"}`} />
            <KitChip label="UI Kit: AppBar, Cards, Charts, Tables" />
          </div>
        </KitCard>
      )}

      {/* Prototype Hotspot Overlay */}
      {showSection("prototype") && (
        <KitCard className="p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
                Interactive Prototype Spec
              </p>
              <h4 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                Click Hotspots to Inspect Transitions
              </h4>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <MousePointerClick className="h-4 w-4 text-[var(--accent-primary)]" />
              Hotspot {activeHotspot} selected
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
            <div className="relative rounded-2xl border border-black/10 bg-slate-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">{scenario.brandName}</span>
                <button
                  type="button"
                  onClick={() => setActiveHotspot(1)}
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shadow transition ${
                    activeHotspot === 1 ? "bg-rose-600 text-white scale-110" : "bg-white text-rose-600 border border-rose-300"
                  }`}
                >
                  1
                </button>
              </div>
              <div className="relative mb-3 rounded-xl border border-black/5 bg-white p-4">
                <p className="text-xs font-semibold text-slate-800">{sitemap.branches[0]?.title}</p>
                <p className="text-[11px] text-slate-500">{sitemap.branches[0]?.nodes.join(" • ")}</p>
                <button
                  type="button"
                  onClick={() => setActiveHotspot(2)}
                  className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shadow transition ${
                    activeHotspot === 2 ? "bg-rose-600 text-white scale-110" : "bg-white text-rose-600 border border-rose-300"
                  }`}
                >
                  2
                </button>
              </div>
              <div className="relative rounded-xl p-3 text-center text-xs font-bold text-white" style={{ backgroundColor: scenario.palette.primary }}>
                Primary Action CTA
                <button
                  type="button"
                  onClick={() => setActiveHotspot(3)}
                  className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shadow transition ${
                    activeHotspot === 3 ? "bg-slate-900 text-white scale-110" : "bg-white text-rose-600 border border-rose-300"
                  }`}
                >
                  3
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-3">
              {[
                { id: 1, title: "1. Top Utility Action", desc: "Opens quick search / notifications drawer with 220ms ease-out slide." },
                { id: 2, title: "2. Primary Content Card", desc: "Navigates to detail view preserving scroll context and shared header." },
                { id: 3, title: "3. Sticky Bottom CTA", desc: "Advances to confirmation sheet with instant validation feedback." },
              ].map((hs) => (
                <button
                  key={hs.id}
                  type="button"
                  onClick={() => setActiveHotspot(hs.id)}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition ${
                    activeHotspot === hs.id
                      ? "border-[var(--accent-primary)] bg-rose-50/50"
                      : "border-black/10 bg-white hover:bg-slate-50"
                  }`}
                >
                  <CheckCircle2
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      activeHotspot === hs.id ? "text-[var(--accent-primary)]" : "text-slate-300"
                    }`}
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{hs.title}</p>
                    <p className="mt-0.5 text-xs text-slate-600">{hs.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </KitCard>
      )}
    </div>
  );
}
