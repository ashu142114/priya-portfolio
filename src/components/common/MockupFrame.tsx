"use client";

import React from "react";
import { PhoneFrame, BrowserFrame } from "@/components/visuals/DeviceFrame";
import { getScenario } from "@/data/scenarios";
import { ScenarioMobileHero, ScenarioAdminDashboard } from "@/components/visuals/DeepProjectScreens";
import {
  HealthcareDashboardScreen,
  WomensHealthCycleRingScreen,
  ServiceListCatalogScreen,
  DietCalorieRingScreen,
  InvitationPreviewCardScreen,
  AiChatScreen,
} from "@/components/visuals/ProjectScreens";

interface MockupFrameProps {
  type?: "mobile" | "web";
  title?: string;
  category?: string;
  accentColor?: string;
  className?: string;
  variant?: "healthcare" | "cycle" | "booking" | "nutrition" | "invitation" | "ai";
  wireframe?: boolean;
}

const VARIANT_TO_SLUG: Record<NonNullable<MockupFrameProps["variant"]>, string> = {
  healthcare: "healthcare-mobile-app",
  cycle: "womens-health-app",
  booking: "service-based-booking-platform",
  nutrition: "diet-nutrition-module",
  invitation: "invitation-app",
  ai: "ai-healthcare-module",
};

export function MockupFrame({
  type = "mobile",
  title = "Interface Mockup",
  className = "",
  variant = "healthcare",
  wireframe = false,
}: MockupFrameProps) {
  const slug = VARIANT_TO_SLUG[variant] || "healthcare-mobile-app";
  const scenario = getScenario(slug);

  const renderWireframe = () => {
    switch (variant) {
      case "cycle":
        return <WomensHealthCycleRingScreen wireframe />;
      case "booking":
        return <ServiceListCatalogScreen wireframe />;
      case "nutrition":
        return <DietCalorieRingScreen wireframe />;
      case "invitation":
        return <InvitationPreviewCardScreen wireframe />;
      case "ai":
        return <AiChatScreen wireframe />;
      case "healthcare":
      default:
        return <HealthcareDashboardScreen wireframe />;
    }
  };

  if (type === "web") {
    return (
      <BrowserFrame
        url={`${slug}.concept.design`}
        title={title || scenario.brandName}
        className={className}
        wireframe={wireframe}
      >
        <div className="w-full flex-1 flex flex-col justify-center">
          {wireframe ? renderWireframe() : <ScenarioAdminDashboard slug={slug} />}
        </div>
      </BrowserFrame>
    );
  }

  return (
    <PhoneFrame
      className={className}
      wireframe={wireframe}
      screenBg={scenario.palette.bg}
    >
      {wireframe ? renderWireframe() : <ScenarioMobileHero slug={slug} />}
    </PhoneFrame>
  );
}

export default MockupFrame;
