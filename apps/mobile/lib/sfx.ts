// Lafla — Sound effects (SFX) library.
//
// PURPOSE
// ───────
// Subtle audio cues that elevate the app from "free" to "premium feel."
// Played in addition to haptics (haptics + sfx pair at the call site).
//
// SOUND DESIGN BRIEF
// ──────────────────
// Each clip is short and intentional. The brief below is the source of truth
// for the sound designer / freesound.org search.
//
//   • swipe_skip   — short whoosh, 100-150ms, soft falling, mid frequency.
//                    Fired when a card / scene is dismissed without entering it.
//                    Feeling: "passing by", not failure.
//
//   • swipe_enter  — short upward chirp + tactile pop, 150-200ms, with
//                    subtle musical resolution. Fired when the learner
//                    commits to a card / scene.
//                    Feeling: "engaging", small forward momentum.
//
//   • score_low    — gentle descending two-note (~280ms), NO negativity.
//                    Fired on a low pronunciation / exercise score.
//                    Feeling: "let's try again", warm not punishing.
//
//   • score_mid    — neutral single tone (~200ms).
//                    Fired on a middle-band score.
//                    Feeling: "ok, noted", informational.
//
//   • score_high   — rising 3-note arpeggio (~400ms), satisfying resolution.
//                    Fired on a high score.
//                    Feeling: "yes!", small win.
//
//   • achievement  — shimmer + brief sparkle (~600ms), feels rewarding but
//                    not loud. Fired on unlocking a badge / quest completion.
//                    Feeling: "earned", surprise without fanfare.
//
//   • level_up     — bigger version of achievement, with a final hold
//                    (~800ms). Fired on level / streak milestone.
//                    Feeling: "milestone", richer payoff. The ONLY sfx
//                    allowed to feel "rich" (slight reverb tail, stereo).
//
//   • tap_soft     — imperceptibly short pop (60-80ms), used for button
//                    taps in onboarding. The highest-frequency sfx — must
//                    have zero personality or it will fatigue fast.
//
// RELATIONSHIP TO HAPTICS
// ───────────────────────
// `lib/feedback.ts` exposes hapticImpact / hapticSelection / hapticSuccess.
// SFX and haptics are deliberately NOT merged. Call sites pair them
// explicitly so each surface can opt in / out independently. Example:
//
//     import { hapticSuccess } from "@/lib/feedback";
//     import { playSfx } from "@/lib/sfx";
//
//     hapticSuccess();
//     playSfx("score_high");
//
// This also lets a user mute SFX while keeping haptics on (and vice versa).
//
// ASSETS
// ──────
// Files are NOT yet in the repo. They will live at
// `assets/sfx/<id>.mp3` (mono, 44.1 kHz, 128 kbps, normalized to -16 LUFS).
// Until they exist, `playSfx()` silently no-ops (the `require()` is wrapped
// in a try/catch — a missing asset never crashes the app).
//
// SAFETY
// ──────
// Every public function is wrapped so it never throws. Worst case: silence.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio, type AVPlaybackSource } from "expo-av";

// ─── public types ─────────────────────────────────────────────────────────

export type SfxId =
  | "swipe_skip"
  | "swipe_enter"
  | "score_low"
  | "score_mid"
  | "score_high"
  | "achievement"
  | "level_up"
  | "tap_soft";

// ─── constants ────────────────────────────────────────────────────────────

const ALL_IDS: readonly SfxId[] = [
  "swipe_skip",
  "swipe_enter",
  "score_low",
  "score_mid",
  "score_high",
  "achievement",
  "level_up",
  "tap_soft",
] as const;

const ENABLED_KEY = "lafla.sfx.enabled";

// ─── asset registry ───────────────────────────────────────────────────────
//
// `require()` is statically resolved by Metro at bundle time. If a file is
// missing, the bundler emits an error and we'd never get this far in dev —
// BUT for production safety (and to let us ship with no assets at all yet),
// we wrap each lookup in a try/catch. Each entry resolves lazily so a single
// missing file can't take down the rest of the module.
//
// As assets land, the bundler picks them up automatically — no code edits
// needed.
function loadSource(id: SfxId): AVPlaybackSource | null {
  try {
    switch (id) {
      case "swipe_skip":
        return require("../assets/sfx/swipe_skip.mp3");
      case "swipe_enter":
        return require("../assets/sfx/swipe_enter.mp3");
      case "score_low":
        return require("../assets/sfx/score_low.mp3");
      case "score_mid":
        return require("../assets/sfx/score_mid.mp3");
      case "score_high":
        return require("../assets/sfx/score_high.mp3");
      case "achievement":
        return require("../assets/sfx/achievement.mp3");
      case "level_up":
        return require("../assets/sfx/level_up.mp3");
      case "tap_soft":
        return require("../assets/sfx/tap_soft.mp3");
    }
  } catch {
    // Asset missing on disk — silent no-op for this id.
    return null;
  }
}

// ─── module-level state ───────────────────────────────────────────────────

// Per-id preloaded Sound. `undefined` = not attempted yet, `null` = attempted
// but the asset is missing or load failed (so we don't keep retrying).
const pool: Partial<Record<SfxId, Audio.Sound | null>> = {};

// The most recently triggered sfx instance. We track it so the next play()
// can cancel-and-replace (no queuing).
let currentSfx: Audio.Sound | null = null;

// Cached enabled-state. `null` = not yet read from AsyncStorage.
let enabledCache: boolean | null = null;

// Guard so preloadSfx() only runs once.
let preloadPromise: Promise<void> | null = null;

// ─── enabled-state persistence ────────────────────────────────────────────

export async function isSfxEnabled(): Promise<boolean> {
  if (enabledCache !== null) return enabledCache;
  try {
    const raw = await AsyncStorage.getItem(ENABLED_KEY);
    // Default = true. Only the literal string "false" disables.
    enabledCache = raw === "false" ? false : true;
  } catch {
    enabledCache = true;
  }
  return enabledCache;
}

export async function setSfxEnabled(enabled: boolean): Promise<void> {
  enabledCache = enabled;
  try {
    await AsyncStorage.setItem(ENABLED_KEY, enabled ? "true" : "false");
  } catch {
    // Persistence failed — in-memory cache still applies for this session.
  }
}

// ─── preload ──────────────────────────────────────────────────────────────

/**
 * Preload every sfx into memory. Optional but recommended at app boot —
 * cuts first-play latency from ~150ms (load + decode) to <10ms (replay).
 * Safe to call multiple times: subsequent calls share the first promise.
 */
export function preloadSfx(): Promise<void> {
  if (preloadPromise) return preloadPromise;
  preloadPromise = (async () => {
    // 2026-05-26 (P0-1 fix) — setAudioModeAsync ÇAĞRILMIYOR artık.
    // Önceki versiyon `playsInSilentModeIOS: false` yazıyordu → tts.ts'in
    // ayarladığı `true`'yu eziyor → sahne içinde sfx çalınca TTS sustu.
    // Global audio mode SADECE tts.ts'te set ediliyor; sfx ses default
    // davranışı (sessizde sus) per-sound iOS native ile kontrol edilir.

    await Promise.all(
      ALL_IDS.map(async (id) => {
        if (id in pool) return;
        const src = loadSource(id);
        if (!src) {
          pool[id] = null;
          return;
        }
        try {
          const { sound } = await Audio.Sound.createAsync(src, {
            shouldPlay: false,
            volume: 1.0,
          });
          pool[id] = sound;
        } catch {
          pool[id] = null;
        }
      }),
    );
  })();
  return preloadPromise;
}

// ─── play ─────────────────────────────────────────────────────────────────

/**
 * Play a sfx. Never throws, never rejects.
 *
 * Semantics:
 *  • If sfx is disabled in settings → silent no-op.
 *  • If the asset file is missing → silent no-op (does NOT crash).
 *  • If another sfx is currently playing → stop it, play the new one (no queue).
 *  • If preloadSfx() was not called, the first play of each id loads on demand.
 */
export async function playSfx(id: SfxId): Promise<void> {
  try {
    if (!(await isSfxEnabled())) return;

    // Ensure the requested clip is loaded (lazy path for callers that
    // skipped preloadSfx()).
    let sound = pool[id];
    if (sound === undefined) {
      const src = loadSource(id);
      if (!src) {
        pool[id] = null;
        return;
      }
      try {
        const created = await Audio.Sound.createAsync(src, {
          shouldPlay: false,
          volume: 1.0,
        });
        sound = created.sound;
        pool[id] = sound;
      } catch {
        pool[id] = null;
        return;
      }
    }
    if (sound === null) return; // asset missing or load failed previously

    // Cancel-and-replace: if another sfx is mid-flight, stop it before
    // starting the new one. We use `stopAsync` (not `unload`) because the
    // pool keeps the Sound instance alive for the next replay.
    if (currentSfx && currentSfx !== sound) {
      const prev = currentSfx;
      currentSfx = null;
      prev.stopAsync().catch(() => undefined);
    }

    currentSfx = sound;
    // `replayAsync` rewinds and plays — cheaper than `playFromPositionAsync(0)`.
    await sound.replayAsync().catch(() => undefined);
  } catch {
    // Total catch — playback failures must never bubble.
  }
}
