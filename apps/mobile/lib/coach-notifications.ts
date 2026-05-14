// Lafla — Notification copy in the coach's voice.
//
// Helper used by the push-notification scheduler (daily nudge, streak save,
// re-engagement). Kept separate from `coach.ts` so the notification scheduler
// can import this without pulling AsyncStorage into a background task that
// already has its own state passed in.
//
// All copy is Turkish-first (adult tone), references the user's name when
// available, and leans on stored topic memory so the nudge feels personal
// instead of generic ("Hey, study English today!" → no thanks).

import type { CefrLevel } from "../data/scenes";
import type { CoachState } from "./coach";

export interface NotificationCopy {
  title: string;
  body: string;
}

function namePart(state: CoachState): string {
  const n = state.userDisplayName;
  return n ? `, ${n}` : "";
}

function levelTopic(level: CefrLevel | null): string {
  switch (level) {
    case "A1":
    case "A2":
      return "günlük konuşma";
    case "B1":
      return "günlük diyalog";
    case "B2":
      return "iş İngilizcesi";
    case "C1":
    case "C2":
      return "nuanslı sohbet";
    default:
      return "İngilizce sohbet";
  }
}

/**
 * Daily nudge copy. Picks one of several patterns based on what the coach
 * remembers about the user, so the notification doesn't feel templated when
 * read across consecutive days.
 */
export function getDailyNudgeCopy(
  state: CoachState,
  userLevel: CefrLevel | null,
): NotificationCopy {
  const np = namePart(state);
  const coach = state.name;
  const lastTopic = state.topicMemory[0];
  const weakness = state.weaknesses[0];

  // Returning user with recent topic — most personal.
  if (lastTopic && state.totalSessions > 1) {
    return {
      title: `${coach} soruyor`,
      body: `10 dakikan var mı${np}? Bugün ${lastTopic} pratiği yapmak istemiştik.`,
    };
  }

  // Returning user with a known weakness.
  if (weakness && state.totalSessions > 1) {
    return {
      title: `${coach} bekliyor`,
      body: `Bugün biraz ${weakness} çalışalım mı${np}? 5 dakika yeter.`,
    };
  }

  // Returning user, no specific memory yet.
  if (state.totalSessions > 0) {
    return {
      title: `${coach} merhaba diyor`,
      body: `Selam${np}, kısa bir ${levelTopic(userLevel)} pratiği yapalım mı?`,
    };
  }

  // First-time / cold notification.
  return {
    title: `${coach} seninle tanışmak istiyor`,
    body: `Hi${np}! Bugün ilk dersini başlatmaya ne dersin? Sadece 2 dakika.`,
  };
}
