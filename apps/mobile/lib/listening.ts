// Lafla — Listening mode local progress.
// Tracks completed audio dramas + per-drama best score, AsyncStorage only.

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_LISTENING = "lafla.listening.completed";

/**
 * On-disk shape:
 *   { [dramaId]: { score: 0..100, completedAt: ISO } }
 * Older versions wrote a plain string[] of ids; readers tolerate both.
 */
type CompletedMap = Record<string, { score: number; completedAt: string }>;

async function readMap(): Promise<CompletedMap> {
  try {
    const raw = await AsyncStorage.getItem(K_LISTENING);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    // Legacy: string[] of ids
    if (Array.isArray(parsed)) {
      const map: CompletedMap = {};
      for (const id of parsed as string[]) {
        if (typeof id === "string") {
          map[id] = { score: 0, completedAt: new Date(0).toISOString() };
        }
      }
      return map;
    }
    if (parsed && typeof parsed === "object") {
      return parsed as CompletedMap;
    }
    return {};
  } catch {
    return {};
  }
}

async function writeMap(map: CompletedMap) {
  try {
    await AsyncStorage.setItem(K_LISTENING, JSON.stringify(map));
  } catch {
    // ignore
  }
}

/** All drama ids the user has finished at least once. */
export async function getCompletedListenings(): Promise<string[]> {
  const map = await readMap();
  return Object.keys(map);
}

/** Mark a drama complete; keeps the best score across runs. */
export async function markListeningComplete(
  id: string,
  score: number,
): Promise<void> {
  if (!id) return;
  const safeScore = Math.max(0, Math.min(100, Math.round(score)));
  const map = await readMap();
  const prev = map[id];
  const next = {
    score: prev ? Math.max(prev.score, safeScore) : safeScore,
    completedAt: new Date().toISOString(),
  };
  map[id] = next;
  await writeMap(map);
}

/**
 * Aggregate progress.
 * `total` is provided by the caller via `getListeningProgress(totalCount)` if
 * known; otherwise it defaults to the number of completed entries (best we
 * can do here since the dramas catalog lives in /data).
 */
export async function getListeningProgress(
  total?: number,
): Promise<{ completed: number; total: number; avgScore: number }> {
  const map = await readMap();
  const entries = Object.values(map);
  const completed = entries.length;
  const avgScore = completed
    ? Math.round(entries.reduce((s, e) => s + e.score, 0) / completed)
    : 0;
  return {
    completed,
    total: typeof total === "number" && total > 0 ? total : completed,
    avgScore,
  };
}

/** Per-drama best score (0 if not played). */
export async function getListeningScore(id: string): Promise<number> {
  const map = await readMap();
  return map[id]?.score ?? 0;
}
