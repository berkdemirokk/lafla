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
}

function isVoiceEntry(x: unknown): x is VoiceEntry {
  return (
    isObject(x) &&
    typeof (x as { id?: unknown }).id === "string" &&
    typeof (x as { uri?: unknown }).uri === "string" &&
    typeof (x as { recordedAt?: unknown }).recordedAt === "string" &&
    typeof (x as { durationMs?: unknown }).durationMs === "number"
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
 */
export async function preparePath(): Promise<string> {
  await ensureDir();
  const id = `${Date.now()}`;
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
  const entry: VoiceEntry = {
    id: `${Date.now()}`,
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
 */
export async function getEntries(): Promise<VoiceEntry[]> {
  return await readIndex();
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
