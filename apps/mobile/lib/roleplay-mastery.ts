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

export async function getRoleplayMasteryState(
  scenarioId: string,
): Promise<RoleplayMasteryState> {
  return parseState(
    await AsyncStorage.getItem(`${KEY_PREFIX}${scenarioId}`).catch(() => null),
  );
}

const masteryWriteChains = new Map<string, Promise<unknown>>();

function serializeMasteryWrite<T>(
  scenarioId: string,
  work: () => Promise<T>,
): Promise<T> {
  const previous = masteryWriteChains.get(scenarioId) ?? Promise.resolve();
  const job = previous.then(work, work);
  const tail = job.catch(() => undefined);
  masteryWriteChains.set(scenarioId, tail);
  void tail.finally(() => {
    if (masteryWriteChains.get(scenarioId) === tail) {
      masteryWriteChains.delete(scenarioId);
    }
  });
  return job;
}

export async function getRoleplayMode(scenarioId: string): Promise<RoleplayMode> {
  const state = await getRoleplayMasteryState(scenarioId);
  return resolveRoleplayMode({
    total_attempts: state.attempts,
    consecutive_correct: state.consecutiveGoalMet,
  });
}

export async function recordRoleplayMastery(
  scenarioId: string,
  score: number,
): Promise<void> {
  return serializeMasteryWrite(scenarioId, async () => {
    const key = `${KEY_PREFIX}${scenarioId}`;
    // A failed read must abort this read-modify-write operation or it could
    // overwrite valid mastery with a fresh one-attempt state.
    const current = parseState(await AsyncStorage.getItem(key));
    const next = advanceRoleplayMastery(current, score >= 80);
    await AsyncStorage.setItem(key, JSON.stringify(next));
  });
}
