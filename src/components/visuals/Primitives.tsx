"use client";

import React from "react";

// B2 Primitives: Avatar, Sparkline, ProgressRing, BarChart, CalendarGrid

interface AvatarProps {
  initials?: string;
  name?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  gradient?: string;
  wireframe?: boolean;
}

export function Avatar({
  initials = "PL",
  name,
  className = "",
  size = "md",
  gradient = "from-blush-200 via-rose-100 to-lilac-200",
  wireframe = false,
}: AvatarProps) {
  const displayInitials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : initials;

  const sizeClass =
    size === "sm" ? "w-7 h-7 text-[10px]" : size === "lg" ? "w-14 h-14 text-base" : "w-10 h-10 text-xs";

  if (wireframe) {
    return (
      <div
        className={`${sizeClass} rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center font-mono text-gray-500 shrink-0 ${className}`}
      >
        ••
      </div>
    );
  }

  return (
    <div
      className={`${sizeClass} rounded-full bg-gradient-to-tr ${gradient} border border-white/60 shadow-soft-sm flex items-center justify-center font-serif font-bold text-plum shrink-0 select-none ${className}`}
    >
      {displayInitials}
    </div>
  );
}

interface SparklineProps {
  data?: number[];
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  wireframe?: boolean;
}

export function Sparkline({
  data = [12, 18, 14, 25, 22, 34, 30, 42],
  width = 120,
  height = 36,
  color = "#D9577B",
  className = "",
  wireframe = false,
}: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * (width - 8) + 4;
      const y = height - ((val - min) / range) * (height - 10) - 5;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className={`overflow-visible ${className}`} fill="none">
      <polyline
        points={points}
        stroke={wireframe ? "#9CA3AF" : color}
        strokeWidth={wireframe ? "1.5" : "2.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* End point dot */}
      {data.length > 0 && (
        <circle
          cx={(width - 8) + 4}
          cy={height - ((data[data.length - 1] - min) / range) * (height - 10) - 5}
          r={wireframe ? "2" : "3.5"}
          fill={wireframe ? "#6B7280" : color}
        />
      )}
    </svg>
  );
}

interface ProgressRingProps {
  progress?: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
  sublabel?: string;
  wireframe?: boolean;
}

export function ProgressRing({
  progress = 0.72,
  size = 110,
  strokeWidth = 9,
  color = "#D9577B",
  label = "72%",
  sublabel = "Goal",
  wireframe = false,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={wireframe ? "#E5E7EB" : "#F8D7DF"}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={wireframe ? "#9CA3AF" : color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute text-center select-none">
        <span className={`block font-serif font-bold ${wireframe ? "text-gray-500" : "text-plum"} text-base sm:text-lg leading-none`}>
          {wireframe ? "••%" : label}
        </span>
        {sublabel && (
          <span className={`block text-[10px] ${wireframe ? "text-gray-400 font-mono" : "text-plum-500"} mt-0.5`}>
            {wireframe ? "LABEL" : sublabel}
          </span>
        )}
      </div>
    </div>
  );
}

interface BarChartProps {
  values?: { label: string; value: number }[];
  height?: number;
  wireframe?: boolean;
}

export function BarChart({
  values = [
    { label: "M", value: 45 },
    { label: "T", value: 68 },
    { label: "W", value: 90 },
    { label: "T", value: 55 },
    { label: "F", value: 80 },
    { label: "S", value: 40 },
    { label: "S", value: 95 },
  ],
  height = 70,
  wireframe = false,
}: BarChartProps) {
  const maxValue = Math.max(...values.map((v) => v.value), 100);

  return (
    <div className="flex items-end justify-between gap-2 w-full pt-2">
      {values.map((item, idx) => {
        const barHeight = (item.value / maxValue) * height;
        return (
          <div key={idx} className="flex flex-col items-center gap-1.5 flex-1">
            <div
              className={`w-full max-w-[16px] rounded-full transition-all duration-500 ${
                wireframe
                  ? "bg-gray-300"
                  : idx === values.length - 1
                  ? "bg-rose-500 shadow-soft-sm"
                  : "bg-blush-200"
              }`}
              style={{ height: `${barHeight}px` }}
            />
            <span className={`text-[10px] font-mono ${wireframe ? "text-gray-400" : "text-plum-500"}`}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

interface CalendarGridProps {
  selectedDay?: number;
  phaseDays?: { day: number; phase: "fertile" | "period" | "luteal" }[];
  wireframe?: boolean;
}

export function CalendarGrid({
  selectedDay = 14,
  phaseDays = [
    { day: 3, phase: "period" },
    { day: 4, phase: "period" },
    { day: 5, phase: "period" },
    { day: 6, phase: "period" },
    { day: 13, phase: "fertile" },
    { day: 14, phase: "fertile" },
    { day: 15, phase: "fertile" },
  ],
  wireframe = false,
}: CalendarGridProps) {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] select-none">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
        <span key={i} className="font-mono text-plum-400 text-[9px] pb-1 font-semibold">
          {d}
        </span>
      ))}
      {days.map((day) => {
        const phase = phaseDays.find((p) => p.day === day)?.phase;
        const isSelected = day === selectedDay;

        let bg = "bg-white text-plum-700 hover:bg-blush-50";
        if (wireframe) {
          bg = isSelected ? "bg-gray-400 text-white" : "bg-gray-100 text-gray-500";
        } else if (isSelected) {
          bg = "bg-rose-500 text-white font-bold shadow-soft-sm ring-2 ring-rose-200";
        } else if (phase === "period") {
          bg = "bg-rose-100 text-rose-800 font-semibold";
        } else if (phase === "fertile") {
          bg = "bg-lilac-200 text-plum-800 font-semibold";
        }

        return (
          <div
            key={day}
            className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center transition-all ${bg}`}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
}
