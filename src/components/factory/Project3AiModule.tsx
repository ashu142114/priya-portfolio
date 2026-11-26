"use client";

import React from "react";
import { getScenario } from "@/data/scenarios";
import {
  KitButton,
  KitChip,
  KitBadge,
  KitAvatar,
  KitCard,
  KitListItem,
  KitTopAppBar,
  KitTable,
  KitKpiCard,
  KitSearch,
} from "@/ui-kit";
import { Sparkles, Mic, Send, AlertCircle, Video, Clock, CheckCircle2 } from "lucide-react";

const S = () => getScenario("ai-healthcare-module");

export function AiChatBubblesScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title={s.brandName} subtitle="Guided Triage" wireframe={wireframe} right={<KitBadge label="Not a diagnosis" tone="warn" wireframe={wireframe} />} />
        <div className="ml-6 p-2.5 rounded-2xl rounded-tr-sm text-white text-[10px]" style={{ backgroundColor: wireframe ? "#9CA3AF" : p.primary }}>
          Mild sore throat and low fever since yesterday evening.
        </div>
        <div className="mr-4 p-2.5 rounded-2xl rounded-tl-sm bg-white border text-[10px]" style={{ borderColor: p.border }}>
          Thank you, Kabir. Are you experiencing difficulty swallowing or body ache?
        </div>
      </div>
      <div className="p-2 rounded-full bg-white border flex justify-between items-center text-[9px]" style={{ borderColor: p.border }}>
        <span className="pl-2 text-slate-400">Type or tap quick reply...</span>
        <span className="w-6 h-6 rounded-full text-white flex items-center justify-center" style={{ backgroundColor: p.primary }}><Send className="w-3 h-3" /></span>
      </div>
    </div>
  );
}

export function AiQuickRepliesScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Quick Symptom Chips" subtitle="Low-Cognitive Input" wireframe={wireframe} />
        <p className="text-[10px]" style={{ color: p.muted }}>Select all that apply so we can route you to the right specialist:</p>
        <div className="flex flex-wrap gap-1.5">
          {["Mild Fever", "Sore Throat", "Body Ache", "Fatigue", "No Cough"].map((t, i) => (
            <KitChip key={t} label={t} active={i < 2} primary={p.primary} primarySoft={p.primarySoft} border={p.border} wireframe={wireframe} />
          ))}
        </div>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Continue Triage →</KitButton>
    </div>
  );
}

export function AiTypingStateScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-3">
        <KitTopAppBar title="Asha Assistant" subtitle="Analyzing Context" wireframe={wireframe} />
        <div className="p-3 rounded-2xl bg-white border flex items-center gap-2 w-24" style={{ borderColor: p.border }}>
          <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: p.primary }} />
          <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: p.primary, animationDelay: "0.1s" }} />
          <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: p.primary, animationDelay: "0.2s" }} />
        </div>
        <span className="text-[9px] block" style={{ color: p.muted }}>Preparing plain-language summary...</span>
      </div>
      <div className="text-[8px] text-center text-slate-400">Always reviewed by a human physician</div>
    </div>
  );
}

export function AiTriageResultScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Triage Summary" subtitle="Ready for Doctor" wireframe={wireframe} />
        <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
          <div className="flex justify-between text-[9px] font-bold text-emerald-900">
            <span>Suggested Department</span>
            <span>₹500</span>
          </div>
          <div className="font-bold text-xs text-slate-900">General Physician Video Consult</div>
          <div className="text-[9px] text-emerald-800">Next available: Today, 10:30 AM</div>
        </div>
        <KitCard border={p.border} wireframe={wireframe} className="text-[10px] space-y-1">
          <span className="font-bold block">Auto-Attached Notes</span>
          <p style={{ color: p.muted }}>• Duration: 18 hours • Mild fever &amp; throat soreness</p>
        </KitCard>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Book Consult • ₹500</KitButton>
    </div>
  );
}

export function AiDoctorHandoffScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Doctor Handoff" subtitle="Seamless Context" wireframe={wireframe} />
        <KitListItem title="Dr. Meera Nair" subtitle="General Physician • Joined" border={p.border} wireframe={wireframe} leading={<KitAvatar name="Meera Nair" size="sm" primary={p.primary} primarySoft={p.primarySoft} />} trailing={<Video className="w-3.5 h-3.5 text-emerald-600" />} />
        <KitCard border={p.border} wireframe={wireframe} className="space-y-1 text-[10px]">
          <span className="font-bold flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> AI Summary Shared</span>
          <p style={{ color: p.muted }}>You don&apos;t need to repeat your symptoms. Dr. Nair has your triage card.</p>
        </KitCard>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Enter Video Room</KitButton>
    </div>
  );
}

export function AiHistoryScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Past Sessions" subtitle="Conversation Vault" wireframe={wireframe} />
        <KitSearch placeholder="Search symptom logs..." border={p.border} wireframe={wireframe} />
        <KitListItem title="Sore Throat Check" subtitle="26 Nov • Routed to Physician" border={p.border} wireframe={wireframe} />
        <KitListItem title="HbA1c Lab Term Guide" subtitle="18 Nov • Plain-language note" border={p.border} wireframe={wireframe} />
      </div>
      <div className="text-[8px] text-center" style={{ color: p.muted }}>Private &amp; exportable</div>
    </div>
  );
}

export function AiVoiceInputScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-4 text-center" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>Voice Accessibility</span>
      <div className="my-auto space-y-3">
        <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white shadow-soft" style={{ backgroundColor: p.primary }}>
          <Mic className="w-6 h-6" />
        </div>
        <div className="font-bold text-xs">Listening in English / Hindi / Gujarati...</div>
        <p className="text-[10px]" style={{ color: p.muted }}>&ldquo;I have had a mild headache since morning&rdquo;</p>
      </div>
      <KitButton variant="secondary" border={p.border} wireframe={wireframe} className="w-full">Tap to Stop</KitButton>
    </div>
  );
}

export function AiLabExplainerScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Plain-Language Lab Aid" subtitle="For Sunita Joshi (46)" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe} className="space-y-1.5 text-[10px]">
          <div className="flex justify-between font-bold">
            <span>Vitamin D (25-OH)</span>
            <span className="text-emerald-700">32 ng/mL</span>
          </div>
          <p style={{ color: p.muted }}>
            This value falls within the standard reference range. Discuss routine sun exposure or supplements during your next visit.
          </p>
        </KitCard>
      </div>
      <KitBadge label="Educational Summary Only" tone="info" wireframe={wireframe} />
    </div>
  );
}

export function AiEmergencyAlertScreen({ wireframe = false }: { wireframe?: boolean }) {
  return (
    <div className="flex flex-col justify-between h-full p-4 bg-rose-50 text-rose-950">
      <div className="space-y-2.5 my-auto text-center">
        <AlertCircle className="w-8 h-8 text-rose-600 mx-auto" />
        <h4 className="font-bold text-sm">Urgent Care Escalation</h4>
        <p className="text-[10px] text-rose-800">
          When high-risk symptoms are detected, AI steps aside immediately and highlights direct clinic emergency contact.
        </p>
      </div>
      <KitButton variant="destructive" className="w-full">Call Urgent Helpline</KitButton>
    </div>
  );
}

export function AiWebAssistantAdmin() {
  const s = S();
  const p = s.palette;
  return (
    <div className="p-5 space-y-4 text-xs" style={{ backgroundColor: p.bg, color: p.ink }}>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName} • Admin Review</span>
          <h4 className="font-bold text-sm">Conversation Quality &amp; Triage Queue</h4>
        </div>
        <KitBadge label="Human-in-the-loop" tone="success" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <KitKpiCard label="Active Sessions" value="14 Queued" sub="Physician Review" primary={p.primary} border={p.border} />
        <KitKpiCard label="Handoff Ready" value="Instant" sub="Structured Notes" primary={p.primary} border={p.border} />
        <KitKpiCard label="Languages" value="EN / HI / GU" sub="Accessible" primary={p.primary} border={p.border} />
      </div>
      <KitTable
        headers={["User", "Query Topic", "Routed To", "Status"]}
        rows={[
          ["Kabir B.", "Sore throat & fever", "General Physician", "Booked ₹500"],
          ["Sunita J.", "Vitamin D lab note", "Endocrinologist", "Reviewed"],
        ]}
        border={p.border}
      />
    </div>
  );
}
