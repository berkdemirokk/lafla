import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  resolveRoleplayMode,
  type RoleplayMode,
} from "./roleplay-progression";

const KEY_PREFIX = "lafla.roleplay.mastery.v2.";

export interface RoleplayMasteryState {
  attempts: number;
  consecutiveGoalMet: number;
}

const EMPTY: RoleplayMasteryState = { attempts: 0, consecutiveGoalMet: 0 };

export function advanceRoleplayMastery(
  state: RoleplayMasteryState,
  goalMet: boolean,
): RoleplayMasteryState {
  return {
    attempts: state.attempts + 1,
    consecutiveGoalMet: goalMet ? state.consecutiveGoalMet + 1 : 0,
  };
}

function parseState(raw: string | null): RoleplayMasteryState {
  if (!raw) return EMPTY;
  try {
    const parsed = JSON.parse(raw) as Partial<RoleplayMasteryState>;
    if (
      typeof parsed.attempts !== "number" ||
      typeof parsed.consecutiveGoalMet !== "number"
    ) {
      return EMPTY;
    }
    return {
      attempts: Math.max(0, Math.floor(parsed.attempts)),
      consecutiveGoalMet: Math.max(
        0,
        Math.floor(parsed.consecutiveGoalMet),
      ),
    };
  } catch {
    return EMPTY;
  }
}

export async function getRoleplayMode(scenarioId: string): Promise<RoleplayMode> {
  const state = parseState(
    await AsyncStorage.getItem(`${KEY_PREFIX}${scenarioId}`).catch(() => null),
  );
  return resolveRoleplayMode({
    total_attempts: state.attempts,
    consecutive_correct: state.consecutiveGoalMet,
  });
}

export async function recordRoleplayMastery(
  scenarioId: string,
  score: number,
): Promise<void> {
  const key = `${KEY_PREFIX}${scenarioId}`;
  const current = parseState(await AsyncStorage.getItem(key).catch(() => null));
  const next = advanceRoleplayMastery(current, score >= 80);
  await AsyncStorage.setItem(key, JSON.stringify(next)).catch(() => {});
}
