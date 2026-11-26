"use client";

import React from "react";
import { PhoneFrame, BrowserFrame } from "@/components/visuals/DeviceFrame";
import { getScenario } from "@/data/scenarios";
import { HcHomeDashboardScreen, HcWebPatientPortal } from "@/components/factory/Project1Healthcare";
import { WhCycleHomeScreen, WhWebDashboard } from "@/components/factory/Project2WomensHealth";
import { AiChatBubblesScreen, AiWebAssistantAdmin } from "@/components/factory/Project3AiModule";
import { DietDashboardScreen, DietWebProgressDashboard } from "@/components/factory/Project4Diet";
import { InvEditorCanvasScreen, InvWebRsvpAndPrintedCards } from "@/components/factory/Project5Invitation";
import { BkServiceListScreen, BkProviderWebAndEmails } from "@/components/factory/Project6Booking";

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

  const renderScreen = (wf: boolean) => {
    switch (variant) {
      case "cycle":
        return <WhCycleHomeScreen wireframe={wf} />;
      case "booking":
        return <BkServiceListScreen wireframe={wf} />;
      case "nutrition":
        return <DietDashboardScreen wireframe={wf} />;
      case "invitation":
        return <InvEditorCanvasScreen wireframe={wf} />;
      case "ai":
        return <AiChatBubblesScreen wireframe={wf} />;
      case "healthcare":
      default:
        return <HcHomeDashboardScreen wireframe={wf} />;
    }
  };

  const renderWebScreen = () => {
    switch (variant) {
      case "cycle":
        return <WhWebDashboard />;
      case "booking":
        return <BkProviderWebAndEmails />;
      case "nutrition":
        return <DietWebProgressDashboard />;
      case "invitation":
        return <InvWebRsvpAndPrintedCards />;
      case "ai":
        return <AiWebAssistantAdmin />;
      case "healthcare":
      default:
        return <HcWebPatientPortal />;
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
          {wireframe ? renderScreen(true) : renderWebScreen()}
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
      {renderScreen(wireframe)}
    </PhoneFrame>
  );
}

export default MockupFrame;
