// Lafla — Vocabulary SRS (Anki-style, word-grain).
//
// Mevcut lib/srs.ts LESSON-grain (bir sahnenin ne zaman tekrar geleceği).
// Bu modul WORD-grain: bir kelimenin ne zaman tekrar gösterileceği.
//
// Algoritma: Half-life regression (Duolingo'nun yayımladığı, Anki SM-2'den
// daha basit, more robust against irregular review intervals).
//   half_life_days = previous_half_life * recall_factor
//   recall_factor:
//     "easy"     → 2.5×  (uzun süre görünmesin)
//     "ok"       → 1.8×  (normal)
//     "hard"     → 1.0×  (aralık aynı kalır)
//     "forgot"   → 0.3×  (kısa sürede tekrar)
//
// Initial half-life: 1 gün (yeni kelime). 6 başarılı "easy" → ~180 gün.
//
// Latency: queue read O(N) — typical N=200-500 vocab items, ~5ms.
// Storage: AsyncStorage JSON blob `lafla.vocab.queue.v1`. Supabase sync
// follow-up (vocab_state table) v1.1'de.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { trackEvent } from "./analytics";

const K_QUEUE = "lafla.vocab.queue.v1";

// ─── types ────────────────────────────────────────────────────────────

export interface VocabItem {
  /** Unique ID — `${source_lesson_id}::${word}` lowercased. */
  id: string;
  /** İngilizce hedef kelime/kalıp. */
  word: string;
  /** Türkçe karşılığı (vocab_tile.tr_translation veya translate.source). */
  translation: string;
  /** Hangi sahneden geldi — review ekranında "Tinder opener" gibi context. */
  source_lesson_id: string;
  /** Lesson title — UI'da görünür context. */
  source_lesson_title: string;
  /** İlk eklenme tarihi (ISO). */
  added_at: string;
  /** Son review tarihi (ISO) — initial value === added_at. */
  last_reviewed_at: string;
  /** HLR half-life (gün). Initial 1.0. */
  half_life_days: number;
  /** Toplam başarılı recall. */
  success_count: number;
  /** Toplam başarısız recall. */
  fail_count: number;
}

export type Recall = "easy" | "ok" | "hard" | "forgot";

interface QueueShape {
  version: 1;
  items: VocabItem[];
}

// ─── storage helpers ──────────────────────────────────────────────────

async function readQueue(): Promise<QueueShape> {
  try {
    const raw = await AsyncStorage.getItem(K_QUEUE);
    if (!raw) return { version: 1, items: [] };
    const parsed = JSON.parse(raw) as QueueShape;
    if (parsed.version === 1 && Array.isArray(parsed.items)) {
      return parsed;
    }
    return { version: 1, items: [] };
  } catch {
    return { version: 1, items: [] };
  }
}

async function writeQueue(q: QueueShape): Promise<void> {
  try {
    await AsyncStorage.setItem(K_QUEUE, JSON.stringify(q));
  } catch {
    // best effort — vocab queue loss is recoverable on next exercise
  }
}

// ─── add ──────────────────────────────────────────────────────────────

/**
 * Bir vocab_tile veya translate exercise başarılı olduğunda çağrılır.
 * Idempotent — aynı (lesson_id, word) için duplicate eklenmez, sadece
 * last_reviewed_at + half_life güncellenir (success path).
 */
export async function enqueueVocab(input: {
  word: string;
  translation: string;
  source_lesson_id: string;
  source_lesson_title: string;
  /** Eğer false ise (translate hatası): success_count etkilenmez, half_life kısalır. */
  was_correct?: boolean;
}): Promise<void> {
  const word = input.word.trim();
  if (!word) return;

  const id = makeId(input.source_lesson_id, word);
  const q = await readQueue();
  const now = new Date().toISOString();

  const idx = q.items.findIndex((it) => it.id === id);
  if (idx === -1) {
    // Yeni kelime
    q.items.push({
      id,
      word,
      translation: input.translation.trim(),
      source_lesson_id: input.source_lesson_id,
      source_lesson_title: input.source_lesson_title,
      added_at: now,
      last_reviewed_at: now,
      half_life_days: 1.0,
      success_count: input.was_correct === false ? 0 : 1,
      fail_count: input.was_correct === false ? 1 : 0,
    });
  } else {
    // Mevcut kelime — review olarak işle
    const item = q.items[idx]!;
    if (input.was_correct === false) {
      item.fail_count += 1;
      item.half_life_days = Math.max(0.5, item.half_life_days * 0.4);
    } else {
      item.success_count += 1;
      item.half_life_days *= 1.5;
    }
    item.last_reviewed_at = now;
  }

  await writeQueue(q);
}

function makeId(lessonId: string, word: string): string {
  return `${lessonId}::${word.toLowerCase().replace(/\s+/g, "_")}`;
}

// ─── due queue ────────────────────────────────────────────────────────

/**
 * Bugün review edilecek kelimeleri döner. Sıralama: en uzun süredir
 * review edilmemiş + half-life'ı geçmiş olanlar önce.
 *
 * "Due" tanımı: last_reviewed_at + half_life_days < now.
 */
export async function getDueVocab(opts: { limit?: number } = {}): Promise<VocabItem[]> {
  const q = await readQueue();
  const now = Date.now();
  const due = q.items.filter((it) => {
    const last = new Date(it.last_reviewed_at).getTime();
    const dueAt = last + it.half_life_days * 86400 * 1000;
    return dueAt <= now;
  });
  // En uzun süredir review edilmemiş önce
  due.sort((a, b) => {
    const aLast = new Date(a.last_reviewed_at).getTime();
    const bLast = new Date(b.last_reviewed_at).getTime();
    return aLast - bLast;
  });
  if (opts.limit) return due.slice(0, opts.limit);
  return due;
}

export async function getDueCount(): Promise<number> {
  const due = await getDueVocab();
  return due.length;
}

/**
 * Bugünkü review session'ı için tahmini dakika (her item ~10sn).
 */
export async function getDueMinutes(): Promise<number> {
  const c = await getDueCount();
  return Math.max(1, Math.round((c * 10) / 60));
}

// ─── review ───────────────────────────────────────────────────────────

/**
 * Kullanıcı bir vocab item'ı review etti. Recall kalitesine göre HLR
 * algoritması yeni half-life'ı hesaplar.
 */
export async function recordVocabReview(
  id: string,
  recall: Recall,
): Promise<VocabItem | null> {
  const q = await readQueue();
  const idx = q.items.findIndex((it) => it.id === id);
  if (idx === -1) return null;

  const item = q.items[idx]!;
  const factor =
    recall === "easy"
      ? 2.5
      : recall === "ok"
        ? 1.8
        : recall === "hard"
          ? 1.0
          : 0.3; // forgot

  const prev = item.half_life_days;
  item.half_life_days = Math.max(0.25, prev * factor);
  item.last_reviewed_at = new Date().toISOString();

  if (recall === "forgot") {
    item.fail_count += 1;
  } else {
    item.success_count += 1;
  }

  await writeQueue(q);

  void trackEvent("vocab_review", {
    word: item.word,
    recall,
    old_half_life: prev,
    new_half_life: item.half_life_days,
  }).catch(() => {});

  return item;
}

// ─── stats ────────────────────────────────────────────────────────────

export interface VocabStats {
  total: number;
  due: number;
  mastered: number; // half_life >= 90 days
  learning: number; // half_life < 7 days
}

export async function getVocabStats(): Promise<VocabStats> {
  const q = await readQueue();
  const now = Date.now();
  let due = 0;
  let mastered = 0;
  let learning = 0;
  for (const it of q.items) {
    const last = new Date(it.last_reviewed_at).getTime();
    const dueAt = last + it.half_life_days * 86400 * 1000;
    if (dueAt <= now) due += 1;
    if (it.half_life_days >= 90) mastered += 1;
    else if (it.half_life_days < 7) learning += 1;
  }
  return {
    total: q.items.length,
    due,
    mastered,
    learning,
  };
}

/** Reset queue — account silme veya manual reset için. */
export async function clearVocabQueue(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_QUEUE);
  } catch {
    // ignore
  }
}
