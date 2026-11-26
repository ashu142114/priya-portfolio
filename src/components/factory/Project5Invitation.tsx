"use client";

import React from "react";
import { getScenario } from "@/data/scenarios";
import {
  KitButton,
  KitChip,
  KitBadge,
  KitCard,
  KitListItem,
  KitTopAppBar,
  KitKpiCard,
  KitTable,
  KitSvgMap,
} from "@/ui-kit";
import { Share2, Type, Palette, Sparkles, Check, MapPin } from "lucide-react";

const S = () => getScenario("invitation-app");

export function InvTemplateGalleryScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Invite Templates" subtitle={s.brandName} wireframe={wireframe} />
        <div className="flex gap-1.5">
          {["Wedding", "Birthday", "Housewarming"].map((t, i) => (
            <KitChip key={t} label={t} active={i === 0} primary={p.primary} primarySoft={p.primarySoft} border={p.border} wireframe={wireframe} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Royal Arch", "Minimal Foil", "Floral Arch", "Modern Serif"].map((tpl, i) => (
            <div key={tpl} className="p-3 rounded-xl bg-white border text-center space-y-1" style={{ borderColor: i === 0 ? p.primary : p.border }}>
              <div className="h-12 rounded-lg flex items-center justify-center font-serif italic text-xs" style={{ backgroundColor: p.primarySoft, color: p.primary }}>
                Utsav
              </div>
              <span className="text-[9px] font-bold block">{tpl}</span>
            </div>
          ))}
        </div>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Customize Royal Arch</KitButton>
    </div>
  );
}

export function InvEditorCanvasScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Card Editor" subtitle="Live Customization" wireframe={wireframe} />
        <div className="p-4 rounded-2xl bg-white border-2 text-center space-y-1 shadow-xs" style={{ borderColor: p.primary }}>
          <span className="text-[8px] uppercase tracking-widest font-bold" style={{ color: p.accent }}>Save The Date</span>
          <h5 className="font-serif italic font-bold text-base">Ishita &amp; Karan</h5>
          <p className="text-[9px]" style={{ color: p.muted }}>12–13 Dec 2026 • Surat</p>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-[9px] text-center">
          <div className="p-2 rounded-xl bg-white border flex flex-col items-center gap-1" style={{ borderColor: p.border }}><Type className="w-3 h-3" /> Fonts</div>
          <div className="p-2 rounded-xl bg-white border flex flex-col items-center gap-1" style={{ borderColor: p.border }}><Palette className="w-3 h-3" /> Foil</div>
          <div className="p-2 rounded-xl bg-white border flex flex-col items-center gap-1" style={{ borderColor: p.border }}><MapPin className="w-3 h-3" /> Venue</div>
        </div>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Preview &amp; Share</KitButton>
    </div>
  );
}

export function InvGuestListScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2">
        <KitTopAppBar title="Guest RSVP List" subtitle="218 Confirmed" wireframe={wireframe} />
        <KitListItem title="Mehta Family (4 Guests)" subtitle="Sangeet + Wedding • Attending" border={p.border} wireframe={wireframe} trailing={<KitBadge label="Confirmed" tone="success" wireframe={wireframe} />} />
        <KitListItem title="Shah Family (2 Guests)" subtitle="Wedding Dinner • Pending" border={p.border} wireframe={wireframe} trailing={<KitBadge label="Pending" tone="warn" wireframe={wireframe} />} />
        <KitListItem title="Patel Family (3 Guests)" subtitle="Sangeet Evening • Attending" border={p.border} wireframe={wireframe} trailing={<KitBadge label="Confirmed" tone="success" wireframe={wireframe} />} />
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Send Gentle Reminder</KitButton>
    </div>
  );
}

export function InvShareSheetScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Share Invitation" subtitle="Digital + Print Formats" wireframe={wireframe} />
        <KitListItem title="Share WhatsApp Preview Card" subtitle="Custom thumbnail + RSVP link" border={p.border} wireframe={wireframe} trailing={<Share2 className="w-3.5 h-3.5" style={{ color: p.primary }} />} />
        <KitListItem title="Download Print PDF (CMYK)" subtitle="A5 Card + 3mm Bleed" border={p.border} wireframe={wireframe} />
        <KitSvgMap label="Courtyard Pavilion, Surat" primary={p.primary} />
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Copy RSVP Link</KitButton>
    </div>
  );
}

export function InvWebRsvpAndPrintedCards() {
  const s = S();
  const p = s.palette;
  return (
    <div className="p-5 space-y-5 text-xs" style={{ backgroundColor: p.bg, color: p.ink }}>
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div>
          <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName} • Web RSVP &amp; Print Suite</span>
          <h4 className="font-serif font-bold text-sm">Digital RSVP Page + Printed Card Designs</h4>
        </div>
        <KitBadge label="Concept" tone="info" />
      </div>

      {/* Printed Wedding + Birthday Invitation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-white border-2 text-center space-y-2 shadow-soft" style={{ borderColor: p.primary }}>
          <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: p.accent }}>Printed Wedding Suite</span>
          <h5 className="font-serif italic font-bold text-xl">Ishita &amp; Karan</h5>
          <p className="text-[10px]" style={{ color: p.muted }}>12–13 Dec 2026 • Courtyard Pavilion, Surat</p>
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold text-white" style={{ backgroundColor: p.primary }}>
            RSVP Online
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 text-center space-y-2 shadow-soft">
          <span className="text-[9px] uppercase tracking-widest font-bold text-rose-700">Milestone Celebration Invite</span>
          <h5 className="font-serif font-bold text-xl text-plum">50th Anniversary Dinner</h5>
          <p className="text-[10px] text-plum-600">Hosted by Pooja Malhotra • Saturday 7:30 PM</p>
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold bg-plum text-white">
            Confirm Attendance
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <KitKpiCard label="Sangeet RSVPs" value="142 Guests" sub="12 Dec • 6:30 PM" primary={p.primary} border={p.border} />
        <KitKpiCard label="Wedding RSVPs" value="218 Guests" sub="13 Dec • 7:00 PM" primary={p.primary} border={p.border} />
        <KitKpiCard label="Print Export" value="A5 + Bleed" sub="Canva & Figma" primary={p.primary} border={p.border} />
      </div>

      <KitTable headers={["Event", "Date", "Venue", "Status"]} rows={(s.sampleData.events || []).map((e) => [e.title, e.date, e.venue, e.rsvpCount])} border={p.border} />
    </div>
  );
}
