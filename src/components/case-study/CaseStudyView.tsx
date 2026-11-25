"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import {
  SplitText,
  MaskImage,
  Parallax,
  ScrollDraw,
  StackedCards,
  HorizontalPin,
  MagneticButton,
} from "@/components/motion";
import { PhoneFrame, BrowserFrame } from "@/components/visuals/DeviceFrame";
import * as Screens from "@/components/visuals/ProjectScreens";
import * as Legacy from "@/components/visuals/LegacyScreens";
import BeforeAfterSlider from "@/components/common/BeforeAfterSlider";
import { SparkleIcon } from "@/components/common/Stickers";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Figma,
  Layers,
  Sparkles,
  GitBranch,
  Search,
  Layout,
  ExternalLink,
} from "lucide-react";

interface CaseStudyViewProps {
  project: Project;
  nextProject: Project;
}

const sectionNav = [
  { id: "cs-hero", label: "01 Hero" },
  { id: "cs-brief", label: "02 Brief" },
  { id: "cs-research", label: "03 Insights" },
  { id: "cs-flow", label: "04 Flows" },
  { id: "cs-wireframes", label: "05 Wireframes" },
  { id: "cs-before-after", label: "06 Before / After" },
  { id: "cs-hifi", label: "07 Hi-Fi Screens" },
  { id: "cs-system", label: "08 Design System" },
  { id: "cs-prototype", label: "09 Prototype" },
  { id: "cs-outcome", label: "10 Outcome" },
];

export default function CaseStudyView({ project, nextProject }: CaseStudyViewProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      sectionNav.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to render project-specific main screen
  const renderHeroScreen = (wireframe = false) => {
    switch (project.slug) {
      case "womens-health-app":
        return <Screens.WomensHealthCycleRingScreen wireframe={wireframe} />;
      case "ai-healthcare-module":
        return <Screens.AiChatScreen wireframe={wireframe} />;
      case "diet-nutrition-module":
        return <Screens.DietCalorieRingScreen wireframe={wireframe} />;
      case "invitation-app":
        return <Screens.InvitationPreviewCardScreen wireframe={wireframe} />;
      case "service-based-booking-platform":
        return <Screens.ServiceListCatalogScreen wireframe={wireframe} />;
      case "healthcare-mobile-app":
      default:
        return <Screens.HealthcareDashboardScreen wireframe={wireframe} />;
    }
  };

  // Helper to render project-specific legacy before screen
  const renderLegacyBefore = () => {
    switch (project.slug) {
      case "womens-health-app":
        return <Legacy.LegacyWomensHealthScreen />;
      case "ai-healthcare-module":
        return <Legacy.LegacyAiScreen />;
      case "diet-nutrition-module":
        return <Legacy.LegacyDietScreen />;
      case "invitation-app":
        return <Legacy.LegacyInvitationScreen />;
      case "service-based-booking-platform":
        return <Legacy.LegacyBookingScreen />;
      case "healthcare-mobile-app":
      default:
        return <Legacy.LegacyHealthcareScreen />;
    }
  };

  // Helper to render project-specific hi-fi screens list
  const renderHiFiGallery = () => {
    switch (project.slug) {
      case "womens-health-app":
        return [
          { title: "Cycle Calendar", comp: <Screens.WomensHealthCalendarScreen /> },
          { title: "Symptom Check-in", comp: <Screens.WomensHealthSymptomLoggerScreen /> },
          { title: "Hormone Insights", comp: <Screens.WomensHealthInsightsScreen /> },
          { title: "Clinical Records", comp: <Screens.WomensHealthRecordsScreen /> },
          { title: "PCOD Lifestyle Guide", comp: <Screens.WomensHealthPcodArticleScreen /> },
        ];
      case "ai-healthcare-module":
        return [
          { title: "Triage Chat", comp: <Screens.AiChatScreen /> },
          { title: "Quick Answer Pills", comp: <Screens.AiQuickRepliesScreen /> },
          { title: "Live Synthesis", comp: <Screens.AiTypingIndicatorScreen /> },
          { title: "Doctor Recommendation", comp: <Screens.AiSuggestionCardsScreen /> },
        ];
      case "diet-nutrition-module":
        return [
          { title: "Calorie & Macros", comp: <Screens.DietCalorieRingScreen /> },
          { title: "Hydration Glasses", comp: <Screens.DietWaterTrackerScreen /> },
          { title: "Meal Logs", comp: <Screens.DietMealLogScreen /> },
          { title: "7-Day Intake Trend", comp: <Screens.DietWeeklyChartScreen /> },
        ];
      case "invitation-app":
        return [
          { title: "Theme Inspiration", comp: <Screens.InvitationTemplatePickerScreen /> },
          { title: "Live Customization", comp: <Screens.InvitationEditorScreen /> },
          { title: "Wax Seal Monogram", comp: <Screens.InvitationPreviewCardScreen /> },
          { title: "Guest RSVP Tally", comp: <Screens.InvitationShareSheetScreen /> },
        ];
      case "service-based-booking-platform":
        return [
          { title: "Service Packages", comp: <Screens.ServiceListCatalogScreen /> },
          { title: "Specialist Portfolio", comp: <Screens.ServiceProviderCardScreen /> },
          { title: "Real-Time Slot Matrix", comp: <Screens.ServiceSlotPickerScreen /> },
          { title: "Instant Confirmation", comp: <Screens.ServiceConfirmationScreen /> },
        ];
      case "healthcare-mobile-app":
      default:
        return [
          { title: "Doctor Directory", comp: <Screens.HealthcareDoctorListScreen /> },
          { title: "Calendar Booking", comp: <Screens.HealthcareBookingCalendarScreen /> },
          { title: "Telemedicine Video", comp: <Screens.HealthcareTelemedicineScreen /> },
          { title: "Diagnostic Reports", comp: <Screens.HealthcareLabReportsScreen /> },
          { title: "Insurance Card", comp: <Screens.HealthcareInsuranceCardScreen /> },
          { title: "Family Care Network", comp: <Screens.HealthcareFamilyProfilesScreen /> },
        ];
    }
  };

  const isWebDevice = project.slug === "service-based-booking-platform";

  return (
    <div className="relative w-full">
      {/* Sticky Left Rail Progress Tracker */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-1.5 p-3 rounded-2xl bg-white/75 backdrop-blur-md border border-blush-200 shadow-soft-sm text-[10px] font-mono">
        <span className="text-[9px] uppercase tracking-wider text-rose-700 font-bold px-1 mb-1">
          Case Study
        </span>
        {sectionNav.map((sec, i) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`px-2 py-1 rounded-lg transition-all ${
              activeSection === i
                ? "bg-rose-500 text-white font-bold"
                : "text-plum-600 hover:text-rose-700 hover:bg-blush-50"
            }`}
          >
            {sec.label}
          </a>
        ))}
      </aside>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10 sm:py-16 space-y-24">
        {/* ========================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================= */}
        <section id="cs-hero" className="space-y-8">
          <div className="flex items-center justify-between">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all projects</span>
            </Link>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-100 text-rose-800">
              {project.category} • {project.domain}
            </span>
          </div>

          <div className="space-y-4">
            <SplitText
              as="h1"
              autoPlay
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight leading-tight"
            >
              {project.title}
            </SplitText>
            <p className="font-sans text-base sm:text-lg text-plum-600 leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Meta Row Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-3xl bg-white border border-blush-200 shadow-soft-sm text-xs text-plum-600">
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-700 block">Role</span>
              <span className="font-semibold text-plum mt-0.5 block">{project.role}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-700 block">Tools</span>
              <span className="font-semibold text-plum mt-0.5 block">{project.tools.join(", ")}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-700 block">Domain</span>
              <span className="font-semibold text-plum mt-0.5 block">{project.domain}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-700 block">Platform</span>
              <span className="font-semibold text-plum mt-0.5 block">{project.tags[0] || "Mobile App"}</span>
            </div>
          </div>

          {/* Hero Parallax Device Mockup */}
          <Parallax speed="slow" className="flex justify-center pt-4">
            {isWebDevice ? (
              <BrowserFrame url="booking.priya.design" title={project.title} className="max-w-2xl">
                <div className="p-6">{renderHeroScreen()}</div>
              </BrowserFrame>
            ) : (
              <PhoneFrame>
                {renderHeroScreen()}
              </PhoneFrame>
            )}
          </Parallax>
        </section>

        {/* ========================================================= */}
        {/* 2. BRIEF + PROBLEM STATEMENT */}
        {/* ========================================================= */}
        <section id="cs-brief" className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft space-y-6">
          <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-widest">
            <SparkleIcon className="w-3.5 h-3.5 text-rose-500" />
            <span>02 • Project Brief & Challenges</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                The Core Problem
              </h2>
              <p className="font-sans text-sm text-plum-600 leading-relaxed">
                {project.story?.brief || project.summary}
              </p>
            </div>
            <div className="md:col-span-6 space-y-3">
              <StackedCards>
                <div className="p-5 rounded-2xl bg-cream-50 border border-blush-200 text-xs space-y-1">
                  <span className="font-bold text-rose-700 block">Challenge 1: User Friction</span>
                  <p className="text-plum-600 leading-relaxed">Complex multi-screen navigation caused patient drop-offs and cognitive fatigue.</p>
                </div>
                <div className="p-5 rounded-2xl bg-blush-100 border border-blush-300 text-xs space-y-1">
                  <span className="font-bold text-plum-800 block">Challenge 2: Clarity & Trust</span>
                  <p className="text-plum-700 leading-relaxed">Medical reports and cancellation policies were ambiguous and buried in nested settings.</p>
                </div>
              </StackedCards>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. RESEARCH & QUALITATIVE INSIGHTS */}
        {/* ========================================================= */}
        <section id="cs-research" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">
              03 • Empathic UX Research
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
              Qualitative Discoveries
            </h2>
          </div>
          <div className="p-8 rounded-4xl bg-cream-50 border border-blush-200 shadow-soft space-y-4">
            <p className="font-sans text-sm text-plum-700 leading-relaxed">
              {project.story?.research || "Conducted comprehensive qualitative journey evaluations, identifying critical friction drop-off points."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-blush-200 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-blush-100">
                <span className="font-bold text-plum block mb-1">Qualitative Interviews</span>
                <span className="text-plum-500">Uncovering emotional triggers during appointments</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-blush-100">
                <span className="font-bold text-plum block mb-1">Accessibility Audit</span>
                <span className="text-plum-500">48px+ touch targets and WCAG AA contrast ratio</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-blush-100">
                <span className="font-bold text-plum block mb-1">Thumb-Zone Mapping</span>
                <span className="text-plum-500">One-handed reachability for bottom navigation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. USER FLOW ARCHITECTURE */}
        {/* ========================================================= */}
        <section id="cs-flow" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">
              04 • Information Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
              Streamlined User Journey
            </h2>
          </div>
          <div className="p-8 rounded-4xl bg-white border border-blush-200 shadow-soft space-y-6">
            <p className="text-xs sm:text-sm text-plum-600 leading-relaxed">
              {project.story?.userFlow || "Structured clean task trees to eliminate navigation dead-ends."}
            </p>
            {/* Animated SVG Path connecting nodes */}
            <div className="p-4 rounded-3xl bg-cream-50 border border-blush-200 flex items-center justify-center">
              <ScrollDraw className="w-full max-w-lg h-20">
                <path
                  d="M 20 40 L 150 40 L 280 40 L 460 40"
                  stroke="#D9577B"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
              </ScrollDraw>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. WIREFRAMES (HORIZONTAL PIN SCROLLER) */}
        {/* ========================================================= */}
        <section id="cs-wireframes" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">
              05 • Low-Fidelity Wireframes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
              Structural Layout Explorations
            </h2>
          </div>
          <HorizontalPin>
            <div className="w-[300px] shrink-0 p-4">
              <PhoneFrame wireframe>
                {renderHeroScreen(true)}
              </PhoneFrame>
            </div>
            <div className="w-[300px] shrink-0 p-4">
              <PhoneFrame wireframe>
                {renderHeroScreen(true)}
              </PhoneFrame>
            </div>
          </HorizontalPin>
        </section>

        {/* ========================================================= */}
        {/* 6. BEFORE / AFTER REDESIGN SLIDER */}
        {/* ========================================================= */}
        <section id="cs-before-after" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">
                06 • Before vs. After Redesign
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
                Friction vs. Flow Comparison
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-lilac-200 text-plum uppercase">
              Drag Slider
            </span>
          </div>

          <div className="p-6 sm:p-10 rounded-4xl bg-white border border-blush-200 shadow-soft">
            <BeforeAfterSlider
              beforeComponent={renderLegacyBefore()}
              afterComponent={renderHeroScreen(false)}
              beforeLabel="Legacy (Cluttered)"
              afterLabel="Redesign (Pastel UI)"
              aspectRatio="16/10"
            />
            {/* 3 Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-blush-100 text-xs">
              <div className="p-3.5 rounded-2xl bg-cream-50 border border-blush-200">
                <span className="font-bold text-rose-700 block mb-1">1. Hierarchy</span>
                <span className="text-plum-600">Replaced competing CTAs with one primary focal action.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-cream-50 border border-blush-200">
                <span className="font-bold text-rose-700 block mb-1">2. Spacing</span>
                <span className="text-plum-600">Expanded tight 4px margins into generous 24px-32px padding.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-cream-50 border border-blush-200">
                <span className="font-bold text-rose-700 block mb-1">3. Clarity</span>
                <span className="text-plum-600">Pastel visual tokens eliminate cognitive patient anxiety.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. HI-FI SCREENS GALLERY */}
        {/* ========================================================= */}
        <section id="cs-hifi" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">
              07 • High-Fidelity UI Gallery
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
              Key Interactive Experiences
            </h2>
          </div>
          <HorizontalPin>
            {renderHiFiGallery().map((screen, idx) => (
              <div key={idx} className="w-[300px] shrink-0 p-3">
                <span className="font-serif font-bold text-xs text-plum block mb-2">
                  {idx + 1}. {screen.title}
                </span>
                <PhoneFrame>
                  {screen.comp}
                </PhoneFrame>
              </div>
            ))}
          </HorizontalPin>
        </section>

        {/* ========================================================= */}
        {/* 8. DESIGN SYSTEM TOKENS USED */}
        {/* ========================================================= */}
        <section id="cs-system" className="p-8 sm:p-12 rounded-4xl bg-white border border-blush-200 shadow-soft space-y-6">
          <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-rose-500" />
            <span>08 • Design System Tokens</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
            Atomic Tokens Implemented
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.story?.designSystem?.colors?.map((c) => (
              <div key={c.name} className="p-3 rounded-2xl bg-cream-50 border border-blush-200 text-xs">
                <span
                  className="w-5 h-5 rounded-full border border-black/10 block mb-2"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="font-semibold text-plum block">{c.name}</span>
                <span className="font-mono text-[10px] text-plum-500">{c.hex}</span>
              </div>
            )) || (
              <div className="text-xs text-plum-500">Design system token specs defined in Figma.</div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. PROTOTYPE INTERACTION */}
        {/* ========================================================= */}
        <section id="cs-prototype" className="p-8 sm:p-12 rounded-4xl bg-cream-50 border border-blush-200 shadow-soft text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block">
            09 • Interactive Prototyping
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
            Tested Micro-Interactions in Figma
          </h2>
          <p className="font-sans text-xs sm:text-sm text-plum-600 max-w-xl mx-auto leading-relaxed">
            {project.story?.prototype || "Clickable prototype validating screen transitions, tap targets, and bottom sheet drawers."}
          </p>
        </section>

        {/* ========================================================= */}
        {/* 10. OUTCOME & NEXT PROJECT */}
        {/* ========================================================= */}
        <section id="cs-outcome" className="space-y-8">
          <div className="p-8 rounded-4xl bg-white border border-blush-200 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">
              10 • Outcome & Reflection
            </span>
            <h2 className="font-serif text-2xl font-bold text-plum mb-3">Project Deliverables</h2>
            <p className="text-sm text-plum-600 leading-relaxed">
              {project.story?.outcome || "Comprehensive Figma design deliverables completed ready for developer handoff."}
            </p>
          </div>

          {/* Giant Next Project Banner */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-10 sm:p-14 rounded-4xl bg-gradient-to-br from-cream-100 via-blush-50 to-white border border-blush-300 shadow-soft-lg hover:border-rose-400 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-rose-700 font-bold uppercase block mb-1">
                  Next Case Study →
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-plum group-hover:text-rose-700 transition-colors">
                  {nextProject.title}
                </h3>
                <span className="text-xs text-plum-500 mt-1 block">{nextProject.subtitle}</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
