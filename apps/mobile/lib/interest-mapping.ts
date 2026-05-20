// Lafla — Interest → SceneMode mapping.
//
// Onboarding asks the user to pick at least 2 chips out of 6 user-facing
// modes (post-2026-05-20 radical cut). Each chip maps 1:1 to a SceneMode —
// no more fan-out (career/professional already merged into "work", personal
// merged into "daily", banter merged into "bar"/deleted, travel deleted
// except airport which is its own mode now).
//
// Adding a new chip: append the InterestId union AND the table — the
// Record<InterestId, …> type forces exhaustiveness so the compiler will flag
// a missing row.

import type { SceneMode } from "../data/scenes";

export type InterestId =
  | "flirt"
  | "work"
  | "bar"
  | "airport"
  | "daily"
  | "order";

export const INTEREST_TO_MODES: Record<InterestId, SceneMode[]> = {
  flirt:   ["flirt"],
  work:    ["work"],
  bar:     ["bar"],
  airport: ["airport"],
  daily:   ["daily"],
  order:   ["order"],
};

/**
 * Project a list of stored interest chip ids onto the SceneMode space.
 * Unknown ids are silently ignored (forward-compat — older devices may
 * have stale chips we no longer ship). Returns deduped modes.
 */
export function interestsToModes(interests: string[]): SceneMode[] {
  const set = new Set<SceneMode>();
  for (const id of interests) {
    const modes = INTEREST_TO_MODES[id as InterestId];
    if (modes) modes.forEach((m) => set.add(m));
  }
  return Array.from(set);
}
