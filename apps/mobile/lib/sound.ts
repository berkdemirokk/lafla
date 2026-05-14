// Lafla — Sound effects manager.
// Pairs with haptic feedback in ./feedback.ts (e.g. playSound('correct')
// alongside hapticSuccess()).
//
// Defensive design:
//  - expo-av is loaded via try/require so the module doesn't crash if the
//    dependency is missing (it may only be transitively available).
//  - Every public function NO-OPs gracefully if loading/playing fails or the
//    platform is unsupported (web SSR, etc.).
//  - User preference persists in AsyncStorage under `lafla.settings.sound`
//    (default: enabled).
//  - Loaded Audio.Sound instances are cached per-name to avoid re-decoding
//    on each call.

import AsyncStorage from "@react-native-async-storage/async-storage";

export type SoundName =
  | "correct"
  | "wrong"
  | "levelup"
  | "click"
  | "streak_save"
  | "whoosh";

const K_SOUND_ENABLED = "lafla.settings.sound";
const DEFAULT_ENABLED = true;

// --- expo-av: optional, lazy ---------------------------------------------

// Loosely typed so we don't pull a real type dependency on expo-av.
type AudioModule = {
  Sound: {
    createAsync: (
      source: number,
      initialStatus?: Record<string, unknown>,
    ) => Promise<{ sound: AudioSoundInstance }>;
  };
  setAudioModeAsync?: (mode: Record<string, unknown>) => Promise<void>;
};

type AudioSoundInstance = {
  playAsync: () => Promise<unknown>;
  stopAsync: () => Promise<unknown>;
  setPositionAsync: (millis: number) => Promise<unknown>;
  replayAsync: () => Promise<unknown>;
  unloadAsync: () => Promise<unknown>;
  setStatusAsync?: (status: Record<string, unknown>) => Promise<unknown>;
};

let audioModule: AudioModule | null = null;
let audioModuleResolved = false;

function getAudio(): AudioModule | null {
  if (audioModuleResolved) return audioModule;
  audioModuleResolved = true;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("expo-av");
    if (mod && mod.Audio && mod.Audio.Sound) {
      audioModule = mod.Audio as AudioModule;
    } else {
      audioModule = null;
    }
  } catch {
    audioModule = null;
  }
  return audioModule;
}

// --- Asset map (static requires so Metro can bundle them) ----------------
//
// IMPORTANT: require() arguments must be string literals — they cannot be
// computed at runtime — so we map them up-front. If the file is missing the
// require will throw at module load; we catch that lazily on first use.

function loadAssetMap(): Partial<Record<SoundName, number>> {
  const map: Partial<Record<SoundName, number>> = {};
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    map.correct = require("../assets/sounds/correct.m4a");
  } catch {
    /* asset missing — playSound('correct') will NO-OP */
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    map.wrong = require("../assets/sounds/wrong.m4a");
  } catch {
    /* */
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    map.levelup = require("../assets/sounds/levelup.m4a");
  } catch {
    /* */
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    map.click = require("../assets/sounds/click.m4a");
  } catch {
    /* */
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    map.streak_save = require("../assets/sounds/streak_save.m4a");
  } catch {
    /* */
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    map.whoosh = require("../assets/sounds/whoosh.m4a");
  } catch {
    /* */
  }
  return map;
}

let assetMap: Partial<Record<SoundName, number>> | null = null;
function getAssetMap(): Partial<Record<SoundName, number>> {
  if (!assetMap) assetMap = loadAssetMap();
  return assetMap;
}

// --- Preference cache (in-memory) ----------------------------------------
// Sync `isSoundEnabled()` returns the last-known value. We hydrate from
// AsyncStorage on first import; until then we report the default.

let enabledCache: boolean = DEFAULT_ENABLED;
let hydratedPromise: Promise<void> | null = null;

function hydrate(): Promise<void> {
  if (hydratedPromise) return hydratedPromise;
  hydratedPromise = (async () => {
    try {
      const v = await AsyncStorage.getItem(K_SOUND_ENABLED);
      if (v === "true") enabledCache = true;
      else if (v === "false") enabledCache = false;
      // null/anything else: keep default
    } catch {
      // keep cached default
    }
  })();
  return hydratedPromise;
}

// Kick off hydration eagerly so most callers see the persisted value.
void hydrate();

// --- Sound instance cache ------------------------------------------------

const instanceCache: Partial<Record<SoundName, AudioSoundInstance>> = {};
const inflightLoads: Partial<Record<SoundName, Promise<AudioSoundInstance | null>>> = {};

async function getSoundInstance(name: SoundName): Promise<AudioSoundInstance | null> {
  const cached = instanceCache[name];
  if (cached) return cached;

  const inflight = inflightLoads[name];
  if (inflight) return inflight;

  const audio = getAudio();
  if (!audio) return null;

  const assets = getAssetMap();
  const source = assets[name];
  if (source === undefined) return null;

  const p = (async () => {
    try {
      const { sound } = await audio.Sound.createAsync(source, { shouldPlay: false });
      instanceCache[name] = sound;
      return sound;
    } catch {
      return null;
    } finally {
      delete inflightLoads[name];
    }
  })();
  inflightLoads[name] = p;
  return p;
}

// --- Public API ----------------------------------------------------------

/** Play a sound effect by name. NO-OPs if disabled, asset missing, or audio
 *  module unavailable. Never throws. */
export async function playSound(name: SoundName): Promise<void> {
  try {
    // Ensure the hydrated preference is loaded before deciding.
    await hydrate();
    if (!enabledCache) return;

    const sound = await getSoundInstance(name);
    if (!sound) return;

    // Rewind + play so rapid repeated calls each trigger a fresh playback.
    try {
      await sound.stopAsync();
    } catch {
      /* may not be playing yet */
    }
    try {
      await sound.setPositionAsync(0);
    } catch {
      /* */
    }
    try {
      await sound.playAsync();
    } catch {
      // As a last resort, try replayAsync (some platforms prefer it).
      try {
        await sound.replayAsync();
      } catch {
        /* give up silently */
      }
    }
  } catch {
    /* fully defensive — never throw out of playSound */
  }
}

/** Persist & cache the user preference. */
export async function setSoundEnabled(enabled: boolean): Promise<void> {
  enabledCache = enabled;
  try {
    await AsyncStorage.setItem(K_SOUND_ENABLED, enabled ? "true" : "false");
  } catch {
    /* preference will still apply for this session */
  }
}

/** Synchronous read of the last-known preference. Defaults to `true` until
 *  AsyncStorage hydration completes. */
export function isSoundEnabled(): boolean {
  return enabledCache;
}

/** Optional: free cached Audio.Sound instances. Safe to call any time. */
export async function unloadAllSounds(): Promise<void> {
  const names = Object.keys(instanceCache) as SoundName[];
  for (const n of names) {
    const inst = instanceCache[n];
    if (!inst) continue;
    try {
      await inst.unloadAsync();
    } catch {
      /* */
    }
    delete instanceCache[n];
  }
}
