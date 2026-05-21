// Lafla — Local scene completion history.
//
// 2026-05-21 — History/progress sayfası için kullanıcı verisi. Önceden
// completion sadece Supabase'e gönderiliyordu (online + auth gerekli) ve
// lokalde kaybediliyordu. Kullanıcı "geçen hafta hangi sahneleri yaptım,
// skorlarım neydi" görmek için lokalden okuyabilmeli.
//
// Saklama: AsyncStorage. Son N = 200 kayıt ring buffer (FIFO trim).
// Bu sayı 200 × ~200 byte = ~40 KB — ihmal edilebilir bundle yükü.

import AsyncStorage from "@react-native-async-storage/async-storage";
import type { SceneMode } from "../data/scenes";

const K_HISTORY = "lafla.sceneHistory";
const MAX_HISTORY = 200;

export interface SceneHistoryEntry {
  /** Lesson ID — sahneye dön linkleri için. */
  lessonId: string;
  /** Sahne başlığı — UI'da gösterilir. */
  title: string;
  /** Sahne modu — filtre için. */
  mode: SceneMode;
  /** 0-100 sahne skoru. */
  score: number;
  /** Tamamlama tarihi (ISO). */
  completedAt: string;
  /** Sahne emoji — UI'da scene-card paralel görünüm. */
  emoji?: string;
}

/**
 * Bir sahne tamamlandıktan sonra history'e ekle. FIFO trim 200'den fazla
 * olursa en eski silinir. onSceneComplete tarafından çağrılır.
 */
export async function recordSceneCompletion(
  entry: Omit<SceneHistoryEntry, "completedAt">,
): Promise<void> {
  try {
    const existing = await readHistory();
    const next: SceneHistoryEntry = {
      ...entry,
      completedAt: new Date().toISOString(),
    };
    // Yeni kayıt en başa (en yeniler önce)
    const updated = [next, ...existing].slice(0, MAX_HISTORY);
    await AsyncStorage.setItem(K_HISTORY, JSON.stringify(updated));
  } catch {
    // best effort
  }
}

/**
 * Tüm history'i oku (en yeni → en eski sıralı).
 */
export async function readHistory(): Promise<SceneHistoryEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(K_HISTORY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SceneHistoryEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Mode'a göre filtreli history. UI tab'ları için.
 */
export async function readHistoryByMode(
  mode: SceneMode,
): Promise<SceneHistoryEntry[]> {
  const all = await readHistory();
  return all.filter((e) => e.mode === mode);
}

/**
 * Bugünkü kayıtlar — günlük özet için.
 */
export async function readHistoryToday(): Promise<SceneHistoryEntry[]> {
  const all = await readHistory();
  const today = new Date().toDateString();
  return all.filter((e) => new Date(e.completedAt).toDateString() === today);
}

/**
 * History özeti — Profile sayfasına için hızlı stats.
 */
export interface HistorySummary {
  total: number;
  thisWeek: number;
  avgScore: number;
  topMode: SceneMode | null;
}

export async function getHistorySummary(): Promise<HistorySummary> {
  const all = await readHistory();
  if (all.length === 0) {
    return { total: 0, thisWeek: 0, avgScore: 0, topMode: null };
  }
  const oneWeekMs = 7 * 24 * 3600 * 1000;
  const now = Date.now();
  const thisWeek = all.filter(
    (e) => now - new Date(e.completedAt).getTime() <= oneWeekMs,
  ).length;
  const avgScore = Math.round(
    all.reduce((sum, e) => sum + e.score, 0) / all.length,
  );
  const modeCount: Record<string, number> = {};
  for (const e of all) {
    modeCount[e.mode] = (modeCount[e.mode] ?? 0) + 1;
  }
  const topMode = (Object.entries(modeCount).sort(
    (a, b) => b[1] - a[1],
  )[0]?.[0] ?? null) as SceneMode | null;
  return { total: all.length, thisWeek, avgScore, topMode };
}

/**
 * Test / debug — history sıfırla.
 */
export async function clearHistory(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_HISTORY);
  } catch {
    // ignore
  }
}
