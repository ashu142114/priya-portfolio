"use client";

import { useState } from "react";
import Link from "next/link";
import { SparkleIcon } from "@/components/common/Stickers";
import { WebLandingShowcase } from "@/components/visuals/WebLandingShowcase";
import { PrintAndBannerStudio } from "@/components/visuals/PrintAndBannerStudio";
import { ArrowLeft, Image as ImageIcon, Sparkles, X, Eye, ZoomIn } from "lucide-react";

interface GraphicPiece {
  id: string;
  title: string;
  category: "Banners" | "Flyers" | "Brochures" | "Invitations" | "Social" | "Cards";
  domain: string;
  dimensions: string;
  tools: string[];
  summary: string;
  aspectRatio: string;
  bgGradient: string;
  previewContent: React.ReactNode;
}

const graphicPieces: GraphicPiece[] = [
  {
    id: "g1",
    title: "Healthcare Awareness Web Banner",
    category: "Banners",
    domain: "Healthcare",
    dimensions: "1200 x 628 px",
    tools: ["Figma", "Canva"],
    summary: "Google Display and web header banner emphasizing preventative cardiac checkups.",
    aspectRatio: "aspect-[12/6]",
    bgGradient: "from-blush-200 via-rose-100 to-cream-100",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-left">
        <span className="text-[10px] font-bold uppercase text-rose-700 tracking-wider">Preventative Health • 2026</span>
        <div>
          <h4 className="font-serif font-bold text-xl sm:text-2xl text-plum leading-tight">Prioritize Your Heart Health</h4>
          <p className="text-xs text-plum-600 mt-1 max-w-sm">Compassionate cardiac screening packages with top specialists in Surat.</p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <span className="px-4 py-2 rounded-full bg-rose-500 text-white text-[11px] font-bold shadow-soft">Book Consultation</span>
          <span className="text-[10px] text-plum-500">24/7 Support Available</span>
        </div>
      </div>
    ),
  },
  {
    id: "g2",
    title: "Salon & Wellness Spa Promo Flyer",
    category: "Flyers",
    domain: "SaaS & Wellness",
    dimensions: "A5 Print (148 x 210 mm)",
    tools: ["Canva", "Figma"],
    summary: "Print-ready luxury promotional flyer for therapeutic skincare and organic massage treatments.",
    aspectRatio: "aspect-[3/4]",
    bgGradient: "from-cream-100 via-blush-100 to-lilac-100",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-center">
        <div>
          <span className="text-[9px] uppercase tracking-widest text-plum-500 font-bold">Aura Wellness Studio</span>
          <h4 className="font-serif font-bold text-lg text-plum mt-1">Holistic Rejuvenation</h4>
        </div>
        <div className="p-4 rounded-2xl bg-white/80 border border-blush-200 text-xs text-plum-600 space-y-1">
          <div>• Deep Tissue Aromatherapy</div>
          <div>• Organic Botanicals Facial</div>
          <div>• Stress Relief Hydro-Soak</div>
        </div>
        <span className="text-[10px] font-mono text-rose-700 font-bold">Surat Studio • Ring Road</span>
      </div>
    ),
  },
  {
    id: "g3",
    title: "Luxury Foil Wedding Invitation Card",
    category: "Invitations",
    domain: "Event Management",
    dimensions: "5 x 7 inches",
    tools: ["Figma", "Canva"],
    summary: "Bespoke digital & print stationery with embossed rose-gold monogram accents.",
    aspectRatio: "aspect-[5/7]",
    bgGradient: "from-cream-50 via-white to-blush-100",
    previewContent: (
      <div className="flex flex-col items-center justify-between h-full p-6 text-center border-2 border-rose-300/40 rounded-3xl m-2">
        <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-serif text-sm font-bold shadow-soft">
          A&M
        </div>
        <div>
          <span className="text-[9px] uppercase tracking-widest text-rose-600 font-serif block">Together with Families</span>
          <h4 className="font-serif font-bold text-xl text-plum mt-1">Aarav & Meera</h4>
          <p className="text-[10px] text-plum-500 mt-1">Celebrate our union in Surat</p>
        </div>
        <span className="font-mono text-[10px] text-rose-700 font-bold">December 18, 2026</span>
      </div>
    ),
  },
  {
    id: "g4",
    title: "Executive Tactile Business Card",
    category: "Cards",
    domain: "Corporate & Identity",
    dimensions: "3.5 x 2.0 inches",
    tools: ["Figma"],
    summary: "Spot UV coated business card featuring a geometric monogram and smart profile QR.",
    aspectRatio: "aspect-[16/10]",
    bgGradient: "from-white to-cream-100",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-left border border-blush-200 rounded-3xl">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-serif font-bold text-base text-plum">Priya K. Lakkad</h4>
            <span className="text-[10px] text-rose-700 font-semibold">UI/UX & Product Designer</span>
          </div>
          <div className="w-8 h-8 rounded-xl bg-plum text-white flex items-center justify-center font-serif font-bold text-xs">P.</div>
        </div>
        <div className="text-[9px] font-mono text-plum-500 flex justify-between">
          <span>priyalakkad11@gmail.com</span>
          <span>+91 70486 28505</span>
        </div>
      </div>
    ),
  },
  {
    id: "g5",
    title: "Clinical Tri-Fold Brochure (Front)",
    category: "Brochures",
    domain: "Healthcare",
    dimensions: "A4 Tri-Fold",
    tools: ["Figma", "Canva"],
    summary: "Informative tri-fold medical brochure front panel explaining patient telemetry services.",
    aspectRatio: "aspect-[3/4]",
    bgGradient: "from-cream-100 via-blush-50 to-rose-100",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-left">
        <span className="text-[9px] font-bold uppercase tracking-wider text-rose-700">Medical Guide • Vol 1</span>
        <div>
          <h4 className="font-serif font-bold text-lg text-plum leading-tight">Comprehensive Telehealth</h4>
          <p className="text-[10px] text-plum-600 mt-1">Connecting families with certified hospital consultants in minutes.</p>
        </div>
        <span className="text-[9px] font-mono text-plum-500">Fold Panel A • 300 DPI CMYK</span>
      </div>
    ),
  },
  {
    id: "g6",
    title: "Clinical Tri-Fold Brochure (Inside Spread)",
    category: "Brochures",
    domain: "Healthcare",
    dimensions: "A4 Tri-Fold Inside",
    tools: ["Figma"],
    summary: "Interior 3-column spread detailing consultation tiers, insurance partnerships, and vitals tracking.",
    aspectRatio: "aspect-[16/9]",
    bgGradient: "from-white via-cream-50 to-blush-50",
    previewContent: (
      <div className="grid grid-cols-3 gap-3 h-full p-6 text-left text-[9px] divide-x divide-blush-200">
        <div className="space-y-1">
          <span className="font-bold text-plum block">1. Registration</span>
          <p className="text-plum-600">Quick profile creation with digital health ID linkage.</p>
        </div>
        <div className="space-y-1 pl-3">
          <span className="font-bold text-rose-700 block">2. Triage & Match</span>
          <p className="text-plum-600">Smart routing to verified specialists across 18 departments.</p>
        </div>
        <div className="space-y-1 pl-3">
          <span className="font-bold text-plum block">3. Digital Reports</span>
          <p className="text-plum-600">Automated lab summaries and digital prescription vault.</p>
        </div>
      </div>
    ),
  },
  {
    id: "g7",
    title: "Instagram Educational Carousel Slide 1",
    category: "Social",
    domain: "Healthcare UX",
    dimensions: "1080 x 1350 px (4:5)",
    tools: ["Canva", "Figma"],
    summary: "Visual slide breaking down how cognitive load affects patient health app adoption.",
    aspectRatio: "aspect-[4/5]",
    bgGradient: "from-plum-950 via-plum-900 to-plum-950 text-white",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-left text-white">
        <span className="text-[9px] uppercase font-mono text-rose-300 font-bold">UX Insight 01/03</span>
        <div>
          <h4 className="font-serif font-bold text-xl leading-tight">Why Patients Abandon Booking Flows</h4>
          <p className="text-xs text-rose-100/80 mt-2">Ambiguous cancellation rules and hidden fees increase anxiety by 3x.</p>
        </div>
        <span className="text-[10px] text-rose-300 font-medium">Swipe to solution →</span>
      </div>
    ),
  },
  {
    id: "g8",
    title: "Instagram Educational Carousel Slide 2",
    category: "Social",
    domain: "Healthcare UX",
    dimensions: "1080 x 1350 px (4:5)",
    tools: ["Canva", "Figma"],
    summary: "Visual slide illustrating the 3-tap transparent appointment scheduling funnel.",
    aspectRatio: "aspect-[4/5]",
    bgGradient: "from-rose-500 via-rose-600 to-plum-900 text-white",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-left text-white">
        <span className="text-[9px] uppercase font-mono text-rose-200 font-bold">The Solution 02/03</span>
        <div>
          <h4 className="font-serif font-bold text-xl leading-tight">The 3-Tap Booking Framework</h4>
          <p className="text-xs text-rose-100/80 mt-2">1. Select Specialist &bull; 2. Pick Slot &bull; 3. Transparent Summary.</p>
        </div>
        <span className="text-[10px] text-rose-200 font-medium">Swipe to results →</span>
      </div>
    ),
  },
  {
    id: "g9",
    title: "Mobile Story Template (Event RSVP)",
    category: "Social",
    domain: "Event Management",
    dimensions: "1080 x 1920 px (9:16)",
    tools: ["Canva"],
    summary: "Vertical mobile story creative for Instagram & WhatsApp with direct RSVP swipe-up link.",
    aspectRatio: "aspect-[9/16]",
    bgGradient: "from-blush-200 via-rose-100 to-cream-200",
    previewContent: (
      <div className="flex flex-col items-center justify-between h-full p-6 text-center">
        <span className="text-[9px] uppercase tracking-widest text-rose-700 font-bold">Special Invitation</span>
        <div>
          <h4 className="font-serif font-bold text-lg text-plum leading-tight">Celebrate with Us</h4>
          <span className="text-xs text-plum-600 mt-1 block">Live WhatsApp RSVP Link</span>
        </div>
        <div className="px-4 py-2 rounded-full bg-rose-500 text-white text-[10px] font-bold shadow-soft">
          Swipe Up to RSVP
        </div>
      </div>
    ),
  },
  {
    id: "g10",
    title: "Seasonal Wellness Campaign Banner",
    category: "Banners",
    domain: "E-commerce",
    dimensions: "1200 x 500 px",
    tools: ["Figma"],
    summary: "E-commerce web campaign banner for winter wellness and ayurvedic health packages.",
    aspectRatio: "aspect-[12/5]",
    bgGradient: "from-cream-100 via-lilac-100 to-blush-100",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-left">
        <span className="text-[9px] uppercase tracking-widest text-plum-500 font-bold">Winter Care 2026</span>
        <div>
          <h4 className="font-serif font-bold text-xl text-plum">Gentle Natural Wellness</h4>
          <p className="text-xs text-plum-600">Curated plant-based nutrition bundles for seasonal immunity.</p>
        </div>
        <span className="text-[10px] font-bold text-rose-700">Explore Collection &bull; Free Delivery</span>
      </div>
    ),
  },
  {
    id: "g11",
    title: "Dental Clinic Promotional Flyer",
    category: "Flyers",
    domain: "Healthcare",
    dimensions: "A5 Print Flyer",
    tools: ["Canva", "Figma"],
    summary: "Modern, fear-free clinical flyer for pediatric and family dental wellness consultations.",
    aspectRatio: "aspect-[3/4]",
    bgGradient: "from-white via-cyan-50 to-cream-100",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-left">
        <span className="text-[9px] uppercase font-bold text-cyan-700 tracking-wider">Painless Care</span>
        <div>
          <h4 className="font-serif font-bold text-lg text-plum">Gentle Family Dentistry</h4>
          <p className="text-[10px] text-plum-600 mt-1">Calm clinical environments designed for anxious first-time patients.</p>
        </div>
        <span className="text-[10px] font-mono text-cyan-800 font-bold">Surat Dental Studio</span>
      </div>
    ),
  },
  {
    id: "g12",
    title: "VIP Conference Speaker Badge & Pass",
    category: "Cards",
    domain: "Event Management",
    dimensions: "4 x 6 inches Lanyard",
    tools: ["Figma"],
    summary: "Conference delegate lanyard card with speaker schedule matrix and QR check-in.",
    aspectRatio: "aspect-[4/6]",
    bgGradient: "from-plum-950 via-plum-900 to-plum-950 text-white",
    previewContent: (
      <div className="flex flex-col justify-between h-full p-6 text-center text-white">
        <span className="text-[9px] uppercase font-mono text-rose-300 font-bold">Design Summit 2026</span>
        <div>
          <h4 className="font-serif font-bold text-xl">Keynote Speaker</h4>
          <span className="text-xs text-rose-200 mt-0.5 block">VIP Access Pass</span>
        </div>
        <span className="text-[9px] font-mono text-plum-300">Surat International Hall</span>
      </div>
    ),
  },
];

const categories = ["All", "Banners", "Flyers", "Brochures", "Invitations", "Social", "Cards"] as const;

export default function GraphicDesignPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<GraphicPiece | null>(null);

  const filtered = activeCategory === "All"
    ? graphicPieces
    : graphicPieces.filter((g) => g.category === activeCategory);

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all work</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-800 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
              <ImageIcon className="w-3.5 h-3.5 text-rose-600" />
              <span>Marketing & Print Collateral</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum tracking-tight">
              Advertising & Print Collateral
            </h1>
            <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
              12+ marketing creative pieces crafted in Figma and Canva: digital display banners, print flyers, tri-fold brochures, luxury event invitations, and social carousels.
            </p>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-blush-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-rose-500 text-white shadow-soft"
                  : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              data-cursor="View"
              className="group cursor-pointer rounded-4xl bg-white border border-blush-200 shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Graphic Canvas with Hover Zoom */}
              <div className={`w-full ${item.aspectRatio} bg-gradient-to-br ${item.bgGradient} overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500`}>
                {item.previewContent}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-plum text-xs font-bold shadow-soft flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-rose-600" />
                    <span>Inspect</span>
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-lilac-200 text-plum-900 border border-lilac-300">
                    Sample
                  </span>
                  <span className="text-[10px] font-semibold text-rose-700">{item.category}</span>
                  <span className="text-[10px] text-plum-400">• {item.domain}</span>
                </div>
                <h3 className="font-serif font-bold text-base text-plum group-hover:text-rose-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-plum-600 mt-1 line-clamp-2">{item.summary}</p>
                <div className="pt-3 mt-3 border-t border-blush-100 flex items-center justify-between text-[11px] text-plum-500 font-mono">
                  <span>{item.dimensions}</span>
                  <span className="text-rose-600 font-semibold">{item.tools.join(" / ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Responsive Websites & Print/Banner Studio */}
        <div className="space-y-20 mb-20">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blush-200 pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lilac-200 text-plum-900 border border-lilac-300 mr-2">
                  Concept
                </span>
                <span className="text-xs font-mono text-rose-700 font-bold uppercase">
                  Responsive Website Landing Pages (Scroll inside browser)
                </span>
              </div>
            </div>
            <WebLandingShowcase />
          </div>

          <PrintAndBannerStudio />
        </div>

        {/* Lightbox Modal */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="bg-white rounded-4xl max-w-2xl w-full p-6 sm:p-8 shadow-soft-xl border border-blush-200 space-y-6 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center text-plum hover:bg-rose-100 hover:text-rose-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-lilac-200 text-plum-900">
                  Sample Deliverable
                </span>
                <span className="text-xs font-semibold text-rose-700">{activeModalItem.category}</span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-2xl text-plum">{activeModalItem.title}</h3>
                <p className="text-xs text-plum-600 mt-1">{activeModalItem.summary}</p>
              </div>

              {/* Full Preview Canvas */}
              <div className={`w-full ${activeModalItem.aspectRatio} bg-gradient-to-br ${activeModalItem.bgGradient} rounded-3xl overflow-hidden shadow-soft`}>
                {activeModalItem.previewContent}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blush-100 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase text-plum-400 block">Canvas Dimensions</span>
                  <span className="font-mono font-semibold text-plum mt-0.5 block">{activeModalItem.dimensions}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-plum-400 block">Design Software</span>
                  <span className="font-semibold text-rose-700 mt-0.5 block">{activeModalItem.tools.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
