// Lafla — Unified lessons registry.
// Aggregates per-skill lesson files into a single lookup table.

import { cafeLessons } from "./cafe-lesson";
import { restaurantLessons } from "./restaurant-lesson";
import { customLessons } from "./custom-lesson";
import { billLessons } from "./bill-lesson";
import { complaintLessons } from "./complaint-lesson";
import { tippingLessons } from "./tipping-lesson";
import { barLessons } from "./bar-lesson";
import { deliveryLessons } from "./delivery-lesson";
import { flirtOpenerLessons } from "./flirt-opener-lesson";
import { flirtBanterLessons } from "./flirt-banter-lesson";
import { flirtVoiceLessons } from "./flirt-voice-lesson";
import { flirtDateLessons } from "./flirt-date-lesson";
import { flirtCancelLessons } from "./flirt-cancel-lesson";
import { flirtDefineLessons } from "./flirt-define-lesson";
import { flirtRejectionLessons } from "./flirt-rejection-lesson";
import { flirtRecoveryLessons } from "./flirt-recovery-lesson";
import { workSlackLessons } from "./work-slack-lesson";
import { workMeetingLessons } from "./work-meeting-lesson";
import { workEmailLessons } from "./work-email-lesson";
import { workReviewLessons } from "./work-review-lesson";
import { workCoffeechatLessons } from "./work-coffeechat-lesson";
import { workInterviewLessons } from "./work-interview-lesson";
import { workCodereviewLessons } from "./work-codereview-lesson";
import { dailyDirectionsLessons } from "./daily-directions-lesson";
import { dailyTransportLessons } from "./daily-transport-lesson";
import { dailyShoppingLessons } from "./daily-shopping-lesson";
import { dailyPharmacyLessons } from "./daily-pharmacy-lesson";
import { dailyHotelLessons } from "./daily-hotel-lesson";
import { dailyPhoneLessons } from "./daily-phone-lesson";
import { dailyEmergencyLessons } from "./daily-emergency-lesson";
import { dailySmalltalkLessons } from "./daily-smalltalk-lesson";
import { banterBarLessons } from "./banter-bar-lesson";
import { banterRoastLessons } from "./banter-roast-lesson";
import { banterWhatdoyoudoLessons } from "./banter-whatdoyoudo-lesson";
import { banterComplimentLessons } from "./banter-compliment-lesson";
import { banterExitLessons } from "./banter-exit-lesson";
import { banterOpinionsLessons } from "./banter-opinions-lesson";
import { dailyBankLessons } from "./daily-bank-lesson";
import { dailySalonLessons } from "./daily-salon-lesson";
import { dailyTaxiLessons } from "./daily-taxi-lesson";
import { workStandupLessons } from "./work-standup-lesson";
import { workDisagreeLessons } from "./work-disagree-lesson";
import { dailyGymLessons } from "./daily-gym-lesson";
import { dailyTechSupportLessons } from "./daily-tech-support-lesson";
import { dailyAirportLessons } from "./daily-airport-lesson";
import { workFeedbackGivingLessons } from "./work-feedback-giving-lesson";
import { workPromotionAskLessons } from "./work-promotion-ask-lesson";
import { workNetworkingLessons } from "./work-networking-lesson";
import { banterTaxiLessons } from "./banter-taxi-lesson";
import { banterElevatorLessons } from "./banter-elevator-lesson";
import { banterPartyLessons } from "./banter-party-lesson";
import { flirtSecondDateLessons } from "./flirt-second-date-lesson";
import { orderFastfoodLessons } from "./order-fastfood-lesson";
import { orderGroceryLessons } from "./order-grocery-lesson";
// ---- Wave 3 (CEFR + mode pivot) ----
import { cefrA1SurvivalLessons } from "./cefr-a1-survival-lesson";
import { cefrA2DailyLessons } from "./cefr-a2-daily-lesson";
import { a2MicroLessons } from "./a2-micro-lesson";
import { careerFoundationsB1Lessons } from "./career-foundations-b1-lesson";
import { careerAdvancedB2Lessons } from "./career-advanced-b2-lesson";
import { travelBureaucracyB1Lessons } from "./travel-bureaucracy-b1-lesson";
import { travelHospitalityB2Lessons } from "./travel-hospitality-b2-lesson";
import { academicB2Lessons } from "./academic-b2-lesson";
import { professionalB1Lessons } from "./professional-b1-lesson";
import { professionalC1Lessons } from "./professional-c1-lesson";
import { specializedC1Lessons } from "./specialized-c1-lesson";
import { personalB1Lessons } from "./personal-b1-lesson";
import { dailyExpandedLessons } from "./daily-expanded-lesson";
import { conversationScriptsLessons } from "./conversation-scripts-lesson";
import { grammarCapsuleLessons } from "./grammar-capsules-lesson";
import { testIeltsSpeakingLessons } from "./test-ielts-speaking-lesson";
import { testToeflSpeakingLessons } from "./test-toefl-speaking-lesson";
import { testYdsYokdilLessons } from "./test-yds-yokdil-lesson";
// ---- Pivot 2 (Spor + Sağlık modes + C1 layer + Travel/Flört derinleşme) ----
import { sportA1A2Lessons } from "./sport-a1-a2-lessons";
import { sportB1B2Lessons } from "./sport-b1-b2-lessons";
import { sportC1Lessons } from "./sport-c1-lessons";
import { healthA1A2Lessons } from "./health-a1-a2-lessons";
import { healthB1B2Lessons } from "./health-b1-b2-lessons";
import { healthC1Lessons } from "./health-c1-lessons";
import { travelExpandedLessons } from "./travel-expanded-lessons";
import { travelC1Lessons } from "./travel-c1-lessons";
import { flirtAdvancedLessons } from "./flirt-advanced-lessons";
import { flirtC1Lessons } from "./flirt-c1-lessons";
import { banterC1Lessons } from "./banter-c1-lessons";
import { orderC1Lessons } from "./order-c1-lessons";
import { socialC1Lessons } from "./social-c1-lessons";
import type { BundledLesson } from "./cafe-lesson";

export const allLessons: ReadonlyArray<BundledLesson> = [
  ...cafeLessons,
  ...restaurantLessons,
  ...customLessons,
  ...billLessons,
  ...complaintLessons,
  ...tippingLessons,
  ...barLessons,
  ...deliveryLessons,
  ...flirtOpenerLessons,
  ...flirtBanterLessons,
  ...flirtVoiceLessons,
  ...flirtDateLessons,
  ...flirtCancelLessons,
  ...flirtDefineLessons,
  ...flirtRejectionLessons,
  ...flirtRecoveryLessons,
  ...workSlackLessons,
  ...workMeetingLessons,
  ...workEmailLessons,
  ...workReviewLessons,
  ...workCoffeechatLessons,
  ...workInterviewLessons,
  ...workCodereviewLessons,
  ...dailyDirectionsLessons,
  ...dailyTransportLessons,
  ...dailyShoppingLessons,
  ...dailyPharmacyLessons,
  ...dailyHotelLessons,
  ...dailyPhoneLessons,
  ...dailyEmergencyLessons,
  ...dailySmalltalkLessons,
  ...banterBarLessons,
  ...banterRoastLessons,
  ...banterWhatdoyoudoLessons,
  ...banterComplimentLessons,
  ...banterExitLessons,
  ...banterOpinionsLessons,
  ...dailyBankLessons,
  ...dailySalonLessons,
  ...dailyTaxiLessons,
  ...workStandupLessons,
  ...workDisagreeLessons,
  ...dailyGymLessons,
  ...dailyTechSupportLessons,
  ...dailyAirportLessons,
  ...workFeedbackGivingLessons,
  ...workPromotionAskLessons,
  ...workNetworkingLessons,
  ...banterTaxiLessons,
  ...banterElevatorLessons,
  ...banterPartyLessons,
  ...flirtSecondDateLessons,
  ...orderFastfoodLessons,
  ...orderGroceryLessons,
  // ---- Wave 3 (CEFR + mode pivot) ----
  ...cefrA1SurvivalLessons,
  ...cefrA2DailyLessons,
  ...a2MicroLessons,
  ...careerFoundationsB1Lessons,
  ...careerAdvancedB2Lessons,
  ...travelBureaucracyB1Lessons,
  ...travelHospitalityB2Lessons,
  ...academicB2Lessons,
  ...professionalB1Lessons,
  ...professionalC1Lessons,
  ...specializedC1Lessons,
  ...personalB1Lessons,
  ...dailyExpandedLessons,
  ...conversationScriptsLessons,
  ...grammarCapsuleLessons,
  ...testIeltsSpeakingLessons,
  ...testToeflSpeakingLessons,
  ...testYdsYokdilLessons,
  // Pivot 2 — Spor & Sağlık (A1-C1 across all relevant modes)
  ...sportA1A2Lessons,
  ...sportB1B2Lessons,
  ...sportC1Lessons,
  ...healthA1A2Lessons,
  ...healthB1B2Lessons,
  ...healthC1Lessons,
  // Pivot 2 — Travel/Flört derinleşme + C1 katman
  ...travelExpandedLessons,
  ...travelC1Lessons,
  ...flirtAdvancedLessons,
  ...flirtC1Lessons,
  ...banterC1Lessons,
  ...orderC1Lessons,
  ...socialC1Lessons,
];

export function getLesson(id: string): BundledLesson | undefined {
  return allLessons.find((l) => l.id === id);
}

// Re-export type for convenience
export type { BundledLesson };
