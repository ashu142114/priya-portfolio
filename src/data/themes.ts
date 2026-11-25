export interface ThemePreset {
  id: string;
  name: string;
  tagline: string;
  dotColor: string;
  tokens: {
    bgPrimary: string;
    textPrimary: string;
    accentPrimary: string;
    accentSecondary: string;
    surface: string;
    borderColor: string;
    cardRadius: string;
    fontFamily: string;
  };
}

export const themePresets: ThemePreset[] = [
  {
    id: "studio",
    name: "Studio Rose",
    tagline: "Signature feminine & empathetic palette",
    dotColor: "#D9577B",
    tokens: {
      bgPrimary: "#FFF8F5",
      textPrimary: "#2B1B2E",
      accentPrimary: "#D9577B",
      accentSecondary: "#F8D7DF",
      surface: "rgba(255, 255, 255, 0.88)",
      borderColor: "rgba(248, 215, 223, 0.8)",
      cardRadius: "28px",
      fontFamily: "var(--font-fraunces), serif",
    },
  },
  {
    id: "clinical",
    name: "Clinical Mint",
    tagline: "Calming healthcare & telemedicine atmosphere",
    dotColor: "#2E8B9A",
    tokens: {
      bgPrimary: "#F4F8F9",
      textPrimary: "#15282D",
      accentPrimary: "#2E8B9A",
      accentSecondary: "#D4EFF2",
      surface: "rgba(255, 255, 255, 0.9)",
      borderColor: "rgba(212, 239, 242, 0.85)",
      cardRadius: "20px",
      fontFamily: "var(--font-dm-sans), sans-serif",
    },
  },
  {
    id: "ember",
    name: "Warm Ember",
    tagline: "Warm terracotta & high-energy SaaS vibes",
    dotColor: "#D86A3E",
    tokens: {
      bgPrimary: "#FAF5EE",
      textPrimary: "#2D1D14",
      accentPrimary: "#D86A3E",
      accentSecondary: "#FADEC9",
      surface: "rgba(255, 255, 255, 0.88)",
      borderColor: "rgba(250, 222, 201, 0.85)",
      cardRadius: "34px",
      fontFamily: "var(--font-fraunces), serif",
    },
  },
  {
    id: "midnight",
    name: "Midnight Plum",
    tagline: "Deep editorial contrast & neon rose accents",
    dotColor: "#F1789B",
    tokens: {
      bgPrimary: "#18101A",
      textPrimary: "#FFF3F7",
      accentPrimary: "#F1789B",
      accentSecondary: "#301A35",
      surface: "rgba(35, 22, 38, 0.92)",
      borderColor: "rgba(241, 120, 155, 0.3)",
      cardRadius: "24px",
      fontFamily: "var(--font-fraunces), serif",
    },
  },
];

export function applyTheme(theme: ThemePreset) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--bg-primary", theme.tokens.bgPrimary);
  root.style.setProperty("--text-primary", theme.tokens.textPrimary);
  root.style.setProperty("--accent-primary", theme.tokens.accentPrimary);
  root.style.setProperty("--accent-secondary", theme.tokens.accentSecondary);
  root.style.setProperty("--surface", theme.tokens.surface);
  root.style.setProperty("--border-color", theme.tokens.borderColor);
  root.style.setProperty("--card-radius", theme.tokens.cardRadius);
}
