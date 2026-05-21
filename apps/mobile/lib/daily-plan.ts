// Lafla — Daily Plan (30 dk session loop).
//
// 2026-05-21 — Engagement loop. Kullanıcı "1 sahne yapıp çıkıyor" pattern'ından
// "5-7 sahne back-to-back oynuyor" pattern'ına çekilir. Talkpal/Speak gibi
// rakiplerin "30 dk session" tutturma hedefine karşılık.
//
// Mekanik:
//   1. Home'da girince: "Bugünün Planı: N sahne · X dk" banner
//   2. Banner → ilk scenario açar + session queue cache'lenir
//   3. Verdict ekranı: queue varsa "Sıradaki sahne 3s" countdown
//   4. Otomatik scenario değişimi (manuel "atla" mümkün)
//   5. Queue bitince "Bugünkü plan tamamlandı 🎉" özet
//
// Plan composition:
//   - 5 sahne (CEFR ±1 + ilgi alanı filtreli, completed olmayanlar)
//   - Skill çeşitliliği için aynı skill'den max 2 sahne
//   - Deterministic per (user, day) — aynı gün açtıkça aynı plan
//   - Yarına yeni plan (Date.toDateString seed)

import AsyncStorage from "@react-native-async-storage/async-storage";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { getScenario } from "./scenario";
import {
  getCefrLevel,
  getRelevantLevels,
  type CefrLevel,
} from "./cefr-level";
import { getInterests, getCompletedLessonIds } from "./local-progress";
import { interestsToModes } from "./interest-mapping";

const K_PLAN = "lafla.dailyPlan";
const K_PLAN_PROGRESS = "lafla.dailyPlan.progress";

/** Plan boyutu — 5 sahne × ~4 dk = ~20 dk + araya vocab tekrar ile 28-30 dk. */
const PLAN_SIZE = 5;

interface StoredPlan {
  /** Plan üretim tarihi (toDateString). */
  date: string;
  /** Plan içindeki lessonId sırası. */
  lessonIds: string[];
}

interface PlanProgress {
  /** Plan tarih hash'i — yarın değişince progress sıfırlanır. */
  date: string;
  /** Tamamlanan sahne sayısı (0..PLAN_SIZE). */
  completedCount: number;
  /** Son ne zaman bir sahne tamamlandı. */
  lastCompletedAt: string;
}

function todayKey(): string {
  return new Date().toDateString();
}

/**
 * FNV-1a — deterministic shuffle seed (per-day per-user).
 * Username yok ise sadece date seed.
 */
function hashString(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/**
 * Plan'ı al ya da oluştur. Plan tarihi eskidiyse yeni üretir.
 *
 * Filter cascade (home.tsx filterByCefr/Interests'a paralel):
 *   1. Playable (getScenario(lessonId) !== null)
 *   2. Tamamlanmamış (completedIds dışı)
 *   3. CEFR ±1 (user level varsa)
 *   4. İlgi alanı (interests varsa)
 *   5. Skill diversity (aynı skill_id max 2)
 *
 * Fallback: filtreler MIN_FEED altına düşürürse CEFR'i bırak, interest'i bırak.
 */
export async function getOrCreateDailyPlan(): Promise<Scene[]> {
  const today = todayKey();

  // 1. Mevcut plan bugünün mi?
  try {
    const raw = await AsyncStorage.getItem(K_PLAN);
    if (raw) {
      const stored = JSON.parse(raw) as StoredPlan;
      if (stored.date === today) {
        const scenes = stored.lessonIds
          .map((id) => SAMPLE_SCENES.find((s) => s.lessonId === id))
          .filter((s): s is Scene => !!s);
        if (scenes.length >= 3) return scenes;
        // Hasarlı plan — yeniden üret
      }
    }
  } catch {
    // ignore
  }

  // 2. Üretim
  const [cefr, interests, completed] = await Promise.all([
    getCefrLevel(),
    getInterests(),
    getCompletedLessonIds(),
  ]);

  const interestModes =
    interests.length > 0 ? interestsToModes(interests) : null;
  const relevantLevels = cefr ? new Set(getRelevantLevels(cefr)) : null;

  // Playable + uncompleted
  let pool = SAMPLE_SCENES.filter((s) => {
    if (completed.has(s.lessonId)) return false;
    if (!getScenario(s.lessonId)) return false;
    return true;
  });

  // CEFR filter (untagged passes through — eskiden öyleydi, tagging bitti
  // ama defensive)
  if (relevantLevels) {
    const filtered = pool.filter(
      (s) => !s.cefrLevel || relevantLevels.has(s.cefrLevel),
    );
    if (filtered.length >= PLAN_SIZE) pool = filtered;
  }

  // Interest filter — varsa
  if (interestModes && interestModes.length > 0) {
    const set = new Set(interestModes);
    const filtered = pool.filter((s) => set.has(s.mode));
    if (filtered.length >= PLAN_SIZE) pool = filtered;
  }

  // Deterministic shuffle by today's seed
  const seed = hashString(today);
  pool = pool
    .map((s) => ({ s, k: hashString(s.id + ":" + seed.toString(16)) }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.s);

  // Skill diversity — same skill_id max 2
  const skillCount: Record<string, number> = {};
  const picked: Scene[] = [];
  for (const s of pool) {
    if (picked.length >= PLAN_SIZE) break;
    const c = skillCount[s.skillId] ?? 0;
    if (c >= 2) continue;
    skillCount[s.skillId] = c + 1;
    picked.push(s);
  }

  // Persist
  const plan: StoredPlan = {
    date: today,
    lessonIds: picked.map((s) => s.lessonId),
  };
  try {
    await AsyncStorage.setItem(K_PLAN, JSON.stringify(plan));
  } catch {
    // best effort
  }

  return picked;
}

/**
 * Plan progress — bugünkü plana ait tamamlanan sahne sayısı.
 * Yeni güne geçince sıfırlanır.
 */
export async function getPlanProgress(): Promise<{
  completed: number;
  total: number;
}> {
  const today = todayKey();
  let completed = 0;
  try {
    const raw = await AsyncStorage.getItem(K_PLAN_PROGRESS);
    if (raw) {
      const p = JSON.parse(raw) as PlanProgress;
      if (p.date === today) completed = p.completedCount;
    }
  } catch {
    // ignore
  }
  const planScenes = await getOrCreateDailyPlan();
  return { completed: Math.min(completed, planScenes.length), total: planScenes.length };
}

/**
 * Bir sahne tamamlandıktan sonra plan progress'i artır.
 * Idempotent değil — sahne 2 kere oynanırsa 2 kere artar. Caller verdict
 * sonu hook'una tek-shot bağlamalı.
 */
export async function incrementPlanProgress(): Promise<void> {
  const today = todayKey();
  let progress: PlanProgress = {
    date: today,
    completedCount: 0,
    lastCompletedAt: new Date().toISOString(),
  };
  try {
    const raw = await AsyncStorage.getItem(K_PLAN_PROGRESS);
    if (raw) {
      const p = JSON.parse(raw) as PlanProgress;
      if (p.date === today) progress = p;
    }
  } catch {
    // ignore
  }
  progress.completedCount = (progress.completedCount ?? 0) + 1;
  progress.lastCompletedAt = new Date().toISOString();
  try {
    await AsyncStorage.setItem(K_PLAN_PROGRESS, JSON.stringify(progress));
  } catch {
    // best effort
  }
}

/**
 * Plan'da verilen lessonId'nin sırada gelen bir sonraki lessonId'sini döndür.
 * Plan bitti veya lessonId planda yoksa null.
 *
 * Scenario verdict ekranı bunu çağırıp "Sıradaki sahne 3s" countdown'unu
 * tetikler.
 */
export async function getNextInPlan(
  currentLessonId: string,
): Promise<Scene | null> {
  const plan = await getOrCreateDailyPlan();
  const idx = plan.findIndex((s) => s.lessonId === currentLessonId);
  if (idx < 0 || idx >= plan.length - 1) return null;
  return plan[idx + 1] ?? null;
}

/**
 * UI helper — banner için. "5 sahne · 20 dk" gibi özet.
 */
export async function getPlanSummary(): Promise<{
  total: number;
  completed: number;
  estimatedMin: number;
  isComplete: boolean;
}> {
  const plan = await getOrCreateDailyPlan();
  const { completed } = await getPlanProgress();
  const total = plan.length;
  // Ortalama 4 dk/sahne (durationMin 5 ama ekstra UI/verdict overhead düş)
  const estimatedMin = Math.max(1, (total - completed) * 4);
  return {
    total,
    completed,
    estimatedMin,
    isComplete: completed >= total && total > 0,
  };
}
