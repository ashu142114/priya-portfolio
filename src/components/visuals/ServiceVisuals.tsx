"use client";

import React from "react";
import { PhoneFrame, BrowserFrame } from "@/components/visuals/DeviceFrame";
import {
  Calendar,
  Clock,
  Video,
  User,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Heart,
  QrCode,
  Tag,
  Search,
} from "lucide-react";

export function ServiceVisualMockup({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    case "ui-ux-design":
      return (
        <div className="w-full h-full min-h-[300px] rounded-3xl bg-gradient-to-br from-cream-100 via-white to-blush-100 p-5 border border-blush-200/90 flex flex-col justify-between shadow-soft-sm">
          <div className="flex justify-between items-center pb-3 border-b border-blush-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="text-xs font-serif font-bold text-plum">Telemedicine Patient Hub</span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
              Live Flow
            </span>
          </div>

          {/* Interactive Card */}
          <div className="p-4 rounded-2xl bg-white border border-blush-200 shadow-soft-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blush-200 flex items-center justify-center font-bold text-rose-700 text-xs">
                DR
              </div>
              <div>
                <div className="text-xs font-bold text-plum">Dr. Ananya Shah</div>
                <div className="text-[10px] text-plum-500">Cardiology & Preventive Care</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-plum-600 bg-cream-50 p-2 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span>Today at 10:30 AM (45 min consult)</span>
            </div>
            <button className="w-full py-2 rounded-xl bg-rose-500 text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 shadow-soft">
              <Video className="w-3.5 h-3.5" />
              <span>Join Video Room</span>
            </button>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-plum-500 pt-2">
            <span>Figma Component System</span>
            <span className="text-rose-700 font-bold">Auto-Layout 5.0</span>
          </div>
        </div>
      );

    case "mobile-app-design":
      return (
        <div className="w-full flex justify-center py-2">
          <PhoneFrame time="09:41" className="scale-90 sm:scale-95 shadow-soft-xl">
            <div className="p-4 space-y-3 bg-cream-50 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-[10px] text-plum-500 block">Welcome Back</span>
                    <span className="font-serif font-bold text-xs text-plum">Daily Health Overview</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blush-200 flex items-center justify-center text-[10px] font-bold text-rose-700">
                    PL
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-blush-200 shadow-soft-sm mb-2.5">
                  <span className="text-[10px] font-bold text-rose-700 block mb-1">Appointment Confirmed</span>
                  <div className="text-[11px] font-bold text-plum">Dr. Vikram Mehra</div>
                  <div className="text-[9px] text-plum-500">General Physician • 11:00 AM</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-blush-50 border border-blush-200">
                    <span className="text-[9px] text-plum-500 block">Vitals</span>
                    <span className="text-xs font-bold text-plum">98 bpm • Normal</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-lilac-50 border border-lilac-200">
                    <span className="text-[9px] text-plum-500 block">Prescriptions</span>
                    <span className="text-xs font-bold text-plum">2 Active Vault</span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Mock */}
              <div className="pt-2 border-t border-blush-200 flex justify-around text-plum-400">
                <span className="text-[10px] font-bold text-rose-700">Home</span>
                <span className="text-[10px]">Doctors</span>
                <span className="text-[10px]">Records</span>
                <span className="text-[10px]">Profile</span>
              </div>
            </div>
          </PhoneFrame>
        </div>
      );

    case "website-design":
      return (
        <BrowserFrame url="medflow.health" title="Responsive Web Portal" className="w-full">
          <div className="p-6 bg-gradient-to-br from-cream-100 to-white space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-serif font-bold text-sm text-plum">MedFlow SaaS</span>
              <div className="flex gap-2 text-[10px] text-plum-600 font-medium">
                <span>Solutions</span>
                <span>Specialists</span>
                <span>Contact</span>
              </div>
            </div>
            <div className="py-4 text-center space-y-2 max-w-sm mx-auto">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blush-100 text-rose-700">
                Healthcare Operating System
              </span>
              <h4 className="font-serif font-bold text-lg text-plum leading-tight">
                Modern Healthcare Management Without The Chaos
              </h4>
              <p className="text-[11px] text-plum-600">
                Intuitive appointment booking, lab synchronization, and telehealth in one calm interface.
              </p>
            </div>
          </div>
        </BrowserFrame>
      );

    case "product-redesign":
      return (
        <div className="w-full h-full min-h-[300px] rounded-3xl bg-cream-100 p-5 border border-blush-200 space-y-4 shadow-soft-sm">
          <div className="flex justify-between items-center pb-2 border-b border-blush-200">
            <span className="text-xs font-serif font-bold text-plum">Before vs After Redesign</span>
            <span className="text-[10px] font-mono text-rose-700 font-bold uppercase">Morph Analysis</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Before (Cluttered Legacy) */}
            <div className="p-3 rounded-2xl bg-gray-100 border border-gray-300 opacity-80 text-[10px] space-y-1.5">
              <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[9px]">
                BEFORE (Legacy)
              </span>
              <div className="font-mono text-gray-700 line-through">Dr. Search Portal v1.2</div>
              <div className="p-1.5 bg-white border border-gray-400 text-gray-500 text-[8px]">
                [!] 14 Nested Fields Required
                <br />
                Tiny 28px tap target
              </div>
            </div>

            {/* After (Clean Modern) */}
            <div className="p-3 rounded-2xl bg-white border border-rose-300 shadow-soft text-[10px] space-y-1.5">
              <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[9px]">
                AFTER (Redesigned)
              </span>
              <div className="font-serif font-bold text-plum">1-Tap Care Finder</div>
              <div className="p-1.5 bg-cream-50 border border-blush-200 rounded-xl text-plum text-[8px] space-y-1">
                <div>✓ 3-Step booking funnel</div>
                <div>✓ 48px comfortable targets</div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-plum-500 text-center font-mono pt-1">
            Eliminated cognitive friction and navigation dead-ends
          </div>
        </div>
      );

    case "logo-design":
      return (
        <div className="w-full h-full min-h-[300px] rounded-3xl bg-white p-5 border border-blush-200 flex flex-col justify-between shadow-soft-sm">
          <div className="flex justify-between items-center pb-2 border-b border-blush-100">
            <span className="text-xs font-serif font-bold text-plum">Geometric Vector Mark</span>
            <span className="text-[10px] font-mono text-rose-700 font-bold">1:1.618 Grid</span>
          </div>

          {/* SVG Geometry Canvas */}
          <div className="w-full h-36 rounded-2xl bg-cream-50 relative flex items-center justify-center border border-blush-200 overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 200 120"
              fill="none"
              stroke="#D9577B"
              strokeWidth="0.8"
            >
              <circle cx="100" cy="60" r="45" strokeDasharray="2 2" />
              <circle cx="100" cy="60" r="28" strokeDasharray="2 2" />
              <line x1="10" y1="60" x2="190" y2="60" strokeDasharray="2 2" />
            </svg>
            <div className="w-16 h-16 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-soft relative z-10">
              CF
            </div>
          </div>

          {/* Colorway Pills */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-1.5">
              <span className="w-5 h-5 rounded-full bg-rose-500 shadow-xs" />
              <span className="w-5 h-5 rounded-full bg-plum-900 shadow-xs" />
              <span className="w-5 h-5 rounded-full bg-cream-200 border border-black/10" />
            </div>
            <span className="text-[10px] font-mono text-plum-500">Dark / Light / Mono</span>
          </div>
        </div>
      );

    case "brand-identity-kit":
      return (
        <div className="w-full h-full min-h-[300px] rounded-3xl bg-gradient-to-br from-cream-100 to-blush-100 p-5 border border-blush-200 flex flex-col justify-between shadow-soft-sm">
          <div className="flex justify-between items-center pb-2 border-b border-blush-200">
            <span className="text-xs font-serif font-bold text-plum">3D Brand Stationery Kit</span>
            <span className="text-[10px] font-mono text-rose-700 font-bold uppercase">Collateral</span>
          </div>

          {/* 3D Tilted Card Preview */}
          <div className="relative h-36 flex items-center justify-center">
            <div className="absolute w-48 h-28 rounded-2xl bg-plum-900 text-white p-3 shadow-soft-lg transform -rotate-6 -translate-x-3 text-xs flex flex-col justify-between">
              <span className="font-serif font-bold text-[11px] text-rose-300">CareFlow Health</span>
              <span className="text-[8px] font-mono text-white/60">Official Stationery</span>
            </div>
            <div className="relative z-10 w-48 h-28 rounded-2xl bg-white text-plum p-3 shadow-soft-xl border border-blush-200 transform rotate-3 translate-x-2 text-xs flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-serif font-bold text-[11px]">Priya K. Lakkad</div>
                  <div className="text-[8px] text-rose-700 font-semibold">Product Designer</div>
                </div>
                <div className="w-5 h-5 rounded-md bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center">
                  PK
                </div>
              </div>
              <div className="text-[8px] font-mono text-plum-400">Surat, Gujarat, India</div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-plum-500 pt-2 border-t border-blush-200">
            <span>Foil Debossed Cards</span>
            <span>A4 Letterhead • DL Envelope</span>
          </div>
        </div>
      );

    case "advertising-and-marketing-creatives":
      return (
        <div className="w-full h-full min-h-[300px] rounded-3xl bg-white p-5 border border-blush-200 flex flex-col justify-between shadow-soft-sm">
          <div className="flex justify-between items-center pb-2 border-b border-blush-100">
            <span className="text-xs font-serif font-bold text-plum">Marketing Collateral Suite</span>
            <span className="text-[10px] font-mono text-rose-700 font-bold">Print & Digital</span>
          </div>

          {/* Tri-Fold Brochure Mockup */}
          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="h-32 rounded-xl bg-cream-100 border border-blush-200 p-2 text-center flex flex-col justify-between text-[8px]">
              <span className="font-serif font-bold text-plum">Panel 01</span>
              <div className="w-6 h-6 mx-auto rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[8px]">
                01
              </div>
              <span className="text-plum-500">Overview</span>
            </div>
            <div className="h-32 rounded-xl bg-blush-100 border border-blush-300 p-2 text-center flex flex-col justify-between text-[8px]">
              <span className="font-serif font-bold text-rose-800">Panel 02</span>
              <div className="space-y-1">
                <div className="h-1 bg-rose-400 rounded-sm" />
                <div className="h-1 bg-rose-300 rounded-sm" />
              </div>
              <span className="text-rose-700 font-bold">Services</span>
            </div>
            <div className="h-32 rounded-xl bg-cream-100 border border-blush-200 p-2 text-center flex flex-col justify-between text-[8px]">
              <span className="font-serif font-bold text-plum">Panel 03</span>
              <QrCode className="w-6 h-6 mx-auto text-plum-600" />
              <span className="text-plum-500">Contact</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-plum-500 text-center">
            Banners • Glossy Flyers • Brochures • Business Cards
          </div>
        </div>
      );

    case "invitation-and-social-design":
    default:
      return (
        <div className="w-full h-full min-h-[300px] rounded-3xl bg-gradient-to-br from-cream-100 via-rose-50 to-lilac-100 p-5 border border-blush-200 flex flex-col justify-between shadow-soft-sm">
          <div className="flex justify-between items-center pb-2 border-b border-blush-200">
            <span className="text-xs font-serif font-bold text-plum">Luxury Event & Social Kit</span>
            <span className="text-[10px] font-mono text-rose-700 font-bold uppercase">Canva & Figma</span>
          </div>

          {/* Invitation Card Mockup */}
          <div className="p-4 rounded-2xl bg-white border border-blush-300 text-center space-y-2 shadow-soft">
            <span className="text-[9px] uppercase tracking-widest text-rose-700 font-bold block">
              Exclusive Celebration Invitation
            </span>
            <h4 className="font-serif font-bold text-sm text-plum">Célèbre Grand Gala</h4>
            <div className="text-[9px] text-plum-500">December 24 • Luxury Hotel Ballroom</div>
            <span className="inline-block px-3 py-1 rounded-full bg-blush-100 text-rose-800 text-[9px] font-bold">
              RSVP Link Included
            </span>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-plum-500 pt-2 border-t border-blush-200">
            <span>Gold Foil Debossing</span>
            <span>1080x1350 Instagram Slides</span>
          </div>
        </div>
      );
  }
}
