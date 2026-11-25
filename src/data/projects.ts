export type ProjectCategory = "product" | "logo" | "brand" | "graphic";
export type ProjectDomain = "Healthcare" | "SaaS" | "E-commerce" | "Event Management";

export interface ProjectStoryStep {
  brief: string;
  research: string;
  userFlow: string;
  wireframes: string;
  beforeAfter: {
    before: string;
    after: string;
    notes: string;
  };
  hiFiScreens: {
    title: string;
    description: string;
    file: string;
    accentColor: string;
  }[];
  designSystem: {
    colors: { name: string; hex: string }[];
    fonts: { name: string; usage: string }[];
    components: string[];
  };
  prototype: string;
  outcome: string; // Placeholder if unknown
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  domain: ProjectDomain;
  domainTags: string[];
  featured: boolean;
  order: number;
  period: string;
  role: string;
  tools: string[];
  cover: string;
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
  story: ProjectStoryStep;
  outcome: string; // Placeholder marked clearly
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "healthcare-mobile-app",
    slug: "healthcare-mobile-app",
    title: "Healthcare Mobile App",
    subtitle: "Complete digital health companion for appointment booking, telemedicine, and family health management",
    category: "product",
    domain: "Healthcare",
    domainTags: ["Healthcare", "Mobile App", "Telemedicine", "Family Health"],
    featured: true,
    order: 1,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    cover: "/projects/healthcare-mobile-app/cover.png",
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
    story: {
      brief:
        "Design a comprehensive, caring mobile health application that removes the stress from booking doctors, reading lab reports, and managing multi-generational family health records.",
      research:
        "Audited existing clinical booking systems; identified extreme cognitive overload when medical warnings and dense tables are forced onto small mobile screens.",
      userFlow:
        "Restructured the booking journey into 3 intuitive milestones: Specialist Selection → Slot Reservation → Confirmation with instant calendar add.",
      wireframes:
        "Created low-fidelity grey wireframe skeletons validating thumb-reach zones and replacing 4 redundant sub-menus with sticky bottom drawers.",
      beforeAfter: {
        before: "/projects/healthcare-mobile-app/before.png",
        after: "/projects/healthcare-mobile-app/after.png",
        notes: "Transformed cluttered table view with harsh red warning banners into an empathetic, card-based telemedicine portal.",
      },
      hiFiScreens: [
        {
          title: "Dashboard & Vitals",
          description: "Clean daily wellness overview with medicine reminders and instant tele-visit check-in.",
          file: "/projects/healthcare-mobile-app/screen-1.png",
          accentColor: "#F8D7DF",
        },
        {
          title: "Specialist Telemedicine",
          description: "Doctor credentials, slot selection chip matrix, and one-tap video consultation link.",
          file: "/projects/healthcare-mobile-app/screen-2.png",
          accentColor: "#E6DDF7",
        },
        {
          title: "Lab Reports Tracker",
          description: "Parameter indicator charts with downloadable encrypted PDF reports.",
          file: "/projects/healthcare-mobile-app/screen-3.png",
          accentColor: "#FCE5EB",
        },
        {
          title: "Family Member Hub",
          description: "Quick switcher to manage children, parents, and self without logging out.",
          file: "/projects/healthcare-mobile-app/screen-4.png",
          accentColor: "#F8CBD8",
        },
      ],
      designSystem: {
        colors: [
          { name: "Cream Canvas", hex: "#FFF8F5" },
          { name: "Blush Health", hex: "#F8D7DF" },
          { name: "Rose Accent", hex: "#D9577B" },
          { name: "Plum Text", hex: "#2B1B2E" },
        ],
        fonts: [
          { name: "Fraunces", usage: "Headings, Doctor Names & Empathetic Callouts" },
          { name: "DM Sans", usage: "Body text, slots, timings & vitals metadata" },
        ],
        components: [
          "Telemedicine Appointment Card",
          "Doctor Slot Picker Matrix",
          "Lab Report Parameter Sheet",
          "Emergency Speed-Dial Pill",
          "Family Profile Switcher",
        ],
      },
      prototype:
        "Full clickable Figma prototype mapping appointment booking, video call join screen, and lab report accordion transitions.",
      outcome: "Add real outcome here (e.g. Final design handoff and design system documentation).",
    },
    outcome: "Add result here (e.g. Completed design system ready for development handoff).",
    tags: ["Mobile App", "Healthcare", "Telemedicine", "User Flows", "Figma"],
  },
  {
    id: "womens-health-app",
    slug: "womens-health-app",
    title: "Women's Health App",
    subtitle: "Empathic menstrual tracking, cycle prediction, and PCOD/PCOS guidance",
    category: "product",
    domain: "Healthcare",
    domainTags: ["Healthcare", "Women's Health", "Cycle Tracking", "PCOD/PCOS"],
    featured: true,
    order: 2,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    cover: "/projects/womens-health-app/cover.png",
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
    story: {
      brief:
        "Create an empathic, accurate menstrual tracking app tailored for women managing irregular cycles and PCOD/PCOS conditions without medical jargon.",
      research:
        "Conducted user interviews showing users feel anxiety when apps highlight period delays with alarming red colors.",
      userFlow:
        "Engineered a single-tap daily logger allowing symptoms, moods, and flow intensity to be recorded in under 15 seconds.",
      wireframes:
        "Explored circular gauge vs. calendar grid layouts, validating that a hybrid radial overview delivers fastest comprehension.",
      beforeAfter: {
        before: "/projects/womens-health-app/before.png",
        after: "/projects/womens-health-app/after.png",
        notes: "Replaced confusing tabular period logs with a soothing radial cycle ring and discrete symptom chips.",
      },
      hiFiScreens: [
        {
          title: "Cycle Prediction Wheel",
          description: "Ovulation window, fertile phase countdown, and daily hormone rhythm notes.",
          file: "/projects/womens-health-app/screen-1.png",
          accentColor: "#F8D7DF",
        },
        {
          title: "Symptom & Mood Logger",
          description: "Soft pastel chips for quick logging of energy, cramps, and water intake.",
          file: "/projects/womens-health-app/screen-2.png",
          accentColor: "#F1A0BA",
        },
        {
          title: "PCOD Lifestyle Guide",
          description: "Hormone-friendly nutrition tips and gentle movement routines.",
          file: "/projects/womens-health-app/screen-3.png",
          accentColor: "#E6DDF7",
        },
        {
          title: "Monthly Cycle History",
          description: "Historical period length trends and exportable doctor summary sheets.",
          file: "/projects/womens-health-app/screen-4.png",
          accentColor: "#FCE5EB",
        },
      ],
      designSystem: {
        colors: [
          { name: "Petal Cream", hex: "#FFF8F5" },
          { name: "Blush Pink", hex: "#F8D7DF" },
          { name: "Soft Lilac", hex: "#E6DDF7" },
          { name: "Comfort Rose", hex: "#D9577B" },
        ],
        fonts: [
          { name: "Fraunces", usage: "Cycle day displays, milestone numbers & headers" },
          { name: "DM Sans", usage: "Symptom labels, tooltips & guidance copy" },
        ],
        components: [
          "Radial Cycle Ring Gauge",
          "Quick Symptom Tap Chip",
          "PCOD Advice Accordion",
          "Private Passcode Lock Screen",
        ],
      },
      prototype:
        "Figma prototype simulating daily logging flow, animated ring completion, and switching between months.",
      outcome: "Add real outcome here (e.g. Completed screen designs and user testing findings).",
    },
    outcome: "Add result here (e.g. Usability evaluations conducted on first-time cycle setup).",
    tags: ["Mobile App", "Women's Health", "Cycle Tracking", "PCOD/PCOS", "UX Research"],
  },
  {
    id: "ai-healthcare-module",
    slug: "ai-healthcare-module",
    title: "AI Healthcare Module",
    subtitle: "Simple, accessible AI interaction flows and conversational healthcare guidance",
    category: "product",
    domain: "Healthcare",
    domainTags: ["Healthcare", "AI Flows", "Conversational UI", "Interaction Design"],
    featured: false,
    order: 3,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    cover: "/projects/ai-healthcare-module/cover.png",
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
    story: {
      brief:
        "Design a reassuring, accessible conversational AI flow that assists patients in understanding their symptoms without feeling intimidated.",
      research:
        "Analyzed chatbot failure points where patients felt lost in endless text walls; prioritized structured response chips.",
      userFlow:
        "Created a closed-loop dialogue flow: Greeting → Symptom Clarification → Severity Triage → Doctor Handoff.",
      wireframes:
        "Tested pill suggestion buttons vs. free text input to reduce typing fatigue for unwell patients.",
      beforeAfter: {
        before: "/projects/ai-healthcare-module/before.png",
        after: "/projects/ai-healthcare-module/after.png",
        notes: "Replaced wall-of-text chatbot bubbles with structured, color-coded triage suggestion cards.",
      },
      hiFiScreens: [
        {
          title: "Conversational Health Assistant",
          description: "Reassuring dialogue cards with plain-language recommendations.",
          file: "/projects/ai-healthcare-module/screen-1.png",
          accentColor: "#E6DDF7",
        },
        {
          title: "Symptom Severity Assessment",
          description: "Structured card with immediate action buttons and disclaimer banner.",
          file: "/projects/ai-healthcare-module/screen-2.png",
          accentColor: "#F8D7DF",
        },
        {
          title: "Specialist Handoff Drawer",
          description: "One-tap transition from chat diagnosis into direct doctor appointment booking.",
          file: "/projects/ai-healthcare-module/screen-3.png",
          accentColor: "#FCE5EB",
        },
      ],
      designSystem: {
        colors: [
          { name: "Lilac AI Surface", hex: "#E6DDF7" },
          { name: "Calm White", hex: "#FFFFFF" },
          { name: "Rose Action", hex: "#D9577B" },
          { name: "Plum Neutral", hex: "#2B1B2E" },
        ],
        fonts: [
          { name: "Fraunces", usage: "Chatbot titles & triage categories" },
          { name: "DM Sans", usage: "Dialogue bubbles & suggestion pills" },
        ],
        components: [
          "Conversational Chat Bubble",
          "Quick Response Option Chip",
          "Medical Safety Disclaimer Banner",
          "Direct Doctor Handoff Drawer",
        ],
      },
      prototype:
        "Figma prototype demonstrating streaming message reveals and interactive suggestion button taps.",
      outcome: "Add real outcome here (e.g. Conversational interaction states and edge-case handling).",
    },
    outcome: "Add result here (e.g. Delivered conversational interaction states and error handling edge cases).",
    tags: ["Healthcare", "AI Flows", "Conversational UI", "Interaction Design", "Figma"],
  },
  {
    id: "diet-nutrition-module",
    slug: "diet-nutrition-module",
    title: "Diet & Nutrition Module",
    subtitle: "Intuitive nutrition tracking, daily hydration goals, meal logging, and health progress",
    category: "product",
    domain: "Healthcare",
    domainTags: ["Healthcare", "Nutrition", "Habit Tracking", "Dashboard"],
    featured: false,
    order: 4,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    cover: "/projects/diet-nutrition-module/cover.png",
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
    story: {
      brief:
        "Design a gentle, habit-forming nutrition and hydration tracking module that replaces calorie obsession with positive wellness momentum.",
      research:
        "Identified that users abandon logging apps because entering meal ingredients manually takes over 3 minutes per meal.",
      userFlow:
        "Designed a 2-tap quick-add mechanism with pre-saved breakfast/lunch favorites and portion size quick-sliders.",
      wireframes:
        "Created balanced dashboard wireframes placing hydration and energy metrics alongside macronutrients.",
      beforeAfter: {
        before: "/projects/diet-nutrition-module/before.png",
        after: "/projects/diet-nutrition-module/after.png",
        notes: "Replaced dense numerical spreadsheets with cheerful progress rings and quick water tap cards.",
      },
      hiFiScreens: [
        {
          title: "Daily Nutrition Dashboard",
          description: "Visual macronutrient progress ring and daily water intake status.",
          file: "/projects/diet-nutrition-module/screen-1.png",
          accentColor: "#F8D7DF",
        },
        {
          title: "Quick-Add Meal Sheet",
          description: "Categorized meal picker with portion presets.",
          file: "/projects/diet-nutrition-module/screen-2.png",
          accentColor: "#E6DDF7",
        },
        {
          title: "Hydration Trends",
          description: "Weekly consistency graphs and hydration reminders.",
          file: "/projects/diet-nutrition-module/screen-3.png",
          accentColor: "#FCE5EB",
        },
      ],
      designSystem: {
        colors: [
          { name: "Cream Canvas", hex: "#FFF8F5" },
          { name: "Rose Goal", hex: "#D9577B" },
          { name: "Hydration Mint", hex: "#D4EFF2" },
          { name: "Plum Text", hex: "#2B1B2E" },
        ],
        fonts: [
          { name: "Fraunces", usage: "Goal milestones & macro counters" },
          { name: "DM Sans", usage: "Ingredient lists & portion sliders" },
        ],
        components: [
          "Macronutrient Progress Ring",
          "Hydration Quick-Add Glass Button",
          "Meal Category Tab Bar",
          "Weekly Habit Bar Graph",
        ],
      },
      prototype:
        "Figma prototype showing progress ring fill animation upon logging meals and water glasses.",
      outcome: "Add real outcome here (e.g. Streamlined meal logging flow and user testing findings).",
    },
    outcome: "Add result here (e.g. Streamlined food entry flow and user feedback).",
    tags: ["Mobile App", "Nutrition", "Habit Tracking", "Dashboard", "Figma"],
  },
  {
    id: "invitation-app",
    slug: "invitation-app",
    title: "Invitation App",
    subtitle: "Modern invitation creation, personalized customization, and frictionless digital sharing",
    category: "product",
    domain: "Event Management",
    domainTags: ["Event Management", "Invitation Design", "Visual Design", "Canva"],
    featured: false,
    order: 5,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma", "Canva"],
    cover: "/projects/invitation-app/cover.png",
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
    story: {
      brief:
        "Design a delightful mobile invitation studio where hosts can personalize luxury event stationery and track RSVPs without sending clunky PDF attachments.",
      research:
        "Identified that guest drop-off increases when forced to create an account or install an app; engineered a zero-login web link.",
      userFlow:
        "Simplified the host journey: Template Selection → Event Details Input → Instant Live Preview → Direct WhatsApp Share.",
      wireframes:
        "Prototyped a bottom-sheet editor ensuring the invitation card remains clearly visible while editing typography and colors.",
      beforeAfter: {
        before: "/projects/invitation-app/before.png",
        after: "/projects/invitation-app/after.png",
        notes: "Transformed static image sharing into an interactive digital invitation card with live RSVP tally.",
      },
      hiFiScreens: [
        {
          title: "Template Inspiration Gallery",
          description: "Curated wedding, birthday, and party card themes with real-time texture preview.",
          file: "/projects/invitation-app/screen-1.png",
          accentColor: "#F8CBD8",
        },
        {
          title: "Live Card Canvas Editor",
          description: "Custom font styling, color palette switcher, and event location pin.",
          file: "/projects/invitation-app/screen-2.png",
          accentColor: "#F8D7DF",
        },
        {
          title: "RSVP & Guest Tracker",
          description: "Real-time guest response breakdown with dietary notes and direct WhatsApp reminder.",
          file: "/projects/invitation-app/screen-3.png",
          accentColor: "#E6DDF7",
        },
      ],
      designSystem: {
        colors: [
          { name: "Cream Stationery", hex: "#FFF8F5" },
          { name: "Blush Accent", hex: "#F8D7DF" },
          { name: "Rose Foil", hex: "#D9577B" },
          { name: "Deep Plum", hex: "#2B1B2E" },
        ],
        fonts: [
          { name: "Fraunces", usage: "Invitation headlines, couple/host names & dates" },
          { name: "DM Sans", usage: "RSVP inputs, venue addresses & guest lists" },
        ],
        components: [
          "Invitation Canvas Card",
          "Color Palette Swatch Switcher",
          "Guest RSVP Tally Counter",
          "WhatsApp Broadcast Button",
        ],
      },
      prototype:
        "Interactive Figma prototype illustrating 3D card envelope opening and instant RSVP confirmation.",
      outcome: "Add real outcome here (e.g. Responsive templates and guest RSVP flows).",
    },
    outcome: "Add result here (e.g. Card template guidelines and guest RSVP flows).",
    tags: ["Event Management", "Mobile App", "Invitation Design", "Visual Design", "Canva"],
  },
  {
    id: "service-based-booking-platform",
    slug: "service-based-booking-platform",
    title: "Service-Based Booking Platform",
    subtitle: "Multi-industry service discovery, seamless checkout flows, and smart appointment scheduling",
    category: "product",
    domain: "SaaS",
    domainTags: ["SaaS", "E-commerce", "Booking System", "Design System"],
    featured: true,
    order: 6,
    period: "2024",
    role: "UI/UX & Product Designer",
    tools: ["Figma"],
    cover: "/projects/service-based-booking-platform/cover.png",
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
    story: {
      brief:
        "Architect a responsive, multi-industry booking engine that clarifies complex service packages, eliminates slot reservation friction, and boosts conversion.",
      research:
        "Identified that hidden checkout fees and ambiguous cancellation rules were primary causes of customer drop-off.",
      userFlow:
        "Structured a clear 3-step funnel: Choose Service & Specialist → Select Real-time Slot → Review Transparent Summary.",
      wireframes:
        "Engineered responsive layouts with sticky desktop summary drawers and mobile bottom sheets.",
      beforeAfter: {
        before: "/projects/service-based-booking-platform/before.png",
        after: "/projects/service-based-booking-platform/after.png",
        notes: "Replaced 6-step fragmented checkout pages with an intuitive 3-step single-flow booking canvas.",
      },
      hiFiScreens: [
        {
          title: "Service Catalog & Package Details",
          description: "Clean service cards with clear duration and pricing breakdown.",
          file: "/projects/service-based-booking-platform/screen-1.png",
          accentColor: "#F8D7DF",
        },
        {
          title: "Real-Time Slot & Provider Matrix",
          description: "Calendar date picker with morning/evening slot availability.",
          file: "/projects/service-based-booking-platform/screen-2.png",
          accentColor: "#E6DDF7",
        },
        {
          title: "Transparent Checkout Drawer",
          description: "Transparent deposit summary, cancellation policy, and confirmation.",
          file: "/projects/service-based-booking-platform/screen-3.png",
          accentColor: "#FCE5EB",
        },
        {
          title: "Appointment Management Portal",
          description: "Upcoming appointment card with 1-click reschedule and reminder settings.",
          file: "/projects/service-based-booking-platform/screen-4.png",
          accentColor: "#F8CBD8",
        },
      ],
      designSystem: {
        colors: [
          { name: "Cream Base", hex: "#FFF8F5" },
          { name: "Rose Primary", hex: "#D9577B" },
          { name: "Lilac Neutral", hex: "#E6DDF7" },
          { name: "Plum Contrast", hex: "#2B1B2E" },
        ],
        fonts: [
          { name: "Fraunces", usage: "Platform headings & service titles" },
          { name: "DM Sans", usage: "Pricing cards, time slots & checkout notes" },
        ],
        components: [
          "Service Catalog Card",
          "Interactive Calendar Slot Pill",
          "Sticky Order Summary Drawer",
          "Reschedule Confirmation Modal",
        ],
      },
      prototype:
        "Figma clickable prototype testing slot booking validation, deposit payment, and confirmation toast.",
      outcome: "Add real outcome here (e.g. Complete design system and responsive screens).",
    },
    outcome: "Add result here (e.g. Comprehensive design system covering desktop and mobile screens).",
    tags: ["SaaS", "E-commerce", "Web & Mobile", "Booking System", "Design System"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const domainsList = ["All", "Healthcare", "SaaS", "E-commerce", "Event Management"] as const;
export const categoriesList = ["All", "Product", "Logo", "Brand", "Graphic"] as const;
