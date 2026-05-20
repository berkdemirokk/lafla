// Lafla — CEFR level management.
// Adult English coaching pivot: users self-select A1–C2 or take an
// adaptive placement test. Level filters scene visibility and tunes
// difficulty in lessons. No runtime LLM — pure local state.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { trackEvent } from "./analytics";

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

// 2026-05-20 — switch-trigger #3: fractional CEFR progress (0.0..1.0)
// Verdict ekranındaki "B1+0.32 → B1+0.36" animasyonunu beslemek için.
// Türk öğrencisinin YDS/IELTS dünyasından geldiği için CEFR'i sayısal +
// ölçülebilir göstermek = anladığı dilde feedback.
const K_CEFR_PROGRESS = "lafla.cefr.progress";

// Sahne başına eklenen fractional ilerleme. 25 ortalama-skor sahne ≈ 1 level.
// Yüksek skor (≥75) tam pay, mid yarı, low ufak teselli.
const PROGRESS_HIGH = 0.04; // ≥75 puan
const PROGRESS_MID = 0.02; // 50-74
const PROGRESS_LOW = 0.005; // <50 — sadece görünür olsun, neredeyse 0

export interface CefrProgressDelta {
  /** Önceki kesirli ilerleme (0..1). */
  before: number;
  /** Yeni kesirli ilerleme (0..1). Level bump olduysa 0'a düşer ve `bumped` true olur. */
  after: number;
  /** Eklenen delta — animasyon hız hesabında kullanılır. */
  delta: number;
  /** Önceki level. */
  fromLevel: CefrLevel;
  /** Yeni level (bumped olduysa farklı). */
  toLevel: CefrLevel;
  /** Bir üst seviyeye çıkmak için gereken sahne sayısı (high band varsayımı). */
  scenesToNext: number;
  /** Bu sahnede level atladıysa true. */
  bumped: boolean;
}

/**
 * Sahne sonunda çağrılır. Skoru fractional progress'e ekler, gerekirse
 * level bump yapar. Verdict ekranı bu objeyi tüketip "B1+0.32 → B1+0.36"
 * animasyonu + "B2'ye N sahne kaldı" mikro mesajını renderlamak için
 * kullanır.
 *
 * No-op (`null` döner) sadece kullanıcı henüz CEFR seçmediyse — bu durum
 * adım 4 (onboarding cefr step) atlandığında oluşur ki bu olmamalı.
 */
export async function recordCefrProgress(
  score: number,
): Promise<CefrProgressDelta | null> {
  const fromLevel = await getCefrLevel();
  if (!fromLevel) return null;

  // Önceki kesirli ilerleme
  let before = 0;
  try {
    const raw = await AsyncStorage.getItem(K_CEFR_PROGRESS);
    if (raw) {
      const n = parseFloat(raw);
      if (!Number.isNaN(n) && n >= 0 && n <= 1) before = n;
    }
  } catch {
    // Best effort.
  }

  const delta =
    score >= 75 ? PROGRESS_HIGH : score >= 50 ? PROGRESS_MID : PROGRESS_LOW;
  const rawAfter = before + delta;

  let after = rawAfter;
  let toLevel = fromLevel;
  let bumped = false;

  if (rawAfter >= 1) {
    const next = getStretchLevel(fromLevel);
    if (next) {
      toLevel = next;
      after = rawAfter - 1; // taşan kadar yeni level'a aktarılır
      bumped = true;
      // Yeni level set + certificate award (cert side-effect swallowed)
      await setCefrLevel(next);
      await onLevelAdvanced(next).catch(() => {});
    } else {
      // C2 — daha yukarısı yok. Progress 1'de tutulur.
      after = 1;
    }
  }

  try {
    await AsyncStorage.setItem(K_CEFR_PROGRESS, after.toFixed(4));
  } catch {
    // Best effort.
  }

  const scenesToNext = Math.max(
    1,
    Math.ceil((1 - after) / PROGRESS_HIGH),
  );

  return {
    before,
    after,
    delta,
    fromLevel,
    toLevel,
    scenesToNext,
    bumped,
  };
}

/** Sıfırla. Account silme veya manuel reset için. */
export async function clearCefrProgress(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_CEFR_PROGRESS);
  } catch {
    // ignore
  }
}

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
  void trackEvent("level_set", { level }).catch(() => {});
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

/**
 * Auto-award hook — call this whenever the user's CEFR level advances
 * (e.g. after the placement test completes, or after the heuristic in
 * metrics.ts bumps them up a band). It mints a certificate via
 * lib/certificate.ts → awardCertificate. Idempotent at the level grain:
 * if a certificate already exists for `newLevel`, this is a no-op so we
 * don't spam the gallery with re-takes.
 *
 * Wave 3 integration plan:
 *   - placement-test.tsx → onComplete: await onLevelAdvanced(detectedLevel)
 *   - settings.tsx       → "Manually set level" → after setCefrLevel(newLevel)
 *     call onLevelAdvanced(newLevel) to retro-award.
 *
 * Errors are swallowed — certificate award must NEVER block the level-up flow.
 */
export async function onLevelAdvanced(newLevel: CefrLevel): Promise<void> {
  try {
    // Dynamic require avoids a circular import (certificate.ts -> metrics.ts
    // -> cefr-level.ts) and keeps the dependency one-way at module load time.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const cert = require("./certificate") as {
      hasCertificateForLevel: (
        l: CefrLevel,
      ) => Promise<boolean>;
      awardCertificate: (l: CefrLevel) => Promise<unknown>;
    };
    const already = await cert.hasCertificateForLevel(newLevel);
    if (already) return;
    await cert.awardCertificate(newLevel);
  } catch {
    // Never block the level-up path — certificate award is best-effort.
  }
}
