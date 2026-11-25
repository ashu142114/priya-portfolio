"use client";

import React from "react";
import { AlertCircle, AlertTriangle } from "lucide-react";

interface LegacyScreenProps {
  className?: string;
}

export function LegacyHealthcareScreen({ className = "" }: LegacyScreenProps) {
  return (
    <div className={`p-3 bg-[#E5E9F0] text-[#1E293B] font-sans text-[11px] leading-tight space-y-2 select-none ${className}`}>
      {/* Harsh header */}
      <div className="bg-[#1E40AF] text-white p-2 rounded flex justify-between items-center text-[10px]">
        <span className="font-bold">PATIENT_PORTAL_V1.2</span>
        <span>STATUS: ACTIVE</span>
      </div>

      <div className="p-1.5 bg-yellow-100 border border-yellow-400 text-yellow-900 text-[9px] flex items-center gap-1">
        <AlertTriangle className="w-3 h-3 shrink-0 text-yellow-600" />
        <span>NOTE: DOCTOR MAY CANCEL IF YOU ARRIVE 5 MINS LATE.</span>
      </div>

      {/* Cramped table-like rows */}
      <div className="border border-gray-400 bg-white p-2 space-y-1">
        <div className="font-bold text-blue-900 border-b pb-0.5">Appointment Details</div>
        <div>Patient: Patel, P. (ID: 98124)</div>
        <div>Doctor: Dr. A. Sharma (MD, MBBS, DNB, FACC)</div>
        <div>Date/Time: 26/11/2026 - 11:30:00 AM IST</div>
        <div>Location: Main Wing, Room 302B, 3rd Floor, Surat Hospital</div>
      </div>

      {/* Cluttered competing CTAs */}
      <div className="grid grid-cols-2 gap-1 pt-1">
        <button className="bg-green-700 text-white p-1 text-[9px] font-bold rounded">CONFIRM APPOINTMENT</button>
        <button className="bg-red-700 text-white p-1 text-[9px] font-bold rounded">CANCEL IMMEDIATELY</button>
        <button className="bg-blue-800 text-white p-1 text-[9px] font-bold rounded">RESCHEDULE DATE</button>
        <button className="bg-gray-700 text-white p-1 text-[9px] font-bold rounded">DOWNLOAD PDF BILL</button>
      </div>

      <div className="text-[8px] text-gray-500 pt-1 text-center">
        Recreated legacy example for comparative case study
      </div>
    </div>
  );
}

export function LegacyWomensHealthScreen({ className = "" }: LegacyScreenProps) {
  return (
    <div className={`p-3 bg-[#FFF1F2] text-[#881337] font-sans text-[11px] space-y-2 select-none ${className}`}>
      <div className="bg-[#9F1239] text-white p-2 rounded font-bold text-center text-xs">
        CYCLE_CALCULATOR_SYS
      </div>

      <div className="bg-white border border-red-300 p-2 space-y-1 text-[10px]">
        <div className="font-bold text-red-900">INPUT PERIOD DATES MANUALLY:</div>
        <div>Last Period Start: [ 2026-10-06 ]</div>
        <div>Cycle Duration (approx): [ 28 ] days</div>
        <div>Luteal Length (mandatory): [ 14 ] days</div>
      </div>

      <div className="p-2 bg-red-100 border border-red-400 text-red-950 text-[9px]">
        WARNING: Cycle predictions might be incorrect if irregular symptoms or PCOD present. Consult doctor.
      </div>

      <div className="text-[8px] text-gray-500 pt-1 text-center">
        Recreated legacy example for comparative case study
      </div>
    </div>
  );
}

export function LegacyAiScreen({ className = "" }: LegacyScreenProps) {
  return (
    <div className={`p-3 bg-black text-[#22C55E] font-mono text-[10px] space-y-2 select-none ${className}`}>
      <div className="border-b border-[#22C55E]/40 pb-1">
        SYSTEM_DIAG_BOT_v0.9.1 [CLI MODE]
      </div>
      <div className="space-y-1 text-[9px]">
        <div>&gt; USER QUERY: HEADACHE EYE STRAIN</div>
        <div>&gt; ANALYZING SYMPTOM DATABASE (54,201 NODES)...</div>
        <div>&gt; RESULT: MATCH 78% TENSION HEADACHE, MATCH 62% ASTIGMATISM.</div>
        <div>&gt; ADVICE: RECOMMEND PHYSICAL EXAMINATION WITHIN 72 HOURS.</div>
      </div>
      <div className="bg-gray-900 border border-gray-700 p-1.5 text-gray-400 text-[8px]">
        DISCLAIMER: SYSTEM IS AN EXPERIMENTAL SCRIPT. NO WARRANTY PROVIDED.
      </div>
      <div className="text-[8px] text-gray-500 pt-1 text-center font-sans">
        Recreated legacy example for comparative case study
      </div>
    </div>
  );
}

export function LegacyDietScreen({ className = "" }: LegacyScreenProps) {
  return (
    <div className={`p-3 bg-white text-gray-900 font-sans text-[10px] space-y-2 border border-gray-300 select-none ${className}`}>
      <div className="bg-gray-800 text-white p-1.5 font-bold text-center">
        CALORIE_SPREADSHEET_LOG
      </div>
      <table className="w-full border-collapse border border-gray-300 text-[9px]">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-1">Item</th>
            <th className="border p-1">Cal</th>
            <th className="border p-1">Fat</th>
            <th className="border p-1">Prot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-1">Meal 1</td>
            <td className="border p-1">450</td>
            <td className="border p-1">18g</td>
            <td className="border p-1">12g</td>
          </tr>
          <tr>
            <td className="border p-1">Meal 2</td>
            <td className="border p-1">620</td>
            <td className="border p-1">24g</td>
            <td className="border p-1">28g</td>
          </tr>
        </tbody>
      </table>
      <div className="text-[8px] text-gray-500 pt-1 text-center">
        Recreated legacy example for comparative case study
      </div>
    </div>
  );
}

export function LegacyInvitationScreen({ className = "" }: LegacyScreenProps) {
  return (
    <div className={`p-3 bg-gray-100 text-gray-800 font-sans text-[10px] space-y-2 select-none ${className}`}>
      <div className="bg-gray-700 text-white p-1.5 font-bold text-center">
        INVITE_PDF_GENERATOR
      </div>
      <div className="border border-gray-300 bg-white p-2 text-center text-gray-400 text-[9px]">
        [STATIC IMAGE PLACEHOLDER: CARD.JPG (4.8MB)]
        <div className="text-gray-700 mt-1">RSVPs: Please email or SMS host directly.</div>
      </div>
      <div className="text-[8px] text-gray-500 pt-1 text-center">
        Recreated legacy example for comparative case study
      </div>
    </div>
  );
}

export function LegacyBookingScreen({ className = "" }: LegacyScreenProps) {
  return (
    <div className={`p-3 bg-[#F1F5F9] text-[#0F172A] font-sans text-[10px] space-y-2 select-none ${className}`}>
      <div className="bg-[#0369A1] text-white p-2 font-bold flex justify-between">
        <span>BOOKING_STEP_4_OF_7</span>
        <span>TIMEOUT: 04:32</span>
      </div>
      <div className="p-2 bg-white border border-gray-300 space-y-1">
        <div className="font-bold">Select Sub-package Add-on:</div>
        <div>[x] Service Charge ($15)</div>
        <div>[ ] Weekend Premium ($25)</div>
        <div>[ ] Priority Specialist Access ($40)</div>
      </div>
      <div className="text-[8px] text-gray-500 pt-1 text-center">
        Recreated legacy example for comparative case study
      </div>
    </div>
  );
}
