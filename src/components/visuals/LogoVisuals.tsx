"use client";

import React from "react";

// 4 Code-Generated Concept Logos with Symbols, Construction Grids, and Variants

export function CareFlowLogo({ variant = "symbol", mode = "light" }: { variant?: "symbol" | "wordmark" | "full" | "grid"; mode?: "light" | "dark" | "mono" }) {
  const strokeColor = mode === "mono" ? "#1E293B" : mode === "dark" ? "#FFFFFF" : "#D9577B";
  const textColor = mode === "dark" ? "#FFFFFF" : "#2B1B2E";

  if (variant === "grid") {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Construction circles & guides */}
        <circle cx="100" cy="100" r="80" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="50" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="70" cy="85" r="30" stroke="#F43F5E" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="130" cy="85" r="30" stroke="#F43F5E" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.6" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="4 4" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="4 4" />
        {/* Logo Mark Path */}
        <path
          d="M 100 150 C 60 110, 45 80, 70 55 C 90 35, 100 65, 100 65 C 100 65, 110 35, 130 55 C 155 80, 140 110, 100 150 Z"
          stroke={strokeColor}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cross center indicator */}
        <line x1="100" y1="80" x2="100" y2="105" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="88" y1="92" x2="112" y2="92" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${variant === "symbol" ? "justify-center" : ""}`}>
      <svg viewBox="0 0 100 100" className="w-12 h-12 shrink-0" fill="none">
        <rect width="100" height="100" rx="28" fill={mode === "dark" ? "#1E1220" : "#F8D7DF"} />
        <path
          d="M 50 78 C 30 58, 22 42, 35 30 C 45 20, 50 35, 50 35 C 50 35, 55 20, 65 30 C 78 42, 70 58, 50 78 Z"
          stroke={strokeColor}
          strokeWidth="3.5"
          fill={mode === "mono" ? "none" : "#FFF8F5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="50" y1="43" x2="50" y2="57" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="43" y1="50" x2="57" y2="50" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      {(variant === "wordmark" || variant === "full") && (
        <div className="flex flex-col">
          <span className="font-serif font-bold text-lg tracking-tight leading-none" style={{ color: textColor }}>
            CareFlow
          </span>
          <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-rose-600 mt-0.5">
            Health Systems
          </span>
        </div>
      )}
    </div>
  );
}

export function AuraWellnessLogo({ variant = "symbol", mode = "light" }: { variant?: "symbol" | "wordmark" | "full" | "grid"; mode?: "light" | "dark" | "mono" }) {
  const strokeColor = mode === "mono" ? "#1E293B" : mode === "dark" ? "#FFFFFF" : "#D9577B";
  const textColor = mode === "dark" ? "#FFFFFF" : "#2B1B2E";

  if (variant === "grid") {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        <circle cx="100" cy="100" r="75" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="45" stroke="#F43F5E" strokeWidth="0.75" strokeDasharray="2 2" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="4 4" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="4 4" />
        {/* Crescent Moon + Petal Path */}
        <path
          d="M 100 35 C 135 35, 165 65, 165 100 C 165 135, 135 165, 100 165 C 120 145, 130 120, 130 100 C 130 80, 120 55, 100 35 Z"
          stroke={strokeColor}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="85" cy="100" r="15" stroke={strokeColor} strokeWidth="3" />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${variant === "symbol" ? "justify-center" : ""}`}>
      <svg viewBox="0 0 100 100" className="w-12 h-12 shrink-0" fill="none">
        <rect width="100" height="100" rx="28" fill={mode === "dark" ? "#1E1220" : "#E6DDF7"} />
        <path
          d="M 50 18 C 68 18, 82 32, 82 50 C 82 68, 68 82, 50 82 C 60 72, 65 60, 65 50 C 65 40, 60 28, 50 18 Z"
          stroke={strokeColor}
          strokeWidth="3.5"
          fill={mode === "mono" ? "none" : "#F8D7DF"}
          strokeLinecap="round"
        />
        <circle cx="42" cy="50" r="8" fill={strokeColor} />
      </svg>
      {(variant === "wordmark" || variant === "full") && (
        <div className="flex flex-col">
          <span className="font-serif font-bold text-lg tracking-tight leading-none" style={{ color: textColor }}>
            Aura
          </span>
          <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-plum-500 mt-0.5">
            Cycle Wellness
          </span>
        </div>
      )}
    </div>
  );
}

export function ZenithLogo({ variant = "symbol", mode = "light" }: { variant?: "symbol" | "wordmark" | "full" | "grid"; mode?: "light" | "dark" | "mono" }) {
  const strokeColor = mode === "mono" ? "#1E293B" : mode === "dark" ? "#FFFFFF" : "#2B1B2E";
  const textColor = mode === "dark" ? "#FFFFFF" : "#2B1B2E";

  if (variant === "grid") {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        <circle cx="100" cy="100" r="75" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        <polygon points="100,25 175,150 25,150" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
        {/* Geometric Z Diamond */}
        <path d="M 50 50 L 150 50 L 50 150 L 150 150" stroke={strokeColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${variant === "symbol" ? "justify-center" : ""}`}>
      <svg viewBox="0 0 100 100" className="w-12 h-12 shrink-0" fill="none">
        <rect width="100" height="100" rx="28" fill={mode === "dark" ? "#1E1220" : "#FFF8F5"} stroke="#E6DDF7" strokeWidth="2" />
        <path d="M 28 28 L 72 28 L 28 72 L 72 72" stroke={strokeColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="72" cy="28" r="4" fill="#D9577B" />
      </svg>
      {(variant === "wordmark" || variant === "full") && (
        <div className="flex flex-col">
          <span className="font-serif font-bold text-lg tracking-tight leading-none" style={{ color: textColor }}>
            Zenith
          </span>
          <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-rose-600 mt-0.5">
            Cloud Platform
          </span>
        </div>
      )}
    </div>
  );
}

export function CelebreLogo({ variant = "symbol", mode = "light" }: { variant?: "symbol" | "wordmark" | "full" | "grid"; mode?: "light" | "dark" | "mono" }) {
  const strokeColor = mode === "mono" ? "#1E293B" : mode === "dark" ? "#FFFFFF" : "#D9577B";
  const textColor = mode === "dark" ? "#FFFFFF" : "#2B1B2E";

  if (variant === "grid") {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        <circle cx="100" cy="100" r="70" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        <ellipse cx="100" cy="100" rx="40" ry="70" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        <path
          d="M 100 40 C 70 40, 50 65, 50 100 C 50 135, 70 160, 100 160 C 120 160, 140 145, 145 130"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="100" cy="100" r="6" fill={strokeColor} />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${variant === "symbol" ? "justify-center" : ""}`}>
      <svg viewBox="0 0 100 100" className="w-12 h-12 shrink-0" fill="none">
        <rect width="100" height="100" rx="28" fill={mode === "dark" ? "#1E1220" : "#FCE5EB"} />
        <path
          d="M 55 25 C 38 25, 26 38, 26 50 C 26 62, 38 75, 55 75 C 68 75, 76 68, 78 58"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="55" cy="50" r="4" fill="#2B1B2E" />
      </svg>
      {(variant === "wordmark" || variant === "full") && (
        <div className="flex flex-col">
          <span className="font-serif font-bold text-lg tracking-tight leading-none" style={{ color: textColor }}>
            Célèbre
          </span>
          <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-plum-500 mt-0.5">
            Luxury Invitations
          </span>
        </div>
      )}
    </div>
  );
}
