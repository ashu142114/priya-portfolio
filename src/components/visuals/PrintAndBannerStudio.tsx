"use client";

import React, { useState } from "react";
import { QrCode, Scissors, Sparkles, MapPin, Phone, Mail, Calendar, ArrowRight, Check } from "lucide-react";

export function PrintAndBannerStudio() {
  const [brochureSide, setBrochureSide] = useState<"outer" | "inner">("outer");
  const [showBleedMarks, setShowBleedMarks] = useState(true);
  const [activeCardVariant, setActiveCardVariant] = useState(0);

  const cardVariants = [
    { name: "Studio Rose Foil", bg: "#FFFFFF", accent: "#D9577B", ink: "#2B1B2E", note: "350gsm Cotton Paper • Rose Foil Stamp" },
    { name: "Clinical Teal Minimal", bg: "#0F292E", accent: "#0D7C85", ink: "#FFFFFF", note: "Matte Soft-Touch • Crisp Tabular Grid" },
    { name: "Marigold Embossed", bg: "#FFFBF2", accent: "#B45309", ink: "#291D12", note: "Textured Cream • Gold Foil Monogram" },
  ];

  const card = cardVariants[activeCardVariant];

  return (
    <div className="space-y-20">
      {/* ===================================================================== */}
      {/* 1. REAL-PROPORTION DIGITAL AD BANNERS                                 */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blush-200 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300 mr-2">
              Sample
            </span>
            <span className="text-xs font-mono text-rose-700 font-bold uppercase">
              01 • Real-Proportion Ad Banner Suite
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-1">
              Multi-Format Digital Advertising Grids
            </h3>
          </div>
          <span className="text-xs text-plum-500 font-mono">1080×1080 • 1200×628 • 1080×1920 • 728×90 • 300×250 • 160×600</span>
        </div>

        {/* 728x90 Leaderboard Banner */}
        <div className="p-5 rounded-3xl bg-cream-50 border border-blush-200 space-y-2">
          <div className="flex justify-between text-[10px] font-mono text-plum-500">
            <span>Leaderboard • 728 × 90 px</span>
            <span>Sample</span>
          </div>
          <div className="w-full max-w-[728px] mx-auto min-h-[90px] rounded-2xl bg-gradient-to-r from-[#0F292E] via-[#0D7C85] to-[#139AA5] text-white px-6 py-3 flex flex-wrap items-center justify-between gap-4 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-serif font-bold text-sm">M+</div>
              <div>
                <div className="font-bold text-sm">MediCare Plus Video Consults</div>
                <div className="text-[11px] text-teal-100">Trusted doctors in Surat • Transparent INR fees</div>
              </div>
            </div>
            <span className="px-4 py-2 rounded-full bg-white text-[#0F292E] text-xs font-bold shrink-0">
              Book Slot • ₹650 →
            </span>
          </div>
        </div>

        {/* Grid: 1080x1080, 1200x628, 300x250, 1080x1920, 160x600 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* 1080x1080 Square */}
          <div className="md:col-span-5 p-5 rounded-3xl bg-white border border-blush-200 shadow-soft space-y-3">
            <div className="flex justify-between text-[10px] font-mono text-plum-500">
              <span>Social Feed • 1080 × 1080</span>
              <span className="px-2 py-0.5 rounded bg-lilac-200 text-plum-900 font-bold">Sample</span>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#FFF8F6] via-[#FBE9ED] to-[#F3D3DB] p-6 flex flex-col justify-between border border-blush-200 relative overflow-hidden">
              <svg className="absolute -right-8 -bottom-8 w-44 h-44 opacity-25 text-rose-500" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" />
              </svg>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-800">Sanaa Cycle • Wellness</span>
                <Sparkles className="w-4 h-4 text-rose-600" />
              </div>
              <div className="space-y-2 relative z-10">
                <h4 className="font-serif text-2xl font-bold text-plum leading-tight">
                  Gentle Cycle &amp; PCOD Care, Designed for Privacy
                </h4>
                <p className="text-xs text-plum-700">Track patterns, daily hydration, and confidential notes without visual clutter.</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-rose-200 relative z-10">
                <span className="px-4 py-2 rounded-full bg-rose-600 text-white text-xs font-bold">Explore Concept</span>
                <span className="text-[10px] font-mono text-plum-500">12-Col Grid</span>
              </div>
            </div>
            <p className="text-[11px] text-plum-600">
              <strong>Design Notes:</strong> Fraunces Display + DM Sans • 1:1 Social ratio • High-contrast Rose CTA.
            </p>
          </div>

          {/* Middle Column: 1200x628 + 300x250 */}
          <div className="md:col-span-4 space-y-6">
            {/* 1200x628 Meta/LinkedIn Banner */}
            <div className="p-5 rounded-3xl bg-white border border-blush-200 shadow-soft space-y-3">
              <div className="flex justify-between text-[10px] font-mono text-plum-500">
                <span>Link Ad • 1200 × 628</span>
                <span className="px-2 py-0.5 rounded bg-lilac-200 text-plum-900 font-bold">Sample</span>
              </div>
              <div className="aspect-[1200/628] rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] text-white p-5 flex flex-col justify-between">
                <span className="text-[9px] font-mono uppercase tracking-wider text-sky-300">SevaDesk • Booking SaaS</span>
                <div>
                  <h4 className="font-bold text-base leading-snug">Simplify Studio Bookings &amp; Client Reminders</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Transparent INR service catalogs for salons &amp; clinics.</p>
                </div>
                <span className="self-start px-3 py-1 rounded-full bg-sky-500 text-white text-[10px] font-bold">View Booking Flow →</span>
              </div>
            </div>

            {/* 300x250 Medium Rectangle */}
            <div className="p-5 rounded-3xl bg-white border border-blush-200 shadow-soft space-y-3">
              <div className="flex justify-between text-[10px] font-mono text-plum-500">
                <span>Display MPU • 300 × 250</span>
                <span className="px-2 py-0.5 rounded bg-lilac-200 text-plum-900 font-bold">Sample</span>
              </div>
              <div className="w-full max-w-[300px] mx-auto aspect-[300/250] rounded-2xl bg-[#F6FAF5] border border-emerald-200 p-5 flex flex-col justify-between text-[#14331F]">
                <span className="text-[9px] font-bold uppercase text-emerald-700">NourishTrack</span>
                <div className="font-serif font-bold text-lg leading-tight">
                  Balanced Indian Meal Plans &amp; Hydration Goals
                </div>
                <span className="self-start px-3.5 py-1.5 rounded-full bg-emerald-700 text-white text-[10px] font-bold">
                  View Sample Menu
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 1080x1920 Story + 160x600 Skyscraper */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            {/* 1080x1920 Story */}
            <div className="p-3 rounded-3xl bg-white border border-blush-200 shadow-soft space-y-2">
              <span className="text-[9px] font-mono text-plum-500 block text-center">1080×1920 Story</span>
              <div className="aspect-[9/16] rounded-2xl bg-gradient-to-b from-[#291D12] via-[#78350F] to-[#B45309] text-amber-50 p-3 flex flex-col justify-between text-center">
                <span className="text-[8px] uppercase tracking-widest text-amber-300">Utsav Studio</span>
                <div className="space-y-1">
                  <div className="font-serif italic font-bold text-xs">Royal Wedding E-Invites</div>
                  <div className="text-[8px] text-amber-200">Custom RSVP + Map</div>
                </div>
                <span className="px-2 py-1 rounded-full bg-amber-300 text-[#291D12] text-[8px] font-bold">Swipe Up</span>
              </div>
            </div>

            {/* 160x600 Wide Skyscraper */}
            <div className="p-3 rounded-3xl bg-white border border-blush-200 shadow-soft space-y-2">
              <span className="text-[9px] font-mono text-plum-500 block text-center">160×600 Skyscraper</span>
              <div className="aspect-[160/420] rounded-2xl bg-[#EEF2FF] border border-indigo-200 p-3 flex flex-col justify-between text-center text-indigo-950">
                <span className="text-[8px] font-bold text-indigo-700">ASHA AI</span>
                <div className="font-bold text-[10px] leading-snug">
                  Calm Symptom Triage &amp; Doctor Match
                </div>
                <span className="px-2 py-1 rounded-full bg-indigo-600 text-white text-[8px] font-bold">Try Demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. TRI-FOLD BROCHURE (OUTER + INNER + BLEED/CROP MARKS TOGGLE)        */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blush-200 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300 mr-2">
              Sample
            </span>
            <span className="text-xs font-mono text-rose-700 font-bold uppercase">
              02 • Print Production • Tri-Fold Brochure
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-1">
              A4 Tri-Fold Clinic &amp; Wellness Brochure
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setBrochureSide("outer")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                brochureSide === "outer" ? "bg-rose-500 text-white shadow-soft" : "bg-white border border-blush-200 text-plum"
              }`}
            >
              Outer Spread
            </button>
            <button
              onClick={() => setBrochureSide("inner")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                brochureSide === "inner" ? "bg-rose-500 text-white shadow-soft" : "bg-white border border-blush-200 text-plum"
              }`}
            >
              Inner Spread
            </button>
            <button
              onClick={() => setShowBleedMarks(!showBleedMarks)}
              className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                showBleedMarks ? "bg-plum text-white border-plum" : "bg-white text-plum border-blush-200"
              }`}
            >
              <Scissors className="w-3.5 h-3.5" />
              <span>Bleed &amp; Crop Marks</span>
            </button>
          </div>
        </div>

        {/* Flat Lay Surface */}
        <div className="p-6 sm:p-10 rounded-4xl bg-gradient-to-br from-cream-200/80 via-cream-100 to-blush-100/60 border border-blush-200 shadow-inner">
          <div
            className={`relative bg-white rounded-xl shadow-soft-xl overflow-hidden transition-all ${
              showBleedMarks ? "ring-2 ring-dashed ring-rose-400 p-3" : "p-0"
            }`}
          >
            {showBleedMarks && (
              <div className="flex justify-between text-[9px] font-mono text-rose-600 pb-1.5 px-1">
                <span>+ BLEED: 3mm | CROP MARKS ACTIVE</span>
                <span>FOLD LINES: 33.3% / 66.6%</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 md:divide-dashed divide-rose-300 min-h-[280px]">
              {brochureSide === "outer" ? (
                <>
                  {/* Panel 1: Inside Flap */}
                  <div className="p-6 bg-cream-50 flex flex-col justify-between space-y-4">
                    <span className="text-[9px] font-mono uppercase text-plum-400">Panel 01 • Inside Flap</span>
                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-base text-plum">Why Choose Preventive Care?</h4>
                      <p className="text-xs text-plum-600 leading-relaxed">
                        Organized consultations, transparent INR lab packages, and calm digital guidance for every family member.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-blush-200 text-[11px] text-plum-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 inline mr-1" /> Same-day digital reports
                    </div>
                  </div>

                  {/* Panel 2: Back Cover (Contact & QR) */}
                  <div className="p-6 bg-white flex flex-col justify-between space-y-4">
                    <span className="text-[9px] font-mono uppercase text-plum-400">Panel 02 • Back Cover</span>
                    <div className="flex flex-col items-center text-center space-y-2 my-auto">
                      <div className="p-3 rounded-2xl bg-cream-50 border border-blush-200">
                        <QrCode className="w-12 h-12 text-plum" />
                      </div>
                      <span className="text-xs font-bold text-plum">Scan for Design Inquiry</span>
                      <div className="text-[11px] text-plum-600 space-y-0.5">
                        <div className="flex items-center justify-center gap-1"><Mail className="w-3 h-3 text-rose-500" /> priyalakkad11@gmail.com</div>
                        <div className="flex items-center justify-center gap-1"><MapPin className="w-3 h-3 text-rose-500" /> Surat, Gujarat, India</div>
                      </div>
                    </div>
                  </div>

                  {/* Panel 3: Front Cover */}
                  <div className="p-6 bg-gradient-to-br from-[#0F292E] to-[#0D7C85] text-white flex flex-col justify-between">
                    <span className="text-[9px] font-mono uppercase text-teal-200">Panel 03 • Front Cover</span>
                    <div className="space-y-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] font-semibold">MediCare Plus • Sample</span>
                      <h4 className="font-serif text-2xl font-bold leading-tight">
                        Calm Clinical Care For Every Generation
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-teal-100">A4 Tri-Fold • Print Ready CMYK</span>
                  </div>
                </>
              ) : (
                <>
                  {/* Inner Left */}
                  <div className="p-6 bg-white space-y-3">
                    <span className="text-[9px] font-mono uppercase text-plum-400">Inner Left • Services</span>
                    <h4 className="font-serif font-bold text-base text-plum">1. Video Consultations</h4>
                    <p className="text-xs text-plum-600 leading-relaxed">
                      Connect with verified physicians and specialists from home with upfront INR fee clarity.
                    </p>
                  </div>
                  {/* Inner Center */}
                  <div className="p-6 bg-cream-50 space-y-3">
                    <span className="text-[9px] font-mono uppercase text-plum-400">Inner Center • Family Vault</span>
                    <h4 className="font-serif font-bold text-base text-plum">2. Lab Reports &amp; History</h4>
                    <p className="text-xs text-plum-600 leading-relaxed">
                      Color-coded biomarker summaries with plain-language explanations for parents and seniors.
                    </p>
                  </div>
                  {/* Inner Right */}
                  <div className="p-6 bg-white space-y-3">
                    <span className="text-[9px] font-mono uppercase text-plum-400">Inner Right • Wellness</span>
                    <h4 className="font-serif font-bold text-base text-plum">3. Nutrition &amp; Cycle Care</h4>
                    <p className="text-xs text-plum-600 leading-relaxed">
                      Daily meal logging, hydration tracking, and private menstrual health insights in one ecosystem.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <p className="text-xs text-plum-600 mt-4">
            <strong>Design Notes:</strong> 3-column A4 landscape fold (99mm per panel) • 3mm bleed margin • Fraunces + DM Sans hierarchy.
          </p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. BUSINESS CARDS (3 VARIANTS) & FLAT-LAY STATIONERY SUITE            */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blush-200 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300 mr-2">
              Concept
            </span>
            <span className="text-xs font-mono text-rose-700 font-bold uppercase">
              03 • Tactile Flat-Lay Stationery Suite
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-1">
              Business Cards (3 Variants), Letterhead, Envelope &amp; ID Badge
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {cardVariants.map((v, i) => (
              <button
                key={v.name}
                onClick={() => setActiveCardVariant(i)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                  activeCardVariant === i ? "bg-rose-500 text-white border-rose-500 shadow-soft" : "bg-white text-plum border-blush-200"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-10 rounded-4xl bg-gradient-to-br from-cream-200/70 via-blush-50 to-cream-100 border border-blush-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Front & Back Business Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Front */}
              <div
                className="aspect-[3.5/2] rounded-2xl p-5 shadow-soft-xl border border-black/10 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform"
                style={{ backgroundColor: card.bg, color: card.ink }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-serif font-bold text-sm">Priya K. Lakkad</div>
                    <div className="text-[10px] font-semibold opacity-80" style={{ color: card.accent === card.bg ? "#FFF" : card.accent }}>
                      UI/UX Designer
                    </div>
                  </div>
                  <span className="w-6 h-6 rounded-lg text-white text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: card.accent }}>
                    P.
                  </span>
                </div>
                <div className="text-[9px] font-mono opacity-80 space-y-0.5">
                  <div>priyalakkad11@gmail.com</div>
                  <div>Surat, Gujarat, India</div>
                </div>
              </div>

              {/* Back */}
              <div
                className="aspect-[3.5/2] rounded-2xl p-5 shadow-soft-xl border border-black/10 flex flex-col justify-between text-white transform rotate-1 hover:rotate-0 transition-transform"
                style={{ backgroundColor: card.accent }}
              >
                <span className="text-[9px] font-mono uppercase opacity-80">Concept Card Back</span>
                <div className="font-serif text-lg font-bold">Priya Lakkad Studio</div>
                <span className="text-[9px] opacity-80">UI/UX • Mobile • Web • Brand</span>
              </div>
            </div>
            <p className="text-xs text-plum-600">
              <strong>Design Notes:</strong> {card.note} • 89 × 51mm standard print trim.
            </p>
          </div>

          {/* Right: Letterhead + Envelope + ID Card */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Letterhead */}
            <div className="p-5 rounded-2xl bg-white border border-blush-200 shadow-soft space-y-3">
              <div className="flex justify-between items-center border-b border-blush-100 pb-2">
                <span className="font-serif font-bold text-xs text-plum">Priya Lakkad</span>
                <span className="text-[8px] font-mono text-plum-400">A4 LETTERHEAD</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-2/3 bg-blush-100 rounded" />
                <div className="h-2 w-full bg-cream-200 rounded" />
                <div className="h-2 w-5/6 bg-cream-200 rounded" />
                <div className="h-2 w-3/4 bg-cream-200 rounded" />
              </div>
              <div className="text-[9px] font-mono text-plum-500 pt-2 border-t border-blush-100">
                priyalakkad11@gmail.com • Surat
              </div>
            </div>

            {/* Staff ID Badge */}
            <div className="p-5 rounded-2xl bg-white border border-blush-200 shadow-soft flex flex-col justify-between space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold uppercase text-rose-700">Studio Pass • Concept</span>
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blush-100 text-rose-700 font-serif font-bold flex items-center justify-center">
                  PK
                </div>
                <div>
                  <div className="font-bold text-xs text-plum">Priya K. Lakkad</div>
                  <div className="text-[10px] text-plum-500">UI/UX Designer</div>
                </div>
              </div>
              <div className="text-[9px] font-mono text-plum-400 pt-2 border-t border-blush-100 flex justify-between">
                <span>Surat, India</span>
                <span>54 × 86mm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. 5-SLIDE SOCIAL CAROUSEL + INVITATION SUITE                         */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blush-200 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300 mr-2">
              Sample
            </span>
            <span className="text-xs font-mono text-rose-700 font-bold uppercase">
              04 • 5-Slide Instagram Carousel &amp; Invitation Suite
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-1">
              Social Media Educational Series &amp; Event Cards
            </h3>
          </div>
        </div>

        {/* 5-Slide Horizontal Carousel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { num: "01", title: "5 UX Rules for Healthcare Apps", sub: "Swipe to learn →", bg: "#0F292E", fg: "#FFFFFF" },
            { num: "02", title: "Calm Color Contrast", sub: "Use soothing teals & creams with WCAG AA text.", bg: "#FFFFFF", fg: "#0F292E" },
            { num: "03", title: "48px+ Tap Targets", sub: "Generous buttons help stressed patients tap accurately.", bg: "#E4F5F4", fg: "#0F292E" },
            { num: "04", title: "Plain-Language Labs", sub: "Replace medical jargon with clear Normal/Elevated tags.", bg: "#FFFFFF", fg: "#0F292E" },
            { num: "05", title: "Save & Share This Guide", sub: "Designed in Figma & Canva • Priya K. Lakkad", bg: "#0D7C85", fg: "#FFFFFF" },
          ].map((slide) => (
            <div
              key={slide.num}
              className="aspect-[4/5] rounded-2xl p-4 border border-blush-200 shadow-soft flex flex-col justify-between"
              style={{ backgroundColor: slide.bg, color: slide.fg }}
            >
              <span className="text-[10px] font-mono opacity-75">Slide {slide.num} / 05</span>
              <div className="font-serif font-bold text-sm leading-snug">{slide.title}</div>
              <div className="text-[10px] opacity-85 leading-snug">{slide.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. A4/A3 FLYERS, MENU CARD, CERTIFICATE & BIRTHDAY INVITATION         */}
      {/* ===================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blush-200 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300 mr-2">
              Sample
            </span>
            <span className="text-xs font-mono text-rose-700 font-bold uppercase">
              05 • A4/A3 Flyers, Menu Card, Certificate &amp; Birthday Invite
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-1">
              Print Collateral &amp; Event Stationery
            </h3>
          </div>
        </div>

        {/* 4 Flyers Grid: Event, Clinic, Salon, Sale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "A4 Event Flyer", title: "Surat Design & Craft Pop-Up", sub: "14 Dec • 10 AM – 8 PM • Vesu", bg: "#FFFBF2", accent: "#B45309", ink: "#291D12" },
            { tag: "A4 Clinic Flyer", title: "MediCare Plus Health Camp", sub: "Preventive Checkup • ₹499 Panel", bg: "#F4FAFA", accent: "#0D7C85", ink: "#0F292E" },
            { tag: "A3 Salon Flyer", title: "Aura Botanical Hair & Skin", sub: "Monsoon Rituals • BookEase Slot", bg: "#FDF4F6", accent: "#C04868", ink: "#2B1B2E" },
            { tag: "A4 Festive Sale", title: "Diwali Artisan Home Edit", sub: "Curated Brass & Linen • Surat", bg: "#1E1B2E", accent: "#F59E0B", ink: "#FFFFFF" },
          ].map((flyer) => (
            <div
              key={flyer.tag}
              className="aspect-[3/4] rounded-2xl p-5 border border-blush-200 shadow-soft flex flex-col justify-between"
              style={{ backgroundColor: flyer.bg, color: flyer.ink }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase tracking-wider opacity-75">{flyer.tag}</span>
                <span className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase" style={{ backgroundColor: flyer.accent, color: "#fff" }}>
                  Sample
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-10 rounded-full" style={{ backgroundColor: flyer.accent }} />
                <h4 className="font-serif text-lg font-bold leading-snug">{flyer.title}</h4>
                <p className="text-[11px] opacity-80">{flyer.sub}</p>
              </div>
              <div className="pt-3 border-t border-current/15 flex items-center justify-between text-[9px] font-mono opacity-80">
                <span>Print 300 DPI • CMYK</span>
                <span>Surat</span>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Card, Certificate, Birthday Invitation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cafe Menu Card */}
          <div className="rounded-2xl bg-[#FFFDF9] border border-amber-200 p-5 shadow-soft space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-amber-800 font-bold">Menu Card • Sample</span>
              <span className="text-[10px] text-amber-700">120 × 210mm</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#291D12]">Saffron &amp; Bean Cafe</h4>
            <div className="space-y-2 text-xs text-[#291D12]">
              {[
                { item: "Cardamom Cold Brew", price: "₹180" },
                { item: "Paneer Pesto Sourdough", price: "₹260" },
                { item: "Almond Rose Tart", price: "₹210" },
              ].map((m) => (
                <div key={m.item} className="flex justify-between border-b border-amber-100 pb-1">
                  <span>{m.item}</span>
                  <span className="font-bold">{m.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Completion Certificate */}
          <div className="rounded-2xl bg-white border-4 border-double border-slate-300 p-5 shadow-soft flex flex-col justify-between text-center space-y-2">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">Certificate • Sample</span>
            <h4 className="font-serif text-lg font-bold text-slate-900">Design Workshop Honor</h4>
            <p className="text-[11px] text-slate-600">Presented to Ananya Deshmukh for completing Human-Centered UI Systems.</p>
            <div className="pt-2 border-t border-slate-100 flex justify-between text-[9px] text-slate-500 font-mono">
              <span>Surat Chapter</span>
              <span>Seal Verified</span>
            </div>
          </div>

          {/* Birthday Invitation Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#F3E8FF] border border-rose-200 p-5 shadow-soft flex flex-col justify-between space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono uppercase text-rose-700 font-bold">Birthday Invite • Sample</span>
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2B1B2E]">Aarav Turns 5!</h4>
            <p className="text-[11px] text-[#4B364F]">Join us for games, cake &amp; stories • Saturday, 5:00 PM • Piplod Garden</p>
            <div className="pt-2 border-t border-rose-200/70 text-[9px] font-mono text-rose-800">
              RSVP via Utsav Studio QR
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
