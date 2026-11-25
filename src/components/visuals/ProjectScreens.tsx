"use client";

import React from "react";
import { Avatar, ProgressRing, Sparkline, BarChart, CalendarGrid } from "./Primitives";
import {
  Heart,
  Calendar,
  Clock,
  Video,
  FileText,
  User,
  Shield,
  Activity,
  Plus,
  Send,
  Droplet,
  Flame,
  Share2,
  Sparkles,
  MapPin,
  Check,
  ChevronRight,
  PhoneCall,
  Mic,
  MicOff,
} from "lucide-react";

// ==========================================
// 1. HEALTHCARE MOBILE APP (7 screens)
// ==========================================

export function HealthcareDashboardScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className={`p-4 space-y-3.5 ${wireframe ? "text-gray-500" : "text-plum"}`}>
      {/* Welcome Banner */}
      <div className="flex items-center justify-between pb-2 border-b border-blush-200/60">
        <div className="flex items-center gap-2.5">
          <Avatar name="Priya Patel" wireframe={wireframe} size="md" />
          <div>
            <span className="text-[10px] text-plum-500 block leading-tight font-sans">
              {wireframe ? "••••••••" : "Good Morning,"}
            </span>
            <span className="font-serif font-bold text-sm text-plum">
              {wireframe ? "•••••• ••••••" : "Priya Patel"}
            </span>
          </div>
        </div>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${wireframe ? "bg-gray-200" : "bg-emerald-100 text-emerald-800"}`}>
          {wireframe ? "••••" : "Vitals Stable"}
        </span>
      </div>

      {/* Quick Emergency / Hotline Pill */}
      <div className={`p-3 rounded-2xl flex items-center justify-between ${wireframe ? "bg-gray-200 border border-gray-300" : "bg-rose-50 border border-rose-200/80 shadow-soft-sm"}`}>
        <div className="flex items-center gap-2">
          <Heart className={`w-4 h-4 ${wireframe ? "text-gray-400" : "text-rose-600 animate-pulse"}`} />
          <span className="text-xs font-semibold">{wireframe ? "••••••••• •••••" : "24/7 Care Concierge"}</span>
        </div>
        <span className="text-[10px] font-bold text-rose-700">{wireframe ? "••••" : "Connect"}</span>
      </div>

      {/* Upcoming Appointment Card */}
      <div className={`p-4 rounded-3xl ${wireframe ? "bg-gray-100 border border-gray-300" : "bg-white border border-blush-200 shadow-soft"}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-plum-400">
            {wireframe ? "•••••••• •••" : "Next Consultation"}
          </span>
          <span className="text-[10px] text-rose-700 font-semibold">{wireframe ? "••••" : "Today"}</span>
        </div>
        <div className="flex items-center gap-3">
          <Avatar name="Dr. Ananya Sharma" wireframe={wireframe} size="md" />
          <div>
            <h4 className="font-serif font-bold text-xs">{wireframe ? "•••••••••••••••" : "Dr. Ananya Sharma"}</h4>
            <span className="text-[10px] text-plum-500">{wireframe ? "•••••••••••••" : "Senior Cardiologist"}</span>
          </div>
        </div>
        <div className="mt-3 pt-2.5 border-t border-blush-100 flex items-center justify-between text-[10px] text-plum-600">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-rose-600" />
            {wireframe ? "••:•• ••" : "11:30 AM"}
          </span>
          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
            <Video className="w-3 h-3" />
            {wireframe ? "•••••" : "Video Ready"}
          </span>
        </div>
      </div>

      {/* Health Vitals Summary Sparkline */}
      <div className={`p-3.5 rounded-3xl ${wireframe ? "bg-gray-100 border border-gray-300" : "bg-cream-50 border border-blush-200"}`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold text-plum-600">{wireframe ? "•••••• •••••" : "Resting Heart Rate"}</span>
          <span className="text-xs font-mono font-bold text-rose-600">{wireframe ? "•• •••" : "72 bpm"}</span>
        </div>
        <Sparkline width={240} height={32} wireframe={wireframe} />
      </div>
    </div>
  );
}

export function HealthcareDoctorListScreen({ wireframe = false }: { wireframe?: boolean }) {
  const doctors = [
    { name: "Dr. Ananya Sharma", role: "Cardiology", status: "Verified On-Call", rating: "4.9" },
    { name: "Dr. Rajesh Varma", role: "Pediatrics", status: "Video Consult", rating: "4.8" },
    { name: "Dr. Sneha Patel", role: "Dermatology", status: "Available Today", rating: "4.9" },
  ];

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-blush-100">
        <h4 className="font-serif font-bold text-sm">{wireframe ? "•••••••••••" : "Find Specialists"}</h4>
        <span className="text-[10px] text-rose-700 font-semibold">{wireframe ? "••" : "Surat"}</span>
      </div>

      {/* Filter pills */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {["All", "Cardio", "Pediatrics", "Derma"].map((tag, i) => (
          <span
            key={tag}
            className={`px-2.5 py-1 rounded-full text-[10px] font-medium shrink-0 ${
              wireframe
                ? "bg-gray-200 text-gray-500"
                : i === 0
                ? "bg-rose-500 text-white font-bold"
                : "bg-white border border-blush-200 text-plum-600"
            }`}
          >
            {wireframe ? "••••" : tag}
          </span>
        ))}
      </div>

      {/* Doctor Cards */}
      <div className="space-y-2">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-2xl flex items-center justify-between ${
              wireframe ? "bg-gray-100 border border-gray-300" : "bg-white border border-blush-200 shadow-soft-sm"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Avatar name={doc.name} size="sm" wireframe={wireframe} />
              <div>
                <span className="font-serif font-bold text-xs block leading-tight">
                  {wireframe ? "•••••••••••••" : doc.name}
                </span>
                <span className="text-[10px] text-plum-500 block">
                  {wireframe ? "••••••" : doc.role} • {wireframe ? "•" : "★ 4.9"}
                </span>
              </div>
            </div>
            <button className={`px-2.5 py-1 rounded-xl text-[10px] font-bold ${wireframe ? "bg-gray-300 text-gray-600" : "bg-blush-100 text-rose-800"}`}>
              {wireframe ? "••••" : "Book"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HealthcareBookingCalendarScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <div className="pb-2 border-b border-blush-100">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "•••••• ••••" : "Select Date & Time"}</h4>
        <span className="text-[10px] text-plum-500">{wireframe ? "•••••••••••••••" : "Dr. Ananya Sharma • Video"}</span>
      </div>

      <div className={`p-3 rounded-2xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"}`}>
        <CalendarGrid selectedDay={18} wireframe={wireframe} />
      </div>

      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-plum-500 block mb-1.5">
          {wireframe ? "•••• •••••" : "Available Slots"}
        </span>
        <div className="grid grid-cols-3 gap-1.5">
          {["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM", "06:15 PM"].map((slot, i) => (
            <div
              key={slot}
              className={`p-2 rounded-xl text-center text-[10px] font-mono font-medium ${
                wireframe
                  ? "bg-gray-200 text-gray-600"
                  : i === 1
                  ? "bg-rose-500 text-white font-bold ring-2 ring-rose-200"
                  : "bg-white border border-blush-200 text-plum-700"
              }`}
            >
              {wireframe ? "••:••" : slot}
            </div>
          ))}
        </div>
      </div>

      <button className={`w-full py-2.5 rounded-2xl text-xs font-bold ${wireframe ? "bg-gray-400 text-white" : "bg-rose-500 text-white shadow-soft"}`}>
        {wireframe ? "••••••• •••••••" : "Confirm Booking"}
      </button>
    </div>
  );
}

export function HealthcareTelemedicineScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className={`relative flex-1 flex flex-col justify-between p-4 ${wireframe ? "bg-gray-200" : "bg-gradient-to-b from-plum-900 to-plum-950 text-white"}`}>
      {/* Video Call Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono">{wireframe ? "••:••" : "14:28 (Encrypted HD)"}</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px]">
          {wireframe ? "••••" : "Live"}
        </span>
      </div>

      {/* Main Doctor Video Frame */}
      <div className="flex flex-col items-center justify-center my-auto text-center py-6">
        <Avatar name="Dr. Ananya" size="lg" wireframe={wireframe} className="w-20 h-20 mb-3 border-2 border-white/40" />
        <h4 className="font-serif font-bold text-base text-white">{wireframe ? "•••••••••••••" : "Dr. Ananya Sharma"}</h4>
        <span className="text-xs text-rose-200">{wireframe ? "••••••••••" : "Cardiologist (Consulting)"}</span>
      </div>

      {/* Call Controls Floating Bar */}
      <div className="p-3 rounded-3xl bg-black/40 backdrop-blur-md flex items-center justify-center gap-4">
        <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
          <Mic className="w-4 h-4" />
        </button>
        <button className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-lg">
          <PhoneCall className="w-5 h-5 transform rotate-135" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
          <Video className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function HealthcareLabReportsScreen({ wireframe = false }: { wireframe?: boolean }) {
  const reports = [
    { name: "Complete Blood Count", date: "Nov 20, 2026", status: "Normal", color: "emerald" },
    { name: "Lipid Profile Matrix", date: "Oct 14, 2026", status: "Optimal", color: "emerald" },
    { name: "Thyroid TSH Level", date: "Sep 02, 2026", status: "Review", color: "amber" },
  ];

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-blush-100">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "••••••• •••••••" : "Diagnostic Reports"}</h4>
        <span className="text-[10px] text-plum-500">{wireframe ? "••" : "3 Verified"}</span>
      </div>

      <div className="space-y-2">
        {reports.map((rep, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-2xl flex items-center justify-between ${
              wireframe ? "bg-gray-100 border border-gray-300" : "bg-white border border-blush-200 shadow-soft-sm"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <FileText className={`w-5 h-5 ${wireframe ? "text-gray-400" : "text-rose-600"}`} />
              <div>
                <span className="font-serif font-bold text-xs block leading-tight">{wireframe ? "•••••••••••••••" : rep.name}</span>
                <span className="text-[10px] text-plum-500 block">{wireframe ? "••••••••••" : rep.date}</span>
              </div>
            </div>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                wireframe ? "bg-gray-200" : rep.color === "emerald" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
              }`}
            >
              {wireframe ? "••••" : rep.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HealthcareInsuranceCardScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-4">
      <div className="pb-1">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "••••••••• •••••" : "Insurance Policy"}</h4>
      </div>

      {/* Digital Insurance Card Graphic */}
      <div className={`p-5 rounded-3xl ${wireframe ? "bg-gray-300 border border-gray-400" : "bg-gradient-to-br from-rose-500 via-rose-600 to-plum-900 text-white shadow-soft-lg"} space-y-4`}>
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] tracking-widest uppercase opacity-80 block">{wireframe ? "•••••• ••••••" : "CareShield Elite"}</span>
            <span className="font-serif font-bold text-sm block mt-0.5">{wireframe ? "•••••• •••••" : "Priya K. Lakkad"}</span>
          </div>
          <Shield className="w-6 h-6 opacity-80" />
        </div>
        <div className="pt-2 border-t border-white/20 flex justify-between text-[10px] font-mono">
          <span>{wireframe ? "ID: •••••••••••" : "POL: CS-982104-IN"}</span>
          <span>{wireframe ? "EXP: ••/••" : "EXP: 12/2028"}</span>
        </div>
      </div>

      <div className={`p-3 rounded-2xl ${wireframe ? "bg-gray-100" : "bg-cream-50 border border-blush-200"} flex items-center justify-between text-xs`}>
        <span>{wireframe ? "•••••••• •••••••" : "Cashless Network Hospitals"}</span>
        <span className="font-bold text-rose-700">{wireframe ? "••" : "18 Near You"}</span>
      </div>
    </div>
  );
}

export function HealthcareFamilyProfilesScreen({ wireframe = false }: { wireframe?: boolean }) {
  const members = [
    { name: "Priya (Self)", relation: "Primary Account" },
    { name: "Kishorbhai Lakkad", relation: "Father • Dependent" },
    { name: "Geetaben Lakkad", relation: "Mother • Dependent" },
  ];

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-blush-100">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "•••••• ••••••••" : "Family Care Network"}</h4>
        <button className={`p-1.5 rounded-full ${wireframe ? "bg-gray-200" : "bg-blush-100 text-rose-700"}`}>
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-2">
        {members.map((m, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-2xl flex items-center justify-between ${
              wireframe ? "bg-gray-100 border border-gray-300" : "bg-white border border-blush-200 shadow-soft-sm"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Avatar name={m.name} size="sm" wireframe={wireframe} />
              <div>
                <span className="font-serif font-bold text-xs block leading-tight">{wireframe ? "•••••••••••••" : m.name}</span>
                <span className="text-[10px] text-plum-500">{wireframe ? "••••••••" : m.relation}</span>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-plum-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 2. WOMEN'S HEALTH APP (6 screens)
// ==========================================

export function WomensHealthCycleRingScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-4 flex flex-col items-center text-center">
      <div className="w-full flex items-center justify-between pb-2 border-b border-blush-100 text-left">
        <div>
          <span className="text-[10px] text-plum-500 uppercase tracking-widest">{wireframe ? "••••• •••" : "Cycle Phase"}</span>
          <h4 className="font-serif font-bold text-sm text-plum">{wireframe ? "••••••••••" : "Follicular Phase"}</h4>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${wireframe ? "bg-gray-200" : "bg-lilac-200 text-plum-800"}`}>
          {wireframe ? "••• ••" : "Day 11"}
        </span>
      </div>

      {/* Cycle Progress Ring Gauge */}
      <div className="py-2">
        <ProgressRing
          progress={0.65}
          size={140}
          strokeWidth={11}
          color="#D9577B"
          label={wireframe ? "••" : "Day 11"}
          sublabel={wireframe ? "•••••••" : "4 Days to Ovulation"}
          wireframe={wireframe}
        />
      </div>

      <div className={`w-full p-3.5 rounded-3xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"} text-left`}>
        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block mb-1">
          {wireframe ? "•••••••• ••••••••" : "Predicted Period"}
        </span>
        <span className="font-serif font-bold text-xs text-plum block">{wireframe ? "••••••• •• - ••" : "December 04 - 08"}</span>
        <span className="text-[10px] text-plum-500 mt-0.5 block">{wireframe ? "•••••• •••• •••" : "Regular 28-day cycle"}</span>
      </div>
    </div>
  );
}

export function WomensHealthCalendarScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <div className="pb-1 border-b border-blush-100 flex items-center justify-between">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "••••• ••••••••" : "Cycle Calendar"}</h4>
        <span className="text-[10px] font-semibold text-rose-700">{wireframe ? "••••••••" : "Nov 2026"}</span>
      </div>
      <div className={`p-3 rounded-2xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"}`}>
        <CalendarGrid selectedDay={11} wireframe={wireframe} />
      </div>
      <div className="flex justify-around text-[10px] text-plum-600 pt-1">
        <span className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${wireframe ? "bg-gray-400" : "bg-rose-200"}`} />
          {wireframe ? "••••••" : "Period"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${wireframe ? "bg-gray-400" : "bg-lilac-200"}`} />
          {wireframe ? "•••••••" : "Fertile"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${wireframe ? "bg-gray-400" : "bg-rose-500"}`} />
          {wireframe ? "•••••" : "Today"}
        </span>
      </div>
    </div>
  );
}

export function WomensHealthSymptomLoggerScreen({ wireframe = false }: { wireframe?: boolean }) {
  const symptoms = ["Energetic", "Mild Cramps", "Calm", "Craving Sweet", "Deep Sleep", "Bloated"];
  return (
    <div className="p-4 space-y-3">
      <div className="pb-2 border-b border-blush-100">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "••••• ••••••••" : "Daily Check-in"}</h4>
        <span className="text-[10px] text-plum-500">{wireframe ? "••••• •••" : "How are you feeling today?"}</span>
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {symptoms.map((sym, i) => (
          <span
            key={sym}
            className={`px-3 py-1.5 rounded-2xl text-[10px] font-semibold ${
              wireframe
                ? "bg-gray-200 text-gray-500"
                : i === 0 || i === 2
                ? "bg-rose-500 text-white shadow-soft-sm font-bold"
                : "bg-white border border-blush-200 text-plum-700"
            }`}
          >
            {wireframe ? "••••••" : sym}
          </span>
        ))}
      </div>
      <button className={`w-full py-2.5 rounded-2xl text-xs font-bold mt-4 ${wireframe ? "bg-gray-300" : "bg-rose-500 text-white shadow-soft"}`}>
        {wireframe ? "•••• •••••" : "Save Today's Log"}
      </button>
    </div>
  );
}

export function WomensHealthInsightsScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <div className="pb-1">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "•••••• ••••••••" : "Cycle Insights"}</h4>
      </div>
      <div className={`p-3.5 rounded-3xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"} space-y-2`}>
        <span className="text-[10px] font-bold text-rose-700 block uppercase tracking-wider">{wireframe ? "•••••• •••••" : "Cycle Length"}</span>
        <span className="font-serif font-bold text-lg text-plum block">{wireframe ? "•• ••••" : "28 Days"}</span>
        <span className="text-[10px] text-plum-500 leading-relaxed block">
          {wireframe ? "••••••••••••••••••••••••••••" : "Your cycle shows 98% regularity across the last 6 months."}
        </span>
      </div>
    </div>
  );
}

export function WomensHealthRecordsScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-2.5">
      <div className="pb-2 border-b border-blush-100 flex justify-between items-center">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "•••••• •••••••" : "Gynecology Records"}</h4>
        <span className="text-[10px] text-rose-700 font-semibold">{wireframe ? "••" : "2 Encrypted"}</span>
      </div>
      <div className={`p-3 rounded-2xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"} flex items-center justify-between`}>
        <div>
          <span className="font-serif font-bold text-xs block">{wireframe ? "•••••••••• ••••••" : "Pelvic Ultrasound Report"}</span>
          <span className="text-[10px] text-plum-500">{wireframe ? "••••••••" : "Dr. Sneha • Oct 2026"}</span>
        </div>
        <FileText className="w-4 h-4 text-rose-600" />
      </div>
    </div>
  );
}

export function WomensHealthPcodArticleScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${wireframe ? "bg-gray-200" : "bg-lilac-200 text-plum-800"}`}>
        {wireframe ? "••••••••" : "PCOD / PCOS Guide"}
      </span>
      <h4 className="font-serif font-bold text-sm text-plum">
        {wireframe ? "•••••••••••••••••••••••••" : "Balancing Hormones with Gentle Anti-Inflammatory Nutrition"}
      </h4>
      <p className="text-[10px] text-plum-600 leading-relaxed">
        {wireframe
          ? "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"
          : "Practical daily guidelines for steady energy, cortisol regulation, and menstrual ease without restrictive dieting."}
      </p>
    </div>
  );
}

// ==========================================
// 3. AI HEALTHCARE MODULE (4 screens)
// ==========================================

export function AiChatScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="flex-1 flex flex-col justify-between p-4 space-y-3">
      <div className="pb-2 border-b border-blush-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <h4 className="font-serif font-bold text-xs">{wireframe ? "••••••••••" : "CareFlow AI Triage"}</h4>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
          {wireframe ? "••••" : "Active"}
        </span>
      </div>

      <div className="space-y-2.5">
        <div className={`p-3 rounded-2xl rounded-tl-xs text-[11px] leading-relaxed max-w-[85%] ${wireframe ? "bg-gray-200 text-gray-600" : "bg-white border border-blush-200 shadow-soft-sm text-plum-800"}`}>
          {wireframe ? "•••••••••••••••••••••••••••••••••••••" : "Hello Priya. I can help evaluate symptoms and route you to the right specialist. How are you feeling?"}
        </div>
        <div className={`p-3 rounded-2xl rounded-tr-xs text-[11px] leading-relaxed ml-auto max-w-[80%] ${wireframe ? "bg-gray-400 text-white" : "bg-rose-500 text-white shadow-soft"}`}>
          {wireframe ? "••••••••••••••••••••••••••••" : "I've had a dull headache and eye fatigue since yesterday."}
        </div>
      </div>

      {/* Input bar */}
      <div className={`p-2 rounded-2xl flex items-center justify-between ${wireframe ? "bg-gray-100 border border-gray-300" : "bg-white border border-blush-200 shadow-soft-sm"}`}>
        <span className="text-[10px] text-plum-400 px-2">{wireframe ? "••••••• •••••••" : "Describe symptoms..."}</span>
        <button className={`w-7 h-7 rounded-xl flex items-center justify-center ${wireframe ? "bg-gray-400 text-white" : "bg-rose-500 text-white"}`}>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export function AiQuickRepliesScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <span className="text-[10px] font-bold text-plum-500 uppercase tracking-wider">{wireframe ? "•••• •••••••" : "Quick Answers"}</span>
      <div className="flex flex-col gap-2">
        {["Duration < 24 Hours", "Accompanied by Fever", "Mild Sensitivity to Light"].map((ans, i) => (
          <div
            key={i}
            className={`p-2.5 rounded-xl text-xs font-medium text-center ${wireframe ? "bg-gray-200 text-gray-500" : "bg-white border border-blush-200 hover:border-rose-400 text-plum-700"}`}
          >
            {wireframe ? "••••••••••••••" : ans}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AiTypingIndicatorScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-4">
      <div className={`p-3.5 rounded-2xl inline-flex items-center gap-2 ${wireframe ? "bg-gray-200" : "bg-white border border-blush-200 shadow-soft-sm"}`}>
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce" />
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce [animation-delay:0.2s]" />
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce [animation-delay:0.4s]" />
        <span className="text-[10px] font-mono text-plum-500 ml-1">{wireframe ? "••••••••••" : "Synthesizing advice..."}</span>
      </div>
    </div>
  );
}

export function AiSuggestionCardsScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <div className={`p-4 rounded-3xl ${wireframe ? "bg-gray-100" : "bg-cream-50 border border-blush-200 shadow-soft-sm"} space-y-2`}>
        <span className="text-[10px] font-bold text-rose-700 uppercase">{wireframe ? "••••••••••••••" : "Recommended Next Step"}</span>
        <h4 className="font-serif font-bold text-xs text-plum">{wireframe ? "•••••••••••••••••" : "Consult an Optometrist"}</h4>
        <span className="text-[10px] text-plum-600 block">{wireframe ? "•••••••••••••••••••••••" : "Likely digital eye-strain. 3 specialists open today."}</span>
        <button className={`w-full py-2 rounded-xl text-[10px] font-bold mt-2 ${wireframe ? "bg-gray-400 text-white" : "bg-rose-500 text-white shadow-soft"}`}>
          {wireframe ? "••••••••" : "View Doctors"}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 4. DIET & NUTRITION MODULE (5 screens)
// ==========================================

export function DietCalorieRingScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-4 flex flex-col items-center text-center">
      <div className="w-full flex items-center justify-between pb-2 border-b border-blush-100">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "••••• •••••••" : "Daily Nutrition"}</h4>
        <span className="text-[10px] text-rose-700 font-semibold">{wireframe ? "••••" : "Nov 26"}</span>
      </div>
      <ProgressRing progress={0.78} size={135} strokeWidth={10} color="#D9577B" label={wireframe ? "••••" : "1,560"} sublabel={wireframe ? "•••••" : "of 2,000 kcal"} wireframe={wireframe} />
      <div className="w-full grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className={`p-2 rounded-xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200"}`}>
          <span className="text-plum-500 block">{wireframe ? "•••" : "Protein"}</span>
          <span className="font-bold font-mono">{wireframe ? "••" : "84g"}</span>
        </div>
        <div className={`p-2 rounded-xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200"}`}>
          <span className="text-plum-500 block">{wireframe ? "••••" : "Carbs"}</span>
          <span className="font-bold font-mono">{wireframe ? "•••" : "160g"}</span>
        </div>
        <div className={`p-2 rounded-xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200"}`}>
          <span className="text-plum-500 block">{wireframe ? "•••" : "Fats"}</span>
          <span className="font-bold font-mono">{wireframe ? "••" : "48g"}</span>
        </div>
      </div>
    </div>
  );
}

export function DietWaterTrackerScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center gap-1.5 text-xs font-bold text-plum">
          <Droplet className="w-4 h-4 text-cyan-500" />
          <span>{wireframe ? "•••• •••••••" : "Hydration Tracker"}</span>
        </div>
        <span className="text-xs font-mono font-bold text-cyan-600">{wireframe ? "•/•" : "6 / 8 Glasses"}</span>
      </div>
      <div className="flex justify-between gap-1.5 pt-2">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={`w-7 h-10 rounded-xl flex items-center justify-center text-[10px] ${
              wireframe ? "bg-gray-200 text-gray-400" : i < 6 ? "bg-cyan-500 text-white font-bold" : "bg-cream-100 border border-cyan-200 text-cyan-400"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DietMealLogScreen({ wireframe = false }: { wireframe?: boolean }) {
  const meals = [
    { type: "Breakfast", name: "Avocado Sourdough & Poached Egg", cal: "380 kcal" },
    { type: "Lunch", name: "Quinoa Salad with Roasted Chickpeas", cal: "520 kcal" },
    { type: "Snack", name: "Greek Yogurt with Berries", cal: "180 kcal" },
  ];

  return (
    <div className="p-4 space-y-2.5">
      <div className="pb-1">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "••••• •••" : "Logged Meals"}</h4>
      </div>
      <div className="space-y-2">
        {meals.map((m, idx) => (
          <div key={idx} className={`p-2.5 rounded-2xl flex items-center justify-between ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"}`}>
            <div>
              <span className="text-[9px] uppercase font-bold text-rose-700 block">{wireframe ? "•••••" : m.type}</span>
              <span className="font-serif font-bold text-xs text-plum block">{wireframe ? "•••••••••••••••••" : m.name}</span>
            </div>
            <span className="text-[10px] font-mono text-plum-500">{wireframe ? "••• •••" : m.cal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DietWeeklyChartScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <div className="pb-1 flex justify-between items-center">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "•••••• ••••••" : "7-Day Caloric Intake"}</h4>
        <span className="text-[10px] text-emerald-700 font-semibold">{wireframe ? "••••••••" : "On Track"}</span>
      </div>
      <BarChart wireframe={wireframe} height={60} />
    </div>
  );
}

// ==========================================
// 5. INVITATION APP (4 screens)
// ==========================================

export function InvitationTemplatePickerScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <div className="pb-1 border-b border-blush-100 flex justify-between items-center">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "••••••••• •••••••" : "Luxury Event Themes"}</h4>
        <span className="text-[10px] text-rose-700 font-bold">{wireframe ? "••••" : "Foil Art"}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { title: "Rose Floral Gala", tone: "from-blush-200 to-rose-200" },
          { title: "Gilded Monogram", tone: "from-cream-200 to-amber-200" },
          { title: "Minimalist Linen", tone: "from-cream-100 to-blush-100" },
          { title: "Lavender Soirée", tone: "from-lilac-200 to-blush-200" },
        ].map((t, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl aspect-[3/4] flex flex-col justify-end text-center ${
              wireframe ? "bg-gray-200 border border-gray-300" : `bg-gradient-to-b ${t.tone} border border-white/60 shadow-soft-sm`
            }`}
          >
            <span className="font-serif font-bold text-[11px] text-plum">{wireframe ? "••••••••" : t.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InvitationEditorScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <div className="pb-1 border-b border-blush-100">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "•••••• •••••" : "Customize Card"}</h4>
      </div>
      <div className={`p-4 rounded-3xl text-center space-y-2 ${wireframe ? "bg-gray-100 border border-gray-300" : "bg-white border border-blush-200 shadow-soft-sm"}`}>
        <span className="text-[10px] font-serif uppercase tracking-widest text-rose-600 block">{wireframe ? "••••••• •••••••" : "Together with Families"}</span>
        <h3 className="font-serif font-bold text-base text-plum">{wireframe ? "••••• & ••••" : "Aarav & Meera"}</h3>
        <span className="text-[10px] text-plum-500 block">{wireframe ? "••••••••• ••, ••••" : "December 18, 2026"}</span>
      </div>
      <div className="flex gap-2">
        {["Playfair", "Fraunces", "Cinzel"].map((font, i) => (
          <span
            key={font}
            className={`flex-1 py-1.5 rounded-xl text-[10px] text-center ${
              wireframe ? "bg-gray-200 text-gray-500" : i === 0 ? "bg-rose-500 text-white font-bold" : "bg-cream-100 text-plum-600"
            }`}
          >
            {wireframe ? "••••" : font}
          </span>
        ))}
      </div>
    </div>
  );
}

export function InvitationPreviewCardScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center my-auto">
      <div className={`w-full max-w-[260px] p-6 rounded-3xl text-center space-y-3 ${wireframe ? "bg-gray-200 border-2 border-gray-300" : "bg-gradient-to-b from-cream-50 via-white to-blush-100 border-2 border-rose-300/60 shadow-soft-xl"}`}>
        <div className="w-10 h-10 mx-auto rounded-full bg-rose-500 text-white flex items-center justify-center font-serif text-sm font-bold shadow-soft">
          {wireframe ? "•" : "A&M"}
        </div>
        <h3 className="font-serif font-bold text-base text-plum">{wireframe ? "•••••••••••••" : "Aarav & Meera"}</h3>
        <p className="text-[10px] text-plum-600 leading-relaxed">
          {wireframe ? "•••••••••••••••••••••••••••••••••••••" : "Request the honour of your presence at their wedding celebration."}
        </p>
        <span className="text-[10px] font-mono text-rose-700 block font-bold">{wireframe ? "•••••••• ••, ••••" : "Dec 18, 2026 • Surat"}</span>
      </div>
    </div>
  );
}

export function InvitationShareSheetScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <h4 className="font-serif font-bold text-xs">{wireframe ? "••••• ••••••••••" : "Share with Guests"}</h4>
      <div className={`p-3 rounded-2xl flex items-center justify-between ${wireframe ? "bg-gray-100" : "bg-emerald-50 border border-emerald-200 text-emerald-900"}`}>
        <span className="text-[10px] font-semibold">{wireframe ? "•••••••• ••••••" : "Direct WhatsApp Broadcast"}</span>
        <Share2 className="w-4 h-4 text-emerald-600" />
      </div>
      <div className={`p-3 rounded-2xl flex items-center justify-between ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"}`}>
        <div>
          <span className="text-[10px] font-bold block">{wireframe ? "•••• •••••" : "Live RSVPs"}</span>
          <span className="text-[10px] text-plum-500">{wireframe ? "•• ••••••••" : "48 Confirmed"}</span>
        </div>
        <span className="text-xs font-bold text-rose-700 font-mono">{wireframe ? "••%" : "92%"}</span>
      </div>
    </div>
  );
}

// ==========================================
// 6. SERVICE BOOKING PLATFORM (4 screens)
// ==========================================

export function ServiceListCatalogScreen({ wireframe = false }: { wireframe?: boolean }) {
  const services = [
    { title: "Wellness Aromatherapy", dur: "60 mins", price: "Add fee" },
    { title: "Deep Tissue Restoration", dur: "90 mins", price: "Add fee" },
    { title: "Hydrating Facial Glow", dur: "45 mins", price: "Add fee" },
  ];

  return (
    <div className="p-4 space-y-2.5">
      <div className="pb-1 border-b border-blush-100">
        <h4 className="font-serif font-bold text-xs">{wireframe ? "••••••• •••••••" : "Service Packages"}</h4>
      </div>
      <div className="space-y-2">
        {services.map((s, idx) => (
          <div key={idx} className={`p-3 rounded-2xl flex items-center justify-between ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"}`}>
            <div>
              <span className="font-serif font-bold text-xs block text-plum">{wireframe ? "•••••••••••••••••" : s.title}</span>
              <span className="text-[10px] text-plum-500">{wireframe ? "•• ••••" : s.dur}</span>
            </div>
            <button className={`px-2.5 py-1 rounded-xl text-[10px] font-bold ${wireframe ? "bg-gray-300" : "bg-rose-500 text-white"}`}>
              {wireframe ? "••••" : "Select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServiceProviderCardScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <h4 className="font-serif font-bold text-xs">{wireframe ? "•••••• ••••••••••" : "Assigned Specialist"}</h4>
      <div className={`p-4 rounded-3xl ${wireframe ? "bg-gray-100" : "bg-white border border-blush-200 shadow-soft-sm"} flex items-center gap-3`}>
        <Avatar name="Meera Sen" size="lg" wireframe={wireframe} />
        <div>
          <h4 className="font-serif font-bold text-sm text-plum">{wireframe ? "•••••••••" : "Meera Sen"}</h4>
          <span className="text-[10px] text-plum-500 block">{wireframe ? "••••••••••" : "Senior Therapist"}</span>
          <span className="text-[10px] text-rose-700 font-semibold">{wireframe ? "••••" : "★ 4.95 Rating"}</span>
        </div>
      </div>
    </div>
  );
}

export function ServiceSlotPickerScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 space-y-3">
      <h4 className="font-serif font-bold text-xs">{wireframe ? "•••• •••••" : "Choose Appointment Time"}</h4>
      <div className="grid grid-cols-2 gap-2">
        {["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map((slot, i) => (
          <div
            key={slot}
            className={`p-3 rounded-2xl text-center text-xs font-mono font-bold ${
              wireframe ? "bg-gray-200 text-gray-500" : i === 0 ? "bg-rose-500 text-white shadow-soft" : "bg-white border border-blush-200 text-plum-800"
            }`}
          >
            {wireframe ? "••:••" : slot}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServiceConfirmationScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center my-auto text-center space-y-3">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${wireframe ? "bg-gray-300" : "bg-emerald-100 text-emerald-700"}`}>
        <Check className="w-6 h-6" />
      </div>
      <h4 className="font-serif font-bold text-base text-plum">{wireframe ? "••••••• •••••••••" : "Booking Confirmed!"}</h4>
      <p className="text-[10px] text-plum-600">
        {wireframe ? "•••••••••••••••••••••••••••••••••••••" : "Your session with Meera Sen is booked for Friday, 10:00 AM."}
      </p>
    </div>
  );
}
