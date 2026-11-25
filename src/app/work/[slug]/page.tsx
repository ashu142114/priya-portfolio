import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { MockupFrame } from "@/components/common/MockupFrame";
import { SparkleIcon, FourPointStar } from "@/components/common/Stickers";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Search, Cpu, Compass } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-sans text-plum-500 mb-8">
          <Link href="/" className="hover:text-rose-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-rose-600 transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-plum-800 font-medium truncate">{project.title}</span>
        </div>

        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>

        {/* Case Study Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <span>{project.domain}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-plum-600 leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>

          {/* Project Details Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-6 rounded-3xl bg-white/80 border border-blush-200 shadow-soft-sm">
            <div>
              <span className="block text-[11px] font-sans text-plum-400 uppercase tracking-wider font-semibold">
                Role
              </span>
              <span className="font-serif font-bold text-sm text-plum mt-0.5 block">
                {project.role}
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-sans text-plum-400 uppercase tracking-wider font-semibold">
                Industry Domain
              </span>
              <span className="font-serif font-bold text-sm text-plum mt-0.5 block">
                {project.domain}
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-sans text-plum-400 uppercase tracking-wider font-semibold">
                Design Tool
              </span>
              <span className="font-serif font-bold text-sm text-plum mt-0.5 block">
                {project.tools.join(", ")}
              </span>
            </div>
            <div>
              <span className="block text-[11px] font-sans text-plum-400 uppercase tracking-wider font-semibold">
                Deliverables
              </span>
              <span className="font-serif font-bold text-sm text-plum mt-0.5 block">
                Flows & Prototypes
              </span>
            </div>
          </div>
        </header>

        {/* Hero Mockup Showcase */}
        <div className="mb-16 p-8 sm:p-12 rounded-4xl bg-gradient-to-b from-cream-100 via-blush-100/40 to-white border border-blush-200 shadow-soft-lg flex justify-center items-center">
          <div className="w-full max-w-[320px]">
            <MockupFrame
              type={project.screens[0]?.type || "mobile"}
              variant={
                project.id.includes("womens")
                  ? "cycle"
                  : project.id.includes("ai")
                  ? "ai"
                  : project.id.includes("nutrition")
                  ? "nutrition"
                  : "healthcare"
              }
              title={project.title}
              category={project.domain}
            />
          </div>
        </div>

        {/* Overview & Problem Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Problem Card */}
          <div className="p-8 rounded-3xl bg-white border border-blush-200 shadow-soft">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-plum mb-3">The Problem</h2>
            <p className="font-sans text-sm sm:text-base text-plum-600 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="p-8 rounded-3xl bg-white border border-blush-200 shadow-soft">
            <div className="w-10 h-10 rounded-2xl bg-blush-200 flex items-center justify-center text-rose-700 mb-4">
              <SparkleIcon className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-plum mb-3">The Solution</h2>
            <p className="font-sans text-sm sm:text-base text-plum-600 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features / Scope */}
        <section className="mb-16 p-8 sm:p-10 rounded-3xl bg-white/90 border border-blush-200 shadow-soft">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum mb-6">
            Key Product Features & Workflows
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-cream-50 border border-blush-100 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-sm font-sans text-plum-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Breakdown (5 Steps) */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
              End-to-End Methodology
            </span>
            <h2 className="font-serif text-3xl font-bold text-plum mt-1">Design Process</h2>
          </div>

          <div className="space-y-6">
            {/* Step 1: Research */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 font-serif font-bold text-xl flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-plum mb-2">UX Research & Discovery</h3>
                <p className="text-sm text-plum-600 leading-relaxed">{project.process.research}</p>
              </div>
            </div>

            {/* Step 2: Flows */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 font-serif font-bold text-xl flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-plum mb-2">User Flows & Architecture</h3>
                <p className="text-sm text-plum-600 leading-relaxed">{project.process.flows}</p>
              </div>
            </div>

            {/* Step 3: Wireframes */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 font-serif font-bold text-xl flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-plum mb-2">Wireframing & Iteration</h3>
                <p className="text-sm text-plum-600 leading-relaxed">{project.process.wireframes}</p>
              </div>
            </div>

            {/* Step 4: UI Design */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 font-serif font-bold text-xl flex items-center justify-center shrink-0">
                04
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-plum mb-2">Visual UI & Design System</h3>
                <p className="text-sm text-plum-600 leading-relaxed">{project.process.uiDesign}</p>
              </div>
            </div>

            {/* Step 5: Interactive Prototype */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 font-serif font-bold text-xl flex items-center justify-center shrink-0">
                05
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-plum mb-2">Interactive Figma Prototype</h3>
                <p className="text-sm text-plum-600 leading-relaxed">{project.process.prototype}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Screens Gallery */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
              Interface Highlights
            </span>
            <h2 className="font-serif text-3xl font-bold text-plum mt-1">Key Screens Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screens.map((screen, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft flex flex-col justify-between"
              >
                <div className="mb-6 p-4 rounded-2xl bg-cream-50 border border-blush-100 flex justify-center items-center">
                  <div className="w-full max-w-[240px]">
                    <MockupFrame
                      type={screen.type}
                      variant={
                        project.id.includes("womens")
                          ? "cycle"
                          : project.id.includes("ai")
                          ? "ai"
                          : project.id.includes("nutrition")
                          ? "nutrition"
                          : "healthcare"
                      }
                      title={screen.title}
                      category={project.domain}
                      accentColor={screen.accentColor}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-plum mb-1">{screen.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-plum-600 leading-relaxed">
                    {screen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Outcome Section (Placeholder clearly marked in single data file) */}
        <section className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-cream-100 to-blush-100 border border-blush-300 shadow-soft">
          <div className="flex items-center gap-2 mb-3">
            <SparkleIcon className="w-4 h-4 text-rose-500" />
            <h2 className="font-serif text-2xl font-bold text-plum">Project Outcome</h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-plum-700 leading-relaxed bg-white/70 p-4 rounded-2xl border border-blush-200">
            {project.outcome}
          </p>
          <span className="block text-[11px] text-plum-400 mt-2 italic">
            * Note for Priya: Edit your specific project metrics or client feedback directly in /src/data/projects.ts
          </span>
        </section>

        {/* Next Project Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-blush-200 shadow-soft-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-1">
              Next Project
            </span>
            <h4 className="font-serif text-2xl font-bold text-plum">{nextProject.title}</h4>
            <p className="text-xs text-plum-500 mt-1">{nextProject.domain} • {nextProject.period}</p>
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-rose-600 transition-all shadow-soft"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
