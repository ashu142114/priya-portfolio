"use client";

import React from "react";
import { getScenario } from "@/data/scenarios";
import {
  KitButton,
  KitChip,
  KitBadge,
  KitAvatar,
  KitToggle,
  KitCard,
  KitListItem,
  KitBottomTabBar,
  KitTopAppBar,
  KitRingChart,
  KitCalendar,
  KitLineChart,
  KitSpotIllustration,
  KitProgress,
  KitTable,
  KitKpiCard,
} from "@/ui-kit";
import { Heart, Calendar, Sparkles, ShieldCheck, Bell, Lock, BookOpen } from "lucide-react";

const S = () => getScenario("womens-health-app");

const nav = (active: number, wireframe = false) => {
  const p = S().palette;
  return (
    <KitBottomTabBar
      activeIndex={active}
      primary={p.primary}
      border={p.border}
      wireframe={wireframe}
      items={[
        { label: "Cycle", icon: <Heart className="w-3 h-3" /> },
        { label: "Calendar", icon: <Calendar className="w-3 h-3" /> },
        { label: "Insights", icon: <Sparkles className="w-3 h-3" /> },
        { label: "Vault", icon: <ShieldCheck className="w-3 h-3" /> },
      ]}
    />
  );
};

export function WhOnboardingScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-4 text-center" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: p.primary }}>{s.brandName}</span>
      <div className="space-y-3 my-auto flex flex-col items-center">
        <KitSpotIllustration styleType="wellness" primary={p.primary} primarySoft={p.primarySoft} wireframe={wireframe} />
        <h4 className="font-serif font-bold text-sm">Private Cycle &amp; PCOD Wellness</h4>
        <p className="text-[10px]" style={{ color: p.muted }}>Track your monthly rhythm, log symptoms quickly, and keep confidential health records locked.</p>
        <div className="w-28"><KitProgress value={50} primary={p.primary} /></div>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Begin Privately →</KitButton>
    </div>
  );
}

export function WhCycleHomeScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Good morning, Nidhi" subtitle={s.brandName} wireframe={wireframe} right={<KitAvatar name="Nidhi Shah" size="sm" primary={p.primary} primarySoft={p.primarySoft} wireframe={wireframe} />} />
        <KitCard border={p.border} wireframe={wireframe} className="flex items-center gap-3">
          <KitRingChart percent={55} title="Day 14" primary={p.primary} primarySoft={p.primarySoft} />
          <div className="space-y-1">
            <KitBadge label="Ovulation Window" tone="error" wireframe={wireframe} />
            <p className="text-[9px]" style={{ color: p.muted }}>29-day regular pattern • Next period in 15 days</p>
          </div>
        </KitCard>
        <div className="flex flex-wrap gap-1.5">
          {["Calm Mood", "Mild Fatigue", "1.8L Water"].map((t, i) => (
            <KitChip key={t} label={t} active={i === 0} primary={p.primary} primarySoft={p.primarySoft} border={p.border} wireframe={wireframe} />
          ))}
        </div>
      </div>
      {nav(0, wireframe)}
    </div>
  );
}

export function WhCalendarPhaseScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Cycle Calendar" subtitle="November 2026" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe}>
          <KitCalendar activeDay={14} primary={p.primary} primarySoft={p.primarySoft} />
        </KitCard>
        <div className="grid grid-cols-3 gap-1.5 text-[8px] text-center">
          <span className="p-1.5 rounded-lg bg-rose-100 text-rose-800 font-bold">Period</span>
          <span className="p-1.5 rounded-lg bg-purple-100 text-purple-800 font-bold">Fertile</span>
          <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800 font-bold">Luteal</span>
        </div>
      </div>
      {nav(1, wireframe)}
    </div>
  );
}

export function WhSymptomLoggerScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Log Today" subtitle="15-Second Check-in" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe} className="space-y-2">
          <span className="text-[9px] font-bold block">Physical Symptoms</span>
          <div className="flex flex-wrap gap-1.5">
            {["None", "Cramps", "Bloating", "Headache"].map((s, i) => (
              <KitChip key={s} label={s} active={i === 1} primary={p.primary} primarySoft={p.primarySoft} border={p.border} wireframe={wireframe} />
            ))}
          </div>
        </KitCard>
        <KitCard border={p.border} wireframe={wireframe} className="space-y-2">
          <span className="text-[9px] font-bold block">Energy &amp; Mood</span>
          <div className="flex flex-wrap gap-1.5">
            {["Calm", "Tired", "Focused", "Sensitive"].map((m, i) => (
              <KitChip key={m} label={m} active={i === 0} primary={p.accent} primarySoft="#F3ECF9" border="#DFD1EE" wireframe={wireframe} />
            ))}
          </div>
        </KitCard>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Save Entry</KitButton>
    </div>
  );
}

export function WhInsightsScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Cycle Insights" subtitle="3-Month Rhythm" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe}>
          <span className="text-[9px] font-bold block mb-1">Cycle Length Stability</span>
          <KitLineChart primary={p.primary} />
        </KitCard>
        <KitListItem title="Average Cycle: 29 Days" subtitle="Consistent across recent logs" border={p.border} wireframe={wireframe} />
      </div>
      {nav(2, wireframe)}
    </div>
  );
}

export function WhHealthRecordsScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Confidential Vault" subtitle="PIN Protected" wireframe={wireframe} right={<Lock className="w-3.5 h-3.5" style={{ color: p.primary }} />} />
        <KitListItem title="Thyroid &amp; Hormone Panel" subtitle="18 Nov 2026 • PDF" border={p.border} wireframe={wireframe} />
        <KitListItem title="Gynecology Consult Notes" subtitle="Dr. Kavita Rao • Surat" border={p.border} wireframe={wireframe} />
        <KitListItem title="Ultrasound Summary" subtitle="Stored locally" border={p.border} wireframe={wireframe} />
      </div>
      {nav(3, wireframe)}
    </div>
  );
}

export function WhPcodArticleScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitBadge label="PCOD / PCOS Education" tone="info" wireframe={wireframe} />
        <h4 className="font-serif font-bold text-sm leading-snug">Understanding PCOD Nutrition &amp; Daily Rhythm</h4>
        <p className="text-[10px] leading-relaxed" style={{ color: p.muted }}>
          Simple, evidence-aligned guidance on balanced Indian meals, gentle movement, and sleep habits.
        </p>
        <KitCard border={p.border} wireframe={wireframe} className="space-y-1">
          <div className="text-[10px] font-bold flex items-center gap-1"><BookOpen className="w-3 h-3" /> Key Takeaway</div>
          <p className="text-[9px]" style={{ color: p.muted }}>Pair complex carbs with protein at breakfast to keep morning energy steady.</p>
        </KitCard>
      </div>
      {nav(2, wireframe)}
    </div>
  );
}

export function WhRemindersScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Gentle Reminders" subtitle="Discreet Notifications" wireframe={wireframe} right={<Bell className="w-3.5 h-3.5" />} />
        <KitCard border={p.border} wireframe={wireframe} className="space-y-2.5">
          <KitToggle label="Period Start Reminder" on primary={p.primary} wireframe={wireframe} />
          <KitToggle label="Hydration Nudges (2.5L)" on primary={p.primary} wireframe={wireframe} />
          <KitToggle label="Discreet Lock-Screen Text" on primary={p.primary} wireframe={wireframe} />
        </KitCard>
      </div>
      {nav(3, wireframe)}
    </div>
  );
}

export function WhSettingsScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Privacy &amp; Profile" subtitle="Anjali Patel" wireframe={wireframe} />
        <KitListItem title="App PIN &amp; Biometric Lock" subtitle="Enabled" border={p.border} wireframe={wireframe} />
        <KitListItem title="Export Health Summary PDF" subtitle="Share with doctor" border={p.border} wireframe={wireframe} />
        <KitListItem title="Local Data Backup" subtitle="Encrypted" border={p.border} wireframe={wireframe} />
      </div>
      {nav(3, wireframe)}
    </div>
  );
}

export function WhWebDashboard() {
  const s = S();
  const p = s.palette;
  return (
    <div className="p-5 space-y-4 text-xs" style={{ backgroundColor: p.bg, color: p.ink }}>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName} Web • Concept</span>
          <h4 className="font-serif font-bold text-sm">Cycle Wellness &amp; PCOD Education Hub</h4>
        </div>
        <KitButton size="sm" primary={p.primary}>Download App</KitButton>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <KitKpiCard label="Cycle Status" value="Day 14" sub="Ovulation Window" primary={p.primary} border={p.border} />
        <KitKpiCard label="Records" value="3 Reports" sub="PIN Encrypted" primary={p.primary} border={p.border} />
        <KitKpiCard label="PCOD Guides" value="12 Articles" sub="Plain Language" primary={p.primary} border={p.border} />
      </div>
      <KitTable headers={["Date", "Cycle Phase", "Mood", "Hydration"]} rows={[["26 Nov", "Ovulation", "Calm", "1.8 L"], ["25 Nov", "Follicular", "Focused", "2.2 L"]]} border={p.border} />
    </div>
  );
}
