// Lifestyle sample scenario — Daily Life track.
// Pedagogical intent: practice ordering coffee with substitutions (milk swaps, extra shots,
// "easy on the sugar"). Builds A2 confidence with polite request patterns: "Could I get...",
// "Can I have it with...", "Make it..." — the bread-and-butter of cafe survival English.

import type { Scene } from "../scenes";

export const cafeOrderScene: Scene = {
  id: "sample-lifestyle-cafe-order",
  emoji: "☕",
  title: "Café order +\nsubstitutions",
  description:
    "Order coffee with substitutions: oat milk, decaf, extra shot. Polite request patterns for everyday cafe interactions.",
  durationMin: 6,
  mode: "order",
  cefrLevel: "A2",
  skillId: "lifestyle.cafe",
  lessonId: "sample-lifestyle-cafe-order-lesson",
  isNew: true,
  progressLabel: "6 turns · A2",
};
