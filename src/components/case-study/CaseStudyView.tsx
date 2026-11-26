"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { getScenario } from "@/data/scenarios";
import {
  SplitText,
  MaskImage,
  Parallax,
  ScrollDraw,
  StackedCards,
  HorizontalPin,
  MagneticButton,
} from "@/components/motion";
import { PhoneFrame, AndroidFrame, TabletFrame, BrowserFrame } from "@/components/visuals/DeviceFrame";
import * as Screens from "@/components/visuals/ProjectScreens";
import * as Legacy from "@/components/visuals/LegacyScreens";
import {
  ScenarioMobileHero,
  ScenarioUiStates,
} from "@/components/visuals/DeepProjectScreens";
import { ScreenWrapper } from "@/components/factory/ScreenWrapper";
import { ProcessArtifacts } from "@/components/factory/ProcessArtifacts";
import * as P1 from "@/components/factory/Project1Healthcare";
import * as P2 from "@/components/factory/Project2WomensHealth";
import * as P3 from "@/components/factory/Project3AiModule";
import * as P4 from "@/components/factory/Project4Diet";
import * as P5 from "@/components/factory/Project5Invitation";
import * as P6 from "@/components/factory/Project6Booking";
import { LazyViewport } from "@/components/visuals/LazyViewport";
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

  // Helper to render project-specific hi-fi screens list from the Screen Factory
  const renderHiFiGallery = (): Array<{ id: string; title: string; comp: React.ReactNode; android?: boolean }> => {
    switch (project.slug) {
      case "womens-health-app":
        return [
          { id: "wh-onboarding", title: "Privacy Onboarding", comp: <P2.WhOnboardingScreen /> },
          { id: "wh-cycle-home", title: "Cycle Phase Ring", comp: <P2.WhCycleHomeScreen /> },
          { id: "wh-calendar-phase", title: "Fertile & Phase Calendar", comp: <P2.WhCalendarPhaseScreen /> },
          { id: "wh-symptom-logger", title: "Daily Symptom Logger", comp: <P2.WhSymptomLoggerScreen />, android: true },
          { id: "wh-insights", title: "Cycle Pattern Insights", comp: <P2.WhInsightsScreen /> },
          { id: "wh-records", title: "Hormone Lab Vault", comp: <P2.WhHealthRecordsScreen /> },
          { id: "wh-pcod-article", title: "PCOD Lifestyle Guide", comp: <P2.WhPcodArticleScreen /> },
          { id: "wh-reminders", title: "Gentle Reminders", comp: <P2.WhRemindersScreen /> },
          { id: "wh-settings", title: "Discreet Lock & Export", comp: <P2.WhSettingsScreen /> },
        ];
      case "ai-healthcare-module":
        return [
          { id: "ai-chat-bubbles", title: "Symptom Intake Chat", comp: <P3.AiChatBubblesScreen /> },
          { id: "ai-quick-replies", title: "Structured Quick Replies", comp: <P3.AiQuickRepliesScreen /> },
          { id: "ai-typing", title: "Clinical Synthesis State", comp: <P3.AiTypingStateScreen />, android: true },
          { id: "ai-triage-result", title: "Urgency Triage Result", comp: <P3.AiTriageResultScreen /> },
          { id: "ai-doctor-handoff", title: "Doctor Handoff Summary", comp: <P3.AiDoctorHandoffScreen /> },
          { id: "ai-history", title: "Past Triage Sessions", comp: <P3.AiHistoryScreen /> },
          { id: "ai-voice-input", title: "Voice Symptom Input", comp: <P3.AiVoiceInputScreen /> },
          { id: "ai-lab-explainer", title: "Plain-Language Lab Explainer", comp: <P3.AiLabExplainerScreen /> },
          { id: "ai-emergency", title: "Red-Flag Escalation Card", comp: <P3.AiEmergencyAlertScreen /> },
        ];
      case "diet-nutrition-module":
        return [
          { id: "diet-onboarding", title: "Goal & Thali Calibration", comp: <P4.DietOnboardingScreen /> },
          { id: "diet-dashboard", title: "Daily Calorie & Macro Rings", comp: <P4.DietDashboardScreen /> },
          { id: "diet-meal-log", title: "Indian Portion Meal Log", comp: <P4.DietMealLogScreen />, android: true },
          { id: "diet-food-detail", title: "Food Macro Breakdown", comp: <P4.DietFoodDetailScreen /> },
          { id: "diet-water", title: "Hydration Glass Tracker", comp: <P4.DietWaterTrackerScreen /> },
          { id: "diet-weekly", title: "7-Day Nutrition Trend", comp: <P4.DietWeeklyReportScreen /> },
          { id: "diet-recipes", title: "Vegetarian Tiffin Recipes", comp: <P4.DietRecipesScreen /> },
        ];
      case "invitation-app":
        return [
          { id: "inv-gallery", title: "Festive & Wedding Gallery", comp: <P5.InvTemplateGalleryScreen /> },
          { id: "inv-editor", title: "Live Foil & Type Editor", comp: <P5.InvEditorCanvasScreen /> },
          { id: "inv-guests", title: "Family Guest & RSVP List", comp: <P5.InvGuestListScreen />, android: true },
          { id: "inv-share", title: "WhatsApp & QR Share Sheet", comp: <P5.InvShareSheetScreen /> },
        ];
      case "service-based-booking-platform":
        return [
          { id: "bk-services", title: "Transparent INR Catalog", comp: <P6.BkServiceListScreen /> },
          { id: "bk-provider", title: "Specialist Bio & Portfolio", comp: <P6.BkProviderProfileScreen /> },
          { id: "bk-datetime", title: "Live Slot Matrix", comp: <P6.BkDateTimeScreen />, android: true },
          { id: "bk-checkout", title: "UPI & Policy Checkout", comp: <P6.BkCheckoutScreen /> },
        ];
      case "healthcare-mobile-app":
      default:
        return [
          { id: "hc-onboarding", title: "Calm Care Onboarding", comp: <P1.HcOnboardingScreen /> },
          { id: "hc-otp", title: "OTP Sign-In Verification", comp: <P1.HcOtpSignInScreen /> },
          { id: "hc-home", title: "Patient Home Dashboard", comp: <P1.HcHomeDashboardScreen /> },
          { id: "hc-search", title: "Specialist Search & Filters", comp: <P1.HcDoctorSearchScreen />, android: true },
          { id: "hc-profile", title: "Doctor Profile & Credentials", comp: <P1.HcDoctorProfileScreen /> },
          { id: "hc-slots", title: "Date & Time Slot Picker", comp: <P1.HcSlotBookingScreen /> },
          { id: "hc-payment", title: "INR UPI Payment Sheet", comp: <P1.HcPaymentScreen /> },
          { id: "hc-confirm", title: "Appointment Confirmation", comp: <P1.HcConfirmationScreen /> },
          { id: "hc-telemed", title: "Telemedicine Video Call", comp: <P1.HcTelemedicineScreen /> },
          { id: "hc-labs", title: "Diagnostic Lab Reports", comp: <P1.HcLabReportsScreen /> },
          { id: "hc-insurance", title: "Digital Insurance Card", comp: <P1.HcInsuranceCardScreen /> },
          { id: "hc-family", title: "Family Care Profiles", comp: <P1.HcFamilyMembersScreen /> },
        ];
    }
  };

  const renderWebDashboard = () => {
    switch (project.slug) {
      case "womens-health-app":
        return <P2.WhWebDashboard />;
      case "ai-healthcare-module":
        return <P3.AiWebAssistantAdmin />;
      case "diet-nutrition-module":
        return <P4.DietWebProgressDashboard />;
      case "invitation-app":
        return <P5.InvWebRsvpAndPrintedCards />;
      case "service-based-booking-platform":
        return <P6.BkProviderWebAndEmails />;
      case "healthcare-mobile-app":
      default:
        return <P1.HcWebDoctorDashboard />;
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
          <div className="p-8 rounded-4xl bg-cream-50 border border-blush-200 shadow-soft space-y-6">
            <p className="font-sans text-sm text-plum-700 leading-relaxed">
              {project.story?.research || "Conducted qualitative journey evaluations, identifying friction points and key user personas."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-blush-200 text-xs">
              {getScenario(project.slug).personas.map((persona) => (
                <div key={persona.name} className="p-4 rounded-2xl bg-white border border-blush-100 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-plum">{persona.name}, {persona.age}</span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-blush-100 text-rose-800">{persona.role}</span>
                  </div>
                  <p className="text-plum-600 leading-relaxed">{persona.goal}</p>
                </div>
              ))}
            </div>
          </div>
          <ProcessArtifacts slug={project.slug} mode="research" />
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
          <ProcessArtifacts slug={project.slug} mode="flow" />
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
          <ProcessArtifacts slug={project.slug} mode="wireframes" />
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
        {/* 7. HI-FI SCREENS GALLERY (MOBILE + ADMIN WEB + STATES) */}
        {/* ========================================================= */}
        <section id="cs-hifi" className="space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block mb-2">
              07 • Multi-Platform High-Fidelity UI
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
              Mobile, Tablet, Web &amp; System States
            </h2>
          </div>

          <HorizontalPin>
            <div className="w-[300px] shrink-0 p-3">
              <ScreenWrapper projectSlug={project.slug} screenId="hero-overview" title={`1. ${getScenario(project.slug).brandName} Overview`}>
                <PhoneFrame screenBg={getScenario(project.slug).palette.bg}>
                  <ScenarioMobileHero slug={project.slug} />
                </PhoneFrame>
              </ScreenWrapper>
            </div>
            {renderHiFiGallery().map((screen, idx) => (
              <div key={screen.id} className="w-[300px] shrink-0 p-3">
                <ScreenWrapper projectSlug={project.slug} screenId={screen.id} title={`${idx + 2}. ${screen.title}`}>
                  {screen.android ? (
                    <AndroidFrame>{screen.comp}</AndroidFrame>
                  ) : (
                    <PhoneFrame>{screen.comp}</PhoneFrame>
                  )}
                </ScreenWrapper>
              </div>
            ))}
          </HorizontalPin>

          {/* Desktop / Admin Operations Console */}
          <LazyViewport minHeight="360px">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-plum-500 block">
                Web &amp; Operations Dashboard View
              </span>
              <ScreenWrapper projectSlug={project.slug} screenId="web-dashboard" title={`${getScenario(project.slug).brandName} Web Suite`}>
                <BrowserFrame url={`${project.slug}.concept.design`} title={getScenario(project.slug).brandName}>
                  {renderWebDashboard()}
                </BrowserFrame>
              </ScreenWrapper>
            </div>
          </LazyViewport>

          {/* Edge States: Skeleton / Empty / Success / Error */}
          <LazyViewport minHeight="180px">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-plum-500 block">
                Component &amp; Edge States (Loading, Empty, Success, Error)
              </span>
              <ScenarioUiStates slug={project.slug} />
            </div>
          </LazyViewport>
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
          <ProcessArtifacts slug={project.slug} mode="system" />
        </section>

        {/* ========================================================= */}
        {/* 9. PROTOTYPE INTERACTION */}
        {/* ========================================================= */}
        <section id="cs-prototype" className="p-8 sm:p-12 rounded-4xl bg-cream-50 border border-blush-200 shadow-soft space-y-6">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 block">
              09 • Interactive Prototyping
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
              Tested Micro-Interactions in Figma
            </h2>
            <p className="font-sans text-xs sm:text-sm text-plum-600 max-w-xl mx-auto leading-relaxed">
              {project.story?.prototype || "Clickable prototype validating screen transitions, tap targets, and bottom sheet drawers."}
            </p>
          </div>
          <ProcessArtifacts slug={project.slug} mode="prototype" />
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
