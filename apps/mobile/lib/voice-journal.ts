// Lafla — Voice Journal (kullanıcının ses arşivi).
//
// 2026-05-23 — Engagement #5. Adult self-reflection aracı: kullanıcı
// manuel ses notu bırakıyor (30sn-2dk), zaman içinde "1 hafta önce
// nasıl konuşuyordum vs şimdi" karşılaştırması yapıyor.
//
// Brand: Day One app + Voice Memos hibrit. Confetti yok, gamification
// yok. Tangible progress kanıtı.
//
// Neden manuel (sahne audio değil):
//   • Sahnedeki STT audio buffer'ını yakalamak: RoleplayChat refactor +
//     battery drain (sürekli recording on)
//   • Manuel: kullanıcı istediği zaman, istediği konuyu kaydeder
//   • 30sn-2dk slot → 30 gün × 60 entry max ≈ 60 dosya, ~30MB peak
//
// Storage:
//   • Audio files: expo-file-system documentDirectory/voice-journal/
//   • Metadata index: AsyncStorage `lafla.voice-journal.index` (JSON array)
//   • FIFO ring: 30 entries max (cap'in altında auto-delete)

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import { isObject, parseSafe } from "./json-safe";

const K_INDEX = "lafla.voice-journal.index";
const MAX_ENTRIES = 30;
const DIR_NAME = "voice-journal";

// 2026-05-23 — Race fix: getEntries() opportunistic sweep'i active
// recording'i silebilir. Voice-journal screen useFocusEffect ile
// load() fire eder; user backgroundlar + döner → sweep çalışır → live
// .m4a (saveEntry henüz çağrılmamış, index'te yok) ORPHAN sayılır + silinir.
// Module-level tracking: kayıt başlarken aktif URI'yi işaretle, sweep
// onu skip eder.
let _activeRecordingUri: string | null = null;

export function markRecordingActive(uri: string): void {
  _activeRecordingUri = uri;
}

export function markRecordingInactive(): void {
  _activeRecordingUri = null;
}

export interface VoiceEntry {
  /** Unique id (timestamp-based). */
  id: string;
  /** Local file URI (absolute path). */
  uri: string;
  /** ISO timestamp of recording. */
  recordedAt: string;
  /** Duration in ms. */
  durationMs: number;
  /** Optional 1-line note (kullanıcı isterse "ne hakkında" yazar). */
  note?: string;
  /** AI-generated transcription of the recording. */
  transcript?: string;
  /** AI analysis stats. */
  analysis?: {
    fillerWords: number;
    wordCount: number;
    avgWordsPerMinute: number;
  };
}

function isVoiceEntry(x: unknown): x is VoiceEntry {
  return (
    isObject(x) &&
    typeof (x as { id?: unknown }).id === "string" &&
    typeof (x as { uri?: unknown }).uri === "string" &&
    typeof (x as { recordedAt?: unknown }).recordedAt === "string" &&
    typeof (x as { durationMs?: unknown }).durationMs === "number" &&
    (typeof (x as { transcript?: unknown }).transcript === "undefined" ||
      typeof (x as { transcript?: unknown }).transcript === "string") &&
    (typeof (x as { analysis?: unknown }).analysis === "undefined" ||
      (isObject((x as { analysis?: unknown }).analysis) &&
        typeof (x as any).analysis.fillerWords === "number" &&
        typeof (x as any).analysis.wordCount === "number" &&
        typeof (x as any).analysis.avgWordsPerMinute === "number"))
  );
}

function getDirUri(): string {
  // documentDirectory iOS'ta `~/Documents/`, kullanıcı backup'lar arasında
  // korunur. cacheDirectory tercih edilebilir ama temizlenebilir — biz
  // arşivi kalıcı tutuyoruz, documentDirectory doğru seçim.
  return `${FileSystem.documentDirectory ?? ""}${DIR_NAME}/`;
}

async function ensureDir(): Promise<void> {
  const dir = getDirUri();
  try {
    const info = await FileSystem.getInfoAsync(dir);
    if (!info.exists) {
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
    }
  } catch {
    // Best effort. Recording will fail later if dir cannot be created.
  }
}

async function readIndex(): Promise<VoiceEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(K_INDEX);
    if (!raw) return [];
    const parsed = parseSafe<unknown[]>(raw, [], Array.isArray, {
      source: "voice-journal.readIndex",
    });
    return parsed.filter(isVoiceEntry);
  } catch {
    return [];
  }
}

async function writeIndex(list: VoiceEntry[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_INDEX, JSON.stringify(list));
  } catch {
    // ignore
  }
}

/**
 * Yeni bir kayıt için kullanılacak dosya URI'sini hazırlar. Recording
 * başlamadan ÖNCE çağrılır (expo-av Recording API'sının istediği şekil).
 *
 * 2026-05-26 (P0 audit fix) — Date.now() tek başına aynı ms'de iki kayıt
 * başlatıldığında çakışıyordu (yeni dosya eskisini eziyor → data loss).
 * Random suffix ile collision olasılığı pratik olarak 0'a iner.
 */
export async function preparePath(): Promise<string> {
  await ensureDir();
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  return `${getDirUri()}entry-${id}.m4a`;
}

/**
 * Kayıt bittikten sonra metadata'yı kaydet. URI önceden preparePath()'ten
 * gelmiş olmalı. FIFO cap aşılırsa en eski entry'nin hem dosyası hem
 * indeksi silinir.
 */
export async function saveEntry(args: {
  uri: string;
  durationMs: number;
  note?: string;
}): Promise<VoiceEntry> {
  const list = await readIndex();
  // 2026-05-26 (P0 audit fix) — id de aynı collision riskini taşıyordu;
  // preparePath'le aynı pattern kullan, AsyncStorage indeksinde tekil
  // anahtar garanti et.
  const entry: VoiceEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    uri: args.uri,
    recordedAt: new Date().toISOString(),
    durationMs: args.durationMs,
    ...(args.note ? { note: args.note } : {}),
  };
  list.unshift(entry); // Yeni → eski sıralama.
  // FIFO cap — en eski(ler)i sil.
  while (list.length > MAX_ENTRIES) {
    const removed = list.pop();
    if (removed) {
      // Best effort dosya silme — başarısız olsa bile index temizlenmiş.
      void FileSystem.deleteAsync(removed.uri, { idempotent: true }).catch(
        () => {},
      );
    }
  }
  await writeIndex(list);
  return entry;
}

/**
 * Tüm entry'leri yeni → eski sıralı döner. Profile / Voice Journal
 * timeline bu listeyi listeler.
 *
 * 2026-05-23 — Audit fix: opportunistic orphan-file sweep.
 *   Bir önceki versiyon documentDirectory'deki dosyaları hiç temizlemiyordu.
 *   Recording crash (force-close veya OOM) sonrası saveEntry hiç çalışmazdı
 *   — m4a dosyası diskte kalır, index'te yoktu, hiç silinmezdi. Aylar sonra:
 *   10-100MB orphan birikimi.
 *
 *   Çözüm: getEntries() her çağrıldığında dir'i tara, index URI'larında
 *   olmayan tüm .m4a dosyalarını sil. Fire-and-forget — kullanıcı bekletmez.
 *   Idempotent: index'teki kayıtlara dokunmaz.
 */
export async function getEntries(): Promise<VoiceEntry[]> {
  const list = await readIndex();
  // Orphan sweep — best-effort, blocking değil.
  void sweepOrphanFiles(list).catch(() => {});
  return list;
}

/**
 * Index'te bulunmayan m4a dosyalarını sil. getEntries() içinden fire-and-
 * forget çağrılır. Dir yoksa veya boşsa no-op.
 */
async function sweepOrphanFiles(index: VoiceEntry[]): Promise<void> {
  const dir = getDirUri();
  try {
    const info = await FileSystem.getInfoAsync(dir);
    if (!info.exists || !info.isDirectory) return;
    const fileNames = await FileSystem.readDirectoryAsync(dir);
    if (fileNames.length === 0) return;
    // Index'teki tüm URI'lardan dosya adlarını çıkar.
    const knownNames = new Set(
      index.map((e) => {
        const slash = e.uri.lastIndexOf("/");
        return slash >= 0 ? e.uri.slice(slash + 1) : e.uri;
      }),
    );
    // Active recording'in target filename'i — SKIP, sweep'lemek yok.
    const activeName = _activeRecordingUri
      ? _activeRecordingUri.slice(_activeRecordingUri.lastIndexOf("/") + 1)
      : null;
    // Index'te olmayan + .m4a uzantılı dosyaları sil, active hariç.
    const orphans = fileNames.filter(
      (name) =>
        name.endsWith(".m4a") &&
        !knownNames.has(name) &&
        name !== activeName,
    );
    await Promise.all(
      orphans.map((name) =>
        FileSystem.deleteAsync(`${dir}${name}`, { idempotent: true }).catch(
          () => {},
        ),
      ),
    );
  } catch {
    // Best effort — sweep başarısızlığı kritik değil.
  }
}

/**
 * Tek bir entry'yi sil (hem dosyası hem index'i).
 */
export async function deleteEntry(id: string): Promise<void> {
  const list = await readIndex();
  const idx = list.findIndex((e) => e.id === id);
  if (idx < 0) return;
  const removed = list[idx]!;
  list.splice(idx, 1);
  await writeIndex(list);
  void FileSystem.deleteAsync(removed.uri, { idempotent: true }).catch(
    () => {},
  );
}

/**
 * Entry'nin not field'ını güncelle (kayıt sonrası kullanıcı "ne hakkında"
 * yazarsa).
 */
export async function updateEntryNote(
  id: string,
  note: string,
): Promise<void> {
  const list = await readIndex();
  const idx = list.findIndex((e) => e.id === id);
  if (idx < 0) return;
  list[idx] = { ...list[idx]!, note: note.trim() || undefined };
  await writeIndex(list);
}

/**
 * Toplam entry sayısı. Profile'da "12 sesli not" gibi göstermek için.
 */
export async function getCount(): Promise<number> {
  const list = await readIndex();
  return list.length;
}

/**
 * Settings → reset entry point. Tüm dosyaları + indeksi siler.
 */
export async function clearAll(): Promise<void> {
  const list = await readIndex();
  for (const entry of list) {
    void FileSystem.deleteAsync(entry.uri, { idempotent: true }).catch(
      () => {},
    );
  }
  try {
    await AsyncStorage.removeItem(K_INDEX);
  } catch {
    // ignore
  }
}

// -------------------------------------------------------------
// BUG-8: AI Speech Recognition & Weekly Stats Entegrasyonu
// -------------------------------------------------------------

function loadSpeechModule() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require("expo-speech-recognition");
    return (
      mod?.ExpoSpeechRecognitionModule ??
      mod?.default ??
      mod ??
      null
    );
  } catch {
    return null;
  }
}

async function transcribeFile(uri: string): Promise<string> {
  const mod = loadSpeechModule();
  if (!mod) {
    throw new Error("Speech recognition module not available");
  }

  return new Promise<string>((resolve, reject) => {
    let transcript = "";
    let completed = false;

    const resultListener = mod.addListener("result", (e: any) => {
      const text = e.results?.[0]?.transcript ?? "";
      if (text) {
        transcript = text;
      }
    });

    const errorListener = mod.addListener("error", (e: any) => {
      if (completed) return;
      completed = true;
      cleanup();
      reject(new Error(e.message ?? e.error ?? "Speech recognition error"));
    });

    const endListener = mod.addListener("end", () => {
      if (completed) return;
      completed = true;
      cleanup();
      resolve(transcript);
    });

    const cleanup = () => {
      try {
        resultListener.remove();
      } catch { /* ignore */ }
      try {
        errorListener.remove();
      } catch { /* ignore */ }
      try {
        endListener.remove();
      } catch { /* ignore */ }
    };

    try {
      mod.start({
        lang: "en-US",
        audioSource: { uri },
        requiresOnDeviceRecognition: true,
      });
    } catch (err) {
      if (!completed) {
        completed = true;
        cleanup();
        reject(err);
      }
    }
  });
}

function countFillerWords(text: string): number {
  if (!text) return 0;
  const pattern = /\b(um|uh|like|you\s+know|i\s+mean|basically|actually|so|well)\b/gi;
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

export async function analyzeEntry(entryId: string): Promise<void> {
  const list = await readIndex();
  const idx = list.findIndex((e) => e.id === entryId);
  if (idx < 0) {
    throw new Error("Entry not found");
  }

  const entry = list[idx]!;
  const transcript = await transcribeFile(entry.uri);
  
  const words = transcript.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const fillerWords = countFillerWords(transcript);
  
  const durationSec = entry.durationMs / 1000;
  const durationMin = durationSec / 60;
  
  const avgWordsPerMinute = durationMin > 0 ? Math.round(wordCount / durationMin) : 0;

  list[idx] = {
    ...entry,
    transcript,
    analysis: {
      fillerWords,
      wordCount,
      avgWordsPerMinute,
    },
  };
  
  await writeIndex(list);
}

export interface WeeklyStats {
  totalRecordings: number;
  totalDurationMs: number;
  avgFillerWordsPerMinute: number;
  topFillerWord?: string;
  avgWordsPerMinute: number;
}

export async function getWeeklyStats(): Promise<WeeklyStats> {
  const list = await readIndex();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  const weeklyEntries = list.filter((e) => {
    try {
      const date = new Date(e.recordedAt);
      return date >= sevenDaysAgo;
    } catch {
      return false;
    }
  });

  const totalRecordings = weeklyEntries.length;
  let totalDurationMs = 0;
  let totalFillerWords = 0;
  let totalWords = 0;
  
  const fillerWordCounts: Record<string, number> = {};
  
  for (const entry of weeklyEntries) {
    totalDurationMs += entry.durationMs;
    if (entry.analysis) {
      totalFillerWords += entry.analysis.fillerWords;
      totalWords += entry.analysis.wordCount;
      
      if (entry.transcript) {
        const pattern = /\b(um|uh|like|you\s+know|i\s+mean|basically|actually|so|well)\b/gi;
        const matches = entry.transcript.match(pattern);
        if (matches) {
          for (const match of matches) {
            const normalized = match.toLowerCase().trim().replace(/\s+/g, " ");
            fillerWordCounts[normalized] = (fillerWordCounts[normalized] || 0) + 1;
          }
        }
      }
    }
  }

  const durationMin = (totalDurationMs / 1000) / 60;
  const avgFillerWordsPerMinute = durationMin > 0 ? Math.round((totalFillerWords / durationMin) * 10) / 10 : 0;
  const avgWordsPerMinute = durationMin > 0 ? Math.round(totalWords / durationMin) : 0;

  let topFillerWord: string | undefined = undefined;
  let maxCount = 0;
  for (const [word, count] of Object.entries(fillerWordCounts)) {
    if (count > maxCount) {
      maxCount = count;
      topFillerWord = word;
    }
  }

  return {
    totalRecordings,
    totalDurationMs,
    avgFillerWordsPerMinute,
    topFillerWord,
    avgWordsPerMinute,
  };
}
