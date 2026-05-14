// Lafla — CEFR level management.
// Adult English coaching pivot: users self-select A1–C2 or take an
// adaptive placement test. Level filters scene visibility and tunes
// difficulty in lessons. No runtime LLM — pure local state.

import AsyncStorage from "@react-native-async-storage/async-storage";

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const CEFR_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export const CEFR_LEVEL_LABELS_TR: Record<
  CefrLevel,
  { label: string; desc: string }
> = {
  A1: {
    label: "A1 — Başlangıç",
    desc: "Hiç bilmiyorum, sıfırdan başlıyorum.",
  },
  A2: {
    label: "A2 — Temel",
    desc: "Birkaç kelime ve basit cümleleri anlıyorum.",
  },
  B1: {
    label: "B1 — Orta",
    desc: "Günlük konuları anlatabilirim, ama takıldığım yerler var.",
  },
  B2: {
    label: "B2 — Orta-üstü",
    desc: "İş ve sosyal hayatta rahatım, ama akıcılığı geliştirmek istiyorum.",
  },
  C1: {
    label: "C1 — İleri",
    desc: "Karmaşık konuları rahat tartışırım; nüansları cilalıyorum.",
  },
  C2: {
    label: "C2 — Ustalık",
    desc: "Neredeyse anadil seviyesi; ileri jargon ve idiomları kovalıyorum.",
  },
};

const K_CEFR_LEVEL = "lafla.cefr.level";

export async function getCefrLevel(): Promise<CefrLevel | null> {
  try {
    const raw = await AsyncStorage.getItem(K_CEFR_LEVEL);
    if (!raw) return null;
    if (isCefrLevel(raw)) return raw;
    return null;
  } catch {
    return null;
  }
}

export async function setCefrLevel(level: CefrLevel): Promise<void> {
  try {
    await AsyncStorage.setItem(K_CEFR_LEVEL, level);
  } catch {
    // ignore
  }
}

export async function clearCefrLevel(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_CEFR_LEVEL);
  } catch {
    // ignore
  }
}

function isCefrLevel(v: string): v is CefrLevel {
  return (CEFR_LEVELS as string[]).includes(v);
}

/**
 * Levels relevant for filtering scenes/lessons for a given user.
 * Rule: user level ± 1 (so B1 user sees A2, B1, B2).
 * Edge: A1 sees A1, A2 only. C2 sees C1, C2 only.
 */
export function getRelevantLevels(userLevel: CefrLevel): CefrLevel[] {
  const idx = CEFR_LEVELS.indexOf(userLevel);
  if (idx < 0) return [...CEFR_LEVELS];
  const lo = Math.max(0, idx - 1);
  const hi = Math.min(CEFR_LEVELS.length - 1, idx + 1);
  return CEFR_LEVELS.slice(lo, hi + 1);
}

/**
 * Stretch target — the next level up, for challenging content.
 * Returns null at C2 (no stretch).
 */
export function getStretchLevel(userLevel: CefrLevel): CefrLevel | null {
  const idx = CEFR_LEVELS.indexOf(userLevel);
  if (idx < 0 || idx >= CEFR_LEVELS.length - 1) return null;
  return CEFR_LEVELS[idx + 1];
}

/**
 * Helper for the placement test adaptive engine: step one level up
 * after a correct answer, one level down after a wrong one.
 */
export function adjustLevel(
  level: CefrLevel,
  direction: "up" | "down",
): CefrLevel {
  const idx = CEFR_LEVELS.indexOf(level);
  if (idx < 0) return level;
  if (direction === "up") {
    return CEFR_LEVELS[Math.min(CEFR_LEVELS.length - 1, idx + 1)];
  }
  return CEFR_LEVELS[Math.max(0, idx - 1)];
}
