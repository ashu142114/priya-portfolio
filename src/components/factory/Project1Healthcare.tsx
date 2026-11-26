"use client";

import React from "react";
import { getScenario } from "@/data/scenarios";
import {
  KitButton,
  KitInput,
  KitChip,
  KitBadge,
  KitAvatar,
  KitSearch,
  KitFilters,
  KitCard,
  KitListItem,
  KitBottomTabBar,
  KitTopAppBar,
  KitSidebarNav,
  KitKpiCard,
  KitStepper,
  KitProgress,
  KitTable,
  KitLineChart,
  KitBarChart,
  KitSparkline,
  KitCalendar,
  KitTimeSlotPicker,
  KitSvgMap,
  KitSpotIllustration,
} from "@/ui-kit";
import {
  Home,
  Calendar,
  FileText,
  User,
  Video,
  Mic,
  PhoneOff,
  MessageSquare,
  Heart,
  Shield,
  CheckCircle2,
  Clock,
  LayoutDashboard,
  Users,
  Activity,
  Plus,
} from "lucide-react";

const S = () => getScenario("healthcare-mobile-app");

const bottomNav = (activeIndex: number, wireframe = false) => {
  const p = S().palette;
  return (
    <KitBottomTabBar
      activeIndex={activeIndex}
      primary={p.primary}
      border={p.border}
      wireframe={wireframe}
      items={[
        { label: "Home", icon: <Home className="w-3 h-3" /> },
        { label: "Doctors", icon: <Calendar className="w-3 h-3" /> },
        { label: "Labs", icon: <FileText className="w-3 h-3" /> },
        { label: "Family", icon: <User className="w-3 h-3" /> },
      ]}
    />
  );
};

export function HcOnboardingScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-4 text-center" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="flex justify-between items-center text-[9px]">
        <span className="font-bold" style={{ color: p.primary }}>{s.brandName}</span>
        <span className="text-slate-400">Skip</span>
      </div>
      <div className="space-y-3 my-auto flex flex-col items-center">
        <KitSpotIllustration styleType="healthcare" primary={p.primary} primarySoft={p.primarySoft} wireframe={wireframe} />
        <h4 className="font-bold text-sm leading-snug">Calm Telemedicine &amp; Family Health Vault</h4>
        <p className="text-[10px] leading-relaxed" style={{ color: p.muted }}>
          Book verified specialists in Surat, view lab reports in plain language, and care for parents from one place.
        </p>
        <div className="w-32"><KitProgress value={33} primary={p.primary} /></div>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Get Started →</KitButton>
    </div>
  );
}

export function HcOtpSignInScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-4" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-3">
        <KitTopAppBar title="Verify Mobile" subtitle={s.brandName} wireframe={wireframe} />
        <p className="text-[10px]" style={{ color: p.muted }}>Enter the 6-digit code sent to +91 98250 •••42</p>
        <div className="grid grid-cols-6 gap-1.5 py-2">
          {["4", "8", "2", "9", "1", "6"].map((d, i) => (
            <div key={i} className="aspect-square rounded-lg bg-white border flex items-center justify-center font-mono font-bold text-xs" style={{ borderColor: i < 4 ? p.primary : p.border }}>
              {wireframe ? "•" : d}
            </div>
          ))}
        </div>
        <div className="text-[9px] flex justify-between">
          <span style={{ color: p.muted }}>Resend code in 00:24</span>
          <span className="font-bold" style={{ color: p.primary }}>Use Password</span>
        </div>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Verify &amp; Continue</KitButton>
    </div>
  );
}

export function HcHomeDashboardScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  const doc = s.sampleData.doctors?.[0];
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar
          title="Hello, Aarav Mehta"
          subtitle={s.brandName}
          wireframe={wireframe}
          right={<KitAvatar name="Aarav Mehta" size="sm" primary={p.primary} primarySoft={p.primarySoft} wireframe={wireframe} />}
        />
        <KitSearch placeholder="Search doctors, lab tests..." border={p.border} wireframe={wireframe} />
        <div className="p-3 rounded-2xl text-white space-y-1.5" style={{ backgroundColor: wireframe ? "#9CA3AF" : p.primary }}>
          <div className="flex justify-between text-[8px] opacity-90">
            <span>UPCOMING TELE-CONSULT</span>
            <span>{doc?.slot}</span>
          </div>
          <div className="font-bold text-xs">{doc?.name}</div>
          <div className="flex justify-between items-center">
            <span className="text-[9px]">{doc?.specialty} • {doc?.fee}</span>
            <span className="px-2 py-0.5 rounded-full bg-white text-[9px] font-bold flex items-center gap-1" style={{ color: p.primary }}>
              <Video className="w-2.5 h-2.5" /> Join
            </span>
          </div>
        </div>
        <KitCard border={p.border} wireframe={wireframe}>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[8px] text-slate-500 block">Resting Heart Rate</span>
              <strong className="text-xs">72 bpm • Stable</strong>
            </div>
            <KitSparkline primary={p.primary} />
          </div>
        </KitCard>
      </div>
      {bottomNav(0, wireframe)}
    </div>
  );
}

export function HcDoctorSearchScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  const doctors = s.sampleData.doctors || [];
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Find Specialists" subtitle="Surat • In-Clinic & Video" wireframe={wireframe} />
        <KitSearch placeholder="Cardiology, Physician..." border={p.border} wireframe={wireframe} />
        <KitFilters items={["All", "Physician", "Cardio", "Endo"]} activeIndex={0} primary={p.primary} primarySoft={p.primarySoft} border={p.border} wireframe={wireframe} />
        <div className="space-y-1.5">
          {doctors.map((d) => (
            <KitListItem
              key={d.name}
              title={d.name}
              subtitle={`${d.specialty} • ★ ${d.rating}`}
              border={p.border}
              wireframe={wireframe}
              leading={<KitAvatar name={d.name} size="sm" primary={p.primary} primarySoft={p.primarySoft} wireframe={wireframe} />}
              trailing={<span className="text-[9px] font-bold" style={{ color: p.primary }}>{d.fee}</span>}
            />
          ))}
        </div>
      </div>
      {bottomNav(1, wireframe)}
    </div>
  );
}

export function HcDoctorProfileScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  const doc = s.sampleData.doctors?.[0];
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <KitAvatar name={doc?.name || "Meera Nair"} size="lg" primary={p.primary} primarySoft={p.primarySoft} wireframe={wireframe} />
          <div>
            <h4 className="font-bold text-xs">{doc?.name}</h4>
            <span className="text-[9px]" style={{ color: p.muted }}>{doc?.specialty} • Surat</span>
            <div className="mt-1"><KitBadge label="Verified Clinic" tone="success" wireframe={wireframe} /></div>
          </div>
        </div>
        <KitCard border={p.border} wireframe={wireframe} className="space-y-1.5">
          <span className="text-[9px] font-bold block">Consultation Options</span>
          <div className="flex justify-between text-[10px]">
            <span>Video Consult (20 mins)</span>
            <strong style={{ color: p.primary }}>{doc?.fee}</strong>
          </div>
        </KitCard>
        <KitSvgMap label="Vesu Medical Center, Surat" primary={p.primary} />
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Select Time Slot →</KitButton>
    </div>
  );
}

export function HcSlotBookingScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Pick Date & Time" subtitle="Dr. Meera Nair" wireframe={wireframe} />
        <KitStepper steps={["Slot", "Details", "Pay"]} current={0} primary={p.primary} />
        <KitCard border={p.border} wireframe={wireframe}>
          <KitCalendar activeDay={14} primary={p.primary} primarySoft={p.primarySoft} />
        </KitCard>
        <KitTimeSlotPicker slots={["09:30 AM", "10:30 AM", "12:15 PM", "04:00 PM"]} selected={1} primary={p.primary} primarySoft={p.primarySoft} border={p.border} />
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Continue • ₹650</KitButton>
    </div>
  );
}

export function HcPaymentScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Review & Pay" subtitle="INR Transparent Summary" wireframe={wireframe} />
        <KitStepper steps={["Slot", "Details", "Pay"]} current={2} primary={p.primary} />
        <KitCard border={p.border} wireframe={wireframe} className="space-y-1 text-[10px]">
          <div className="flex justify-between"><span>Video Consult Fee</span><span>₹650</span></div>
          <div className="flex justify-between"><span>Platform Care Fee</span><span>₹0 (Waived)</span></div>
          <div className="flex justify-between font-bold pt-1 border-t" style={{ borderColor: p.border }}>
            <span>Total Payable</span><span style={{ color: p.primary }}>₹650</span>
          </div>
        </KitCard>
        <div className="space-y-1.5">
          <KitListItem title="UPI (GPay / PhonePe)" subtitle="Instant confirmation" border={p.border} wireframe={wireframe} />
          <KitListItem title="Insurance Cashless" subtitle="Policy verified" border={p.border} wireframe={wireframe} />
        </div>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Pay ₹650 Safely</KitButton>
    </div>
  );
}

export function HcConfirmationScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-4 text-center" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5 my-auto">
        <div className="w-10 h-10 rounded-full mx-auto bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h4 className="font-bold text-sm">Booking Confirmed</h4>
        <p className="text-[10px]" style={{ color: p.muted }}>Thu, 26 Nov 2026 • 10:30 AM</p>
        <KitCard border={p.border} wireframe={wireframe} className="text-left space-y-1 text-[10px]">
          <div className="font-bold">Dr. Meera Nair</div>
          <div style={{ color: p.muted }}>General Physician • Video Room Link Ready</div>
        </KitCard>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Add to Calendar</KitButton>
    </div>
  );
}

export function HcTelemedicineScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5 text-white" style={{ backgroundColor: wireframe ? "#D1D5DB" : "#0F292E" }}>
      <div className="flex justify-between items-center text-[9px]">
        <span className="px-2 py-0.5 rounded-full bg-white/15">● 12:40 Live</span>
        <span>Encrypted Call</span>
      </div>
      <div className="my-auto text-center space-y-2">
        <div className="w-16 h-16 rounded-full mx-auto bg-white/15 border-2 border-teal-300 flex items-center justify-center font-bold text-lg">
          MN
        </div>
        <div className="font-bold text-xs">Dr. Meera Nair</div>
        <div className="text-[9px] text-teal-200">Reviewing Lab Reports Together</div>
      </div>
      <div className="flex justify-center gap-3 pb-1">
        <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center"><Mic className="w-4 h-4" /></span>
        <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center"><MessageSquare className="w-4 h-4" /></span>
        <span className="w-9 h-9 rounded-full bg-rose-600 flex items-center justify-center"><PhoneOff className="w-4 h-4" /></span>
      </div>
    </div>
  );
}

export function HcLabReportsScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Lab Reports" subtitle="Plain-Language Ranges" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe} className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[11px]">HbA1c (Diabetes Panel)</span>
            <KitBadge label="Normal" tone="success" wireframe={wireframe} />
          </div>
          <div className="text-xs font-mono font-bold" style={{ color: p.primary }}>6.4%</div>
          <KitProgress value={64} primary={p.primary} />
          <span className="text-[8px] block" style={{ color: p.muted }}>Reference range: 4.0% – 6.5%</span>
        </KitCard>
        <KitListItem title="Vitamin D Total" subtitle="32 ng/mL • Optimal" border={p.border} wireframe={wireframe} />
        <KitListItem title="Complete Blood Count" subtitle="Updated 24 Nov 2026" border={p.border} wireframe={wireframe} />
      </div>
      {bottomNav(2, wireframe)}
    </div>
  );
}

export function HcInsuranceCardScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-3">
        <KitTopAppBar title="Health Insurance" subtitle="Family Floater Policy" wireframe={wireframe} />
        <div className="p-4 rounded-2xl text-white space-y-3" style={{ background: `linear-gradient(135deg, ${p.primary}, #0F292E)` }}>
          <div className="flex justify-between items-center text-[9px]">
            <span>MediCare Shield</span>
            <Shield className="w-4 h-4" />
          </div>
          <div className="font-mono text-xs font-bold tracking-wider">POL • 8842 • 1920</div>
          <div className="flex justify-between text-[9px] opacity-90">
            <span>Aarav + 2 Family</span>
            <span>Cashless Active</span>
          </div>
        </div>
        <KitListItem title="12 Network Hospitals in Surat" subtitle="Zero paperwork admission" border={p.border} wireframe={wireframe} />
      </div>
      {bottomNav(3, wireframe)}
    </div>
  );
}

export function HcFamilyMembersScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar
          title="Family Profiles"
          subtitle="Shared Care Network"
          wireframe={wireframe}
          right={<span className="p-1 rounded-full text-white" style={{ backgroundColor: p.primary }}><Plus className="w-3 h-3" /></span>}
        />
        <KitListItem title="Aarav Mehta (Self)" subtitle="Primary Caregiver" border={p.border} wireframe={wireframe} leading={<KitAvatar name="Aarav Mehta" size="sm" primary={p.primary} primarySoft={p.primarySoft} />} />
        <KitListItem title="Kavita Desai" subtitle="Mother • Diabetes reminders" border={p.border} wireframe={wireframe} leading={<KitAvatar name="Kavita Desai" size="sm" primary={p.primary} primarySoft={p.primarySoft} />} />
        <KitListItem title="Ramesh Mehta" subtitle="Father • Lab reports linked" border={p.border} wireframe={wireframe} leading={<KitAvatar name="Ramesh Mehta" size="sm" primary={p.primary} primarySoft={p.primarySoft} />} />
      </div>
      {bottomNav(3, wireframe)}
    </div>
  );
}

/* ---------------- WEB SCREENS (4) ---------------- */

export function HcWebPatientPortal({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="grid grid-cols-12 min-h-[320px] text-xs" style={{ backgroundColor: p.bg, color: p.ink }}>
      <aside className="col-span-3 p-4 bg-white border-r hidden sm:block" style={{ borderColor: p.border }}>
        <KitSidebarNav
          brand={s.brandName}
          activeIndex={0}
          primary={p.primary}
          primarySoft={p.primarySoft}
          items={[
            { label: "Patient Home", icon: <Home className="w-3.5 h-3.5" /> },
            { label: "Consults", icon: <Video className="w-3.5 h-3.5" /> },
            { label: "Lab Vault", icon: <FileText className="w-3.5 h-3.5" /> },
            { label: "Family", icon: <Users className="w-3.5 h-3.5" /> },
          ]}
        />
      </aside>
      <div className="col-span-12 sm:col-span-9 p-5 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm">Patient Portal • Aarav Mehta</h4>
          <KitChip label="Recreated concept" primary={p.primary} primarySoft={p.primarySoft} border={p.border} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <KitKpiCard label="Next Visit" value="Today, 10:30 AM" sub="Dr. Meera Nair" primary={p.primary} border={p.border} wireframe={wireframe} />
          <KitKpiCard label="Lab Reports" value="3 Verified" sub="HbA1c Normal" primary={p.primary} border={p.border} wireframe={wireframe} />
          <KitKpiCard label="Family Linked" value="3 Members" sub="Surat Network" primary={p.primary} border={p.border} wireframe={wireframe} />
        </div>
        <KitTable
          headers={["Patient", "Doctor", "Time", "Fee"]}
          rows={[
            ["Aarav Mehta", "Dr. Meera Nair", "10:30 AM", "₹650"],
            ["Kavita Desai", "Dr. Kavita Rao", "04:00 PM", "₹850"],
          ]}
          border={p.border}
        />
      </div>
    </div>
  );
}

export function HcWebDoctorDashboard() {
  const p = S().palette;
  return (
    <div className="p-5 space-y-4 text-xs" style={{ backgroundColor: p.bg, color: p.ink }}>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>Doctor Console • Concept</span>
          <h4 className="font-bold text-sm">Dr. Rohan Kulkarni — Daily Queue</h4>
        </div>
        <KitButton size="sm" primary={p.primary}>Start Next Video Call</KitButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <KitCard border={p.border} className="space-y-2">
          <span className="font-bold text-[11px] block">Active Patient Queue</span>
          <KitListItem title="Aarav Mehta" subtitle="10:30 AM • Sore throat & fever review" border={p.border} />
          <KitListItem title="Kavita Desai" subtitle="11:00 AM • HbA1c quarterly check" border={p.border} />
        </KitCard>
        <KitCard border={p.border} className="space-y-2">
          <span className="font-bold text-[11px] block">Consultation Volume Trend</span>
          <KitLineChart primary={p.primary} />
        </KitCard>
      </div>
    </div>
  );
}

export function HcWebAdminAnalytics() {
  const p = S().palette;
  return (
    <div className="p-5 space-y-4 text-xs" style={{ backgroundColor: p.bg, color: p.ink }}>
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-sm">Clinic Operations Analytics</h4>
        <span className="text-[10px]" style={{ color: p.muted }}>Thu, 26 Nov 2026</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <KitKpiCard label="Daily Consults" value="24 Slots" sub="Video + Clinic" primary={p.primary} border={p.border} />
        <KitKpiCard label="Departments" value="6 Active" sub="Surat Hub" primary={p.primary} border={p.border} />
        <KitKpiCard label="Standard Range" value="₹650–₹1,100" sub="Transparent INR" primary={p.primary} border={p.border} />
      </div>
      <KitCard border={p.border}>
        <span className="text-[10px] font-bold block mb-1">Weekly Consultations by Specialty</span>
        <KitBarChart primary={p.primary} primarySoft={p.primarySoft} />
      </KitCard>
    </div>
  );
}
