"use client";

import React from "react";
import { getScenario } from "@/data/scenarios";
import {
  KitButton,
  KitChip,
  KitBadge,
  KitAvatar,
  KitSearch,
  KitCard,
  KitListItem,
  KitBottomTabBar,
  KitTopAppBar,
  KitDonutChart,
  KitBarChart,
  KitHeatmap,
  KitProgress,
  KitKpiCard,
  KitTable,
} from "@/ui-kit";
import { Home, Utensils, Droplet, BarChart2, User, Plus } from "lucide-react";

const S = () => getScenario("diet-nutrition-module");

const nav = (active: number, wireframe = false) => {
  const p = S().palette;
  return (
    <KitBottomTabBar
      activeIndex={active}
      primary={p.primary}
      border={p.border}
      wireframe={wireframe}
      items={[
        { label: "Today", icon: <Home className="w-3 h-3" /> },
        { label: "Meals", icon: <Utensils className="w-3 h-3" /> },
        { label: "Water", icon: <Droplet className="w-3 h-3" /> },
        { label: "Trends", icon: <BarChart2 className="w-3 h-3" /> },
      ]}
    />
  );
};

export function DietOnboardingScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-4" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-3">
        <KitTopAppBar title="Set Daily Goal" subtitle={s.brandName} wireframe={wireframe} />
        <p className="text-[10px]" style={{ color: p.muted }}>Choose your everyday Indian nutrition focus:</p>
        <div className="space-y-1.5">
          {["Balanced Protein (Vegetarian)", "Mindful Calorie Deficit", "Consistent 3L Hydration"].map((g, i) => (
            <KitListItem key={g} title={g} subtitle={i === 0 ? "Recommended for Tanya" : "Customizable"} border={i === 0 ? p.primary : p.border} wireframe={wireframe} />
          ))}
        </div>
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">Save 1,850 kcal Goal</KitButton>
    </div>
  );
}

export function DietDashboardScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Today's Balance" subtitle={s.brandName} wireframe={wireframe} right={<KitAvatar name="Tanya Kapoor" size="sm" primary={p.primary} primarySoft={p.primarySoft} wireframe={wireframe} />} />
        <KitCard border={p.border} wireframe={wireframe} className="flex items-center gap-3">
          <KitDonutChart percent={71} label="1,320" primary={p.primary} primarySoft={p.primarySoft} />
          <div className="space-y-1 flex-1">
            <span className="text-[10px] font-bold block">530 kcal remaining</span>
            <div className="text-[8px]" style={{ color: p.muted }}>Protein: 68/85g • Carbs: 142/210g</div>
            <KitProgress value={71} primary={p.primary} />
          </div>
        </KitCard>
        <KitListItem title="Lunch: Paneer Bhurji &amp; 2 Phulkas" subtitle="540 kcal • 26g Protein" border={p.border} wireframe={wireframe} />
      </div>
      {nav(0, wireframe)}
    </div>
  );
}

export function DietMealLogScreen({ wireframe = false }: { wireframe?: boolean }) {
  const s = S();
  const p = s.palette;
  const meals = s.sampleData.meals || [];
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2">
        <KitTopAppBar title="Meal Log" subtitle="Quick Search" wireframe={wireframe} right={<span className="p-1 rounded-full text-white" style={{ backgroundColor: p.primary }}><Plus className="w-3 h-3" /></span>} />
        <KitSearch placeholder="Search dal, chilla, paneer..." border={p.border} wireframe={wireframe} />
        <div className="space-y-1.5">
          {meals.map((m) => (
            <KitListItem key={m.time} title={m.item} subtitle={`${m.time} • ${m.macros}`} border={p.border} wireframe={wireframe} trailing={<span className="text-[9px] font-bold" style={{ color: p.primary }}>{m.kcal}</span>} />
          ))}
        </div>
      </div>
      {nav(1, wireframe)}
    </div>
  );
}

export function DietFoodDetailScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Moong Dal Chilla" subtitle="2 Pieces + Mint Chutney" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe} className="grid grid-cols-3 gap-2 text-center">
          <div><strong className="text-xs block" style={{ color: p.primary }}>14g</strong><span className="text-[8px]">Protein</span></div>
          <div><strong className="text-xs block">38g</strong><span className="text-[8px]">Carbs</span></div>
          <div><strong className="text-xs block">7g</strong><span className="text-[8px]">Fats</span></div>
        </KitCard>
        <KitBadge label="High Vegetarian Protein" tone="success" wireframe={wireframe} />
      </div>
      <KitButton primary={p.primary} wireframe={wireframe} className="w-full">+ Add to Breakfast (280 kcal)</KitButton>
    </div>
  );
}

export function DietWaterTrackerScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-3">
        <KitTopAppBar title="Hydration Tracker" subtitle="Harshil Parmar" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe} className="text-center space-y-2">
          <Droplet className="w-7 h-7 mx-auto text-sky-600" />
          <div className="font-bold text-base">2.2 / 3.0 Litres</div>
          <KitProgress value={73} primary="#0284C7" />
          <span className="text-[9px] block text-slate-500">7 of 10 glasses completed</span>
        </KitCard>
        <div className="grid grid-cols-2 gap-2">
          <KitButton size="sm" primary="#0284C7" wireframe={wireframe}>+ 250 ml</KitButton>
          <KitButton size="sm" variant="secondary" border={p.border} wireframe={wireframe}>+ 500 ml</KitButton>
        </div>
      </div>
      {nav(2, wireframe)}
    </div>
  );
}

export function DietWeeklyReportScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Weekly Rhythm" subtitle="Consistency Heatmap" wireframe={wireframe} />
        <KitCard border={p.border} wireframe={wireframe}>
          <span className="text-[9px] font-bold block mb-1">Daily Calorie Balance</span>
          <KitBarChart values={[70, 82, 76, 88, 74, 80]} primary={p.primary} primarySoft={p.primarySoft} />
        </KitCard>
        <KitCard border={p.border} wireframe={wireframe}>
          <span className="text-[9px] font-bold block mb-1.5">14-Day Habit Streak</span>
          <KitHeatmap primary={p.primary} />
        </KitCard>
      </div>
      {nav(3, wireframe)}
    </div>
  );
}

export function DietRecipesScreen({ wireframe = false }: { wireframe?: boolean }) {
  const p = S().palette;
  return (
    <div className="flex flex-col justify-between h-full p-3.5" style={{ backgroundColor: wireframe ? "#F3F4F6" : p.bg, color: p.ink }}>
      <div className="space-y-2.5">
        <KitTopAppBar title="Quick Home Recipes" subtitle="15-Min Prep" wireframe={wireframe} />
        <div className="flex gap-1.5">
          <KitChip label="Vegetarian" active primary={p.primary} primarySoft={p.primarySoft} border={p.border} wireframe={wireframe} />
          <KitChip label="High Protein" primary={p.primary} primarySoft={p.primarySoft} border={p.border} wireframe={wireframe} />
        </div>
        <KitListItem title="Sprouts &amp; Pomegranate Bowl" subtitle="190 kcal • 12g Protein" border={p.border} wireframe={wireframe} />
        <KitListItem title="Besan Vegetable Chilla" subtitle="260 kcal • 13g Protein" border={p.border} wireframe={wireframe} />
      </div>
      {nav(1, wireframe)}
    </div>
  );
}

export function DietWebProgressDashboard() {
  const s = S();
  const p = s.palette;
  return (
    <div className="p-5 space-y-4 text-xs" style={{ backgroundColor: p.bg, color: p.ink }}>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[9px] font-bold uppercase" style={{ color: p.primary }}>{s.brandName} Web • Concept</span>
          <h4 className="font-serif font-bold text-sm">Weekly Nutrition &amp; Hydration Progress</h4>
        </div>
        <KitBadge label="Goal: 1,850 kcal" tone="success" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <KitKpiCard label="Calories" value="1,320 kcal" sub="530 left today" primary={p.primary} border={p.border} />
        <KitKpiCard label="Protein" value="68 / 85 g" sub="Vegetarian plan" primary={p.primary} border={p.border} />
        <KitKpiCard label="Hydration" value="2.2 / 3.0 L" sub="7 glasses logged" primary={p.primary} border={p.border} />
      </div>
      <KitTable headers={["Meal", "Time", "Macros", "Calories"]} rows={(s.sampleData.meals || []).map((m) => [m.item, m.time, m.macros, m.kcal])} border={p.border} />
    </div>
  );
}
