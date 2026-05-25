// ListenRespond — voice rehearsal pre-scene. CONTENT_EXPANSION Phase 1A.
//
// Flow:
//   1. Mount → NPC line auto-speak (TTS).
//   2. Countdown (think_seconds, default 3) — user düşünür.
//   3. Mic auto-açılır → STT dinler → final transcript geldiğinde:
//      pattern match → score (100 / 60 / 30 / 0).
//   4. Graded view: kullanıcı ne dedi + ideal answer + tekrar dene / devam et.
//
// STT pattern PronouncePhrase.tsx'ten alındı: lib/speech-recognition modülü
// dinamik require + graceful degrade (Expo Go / cihaz desteklemiyor =
// free 100 + skip mesajı).

import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated as RNAnimated,
  Easing as RNEasing,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button } from "../Button";
import { SpeakerButton } from "../SpeakerButton";
import { tokens } from "../../theme";
import {
  hapticForScore,
  hapticImpact,
  hapticSuccess,
  hapticError,
} from "../../lib/feedback";
import {
  matchAgainstPatterns,
  type ExerciseResult,
} from "../../lib/engine";
import { speak } from "../../lib/tts";

interface Props {
  npc_line: string;
  accepted_patterns: string[];
  think_seconds: number;
  tr_hint: string;
  ideal_response: string;
  onComplete: (result: ExerciseResult) => void;
}

type Stage = "intro" | "countdown" | "listening" | "graded" | "skipped";

interface GradedState {
  score: number;
  heard: string;
  matched: boolean;
}

export function ListenRespond({
  npc_line,
  accepted_patterns,
  think_seconds,
  tr_hint,
  ideal_response,
  onComplete,
}: Props) {
  const [stage, setStage] = useState<Stage>("intro");
  const [remaining, setRemaining] = useState<number>(
    Math.max(1, Math.round(think_seconds || 3)),
  );
  const [graded, setGraded] = useState<GradedState | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Pulse animation for mic (mirrors PronouncePhrase.tsx).
  const pulse = useRef(new RNAnimated.Value(1)).current;
  const pulseLoop = useRef<RNAnimated.CompositeAnimation | null>(null);

  // De-dup için: bir session'da bir kere grade yap.
  const gradedThisSession = useRef(false);
  // intro auto-flow timer cleanup.
  const introTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownTimerRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  // Mount: NPC line'ı oku → 1.2sn beklet → countdown başlat.
  // Audio bitse de bitmese de UX akar; speak() promise'i blocking değil.
  useEffect(() => {
    speak(npc_line);
    introTimerRef.current = setTimeout(() => {
      setStage("countdown");
    }, 1400);
    return () => {
      if (introTimerRef.current) clearTimeout(introTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Countdown stage → her saniye remaining--, 0'da mic aç.
  useEffect(() => {
    if (stage !== "countdown") return;
    countdownTimerRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          if (countdownTimerRef.current) {
            clearInterval(countdownTimerRef.current);
            countdownTimerRef.current = null;
          }
          // Mic'e geç — setTimeout(0) ile setState çakışmasını önle.
          setTimeout(() => beginListening(), 0);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (countdownTimerRef.current) {
        clearInterval(countdownTimerRef.current);
        countdownTimerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  // Pulse animation lifecycle.
  useEffect(() => {
    if (stage === "listening") {
      pulse.setValue(1);
      pulseLoop.current = RNAnimated.loop(
        RNAnimated.sequence([
          RNAnimated.timing(pulse, {
            toValue: 1.25,
            duration: 700,
            easing: RNEasing.inOut(RNEasing.ease),
            useNativeDriver: true,
          }),
          RNAnimated.timing(pulse, {
            toValue: 1,
            duration: 700,
            easing: RNEasing.inOut(RNEasing.ease),
            useNativeDriver: true,
          }),
        ]),
      );
      pulseLoop.current.start();
    } else {
      pulseLoop.current?.stop();
      pulseLoop.current = null;
      pulse.setValue(1);
    }
    return () => {
      pulseLoop.current?.stop();
      pulseLoop.current = null;
    };
  }, [stage, pulse]);

  // Auto-clear error toast.
  useEffect(() => {
    if (!errorMsg) return;
    const t = setTimeout(() => setErrorMsg(null), 2400);
    return () => clearTimeout(t);
  }, [errorMsg]);

  // Unmount cleanup: stop any active STT session.
  useEffect(() => {
    return () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const sr = require("../../lib/speech-recognition");
        sr?.stopListening?.();
      } catch {
        // ignore
      }
    };
  }, []);

  const gradeWith = (text: string) => {
    if (gradedThisSession.current) return;
    gradedThisSession.current = true;
    const trimmed = text.trim();
    const matched = matchAgainstPatterns(trimmed, accepted_patterns);
    let score: number;
    if (matched) {
      score = 100;
    } else {
      const wordCount = trimmed
        .split(/\s+/)
        .filter((w) => w.length >= 2).length;
      if (wordCount >= 3) score = 60;
      else if (wordCount >= 1) score = 30;
      else score = 0;
    }
    setGraded({ score, heard: trimmed, matched });
    setStage("graded");
    hapticForScore(score);
  };

  const beginListening = async () => {
    hapticImpact("medium");
    setErrorMsg(null);
    gradedThisSession.current = false;

    // Dinamik require — PronouncePhrase ile aynı graceful degrade.
    type SrModule = typeof import("../../lib/speech-recognition");
    let sr: SrModule | null = null;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      sr = require("../../lib/speech-recognition") as SrModule;
    } catch {
      sr = null;
    }
    if (!sr) {
      finishSkipped();
      return;
    }
    const available = await sr.isAvailable().catch(() => false);
    if (!available) {
      finishSkipped();
      return;
    }

    setStage("listening");

    await sr.startListening({
      lang: "en-US",
      timeoutMs: 6000,
      onResult: (text, isFinal) => {
        if (!isFinal) return;
        gradeWith(text);
      },
      onError: (e) => {
        hapticError();
        setErrorMsg(e.message || "Mikrofon hatası");
        if (!gradedThisSession.current) {
          // Eğer hiç grade alınmadıysa → skipped (devam edebilir).
          setStage("skipped");
        }
      },
    });
  };

  const finishSkipped = () => {
    setStage("skipped");
    hapticSuccess();
  };

  const handleRetry = () => {
    hapticImpact("light");
    gradedThisSession.current = false;
    setGraded(null);
    setRemaining(Math.max(1, Math.round(think_seconds || 3)));
    setStage("countdown");
  };

  const handleContinue = () => {
    if (stage === "skipped") {
      onComplete({
        exercise_id: "listen_respond",
        exercise_type: "listen_respond",
        correct: true,
        score: 100,
        feedback: "Voice atlandı (cihaz desteklemiyor).",
      });
      return;
    }
    if (!graded) return;
    onComplete({
      exercise_id: "listen_respond",
      exercise_type: "listen_respond",
      correct: graded.matched,
      score: graded.score,
      feedback: graded.matched
        ? "İyi cevap!"
        : `İdeal: "${ideal_response}"`,
    });
  };

  const handleStopEarly = async () => {
    hapticImpact("light");
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const sr = require("../../lib/speech-recognition");
      await sr?.stopListening?.();
    } catch {
      // ignore
    }
    if (!gradedThisSession.current) {
      // User cancelled before STT delivered → treat as skipped attempt.
      gradedThisSession.current = true;
      setGraded({ score: 0, heard: "", matched: false });
      setStage("graded");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Dinle ve cevap ver</Text>

      {/* NPC line — always visible, always tappable for re-listen */}
      <Animated.View
        entering={FadeInDown.duration(360)}
        style={styles.npcBlock}
      >
        <View style={styles.npcRow}>
          <Text style={styles.npcLabel}>NPC der ki</Text>
          <SpeakerButton text={npc_line} size="sm" />
        </View>
        <Text style={styles.npcLine}>{npc_line}</Text>
      </Animated.View>

      {/* Stage-specific middle */}
      {stage === "intro" && (
        <View style={styles.stageBlock}>
          <Text style={styles.introText}>Dinle...</Text>
        </View>
      )}

      {stage === "countdown" && (
        <Animated.View entering={FadeInDown.duration(360)} style={styles.stageBlock}>
          <Text style={styles.countdownLabel}>Düşün</Text>
          <View style={styles.countdownCircle}>
            <Text style={styles.countdownNumber}>{remaining}</Text>
          </View>
          <Text style={styles.hint}>💡 {tr_hint}</Text>
        </Animated.View>
      )}

      {stage === "listening" && (
        <View style={styles.stageBlock}>
          <RNAnimated.View
            style={[
              styles.micPulse,
              { transform: [{ scale: pulse }] },
            ]}
          >
            <Text style={styles.micPulseIcon}>🎤</Text>
          </RNAnimated.View>
          <Text style={styles.listeningText}>Şimdi sen söyle</Text>
          <Pressable
            onPress={handleStopEarly}
            style={({ pressed }) => [
              styles.cancelBtn,
              pressed && styles.cancelBtnPressed,
            ]}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Mikrofonu durdur"
          >
            <Text style={styles.cancelBtnText}>Durdur</Text>
          </Pressable>
        </View>
      )}

      {stage === "graded" && graded && (
        <Animated.View
          entering={FadeInDown.duration(360)}
          style={[
            styles.gradedBlock,
            graded.matched ? styles.gradedBlockOk : styles.gradedBlockMiss,
          ]}
        >
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Skor</Text>
            <Text
              style={[
                styles.scoreValue,
                graded.matched
                  ? styles.scoreValueOk
                  : styles.scoreValueMiss,
              ]}
            >
              {graded.score}/100
            </Text>
          </View>
          {graded.heard ? (
            <>
              <Text style={styles.heardLabel}>Sen dedin</Text>
              <Text style={styles.heardText}>"{graded.heard}"</Text>
            </>
          ) : (
            <Text style={styles.heardText}>(ses algılanmadı)</Text>
          )}
          {!graded.matched && (
            <>
              <Text style={styles.idealLabel}>İdeal cevap</Text>
              <Text style={styles.idealText}>{ideal_response}</Text>
            </>
          )}
        </Animated.View>
      )}

      {stage === "skipped" && (
        <View style={styles.gradedBlock}>
          <Text style={styles.heardText}>
            Mikrofon kullanılamadı — bu egzersiz atlandı.
          </Text>
          <Text style={styles.idealLabel}>İdeal cevap</Text>
          <Text style={styles.idealText}>{ideal_response}</Text>
        </View>
      )}

      {errorMsg && (
        <View style={styles.errorToast}>
          <Text style={styles.errorToastText}>⚠ {errorMsg}</Text>
        </View>
      )}

      <View style={styles.footer}>
        {(stage === "graded" || stage === "skipped") && (
          <View style={styles.btnRow}>
            {stage === "graded" && (
              <View style={styles.btnFlex}>
                <Button
                  label="Tekrar dene"
                  onPress={handleRetry}
                  variant="secondary"
                />
              </View>
            )}
            <View style={styles.btnFlex}>
              <Button label="Devam et →" onPress={handleContinue} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  prompt: {
    fontSize: 14,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: tokens.spacing.sm,
  },
  npcBlock: {
    backgroundColor: tokens.brand.secondary,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
    gap: 4,
  },
  npcRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  npcLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  npcLine: {
    fontSize: 19,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.onSecondary,
    lineHeight: 26,
  },
  stageBlock: {
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacing.sm,
    paddingVertical: tokens.spacing.md,
    minHeight: 200,
  },
  introText: {
    fontSize: 16,
    fontFamily: tokens.font.sans,
    color: tokens.text.tertiary,
    fontStyle: "italic",
  },
  countdownLabel: {
    fontSize: 12,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  countdownCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 3,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  countdownNumber: {
    fontSize: 44,
    fontFamily: tokens.font.display,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },
  hint: {
    fontSize: 14,
    fontFamily: tokens.font.sans,
    color: tokens.text.secondary,
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: tokens.spacing.md,
  },
  micPulse: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 3,
    borderColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  micPulseIcon: {
    fontSize: 44,
  },
  listeningText: {
    fontSize: 18,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  cancelBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
  },
  cancelBtnPressed: { opacity: 0.6 },
  cancelBtnText: {
    fontSize: 14,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },
  gradedBlock: {
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    gap: 4,
  },
  gradedBlockOk: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  gradedBlockMiss: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  scoreLabel: {
    fontSize: 12,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  scoreValue: {
    fontSize: 26,
    fontFamily: tokens.font.sansExtra,
    fontWeight: tokens.weight.extrabold,
  },
  scoreValueOk: { color: tokens.brand.tertiary },
  scoreValueMiss: { color: tokens.semantic.error },
  heardLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 6,
  },
  heardText: {
    fontSize: 16,
    fontFamily: tokens.font.sans,
    color: tokens.text.primary,
    lineHeight: 22,
  },
  idealLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 6,
  },
  idealText: {
    fontSize: 16,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 22,
  },
  errorToast: {
    marginTop: tokens.spacing.sm,
    padding: tokens.spacing.sm,
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.semantic.errorContainer,
  },
  errorToastText: {
    color: tokens.semantic.onErrorContainer,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    fontSize: 13,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },
  btnRow: {
    flexDirection: "row",
    gap: tokens.spacing.sm,
  },
  btnFlex: {
    flex: 1,
  },
});
