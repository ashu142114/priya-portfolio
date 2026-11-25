"use client";

import React from "react";
import { PhoneFrame, BrowserFrame } from "@/components/visuals/DeviceFrame";
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

export function MockupFrame({
  type = "mobile",
  title = "Interface Mockup",
  category = "Healthcare",
  className = "",
  variant = "healthcare",
  wireframe = false,
}: MockupFrameProps) {
  const renderScreen = () => {
    switch (variant) {
      case "cycle":
        return <WomensHealthCycleRingScreen wireframe={wireframe} />;
      case "booking":
        return <ServiceListCatalogScreen wireframe={wireframe} />;
      case "nutrition":
        return <DietCalorieRingScreen wireframe={wireframe} />;
      case "invitation":
        return <InvitationPreviewCardScreen wireframe={wireframe} />;
      case "ai":
        return <AiChatScreen wireframe={wireframe} />;
      case "healthcare":
      default:
        return <HealthcareDashboardScreen wireframe={wireframe} />;
    }
  };

  if (type === "web") {
    return (
      <BrowserFrame
        url={`priya.design/preview/${variant}`}
        title={title}
        className={className}
        wireframe={wireframe}
      >
        <div className="p-4 sm:p-6 w-full flex-1 flex flex-col justify-center">
          {renderScreen()}
        </div>
      </BrowserFrame>
    );
  }

  return (
    <PhoneFrame className={className} wireframe={wireframe}>
      {renderScreen()}
    </PhoneFrame>
  );
}

export default MockupFrame;
