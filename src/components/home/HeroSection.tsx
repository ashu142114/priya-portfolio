"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SparkleIcon, FourPointStar } from "@/components/common/Stickers";
import { MockupFrame } from "@/components/common/MockupFrame";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-8 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Soft Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-100/90 border border-blush-300/70 text-xs sm:text-sm font-medium text-rose-700 shadow-soft-sm mb-6 animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Hi, I'm Priya K. Lakkad</span>
              <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-plum leading-[1.12] mb-6">
              Designing simple, caring digital experiences for{" "}
              <span className="italic font-normal text-rose-600 underline decoration-blush-300 underline-offset-8">
                healthcare
              </span>
              , SaaS & e-commerce.
            </h1>

            {/* Sub-text */}
            <p className="font-sans text-plum-600 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              UI/UX & Product Designer based in Surat, India. I turn complex requirements and sensitive user
              journeys into intuitive, calming interfaces using Figma.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-500 text-white font-sans text-sm font-semibold tracking-wide shadow-soft hover:bg-rose-600 hover:shadow-soft-lg transition-all duration-200 active:scale-95"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-plum border border-blush-300 font-sans text-sm font-semibold shadow-soft-sm hover:border-rose-400 hover:bg-blush-50 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-rose-500" />
                <span>Say hello</span>
              </Link>
            </div>

            {/* Quick credentials snippet */}
            <div className="mt-10 pt-6 border-t border-blush-200/80 flex flex-wrap items-center gap-6 text-xs text-plum-500 font-sans">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>UI/UX Designer at ProjectTree</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Tools:</span>
                <span className="px-2 py-0.5 rounded-md bg-white border border-blush-200 text-plum font-semibold">
                  Figma
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white border border-blush-200 text-plum font-semibold">
                  Canva
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Soft Phone Mockups with Parallax & Sticker accents */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Decorative Stars */}
            <div className="absolute -top-6 -right-2 pointer-events-none z-20">
              <FourPointStar className="w-8 h-8 text-rose-400 animate-float-slow" />
            </div>
            <div className="absolute bottom-12 -left-6 pointer-events-none z-20">
              <SparkleIcon className="w-6 h-6 text-rose-500 animate-float-medium" />
            </div>

            {/* Subtle glow background */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-blush-200/60 via-rose-100/30 to-lilac-200/40 rounded-full blur-2xl transform scale-90"
              aria-hidden="true"
            />

            {/* Main Featured Phone Mockup */}
            <div className="relative z-10 w-full max-w-[310px] transform hover:-translate-y-2 transition-transform duration-500 ease-out">
              <MockupFrame
                type="mobile"
                variant="healthcare"
                title="Healthcare Companion"
                category="Healthcare"
              />

              {/* Floating Empathic Tag Overlay */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-blush-300 shadow-soft-lg flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blush-200 flex items-center justify-center text-rose-600 font-serif font-bold text-xs">
                  UX
                </span>
                <div>
                  <span className="block text-[11px] font-semibold text-plum">User-Centered</span>
                  <span className="block text-[10px] text-plum-400">Calm, accessible flows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
