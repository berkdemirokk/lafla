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
// 2026-05-21 — CEFR Erosion. Son practice tarihi + son uygulanan decay
// miktarı (UI'da "geçen hafta -0.04" gösterimi için).
const K_LAST_PRACTICE_AT = "lafla.cefr.lastPracticeAt";
const K_RECENT_DECAY = "lafla.cefr.recentDecay";

// Sahne başına eklenen fractional ilerleme. 25 ortalama-skor sahne ≈ 1 level.
// Yüksek skor (≥75) tam pay, mid yarı, low ufak teselli.
const PROGRESS_HIGH = 0.04; // ≥75 puan
const PROGRESS_MID = 0.02; // 50-74
const PROGRESS_LOW = 0.005; // <50 — sadece görünür olsun, neredeyse 0

// Erosion parametreleri — yetişkin loss-aversion (Duolingo hearts'tan
// daha mature; Türk YDS audience CEFR'i anladığı için psikoloji çalışır).
const DECAY_GRACE_DAYS = 3; // 3 gün muafiyet — kısa ara için ceza yok
const DECAY_PER_DAY = 0.02; // Sonra her gün -0.02 (saatte 0.0008, görünür)
const DECAY_CAP_PER_WEEK = 0.14; // Maks haftalık decay (7 × 0.02)

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
// 2026-05-25 (B-SCN-13) — AsyncStorage read-modify-write race koruması.
// İki sahne hızlıca tamamlanırsa (intro + first scene auto-advance) iki
// recordCefrProgress paralel çalışıyordu, biri diğerinin yazısını ezdi.
// Modül-içi single-flight kuyruk: ardışık çağrılar await'lenir.
let cefrWriteChain: Promise<unknown> = Promise.resolve();

export async function recordCefrProgress(
  score: number,
): Promise<CefrProgressDelta | null> {
  const job = cefrWriteChain.then(() => _recordCefrProgressInner(score));
  // Sonraki çağrı bizi bekleyecek; hata olsa bile zincir kırılmasın.
  cefrWriteChain = job.catch(() => undefined);
  return job;
}

async function _recordCefrProgressInner(
  score: number,
): Promise<CefrProgressDelta | null> {
  const fromLevel = await getCefrLevel();
  if (!fromLevel) return null;

  // 1) Erosion: practice yapıldığında önce decay'i uygula, sonra +delta.
  //    User gerçek durumda — son hafta ihmal varsa banner zaten görmüştü;
  //    şimdi bu sahne ile hem decay'i absorb hem yeni ilerleme alıyor.
  await applyDecayIfDue();

  // Önceki kesirli ilerleme (decay sonrası)
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
    // Practice tarihi güncelle — bir sonraki decay hesabının base'i.
    await AsyncStorage.setItem(K_LAST_PRACTICE_AT, new Date().toISOString());
    // Recent decay UI hint'ini sıfırla — practice yaptın, decay banner inmeli
    await AsyncStorage.removeItem(K_RECENT_DECAY).catch(() => {});
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

// ============================================================
// 2026-05-21 — CEFR Erosion (yetişkin loss-aversion)
// ============================================================

export interface DecayResult {
  /** Uygulanan decay miktarı (>=0). 0 ise grace period veya premium muaf. */
  decayApplied: number;
  /** Decay öncesi progress (0..1). */
  before: number;
  /** Decay sonrası progress (0..1). */
  after: number;
  /** Level düştü mü (rare — practice şüpheli kalmışsa). */
  levelDropped: boolean;
  /** Eğer level düştüyse yeni level. */
  newLevel: CefrLevel | null;
}

/**
 * Son practice'ten bu yana kaç gün geçti? null = hiç practice yok.
 */
async function getDaysSincePractice(): Promise<number | null> {
  try {
    const raw = await AsyncStorage.getItem(K_LAST_PRACTICE_AT);
    if (!raw) return null;
    const t = new Date(raw).getTime();
    if (Number.isNaN(t)) return null;
    return (Date.now() - t) / (24 * 3600 * 1000);
  } catch {
    return null;
  }
}

/**
 * Decay'i uygula — son practice'ten DECAY_GRACE_DAYS sonrası her
 * gün için DECAY_PER_DAY tutarında. Premium kullanıcıda no-op.
 *
 * Çağrı yerleri:
 *   1. recordCefrProgress() — practice'ten ÖNCE
 *   2. Home state load — UI banner için (read-side; decay zaten kaydedildi)
 *
 * Idempotent: bir kere uygulandıktan sonra K_LAST_PRACTICE_AT ileri sarılır,
 * tekrar çağrılırsa muaf gün hesabı 0 döner.
 */
export async function applyDecayIfDue(): Promise<DecayResult> {
  const fromLevel = await getCefrLevel();
  if (!fromLevel) {
    return {
      decayApplied: 0,
      before: 0,
      after: 0,
      levelDropped: false,
      newLevel: null,
    };
  }

  // Premium muaf — Lafla Pro değer önerisi.
  // 2026-05-25 (B-SCN-5) — Önceki versiyon `.catch(() => false)` yapıyordu;
  // RC init henüz tamamlanmamışken (cold start race) premium kullanıcı
  // sahte "free" görüp decay yiyordu. Güvenli taraf: belirsizlikte decay
  // ATLA. Premium kullanıcıya yanlışlıkla ceza vermek istenmiyor.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const iap = require("./iap") as { isPremium: () => Promise<boolean> };
  let premium = false;
  let premiumDeterminate = true;
  try {
    premium = await iap.isPremium();
  } catch {
    premiumDeterminate = false; // belirsiz — bu turda decay'i atla
  }
  if (premium || !premiumDeterminate) {
    return {
      decayApplied: 0,
      before: 0,
      after: 0,
      levelDropped: false,
      newLevel: null,
    };
  }

  const days = await getDaysSincePractice();
  if (days === null || days <= DECAY_GRACE_DAYS) {
    return {
      decayApplied: 0,
      before: 0,
      after: 0,
      levelDropped: false,
      newLevel: null,
    };
  }

  // Mevcut progress
  let before = 0;
  try {
    const raw = await AsyncStorage.getItem(K_CEFR_PROGRESS);
    if (raw) {
      const n = parseFloat(raw);
      if (!Number.isNaN(n) && n >= 0 && n <= 1) before = n;
    }
  } catch {
    // ignore
  }

  // Decay miktarı — grace period sonrası gün × per-day, haftalık cap'le
  const decayDays = days - DECAY_GRACE_DAYS;
  const decayApplied = Math.min(decayDays * DECAY_PER_DAY, DECAY_CAP_PER_WEEK);

  let after = before - decayApplied;
  let levelDropped = false;
  let newLevel: CefrLevel | null = null;

  if (after < 0) {
    // Progress sıfırın altına düştü → bir alt seviyeye düş
    const prevLevel = adjustLevel(fromLevel, "down");
    if (prevLevel !== fromLevel) {
      newLevel = prevLevel;
      levelDropped = true;
      // Yeni seviyede progress 1 + after (negatif) = 1 - excess
      after = Math.max(0, 1 + after);
      await setCefrLevel(prevLevel);
    } else {
      // A1'deyiz, daha aşağı düşemez — 0'da clamp
      after = 0;
    }
  }

  // Kaydet
  try {
    await AsyncStorage.setItem(K_CEFR_PROGRESS, after.toFixed(4));
    // K_LAST_PRACTICE_AT ileri sar — bir sonraki decay base'i bugün
    await AsyncStorage.setItem(K_LAST_PRACTICE_AT, new Date().toISOString());
    // Recent decay UI hint — home banner'da gözükür
    await AsyncStorage.setItem(K_RECENT_DECAY, decayApplied.toFixed(4));
  } catch {
    // Best effort.
  }

  void trackEvent("cefr_decay_applied", {
    days_idle: days,
    decay: decayApplied,
    level_dropped: levelDropped,
    new_level: newLevel,
  }).catch(() => {});

  return { decayApplied, before, after, levelDropped, newLevel };
}

/**
 * Son decay miktarını oku — UI banner için. Premium kullanıcıda 0 döner.
 * Practice yapılınca temizlenir.
 */
export async function getRecentDecay(): Promise<number> {
  try {
    const raw = await AsyncStorage.getItem(K_RECENT_DECAY);
    if (!raw) return 0;
    const n = parseFloat(raw);
    return Number.isNaN(n) ? 0 : n;
  } catch {
    return 0;
  }
}

/**
 * Decay'i şu an uygula (home open'da çağrılır — banner için).
 * Premium muaf, grace period içindeyse 0 döner.
 */
export async function checkErosionForUi(): Promise<{
  decayAmount: number;
  daysIdle: number;
  newLevel: CefrLevel | null;
}> {
  const days = await getDaysSincePractice();
  const result = await applyDecayIfDue();
  const recentDecay = await getRecentDecay();
  return {
    decayAmount: recentDecay,
    daysIdle: days ?? 0,
    newLevel: result.newLevel,
  };
}

// ─── reset ──────────────────────────────────────────────────────────

/** Sıfırla. Account silme veya manuel reset için. */
export async function clearCefrProgress(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_CEFR_PROGRESS);
    await AsyncStorage.removeItem(K_LAST_PRACTICE_AT);
    await AsyncStorage.removeItem(K_RECENT_DECAY);
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
 * Edge: A1 sees A1, A2 only. C2 also sees B2/C1 as support because C2 is a
 * narrow mastery lane and should not make low-volume modes feel empty.
 */
export function getRelevantLevels(userLevel: CefrLevel): CefrLevel[] {
  if (userLevel === "C2") return ["B2", "C1", "C2"];
  const idx = CEFR_LEVELS.indexOf(userLevel);
  if (idx < 0) return [...CEFR_LEVELS];
  const lo = Math.max(0, idx - 1);
  const hi = Math.min(CEFR_LEVELS.length - 1, idx + 1);
  return CEFR_LEVELS.slice(lo, hi + 1);
}

/**
 * Levels safe for a daily success loop. Stretch content remains discoverable
 * in the scene feed, but the daily plan never surprises a learner with a
 * scene above their current level.
 */
export function getComfortLevels(userLevel: CefrLevel): CefrLevel[] {
  const idx = CEFR_LEVELS.indexOf(userLevel);
  if (idx <= 0) return ["A1"];
  if (userLevel === "C2") return ["B2", "C1", "C2"];
  return CEFR_LEVELS.slice(Math.max(0, idx - 1), idx + 1);
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

// ============================================================
// 2026-05-25 — Phase 5D adaptive setup filter
// ============================================================
//
// Lessons now ship up to 25 vocab tiles (pool cap), tagged with cefr_band
// (A1..C2). Pool size varies per lesson — older lessons may carry 12-15,
// retagged lessons up to 25. Cap enforced at slice(0, 25) in scenario.ts.
// Setup phase shows 12 — picked from the user's "comfort zone +1": one band
// below + own band + one band above (A1/C2 collapse to 2 bands). Untagged
// vocab is ALWAYS kept so partially-retagged lessons degrade gracefully
// (a user always sees content; the cefr filter just trims when it can).
//
// Edge handling:
//   - user level null (pre-onboarding)      → return first 12 untouched
//   - filtered pool < 8 (very narrow band)  → fall back to first 12 of raw
//     pool. Threshold 8 is the "feels thin" cutoff observed in dogfooding
//     a B2 user against an A1 lesson: <8 cards looks like a bug to the
//     user, even if technically correct.
//   - filtered pool ≥ 8                     → return first 12 of filtered

// Local type alias to avoid importing the full SetupPhrase shape — keeps
// this helper coupled only to the cefr_band field name.
interface CefrBandedPhrase {
  cefr_band?: CefrLevel;
}

/**
 * Verilen user CEFR level için uygun vocab band'larını döner.
 * Adaptive setup filtering için kullanılır.
 *
 * Mantık: bir seviye altı + kendi seviyesi + bir seviye üstü = "comfort zone +1"
 * - A1 → ["A1", "A2"]
 * - A2 → ["A1", "A2", "B1"]
 * - B1 → ["A2", "B1", "B2"]
 * - B2 → ["B1", "B2", "C1"]
 * - C1 → ["B2", "C1", "C2"]
 * - C2 → ["C1", "C2"]
 */
export function bandFor(userLevel: CefrLevel): CefrLevel[] {
  switch (userLevel) {
    case "A1":
      return ["A1", "A2"];
    case "A2":
      return ["A1", "A2", "B1"];
    case "B1":
      return ["A2", "B1", "B2"];
    case "B2":
      return ["B1", "B2", "C1"];
    case "C1":
      return ["B2", "C1", "C2"];
    case "C2":
      return ["B2", "C1", "C2"];
  }
}

/**
 * Setup vocab'ı user level'a göre sıralayıp üç hedef kalıpla sınırlar.
 *
 * Kurallar:
 *   - userLevel null (henüz seçilmemiş) → ilk 12 vocab (untouched)
 *   - userLevel var → önce tam seviye, sonra yakın band, sonra etiketsiz,
 *     en son kalan kelimeler gelir
 *   - Havuz dar olsa bile kullanıcı boş kurulum ekranına düşmez
 *
 * Untagged vocab her zaman dahil — partial retag durumunda lesson
 * gracefully çalışır (geniş pool'lu yeni lesson + dar pool'lu eski lesson
 * aynı kod path'ten geçer; pool cap 25 ama gerçek boyut lesson-bazlı).
 *
 * Generic <T extends CefrBandedPhrase> sayesinde SetupPhrase'i import
 * etmeden coupling minimum kalır; caller tip'i koruyarak geri alır.
 */
export function filterSetupByLevel<T extends CefrBandedPhrase>(
  setup: readonly T[],
  userLevel: CefrLevel | null,
): T[] {
  if (!userLevel) return setup.slice(0, 2);

  const acceptableBands = bandFor(userLevel);
  const exact = setup.filter((s) => s.cefr_band === userLevel);
  const nearby = setup.filter(
    (s) =>
      s.cefr_band &&
      s.cefr_band !== userLevel &&
      acceptableBands.includes(s.cefr_band),
  );
  const untagged = setup.filter((s) => !s.cefr_band);
  const remaining = setup.filter(
    (s) => s.cefr_band && !acceptableBands.includes(s.cefr_band),
  );

  return [...exact, ...nearby, ...untagged, ...remaining].slice(0, 2);
}
