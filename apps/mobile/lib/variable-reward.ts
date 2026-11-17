// Lafla — Variable reward "sürpriz kart" (Adım 4, 2026-05-20).
//
// Hedef: kullanıcı bir sahneyi tamamlayıp sıradakine bakarken bazen
// (rastgele 3-7 sahne sonra) "🎁 SÜRPRİZ" damgalı bir kart belirsin.
// Slot-machine etkisi — Skinner's box. Kullanıcı bilmiyor ne zaman
// geleceğini, geldiğinde küçük bir kazanç hissi yaşıyor.
//
// "Sürpriz" sahne, kullanıcının az tamamladığı moddan rastgele seçilir
// (yeni-hissi). Tamamlanınca normal XP + bir achievement tetikler ve
// counter sıfırlanır, yeni 3-7 threshold belirlenir.
//
// Bu LLM'siz, deterministic-but-feels-random — saf JavaScript Math.random.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { getScenario } from "./scenario";
import { trackEvent } from "./analytics";

const K_COUNTER = "lafla.surprise.counter";
const K_THRESHOLD = "lafla.surprise.threshold";
const K_LAST_SHOWN = "lafla.surprise.lastShown";
const K_PENDING_ID = "lafla.surprise.pending"; // hangi sahne current sürpriz

const MIN_INTERVAL = 3;
const MAX_INTERVAL = 7;

function pickThreshold(): number {
  return (
    MIN_INTERVAL +
    Math.floor(Math.random() * (MAX_INTERVAL - MIN_INTERVAL + 1))
  );
}

let rewardMutationChain: Promise<unknown> = Promise.resolve();

function serializeRewardMutation<T>(work: () => Promise<T>): Promise<T> {
  const job = rewardMutationChain.then(work, work);
  rewardMutationChain = job.catch(() => undefined);
  return job;
}

async function readPendingSurpriseId(): Promise<string | null> {
  return AsyncStorage.getItem(K_PENDING_ID);
}

/**
 * Read the current counter / threshold from storage. Initializes on
 * first call (default counter=0, threshold = random 3-7).
 */
async function readState(): Promise<{ counter: number; threshold: number }> {
  const [cRaw, tRaw] = await Promise.all([
    AsyncStorage.getItem(K_COUNTER),
    AsyncStorage.getItem(K_THRESHOLD),
  ]);
  const parsedCounter = cRaw ? Number(cRaw) : 0;
  const counter =
    Number.isSafeInteger(parsedCounter) && parsedCounter >= 0 ? parsedCounter : 0;
  const parsedThreshold = tRaw ? Number(tRaw) : NaN;
  let threshold = parsedThreshold;
  if (
    !Number.isSafeInteger(threshold) ||
    threshold < MIN_INTERVAL ||
    threshold > MAX_INTERVAL
  ) {
    threshold = pickThreshold();
    await AsyncStorage.setItem(K_THRESHOLD, String(threshold));
  }
  return { counter, threshold };
}

/**
 * Called after each scenario completion. Increments the counter and
 * returns whether a surprise has been triggered (counter >= threshold).
 * Idempotent within a session — if the surprise is already pending,
 * this just returns true without re-bumping.
 */
export async function bumpSurpriseCounter(): Promise<boolean> {
  return serializeRewardMutation(async () => {
    const { counter, threshold } = await readState();
    const pending = await readPendingSurpriseId();
    if (pending) return true; // already triggered, waiting consumption

    const next = counter + 1;
    await AsyncStorage.setItem(K_COUNTER, String(next));

    if (next >= threshold) {
      void trackEvent("surprise_triggered", {
        counter: next,
        threshold,
      }).catch(() => {});
      return true;
    }
    return false;
  });
}

/**
 * Has a surprise been triggered but not yet consumed? Returns the
 * lessonId of the surprise scene or null. Drives the home banner.
 */
export async function getPendingSurpriseLessonId(): Promise<string | null> {
  try {
    return await readPendingSurpriseId();
  } catch {
    return null;
  }
}

/**
 * Pick a surprise scene for the user. Strategy: bir sahne kullanıcının
 * az completed moddan, kullanıcının pool'undan playable olan. Eğer böyle
 * bir sahne yoksa random playable. Cache'lenir — bir threshold cycle'da
 * stabil.
 *
 * `completedLessonIds` ve `interestModes` caller'dan gelir (home state).
 */
export async function ensureSurpriseSceneIfPending(opts: {
  completedLessonIds: Set<string>;
  interestModes: string[] | null;
}): Promise<Scene | null> {
  return serializeRewardMutation(async () => {
    let pendingId = await readPendingSurpriseId();
    if (pendingId) {
      const scene = SAMPLE_SCENES.find((s) => s.lessonId === pendingId);
      if (scene) return scene;
      // pending id geçersiz olmuş — temizle ve yeniden seç
      await AsyncStorage.removeItem(K_PENDING_ID);
      pendingId = null;
    }

    // Sürpriz threshold'una ulaştık mı? bumpSurpriseCounter zaten verdict'te
    // çağrılıyor — burada sadece son state'i okuyup karar veriyoruz.
    const { counter, threshold } = await readState();
    if (counter < threshold) return null;

    // Pool: playable + interest filter (eğer varsa) + henüz tamamlanmamış
    const playable = SAMPLE_SCENES.filter(
      (s) =>
        getScenario(s.lessonId) !== null &&
        !opts.completedLessonIds.has(s.lessonId),
    );

    let pool = playable;
    if (opts.interestModes && opts.interestModes.length > 0) {
      const set = new Set(opts.interestModes);
      const filtered = pool.filter((s) => set.has(s.mode));
      if (filtered.length > 0) pool = filtered;
    }

    if (pool.length === 0) return null;

    // Az tamamlanmış modu öne çıkar: her moddan completed sayısını hesapla
    // (pool dışı dahil), en az olandan rastgele bir sahne.
    const completedPerMode: Record<string, number> = {};
    for (const id of opts.completedLessonIds) {
      const scene = SAMPLE_SCENES.find((s) => s.lessonId === id);
      if (scene) {
        completedPerMode[scene.mode] = (completedPerMode[scene.mode] ?? 0) + 1;
      }
    }
    const sortedModes = Array.from(new Set(pool.map((s) => s.mode))).sort(
      (a, b) => (completedPerMode[a] ?? 0) - (completedPerMode[b] ?? 0),
    );
    const targetMode = sortedModes[0];
    const candidates = pool.filter((s) => s.mode === targetMode);
    const pick =
      candidates[Math.floor(Math.random() * candidates.length)] ?? pool[0]!;

    await AsyncStorage.multiSet([
      [K_PENDING_ID, pick.lessonId],
      [K_LAST_SHOWN, new Date().toISOString()],
    ]);
    void trackEvent("surprise_scene_picked", {
      lesson_id: pick.lessonId,
      mode: pick.mode,
    }).catch(() => {});
    return pick;
  });
}

/**
 * Sürpriz tüketildi (kullanıcı sahneyi açtı veya tamamladı).
 * Counter sıfırlanır, yeni threshold belirlenir, pending temizlenir.
 */
export async function consumeSurprise(): Promise<void> {
  return serializeRewardMutation(async () => {
    await AsyncStorage.multiSet([
      [K_COUNTER, "0"],
      [K_THRESHOLD, String(pickThreshold())],
    ]);
    // Remove the pending marker only after the next cycle is durable. If this
    // final cleanup fails, retrying is safe and cannot mint a second surprise.
    await AsyncStorage.removeItem(K_PENDING_ID);
    void trackEvent("surprise_consumed").catch(() => {});
  });
}
