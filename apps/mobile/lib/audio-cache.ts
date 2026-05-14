// Lafla — Generic audio file cache.
// Persists binary audio (e.g. MP3) to expo-file-system's cacheDirectory and
// keeps a key -> relative-path map in AsyncStorage so lookups survive restarts.
// Designed to be reusable for any audio source (ElevenLabs today, others later).

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_CACHE_MAP = "lafla.audio.cache"; // map: cache_key -> relative file path under cacheDirectory

// Lazy require so this module doesn't crash in environments where
// expo-file-system isn't available (e.g. tests, web preview without the module).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let FileSystem: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  FileSystem = require("expo-file-system");
} catch {
  FileSystem = null;
}

const AUDIO_SUBDIR = "lafla-audio/";

async function readMap(): Promise<Record<string, string>> {
  try {
    const raw = await AsyncStorage.getItem(K_CACHE_MAP);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? (parsed as Record<string, string>) : {};
  } catch {
    return {};
  }
}

async function writeMap(map: Record<string, string>): Promise<void> {
  try {
    await AsyncStorage.setItem(K_CACHE_MAP, JSON.stringify(map));
  } catch {
    // Non-fatal — next call will simply re-fetch and re-cache.
  }
}

function cacheRoot(): string | null {
  if (!FileSystem || !FileSystem.cacheDirectory) return null;
  return `${FileSystem.cacheDirectory}${AUDIO_SUBDIR}`;
}

async function ensureRoot(): Promise<string | null> {
  const root = cacheRoot();
  if (!root || !FileSystem) return null;
  try {
    const info = await FileSystem.getInfoAsync(root);
    if (!info.exists) {
      await FileSystem.makeDirectoryAsync(root, { intermediates: true });
    }
    return root;
  } catch {
    return null;
  }
}

/** Sanitize a cache key so it is safe to use as part of a filename. */
function safeFilename(key: string): string {
  return key.replace(/[^a-zA-Z0-9._-]/g, "_");
}

/**
 * Returns a file:// URI for a previously cached audio blob, or null if the
 * key has never been stored (or the cached file has since been evicted /
 * expo-file-system is unavailable).
 */
export async function getCachedPath(key: string): Promise<string | null> {
  if (!FileSystem) return null;
  const map = await readMap();
  const rel = map[key];
  if (!rel) return null;

  const root = cacheRoot();
  if (!root) return null;
  const fullPath = `${root}${rel}`;

  try {
    const info = await FileSystem.getInfoAsync(fullPath);
    if (info.exists) return fullPath;
  } catch {
    // fall through to cleanup
  }

  // Stale entry — drop it so the caller can re-fetch.
  delete map[key];
  await writeMap(map);
  return null;
}

/**
 * Persist a freshly-downloaded audio blob and return its file:// URI.
 * Falls back to throwing if expo-file-system is unavailable — caller should
 * try/catch and degrade gracefully (e.g. play directly from memory).
 */
export async function storeCached(key: string, mp3Bytes: ArrayBuffer): Promise<string> {
  if (!FileSystem) {
    throw new Error("expo-file-system not available — cannot persist audio cache");
  }
  const root = await ensureRoot();
  if (!root) {
    throw new Error("Audio cache directory unavailable");
  }

  const filename = `${safeFilename(key)}.mp3`;
  const fullPath = `${root}${filename}`;

  // Convert ArrayBuffer -> base64 without pulling in extra deps.
  const base64 = arrayBufferToBase64(mp3Bytes);

  await FileSystem.writeAsStringAsync(fullPath, base64, {
    encoding: FileSystem.EncodingType?.Base64 ?? "base64",
  });

  const map = await readMap();
  map[key] = filename;
  await writeMap(map);

  return fullPath;
}

/** Clear every cached audio file and forget the map. Useful for "Reset cache" UX. */
export async function clearAudioCache(): Promise<void> {
  const map = await readMap();
  const root = cacheRoot();
  if (FileSystem && root) {
    for (const rel of Object.values(map)) {
      try {
        await FileSystem.deleteAsync(`${root}${rel}`, { idempotent: true });
      } catch {
        // ignore
      }
    }
  }
  try {
    await AsyncStorage.removeItem(K_CACHE_MAP);
  } catch {
    // ignore
  }
}

// --- helpers -----------------------------------------------------------------

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  // Process in chunks to avoid blowing the call stack on long inputs.
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, Array.from(chunk));
  }
  // global.btoa is available in Hermes & modern JSC; fall back to a manual encoder.
  if (typeof globalThis.btoa === "function") {
    return globalThis.btoa(binary);
  }
  return manualBtoa(binary);
}

function manualBtoa(input: string): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let output = "";
  let i = 0;
  while (i < input.length) {
    const c1 = input.charCodeAt(i++);
    const c2 = i < input.length ? input.charCodeAt(i++) : Number.NaN;
    const c3 = i < input.length ? input.charCodeAt(i++) : Number.NaN;

    const e1 = c1 >> 2;
    const e2 = ((c1 & 3) << 4) | (Number.isNaN(c2) ? 0 : c2 >> 4);
    const e3 = Number.isNaN(c2) ? 64 : ((c2 & 15) << 2) | (Number.isNaN(c3) ? 0 : c3 >> 6);
    const e4 = Number.isNaN(c3) ? 64 : c3 & 63;

    output += chars.charAt(e1) + chars.charAt(e2) + chars.charAt(e3) + chars.charAt(e4);
  }
  return output;
}
