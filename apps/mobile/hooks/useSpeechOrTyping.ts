// useSpeechOrTyping — single source of truth for whether the speech or
// typing path is active for a given user/session.
//
// Decision flow:
//   1. On mount, load any previously persisted preference under
//      `lafla.stt.preference` ("speech" | "typing"). This is the user's
//      *expressed* intent — they actively switched modes at least once.
//   2. Probe the device with detectSTTCapability().
//   3. Resolve a final mode:
//        - If preference === "typing": always typing.
//        - If preference === "speech" AND cap.available: speech.
//        - If preference === "speech" BUT cap.available === false:
//            fall back to typing (and don't override their stored
//            preference — they may upgrade iOS and want speech back).
//        - If no preference: speech if available, else typing.
//   4. Expose switchToTyping() / switchToSpeech() which:
//        - Update the local mode immediately for responsive UI.
//        - Persist the new preference so it sticks across launches.
//        - switchToSpeech() is a no-op if capability says it's not
//          available — UI should guard against ever calling it, but
//          we double-check defensively.
//
// AsyncStorage failures are swallowed (and logged in dev only) — they
// degrade the persistence contract to "session-only", which is the
// right behaviour given we never want a storage glitch to block a
// learning session.

import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  detectSTTCapability,
  type STTCapability,
} from "../lib/stt-fallback";

const K_PREFERENCE = "lafla.stt.preference";

export type SpeechMode = "speech" | "typing" | "loading";
type StoredPreference = "speech" | "typing" | null;

export interface UseSpeechOrTyping {
  mode: SpeechMode;
  capability: STTCapability | null;
  switchToTyping: () => void;
  switchToSpeech: () => void;
}

async function readPreference(): Promise<StoredPreference> {
  try {
    const raw = await AsyncStorage.getItem(K_PREFERENCE);
    if (raw === "speech" || raw === "typing") return raw;
    return null;
  } catch {
    return null;
  }
}

async function writePreference(pref: StoredPreference): Promise<void> {
  try {
    if (pref === null) {
      await AsyncStorage.removeItem(K_PREFERENCE);
    } else {
      await AsyncStorage.setItem(K_PREFERENCE, pref);
    }
  } catch {
    // Persistence is best-effort.
  }
}

/**
 * Resolve the active mode given a stored preference + detected
 * capability. Pure function so it can be reused in tests if needed.
 */
function resolveMode(
  pref: StoredPreference,
  cap: STTCapability,
): "speech" | "typing" {
  if (pref === "typing") return "typing";
  if (pref === "speech") return cap.available ? "speech" : "typing";
  return cap.available ? "speech" : "typing";
}

export function useSpeechOrTyping(): UseSpeechOrTyping {
  const [mode, setMode] = useState<SpeechMode>("loading");
  const [capability, setCapability] = useState<STTCapability | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // Run detection + preference read in parallel — they don't
      // depend on each other and shaving a few ms off the splash
      // is worth the cheap Promise.all here.
      const [pref, cap] = await Promise.all([
        readPreference(),
        detectSTTCapability(),
      ]);
      if (cancelled) return;
      setCapability(cap);
      setMode(resolveMode(pref, cap));
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const switchToTyping = useCallback(() => {
    setMode("typing");
    void writePreference("typing");
  }, []);

  const switchToSpeech = useCallback(() => {
    // Guard: never flip into speech mode when the device can't honour
    // it. UI should not even show the affordance in that case, but be
    // defensive — a stale closure could otherwise leave the app in a
    // state where mic taps silently fail.
    setCapability((current) => {
      if (current && current.available) {
        setMode("speech");
        void writePreference("speech");
      }
      return current;
    });
  }, []);

  return {
    mode,
    capability,
    switchToTyping,
    switchToSpeech,
  };
}
