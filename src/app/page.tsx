import HeroSection from "@/components/home/HeroSection";
import PinnedStorySection from "@/components/home/PinnedStorySection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import WhatIDoSection from "@/components/home/WhatIDoSection";
import AboutSnippetSection from "@/components/home/AboutSnippetSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Pinned scroll story (signature moment) */}
      <PinnedStorySection />

      {/* 3. Selected work (3 featured projects) */}
      <SelectedWorkSection />

      {/* 4. What I do (4 soft cards) */}
      <WhatIDoSection />

      {/* 5. About snippet + skills */}
      <AboutSnippetSection />

      {/* 6. Final CTA is integrated directly in the Footer */}
    </div>
  );
}
