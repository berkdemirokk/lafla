// Lafla — Unified lessons registry.
// Aggregates per-skill lesson files into a single lookup table.

import { cafeLessons } from "./cafe-lesson";
import { restaurantLessons } from "./restaurant-lesson";
import { customLessons } from "./custom-lesson";
import { billLessons } from "./bill-lesson";
import { complaintLessons } from "./complaint-lesson";
import { tippingLessons } from "./tipping-lesson";
import type { BundledLesson } from "./cafe-lesson";

export const allLessons: ReadonlyArray<BundledLesson> = [
  ...cafeLessons,
  ...restaurantLessons,
  ...customLessons,
  ...billLessons,
  ...complaintLessons,
  ...tippingLessons,
];

export function getLesson(id: string): BundledLesson | undefined {
  return allLessons.find((l) => l.id === id);
}

// Re-export type for convenience
export type { BundledLesson };
