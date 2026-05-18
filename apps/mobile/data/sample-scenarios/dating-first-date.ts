// Lifestyle sample scenario — Daily Life track (social).
// Pedagogical intent: small talk between two adults meeting for the first time.
// Hobbies, interests, where you grew up — equally applicable to meeting a friend's
// spouse at dinner. Intentionally neutral tone, NOT romance-coaching. Trains B1
// follow-up questions and natural turn-taking, not flirting.

import type { Scene } from "../scenes";

export const datingFirstDateScene: Scene = {
  id: "sample-lifestyle-dating-first-date",
  emoji: "💬",
  title: "First meeting,\nhobbies +\ninterests",
  description:
    "Small talk with someone you've just met. Exchange hobbies and interests, ask natural follow-ups. Same skills you'd use meeting any new acquaintance.",
  durationMin: 12,
  mode: "daily",
  cefrLevel: "B1",
  skillId: "lifestyle.social",
  lessonId: "sample-lifestyle-dating-first-date-lesson",
  isNew: true,
  progressLabel: "10 turns · B1",
};
