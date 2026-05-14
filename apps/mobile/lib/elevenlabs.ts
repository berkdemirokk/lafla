// Lafla — ElevenLabs premium TTS helper.
// Fetches high-quality native-sounding English audio from ElevenLabs and caches
// the resulting MP3 on-device so repeat phrases never hit the network twice.
//
// Returns a local file:// URI on success, or null on any failure (missing API
// key, network error, cache write error, etc.). Caller is expected to fall
// back to expo-speech via lib/tts.ts when null is returned.

import { getCachedPath, storeCached } from "./audio-cache";

export type ElevenLabsVoice = "rachel" | "adam" | "bella" | "antoni";

const VOICE_IDS: Record<ElevenLabsVoice, string> = {
  rachel: "21m00Tcm4TlvDq8ikWAM",
  adam: "pNInz6obpgDQGcFmaJgB",
  bella: "EXAVITQu4vr4xnSDxMaL",
  antoni: "ErXwobaYiN019PkySvjV",
};

const DEFAULT_VOICE: ElevenLabsVoice = "rachel";
const API_BASE = "https://api.elevenlabs.io/v1/text-to-speech";
const MODEL_ID = "eleven_multilingual_v2"; // good English + handles TR-accented copy gracefully

function getApiKey(): string | null {
  // EXPO_PUBLIC_* vars are inlined at build time by Expo.
  const key = process.env.EXPO_PUBLIC_ELEVENLABS_KEY;
  return key && key.length > 0 ? key : null;
}

/**
 * Produce a stable, filesystem-safe cache key for a given (voice, text) pair.
 * We use a lightweight non-cryptographic hash (FNV-1a 32-bit) — collisions are
 * effectively impossible at app-scale cardinality and we don't need crypto.
 */
function cacheKey(voice: ElevenLabsVoice, text: string): string {
  const normalized = text.trim().toLowerCase();
  return `${voice}:${fnv1a(normalized)}`;
}

function fnv1a(input: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    // 32-bit FNV prime multiplication, kept in unsigned range.
    hash = (hash + ((hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24))) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

/**
 * Resolve `text` to a local MP3 file URI, fetching + caching on first call.
 *
 * @param text  English phrase to synthesize. Trimmed; empty input returns null.
 * @param voice One of the 4 supported voices. Defaults to 'rachel'.
 * @returns file:// URI string, or null if synthesis was skipped/failed.
 */
export async function synthesize(
  text: string,
  voice: ElevenLabsVoice = DEFAULT_VOICE,
): Promise<string | null> {
  const trimmed = (text ?? "").trim();
  if (!trimmed) return null;

  const voiceId = VOICE_IDS[voice] ?? VOICE_IDS[DEFAULT_VOICE];
  const key = cacheKey(voice, trimmed);

  // 1. Cache hit — return immediately, no network.
  try {
    const cached = await getCachedPath(key);
    if (cached) return cached;
  } catch {
    // Treat lookup errors the same as a miss.
  }

  // 2. Need to call the API — bail if we have no key.
  const apiKey = getApiKey();
  if (!apiKey) return null;

  // 3. Fetch from ElevenLabs.
  let response: Response;
  try {
    response = await fetch(`${API_BASE}/${voiceId}`, {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text: trimmed,
        model_id: MODEL_ID,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.0,
          use_speaker_boost: true,
        },
      }),
    });
  } catch {
    return null; // network error
  }

  if (!response.ok) {
    // 401 (bad key), 422 (validation), 429 (quota), 5xx — all surface as null.
    return null;
  }

  let bytes: ArrayBuffer;
  try {
    bytes = await response.arrayBuffer();
  } catch {
    return null;
  }
  if (!bytes || bytes.byteLength === 0) return null;

  // 4. Persist to cache. If the cache write fails we still can't easily play
  // raw bytes from memory through expo-av, so we treat that as a soft failure.
  try {
    const uri = await storeCached(key, bytes);
    return uri;
  } catch {
    return null;
  }
}

/** Exposed for tests / debugging — list of supported voice keys. */
export const VOICES: ElevenLabsVoice[] = ["rachel", "adam", "bella", "antoni"];
