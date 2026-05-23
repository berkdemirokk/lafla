// Speech Shadowing — listen to a phrase, then repeat it aloud.
//
// Two-step rhythm per phrase: hear → repeat → next.
// 1. Auto-speak phrase, show it big and yellow.
// 2. After speech finishes (or 1.5s timeout), open a 5s listening window.
// 3. Grade what we heard via lib/pronunciation-grader, flash band color.
// 4. Auto-advance after a 1s beat.
//
// Speech recognition is loaded defensively — if the native module is
// missing (Expo Go, simulator, or just not installed yet) we mark the
// phrase as skipped with score 100 so the lesson still flows.

import { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { tokens } from "../../theme";
import { speak, stop as stopSpeak } from "../../lib/tts";
import {
  isAvailable as srIsAvailable,
  startListening,
  stopListening,
} from "../../lib/speech-recognition";
import {
  gradePronunciation,
  gradePronunciationWithPhonemes,
  type PhonemeAnalysisResult,
} from "../../lib/pronunciation-grader";
import { PhonemeFeedback } from "../PhonemeFeedback";
import { hapticForScore, hapticSelection } from "../../lib/feedback";
import { recordCefrProgress } from "../../lib/cefr-level";
import { pushPronScore } from "../../lib/pronunciation-history";
import type { ExerciseResult } from "../../lib/engine";

type Phase = "speaking" | "listening" | "feedback";

// Timing constants — keep the rhythm snappy but breathable.
const SPEAK_FALLBACK_MS = 1500; // assume phrase done after this if no onDone signal
const LISTEN_WINDOW_MS = 5000;
const FEEDBACK_HOLD_MS = 1000;

interface Props {
  phrases: string[];
  trTranslations?: string[];
  onComplete: (result: ExerciseResult) => void;
}

interface PhraseResult {
  score: number;
  heard: string;
  skipped: boolean;
}

export function SpeechShadowing({
  phrases,
  trTranslations,
  onComplete,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("speaking");
  const [lastScore, setLastScore] = useState<number | null>(null);
  // Phoneme-level feedback — sadece skor <85 ise hesaplanır.
  // 2026-05-21 — Türk-niche moat.
  const [lastPhonemes, setLastPhonemes] = useState<PhonemeAnalysisResult | null>(
    null,
  );
  const resultsRef = useRef<PhraseResult[]>([]);
  // Latest interim/final transcript for the current phrase.
  const heardRef = useRef<string>("");
  // Guard so an out-of-order callback (e.g. late onResult after timeout)
  // can't double-grade a phrase.
  const gradedRef = useRef<boolean>(false);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const current = phrases[idx];
  const trCurrent = trTranslations?.[idx];

  // --- helpers ---------------------------------------------------------

  const clearTimers = () => {
    for (const t of timersRef.current) clearTimeout(t);
    timersRef.current = [];
  };

  const scheduleTimer = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  };

  const finishExercise = (finalResults: PhraseResult[]) => {
    const avg =
      finalResults.length === 0
        ? 0
        : Math.round(
            finalResults.reduce((s, r) => s + r.score, 0) /
              finalResults.length,
          );
    const skippedAll = finalResults.every((r) => r.skipped);
    // 2026-05-23 — CEFR audit fix #2: feed the phoneme-derived shadowing
    // score into the CEFR engine. Skipped (no STT available) sessions are
    // not credited — feeding 100 from a free-pass skip would inflate level
    // progress dishonestly. Real attempts count; silence costs zero.
    if (!skippedAll && avg > 0) {
      void recordCefrProgress(avg).catch(() => {});
      // Also append to pronunciation-history for the IELTS Band Estimator.
      void pushPronScore(avg, "speech_shadowing").catch(() => {});
    }
    onComplete({
      exercise_id: "speech_shadowing",
      exercise_type: "speech_shadowing",
      correct: avg >= 60,
      score: avg,
      feedback: skippedAll
        ? "Konuşma tanıma kullanılamadı — atlandı."
        : `${finalResults.length} cümle tekrar ettin · ortalama ${avg}/100.`,
    });
  };

  const advance = (resultForThis: PhraseResult) => {
    const all = [...resultsRef.current, resultForThis];
    resultsRef.current = all;

    if (idx + 1 >= phrases.length) {
      finishExercise(all);
      return;
    }

    scheduleTimer(() => {
      setIdx(idx + 1);
      setPhase("speaking");
      setLastScore(null);
      setLastPhonemes(null);
      heardRef.current = "";
      gradedRef.current = false;
    }, FEEDBACK_HOLD_MS);
  };

  const gradeAndAdvance = (skipped: boolean) => {
    if (gradedRef.current) return;
    gradedRef.current = true;

    let score = 100;
    if (!skipped && current) {
      const g = gradePronunciation(current, heardRef.current);
      score = g.score;
      // Phoneme analysis async — gelene kadar lastPhonemes null kalır,
      // UI hazır olduğunda PhonemeFeedback otomatik render eder.
      const heardSnapshot = heardRef.current;
      const targetSnapshot = current;
      if (score < 85) {
        setLastPhonemes(null);
        gradePronunciationWithPhonemes(targetSnapshot, heardSnapshot)
          .then((pa) => setLastPhonemes(pa))
          .catch(() => {
            // best effort
          });
      } else {
        setLastPhonemes(null);
      }
    } else {
      setLastPhonemes(null);
    }
    setLastScore(score);
    hapticForScore(score);
    setPhase("feedback");
    advance({
      score,
      heard: heardRef.current,
      skipped,
    });
  };

  // --- per-phrase lifecycle -------------------------------------------

  // Phase 1: speak the phrase, then move to listening after a beat.
  useEffect(() => {
    if (!current || phase !== "speaking") return;

    // Tiny delay so the new phrase paints before audio starts.
    const speakDelay = scheduleTimer(() => {
      try {
        speak(current);
      } catch {
        // ignore — fall through to listen window
      }
      scheduleTimer(() => {
        setPhase("listening");
      }, SPEAK_FALLBACK_MS);
    }, 250);

    return () => {
      clearTimeout(speakDelay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, phase]);

  // Phase 2: open the speech recognition window.
  useEffect(() => {
    if (!current || phase !== "listening") return;

    let cancelled = false;

    (async () => {
      // Stop any lingering TTS so the mic doesn't pick up the synth voice.
      try {
        stopSpeak();
      } catch {
        // ignore
      }

      const available = await srIsAvailable();
      if (!available) {
        // Graceful degrade — count as skipped, give full credit so the
        // lesson rhythm isn't punished for an unavailable native module.
        gradeAndAdvance(true);
        return;
      }

      await startListening({
        lang: "en-US",
        timeoutMs: LISTEN_WINDOW_MS,
        onResult: (text, _isFinal) => {
          if (cancelled) return;
          // Keep the latest transcript — we grade once when the window ends.
          heardRef.current = text;
        },
        onError: () => {
          if (cancelled) return;
          // Permission denied / mic busy / etc. — treat as skipped.
          gradeAndAdvance(true);
        },
      });

      // Hard cap on the listening window. The SR module also self-stops at
      // timeoutMs, but we grade on a separate timer so the UI never stalls.
      scheduleTimer(() => {
        if (cancelled) return;
        void stopListening();
        gradeAndAdvance(false);
      }, LISTEN_WINDOW_MS);
    })();

    return () => {
      cancelled = true;
      void stopListening();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, phase]);

  // Tear down all timers + audio on unmount.
  useEffect(() => {
    return () => {
      clearTimers();
      try {
        stopSpeak();
      } catch {
        // ignore
      }
      void stopListening();
    };
  }, []);

  // --- skip ------------------------------------------------------------

  const onSkipAll = () => {
    hapticSelection();
    clearTimers();
    try {
      stopSpeak();
    } catch {
      // ignore
    }
    void stopListening();
    onComplete({
      exercise_id: "speech_shadowing",
      exercise_type: "speech_shadowing",
      correct: false,
      score: 50,
      feedback: "Atlandı.",
    });
  };

  // --- derived UI state ------------------------------------------------

  const stateLabel =
    phase === "speaking"
      ? "Dinliyor"
      : phase === "listening"
        ? "🎤 Şimdi sen tekrarla"
        : "Bitti";
  const stateIcon =
    phase === "speaking" ? "◯" : phase === "listening" ? "🎤" : "✓";

  // Card flash colour during the feedback beat.
  const cardFlash =
    phase === "feedback" && lastScore !== null
      ? lastScore >= 85
        ? styles.cardFlashGood
        : lastScore >= 50
          ? styles.cardFlashOkay
          : styles.cardFlashMiss
      : null;

  // --- render ----------------------------------------------------------

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Tekrar Et</Text>

      <View style={styles.dotsRow}>
        {phrases.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === idx && styles.dotActive,
              i < idx && styles.dotDone,
            ]}
          />
        ))}
      </View>

      <View style={[styles.heroCard, cardFlash]}>
        <Text style={styles.phrase}>{current ?? ""}</Text>
        {trCurrent ? <Text style={styles.tr}>{trCurrent}</Text> : null}
      </View>

      <View style={styles.stateRow}>
        <Text style={styles.stateIcon}>{stateIcon}</Text>
        <Text style={styles.stateLabel}>{stateLabel}</Text>
      </View>

      {phase === "feedback" && lastScore !== null ? (
        <Text style={styles.scoreLine}>{lastScore}/100</Text>
      ) : null}

      {/* Phoneme-level feedback — Türk-niche moat (2026-05-21).
          Sadece skor <85 ve analiz hazır olduğunda gözükür. */}
      {phase === "feedback" && lastPhonemes ? (
        <PhonemeFeedback analysis={lastPhonemes} />
      ) : null}

      <View style={styles.spacer} />

      <View style={styles.footer}>
        <Pressable style={styles.skipBtn} onPress={onSkipAll}>
          <Text style={styles.skipLabel}>Atla</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  prompt: {
    fontSize: 14,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: tokens.weight.bold,
    marginBottom: tokens.spacing.sm,
  },
  dotsRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: tokens.spacing.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  dotActive: {
    backgroundColor: tokens.brand.primaryFixed,
    width: 24,
  },
  dotDone: {
    backgroundColor: tokens.text.tertiary,
  },
  heroCard: {
    backgroundColor: tokens.bg.onBackground,
    borderWidth: 2,
    borderColor: tokens.brand.primaryContainer,
    borderRadius: tokens.radius.base,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 180,
    marginBottom: tokens.spacing.md,
  },
  cardFlashGood: {
    borderColor: tokens.brand.primaryFixed,
    backgroundColor: "rgba(246, 255, 0, 0.18)",
  },
  cardFlashOkay: {
    borderColor: tokens.semantic.successContainer,
    backgroundColor: tokens.semantic.successContainer,
  },
  cardFlashMiss: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  phrase: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: -0.5,
    textAlign: "center",
    lineHeight: 40,
  },
  tr: {
    marginTop: 14,
    fontSize: 16,
    color: tokens.text.secondary,
    textAlign: "center",
    fontWeight: tokens.weight.medium,
    fontStyle: "italic",
  },
  stateRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: tokens.spacing.sm,
  },
  stateIcon: {
    fontSize: 24,
  },
  stateLabel: {
    fontSize: 16,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  scoreLine: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    marginTop: 4,
  },
  spacer: { flex: 1 },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: tokens.spacing.md,
  },
  skipBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  skipLabel: {
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    fontSize: 14,
  },
});
