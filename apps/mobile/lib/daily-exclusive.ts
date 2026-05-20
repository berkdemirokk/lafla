// Lafla — Daily exclusive scene (Adım 3, 2026-05-20).
//
// Hedef: kullanıcı günlük tetiklenmek için bir "fresh content" sinyali
// alsın. Spotify "Daily Mix" gibi — her gün açtığında ekranın tepesinde
// yeni damgalı bir sahne. 24h sonra normal feed'e karışır.
//
// Algorithm:
//   1. Kullanıcının interests + CEFR ± 1 filter cascade'inden geçen
//      playable sahnelerin listesi (home feed ile aynı pool).
//   2. (userIdProxy, dayOfYear) → seeded hash → tek seçim.
//      "Aynı kullanıcı, aynı gün → aynı sahne" deterministik.
//   3. Sonuç AsyncStorage'da cache'lenir: `lafla.daily.YYYYMMDD = lessonId`.
//   4. Ertesi gün yeni day-key, eski silinir.
//
// Latency: ~5ms (memory'de scenes filter + bir hash). Network yok.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { getScenario } from "./scenario";
import type { CefrLevel } from "./cefr-level";
import { getRelevantLevels } from "./cefr-level";

const K_DAILY_PREFIX = "lafla.daily.";
const K_USER_SEED = "lafla.daily.userSeed"; // stable random per install

function ymd(d = new Date()): string {
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
}

async function getUserSeed(): Promise<number> {
  try {
    const stored = await AsyncStorage.getItem(K_USER_SEED);
    if (stored) {
      const n = parseInt(stored, 10);
      if (!Number.isNaN(n)) return n;
    }
  } catch {
    // ignore
  }
  // Sıfırdan generate et — 31-bit positive int
  const seed = Math.floor(Math.random() * 2147483647);
  try {
    await AsyncStorage.setItem(K_USER_SEED, String(seed));
  } catch {
    // ignore
  }
  return seed;
}

function hashString(input: string, seed: number): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  h ^= seed;
  h = Math.imul(h, 16777619) >>> 0;
  return h >>> 0;
}

/**
 * Pick today's daily exclusive scene for the user. Idempotent within a
 * calendar day — repeat calls return the same scene. Returns null when
 * the user's filter cascade has no playable scenes (very rare; first
 * launch with no interests + non-tagged scenes).
 */
export async function getDailyExclusive(opts: {
  cefrLevel: CefrLevel | null;
  interestModes: string[] | null;
}): Promise<Scene | null> {
  const dayKey = ymd();
  const cacheKey = `${K_DAILY_PREFIX}${dayKey}`;

  // Cache hit
  try {
    const cached = await AsyncStorage.getItem(cacheKey);
    if (cached) {
      const scene = SAMPLE_SCENES.find((s) => s.lessonId === cached);
      if (scene) return scene;
      // Cached id no longer valid (content drift). Fall through to recompute.
    }
  } catch {
    // ignore
  }

  // Filter to playable + CEFR + interests
  const playable = SAMPLE_SCENES.filter(
    (s) => getScenario(s.lessonId) !== null,
  );

  let pool = playable;
  if (opts.interestModes && opts.interestModes.length > 0) {
    const set = new Set(opts.interestModes);
    const filtered = pool.filter((s) => set.has(s.mode));
    if (filtered.length > 0) pool = filtered;
  }
  if (opts.cefrLevel) {
    const allowed = new Set(getRelevantLevels(opts.cefrLevel));
    const filtered = pool.filter(
      (s) => !s.cefrLevel || allowed.has(s.cefrLevel),
    );
    if (filtered.length > 0) pool = filtered;
  }

  if (pool.length === 0) return null;

  // Seeded pick
  const userSeed = await getUserSeed();
  const seed = parseInt(dayKey, 10) + userSeed;
  let bestIdx = 0;
  let bestHash = -1;
  for (let i = 0; i < pool.length; i++) {
    const h = hashString(pool[i]!.id, seed);
    if (h > bestHash) {
      bestHash = h;
      bestIdx = i;
    }
  }
  const pick = pool[bestIdx]!;

  // Cache + cleanup yesterday's
  try {
    await AsyncStorage.setItem(cacheKey, pick.lessonId);
    // GC: delete previous-day key (best effort, AsyncStorage doesn't
    // support prefix scan natively; we just nuke the obvious one).
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    await AsyncStorage.removeItem(`${K_DAILY_PREFIX}${ymd(yesterday)}`);
  } catch {
    // ignore
  }

  return pick;
}

/**
 * Has the user already completed today's daily exclusive? Returns the
 * lessonId if completed, null otherwise. Drives the "✓ Tamamlandı"
 * indicator on the banner.
 */
export async function isDailyExclusiveCompleted(
  completedLessonIds: Set<string>,
): Promise<string | null> {
  const cacheKey = `${K_DAILY_PREFIX}${ymd()}`;
  try {
    const cached = await AsyncStorage.getItem(cacheKey);
    if (cached && completedLessonIds.has(cached)) return cached;
    return null;
  } catch {
    return null;
  }
}
