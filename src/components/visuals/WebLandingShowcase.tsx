"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserFrame } from "@/components/visuals/DeviceFrame";
import { Check, Star, ArrowRight, ShieldCheck, Calendar, ShoppingBag, Sparkles } from "lucide-react";

const WEB_SITES = [
  {
    id: "healthcare-web",
    url: "medicareplus.concept.design",
    title: "MediCare Plus — Telemedicine Web Portal",
    badge: "Healthcare • Concept",
    accent: "#0D7C85",
    bg: "#F4FAFA",
    ink: "#0F292E",
    heroTitle: "Calm, Same-Day Video Consultations & Family Lab Records",
    heroSub: "Book verified specialists in Surat with transparent INR consultation fees and instant digital prescriptions.",
    cta: "Book Video Consult • ₹650",
    features: [
      "Verified Doctors & Specialist Directory",
      "Encrypted Family Health Vault (Parents & Kids)",
      "Plain-Language Lab Report Reference Ranges",
    ],
    designNotes: "12-col desktop grid • DM Sans tabular numerals • Teal #0D7C85 WCAG AA contrast",
  },
  {
    id: "saas-web",
    url: "sevadesk.concept.design",
    title: "SevaDesk — Multi-Service Booking SaaS",
    badge: "SaaS • Concept",
    accent: "#2563EB",
    bg: "#F4F7FB",
    ink: "#0F172A",
    heroTitle: "One Unified Booking & Staff Calendar Platform for Service Studios",
    heroSub: "Eliminate double bookings, show transparent INR service menus, and send instant WhatsApp slot confirmations.",
    cta: "Explore Live Demo",
    features: [
      "Multi-Industry Service Catalog (Clinic, Salon, Wellness)",
      "Real-Time Staff Availability & Payout Ledger",
      "Two-Tap Customer Rescheduling & Reminders",
    ],
    designNotes: "Asymmetric hero split • Sapphire #2563EB • 8px baseline spacing scale",
  },
  {
    id: "ecommerce-web",
    url: "nourishtrack.concept.design",
    title: "NourishTrack — Wellness & Meal Plan Store",
    badge: "E-Commerce • Concept",
    accent: "#15803D",
    bg: "#F6FAF5",
    ink: "#14331F",
    heroTitle: "Personalized Vegetarian Nutrition & Weekly Habit Plans",
    heroSub: "Track home-cooked Indian meals, protein goals, and daily hydration in one soothing wellness storefront.",
    cta: "Start 7-Day Plan • ₹499",
    features: [
      "Curated Vegetarian Macro & Calorie Guides",
      "Daily Hydration & Step Habit Tracker",
      "One-Click Weekly Grocery & Meal Prep List",
    ],
    designNotes: "Editorial Fraunces serif + DM Sans • Botanical Sage #15803D • Soft card elevation",
  },
];

export function WebLandingShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [innerScroll, setInnerScroll] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 65%",
      end: "bottom 35%",
      scrub: 0.4,
      onUpdate: (self) => {
        setInnerScroll(self.progress);
      },
    });

    return () => st.kill();
  }, []);

  const site = WEB_SITES[activeIdx];
  const translateY = -(innerScroll * 340);

  return (
    <div ref={sectionRef} className="space-y-6">
      {/* Selector Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {WEB_SITES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 border ${
                activeIdx === idx
                  ? "bg-plum text-white border-plum shadow-soft"
                  : "bg-white text-plum-700 border-blush-200 hover:bg-blush-50"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.accent }} />
              <span>{s.title.split("—")[0].trim()}</span>
            </button>
          ))}
        </div>

        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300">
          Concept • Scrub-Scroll Inside Browser
        </span>
      </div>

      {/* Large Desktop Browser Frame with Scrub-Scrolling Full Landing Page */}
      <BrowserFrame url={site.url} title={site.title} className="shadow-soft-xl">
        <div className="relative h-[420px] sm:h-[460px] overflow-hidden" style={{ backgroundColor: site.bg, color: site.ink }}>
          <div
            className="transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
          >
            {/* Top Website Navbar */}
            <header className="px-6 sm:px-10 py-4 bg-white/90 border-b flex items-center justify-between" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-2 font-bold text-sm">
                <span className="w-6 h-6 rounded-lg text-white flex items-center justify-center text-[10px]" style={{ backgroundColor: site.accent }}>
                  {site.title.slice(0, 2).toUpperCase()}
                </span>
                <span>{site.title.split("—")[0].trim()}</span>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-xs font-medium opacity-80">
                <span>Features</span>
                <span>Specialists</span>
                <span>Plans (INR)</span>
                <span>FAQ</span>
              </nav>
              <span className="px-4 py-1.5 rounded-full text-white text-[11px] font-semibold" style={{ backgroundColor: site.accent }}>
                Get Started
              </span>
            </header>

            {/* Hero Section */}
            <section className="px-6 sm:px-10 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white border" style={{ color: site.accent }}>
                  {site.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  {site.heroTitle}
                </h3>
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed max-w-lg">
                  {site.heroSub}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <span className="px-5 py-2.5 rounded-full text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm" style={{ backgroundColor: site.accent }}>
                    <span>{site.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="px-5 py-2.5 rounded-full bg-white border text-xs font-semibold">
                    View Sample Screens
                  </span>
                </div>
              </div>

              {/* Hero UI Preview Card */}
              <div className="md:col-span-5">
                <div className="p-5 rounded-3xl bg-white border shadow-soft space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase opacity-60">
                    <span>Live Interactive Preview</span>
                    <span>Surat • INR</span>
                  </div>
                  {site.features.map((f) => (
                    <div key={f} className="p-2.5 rounded-xl flex items-center gap-2.5 text-xs font-medium" style={{ backgroundColor: site.bg }}>
                      <Check className="w-4 h-4 shrink-0" style={{ color: site.accent }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Lower Band (Revealed as inner scrub scrolls) */}
            <section className="px-6 sm:px-10 py-8 bg-white border-t grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "01 • Clear Architecture", desc: "Logical user flows structured for rapid discovery." },
                { title: "02 • WCAG AA Contrast", desc: "Readable typography and 48px+ interactive buttons." },
                { title: "03 • Responsive System", desc: "Seamless adaptation from 1440px desktop to 390px mobile." },
              ].map((card) => (
                <div key={card.title} className="p-4 rounded-2xl border" style={{ backgroundColor: site.bg }}>
                  <h4 className="font-bold text-xs mb-1" style={{ color: site.accent }}>{card.title}</h4>
                  <p className="text-[11px] opacity-80">{card.desc}</p>
                </div>
              ))}
            </section>

            {/* Sample Testimonials Band */}
            <section className="px-6 sm:px-10 py-8 border-t" style={{ backgroundColor: site.bg }}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-serif font-bold text-base">Community Perspectives</h4>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-white border">
                  Sample
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { quote: "The clean appointment summary and clear INR fee breakdown remove hesitation before booking.", author: "Rohan M. • Surat (Sample)" },
                  { quote: "Readable labels and calm colors make everyday tracking effortless on mobile and desktop.", author: "Meera K. • Ahmedabad (Sample)" },
                ].map((t) => (
                  <div key={t.author} className="p-4 rounded-2xl bg-white border text-xs space-y-2">
                    <p className="opacity-85 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <p className="font-bold text-[10px]" style={{ color: site.accent }}>{t.author}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer Band */}
            <footer className="px-6 sm:px-10 py-6 bg-slate-900 text-white text-[11px] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-serif font-bold text-sm">{site.title.split(" — ")[0]}</div>
                <div className="text-slate-400 text-[10px]">Concept Web UI • Designed by Priya K. Lakkad</div>
              </div>
              <div className="flex gap-4 text-slate-300 text-[10px]">
                <span>Overview</span>
                <span>Features</span>
                <span>Pricing (INR)</span>
                <span>Contact</span>
              </div>
            </footer>
          </div>

          {/* Scrub Scroll Indicator Pill inside Browser */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/75 text-white text-[10px] font-mono pointer-events-none">
            Scroll depth: {Math.round(innerScroll * 100)}%
          </div>
        </div>
      </BrowserFrame>

      {/* Design Notes Caption */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-cream-50 border border-blush-200 text-xs text-plum-600">
        <span><strong className="text-plum">Design Notes:</strong> {site.designNotes}</span>
        <span className="font-mono text-[10px] text-rose-700 font-bold">Responsive Web UI • Concept</span>
      </div>
    </div>
  );
}
