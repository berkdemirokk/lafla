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
];

export function getLesson(id: string): BundledLesson | undefined {
  return allLessons.find((l) => l.id === id);
}

// Re-export type for convenience
export type { BundledLesson };
