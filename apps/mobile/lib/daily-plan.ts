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
  getComfortLevels,
  type CefrLevel,
} from "./cefr-level";
import { getInterests, getCompletedLessonIds } from "./local-progress";
import { interestsToModes } from "./interest-mapping";
import { getSceneDisplayMinutes } from "./scene-duration";

const K_PLAN = "lafla.dailyPlan";
const K_PLAN_PROGRESS = "lafla.dailyPlan.progress";

/** Three independent 2–4 minute sessions; no long mandatory lesson chain. */
const PLAN_SIZE = 3;

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
  /**
   * 2026-05-25 (B-EDGE-15) — Idempotency için kullanılan lessonId listesi.
   * Aynı sahne 2 kez oynanırsa veya double-effect tetiklerse sadece bir kez
   * sayılsın. Sahne ID'leri (`scene-...`) yerine LESSON ID'leri tutulur
   * çünkü plan da lessonId üzerinden yönetiliyor.
   */
  completedLessonIds?: string[];
  /**
   * 2026-05-25 (B-EDGE-4) — Plan'ın kimliği. Plan yeniden üretildiğinde
   * (content silindi veya başka neden) progress eski plan'a ait olamaz.
   * lessonIds.join("|") hash'i — değişirse progress reset.
   */
  planSig?: string;
}

function planSigFrom(lessonIds: readonly string[]): string {
  return lessonIds.join("|");
}

function todayKey(): string {
  return new Date().toDateString();
}

function calibratedLevel(scene: Scene): CefrLevel | undefined {
  return getScenario(scene.lessonId)?.cefrLevel ?? scene.cefrLevel;
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
        if (scenes.length >= PLAN_SIZE) return scenes.slice(0, PLAN_SIZE);
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
  const relevantLevels = cefr ? new Set(getComfortLevels(cefr)) : null;

  // Playable + uncompleted
  const basePool = SAMPLE_SCENES.filter((s) => {
    if (completed.has(s.lessonId)) return false;
    if (!getScenario(s.lessonId)) return false;
    return true;
  });

  let pool = basePool;

  // Preserve the selected/interested area first. If that area has only a few
  // matching CEFR scenes, keep them as priority and fill the rest from the
  // same area instead of discarding the level signal entirely.
  let priorityPool: Scene[] | null = null;
  let interestPool = basePool;
  if (interestModes && interestModes.length > 0) {
    const set = new Set(interestModes);
    const filtered = basePool.filter((s) => set.has(s.mode));
    if (filtered.length >= PLAN_SIZE) interestPool = filtered;
  }

  if (relevantLevels) {
    const levelWithinInterest = interestPool.filter(
      (s) => {
        const level = calibratedLevel(s);
        return !level || relevantLevels.has(level);
      },
    );
    if (levelWithinInterest.length >= PLAN_SIZE) {
      pool = levelWithinInterest;
    } else if (levelWithinInterest.length > 0) {
      priorityPool = levelWithinInterest;
      pool = interestPool.length >= PLAN_SIZE ? interestPool : basePool;
    } else if (interestPool.length >= PLAN_SIZE) {
      pool = interestPool;
    } else {
      const levelOnly = basePool.filter(
        (s) => {
          const level = calibratedLevel(s);
          return !level || relevantLevels.has(level);
        },
      );
      pool = levelOnly.length >= PLAN_SIZE ? levelOnly : basePool;
    }
  } else {
    pool = interestPool;
  }

  // Deterministic shuffle by today's seed
  const seed = hashString(today);
  const shuffle = (list: readonly Scene[]): Scene[] =>
    list
      .map((s) => ({ s, k: hashString(s.id + ":" + seed.toString(16)) }))
      .sort((a, b) => a.k - b.k)
      .map((x) => x.s);

  if (priorityPool) {
    const priorityLessonIds = new Set(priorityPool.map((s) => s.lessonId));
    pool = [
      ...shuffle(priorityPool),
      ...shuffle(pool.filter((s) => !priorityLessonIds.has(s.lessonId))),
    ];
  } else {
    pool = shuffle(pool);
  }

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

  // 2026-05-25 (B-EDGE-7) — picked boş veya çok kısa olursa storage'a yazma.
  // Yarın user yeni içerikle plan üretebilsin; boş plan persist edilirse
  // ertesi gün de aynı boş plan rehydrate edilir (empty state loop).
  if (picked.length === 0) {
    return [];
  }
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
  const planScenes = await getOrCreateDailyPlan();
  const sig = planSigFrom(planScenes.map((s) => s.lessonId));
  let completed = 0;
  try {
    const raw = await AsyncStorage.getItem(K_PLAN_PROGRESS);
    if (raw) {
      const p = JSON.parse(raw) as PlanProgress;
      // 2026-05-25 (B-EDGE-4) — Plan yeniden üretildiyse (signature mismatch)
      // progress'i geçersiz say. Aksi halde yeni 5 sahnenin hepsi yapılmamış
      // ama "5/5 tamam" görünür.
      if (p.date === today && (!p.planSig || p.planSig === sig)) {
        completed = p.completedCount;
      }
    }
  } catch {
    // ignore
  }
  return { completed: Math.min(completed, planScenes.length), total: planScenes.length };
}

/**
 * Bir sahne tamamlandıktan sonra plan progress'i artır.
 *
 * 2026-05-25 (B-EDGE-15) — Şimdi IDEMPOTENT: aynı lessonId 2 kez gelirse 2.
 * çağrı no-op. Plan signature mismatch'inde progress reset.
 */
export async function incrementPlanProgress(lessonId?: string): Promise<void> {
  const today = todayKey();
  const planScenes = await getOrCreateDailyPlan();
  if (planScenes.length === 0) return;
  const planLessonIds = planScenes.map((s) => s.lessonId);
  if (lessonId && !planLessonIds.includes(lessonId)) {
    return;
  }
  const sig = planSigFrom(planLessonIds);
  let progress: PlanProgress = {
    date: today,
    completedCount: 0,
    completedLessonIds: [],
    planSig: sig,
    lastCompletedAt: new Date().toISOString(),
  };
  try {
    const raw = await AsyncStorage.getItem(K_PLAN_PROGRESS);
    if (raw) {
      const p = JSON.parse(raw) as PlanProgress;
      // Plan değişmediyse aynı progress objesini taşı.
      if (p.date === today && (!p.planSig || p.planSig === sig)) {
        progress = {
          date: today,
          completedCount: p.completedCount ?? 0,
          completedLessonIds: Array.isArray(p.completedLessonIds)
            ? p.completedLessonIds
            : [],
          planSig: sig,
          lastCompletedAt: p.lastCompletedAt ?? new Date().toISOString(),
        };
      }
    }
  } catch {
    // ignore
  }
  if (lessonId) {
    if (progress.completedLessonIds?.includes(lessonId)) {
      // Already counted — no-op.
      return;
    }
    progress.completedLessonIds = [
      ...(progress.completedLessonIds ?? []),
      lessonId,
    ];
  }
  progress.completedCount = Math.min(
    planScenes.length,
    (progress.completedCount ?? 0) + 1,
  );
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
  const remaining = total - completed;
  const estimatedMin =
    remaining === 0
      ? 0
      : plan
          .slice(completed)
          .reduce((sum, scene) => sum + getSceneDisplayMinutes(scene), 0);
  return {
    total,
    completed,
    estimatedMin,
    isComplete: completed >= total && total > 0,
  };
}
