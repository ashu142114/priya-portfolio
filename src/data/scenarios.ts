export interface Persona {
  name: string;
  age: number;
  role: string;
  goal: string;
}

export interface ProjectScenario {
  slug: string;
  brandName: string;
  tagline: string;
  tone: string;
  badgeLabel: "Concept" | "Sample";
  palette: {
    primary: string;
    primarySoft: string;
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    border: string;
  };
  typography: {
    displayFont: string;
    bodyFont: string;
    styleNote: string;
  };
  personas: [Persona, Persona, Persona];
  sampleData: {
    dateLabel: string;
    location: string;
    currency: "INR";
    doctors?: Array<{ name: string; specialty: string; fee: string; slot: string; rating: string }>;
    metrics?: Array<{ label: string; value: string; status: string }>;
    meals?: Array<{ time: string; item: string; kcal: string; macros: string }>;
    events?: Array<{ title: string; date: string; venue: string; rsvpCount: string }>;
    services?: Array<{ title: string; duration: string; price: string; provider: string }>;
    aiPrompts?: Array<{ user: string; assistant: string; triage: string }>;
  };
}

export const projectScenarios: Record<string, ProjectScenario> = {
  "healthcare-mobile-app": {
    slug: "healthcare-mobile-app",
    brandName: "MediCare Plus",
    tagline: "Calm clinical care, tele-consults & family records",
    tone: "Reassuring, clear, structured clinical calm",
    badgeLabel: "Concept",
    palette: {
      primary: "#0D7C85",
      primarySoft: "#E4F5F4",
      bg: "#F4FAFA",
      surface: "#FFFFFF",
      ink: "#0F292E",
      muted: "#526D73",
      accent: "#0EA5A4",
      border: "#CBE6E6",
    },
    typography: {
      displayFont: "DM Sans",
      bodyFont: "DM Sans",
      styleNote: "Crisp clinical sans-serif with high-contrast tabular numbers for vitals & fees",
    },
    personas: [
      {
        name: "Aarav Mehta",
        age: 34,
        role: "Caregiver Son",
        goal: "Manage parents' diabetes checkups and download lab reports in one place",
      },
      {
        name: "Kavita Desai",
        age: 58,
        role: "Patient",
        goal: "Join video consultations with large, readable buttons and clear medicine reminders",
      },
      {
        name: "Dr. Rohan Kulkarni",
        age: 41,
        role: "Consulting Physician",
        goal: "Review daily appointments, patient history, and issue digital prescriptions quickly",
      },
    ],
    sampleData: {
      dateLabel: "Thu, 26 Nov 2026",
      location: "Surat, Gujarat",
      currency: "INR",
      doctors: [
        { name: "Dr. Meera Nair", specialty: "General Physician", fee: "₹650", slot: "10:30 AM", rating: "4.9" },
        { name: "Dr. Siddharth Joshi", specialty: "Cardiologist", fee: "₹1,100", slot: "12:15 PM", rating: "4.8" },
        { name: "Dr. Kavita Rao", specialty: "Endocrinologist", fee: "₹850", slot: "04:00 PM", rating: "4.9" },
      ],
      metrics: [
        { label: "HbA1c Level", value: "6.4%", status: "Normal Range" },
        { label: "Resting Pulse", value: "72 bpm", status: "Stable" },
        { label: "Vitamin D", value: "32 ng/mL", status: "Optimal" },
      ],
    },
  },

  "womens-health-app": {
    slug: "womens-health-app",
    brandName: "Sanaa Cycle",
    tagline: "Private cycle tracking, PCOD education & gentle daily care",
    tone: "Warm, empathetic, non-judgmental, private",
    badgeLabel: "Concept",
    palette: {
      primary: "#C8556B",
      primarySoft: "#FBE9ED",
      bg: "#FFF8F6",
      surface: "#FFFFFF",
      ink: "#2B1620",
      muted: "#755462",
      accent: "#9D7AD2",
      border: "#F3D3DB",
    },
    typography: {
      displayFont: "Fraunces",
      bodyFont: "DM Sans",
      styleNote: "Warm editorial serif paired with soft rounded sans for emotional comfort",
    },
    personas: [
      {
        name: "Nidhi Shah",
        age: 25,
        role: "Working Professional",
        goal: "Track irregular cycle patterns and understand PCOD-friendly daily habits",
      },
      {
        name: "Rhea Verma",
        age: 29,
        role: "Wellness Tracker",
        goal: "Log mood, energy, and hydration daily in under 15 seconds",
      },
      {
        name: "Anjali Patel",
        age: 32,
        role: "Expecting / Care",
        goal: "Store confidential gynecology lab records securely with PIN lock",
      },
    ],
    sampleData: {
      dateLabel: "Cycle Day 14 • Ovulation Window",
      location: "Private Local Vault",
      currency: "INR",
      metrics: [
        { label: "Cycle Length", value: "29 Days", status: "Regular Pattern" },
        { label: "Symptom Log", value: "Mild Fatigue", status: "Logged Today" },
        { label: "Hydration", value: "1.8 / 2.5 L", status: "On Track" },
      ],
    },
  },

  "ai-healthcare-module": {
    slug: "ai-healthcare-module",
    brandName: "Asha AI Triage",
    tagline: "Plain-language AI symptom guidance & specialist routing",
    tone: "Calm, transparent, medically cautious, accessible",
    badgeLabel: "Concept",
    palette: {
      primary: "#4F46E5",
      primarySoft: "#EEF2FF",
      bg: "#F8FAFC",
      surface: "#FFFFFF",
      ink: "#111827",
      muted: "#4B5563",
      accent: "#0D9488",
      border: "#DDE3F5",
    },
    typography: {
      displayFont: "DM Sans",
      bodyFont: "DM Sans",
      styleNote: "Structured assistant typography with clear disclaimer badges and step chips",
    },
    personas: [
      {
        name: "Kabir Bhatia",
        age: 27,
        role: "First-Time User",
        goal: "Check mild fever symptoms at night and find out which doctor to book",
      },
      {
        name: "Sunita Joshi",
        age: 46,
        role: "Parent",
        goal: "Understand lab report terms without scary medical jargon",
      },
      {
        name: "Devika Menon",
        age: 31,
        role: "Busy Consultant",
        goal: "Get a structured symptom summary ready to share with a doctor before a call",
      },
    ],
    sampleData: {
      dateLabel: "Session • 26 Nov 2026",
      location: "Guided Triage Flow",
      currency: "INR",
      aiPrompts: [
        {
          user: "Mild sore throat and low fever since yesterday evening",
          assistant: "Thank you for sharing. Are you experiencing difficulty swallowing or body ache?",
          triage: "Recommended: General Physician Tele-Consult • ₹500",
        },
      ],
    },
  },

  "diet-nutrition-module": {
    slug: "diet-nutrition-module",
    brandName: "NourishTrack",
    tagline: "Balanced Indian meal logging, macros & hydration habits",
    tone: "Encouraging, practical, habit-focused",
    badgeLabel: "Concept",
    palette: {
      primary: "#15803D",
      primarySoft: "#DCFCE7",
      bg: "#F6FAF5",
      surface: "#FFFFFF",
      ink: "#14331F",
      muted: "#4B6956",
      accent: "#D97706",
      border: "#CBE6D1",
    },
    typography: {
      displayFont: "Fraunces",
      bodyFont: "DM Sans",
      styleNote: "Organic botanical editorial headers paired with crisp macro progress numerals",
    },
    personas: [
      {
        name: "Tanya Kapoor",
        age: 28,
        role: "Vegetarian Fitness",
        goal: "Hit daily protein targets with everyday home-cooked vegetarian meals",
      },
      {
        name: "Harshil Parmar",
        age: 35,
        role: "Desk Worker",
        goal: "Build a consistent 3L water habit and avoid late-night snacking",
      },
      {
        name: "Meenakshi Iyer",
        age: 42,
        role: "Family Planner",
        goal: "Track balanced calorie portions across breakfast, lunch, and dinner",
      },
    ],
    sampleData: {
      dateLabel: "Daily Goal • 1,850 kcal",
      location: "Weekly Habit Summary",
      currency: "INR",
      meals: [
        { time: "08:30 AM", item: "Moong Dal Chilla (2 pcs) + Mint Chutney", kcal: "280 kcal", macros: "14g P • 38g C • 7g F" },
        { time: "01:15 PM", item: "Paneer Bhurji + 2 Phulkas + Dal", kcal: "540 kcal", macros: "26g P • 58g C • 18g F" },
        { time: "05:00 PM", item: "Roasted Makhana + Green Tea", kcal: "140 kcal", macros: "4g P • 22g C • 3g F" },
      ],
      metrics: [
        { label: "Calories", value: "1,320 / 1,850", status: "530 kcal left" },
        { label: "Protein", value: "68 / 85 g", status: "80% Goal" },
        { label: "Hydration", value: "2.2 / 3.0 L", status: "7 Glasses" },
      ],
    },
  },

  "invitation-app": {
    slug: "invitation-app",
    brandName: "Utsav Studio",
    tagline: "Modern Indian celebration invites, customization & RSVP sharing",
    tone: "Festive, refined, celebratory, effortless",
    badgeLabel: "Concept",
    palette: {
      primary: "#B45309",
      primarySoft: "#FEF3C7",
      bg: "#FFFBF2",
      surface: "#FFFFFF",
      ink: "#291D12",
      muted: "#735C47",
      accent: "#9F1239",
      border: "#F0DFC2",
    },
    typography: {
      displayFont: "Fraunces",
      bodyFont: "DM Sans",
      styleNote: "Regal serif calligraphy pairings with crisp RSVP action buttons",
    },
    personas: [
      {
        name: "Ishita & Karan",
        age: 28,
        role: "Wedding Couple",
        goal: "Customize matching Sangeet & Wedding digital invites and track family RSVPs",
      },
      {
        name: "Pooja Malhotra",
        age: 33,
        role: "Event Host",
        goal: "Send a clean WhatsApp-ready invite link with Google Maps venue pin",
      },
      {
        name: "Vivaan Singh",
        age: 24,
        role: "Housewarming Host",
        goal: "Pick a modern template and export print + digital formats in minutes",
      },
    ],
    sampleData: {
      dateLabel: "12–13 Dec 2026",
      location: "Courtyard Pavilion, Surat",
      currency: "INR",
      events: [
        { title: "Mehendi & Sangeet Evening", date: "12 Dec • 6:30 PM", venue: "Garden Lawn, Surat", rsvpCount: "142 Confirmed" },
        { title: "Wedding Ceremony & Dinner", date: "13 Dec • 7:00 PM", venue: "Grand Ballroom, Surat", rsvpCount: "218 Confirmed" },
      ],
    },
  },

  "service-based-booking-platform": {
    slug: "service-based-booking-platform",
    brandName: "SevaDesk",
    tagline: "Multi-industry service discovery, transparent INR rates & instant slots",
    tone: "Trustworthy, crisp, frictionless, commercial clarity",
    badgeLabel: "Concept",
    palette: {
      primary: "#2563EB",
      primarySoft: "#EFF6FF",
      bg: "#F4F7FB",
      surface: "#FFFFFF",
      ink: "#0F172A",
      muted: "#475569",
      accent: "#F97316",
      border: "#D6E2F2",
    },
    typography: {
      displayFont: "DM Sans",
      bodyFont: "DM Sans",
      styleNote: "Geometric commercial SaaS typography with clear pricing & time-slot badges",
    },
    personas: [
      {
        name: "Neha Chawla",
        age: 30,
        role: "Customer",
        goal: "Compare transparent service prices in INR and book a weekend home salon slot",
      },
      {
        name: "Arjun Nair",
        age: 38,
        role: "Studio Owner",
        goal: "Manage staff calendars, service duration blocks, and confirmed payouts",
      },
      {
        name: "Ritu Sharma",
        age: 26,
        role: "Repeat Client",
        goal: "Reschedule an upcoming physiotherapy visit in two quick taps",
      },
    ],
    sampleData: {
      dateLabel: "Sat, 28 Nov 2026",
      location: "Vesu & Citylight, Surat",
      currency: "INR",
      services: [
        { title: "Home Physiotherapy Session", duration: "45 mins", price: "₹899", provider: "Dr. Kunal Shah" },
        { title: "Express Hair & Styling", duration: "60 mins", price: "₹1,299", provider: "Meera Studio" },
        { title: "Deep Tissue Relaxation", duration: "60 mins", price: "₹1,499", provider: "CalmSpa Team" },
      ],
    },
  },
};

export function getScenario(slug: string): ProjectScenario {
  return projectScenarios[slug] || projectScenarios["healthcare-mobile-app"];
}
