// Cultural Intelligence — local state for which tips the user has marked read.
// AsyncStorage only; cultural tips are universal so no server sync needed.

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CULTURAL_TIPS,
  type CulturalAxis,
  type CulturalTip,
} from "../data/cultural-tips";

const K_READ = "lafla.cultural.read";

async function readSet(): Promise<Set<string>> {
  try {
    const raw = await AsyncStorage.getItem(K_READ);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

async function writeSet(set: Set<string>): Promise<void> {
  try {
    await AsyncStorage.setItem(K_READ, JSON.stringify([...set]));
  } catch {
    // swallow — local progress is best-effort
  }
}

export async function getReadTips(): Promise<string[]> {
  return [...(await readSet())];
}

export async function markTipRead(tipId: string): Promise<void> {
  const set = await readSet();
  if (set.has(tipId)) return;
  set.add(tipId);
  await writeSet(set);
}

export async function getCulturalProgress(): Promise<{
  totalTips: number;
  readCount: number;
  axesCovered: CulturalAxis[];
}> {
  const readIds = await readSet();
  const totalTips = CULTURAL_TIPS.length;
  const readCount = readIds.size;

  // Axes the user has touched at least one tip in
  const axesCoveredSet = new Set<CulturalAxis>();
  for (const tip of CULTURAL_TIPS) {
    if (readIds.has(tip.id)) {
      axesCoveredSet.add(tip.axis);
    }
  }

  return {
    totalTips,
    readCount,
    axesCovered: [...axesCoveredSet],
  };
}

// Helper: next unread tip, optionally constrained to an axis or starting after a given id.
export function findNextUnreadTip(
  readIds: Set<string>,
  options?: { axis?: CulturalAxis; afterId?: string },
): CulturalTip | undefined {
  const pool = options?.axis
    ? CULTURAL_TIPS.filter((t) => t.axis === options.axis)
    : CULTURAL_TIPS;

  if (options?.afterId) {
    const idx = pool.findIndex((t) => t.id === options.afterId);
    if (idx >= 0) {
      // Search forward from after the given id, then wrap.
      const after = pool.slice(idx + 1).find((t) => !readIds.has(t.id));
      if (after) return after;
      return pool.slice(0, idx).find((t) => !readIds.has(t.id));
    }
  }

  return pool.find((t) => !readIds.has(t.id));
}
