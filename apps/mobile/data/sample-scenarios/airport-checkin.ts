// Lifestyle sample scenario — Daily Life track (travel).
// Pedagogical intent: handle an airport check-in when luggage is overweight.
// Trains A2 negotiation patterns: confirming the fee, asking to move items,
// requesting an aisle/window seat. High-stress, scripted enough to rehearse.

import type { Scene } from "../scenes";

export const airportCheckinScene: Scene = {
  id: "sample-lifestyle-airport-checkin",
  emoji: "🛫",
  title: "Airport check-in,\noverweight\nluggage",
  description:
    "Check in with overweight luggage. Confirm the fee, ask if you can move items, choose a seat. Stress-tested A2 travel survival.",
  durationMin: 7,
  mode: "travel",
  cefrLevel: "A2",
  skillId: "lifestyle.travel",
  lessonId: "sample-lifestyle-airport-checkin-lesson",
  isNew: true,
  progressLabel: "6 turns · A2",
};
