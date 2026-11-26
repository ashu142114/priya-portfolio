"use client";

import React from "react";
import { getScenario } from "@/data/scenarios";
import {
  Search,
  Bell,
  Calendar,
  Clock,
  Video,
  FileText,
  Plus,
  Heart,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Home,
  User,
  LayoutDashboard,
  Users,
  Settings,
  Filter,
  Droplet,
  Utensils,
  Share2,
  MapPin,
  Star,
  ArrowUpRight,
  Mic,
  Send,
  ShieldCheck,
  Inbox,
} from "lucide-react";

/* =========================================================================
   1. SCENARIO-THEMED MOBILE HERO SCREENS (Rich, Full-Density UI)
   ========================================================================= */
export function ScenarioMobileHero({ slug }: { slug: string }) {
  const s = getScenario(slug);
  const p = s.palette;

  if (slug === "womens-health-app") {
    return (
      <div className="flex flex-col justify-between h-full p-3.5 text-[11px]" style={{ color: p.ink, backgroundColor: p.bg }}>
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: p.primary }}>
                {s.brandName} • Concept
              </span>
              <h4 className="font-serif font-bold text-sm leading-tight">Good morning, Nidhi</h4>
            </div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] text-white" style={{ backgroundColor: p.primary }}>
              NS
            </div>
          </div>

          {/* Cycle Dial Ring */}
          <div className="p-3.5 rounded-2xl bg-white border flex items-center gap-3 shadow-xs" style={{ borderColor: p.border }}>
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="26" fill="none" stroke={p.primarySoft} strokeWidth="6" />
                <circle cx="32" cy="32" r="26" fill="none" stroke={p.primary} strokeWidth="6" strokeDasharray="163" strokeDashoffset="65" strokeLinecap="round" />
              </svg>
              <div className="absolute text-center">
                <span className="font-serif font-bold text-xs block leading-none">Day 14</span>
                <span className="text-[8px]" style={{ color: p.muted }}>Ovulation</span>
              </div>
            </div>
            <div className="space-y-1 flex-1">
              <span className="inline-block px-2 py-0.5 rounded-full text-[8px] font-bold" style={{ backgroundColor: p.primarySoft, color: p.primary }}>
                29-Day Regular Pattern
              </span>
              <p className="text-[10px] leading-snug" style={{ color: p.muted }}>
                Peak fertile window. Stay hydrated and log energy levels.
              </p>
            </div>
          </div>

          {/* Quick Symptom Chips */}
          <div className="bg-white rounded-2xl p-3 border space-y-2" style={{ borderColor: p.border }}>
            <div className="flex justify-between items-center">
              <span className="font-bold text-[10px]">Today&apos;s Check-In</span>
              <span className="text-[9px]" style={{ color: p.primary }}>+ Log</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Calm Mood", "Mild Fatigue", "1.8L Water", "Light Walk"].map((tag, i) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full text-[9px] font-medium"
                  style={{
                    backgroundColor: i === 0 ? p.primary : p.primarySoft,
                    color: i === 0 ? "#FFFFFF" : p.ink,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PCOD Guide Card */}
          <div className="p-2.5 rounded-2xl border flex items-center justify-between" style={{ backgroundColor: "#F3ECF9", borderColor: "#DFD1EE" }}>
            <div>
              <span className="text-[8px] font-bold uppercase text-purple-800 block">PCOD Care Guide</span>
              <span className="text-[10px] font-semibold">Balanced Breakfast Ideas</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-700" />
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="pt-2 border-t flex justify-around items-center text-[9px]" style={{ borderColor: p.border, color: p.muted }}>
          <span className="font-bold flex flex-col items-center gap-0.5" style={{ color: p.primary }}><Heart className="w-3 h-3" />Cycle</span>
          <span className="flex flex-col items-center gap-0.5"><Calendar className="w-3 h-3" />Calendar</span>
          <span className="flex flex-col items-center gap-0.5"><Sparkles className="w-3 h-3" />Insights</span>
          <span className="flex flex-col items-center gap-0.5"><ShieldCheck className="w-3 h-3" />Vault</span>
        </div>
      </div>
    );
  }

  if (slug === "ai-healthcare-module") {
    return (
      <div className="flex flex-col justify-between h-full p-3.5 text-[11px]" style={{ color: p.ink, backgroundColor: p.bg }}>
        <div className="space-y-2.5">
          {/* Assistant Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: p.border }}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: p.primary }}>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-bold text-xs block leading-tight">{s.brandName}</span>
                <span className="text-[8px] text-emerald-700 font-semibold">● Guided Triage (Concept)</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[8px] font-semibold bg-amber-100 text-amber-800">Not a diagnosis</span>
          </div>

          {/* Chat Thread */}
          <div className="space-y-2">
            <div className="ml-6 p-2.5 rounded-2xl rounded-tr-sm text-white text-[10px]" style={{ backgroundColor: p.primary }}>
              Mild sore throat and low fever since yesterday evening.
            </div>
            <div className="mr-4 p-2.5 rounded-2xl rounded-tl-sm bg-white border text-[10px] space-y-1.5 shadow-xs" style={{ borderColor: p.border }}>
              <p className="leading-snug">
                Thank you, Kabir. Let&apos;s narrow this down safely. Are you having difficulty swallowing?
              </p>
              <div className="flex gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold border" style={{ borderColor: p.primary, color: p.primary }}>No, mild only</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold border" style={{ borderColor: p.border }}>Yes, painful</span>
              </div>
            </div>

            {/* Triage Result Card */}
            <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-emerald-900">Suggested Next Step</span>
                <span className="text-[9px] font-bold text-emerald-800">₹500</span>
              </div>
              <div className="text-[10px] font-semibold text-slate-900">General Physician Video Consult</div>
              <div className="text-[9px] text-emerald-800">Next slot: Today, 10:30 AM</div>
            </div>
          </div>
        </div>

        {/* Input Composer */}
        <div className="p-2 rounded-full bg-white border flex items-center justify-between gap-2" style={{ borderColor: p.border }}>
          <span className="text-[9px] pl-2" style={{ color: p.muted }}>Describe symptoms simply...</span>
          <div className="flex items-center gap-1">
            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center"><Mic className="w-3 h-3" /></span>
            <span className="w-6 h-6 rounded-full text-white flex items-center justify-center" style={{ backgroundColor: p.primary }}><Send className="w-3 h-3" /></span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "diet-nutrition-module") {
    const meals = s.sampleData.meals || [];
    return (
      <div className="flex flex-col justify-between h-full p-3.5 text-[11px]" style={{ color: p.ink, backgroundColor: p.bg }}>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName}</span>
              <h4 className="font-serif font-bold text-sm">Today&apos;s Nutrition</h4>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold" style={{ backgroundColor: p.primarySoft, color: p.primary }}>1,320 / 1,850 kcal</span>
          </div>

          {/* Macro Summary Card */}
          <div className="p-3 rounded-2xl bg-white border grid grid-cols-3 gap-2 text-center shadow-xs" style={{ borderColor: p.border }}>
            <div>
              <span className="text-[9px]" style={{ color: p.muted }}>Protein</span>
              <strong className="block text-xs" style={{ color: p.primary }}>68 / 85g</strong>
              <div className="h-1 bg-slate-100 rounded-full mt-1"><div className="h-full w-4/5 rounded-full" style={{ backgroundColor: p.primary }} /></div>
            </div>
            <div>
              <span className="text-[9px]" style={{ color: p.muted }}>Carbs</span>
              <strong className="block text-xs">142 / 210g</strong>
              <div className="h-1 bg-slate-100 rounded-full mt-1"><div className="h-full w-2/3 rounded-full bg-amber-500" /></div>
            </div>
            <div>
              <span className="text-[9px]" style={{ color: p.muted }}>Water</span>
              <strong className="block text-xs text-sky-700">2.2 / 3.0L</strong>
              <div className="h-1 bg-slate-100 rounded-full mt-1"><div className="h-full w-3/4 rounded-full bg-sky-500" /></div>
            </div>
          </div>

          {/* Meal Log List */}
          <div className="space-y-1.5">
            {meals.map((m) => (
              <div key={m.time} className="p-2.5 rounded-xl bg-white border flex items-center justify-between" style={{ borderColor: p.border }}>
                <div className="min-w-0 pr-2">
                  <div className="text-[10px] font-bold truncate">{m.item}</div>
                  <div className="text-[8px]" style={{ color: p.muted }}>{m.time} • {m.macros}</div>
                </div>
                <span className="text-[9px] font-bold shrink-0" style={{ color: p.primary }}>{m.kcal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t flex justify-between items-center text-[9px]" style={{ borderColor: p.border }}>
          <span className="font-semibold flex items-center gap-1"><Droplet className="w-3 h-3 text-sky-600" /> +250ml Water</span>
          <span className="px-2.5 py-1 rounded-full text-white font-bold flex items-center gap-1" style={{ backgroundColor: p.primary }}><Plus className="w-3 h-3" /> Log Meal</span>
        </div>
      </div>
    );
  }

  if (slug === "invitation-app") {
    return (
      <div className="flex flex-col justify-between h-full p-3.5 text-[11px]" style={{ color: p.ink, backgroundColor: p.bg }}>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName}</span>
              <h4 className="font-serif font-bold text-sm">Wedding Suite Editor</h4>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold" style={{ backgroundColor: p.primarySoft, color: p.primary }}>142 RSVPs</span>
          </div>

          {/* Live Invite Canvas */}
          <div className="p-4 rounded-2xl bg-white border-2 text-center space-y-1.5 shadow-sm" style={{ borderColor: p.primary }}>
            <span className="text-[8px] uppercase tracking-widest font-bold" style={{ color: p.accent }}>Save The Date</span>
            <h5 className="font-serif italic font-bold text-base">Ishita &amp; Karan</h5>
            <p className="text-[9px]" style={{ color: p.muted }}>12–13 Dec 2026 • Courtyard Pavilion, Surat</p>
            <div className="pt-1 flex justify-center gap-1.5">
              <span className="px-2.5 py-1 rounded-full text-[8px] font-bold text-white" style={{ backgroundColor: p.primary }}>Accept RSVP</span>
              <span className="px-2.5 py-1 rounded-full text-[8px] font-bold border" style={{ borderColor: p.border }}>Venue Map</span>
            </div>
          </div>

          {/* Template Switcher Strip */}
          <div className="grid grid-cols-3 gap-1.5 text-center">
            {["Royal Arch", "Minimal Foil", "Botanical"].map((tpl, i) => (
              <div key={tpl} className="p-2 rounded-xl border text-[9px] font-semibold" style={{ backgroundColor: i === 0 ? p.primarySoft : "#FFF", borderColor: i === 0 ? p.primary : p.border }}>
                {tpl}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t flex justify-between items-center text-[9px]" style={{ borderColor: p.border }}>
          <span className="flex items-center gap-1" style={{ color: p.muted }}><MapPin className="w-3 h-3" /> Map Pin Ready</span>
          <span className="px-3 py-1 rounded-full text-white font-bold flex items-center gap-1" style={{ backgroundColor: p.primary }}><Share2 className="w-3 h-3" /> Share WhatsApp</span>
        </div>
      </div>
    );
  }

  if (slug === "service-based-booking-platform") {
    const services = s.sampleData.services || [];
    return (
      <div className="flex flex-col justify-between h-full p-3.5 text-[11px]" style={{ color: p.ink, backgroundColor: p.bg }}>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName}</span>
              <h4 className="font-bold text-sm">Book Trusted Services</h4>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-white border" style={{ borderColor: p.border }}>Surat</span>
          </div>

          {/* Search Bar */}
          <div className="px-2.5 py-1.5 rounded-xl bg-white border flex items-center gap-1.5 text-[9px]" style={{ borderColor: p.border, color: p.muted }}>
            <Search className="w-3 h-3" />
            <span>Search physio, salon, spa...</span>
          </div>

          {/* Service Cards */}
          <div className="space-y-1.5">
            {services.map((srv) => (
              <div key={srv.title} className="p-2.5 rounded-xl bg-white border flex items-center justify-between shadow-2xs" style={{ borderColor: p.border }}>
                <div>
                  <div className="text-[10px] font-bold">{srv.title}</div>
                  <div className="text-[8px]" style={{ color: p.muted }}>{srv.provider} • {srv.duration}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold block" style={{ color: p.primary }}>{srv.price}</span>
                  <span className="text-[8px] font-semibold text-amber-600">★ 4.9</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t flex justify-around items-center text-[9px]" style={{ borderColor: p.border, color: p.muted }}>
          <span className="font-bold flex flex-col items-center gap-0.5" style={{ color: p.primary }}><Home className="w-3 h-3" />Explore</span>
          <span className="flex flex-col items-center gap-0.5"><Calendar className="w-3 h-3" />Bookings</span>
          <span className="flex flex-col items-center gap-0.5"><User className="w-3 h-3" />Account</span>
        </div>
      </div>
    );
  }

  // Default: Healthcare Mobile App (MediCare Plus - Teal)
  const doctors = s.sampleData.doctors || [];
  return (
    <div className="flex flex-col justify-between h-full p-3.5 text-[11px]" style={{ color: p.ink, backgroundColor: p.bg }}>
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName}</span>
            <h4 className="font-bold text-sm">Hello, Aarav Mehta</h4>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-full bg-white border flex items-center justify-center" style={{ borderColor: p.border }}><Bell className="w-3 h-3" /></span>
            <span className="w-6 h-6 rounded-full text-white flex items-center justify-center text-[9px] font-bold" style={{ backgroundColor: p.primary }}>AM</span>
          </div>
        </div>

        {/* Search */}
        <div className="px-2.5 py-1.5 rounded-xl bg-white border flex items-center gap-1.5 text-[9px]" style={{ borderColor: p.border, color: p.muted }}>
          <Search className="w-3 h-3" />
          <span>Search doctors, lab tests, reports...</span>
        </div>

        {/* Next Tele-Consult Banner */}
        <div className="p-3 rounded-2xl text-white space-y-1.5 shadow-sm" style={{ backgroundColor: p.primary }}>
          <div className="flex justify-between items-center text-[9px] opacity-90">
            <span>UPCOMING TELE-CONSULT</span>
            <span>{doctors[0]?.slot}</span>
          </div>
          <div className="font-bold text-xs">{doctors[0]?.name}</div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-[9px] opacity-90">{doctors[0]?.specialty} • {doctors[0]?.fee}</span>
            <span className="px-2 py-0.5 rounded-full bg-white text-[9px] font-bold flex items-center gap-1" style={{ color: p.primary }}>
              <Video className="w-2.5 h-2.5" /> Join
            </span>
          </div>
        </div>

        {/* Quick Vitals */}
        <div className="grid grid-cols-2 gap-1.5">
          <div className="p-2 rounded-xl bg-white border" style={{ borderColor: p.border }}>
            <span className="text-[8px]" style={{ color: p.muted }}>HbA1c Report</span>
            <strong className="text-[11px] block">6.4% • Normal</strong>
          </div>
          <div className="p-2 rounded-xl bg-white border" style={{ borderColor: p.border }}>
            <span className="text-[8px]" style={{ color: p.muted }}>Family Profiles</span>
            <strong className="text-[11px] block">3 Active Members</strong>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t flex justify-around items-center text-[9px]" style={{ borderColor: p.border, color: p.muted }}>
        <span className="font-bold flex flex-col items-center gap-0.5" style={{ color: p.primary }}><Home className="w-3 h-3" />Home</span>
        <span className="flex flex-col items-center gap-0.5"><Calendar className="w-3 h-3" />Visits</span>
        <span className="flex flex-col items-center gap-0.5"><FileText className="w-3 h-3" />Labs</span>
        <span className="flex flex-col items-center gap-0.5"><User className="w-3 h-3" />Family</span>
      </div>
    </div>
  );
}

/* =========================================================================
   2. MULTI-PLATFORM ADMIN / WEB DASHBOARD VIEW
   ========================================================================= */
export function ScenarioAdminDashboard({ slug }: { slug: string }) {
  const s = getScenario(slug);
  const p = s.palette;

  const rows =
    slug === "service-based-booking-platform"
      ? (s.sampleData.services || []).map((srv, i) => ({
          col1: srv.title,
          col2: srv.provider,
          col3: srv.price,
          status: i === 0 ? "Confirmed" : i === 1 ? "In Progress" : "Scheduled",
        }))
      : slug === "diet-nutrition-module"
      ? (s.sampleData.meals || []).map((m, i) => ({
          col1: m.item,
          col2: m.time,
          col3: m.kcal,
          status: i === 0 ? "Logged" : "On Track",
        }))
      : (s.sampleData.doctors || [
          { name: "Dr. Meera Nair", specialty: "General Consult", fee: "₹650", slot: "10:30 AM", rating: "4.9" },
          { name: "Dr. Siddharth Joshi", specialty: "Follow-up", fee: "₹1,100", slot: "12:15 PM", rating: "4.8" },
          { name: "Dr. Kavita Rao", specialty: "Lab Review", fee: "₹850", slot: "04:00 PM", rating: "4.9" },
        ]).map((d, i) => ({
          col1: d.name,
          col2: d.specialty,
          col3: d.fee,
          status: i === 0 ? "Video Ready" : "Confirmed",
        }));

  return (
    <div className="grid grid-cols-12 min-h-[340px] text-xs" style={{ color: p.ink, backgroundColor: p.bg }}>
      {/* Left Sidebar */}
      <aside className="col-span-3 p-4 border-r bg-white hidden sm:flex flex-col justify-between" style={{ borderColor: p.border }}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg text-white font-bold flex items-center justify-center text-[10px]" style={{ backgroundColor: p.primary }}>
              {s.brandName.slice(0, 2).toUpperCase()}
            </span>
            <span className="font-bold text-xs truncate">{s.brandName}</span>
          </div>
          <nav className="space-y-1 text-[11px]">
            <div className="px-2.5 py-2 rounded-lg font-semibold flex items-center gap-2" style={{ backgroundColor: p.primarySoft, color: p.primary }}>
              <LayoutDashboard className="w-3.5 h-3.5" /> Overview
            </div>
            <div className="px-2.5 py-2 rounded-lg flex items-center gap-2" style={{ color: p.muted }}>
              <Calendar className="w-3.5 h-3.5" /> Schedule
            </div>
            <div className="px-2.5 py-2 rounded-lg flex items-center gap-2" style={{ color: p.muted }}>
              <Users className="w-3.5 h-3.5" /> Directory
            </div>
            <div className="px-2.5 py-2 rounded-lg flex items-center gap-2" style={{ color: p.muted }}>
              <Settings className="w-3.5 h-3.5" /> Settings
            </div>
          </nav>
        </div>
        <div className="p-2.5 rounded-xl border text-[10px]" style={{ backgroundColor: p.bg, borderColor: p.border }}>
          <span className="font-bold block">Concept Admin</span>
          <span style={{ color: p.muted }}>{s.sampleData.location}</span>
        </div>
      </aside>

      {/* Main Dashboard Area */}
      <div className="col-span-12 sm:col-span-9 p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="font-bold text-sm">{s.brandName} Operations Console</h4>
            <span className="text-[10px]" style={{ color: p.muted }}>{s.sampleData.dateLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-white border text-[10px] flex items-center gap-1" style={{ borderColor: p.border }}>
              <Filter className="w-3 h-3" /> Filter
            </span>
            <span className="px-3 py-1 rounded-lg text-white text-[10px] font-semibold" style={{ backgroundColor: p.primary }}>
              + New Entry
            </span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-3 gap-2.5">
          {(s.sampleData.metrics || [
            { label: "Today's Slots", value: "18 Bookings", status: "Active Queue" },
            { label: "Consultation Mode", value: "Video + Clinic", status: "Synced" },
            { label: "Standard Fee", value: "₹650 – ₹1,100", status: "INR Transparent" },
          ]).map((m) => (
            <div key={m.label} className="p-3 rounded-xl bg-white border" style={{ borderColor: p.border }}>
              <span className="text-[9px] block" style={{ color: p.muted }}>{m.label}</span>
              <strong className="text-xs sm:text-sm block mt-0.5">{m.value}</strong>
              <span className="text-[9px] font-semibold" style={{ color: p.primary }}>{m.status}</span>
            </div>
          ))}
        </div>

        {/* Data Table */}
        <div className="rounded-xl bg-white border overflow-hidden" style={{ borderColor: p.border }}>
          <div className="px-3.5 py-2 border-b bg-slate-50/70 flex justify-between text-[10px] font-bold" style={{ borderColor: p.border }}>
            <span>Item / Specialist</span>
            <span>Status</span>
          </div>
          <div className="divide-y" style={{ borderColor: p.border }}>
            {rows.map((r, i) => (
              <div key={i} className="px-3.5 py-2.5 flex items-center justify-between text-[11px]">
                <div>
                  <span className="font-semibold block">{r.col1}</span>
                  <span className="text-[9px]" style={{ color: p.muted }}>{r.col2} • {r.col3}</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold" style={{ backgroundColor: p.primarySoft, color: p.primary }}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. UI EDGE STATES STRIP (Skeleton / Empty / Success / Error)
   ========================================================================= */
export function ScenarioUiStates({ slug }: { slug: string }) {
  const s = getScenario(slug);
  const p = s.palette;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Skeleton State */}
      <div className="p-4 rounded-2xl bg-white border space-y-2.5" style={{ borderColor: p.border }}>
        <span className="text-[10px] font-mono font-bold uppercase text-slate-500 flex items-center gap-1.5">
          <Loader2 className="w-3 h-3 animate-spin" /> Loading Skeleton
        </span>
        <div className="space-y-2 animate-pulse pt-1">
          <div className="h-3 w-2/3 bg-slate-200 rounded" />
          <div className="h-8 w-full bg-slate-100 rounded-xl" />
          <div className="h-3 w-1/2 bg-slate-200 rounded" />
        </div>
      </div>

      {/* Empty State */}
      <div className="p-4 rounded-2xl bg-white border flex flex-col justify-between space-y-2" style={{ borderColor: p.border }}>
        <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Empty State</span>
        <div className="py-2 text-center space-y-1">
          <Inbox className="w-5 h-5 mx-auto" style={{ color: p.muted }} />
          <div className="text-xs font-bold" style={{ color: p.ink }}>No Upcoming Records</div>
          <p className="text-[10px]" style={{ color: p.muted }}>Add an entry to begin tracking.</p>
        </div>
      </div>

      {/* Success State */}
      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between space-y-2">
        <span className="text-[10px] font-mono font-bold uppercase text-emerald-800">Success State</span>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-emerald-950">{s.brandName} Confirmed</div>
            <p className="text-[10px] text-emerald-800">{s.sampleData.dateLabel}</p>
          </div>
        </div>
      </div>

      {/* Error State */}
      <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex flex-col justify-between space-y-2">
        <span className="text-[10px] font-mono font-bold uppercase text-rose-800">Error / Retry</span>
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-rose-950">Connection Interrupted</div>
            <p className="text-[10px] text-rose-800">Tap to retry sync safely.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
