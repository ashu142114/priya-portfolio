import React from "react";
import { SparkleIcon } from "./Stickers";

interface MockupFrameProps {
  type?: "mobile" | "web";
  title?: string;
  category?: string;
  accentColor?: string;
  className?: string;
  variant?: "healthcare" | "cycle" | "booking" | "nutrition" | "invitation" | "ai";
}

export function MockupFrame({
  type = "mobile",
  title = "Interface Mockup",
  category = "Healthcare",
  accentColor = "#F8D7DF",
  className = "",
  variant = "healthcare",
}: MockupFrameProps) {
  if (type === "web") {
    return (
      <div
        className={`w-full rounded-3xl bg-white/90 border border-blush-300/80 shadow-soft-lg overflow-hidden transition-all duration-300 ${className}`}
      >
        {/* Browser Top Bar */}
        <div className="px-5 py-3.5 bg-cream-200/90 border-b border-blush-200/70 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-300/80" />
            <span className="w-3 h-3 rounded-full bg-blush-300" />
            <span className="w-3 h-3 rounded-full bg-lilac-300" />
          </div>
          <div className="px-4 py-1 rounded-full bg-white/80 text-[11px] font-sans font-medium text-plum-500 tracking-wide border border-blush-100 max-w-[260px] truncate">
            priya.design/preview/{category.toLowerCase()}
          </div>
          <div className="w-12 flex justify-end">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
          </div>
        </div>

        {/* Web Mockup Canvas */}
        <div className="p-6 md:p-8 bg-gradient-to-b from-cream-100 via-white to-blush-50/40 min-h-[300px]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-4 border-b border-blush-200/60">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center font-serif text-lg font-bold text-plum"
                  style={{ backgroundColor: accentColor }}
                >
                  P.
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-plum text-base md:text-lg leading-tight">
                    {title}
                  </h4>
                  <p className="text-xs font-sans text-plum-500">{category} Experience</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700">
                Figma Prototype
              </span>
            </div>

            {/* Service & Calendar UI Representation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-blush-200/80 shadow-soft-sm">
                <div className="w-8 h-8 rounded-xl bg-blush-200 flex items-center justify-center mb-3">
                  <SparkleIcon className="w-4 h-4 text-rose-600" />
                </div>
                <div className="h-3 w-24 bg-plum-100 rounded-full mb-2" />
                <div className="h-2 w-32 bg-plum-50 rounded-full" />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-blush-200/80 shadow-soft-sm">
                <div className="w-8 h-8 rounded-xl bg-lilac-200 flex items-center justify-center mb-3">
                  <span className="w-3 h-3 rounded-full bg-lilac-400" />
                </div>
                <div className="h-3 w-28 bg-plum-100 rounded-full mb-2" />
                <div className="h-2 w-20 bg-plum-50 rounded-full" />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-blush-200/80 shadow-soft-sm">
                <div className="w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center mb-3">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                </div>
                <div className="h-3 w-20 bg-plum-100 rounded-full mb-2" />
                <div className="h-2 w-28 bg-plum-50 rounded-full" />
              </div>
            </div>

            {/* Simulated Booking Data Table / Interactive Matrix */}
            <div className="p-5 rounded-2xl bg-cream-50 border border-blush-200/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-plum-700">Available Time Slots</span>
                <span className="text-xs text-rose-600 font-medium">Auto-confirmed</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"].map((slot, i) => (
                  <span
                    key={slot}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium ${
                      i === 1
                        ? "bg-rose-500 text-white shadow-sm"
                        : "bg-white text-plum-700 border border-blush-200"
                    }`}
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile Device Frame
  return (
    <div
      className={`relative mx-auto w-full max-w-[290px] sm:max-w-[310px] rounded-[44px] p-3.5 bg-gradient-to-b from-[#2B1B2E] via-[#3A263E] to-[#2B1B2E] shadow-soft-xl border-[4px] border-[#4A344E] transition-all duration-300 ${className}`}
    >
      {/* Screen Container */}
      <div className="relative w-full rounded-[34px] overflow-hidden bg-cream-100 border border-blush-200/60 min-h-[520px] flex flex-col justify-between">
        {/* Dynamic Island / Speaker Notch */}
        <div className="pt-3 px-6 flex items-center justify-between text-[11px] font-sans font-medium text-plum-600">
          <span>9:41</span>
          <div className="w-20 h-4 rounded-full bg-plum-950 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-plum-800" />
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-2 rounded-sm border border-plum-600 relative">
              <span className="absolute inset-0.5 bg-plum-600 rounded-xs" />
            </span>
          </div>
        </div>

        {/* Mobile Screen Content Variations */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          {variant === "cycle" ? (
            /* Women's Health Screen */
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-rose-500 font-bold">
                    Cycle Day 14
                  </span>
                  <h4 className="font-serif font-bold text-plum text-lg leading-tight">Ovulation Window</h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-blush-200 flex items-center justify-center text-rose-600">
                  <SparkleIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Radial Cycle Gauge */}
              <div className="relative w-36 h-36 mx-auto my-2 rounded-full border-[8px] border-blush-200 flex items-center justify-center bg-white shadow-soft">
                <div className="text-center">
                  <span className="block font-serif text-2xl font-bold text-plum">14</span>
                  <span className="block text-[10px] text-plum-500 font-medium">Days until period</span>
                </div>
                <span className="absolute top-1 right-3 w-4 h-4 rounded-full bg-rose-500 border-2 border-white shadow-sm" />
              </div>

              {/* Daily Logging Chips */}
              <div className="p-3 rounded-2xl bg-white border border-blush-200/80 shadow-soft-sm">
                <span className="block text-[11px] font-medium text-plum-600 mb-2">Today's Check-in</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-rose-100 text-rose-700">
                    High Energy
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-lilac-200 text-plum-700">
                    Mild Cramp
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-cream-200 text-plum-600">
                    Hydrated
                  </span>
                </div>
              </div>

              {/* PCOD/PCOS Health Note */}
              <div className="p-3 rounded-2xl bg-lilac-100/70 border border-lilac-200">
                <span className="block text-[11px] font-semibold text-plum">Hormone Balance Tip</span>
                <p className="text-[10px] text-plum-600 leading-relaxed mt-0.5">
                  Consistent hydration and 20 min gentle movement support healthy cycle rhythm.
                </p>
              </div>
            </div>
          ) : variant === "ai" ? (
            /* AI Healthcare Screen */
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 pb-2 border-b border-blush-200">
                <div className="w-7 h-7 rounded-xl bg-lilac-300 flex items-center justify-center text-plum font-serif text-xs font-bold">
                  AI
                </div>
                <div>
                  <h4 className="font-serif font-bold text-plum text-sm">Health Assistant</h4>
                  <span className="text-[9px] text-rose-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active Triage
                  </span>
                </div>
              </div>

              {/* AI Chat Stream */}
              <div className="space-y-2 text-[11px]">
                <div className="p-2.5 rounded-2xl rounded-tl-sm bg-white border border-blush-200 shadow-soft-sm text-plum">
                  Hello! How are you feeling today? You can describe any symptoms or check lab values.
                </div>
                <div className="p-2.5 rounded-2xl rounded-tr-sm bg-rose-500 text-white ml-auto max-w-[85%]">
                  I've had a mild headache and tiredness since morning.
                </div>
                <div className="p-2.5 rounded-2xl rounded-tl-sm bg-lilac-100 text-plum border border-lilac-200">
                  <span className="font-semibold block text-[10px] text-rose-700 mb-1">
                    Suggested Action
                  </span>
                  Drink 500ml water and rest eyes. If fever persists, schedule a doctor consultation.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-2 flex gap-1.5">
                <span className="flex-1 py-1.5 text-center rounded-xl bg-rose-100 text-rose-700 text-[10px] font-medium">
                  Book Doctor
                </span>
                <span className="flex-1 py-1.5 text-center rounded-xl bg-cream-200 text-plum text-[10px] font-medium">
                  Log Water
                </span>
              </div>
            </div>
          ) : variant === "nutrition" ? (
            /* Nutrition Screen */
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-serif font-bold text-plum">Today's Nutrition</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blush-200 text-rose-700 font-medium">
                  1,450 / 1,800 kcal
                </span>
              </div>
              <div className="w-full bg-cream-200 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[80%] rounded-full" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="p-2 rounded-xl bg-white border border-blush-100">
                  <span className="block font-bold text-plum">68g</span>
                  <span className="text-plum-400">Protein</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-blush-100">
                  <span className="block font-bold text-plum">142g</span>
                  <span className="text-plum-400">Carbs</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-blush-100">
                  <span className="block font-bold text-plum">44g</span>
                  <span className="text-plum-400">Fats</span>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-blush-200 shadow-soft-sm">
                <span className="block text-[11px] font-semibold text-plum mb-1">Hydration Goal</span>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-rose-600">6 of 8 Glasses</span>
                  <span className="text-[10px] px-2 py-1 rounded-lg bg-lilac-200 text-plum font-medium">
                    + Add 250ml
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Healthcare Default Screen */
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans font-medium text-plum-500">Welcome Back</span>
                  <h4 className="font-serif font-bold text-plum text-base">Sarah Jenkins</h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-blush-200 flex items-center justify-center font-serif text-xs font-bold text-rose-600">
                  SJ
                </div>
              </div>

              {/* Telemedicine Appointment Card */}
              <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-soft">
                <div className="flex items-center justify-between text-[10px] text-rose-100 mb-1">
                  <span>Upcoming Visit</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/20">Today, 2:30 PM</span>
                </div>
                <h5 className="font-serif font-semibold text-sm">Dr. Alena Vance</h5>
                <span className="text-[11px] text-rose-100 block">General Physician & Wellness</span>
                <div className="mt-2.5 pt-2 border-t border-rose-400/50 flex justify-between items-center text-[10px]">
                  <span>Video Consultation</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-rose-700 font-bold">
                    Join Call
                  </span>
                </div>
              </div>

              {/* Lab Reports & Records */}
              <div className="p-3 rounded-2xl bg-white border border-blush-200/80 shadow-soft-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-medium text-plum-700">Recent Lab Tests</span>
                  <span className="text-[10px] text-rose-600 font-semibold">View All</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-cream-50 border border-blush-100 text-[10px]">
                  <div>
                    <span className="font-semibold block text-plum">Lipid Profile & CBC</span>
                    <span className="text-plum-400">Dr. Lal PathLabs • 2 Days ago</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-medium">
                    Normal
                  </span>
                </div>
              </div>

              {/* Family Health Profiles */}
              <div className="p-2.5 rounded-2xl bg-lilac-100/60 border border-lilac-200/80 flex items-center justify-between text-[10px]">
                <span className="text-plum-700 font-medium">Family: Maya (Daughter)</span>
                <span className="text-rose-600 font-semibold">Switch</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Nav Bar */}
        <div className="py-2.5 px-6 bg-white/90 border-t border-blush-100 flex items-center justify-between">
          <span className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
          </span>
          <span className="w-4 h-4 rounded-full bg-plum-100" />
          <span className="w-4 h-4 rounded-full bg-plum-100" />
          <span className="w-4 h-4 rounded-full bg-plum-100" />
        </div>
      </div>
    </div>
  );
}
