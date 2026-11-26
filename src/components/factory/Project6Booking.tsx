"use client";

import React from "react";
import { getScenario } from "@/data/scenarios";
import {
  KitButton,
  KitChip,
  KitBadge,
  KitAvatar,
  KitSearch,
  KitCard,
  KitListItem,
  KitBottomTabBar,
  KitTopAppBar,
  KitCalendar,
  KitTimeSlotPicker,
  KitKpiCard,
  KitTable,
} from "@/ui-kit";
import { Home, Calendar, User, CheckCircle2, Mail, Clock } from "lucide-react";

const S = () => getScenario("service-based-booking-platform");

const nav = (active: number, wireframe = false) => {
  const p = S().palette;
  return (
    <KitBottomTabBar
      activeIndex={active}
      primary={p.primary}
      border={p.border}
      wireframe={wireframe}
      items={[
        { label: "Explore", icon: <Home className="w-3 h-3" /> },
        { label: "Bookings", icon: <Calendar className="w-3 h-3" /> },
        { label: "Account", icon: <User className="w-3 h-3" /> },
      ]}
    />
  );
};

export function BkServiceListScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  const services = s.sampleData.services || [];
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2">
        <KitTopAppBar title={s.brandName} subtitle="Vesu & Citylight, Surat" wireframe={wireframe} />
        <KitSearch placeholder="Search physio, salon, spa..." border={p.border} wireframe={wireframe} />
        <div className="space-y-1.5">
          {services.map((srv) => (
            <KitListItem key={srv.title} title={srv.title} subtitle={`${srv.provider} • ${srv.duration}`} border={p.border} wireframe={wireframe} trailing={<span className="text-[9px] font-bold" style={{ color: p.primary }}>{srv.price}</span>} />
          ))}
        </div>
      </div>
      {nav(0, wireframe)}
    </div>
  );
}

export function BkProviderProfileScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <KitAvatar name="Dr. Kunal Shah" size="lg" primary={p.primary} primarySoft={p.primarySoft} wireframe={wireframe} />
          <div>
            <h4 className="font-bold text-xs">Dr. Kunal Shah</h4>
            <span className="text-[9px]" style={{ color: p.muted }}>Home Physiotherapy • Surat</span>
            <div className="mt-1"><KitBadge label="★ 4.9 Verified" tone="success" wireframe={wireframe} /></div>
          </div>
        </div>
        <KitCard border={p.border} wireframe={wireframe} className="space-y-1 text-[10px]">
          <div className="flex justify-between"><span>45-Min Home Visit</span><strong style={{ color: p.primary }}>₹899</strong></div>
          <div className="text-[9px]" style={{ color: p.muted }}>Transparent INR pricing • Free 1-tap reschedule</div>
        </KitCard>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Select Date &amp; Time</KitButton>
    </div>
  );
}

export function BkDateTimeScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2">
        <KitTopAppBar title="Choose Slot" subtitle="Sat, 28 Nov 2026" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe}>
          <KitCalendar activeDay={14} primary={p.primary} primarySoft={p.primarySoft} />
        </KitCard>
        <KitTimeSlotPicker slots={["10:00 AM", "11:30 AM", "04:00 PM", "06:30 PM"]} selected={1} primary={p.primary} primarySoft={p.primarySoft} border={p.border} />
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Continue to Checkout</KitButton>
    </div>
  );
}

export function BkCheckoutScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Booking Summary" subtitle="Neha Chawla" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe} className="space-y-1 text-[10px]">
          <div className="flex justify-between"><span>Home Physiotherapy</span><span>₹899</span></div>
          <div className="flex justify-between"><span>Visit Convenience</span><span>₹0</span></div>
          <div className="flex justify-between font-bold pt-1 border-t" style={{ borderColor: p.border }}>
            <span>Total</span><span style={{ color: p.primary }}>₹899</span>
          </div>
        </KitCard>
        <KitBadge label="Free reschedule up to 2 hrs before" tone="info" wireframe={wireframe} />
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Confirm Booking • ₹899</KitButton>
    </div>
  );
}

export function BkProviderWebAndEmails() {
  const s = S();
  const p = s.palette;
  return (
    <div className="p-5 space-y-5 text-xs" style={{ backgroundColor: p.bg, color: p.ink }}>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName} • Provider Portal &amp; Emails</span>
          <h4 className="font-bold text-sm">Studio Calendar + HTML Confirmation Email</h4>
        </div>
        <KitBadge label="Concept" tone="info" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Provider Dashboard Table */}
        <div className="md:col-span-7 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <KitKpiCard label="Confirmed Today" value="6 Bookings" sub="Vesu & Citylight" primary={p.primary} border={p.border} />
            <KitKpiCard label="Day Total (Sample)" value="₹7,294" sub="All INR Settled" primary={p.primary} border={p.border} />
          </div>
          <KitTable headers={["Service", "Provider", "Duration", "Rate"]} rows={(s.sampleData.services || []).map((srv) => [srv.title, srv.provider, srv.duration, srv.price])} border={p.border} />
        </div>

        {/* HTML Confirmation Email Layout */}
        <div className="md:col-span-5 rounded-2xl bg-white border overflow-hidden shadow-soft" style={{ borderColor: p.border }}>
          <div className="px-4 py-2.5 text-white flex items-center justify-between" style={{ backgroundColor: p.primary }}>
            <span className="font-bold text-[11px] flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Booking Confirmed</span>
            <span className="text-[9px] opacity-85">HTML Email</span>
          </div>
          <div className="p-4 space-y-2 text-[10px]">
            <div className="flex items-center gap-1.5 font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4" /> Hi Neha, your slot is reserved!
            </div>
            <p style={{ color: p.muted }}>
              <strong>Service:</strong> Home Physiotherapy (₹899)<br />
              <strong>Time:</strong> Sat, 28 Nov • 11:30 AM<br />
              <strong>Provider:</strong> Dr. Kunal Shah
            </p>
            <div className="pt-2 flex gap-2">
              <KitButton size="sm" primary={p.primary}>Reschedule</KitButton>
              <KitButton size="sm" variant="secondary" border={p.border}>Calendar .ics</KitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
