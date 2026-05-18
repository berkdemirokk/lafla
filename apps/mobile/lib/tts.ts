// Lafla — Text-to-speech wrapper (dual-mode).
//
// ARCHITECTURE
// ────────────
// Two backends, picked at call time:
//
//   1. Remote (ElevenLabs via our own Cloudflare Worker) — used for English text.
//      • Mobile app NEVER holds the ElevenLabs API key. It hits our Worker:
//          POST {extra.ttsEndpoint}/tts
//          Content-Type: application/json
//          Body:    { "text": string, "voiceId": string, "lang": string }
//          200 OK:  Content-Type: audio/mpeg   (raw MP3 bytes)
//          4xx/5xx: client falls back to expo-speech native synth
//      • Worker holds the studio API key, calls
//          ElevenLabs `/v1/text-to-speech/{voice_id}`,
//        and pipes the MP3 back as `audio/mpeg`. It may apply request-side
//        caching, per-user quotas, and rate-limiting.
//      • On the client, the resulting MP3 is written to expo-file-system
//        (see lib/tts-cache.ts) keyed by hash(text + voiceId). Replays are
//        served from disk — instant, offline-capable, $0.
//
//   2. Native (expo-speech) — used for Turkish text, AND as a fallback when:
//      • extra.ttsEndpoint is empty (no Worker configured yet — the default)
//      • Network request fails / non-2xx
//      • expo-av cannot decode the MP3
//      Apple's on-device synth ("Siri voice") — vasat for English but solid
//      for Turkish, and a perfect last-resort so the app never goes silent.
//
// ENABLING ELEVENLABS
// ───────────────────
// Set the Worker URL in app.json:
//
//   "extra": {
//     "ttsEndpoint": "https://lafla-tts.workers.dev",
//     "ttsVoiceId":  "21m00Tcm4TlvDq8ikWAM"   // "Rachel" — English-US, default
//   }
//
// Leaving `ttsEndpoint` empty means the app behaves identically to the
// original expo-speech-only build — required for safe rollout.
//
// CACHE
// ─────
// On-disk MP3 cache lives in lib/tts-cache.ts. This file only orchestrates
// fetch → store → play.
//
// SAFETY
// ──────
// Every async path is wrapped in try/catch. Errors NEVER bubble — the worst
// outcome is silent audio, and even that triggers the expo-speech fallback.

import * as Speech from "expo-speech";
import { Audio, AVPlaybackStatus } from "expo-av";
import Constants from "expo-constants";

import {
  getCachedAudio,
  setCachedAudio,
  hashText,
  pruneOlderThan,
} from "./tts-cache";

// ─── config ───────────────────────────────────────────────────────────────

const TTS_ENDPOINT =
  (Constants.expoConfig?.extra?.ttsEndpoint as string | undefined) ?? "";
const DEFAULT_VOICE_ID =
  (Constants.expoConfig?.extra?.ttsVoiceId as string | undefined) ??
  "21m00Tcm4TlvDq8ikWAM"; // "Rachel" — sensible English default

const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const REQUEST_TIMEOUT_MS = 8000;

// Turkish-only characters — if any of these appear we route to expo-speech
// (Apple's Turkish synth is solid; ElevenLabs is English-only in this build).
const TURKISH_CHARS = /[çğışöüÇĞİŞÖÜ]/;

// ─── module-level playback state ──────────────────────────────────────────

let currentSound: Audio.Sound | null = null;
let lastUtterance: string | null = null;
let playbackToken = 0; // monotonic — invalidates stale async loads

// ─── public API ───────────────────────────────────────────────────────────

export type SpeakOpts = {
  lang?: "en-US" | "tr-TR";
  rate?: number;
  voiceId?: string;
};

/**
 * Speak a phrase. Returns a promise that resolves once playback has been
 * scheduled (NOT when audio finishes). Never rejects.
 *
 * Behaviour:
 *  • Tapping the same phrase twice while it's playing → stop (toggle).
 *  • Tapping a different phrase → stop the current one and play the new one.
 *  • Turkish text → expo-speech (Apple TR voice).
 *  • English text + ttsEndpoint set → ElevenLabs MP3 (cached on disk).
 *  • Any failure on the remote path → expo-speech fallback.
 */
export async function speak(text: string, opts?: SpeakOpts): Promise<void> {
  if (!text || !text.trim()) return;

  const lang = opts?.lang ?? (TURKISH_CHARS.test(text) ? "tr-TR" : "en-US");
  const rate = opts?.rate ?? 0.95;
  const voiceId = opts?.voiceId ?? DEFAULT_VOICE_ID;

  // Toggle: same phrase re-tapped → stop and bail.
  if (lastUtterance === text) {
    await stopAsync();
    return;
  }

  // Always stop whatever's playing before starting something new.
  await stopAsync();
  lastUtterance = text;

  const myToken = ++playbackToken;

  // Turkish → native synth (no remote round-trip).
  if (lang === "tr-TR") {
    speakNative(text, lang, rate);
    return;
  }

  // English + endpoint configured → try the premium path.
  if (TTS_ENDPOINT) {
    try {
      const uri = await resolveMp3Uri(text, voiceId, lang);
      if (myToken !== playbackToken) return; // user moved on
      if (uri) {
        const ok = await playLocalMp3(uri, myToken);
        if (ok) return;
      }
    } catch {
      // fall through to native
    }
  }

  // Fallback: expo-speech.
  if (myToken !== playbackToken) return;
  speakNative(text, lang, rate);
}

/** Stop any currently-playing audio (remote MP3 or native synth). */
export function stop(): void {
  // fire-and-forget the async cleanup; sync surface for legacy call sites.
  void stopAsync();
}

/**
 * Delete cached MP3s older than 30 days. Safe to call on app launch; never
 * throws. Kept as a named export for backwards compatibility with any
 * existing bootstrap code.
 */
export async function pruneTtsCache(): Promise<void> {
  await pruneOlderThan(CACHE_TTL_MS);
}

// ─── remote fetch + cache ─────────────────────────────────────────────────

/**
 * Returns a local file:// URI for the MP3 of `text`. Tries disk cache first,
 * then fetches from the Worker and writes through. Returns null on failure.
 */
async function resolveMp3Uri(
  text: string,
  voiceId: string,
  lang: string,
): Promise<string | null> {
  if (!TTS_ENDPOINT) return null;

  const key = hashText(text, voiceId);

  // 1. Disk hit → return immediately.
  const cached = await getCachedAudio(key);
  if (cached) return cached;

  // 2. Network fetch with timeout. RN's fetch hangs on dropped Wi-Fi without
  // an AbortController, so this is non-negotiable.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(`${TTS_ENDPOINT.replace(/\/$/, "")}/tts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({ text, voiceId, lang }),
      signal: controller.signal,
    });

    if (!res.ok) return null;

    const buf = await res.arrayBuffer();
    if (!buf || buf.byteLength === 0) return null;

    return await setCachedAudio(key, buf);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// ─── playback helpers ─────────────────────────────────────────────────────

async function unloadCurrentSound(): Promise<void> {
  const s = currentSound;
  currentSound = null;
  if (!s) return;
  try {
    await s.stopAsync();
  } catch {
    /* ignore */
  }
  try {
    await s.unloadAsync();
  } catch {
    /* ignore */
  }
}

async function playLocalMp3(uri: string, token: number): Promise<boolean> {
  try {
    const { sound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: true, volume: 1.0 },
    );
    // If a newer call already superseded us, drop this load on the floor.
    if (token !== playbackToken) {
      try {
        await sound.unloadAsync();
      } catch {
        /* ignore */
      }
      return true; // we were superseded, not failed
    }
    currentSound = sound;
    sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
      if (!status.isLoaded) return;
      if (status.didJustFinish) {
        if (currentSound === sound) currentSound = null;
        if (lastUtterance && token === playbackToken) lastUtterance = null;
        sound.unloadAsync().catch(() => undefined);
      }
    });
    return true;
  } catch {
    return false;
  }
}

// ─── fallback: native expo-speech ─────────────────────────────────────────

function speakNative(text: string, lang: string, rate: number): void {
  try {
    Speech.stop();
    Speech.speak(text, {
      language: lang,
      rate,
      pitch: 1.0,
      onDone: () => {
        if (lastUtterance === text) lastUtterance = null;
      },
      onStopped: () => {
        if (lastUtterance === text) lastUtterance = null;
      },
      onError: () => {
        if (lastUtterance === text) lastUtterance = null;
      },
    });
  } catch {
    // last-resort: even Speech.speak threw — give up silently
  }
}

async function stopAsync(): Promise<void> {
  playbackToken++; // invalidate any in-flight fetch → won't auto-play
  lastUtterance = null;
  try {
    Speech.stop();
  } catch {
    /* ignore */
  }
  await unloadCurrentSound();
}
