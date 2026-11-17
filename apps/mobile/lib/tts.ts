// Lafla — Text-to-speech wrapper (triple-mode, bundled-first).
//
// ARCHITECTURE
// ────────────
// Three backends, tried in order:
//
//   0. Bundled MP3 (Chatterbox-generated, ships in the iOS bundle).
//      • Pre-rendered offline by `tools/tts-generate.py` (open-source
//        Chatterbox TTS, run locally on the developer's GPU). One MP3
//        per (text, voiceId) pair, named by djb2(text + "|" + voiceId).
//      • Resolved at runtime via `AUDIO_INDEX` in `assets/audio/index.ts`,
//        which is a literal-keyed map of hash → `() => require("…")`. Metro
//        needs the require() call sites to be literal strings, hence the
//        generated index.
//      • Voice id is picked by `pickVoiceId()` below, which mirrors the
//        keyword priority list in `tools/tts-generate.py:VOICE_MAP`. If
//        you change one, change both.
//      • Zero network. Zero $. Instant playback. This is the path we
//        want users on >99% of the time.
//
//   1. Remote (ElevenLabs via our own Cloudflare Worker) — used for English text
//      when there's no bundled MP3 for the (text, voiceId) pair.
//      • Mobile app NEVER holds the ElevenLabs API key. It hits our Worker:
//          POST {extra.ttsEndpoint}/tts
//          Content-Type: application/json
//          Body:    { "text": string, "voiceId": string, "lang": string }
//          200 OK:  Content-Type: audio/mpeg   (raw MP3 bytes)
//          4xx/5xx: client falls back to expo-speech native synth
//      • On the client, the resulting MP3 is written to expo-file-system
//        (see lib/tts-cache.ts) keyed by hash(text + voiceId). Replays are
//        served from disk — instant, offline-capable, $0.
//
//   2. Native (expo-speech) — used for Turkish text, AND as a fallback when:
//      • No bundled MP3 and no `extra.ttsEndpoint`.
//      • Remote fetch fails / non-2xx.
//      • expo-av cannot decode the MP3.
//      Apple's on-device synth ("Siri voice") — vasat for English but solid
//      for Turkish, and a perfect last-resort so the app never goes silent.
//
// CACHE
// ─────
// On-disk MP3 cache for the remote path lives in lib/tts-cache.ts. The
// bundled path is in-bundle and needs no cache.
//
// SAFETY
// ──────
// Every async path is wrapped in try/catch. Errors NEVER bubble — the worst
// outcome is silent audio, and even that triggers the expo-speech fallback.

import * as Speech from "expo-speech";
import { Audio, AVPlaybackStatus } from "expo-av";
import Constants from "expo-constants";

import { AUDIO_INDEX } from "../assets/audio";
import {
  getCachedAudio,
  setCachedAudio,
  hashText,
  pruneOlderThan,
} from "./tts-cache";
import { resolveAccentLocale, type AccentId } from "./accent";
export type { AccentId } from "./accent";

// ─── config ───────────────────────────────────────────────────────────────

const TTS_ENDPOINT =
  (Constants.expoConfig?.extra?.ttsEndpoint as string | undefined) ?? "";
const DEFAULT_VOICE_ID =
  (Constants.expoConfig?.extra?.ttsVoiceId as string | undefined) ??
  "21m00Tcm4TlvDq8ikWAM"; // "Rachel" — sensible English default

const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const REQUEST_TIMEOUT_MS = 8000;

// 2026-05-20 — iOS sessizleştirme anahtarı (yan switch) açıkken default
// audio mode TTS'i susturuyor. Türk kullanıcı telefonunu hep sessizde
// tutar (sınıf/iş/metro); language-learning app'in DUYULMASI gerek.
// playsInSilentModeIOS: true → mute switch'i bypass et. allowsRecordingIOS
// false → record session'a düşmesin (mic perm prompt'unu erken tetiklemez).
// İlk speak() çağrısında bir kez set edilir; idempotent.
let _audioModeSet = false;
async function ensureAudioModeForTts(): Promise<void> {
  if (_audioModeSet) return;
  try {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: 1, // DoNotMix — ringer + media respect each other
      interruptionModeAndroid: 1, // DoNotMix
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
    _audioModeSet = true;
  } catch {
    // Best effort — bir cihaz hata verirse audio session default kalır,
    // bundled MP3 path zaten volume 1.0; en kötü sessiz modda susar.
  }
}

// Turkish-only characters — if any of these appear we route to expo-speech
// (Apple's Turkish synth is solid; ElevenLabs is English-only in this build).
const TURKISH_CHARS = /[çğışöüÇĞİŞÖÜ]/;

// ─── voice map (keep in sync with tools/tts-generate.py:VOICE_MAP) ───────
//
// First keyword hit wins. Haystack is `${npcRole} ${setting}`.toLowerCase().
// Same ordering and keyword list as the Python generator — that's the
// invariant that makes bundled lookup work.
type VoiceMapEntry = readonly [voiceId: string, keywords: readonly string[]];

const VOICE_MAP: readonly VoiceMapEntry[] = [
  ["vc_match", ["match", "match", "date", "flirt"]],
  ["vc_doctor", ["doctor", "dr.", "hospital", "clinic", "nurse", "pharmacy", "pharmacist"]],
  ["vc_service", ["barista", "waiter", "server", "cashier", "shop assistant", "store associate"]],
  ["vc_coach", ["coach", "trainer", " pt ", "gym"]],
  ["vc_boss", ["boss", "manager", "interviewer", "director", "examiner"]],
  ["vc_teacher", ["teacher", "professor", "tutor"]],
  ["vc_friend", ["friend", "buddy", "roommate", "colleague", "coworker"]],
  ["vc_family", ["family", "mom", "dad", "cousin", "sibling", "aunt", "uncle"]],
  ["vc_travel", ["pilot", "gate agent", "flight crew", "stewardess", "concierge"]],
];

const BUNDLED_DEFAULT_VOICE_ID = "vc_default";

/**
 * Pick the bundled-audio voice id for a (npcRole, setting) pair. Mirrors
 * `tools/tts-generate.py:pick_voice`. Returns `vc_default` when nothing
 * matches.
 */
export function pickVoiceId(npcRole?: string, setting?: string): string {
  const haystack = `${npcRole ?? ""} ${setting ?? ""}`.toLowerCase();
  for (const [voiceId, keywords] of VOICE_MAP) {
    for (const kw of keywords) {
      if (haystack.includes(kw)) return voiceId;
    }
  }
  return BUNDLED_DEFAULT_VOICE_ID;
}

// ─── module-level playback state ──────────────────────────────────────────

let currentSound: Audio.Sound | null = null;
let lastUtterance: string | null = null;
let playbackToken = 0; // monotonic — invalidates stale async loads

// ─── public API ───────────────────────────────────────────────────────────

export type SpeakOpts = {
  lang?: "en-US" | "tr-TR";
  rate?: number;
  voiceId?: string;
  /** NPC role for bundled-voice lookup (e.g. "Match", "Doctor"). */
  npcRole?: string;
  /** Scene/setting hint that augments voice picking (e.g. "Asking out"). */
  setting?: string;
  /** Native English accent used by the Accent Lab. */
  accent?: AccentId;
};

/**
 * Speak a phrase. Returns a promise that resolves once playback has been
 * scheduled (NOT when audio finishes). Never rejects.
 *
 * Resolution order:
 *  • Same phrase re-tapped → stop (toggle).
 *  • Otherwise, in priority order:
 *      1. Bundled MP3 (Chatterbox-rendered, hashed by djb2(text|voiceId)).
 *      2. Remote ElevenLabs via Worker (English only, if endpoint set).
 *      3. expo-speech / Apple Siri (Turkish always, English last resort).
 */
export async function speak(text: string, opts?: SpeakOpts): Promise<boolean> {
  if (!text || !text.trim()) return false;

  // iOS sessizleştirme switch'i + audio session config — 2026-05-20 bug fix.
  // İlk speak() çağrısında bir kez set edilir, sonrakilerde no-op.
  await ensureAudioModeForTts();

  const lang = opts?.lang ?? (TURKISH_CHARS.test(text) ? "tr-TR" : "en-US");
  const rate = opts?.rate ?? 0.95;
  const accent = opts?.accent ?? "american";
  const playbackKey = `${text}|${lang}|${accent}`;
  // For the BUNDLED path we resolve a Chatterbox voice id by role/setting.
  // For the REMOTE path we still use the ElevenLabs voice id from extras.
  const bundledVoiceId = opts?.voiceId ?? pickVoiceId(opts?.npcRole, opts?.setting);
  const remoteVoiceId = DEFAULT_VOICE_ID;

  // Toggle: same phrase re-tapped → stop and bail.
  if (lastUtterance === playbackKey) {
    await stopAsync();
    return true;
  }

  // Always stop whatever's playing before starting something new.
  await stopAsync();
  lastUtterance = playbackKey;

  const myToken = ++playbackToken;

  // Accent Lab must use the device's locale-specific native voice. Bundled
  // and remote files are single-voice assets and would fake accent variety.
  if (lang !== "tr-TR" && accent !== "american") {
    return speakNative(
      text,
      resolveAccentLocale(accent),
      accent === "international" ? Math.min(rate, 0.9) : rate,
      playbackKey,
    );
  }

  // 0. Bundled MP3 lookup — tried for BOTH languages, since Chatterbox can
  // render Turkish too if we ever ship Turkish bundled audio. The index is
  // hash-keyed; a miss is cheap (one object lookup).
  const bundledHash = hashText(text, bundledVoiceId);
  const bundledLoader = AUDIO_INDEX[bundledHash];
  if (bundledLoader) {
    try {
      const ok = await playBundledModule(bundledLoader, myToken);
      if (ok) return true;
    } catch {
      // fall through
    }
  }

  // Turkish → native synth (no remote round-trip).
  if (lang === "tr-TR") {
    return speakNative(text, lang, rate, playbackKey);
  }

  // English + endpoint configured → try the premium remote path.
  if (TTS_ENDPOINT) {
    try {
      const uri = await resolveMp3Uri(text, remoteVoiceId, lang);
      if (myToken !== playbackToken) return true; // superseded by newer audio
      if (uri) {
        const ok = await playLocalMp3(uri, myToken);
        if (ok) return true;
      }
    } catch {
      // fall through to native
    }
  }

  // Last resort: expo-speech.
  if (myToken !== playbackToken) return true;
  return speakNative(text, lang, rate, playbackKey);
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
  // 2026-05-26 (P1-D fix) — Status update callback'i unload öncesi sök.
  // Eski sound dispose edilirken iOS expo-av didJustFinish event'ini hâlâ
  // tetikleyebiliyor; o sırada stale closure içindeki `currentSound === sound`
  // identity check'i artık yeni sound objesine bakıyor olabilir → callback
  // yeni sound'un currentSound referansını null'lar → sonraki stop()/replay
  // no-op olur. Callback'i null'a set ederek bu race'i tamamen kesiyoruz.
  try {
    s.setOnPlaybackStatusUpdate(null);
  } catch {
    /* ignore */
  }
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

/**
 * Play a bundled MP3 produced by `require("./assets/audio/<voiceId>/<hash>.mp3")`.
 * The argument is the lazy loader from AUDIO_INDEX so we don't materialise
 * every module up front.
 */
async function playBundledModule(
  loader: () => unknown,
  token: number,
): Promise<boolean> {
  try {
    const mod = loader();
    const { sound } = await Audio.Sound.createAsync(
      mod as Parameters<typeof Audio.Sound.createAsync>[0],
      { shouldPlay: true, volume: 1.0 },
    );
    if (token !== playbackToken) {
      try {
        await sound.unloadAsync();
      } catch {
        /* ignore */
      }
      return true; // superseded, not failed
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

function speakNative(
  text: string,
  lang: string,
  rate: number,
  playbackKey: string,
): Promise<boolean> {
  return new Promise((resolve) => {
    let settled = false;
    let fallbackTimer: ReturnType<typeof setTimeout>;
    const settle = (started: boolean) => {
      if (settled) return;
      settled = true;
      clearTimeout(fallbackTimer);
      resolve(started);
    };

    // Older native speech implementations may omit onStart. If no error
    // arrives promptly, consider the successfully scheduled utterance started.
    fallbackTimer = setTimeout(() => settle(true), 750);

    try {
      Speech.stop();
      Speech.speak(text, {
        language: lang,
        rate,
        pitch: 1.0,
        onStart: () => settle(true),
        onDone: () => {
          settle(true);
          if (lastUtterance === playbackKey) lastUtterance = null;
        },
        onStopped: () => {
          settle(true);
          if (lastUtterance === playbackKey) lastUtterance = null;
        },
        onError: () => {
          settle(false);
          if (lastUtterance === playbackKey) lastUtterance = null;
        },
      });
    } catch {
      if (lastUtterance === playbackKey) lastUtterance = null;
      settle(false);
    }
  });
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
