// Lafla — useLiveFluencyMetrics
//
// Hook that tracks live speech fluency metrics during a voice session.
//
// - WPM: computed over a rolling 10-second window of word events.
// - Filler count: cumulative for the current session.
// - Fluency band: derived from current WPM (low / mid / high).
// - Elapsed seconds: updates ~2x per second while `start()` is active.
//
// The hook is intentionally self-contained — it has no runtime dependency on
// `lib/speech-metrics.ts` (which a parallel agent owns). If that module
// eventually exports helpers, they can be wired in without changing this API.

import { useCallback, useEffect, useRef, useState } from "react";

export type FluencyBand = "low" | "mid" | "high";

export interface LiveFluencyMetrics {
  wpm: number;
  fillerCount: number;
  fluencyBand: FluencyBand;
  elapsedSec: number;
}

interface WordEvent {
  count: number;
  timestamp: number; // ms since epoch
}

const ROLLING_WINDOW_MS = 10_000;
const TICK_MS = 500; // 2 Hz timer drives elapsed + WPM re-eval

function bandFromWpm(wpm: number): FluencyBand {
  // Natural English speech sits ~120-160 wpm. Below 80 reads as halting,
  // above 100 reads as fluent for an L2 learner target.
  if (wpm < 70) return "low";
  if (wpm < 110) return "mid";
  return "high";
}

export function useLiveFluencyMetrics() {
  const [metrics, setMetrics] = useState<LiveFluencyMetrics>({
    wpm: 0,
    fillerCount: 0,
    fluencyBand: "low",
    elapsedSec: 0,
  });

  const runningRef = useRef(false);
  const startedAtRef = useRef<number | null>(null);
  const wordsRef = useRef<WordEvent[]>([]);
  const fillerCountRef = useRef(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const recomputeWpm = useCallback((now: number): number => {
    const cutoff = now - ROLLING_WINDOW_MS;
    // Drop events that fell out of the window.
    while (wordsRef.current.length && wordsRef.current[0].timestamp < cutoff) {
      wordsRef.current.shift();
    }
    if (wordsRef.current.length === 0) return 0;

    const totalWords = wordsRef.current.reduce((sum, ev) => sum + ev.count, 0);
    const oldest = wordsRef.current[0].timestamp;
    const elapsedMs = Math.max(now - oldest, 1_000); // floor to 1s to avoid spikes
    const wpm = (totalWords / elapsedMs) * 60_000;
    return Math.round(wpm);
  }, []);

  const tick = useCallback(() => {
    if (!runningRef.current || startedAtRef.current == null) return;
    const now = Date.now();
    const wpm = recomputeWpm(now);
    const elapsedSec = Math.floor((now - startedAtRef.current) / 1000);
    setMetrics({
      wpm,
      fillerCount: fillerCountRef.current,
      fluencyBand: bandFromWpm(wpm),
      elapsedSec,
    });
  }, [recomputeWpm]);

  const start = useCallback(() => {
    if (runningRef.current) return;
    runningRef.current = true;
    startedAtRef.current = Date.now();
    wordsRef.current = [];
    fillerCountRef.current = 0;
    setMetrics({ wpm: 0, fillerCount: 0, fluencyBand: "low", elapsedSec: 0 });
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = setInterval(tick, TICK_MS);
  }, [tick]);

  const stop = useCallback(() => {
    runningRef.current = false;
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    runningRef.current = false;
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
    startedAtRef.current = null;
    wordsRef.current = [];
    fillerCountRef.current = 0;
    setMetrics({ wpm: 0, fillerCount: 0, fluencyBand: "low", elapsedSec: 0 });
  }, []);

  const recordWords = useCallback(
    (words: string[], timestamp: number) => {
      if (!runningRef.current) return;
      const count = words.filter((w) => w && w.trim().length > 0).length;
      if (count === 0) return;
      wordsRef.current.push({ count, timestamp });
      // Recompute immediately for snappy feedback (don't wait for tick).
      const now = Date.now();
      const wpm = recomputeWpm(now);
      setMetrics((prev) => ({
        ...prev,
        wpm,
        fluencyBand: bandFromWpm(wpm),
      }));
    },
    [recomputeWpm],
  );

  const recordFiller = useCallback((_word: string) => {
    if (!runningRef.current) return;
    fillerCountRef.current += 1;
    setMetrics((prev) => ({ ...prev, fillerCount: fillerCountRef.current }));
  }, []);

  // Cleanup on unmount.
  useEffect(() => {
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, []);

  return {
    metrics,
    recordWords,
    recordFiller,
    start,
    stop,
    reset,
  };
}

export default useLiveFluencyMetrics;
