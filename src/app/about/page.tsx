import Link from "next/link";
import { siteConfig } from "@/data/site";
import { skillCategories, designTools, spokenLanguages } from "@/data/skills";
import { experiences, education, aboutNarrative } from "@/data/about";
import { SparkleIcon } from "@/components/common/Stickers";
import { SplitText } from "@/components/motion";
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Sparkles,
  Heart,
  Layers,
  Palette,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Priya K. Lakkad, a UI/UX & Product Designer based in Surat, Gujarat with experience in Healthcare, SaaS, E-commerce, and Event Management.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-4 shadow-soft-sm">
            <SparkleIcon className="w-3 h-3 text-rose-500" />
            <span>Story & Philosophy</span>
          </div>
          <SplitText
            as="h1"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight"
          >
            Hi, I'm Priya K. Lakkad
          </SplitText>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3">
            UI/UX Designer | Product Designer • Surat, Gujarat, India
          </p>
        </div>

        {/* Narrative & Visual Designer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Tactile Designer Monogram Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] rounded-4xl bg-gradient-to-b from-blush-100 via-rose-50 to-cream-100 p-6 shadow-soft-xl border border-blush-300/80 flex flex-col justify-between text-center relative overflow-hidden">
              <div
                className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-rose-200/40 blur-xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="pt-2">
                <div className="w-28 h-28 mx-auto rounded-3xl bg-white shadow-soft flex items-center justify-center border-2 border-blush-200 mb-4 transform hover:scale-105 transition-transform duration-300">
                  <span className="font-serif text-4xl font-bold text-rose-600">PK</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-plum">{siteConfig.fullName}</h2>
                <span className="text-xs text-rose-700 font-semibold block mt-0.5">
                  UI/UX & Product Designer
                </span>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-plum-700 bg-white/90 px-3.5 py-1.5 rounded-full shadow-soft-sm border border-blush-200">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>

              {/* Verified Design Focus Pills */}
              <div className="pt-6 mt-6 border-t border-blush-200/80 space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs text-plum-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Specializing in Healthcare & SaaS UX</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-plum-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Figma Design Systems & Prototypes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-plum-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tangible Brand Identity & Social Kits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-plum-700 text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum leading-snug">
              Designing with empathy, clarity, and care.
            </h2>
            <p>{aboutNarrative.intro}</p>
            <p>{aboutNarrative.philosophy}</p>
            <p>{aboutNarrative.background}</p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-plum-600">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-rose-500" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-rose-500" />
                <span>{siteConfig.phoneFormatted}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Design Philosophy Pillars */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-rose-600" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">How I Approach Design</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blush-100 flex items-center justify-center text-rose-600">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum">Empathy in High-Stress UX</h3>
              <p className="text-xs text-plum-600 leading-relaxed">
                Especially in healthcare, users are often anxious or overwhelmed. Interfaces must feel reassuring,
                calming, and provide clear 1-tap resolution paths.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-lilac-100 flex items-center justify-center text-plum">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum">Systemic Component Tokens</h3>
              <p className="text-xs text-plum-600 leading-relaxed">
                Design isn't just decoration—it's architecture. Every screen is composed from reusable Figma variants,
                accessible contrast tokens, and responsive 4px spacing grids.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-700">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-plum">Tangible Brand Craft</h3>
              <p className="text-xs text-plum-600 leading-relaxed">
                From geometric vector marks to luxury foil-debossed business cards, packaging, and social carousels,
                the brand speaks with cohesive elegance across every touchpoint.
              </p>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-plum mb-8">Professional Journey</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-blush-100 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-blush-100 flex items-center justify-center text-rose-600 shadow-soft-sm">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-plum">{exp.title}</h3>
                      <span className="text-xs font-semibold text-rose-700">{exp.company} • {exp.location}</span>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-cream-200 text-plum self-start sm:self-auto border border-blush-200">
                    {exp.period}
                  </span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-plum-600">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Education */}
            <div className="p-8 rounded-4xl bg-white border border-blush-200/90 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-blush-100 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-lilac-200 flex items-center justify-center text-plum shadow-soft-sm">
                    <GraduationCap className="w-5 h-5 text-plum-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-plum">{education.degree}</h3>
                    <span className="text-xs font-medium text-plum-600">
                      {education.college}, {education.location}
                    </span>
                  </div>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-cream-200 text-plum self-start sm:self-auto border border-blush-200">
                  Graduated {education.graduationDate}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-plum-600 leading-relaxed">
                {education.description}
              </p>
            </div>
          </div>
        </section>

        {/* Grouped Skills */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-plum mb-8">Grouped Skills & Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg font-bold text-plum mb-1">{cat.category}</h3>
                  <p className="text-xs text-plum-500 mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cream-100 border border-blush-100 text-plum"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Tools & Languages */}
        <section className="p-8 sm:p-10 rounded-4xl bg-blush-100/60 border border-blush-200 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold text-plum mb-3">Design Tools</h3>
            <div className="space-y-2">
              {designTools.map((t) => (
                <div
                  key={t.name}
                  className="p-3.5 rounded-2xl bg-white border border-blush-200 text-xs font-medium text-plum flex items-center justify-between shadow-soft-sm"
                >
                  <span className="font-bold">{t.name}</span>
                  <span className="text-plum-500">{t.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-plum mb-3">Spoken Languages</h3>
            <div className="space-y-2">
              {spokenLanguages.map((l) => (
                <div
                  key={l.name}
                  className="p-3.5 rounded-2xl bg-white border border-blush-200 text-xs font-medium text-plum flex items-center justify-between shadow-soft-sm"
                >
                  <span className="font-bold">{l.name}</span>
                  <span className="text-plum-500">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
