// Lafla — Vocabulary book (kişisel kelime defteri).
//
// 2026-05-21 — Retention için: kullanıcı sahnelerden öğrendiği vocab
// tile'ları kişisel "defterinde" görmek ister. Mevcut SRS queue otomatik
// review yapıyor ama bir GALLERY YOK. "Bu ay 40 kelime öğrendim" hissi
// yarat ki kullanıcı 1 ayda terk etmesin.
//
// Mekanik:
//   - Sahne tamamlandığında o sahnenin vocab_tile'ları otomatik defter'e
//     eklenir (recordVocabFromScene)
//   - Defter AsyncStorage'da: lafla.vocabBook (max 500 kelime, FIFO)
//   - /vocab-book ekran: liste + mode filtre + öğrenme tarihi + ses
//   - Profile'da "📖 Kelime defterin" CTA, sayı ile

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLesson } from "../data/lessons";
import type { SceneMode } from "../data/scenes";

const K_VOCAB_BOOK = "lafla.vocabBook";
const MAX_ENTRIES = 500;

export interface VocabBookEntry {
  /** English vocab tile (örn. "I'd describe my hometown as"). */
  en: string;
  /** Türkçe karşılığı. */
  tr: string;
  /** Örnek cümle (English). */
  example?: string;
  /** Örnek cümlenin Türkçesi. */
  example_tr?: string;
  /** Sahnenin lessonId'si (geri dön linki için). */
  lessonId: string;
  /** Sahnenin mode'u (filtreleme için). */
  mode: SceneMode;
  /** Eklenme tarihi (ISO). */
  addedAt: string;
}

async function readBook(): Promise<VocabBookEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(K_VOCAB_BOOK);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as VocabBookEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeBook(entries: VocabBookEntry[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_VOCAB_BOOK, JSON.stringify(entries));
  } catch {
    // best effort
  }
}

/**
 * Bir sahne tamamlandığında çağrılır. O sahnenin vocab_tile'ları
 * defter'e eklenir. Duplicate (aynı en + lessonId) kabul edilmez —
 * kullanıcı aynı sahneyi 5 kere oynasa kelimeler tekrar girmez.
 *
 * onSceneComplete tarafından çağrılır.
 */
export async function recordVocabFromScene(
  lessonId: string,
  mode: SceneMode,
): Promise<number> {
  const lesson = getLesson(lessonId);
  if (!lesson) return 0;

  // BundledLesson.exercises arasından vocab_tile'ları topla
  const vocabTiles = (lesson.exercises as Array<{
    type: string;
    word_or_phrase?: string;
    tr_translation?: string;
    example?: string;
    example_tr?: string;
  }>).filter((ex) => ex.type === "vocab_tile" && ex.word_or_phrase);

  if (vocabTiles.length === 0) return 0;

  const existing = await readBook();
  // Aynı (en + lessonId) zaten varsa skip — Set ile dedupe
  const existingKeys = new Set(
    existing.map((e) => `${e.en.toLowerCase()}|${e.lessonId}`),
  );

  const now = new Date().toISOString();
  const newEntries: VocabBookEntry[] = [];
  for (const tile of vocabTiles) {
    const en = (tile.word_or_phrase ?? "").trim();
    if (!en) continue;
    const key = `${en.toLowerCase()}|${lessonId}`;
    if (existingKeys.has(key)) continue;
    newEntries.push({
      en,
      tr: tile.tr_translation ?? "",
      example: tile.example,
      example_tr: tile.example_tr,
      lessonId,
      mode,
      addedAt: now,
    });
  }

  if (newEntries.length === 0) return 0;

  // FIFO: max 500. Eski olanları başa, yeni olanları sona koy → trim sondan
  // Aslında yeni olanlar başta görünsün (en yeni → en eski). [...new, ...existing]
  const merged = [...newEntries, ...existing].slice(0, MAX_ENTRIES);
  await writeBook(merged);
  return newEntries.length;
}

/**
 * Defter'i oku — en yeni en başta.
 */
export async function getVocabBook(): Promise<VocabBookEntry[]> {
  return await readBook();
}

/**
 * Mode'a göre filtrele.
 */
export async function getVocabBookByMode(
  mode: SceneMode,
): Promise<VocabBookEntry[]> {
  const all = await readBook();
  return all.filter((e) => e.mode === mode);
}

/**
 * Özet — Profile'daki "📖 Kelime defterin · N kelime" için.
 */
export interface VocabBookSummary {
  total: number;
  thisWeek: number;
  topMode: SceneMode | null;
}

export async function getVocabBookSummary(): Promise<VocabBookSummary> {
  const all = await readBook();
  if (all.length === 0) {
    return { total: 0, thisWeek: 0, topMode: null };
  }
  const oneWeekMs = 7 * 24 * 3600 * 1000;
  const now = Date.now();
  const thisWeek = all.filter(
    (e) => now - new Date(e.addedAt).getTime() <= oneWeekMs,
  ).length;
  const modeCount: Record<string, number> = {};
  for (const e of all) {
    modeCount[e.mode] = (modeCount[e.mode] ?? 0) + 1;
  }
  const topMode = (Object.entries(modeCount).sort(
    (a, b) => b[1] - a[1],
  )[0]?.[0] ?? null) as SceneMode | null;
  return { total: all.length, thisWeek, topMode };
}

/**
 * Test / debug — defteri sıfırla. Account silmede lafla.* wipe ile temizlenir.
 */
export async function clearVocabBook(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_VOCAB_BOOK);
  } catch {
    // ignore
  }
}
