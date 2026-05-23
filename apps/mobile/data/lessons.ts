// Lafla — Unified lessons registry.
// Aggregates per-mode lesson files into a single lookup table.
//
// 2026-05-20: 6-mode radical cut. Removed lesson packs:
//   - banter-* (except bar.approach, renamed to bar-approach-lesson)
//   - academic, test-ielts, test-toefl, test-yds
//   - sport-*, health-*
//   - travel-bureaucracy, travel-hospitality, travel-expanded, travel-c1
//   - flirt-c1, flirt-advanced
//   - banter-c1, order-c1, social-c1, specialized-c1
//   - conversation-scripts, grammar-capsules
// career-* and professional-* are kept and grouped under the "work" mode.
// personal-b1 is kept under "daily".
// daily-airport was renamed to airport-lesson.

// === intro (force-first tutorial — Match DM) ===
// Bu lesson onboarding biter bitmez zorunlu trigger edilir (bkz.
// app/onboarding.tsx → handlePickLevel). Kullanıcı home feed'e
// ulaşmadan 90 saniyede "evet bu ben" momentini yaşar.
import { introMatchLessons } from "./intro-match-lesson";

// === flört (9 lesson set) ===
import { flirtOpenerLessons } from "./flirt-opener-lesson";
import { flirtBanterLessons } from "./flirt-banter-lesson";
import { flirtVoiceLessons } from "./flirt-voice-lesson";
import { flirtDateLessons } from "./flirt-date-lesson";
import { flirtCancelLessons } from "./flirt-cancel-lesson";
import { flirtDefineLessons } from "./flirt-define-lesson";
import { flirtRejectionLessons } from "./flirt-rejection-lesson";
import { flirtRecoveryLessons } from "./flirt-recovery-lesson";
import { flirtSecondDateLessons } from "./flirt-second-date-lesson";

// === iş (work + career + professional birleşti — 16 lesson set) ===
import { workSlackLessons } from "./work-slack-lesson";
import { workMeetingLessons } from "./work-meeting-lesson";
import { workEmailLessons } from "./work-email-lesson";
import { workReviewLessons } from "./work-review-lesson";
import { workCoffeechatLessons } from "./work-coffeechat-lesson";
import { workInterviewLessons } from "./work-interview-lesson";
import { workCodereviewLessons } from "./work-codereview-lesson";
import { workStandupLessons } from "./work-standup-lesson";
import { workDisagreeLessons } from "./work-disagree-lesson";
import { workFeedbackGivingLessons } from "./work-feedback-giving-lesson";
import { workPromotionAskLessons } from "./work-promotion-ask-lesson";
import { workNetworkingLessons } from "./work-networking-lesson";
import { careerFoundationsB1Lessons } from "./career-foundations-b1-lesson";
import { careerAdvancedB2Lessons } from "./career-advanced-b2-lesson";
import { professionalB1Lessons } from "./professional-b1-lesson";
import { professionalC1Lessons } from "./professional-c1-lesson";
// 2026-05-21 — Tech English niche (Türk yazılımcı): work.tech sub-skill
// PR review, on-call, sprint, interview, salary negotiation tech-specific.
import { techEnglishLessons } from "./tech-english-lesson";

// === bar (drink ordering + approach merged) ===
import { barLessons } from "./bar-lesson";
import { barApproachLessons } from "./bar-approach-lesson";
// 2026-05-21 — bar depth pack: +12 sahne (order.bar.7.8-13 + bar.approach.24.9-14)
// Mevcut 10 sahne → 22'ye çıkar. Turn sayısı 10-12, voice-first acceptable_patterns.
import { barExpandedLessons } from "./bar-expanded-lesson";

// === havaalanı ===
import { airportLessons } from "./airport-lesson";
// 2026-05-21 — airport depth pack: +12 sahne (airport.44.9-20)
// Immigration, lost bag, missed connection, upgrade, dietary, special
// assistance, customs, navigating, layover, phone/wifi, power bank.
// Mevcut 8 sahne → 20'ye çıkar.
import { airportExpandedLessons } from "./airport-expanded-lesson";

// === IELTS Speaking (7. mod, 2026-05-21) ===
// Part 1×6 (B1 familiar topics), Part 2×5 (B2 cue card), Part 3×4 (C1
// abstract discussion). Türk audience'ın #1 ödeme sebebi.
import { ieltsLessons } from "./ielts-lesson";
// IELTS Writing depth pack: Task 1×8 + Task 2×8 (16 total)
// Examiner walkthrough format — user paragraph anahtar cümlelerini yazar/söyler
// roleplay_chat ile. Band 7+ collocations (notable increase, albeit, false dichotomy)
import { ieltsWritingLessons } from "./ielts-writing-lesson";

// === Massive content expansion (2026-05-21) — 1-month retention ===
// 5 paralel agent çıktıları + tech English. Toplam +265 sahne.
import { barDeepLessons } from "./bar-deep-lesson";
import { airportDeepLessons } from "./airport-deep-lesson";
import { storyArcLessons } from "./story-arc-lesson";
import { storyArcV2Lessons } from "./story-arc-v2-lesson";
import { dailyExpansionLessons } from "./daily-expansion-lesson";
import { flirtDeepLessons } from "./flirt-deep-lesson";
import { workExpansionLessons } from "./work-expansion-lesson";

// === günlük (daily + personal + cefr survival/daily birleşti — 18 lesson set) ===
import { dailyDirectionsLessons } from "./daily-directions-lesson";
import { dailyTransportLessons } from "./daily-transport-lesson";
import { dailyShoppingLessons } from "./daily-shopping-lesson";
import { dailyPharmacyLessons } from "./daily-pharmacy-lesson";
import { dailyHotelLessons } from "./daily-hotel-lesson";
import { dailyPhoneLessons } from "./daily-phone-lesson";
import { dailyEmergencyLessons } from "./daily-emergency-lesson";
import { dailySmalltalkLessons } from "./daily-smalltalk-lesson";
import { dailyBankLessons } from "./daily-bank-lesson";
import { dailySalonLessons } from "./daily-salon-lesson";
import { dailyTaxiLessons } from "./daily-taxi-lesson";
import { dailyGymLessons } from "./daily-gym-lesson";
import { dailyTechSupportLessons } from "./daily-tech-support-lesson";
import { personalB1Lessons } from "./personal-b1-lesson";
import { cefrA1SurvivalLessons } from "./cefr-a1-survival-lesson";
import { cefrA2DailyLessons } from "./cefr-a2-daily-lesson";
import { a2MicroLessons } from "./a2-micro-lesson";
import { dailyExpandedLessons } from "./daily-expanded-lesson";

// === sipariş (kafe/restoran/delivery/grocery/fastfood/bill/tipping/complaint) ===
import { cafeLessons } from "./cafe-lesson";
import { restaurantLessons } from "./restaurant-lesson";
import { customLessons } from "./custom-lesson";
import { billLessons } from "./bill-lesson";
import { complaintLessons } from "./complaint-lesson";
import { tippingLessons } from "./tipping-lesson";
import { deliveryLessons } from "./delivery-lesson";
import { orderFastfoodLessons } from "./order-fastfood-lesson";
import { orderGroceryLessons } from "./order-grocery-lesson";

import type { BundledLesson } from "../lib/engine";

export const allLessons: ReadonlyArray<BundledLesson> = [
  // intro tutorial (force-first scene — Match DM)
  ...introMatchLessons,
  // flört
  ...flirtOpenerLessons,
  ...flirtBanterLessons,
  ...flirtVoiceLessons,
  ...flirtDateLessons,
  ...flirtCancelLessons,
  ...flirtDefineLessons,
  ...flirtRejectionLessons,
  ...flirtRecoveryLessons,
  ...flirtSecondDateLessons,
  // iş
  ...workSlackLessons,
  ...workMeetingLessons,
  ...workEmailLessons,
  ...workReviewLessons,
  ...workCoffeechatLessons,
  ...workInterviewLessons,
  ...workCodereviewLessons,
  ...workStandupLessons,
  ...workDisagreeLessons,
  ...workFeedbackGivingLessons,
  ...workPromotionAskLessons,
  ...workNetworkingLessons,
  ...careerFoundationsB1Lessons,
  ...careerAdvancedB2Lessons,
  ...professionalB1Lessons,
  ...professionalC1Lessons,
  ...techEnglishLessons,
  // bar
  ...barLessons,
  ...barApproachLessons,
  ...barExpandedLessons,
  // havaalanı
  ...airportLessons,
  ...airportExpandedLessons,
  // ielts (7. mod) — Speaking + Writing depth
  ...ieltsLessons,
  ...ieltsWritingLessons,
  // Massive content expansion 2026-05-21 (+250 sahne)
  ...barDeepLessons,           // +30
  ...airportDeepLessons,       // +30
  ...storyArcLessons,          // +40 (Berlin/NYC/IELTS arcs)
  ...storyArcV2Lessons,        // +36 (Erasmus/JuniorDev/NYConf/CustSupp arcs)
  ...dailyExpansionLessons,    // +50
  ...flirtDeepLessons,         // +50
  ...workExpansionLessons,     // +50
  // günlük
  ...dailyDirectionsLessons,
  ...dailyTransportLessons,
  ...dailyShoppingLessons,
  ...dailyPharmacyLessons,
  ...dailyHotelLessons,
  ...dailyPhoneLessons,
  ...dailyEmergencyLessons,
  ...dailySmalltalkLessons,
  ...dailyBankLessons,
  ...dailySalonLessons,
  ...dailyTaxiLessons,
  ...dailyGymLessons,
  ...dailyTechSupportLessons,
  ...personalB1Lessons,
  ...cefrA1SurvivalLessons,
  ...cefrA2DailyLessons,
  ...a2MicroLessons,
  ...dailyExpandedLessons,
  // sipariş
  ...cafeLessons,
  ...restaurantLessons,
  ...customLessons,
  ...billLessons,
  ...complaintLessons,
  ...tippingLessons,
  ...deliveryLessons,
  ...orderFastfoodLessons,
  ...orderGroceryLessons,
];

export function getLesson(id: string): BundledLesson | undefined {
  return allLessons.find((l) => l.id === id);
}

// Re-export type for convenience
export type { BundledLesson };
