# Priya K. Lakkad — UI/UX & Product Designer Portfolio

Portfolio website built with Next.js (App Router), Tailwind CSS, and GSAP ScrollTrigger on branch `scroll-story`.

- **Designer:** Priya K. Lakkad — UI/UX Designer (Surat, India)
- **Contact:** priyalakkad11@gmail.com | WhatsApp: +91 70486 28505
- **Tools:** Figma, Canva

## Screen Factory & Real-Asset Override System

Every product screen in this portfolio is rendered in code using the reusable `src/ui-kit/` component library and scenario data from `src/data/scenarios.ts`, wrapped with `ScreenWrapper` (`src/components/factory/ScreenWrapper.tsx`).

To replace any coded concept screen with a real exported PNG or WebP screenshot from Figma, drop the image into `/public/screens/<project-slug>/<screen-id>.png` (or `.webp`) and register it in `src/data/assetManifest.ts`. `ScreenWrapper` will automatically display your real asset instead of the coded screen.

### Drop-in Path Checklist

#### 1. `healthcare-mobile-app` (MediCare Plus)
- `/public/screens/healthcare-mobile-app/hero-overview.png`
- `/public/screens/healthcare-mobile-app/hc-onboarding.png`
- `/public/screens/healthcare-mobile-app/hc-otp.png`
- `/public/screens/healthcare-mobile-app/hc-home.png`
- `/public/screens/healthcare-mobile-app/hc-search.png`
- `/public/screens/healthcare-mobile-app/hc-profile.png`
- `/public/screens/healthcare-mobile-app/hc-slots.png`
- `/public/screens/healthcare-mobile-app/hc-payment.png`
- `/public/screens/healthcare-mobile-app/hc-confirm.png`
- `/public/screens/healthcare-mobile-app/hc-telemed.png`
- `/public/screens/healthcare-mobile-app/hc-labs.png`
- `/public/screens/healthcare-mobile-app/hc-insurance.png`
- `/public/screens/healthcare-mobile-app/hc-family.png`
- `/public/screens/healthcare-mobile-app/web-dashboard.png`

#### 2. `womens-health-app` (Aura Cycle & Wellness)
- `/public/screens/womens-health-app/hero-overview.png`
- `/public/screens/womens-health-app/wh-onboarding.png`
- `/public/screens/womens-health-app/wh-cycle-home.png`
- `/public/screens/womens-health-app/wh-calendar-phase.png`
- `/public/screens/womens-health-app/wh-symptom-logger.png`
- `/public/screens/womens-health-app/wh-insights.png`
- `/public/screens/womens-health-app/wh-records.png`
- `/public/screens/womens-health-app/wh-pcod-article.png`
- `/public/screens/womens-health-app/wh-reminders.png`
- `/public/screens/womens-health-app/wh-settings.png`
- `/public/screens/womens-health-app/web-dashboard.png`

#### 3. `ai-healthcare-module` (CarePulse AI Triage)
- `/public/screens/ai-healthcare-module/hero-overview.png`
- `/public/screens/ai-healthcare-module/ai-chat-bubbles.png`
- `/public/screens/ai-healthcare-module/ai-quick-replies.png`
- `/public/screens/ai-healthcare-module/ai-typing.png`
- `/public/screens/ai-healthcare-module/ai-triage-result.png`
- `/public/screens/ai-healthcare-module/ai-doctor-handoff.png`
- `/public/screens/ai-healthcare-module/ai-history.png`
- `/public/screens/ai-healthcare-module/ai-voice-input.png`
- `/public/screens/ai-healthcare-module/ai-lab-explainer.png`
- `/public/screens/ai-healthcare-module/ai-emergency.png`
- `/public/screens/ai-healthcare-module/web-dashboard.png`

#### 4. `diet-nutrition-module` (NutriTrack India)
- `/public/screens/diet-nutrition-module/hero-overview.png`
- `/public/screens/diet-nutrition-module/diet-onboarding.png`
- `/public/screens/diet-nutrition-module/diet-dashboard.png`
- `/public/screens/diet-nutrition-module/diet-meal-log.png`
- `/public/screens/diet-nutrition-module/diet-food-detail.png`
- `/public/screens/diet-nutrition-module/diet-water.png`
- `/public/screens/diet-nutrition-module/diet-weekly.png`
- `/public/screens/diet-nutrition-module/diet-recipes.png`
- `/public/screens/diet-nutrition-module/web-dashboard.png`

#### 5. `invitation-app` (Utsav Studio)
- `/public/screens/invitation-app/hero-overview.png`
- `/public/screens/invitation-app/inv-gallery.png`
- `/public/screens/invitation-app/inv-editor.png`
- `/public/screens/invitation-app/inv-guests.png`
- `/public/screens/invitation-app/inv-share.png`
- `/public/screens/invitation-app/web-dashboard.png`

#### 6. `service-based-booking-platform` (BookEase Local)
- `/public/screens/service-based-booking-platform/hero-overview.png`
- `/public/screens/service-based-booking-platform/bk-services.png`
- `/public/screens/service-based-booking-platform/bk-provider.png`
- `/public/screens/service-based-booking-platform/bk-datetime.png`
- `/public/screens/service-based-booking-platform/bk-checkout.png`
- `/public/screens/service-based-booking-platform/web-dashboard.png`
