import Chapter1Hero from "@/components/story/Chapter1Hero";
import Chapter2Themes from "@/components/story/Chapter2Themes";
import Chapter3BeforeAfter from "@/components/story/Chapter3BeforeAfter";
import Chapter4Process from "@/components/story/Chapter4Process";
import Chapter5DesignSystem from "@/components/story/Chapter5DesignSystem";
import Chapter6BrandKit from "@/components/story/Chapter6BrandKit";
import Chapter7SelectedWork from "@/components/story/Chapter7SelectedWork";
import ScrollProgress from "@/components/story/ScrollProgress";

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* Side Chapter Tracker (01 / 07) */}
      <ScrollProgress />

      {/* Chapter 01: Hero with line-by-line reveal, theme dots & polished roles strip */}
      <Chapter1Hero />

      {/* Chapter 02: Multi-Theme Scroll with live CSS variable HUD inspector */}
      <Chapter2Themes />

      {/* Chapter 03: Before / After Product Design scrubbed morph */}
      <Chapter3BeforeAfter />

      {/* Chapter 04: The Design Process (Transforming Phone 1/5 to 5/5) */}
      <Chapter4Process />

      {/* Chapter 05: Design System Lab (Color, Typo, Radius, Components, Code) */}
      <Chapter5DesignSystem />

      {/* Chapter 06: Brand Identity Kit Assembly */}
      <Chapter6BrandKit />

      {/* Chapter 07: Selected Work Parallax Cards & Final Giant CTA */}
      <Chapter7SelectedWork />
    </div>
  );
}
