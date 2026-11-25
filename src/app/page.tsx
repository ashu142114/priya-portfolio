import Chapter1Hero from "@/components/story/Chapter1Hero";
import Chapter2Themes from "@/components/story/Chapter2Themes";
import Chapter3BeforeAfter from "@/components/story/Chapter3BeforeAfter";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import WhatIDoSection from "@/components/home/WhatIDoSection";
import AboutSnippetSection from "@/components/home/AboutSnippetSection";
import ScrollProgress from "@/components/story/ScrollProgress";

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* Side Chapter Tracker (01 / 07) */}
      <ScrollProgress />

      {/* Chapter 01: Hero with line-by-line reveal & theme preset dots */}
      <Chapter1Hero />

      {/* Chapter 02: Multi-Theme Scroll with live CSS variable HUD inspector */}
      <Chapter2Themes />

      {/* Chapter 03: Before / After Product Design scrubbed morph */}
      <Chapter3BeforeAfter />

      {/* Temporary bridge for Chapters 4-7 during staging */}
      <div id="chapter-process">
        <WhatIDoSection />
      </div>

      <div id="chapter-design-system">
        <AboutSnippetSection />
      </div>

      <div id="chapter-work-cta">
        <SelectedWorkSection />
      </div>
    </div>
  );
}
