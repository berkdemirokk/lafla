// Lafla — Mission Pack state management.
//
// A "mission" is an in-flight Mission Pack: started, items being checked off,
// counting down to its expected end. Storage is AsyncStorage only — no server
// round-trip — so the sprint is fully offline and consistent across launches.
//
// Only ONE mission can be active at a time. Starting a new one while another
// is in flight overwrites — callers should confirm with the user first.
//
// This is independent of `lib/programs.ts`: a mission may run in parallel to
// the active program (and contributes to the same lessons / scenes complete
// callbacks downstream — the mission layer just tracks which mission items
// the user has personally ticked).

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getMissionPack,
  type MissionPack,
  type MissionPackId,
} from "../data/mission-packs";

const K_ACTIVE = "lafla.mission.active";

// Day length in ms — extracted as a constant so tests can stub it if needed.
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// ============================================================
// TYPES
// ============================================================

export interface ActiveMissionState {
  packId: MissionPackId;
  startedAt: string; // ISO
  expectedEndAt: string; // ISO
  completedItems: string[]; // item IDs
  pausedAt?: string; // ISO if paused
}

export interface MissionProgress {
  done: number;
  total: number;
  daysLeft: number;
}

// ============================================================
// STORAGE
// ============================================================

async function readActive(): Promise<ActiveMissionState | null> {
  try {
    const raw = await AsyncStorage.getItem(K_ACTIVE);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ActiveMissionState>;
    if (!parsed || typeof parsed !== "object") return null;
    if (typeof parsed.packId !== "string") return null;
    if (typeof parsed.startedAt !== "string") return null;
    if (typeof parsed.expectedEndAt !== "string") return null;
    return {
      packId: parsed.packId,
      startedAt: parsed.startedAt,
      expectedEndAt: parsed.expectedEndAt,
      completedItems: Array.isArray(parsed.completedItems)
        ? parsed.completedItems.filter((id): id is string => typeof id === "string")
        : [],
      pausedAt: typeof parsed.pausedAt === "string" ? parsed.pausedAt : undefined,
    };
  } catch {
    return null;
  }
}

async function writeActive(state: ActiveMissionState | null): Promise<void> {
  try {
    if (state === null) {
      await AsyncStorage.removeItem(K_ACTIVE);
    } else {
      await AsyncStorage.setItem(K_ACTIVE, JSON.stringify(state));
    }
  } catch {
    // ignore — storage failures shouldn't crash the UI
  }
}

// ============================================================
// PUBLIC API
// ============================================================

export async function getActiveMission(): Promise<ActiveMissionState | null> {
  return readActive();
}

/**
 * Start a mission pack. Overwrites any in-flight mission — UI should confirm
 * before calling if another mission is active.
 */
export async function startMission(packId: MissionPackId): Promise<void> {
  const pack = getMissionPack(packId);
  if (!pack) return;
  const now = new Date();
  const end = new Date(now.getTime() + pack.durationDays * ONE_DAY_MS);
  const state: ActiveMissionState = {
    packId,
    startedAt: now.toISOString(),
    expectedEndAt: end.toISOString(),
    completedItems: [],
  };
  await writeActive(state);
}

/** Tick off a mission item. No-op if no active mission or item already done. */
export async function markItemComplete(itemId: string): Promise<void> {
  const state = await readActive();
  if (!state) return;
  if (state.completedItems.includes(itemId)) return;
  state.completedItems = [...state.completedItems, itemId];
  await writeActive(state);
}

/** Clear the active mission (user abandoned, or pack finished). */
export async function endMission(): Promise<void> {
  await writeActive(null);
}

/** Pause the current mission. Pause halts the days-left countdown in UI copy. */
export async function pauseMission(): Promise<void> {
  const state = await readActive();
  if (!state) return;
  state.pausedAt = new Date().toISOString();
  await writeActive(state);
}

/** Resume a paused mission, extending expectedEndAt by the pause duration. */
export async function resumeMission(): Promise<void> {
  const state = await readActive();
  if (!state || !state.pausedAt) return;
  const pausedMs = Date.now() - new Date(state.pausedAt).getTime();
  if (pausedMs > 0) {
    const newEnd = new Date(
      new Date(state.expectedEndAt).getTime() + pausedMs,
    );
    state.expectedEndAt = newEnd.toISOString();
  }
  delete state.pausedAt;
  await writeActive(state);
}

/**
 * Progress snapshot for the active mission. Returns 0/0/0 if no mission is
 * running — UI should check `getActiveMission()` first when that matters.
 */
export async function getMissionProgress(): Promise<MissionProgress> {
  const state = await readActive();
  if (!state) return { done: 0, total: 0, daysLeft: 0 };
  const pack = getMissionPack(state.packId);
  if (!pack) return { done: 0, total: 0, daysLeft: 0 };

  const total = pack.items.length;
  const completedSet = new Set(state.completedItems);
  const done = pack.items.filter((it) => completedSet.has(it.id)).length;

  // If paused, freeze the countdown at the value when pause started.
  const referenceNow = state.pausedAt
    ? new Date(state.pausedAt).getTime()
    : Date.now();
  const endMs = new Date(state.expectedEndAt).getTime();
  const remainingMs = endMs - referenceNow;
  const daysLeft = Math.max(0, Math.ceil(remainingMs / ONE_DAY_MS));

  return { done, total, daysLeft };
}

/**
 * Convenience for the runner screen — resolve the pack alongside the state in
 * one call so the UI doesn't have to fetch both separately.
 */
export async function getActiveMissionWithPack(): Promise<
  { state: ActiveMissionState; pack: MissionPack } | null
> {
  const state = await readActive();
  if (!state) return null;
  const pack = getMissionPack(state.packId);
  if (!pack) return null;
  return { state, pack };
}

/** Has the user completed every required item in this pack? */
export function isMissionRequiredComplete(
  pack: MissionPack,
  completedItems: ReadonlyArray<string>,
): boolean {
  const completedSet = new Set(completedItems);
  const required = pack.items.filter((it) => it.required);
  if (required.length === 0) return false;
  return required.every((it) => completedSet.has(it.id));
}
