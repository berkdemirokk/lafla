// Lafla — Interest → SceneMode mapping.
//
// Onboarding asks the user to pick at least 2 chips out of 8 high-level
// interest tags (`dating`, `work`, `travel`, `social`, `ordering`, `humor`,
// `sports`, `health`). Each chip fans out to one or more of the granular
// SceneMode values used by the scene catalog. The home feed and the profile
// dashboard both call `interestsToModes()` to derive the visible mode set
// without each screen redeclaring the table.
//
// Adding a new chip: append the InterestId union AND the table — the
// Record<InterestId, …> type forces exhaustiveness so the compiler will flag
// a missing row.

import type { SceneMode } from "../data/scenes";

export type InterestId =
  | "dating"
  | "work"
  | "travel"
  | "social"
  | "ordering"
  | "humor"
  | "sports"
  | "health";

export const INTEREST_TO_MODES: Record<InterestId, SceneMode[]> = {
  dating: ["flirt"],
  // "work" fans out to the three professional registers — career and
  // professional sit beside the canonical "work" mode in scenes.ts so we
  // pull all three under one user-facing chip.
  work: ["work", "career", "professional"],
  travel: ["travel"],
  // Social chip = everyday/personal — both modes share the same vibe and
  // either tag can appear on the same scene depending on author.
  social: ["daily", "personal"],
  ordering: ["order"],
  humor: ["banter"],
  sports: ["sport"],
  health: ["health"],
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
