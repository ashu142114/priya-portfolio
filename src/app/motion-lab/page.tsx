"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SplitText,
  MaskImage,
  Parallax,
  ScrollDraw,
  StackedCards,
  HorizontalPin,
  Marquee,
  MagneticButton,
} from "@/components/motion";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowLeft, Play, Eye, Move, Sparkles } from "lucide-react";

export default function MotionLabPage() {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const measureFps = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measureFps);
    };

    animId = requestAnimationFrame(measureFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="py-12 sm:py-20 overflow-hidden">
      {/* FPS Counter HUD */}
      <div className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-plum-900/90 text-white border border-rose-300/30 backdrop-blur-md shadow-soft flex items-center gap-3 text-xs font-mono">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Performance: {fps} FPS (Smooth 60fps Target)</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Motion Primitives System</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight">
            Motion Design Lab
          </h1>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            Autonomous verification of 2026 editorial motion primitives: GPU-accelerated reveals, velocity marquees, magnetic cursors, and pinned scrubbers.
          </p>
        </div>

        {/* Section 1: SplitText Masked Reveal */}
        <section className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-3">
            01 • Masked SplitText Reveal
          </span>
          <SplitText as="h2" className="font-serif text-3xl sm:text-4xl font-bold text-plum leading-tight">
            Empathetic healthcare design begins with listening to real patient vulnerabilities.
          </SplitText>
        </section>

        {/* Section 2: MaskImage Clip-Path & Parallax */}
        <section className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-6">
            02 • MaskImage Clip Inset & Parallax
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <MaskImage className="rounded-3xl border border-blush-200 aspect-[4/3]">
              <div className="w-full h-full bg-gradient-to-br from-blush-100 via-rose-50 to-lilac-100 flex items-center justify-center p-8 text-center">
                <div>
                  <SparkleIcon className="w-8 h-8 text-rose-500 mx-auto mb-3" />
                  <span className="font-serif font-bold text-lg text-plum block">
                    Clip-Path Inset 100% → 0%
                  </span>
                  <span className="text-xs text-plum-500">Inner Scale 1.25 → 1.0</span>
                </div>
              </div>
            </MaskImage>

            <Parallax speed="fast" className="p-8 rounded-3xl bg-cream-50 border border-blush-200 text-center">
              <span className="text-xs font-mono text-rose-700 font-bold block mb-2">
                Parallax Speed: Fast (±120px)
              </span>
              <h3 className="font-serif font-bold text-xl text-plum mb-2">
                Multi-Depth Scrubbing
              </h3>
              <p className="text-xs text-plum-600">
                Transforms along Y axis at a distinct scrubbed velocity to create rich spatial depth.
              </p>
            </Parallax>
          </div>
        </section>

        {/* Section 3: Magnetic Buttons & Cursor States */}
        <section className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-6">
            03 • Magnetic Buttons & Cursor Triggers
          </span>
          <div className="flex flex-wrap gap-4 items-center">
            <MagneticButton
              cursorState="View"
              className="px-7 py-3.5 rounded-full bg-rose-500 text-white font-sans text-xs font-semibold shadow-soft hover:bg-rose-600"
            >
              <Eye className="w-4 h-4 mr-2" />
              <span>Magnetic "View" Button</span>
            </MagneticButton>

            <MagneticButton
              cursorState="Drag"
              className="px-7 py-3.5 rounded-full bg-lilac-200 text-plum font-sans text-xs font-semibold shadow-soft hover:bg-lilac-300"
            >
              <Move className="w-4 h-4 mr-2" />
              <span>Magnetic "Drag" Button</span>
            </MagneticButton>

            <MagneticButton
              cursorState="Play"
              className="px-7 py-3.5 rounded-full bg-cream-100 text-plum border border-blush-300 font-sans text-xs font-semibold shadow-soft hover:bg-white"
            >
              <Play className="w-4 h-4 mr-2 text-rose-600" />
              <span>Magnetic "Play" Button</span>
            </MagneticButton>
          </div>
        </section>

        {/* Section 4: ScrollDraw SVG Path Scrub */}
        <section className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-4">
            04 • ScrollDraw SVG Stroke-Dashoffset
          </span>
          <p className="text-xs text-plum-600 mb-6">
            Scroll up and down to watch the SVG curve draw and retract smoothly:
          </p>
          <div className="w-full h-32 flex items-center justify-center p-4 rounded-2xl bg-cream-50 border border-blush-200">
            <ScrollDraw className="w-full max-w-lg h-24">
              <path
                d="M 20 60 Q 150 10, 260 60 T 480 60"
                stroke="#D9577B"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </ScrollDraw>
          </div>
        </section>

        {/* Section 5: Velocity Reactive Marquee */}
        <section className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-6">
            05 • Velocity-Reactive Marquee
          </span>
          <Marquee speed={50} className="py-4 bg-cream-100 rounded-2xl border border-blush-200 font-serif text-lg font-bold text-plum">
            <span className="flex items-center gap-4">
              <span>UI/UX DESIGN</span>
              <span className="text-rose-500">•</span>
              <span>HEALTHCARE FLOWS</span>
              <span className="text-rose-500">•</span>
              <span>DESIGN SYSTEMS</span>
              <span className="text-rose-500">•</span>
              <span>FIGMA PROTOTYPES</span>
              <span className="text-rose-500">•</span>
            </span>
          </Marquee>
        </section>

        {/* Section 6: StackedCards Demonstration */}
        <section className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-6">
            06 • Stacked Sticky Cards
          </span>
          <StackedCards>
            <div className="p-8 rounded-3xl bg-blush-100 border border-blush-300 shadow-soft-lg">
              <span className="font-mono text-xs font-bold text-rose-700">01 / STACK</span>
              <h3 className="font-serif text-2xl font-bold text-plum mt-1">UX Research & Journey Mapping</h3>
              <p className="text-xs sm:text-sm text-plum-600 mt-2">
                Uncovering emotional friction points in healthcare consultation and appointment booking.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-lilac-100 border border-lilac-300 shadow-soft-lg">
              <span className="font-mono text-xs font-bold text-rose-700">02 / STACK</span>
              <h3 className="font-serif text-2xl font-bold text-plum mt-1">Information Architecture & Wireframes</h3>
              <p className="text-xs sm:text-sm text-plum-600 mt-2">
                Structuring clean 3-step conversion funnels with zero cognitive clutter.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-cream-100 border border-blush-300 shadow-soft-lg">
              <span className="font-mono text-xs font-bold text-rose-700">03 / STACK</span>
              <h3 className="font-serif text-2xl font-bold text-plum mt-1">Interactive Figma Prototyping</h3>
              <p className="text-xs sm:text-sm text-plum-600 mt-2">
                Testing micro-interactions, bottom drawers, and patient feedback toasts.
              </p>
            </div>
          </StackedCards>
        </section>

        {/* Section 7: HorizontalPin Scroller */}
        <section className="rounded-4xl bg-white border border-blush-200 shadow-soft overflow-hidden p-8 sm:p-12 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-4">
            07 • Horizontal Pin Scroller
          </span>
          <HorizontalPin>
            {[
              { title: "Discovery", desc: "User interviews & task trees" },
              { title: "Wireframing", desc: "Rapid layout iterations in grey" },
              { title: "Design System", desc: "Token sheets & atomic UI kits" },
              { title: "Handoff", desc: "Pixel-perfect Figma file specs" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] p-8 rounded-3xl bg-cream-50 border border-blush-200 shadow-soft shrink-0"
              >
                <span className="font-serif text-3xl font-bold text-rose-300">0{idx + 1}</span>
                <h4 className="font-serif text-xl font-bold text-plum mt-3 mb-1">{step.title}</h4>
                <p className="text-xs text-plum-600">{step.desc}</p>
              </div>
            ))}
          </HorizontalPin>
        </section>
      </div>
    </div>
  );
}
