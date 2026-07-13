// Lafla — Daily Diary (1 cümle İngilizce günlük).
//
// 2026-05-23 — Brand-safe engagement mekaniği. Day One app tarzı minimal
// journaling — kullanıcı her gün 1 cümle İngilizce yazıp/söyleyip
// hayatından bir an'ı kaydediyor. Hiçbir gamification yok (XP yok,
// "Storyteller" rozetler yok); sadece kişisel kayıt akışı.
//
// Neden Lafla DNA'sına uyar:
//   • Yetişkin journaling (Day One / Stoic app referansı)
//   • Lafla'nın "real-life İngilizce" pozisyonlamasının uzantısı
//   • Türk öğrencisi için cümle kurma alıştırması — sahne yapmadığı gün
//     bile düşük commitment ile günlük dil temasında kalıyor
//
// Storage: AsyncStorage. Cap'siz (1 entry/gün × yıl × ~100 char ≈ 36KB).
// Entry shape: { date: "YYYY-MM-DD", text: string, createdAt: ISO }.
//
// Bu modül SADECE veri katmanı. UI app/diary.tsx içinde.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { isObject } from "./json-safe";

const K_DIARY_ENTRIES = "lafla.diary.entries";

let diaryWriteChain: Promise<unknown> = Promise.resolve();

function serializeDiaryWrite<T>(work: () => Promise<T>): Promise<T> {
  const job = diaryWriteChain.then(work, work);
  diaryWriteChain = job.catch(() => undefined);
  return job;
}

export interface DiaryEntry {
  /** YYYY-MM-DD (kullanıcının yerel tarihi). Aynı gün için ikinci entry
   *  upsert eder — kullanıcı sabah yazıp akşam güncelleyebilir. */
  date: string;
  /** 1 cümle İngilizce. UI'da 200 char limit. */
  text: string;
  /** ISO timestamp — son düzenleme zamanı. */
  createdAt: string;
}

function isDiaryEntry(x: unknown): x is DiaryEntry {
  return (
    isObject(x) &&
    typeof (x as { date?: unknown }).date === "string" &&
    typeof (x as { text?: unknown }).text === "string" &&
    typeof (x as { createdAt?: unknown }).createdAt === "string"
  );
}

function todayKey(): string {
  // Kullanıcının yerel tarihi. UTC kullanırsak Türkiye 03:00'da "yeni gün"
  // başlar — kullanıcı uyandığında "dün yazmamışım" diye karışır.
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

async function readEntries(): Promise<DiaryEntry[]> {
  const raw = await AsyncStorage.getItem(K_DIARY_ENTRIES);
  if (!raw) return [];
  const parsed = JSON.parse(raw) as unknown;
  if (!Array.isArray(parsed) || !parsed.every(isDiaryEntry)) {
    // Personal writing must never be replaced by an empty list merely because
    // a stored payload is unreadable. Keep it intact until explicit reset.
    throw new Error("Diary index is invalid");
  }
  return parsed;
}

async function writeEntries(list: DiaryEntry[]): Promise<void> {
  await AsyncStorage.setItem(K_DIARY_ENTRIES, JSON.stringify(list));
}

/**
 * Upsert bugünkü entry — aynı gün ikinci yazımda mevcut entry'yi günceller.
 * 200 char limit zorlanır (UI tarafında da gösterilir ama burada da
 * defansif kestiriyoruz, yanlış UI versiyonu storage'ı kirletmesin).
 */
export async function setTodayEntry(text: string): Promise<void> {
  const cleaned = text.trim();
  if (!cleaned) return;
  return serializeDiaryWrite(async () => {
    const truncated = cleaned.length > 200 ? cleaned.slice(0, 200) : cleaned;
    const key = todayKey();
    const all = await readEntries();
    const idx = all.findIndex((e) => e.date === key);
    const entry: DiaryEntry = {
      date: key,
      text: truncated,
      createdAt: new Date().toISOString(),
    };
    if (idx >= 0) {
      all[idx] = entry;
    } else {
      all.push(entry);
    }
    // Sort by date desc — newest first for timeline render.
    all.sort((a, b) => (a.date < b.date ? 1 : -1));
    await writeEntries(all);
  });
}

/**
 * Bugünkü entry (varsa). UI'da "bugün yazdın mı" hint için.
 */
export async function getTodayEntry(): Promise<DiaryEntry | null> {
  const all = await readEntries();
  const key = todayKey();
  return all.find((e) => e.date === key) ?? null;
}

/**
 * Tüm timeline — yeni → eski sıralı. UI scroll view bunu listeler.
 */
export async function getAllEntries(): Promise<DiaryEntry[]> {
  return await readEntries();
}

/**
 * Son N gün içinde kaç entry var? Streak benzeri hesap için ama BIZ
 * burada streak göstermiyoruz — sadece "bu hafta 5 cümle yazdın" tarzı
 * yumuşak hint için.
 */
export async function getEntryCountLastDays(days: number): Promise<number> {
  if (days <= 0) return 0;
  const all = await readEntries();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffKey = (() => {
    const y = cutoff.getFullYear();
    const m = String(cutoff.getMonth() + 1).padStart(2, "0");
    const d = String(cutoff.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  })();
  return all.filter((e) => e.date >= cutoffKey).length;
}

/**
 * Settings → reset entry point. Diary çok kişisel — açıkça reset butonu
 * istemeyen kullanıcı için ayarda gizli kalmalı.
 */
export async function clearDiary(): Promise<void> {
  await AsyncStorage.removeItem(K_DIARY_ENTRIES);
}
