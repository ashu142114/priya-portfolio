import Link from "next/link";
import { siteConfig } from "@/data/site";
import { designTools, spokenLanguages } from "@/data/skills";
import { SparkleIcon } from "@/components/common/Stickers";
import { ArrowRight, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function AboutSnippetSection() {
  return (
    <section className="py-20 sm:py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Arch-shaped Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              {/* Arch Frame */}
              <div className="w-full aspect-[4/5] rounded-t-full rounded-b-4xl bg-gradient-to-b from-blush-200 via-rose-100 to-cream-200 p-3 shadow-soft-lg border-2 border-blush-300 flex flex-col justify-end overflow-hidden relative">
                {/* Soft decorative background circles */}
                <div
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-white/70 blur-xl"
                  aria-hidden="true"
                />

                {/* Minimalist Designer Avatar / Monogram Silhouette */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-soft flex items-center justify-center border-4 border-blush-200 mb-4">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-rose-600">
                      PK
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-plum">
                    {siteConfig.fullName}
                  </h3>
                  <span className="text-xs font-sans text-plum-500 font-medium mt-1">
                    {siteConfig.title}
                  </span>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-rose-700 bg-white/90 px-3 py-1 rounded-full shadow-soft-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{siteConfig.city}, India</span>
                  </div>
                </div>

                {/* Current Role Card Overlay */}
                <div className="relative z-10 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-blush-200 shadow-soft-sm flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blush-100 flex items-center justify-center text-rose-700">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-plum">ProjectTree</span>
                      <span className="text-[10px] text-plum-600">UI/UX Designer (11/2024 - Present)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative & Skills */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
              <SparkleIcon className="w-3 h-3 text-rose-500" />
              <span>A Bit About Me</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight mb-6">
              Empathetic design rooted in simplicity and care.
            </h2>

            {/* 3-Line Bio */}
            <div className="space-y-4 text-plum-600 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                I'm a UI/UX and Product Designer based in Surat, Gujarat. Currently designing user-centered
                mobile applications and responsive web platforms at ProjectTree.
              </p>
              <p>
                With a BCA degree from V.N. Borad Mahila BCA College, Junagadh, I blend logical structure with
                feminine, gentle aesthetics to make complex healthcare and everyday SaaS experiences feel calm and approachable.
              </p>
              <p>
                My work centers around listening closely to users, crafting frictionless user journey flows, and building
                high-fidelity interactive Figma prototypes that inspire confidence.
              </p>
            </div>

            {/* Tools & Languages Pills */}
            <div className="w-full space-y-4 pb-8 border-b border-blush-200/80">
              {/* Tools */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-plum-600 block mb-2">
                  Design Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {designTools.map((t) => (
                    <span
                      key={t.name}
                      className="px-4 py-1.5 rounded-full bg-white border border-blush-300 text-xs font-semibold text-plum shadow-soft-sm flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-rose-600" />
                      <span>{t.name}</span>
                      <span className="text-[10px] text-plum-600 font-normal">({t.experience})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-plum-600 block mb-2">
                  Languages
                </span>
                <div className="flex flex-wrap gap-2">
                  {spokenLanguages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-3.5 py-1 rounded-full bg-blush-100 text-xs font-medium text-plum-700 border border-blush-200"
                    >
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-soft hover:bg-rose-600 transition-all active:scale-95"
              >
                <span>Read my full story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-plum border border-blush-300 font-sans text-xs sm:text-sm font-semibold shadow-soft-sm hover:border-rose-400 hover:bg-blush-50 transition-all active:scale-95"
              >
                <GraduationCap className="w-4 h-4 text-rose-500" />
                <span>View resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
