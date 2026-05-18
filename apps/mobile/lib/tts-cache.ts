// Lafla — on-disk MP3 cache for ElevenLabs TTS responses.
//
// PURPOSE
// ───────
// We pay (latency + $) every time we ask ElevenLabs to synthesise the same
// phrase. Lessons re-use phrases heavily (a single scenario can replay
// "How may I help you?" dozens of times), so a deterministic disk cache keyed
// on (text, voiceId) is the single biggest UX win available here:
//   • First play: ~600–1500 ms (network round-trip via our Worker).
//   • Re-play of same phrase: <50 ms (local file → expo-av).
//   • Offline: still works as long as the phrase was heard once.
//
// LAYOUT
// ──────
// • Directory: ${FileSystem.cacheDirectory}lafla-tts/
//   (lives under iOS's auto-evictable cache dir — system may reclaim it
//    when storage is tight, which is the right tradeoff for non-essential
//    audio. Real persistence would use documentDirectory.)
// • Filename:  ${djb2(text + "|" + voiceId)}.mp3
//   djb2 is a tiny, dependency-free, collision-resistant string hash
//   (Dan Bernstein, 1991). 32-bit hex output gives an 8-char filename and
//   ~1-in-4-billion collision odds — plenty for filename uniqueness.
//
// EVICTION
// ────────
// Strategy is intentionally simple: when the cache directory exceeds a soft
// budget (TTS_CACHE_MAX_BYTES, default 50 MB), delete oldest files (by
// modificationTime) until we're back under the limit. This is O(N) on a
// fairly small N (a typical user will accumulate a few hundred MP3s, each
// 10–50 KB), so we can afford to scan synchronously when needed.
//
// SAFETY
// ──────
// Every public function is wrapped so it NEVER throws. The worst outcome is
// a cache miss (we just refetch).

import * as FileSystem from "expo-file-system";

// ─── constants ────────────────────────────────────────────────────────────

export const TTS_CACHE_DIR = `${FileSystem.cacheDirectory ?? ""}lafla-tts/`;

/** Soft cap on disk usage. We trim oldest files when crossed. */
const TTS_CACHE_MAX_BYTES = 50 * 1024 * 1024; // 50 MB

// ─── public API ───────────────────────────────────────────────────────────

/**
 * Deterministic, dependency-free hash. We use djb2 because:
 *   • Native to JS (no Buffer / crypto polyfill needed in React Native).
 *   • 32-bit output → 8-char hex → short, FS-safe filename.
 *   • Stable across launches and devices (same text + voiceId = same name).
 *
 * Not for security — only for cache key uniqueness.
 */
export function hashText(text: string, voiceId: string): string {
  // djb2 with xor variant (Bernstein's hash, mod 2^32)
  const input = `${text}|${voiceId}`;
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    // h * 33 ^ c, kept in uint32 range
    h = (((h << 5) + h) ^ input.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

/**
 * Returns a local `file://` URI to a cached MP3 if it exists, else null.
 * Never throws — a missing cache dir or unreadable file resolves to null.
 */
export async function getCachedAudio(
  textHash: string,
): Promise<string | null> {
  try {
    const path = `${TTS_CACHE_DIR}${textHash}.mp3`;
    const info = await FileSystem.getInfoAsync(path);
    return info.exists ? path : null;
  } catch {
    return null;
  }
}

/**
 * Persist the raw MP3 bytes to disk and return the local `file://` URI.
 * Triggers eviction (best-effort, async) when the cache crosses the soft
 * budget. Never throws — on failure, returns the path anyway (the caller
 * will discover at playback time whether the file is readable).
 */
export async function setCachedAudio(
  textHash: string,
  mp3Bytes: ArrayBuffer,
): Promise<string> {
  const path = `${TTS_CACHE_DIR}${textHash}.mp3`;
  try {
    await ensureCacheDir();
    const base64 = arrayBufferToBase64(mp3Bytes);
    await FileSystem.writeAsStringAsync(path, base64, {
      encoding: FileSystem.EncodingType.Base64,
    });
    // Fire-and-forget — we don't block the caller on cleanup.
    void evictIfOverBudget();
  } catch {
    // best-effort: caller will fall back to streaming if read fails
  }
  return path;
}

// ─── internals ────────────────────────────────────────────────────────────

async function ensureCacheDir(): Promise<void> {
  try {
    const info = await FileSystem.getInfoAsync(TTS_CACHE_DIR);
    if (!info.exists) {
      await FileSystem.makeDirectoryAsync(TTS_CACHE_DIR, {
        intermediates: true,
      });
    }
  } catch {
    // best-effort
  }
}

/**
 * Walk the cache dir; if total bytes exceed the soft cap, delete the oldest
 * files (by modificationTime ascending) until we're back under budget.
 * Best-effort and never throws.
 */
async function evictIfOverBudget(): Promise<void> {
  try {
    const info = await FileSystem.getInfoAsync(TTS_CACHE_DIR);
    if (!info.exists) return;

    const names = await FileSystem.readDirectoryAsync(TTS_CACHE_DIR);
    if (names.length === 0) return;

    // Gather file metadata in parallel — typical N is small (<1000).
    const stats = await Promise.all(
      names.map(async (name) => {
        const uri = `${TTS_CACHE_DIR}${name}`;
        try {
          const fi = await FileSystem.getInfoAsync(uri);
          if (!fi.exists || fi.isDirectory) return null;
          return {
            uri,
            size: fi.size ?? 0,
            mtime: fi.modificationTime ?? 0,
          };
        } catch {
          return null;
        }
      }),
    );

    const files = stats.filter(
      (s): s is { uri: string; size: number; mtime: number } => s !== null,
    );
    const total = files.reduce((acc, f) => acc + f.size, 0);
    if (total <= TTS_CACHE_MAX_BYTES) return;

    // Oldest first.
    files.sort((a, b) => a.mtime - b.mtime);

    let running = total;
    for (const f of files) {
      if (running <= TTS_CACHE_MAX_BYTES) break;
      try {
        await FileSystem.deleteAsync(f.uri, { idempotent: true });
        running -= f.size;
      } catch {
        // skip stubborn files
      }
    }
  } catch {
    // eviction is best-effort
  }
}

/**
 * Convert ArrayBuffer → base64 string. expo-file-system has no `writeBlob`,
 * so we encode in JS. Chunked to avoid call-stack overflow on large buffers.
 */
function arrayBufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = "";
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    bin += String.fromCharCode.apply(
      null,
      Array.from(bytes.subarray(i, i + CHUNK)),
    );
  }
  // RN provides global.btoa via its polyfill set.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g: any = globalThis;
  if (typeof g.btoa === "function") return g.btoa(bin);
  // Last-resort fallback (shouldn't hit on RN, but keeps types honest).
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const B: any = (globalThis as any).Buffer;
  if (B) return B.from(bin, "binary").toString("base64");
  return "";
}

/**
 * Delete every MP3 in the cache directory. Used by pruneTtsCache when a
 * caller wants a hard reset. Never throws.
 */
export async function clearCache(): Promise<void> {
  try {
    const info = await FileSystem.getInfoAsync(TTS_CACHE_DIR);
    if (!info.exists) return;
    await FileSystem.deleteAsync(TTS_CACHE_DIR, { idempotent: true });
  } catch {
    // best-effort
  }
}

/**
 * Delete cached files older than `ttlMs` (ms). Safe to call on app launch.
 * Never throws.
 */
export async function pruneOlderThan(ttlMs: number): Promise<void> {
  try {
    const info = await FileSystem.getInfoAsync(TTS_CACHE_DIR);
    if (!info.exists) return;
    const names = await FileSystem.readDirectoryAsync(TTS_CACHE_DIR);
    const now = Date.now();
    await Promise.all(
      names.map(async (name) => {
        try {
          const uri = `${TTS_CACHE_DIR}${name}`;
          const fi = await FileSystem.getInfoAsync(uri);
          // modificationTime is in seconds since epoch when present
          const mtimeMs =
            fi.exists && fi.modificationTime ? fi.modificationTime * 1000 : 0;
          if (mtimeMs && now - mtimeMs > ttlMs) {
            await FileSystem.deleteAsync(uri, { idempotent: true });
          }
        } catch {
          // skip
        }
      }),
    );
  } catch {
    // best-effort
  }
}
