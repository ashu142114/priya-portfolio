export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: "Healthcare" | "SaaS" | "E-commerce" | "Event Management";
  featured: boolean;
  order: number;
  period: string;
  role: string;
  tools: string[];
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  process: {
    research: string;
    flows: string;
    wireframes: string;
    uiDesign: string;
    prototype: string;
  };
  screens: {
    title: string;
    description: string;
    type: "mobile" | "web";
    accentColor: string;
  }[];
  outcome: string; // Placeholder marked clearly
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "healthcare-mobile-app",
    slug: "healthcare-mobile-app",
    title: "Healthcare Mobile App",
    subtitle: "Complete digital health companion for appointment booking, telemedicine, and family health management",
    domain: "Healthcare",
    featured: true,
    order: 1,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    summary:
      "A patient-first mobile application featuring appointment booking, telemedicine consultations, lab reports, health insurance tracking, yoga & fitness routines, family health records, and end-to-end healthcare management.",
    problem:
      "Patients and caregivers struggle with fragmented healthcare journeys—juggling doctor appointments, physical lab reports, multiple insurance policies, and daily wellness without a unified, accessible interface.",
    solution:
      "Designed a calming, accessible mobile experience that unifies doctor discovery, virtual tele-consultations, instant lab report tracking, and family member health profiles into one effortless navigation model.",
    features: [
      "Instant doctor consultation & appointment booking",
      "Telemedicine video visits with in-app chat & prescription drawer",
      "Lab test bookings with structured digital report previews",
      "Insurance policy status & cashless claim assistance",
      "Yoga & fitness routines tailored to patient health goals",
      "Family health profiles with centralized record management",
    ],
    process: {
      research:
        "Analyzed patient pain points during clinical visits and remote consultations, mapping emotional stress levels at each booking and test results step.",
      flows:
        "Architected friction-free flows for 3-tap appointment scheduling, prescription renewals, and switching seamlessly between family member records.",
      wireframes:
        "Iterated on low-fidelity wireframes in Figma to validate clear visual hierarchy, accessible tap targets, and uncluttered medical data cards.",
      uiDesign:
        "Crafted a soft, soothing visual design using gentle rose, warm cream, and deep plum typography for optimal readability and emotional comfort.",
      prototype:
        "Built interactive Figma micro-interactions for doctor booking confirmation, slot selection, and lab report accordion sheets.",
    },
    screens: [
      {
        title: "Home Health Dashboard",
        description: "Quick access to upcoming appointments, vitals, daily medicine reminders, and emergency care.",
        type: "mobile",
        accentColor: "#F8D7DF",
      },
      {
        title: "Doctor Telemedicine Booking",
        description: "Specialist discovery filter, slot picker, and one-tap video consultation appointment confirmation.",
        type: "mobile",
        accentColor: "#E6DDF7",
      },
      {
        title: "Digital Lab Reports & Records",
        description: "Clean medical history cards with downloadable reports and parameter indicator charts.",
        type: "mobile",
        accentColor: "#FCE5EB",
      },
      {
        title: "Family Member Health Hub",
        description: "Easily switch profiles to manage parents', children's, and personal health metrics.",
        type: "mobile",
        accentColor: "#F8CBD8",
      },
    ],
    outcome: "Add result here (e.g. Completed design system with 40+ responsive screens ready for development handoff).",
    tags: ["Mobile App", "Healthcare", "Telemedicine", "User Flows", "Figma"],
  },
  {
    id: "womens-health-app",
    slug: "womens-health-app",
    title: "Women's Health App",
    subtitle: "Empathic menstrual tracking, cycle prediction, and PCOD/PCOS guidance",
    domain: "Healthcare",
    featured: true,
    order: 2,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    summary:
      "A compassionate, privacy-first women's health application focused on menstrual tracking, cycle calendars, period predictions, secure health records, and educational resources on PCOD/PCOS management.",
    problem:
      "Many cycle tracking apps feel either overly clinical or childishly loud. Women managing hormonal conditions like PCOD/PCOS need an empathic, accurate, and non-stigmatizing interface to monitor symptoms, moods, and cycles.",
    solution:
      "Crafted an elegant, gentle, and trustworthy mobile experience featuring an intuitive radial cycle visualizer, daily symptom check-ins, privacy-protected health logs, and curated PCOD/PCOS lifestyle guidance.",
    features: [
      "Menstrual cycle calendar with accurate predictive period windows",
      "Symptom, mood, and ovulation daily logging with quick-tap chips",
      "PCOD/PCOS condition tracking, dietary tips, and lifestyle guidance",
      "Confidential health record storage with passcode/biometric privacy",
      "Cycle phase insights explaining bodily hormonal changes in plain language",
    ],
    process: {
      research:
        "Explored user sensitivities regarding reproductive health data, identifying the need for dignified visual language and calm, non-alarming notifications.",
      flows:
        "Designed one-handed logging flows to allow daily entry of symptoms and cycle dates in under 15 seconds.",
      wireframes:
        "Tested circular timeline concepts against calendar grids to find the most natural balance between past logs and upcoming predictions.",
      uiDesign:
        "Applied a delicate palette of soft blush, warm lilac, and comforting rose with rounded typography and spacious touch points.",
      prototype:
        "Developed interactive Figma animations showing cycle phase transitions and animated symptom selection states.",
    },
    screens: [
      {
        title: "Cycle Overview & Prediction",
        description: "Current cycle day, fertile window projection, and countdown to next period.",
        type: "mobile",
        accentColor: "#F8D7DF",
      },
      {
        title: "Daily Symptom & Mood Logger",
        description: "Soft icon chips to quickly note cramps, energy levels, cravings, and flow intensity.",
        type: "mobile",
        accentColor: "#F1A0BA",
      },
      {
        title: "PCOD / PCOS Health Insights",
        description: "Supportive educational modules, nutrition advice, and lifestyle tracking routines.",
        type: "mobile",
        accentColor: "#E6DDF7",
      },
      {
        title: "Monthly Cycle Calendar View",
        description: "Color-coded past cycles, length deviations, and exportable doctor consultation summaries.",
        type: "mobile",
        accentColor: "#FCE5EB",
      },
    ],
    outcome: "Add result here (e.g. Conducted usability evaluations demonstrating 95% task completion on first-time cycle setup).",
    tags: ["Mobile App", "Women's Health", "Cycle Tracking", "PCOD/PCOS", "UX Research"],
  },
  {
    id: "ai-healthcare-module",
    slug: "ai-healthcare-module",
    title: "AI Healthcare Module",
    subtitle: "Simple, accessible AI interaction flows and conversational healthcare guidance",
    domain: "Healthcare",
    featured: false,
    order: 3,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    summary:
      "A patient-friendly AI healthcare module focused on conversational symptom assessment, automated appointment triage, and simplified medical terminology translation designed to be accessible to all ages.",
    problem:
      "Interacting with health AI can feel cold, intimidating, and confusing for patients when responses are overloaded with dense clinical jargon or ambiguous chat interfaces.",
    solution:
      "Designed a reassuring conversational AI interface with structured suggestion chips, empathetic pacing, clear disclaimer banners, and guided step-by-step triage flows.",
    features: [
      "Guided conversational symptom triage with adaptive follow-up prompts",
      "Plain-language explanation of complex medical lab terms and conditions",
      "Smart doctor specialty recommendations based on dialogue context",
      "Emergency warning detection with immediate helpline quick-dials",
      "Voice and text-friendly interaction patterns with high-contrast text",
    ],
    process: {
      research:
        "Mapped user anxiety spikes during AI health symptom inquiries to establish safety boundaries and reassuring visual cues.",
      flows:
        "Engineered conversation decision trees ensuring critical emergency paths are always 1 click away.",
      wireframes:
        "Prototyped structured card-based chat bubbles that break down medical advice into readable, digestible steps.",
      uiDesign:
        "Used calm pastel accents, soft borders, and generous line spacing to prevent visual fatigue during consultations.",
      prototype:
        "Simulated streaming chat responses with realistic loading pulses and interactive response pills in Figma.",
    },
    screens: [
      {
        title: "Conversational Health Assistant",
        description: "Warm conversational interface with prompt suggestions and clear medical safety disclaimers.",
        type: "mobile",
        accentColor: "#E6DDF7",
      },
      {
        title: "Structured Triage Card",
        description: "Symptom severity assessment broken down into color-coded, easy-to-read recommendation cards.",
        type: "mobile",
        accentColor: "#F8D7DF",
      },
      {
        title: "Doctor Handoff & Booking",
        description: "Seamless transfer from AI symptom assessment directly into certified specialist booking.",
        type: "mobile",
        accentColor: "#FCE5EB",
      },
    ],
    outcome: "Add result here (e.g. Delivered 25+ conversational interaction states and error handling edge cases).",
    tags: ["Healthcare", "AI Flows", "Conversational UI", "Interaction Design", "Figma"],
  },
  {
    id: "diet-nutrition-module",
    slug: "diet-nutrition-module",
    title: "Diet & Nutrition Module",
    subtitle: "Intuitive nutrition tracking, daily hydration goals, meal logging, and health progress",
    domain: "Healthcare",
    featured: false,
    order: 4,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    summary:
      "A holistic nutrition tracking module enabling effortless meal logging, customized calorie and macro targets, water hydration visualizers, and weekly wellness progress insights.",
    problem:
      "Traditional calorie counting apps often encourage obsessive habits or require cumbersome manual text inputs, leading to rapid user drop-off within the first week.",
    solution:
      "Created a supportive, encouraging nutrition companion that emphasizes gentle consistency through quick-add meal widgets, visual hydration meters, and holistic wellness streaks.",
    features: [
      "Visual calorie and macronutrient rings (proteins, carbs, healthy fats)",
      "Interactive hydration tracker with celebratory milestone animations",
      "Quick-log meal diary with pre-saved favorites and portion size presets",
      "Dietary goal customization for weight balance, energy, and clinical diets",
      "Weekly progress graphs tracking energy levels alongside nutrition",
    ],
    process: {
      research:
        "Interviewed users about daily logging barriers, finding that multi-step food searches caused the highest friction.",
      flows:
        "Created a simplified 2-step 'favorite meal' log flow and smart water quick-tap buttons (+250ml, +500ml).",
      wireframes:
        "Explored modular dashboard layouts to give equal visual weight to hydration, meal quality, and daily energy.",
      uiDesign:
        "Blended fresh soft pastels with clean typography to inspire positivity rather than anxiety around food.",
      prototype:
        "Crafted interactive progress bar fills and celebratory completion states in Figma prototypes.",
    },
    screens: [
      {
        title: "Daily Nutrition Dashboard",
        description: "Calorie balance breakdown, macro nutrient split, and daily water glass tracker.",
        type: "mobile",
        accentColor: "#F8D7DF",
      },
      {
        title: "Fast Meal Logging Sheet",
        description: "Categorized breakfast, lunch, dinner, and snack quick-pickers with portion sliders.",
        type: "mobile",
        accentColor: "#E6DDF7",
      },
      {
        title: "Hydration & Progress Trends",
        description: "Weekly water intake timeline and wellness habit consistency metrics.",
        type: "mobile",
        accentColor: "#FCE5EB",
      },
    ],
    outcome: "Add result here (e.g. Streamlined food entry flow to under 20 seconds per meal log).",
    tags: ["Mobile App", "Nutrition", "Habit Tracking", "Dashboard", "Figma"],
  },
  {
    id: "invitation-app",
    slug: "invitation-app",
    title: "Invitation App",
    subtitle: "Modern invitation creation, personalized customization, and frictionless digital sharing",
    domain: "Event Management",
    featured: false,
    order: 5,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma", "Canva"],
    summary:
      "A creative event application empowering users to design elegant invitations, customize layouts and typography, manage RSVP lists, and share invitations across modern messaging channels.",
    problem:
      "Digital invitations frequently lack elegance, or require complicated desktop graphic tools that are difficult to customize and share on mobile devices.",
    solution:
      "Designed a delightful, tactile mobile creation studio where users can choose curated aesthetic templates, personalize event details, preview in real time, and share with 1-tap RSVP links.",
    features: [
      "Curated designer template library for weddings, birthdays, baby showers & gatherings",
      "Interactive card canvas with real-time typography and color palette switcher",
      "Dynamic RSVP tracker showing confirmed guests, dietary notes, and plus-ones",
      "One-click sharing flow for WhatsApp, SMS, email, and social messaging",
      "Event countdown widget and location map integration for invitees",
    ],
    process: {
      research:
        "Studied how event hosts gather guest RSVPs across WhatsApp and email, pinpointing drop-offs caused by external login barriers.",
      flows:
        "Streamlined the guest experience into a zero-login web view with immediate 'Attending' or 'Decline' buttons.",
      wireframes:
        "Constructed intuitive bottom-sheet editors that preserve full view of the invitation card during customization.",
      uiDesign:
        "Infused luxury stationery aesthetics with creamy paper textures, rose gold accents, and refined serif typography.",
      prototype:
        "Engineered smooth card flip animations and sharing sheet transitions in Figma.",
    },
    screens: [
      {
        title: "Template Inspiration Gallery",
        description: "Curated aesthetic categories with live thumbnail previews and filter chips.",
        type: "mobile",
        accentColor: "#F8CBD8",
      },
      {
        title: "Live Invitation Canvas Editor",
        description: "Inline text formatting, background texture selector, and date/venue inputs.",
        type: "mobile",
        accentColor: "#F8D7DF",
      },
      {
        title: "Seamless Sharing & RSVP Tracker",
        description: "Guest response counter, direct WhatsApp broadcast, and attendee export list.",
        type: "mobile",
        accentColor: "#E6DDF7",
      },
    ],
    outcome: "Add result here (e.g. Completed 30+ card template guidelines and zero-friction guest RSVP flows).",
    tags: ["Event Management", "Mobile App", "Invitation Design", "Visual Design", "Canva"],
  },
  {
    id: "service-based-booking-platform",
    slug: "service-based-booking-platform",
    title: "Service-Based Booking Platform",
    subtitle: "Multi-industry service discovery, seamless checkout flows, and smart appointment scheduling",
    domain: "SaaS",
    featured: true,
    order: 6,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    summary:
      "A versatile web and mobile booking platform supporting multiple service industries (wellness, personal care, professional consultations) with intuitive service discovery, transparent pricing, and instant calendar scheduling.",
    problem:
      "Service businesses often lose customers due to confusing multi-page scheduling funnels, hidden add-on costs, and mismatched calendar time slots.",
    solution:
      "Developed an end-to-end booking architecture with clear service categorization, transparent pricing drawers, live provider calendar integration, and automated confirmation reminders.",
    features: [
      "Cross-industry service catalog with rich previews and duration indicators",
      "Dynamic real-time calendar slot picker with timezone synchronization",
      "Staff / provider selection with verified customer reviews and portfolios",
      "Frictionless checkout step with clear deposit and cancellation policies",
      "Client management portal for rescheduling, re-booking, and reminders",
    ],
    process: {
      research:
        "Audited competitive booking flows across salon, wellness, and freelance service platforms to identify common checkout drop-offs.",
      flows:
        "Formulated a concise 3-step booking funnel: Select Service -> Pick Time & Provider -> Confirm Details.",
      wireframes:
        "Designed responsive desktop and mobile wireframes prioritizing sticky order summaries to build trust.",
      uiDesign:
        "Established an elegant, trustworthy design system using soft neutral containers, rose action buttons, and plum contrast headers.",
      prototype:
        "Validated slot reservation timers and interactive rescheduling modals via Figma clickable prototypes.",
    },
    screens: [
      {
        title: "Service Selection & Catalog",
        description: "Clean service cards with pricing, duration, and expandable package details.",
        type: "web",
        accentColor: "#F8D7DF",
      },
      {
        title: "Interactive Time Slot Picker",
        description: "Real-time date picker, morning/afternoon slot blocks, and assigned provider pills.",
        type: "web",
        accentColor: "#E6DDF7",
      },
      {
        title: "Checkout & Summary Drawer",
        description: "Transparent price summary, cancellation policy, and one-click booking confirmation.",
        type: "web",
        accentColor: "#FCE5EB",
      },
      {
        title: "Customer Appointment Management",
        description: "Upcoming booking cards with instant add-to-calendar, reschedule, and contact options.",
        type: "web",
        accentColor: "#F8CBD8",
      },
    ],
    outcome: "Add result here (e.g. Created comprehensive design system covering 50+ desktop and mobile screens).",
    tags: ["SaaS", "E-commerce", "Web & Mobile", "Booking System", "Design System"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const domainsList = ["All", "Healthcare", "SaaS", "E-commerce", "Event Management"] as const;
