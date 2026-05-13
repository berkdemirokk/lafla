// Lafla — Text-to-speech wrapper (expo-speech).
// English phrases get native pronunciation via on-device synthesizer.

import * as Speech from "expo-speech";

let lastUtterance: string | null = null;

export function speak(text: string, opts?: { lang?: "en-US" | "tr-TR"; rate?: number }) {
  const lang = opts?.lang ?? "en-US";
  const rate = opts?.rate ?? 0.95;

  // If user re-taps while speaking, stop instead of queueing
  if (lastUtterance === text) {
    Speech.stop();
    lastUtterance = null;
    return;
  }

  Speech.stop();
  lastUtterance = text;
  Speech.speak(text, {
    language: lang,
    rate,
    pitch: 1.0,
    onDone: () => {
      lastUtterance = null;
    },
    onStopped: () => {
      lastUtterance = null;
    },
    onError: () => {
      lastUtterance = null;
    },
  });
}

export function stop() {
  Speech.stop();
  lastUtterance = null;
}
