// PhonemePronunciation — speak the English phrase, get per-PHONEME feedback.
//
// Upgrade of PronouncePhrase that breaks the user's attempt down to the
// individual sound level (IPA chips) and surfaces 1–3 Turkish coaching
// tips for the sounds that went sideways.
//
// Stages (same shape as PronouncePhrase so onboarding visuals match):
//   idle      → phrase + IPA + speaker + big yellow "Şimdi sen söyle 🎤"
//   listening → pulsing mic + "Dinliyorum..." + cancel
//   graded    → per-phoneme chips (green/yellow/red), score, hints,
//               retry + next buttons
//
// Speech recognition is loaded dynamically; if unavailable the component
// gracefully skips and reports a full-credit result so a flow can keep
// moving in dev / Expo Go / web.

import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import { Button } from "../Button";
import { SpeakerButton } from "../SpeakerButton";
import { tokens } from "../../theme";
import {
  hapticForScore,
  hapticImpact,
  hapticError,
} from "../../lib/feedback";
import {
  analyzePhonemes,
  type PhonemeAnalysisResult,
  type PhonemeBand,
  type WordPhonemeAnalysis,
  sentenceToPhonemes,
  phonemesToIpa,
} from "../../lib/phoneme-grader";

interface Props {
  targetPhrase: string;
  trHint?: string;
  onComplete: (result: PhonemeAnalysisResult) => void;
}

type Stage = "idle" | "listening" | "graded";

// Theme tokens: green (success blue), yellow (primary), red (error).
const BAND_COLORS: Record<PhonemeBand, string> = {
  correct: tokens.semantic.successContainer,
  near: tokens.brand.primarySoft,
  wrong: tokens.semantic.errorContainer,
  dropped: tokens.bg.surfaceContainerHigh,
};

const BAND_BORDER: Record<PhonemeBand, string> = {
  correct: tokens.semantic.success,
  near: tokens.brand.primaryFixed,
  wrong: tokens.semantic.error,
  dropped: tokens.border.outlineVariant,
};

const BAND_TEXT: Record<PhonemeBand, string> = {
  correct: tokens.semantic.success,
  near: tokens.brand.onPrimary,
  wrong: tokens.semantic.error,
  dropped: tokens.text.tertiary,
};

function feedbackFor(score: number): string {
  if (score >= 85) return "Harika telaffuz!";
  if (score >= 60) return "İyi gidiyorsun — birkaç ses üzerinde çalışalım.";
  if (score >= 35) return "Fena değil — aşağıdaki ipuçlarına odaklan.";
  return "Yavaş ve net söylemeyi dene, ipuçları yardımcı olacak.";
}

export function PhonemePronunciation({
  targetPhrase,
  trHint,
  onComplete,
}: Props) {
  const [stage, setStage] = useState<Stage>("idle");
  const [result, setResult] = useState<PhonemeAnalysisResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Pulse animation for the mic during listening.
  const pulse = useRef(new Animated.Value(1)).current;
  const pulseLoop = useRef<Animated.CompositeAnimation | null>(null);

  // Guards against double-grading from late onResult callbacks.
  const gradedThisSession = useRef(false);

  useEffect(() => {
    if (stage === "listening") {
      pulse.setValue(1);
      pulseLoop.current = Animated.loop(
        Animated.sequence([
          Animated.timing(pulse, {
            toValue: 1.25,
            duration: 700,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulse, {
            toValue: 1,
            duration: 700,
            easing: Easing.inOut(Easing.ease),
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

  // Auto-clear transient error toast.
  useEffect(() => {
    if (!errorMsg) return;
    const t = setTimeout(() => setErrorMsg(null), 2400);
    return () => clearTimeout(t);
  }, [errorMsg]);

  // Tear down any in-flight STT session on unmount.
  useEffect(() => {
    return () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const sr = require("../../lib/speech-recognition");
        sr?.stopListening?.();
      } catch {
        // module not installed in this env — nothing to clean up
      }
    };
  }, []);

  // Pre-compute the target IPA for the prompt.
  const targetIpa = (() => {
    try {
      const sp = sentenceToPhonemes(targetPhrase);
      const wordsIpa = sp.perWord
        .map((w) => phonemesToIpa(w.phonemes))
        .filter(Boolean);
      return wordsIpa.length ? `/${wordsIpa.join(" ")}/` : "";
    } catch {
      return "";
    }
  })();

  const handleMicPress = async () => {
    hapticImpact("medium");
    setErrorMsg(null);
    gradedThisSession.current = false;

    type SrModule = typeof import("../../lib/speech-recognition");
    let sr: SrModule | null = null;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      sr = require("../../lib/speech-recognition") as SrModule;
    } catch {
      sr = null;
    }

    if (!sr) {
      // No native module — skip and hand back a full-credit result.
      const empty: PhonemeAnalysisResult = {
        overall: 100,
        perWord: [],
        weakSounds: [],
        tipsTr: [],
      };
      onComplete(empty);
      return;
    }

    const available = await sr.isAvailable().catch(() => false);
    if (!available) {
      const empty: PhonemeAnalysisResult = {
        overall: 100,
        perWord: [],
        weakSounds: [],
        tipsTr: [],
      };
      onComplete(empty);
      return;
    }

    setStage("listening");

    await sr.startListening({
      lang: "en-US",
      onResult: (text, isFinal) => {
        if (!isFinal) return;
        if (gradedThisSession.current) return;
        gradedThisSession.current = true;
        const r = analyzePhonemes(targetPhrase, text);
        hapticForScore(r.overall);
        setResult(r);
        setStage("graded");
      },
      onError: (e) => {
        hapticError();
        setErrorMsg(e.message || "Mikrofon hatası");
        if (!gradedThisSession.current) {
          setStage("idle");
        }
      },
    });
  };

  const handleCancel = async () => {
    hapticImpact("light");
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const sr = require("../../lib/speech-recognition");
      await sr?.stopListening?.();
    } catch {
      // ignore
    }
    setStage("idle");
  };

  const handleRetry = () => {
    hapticImpact("light");
    setResult(null);
    setStage("idle");
  };

  const handleContinue = () => {
    if (!result) return;
    onComplete(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Ses ses telaffuz</Text>

      <View style={styles.phraseBlock}>
        <Text style={styles.phrase}>{targetPhrase}</Text>
        {targetIpa ? <Text style={styles.ipa}>{targetIpa}</Text> : null}
        <View style={styles.speakerRow}>
          <SpeakerButton text={targetPhrase} size="lg" />
          <Text style={styles.speakerHint}>Önce dinle</Text>
        </View>
      </View>

      {stage !== "graded" && trHint ? (
        <Text style={styles.hint}>💡 {trHint}</Text>
      ) : null}

      {stage === "graded" && result ? (
        <ScrollView
          style={styles.gradedScroll}
          contentContainerStyle={styles.gradedBlock}
        >
          {result.perWord.map((w, wi) => (
            <WordRow key={`${w.word}-${wi}`} w={w} />
          ))}

          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Skor</Text>
            <Text style={styles.scoreValue}>{result.overall}/100</Text>
          </View>
          <Text style={styles.feedbackText}>{feedbackFor(result.overall)}</Text>

          {result.tipsTr.length > 0 ? (
            <View style={styles.tipsBlock}>
              <Text style={styles.tipsTitle}>Üzerinde çalışacağın sesler</Text>
              {result.tipsTr.map((t, i) => (
                <Text key={i} style={styles.tipText}>
                  • {t}
                </Text>
              ))}
            </View>
          ) : null}
        </ScrollView>
      ) : null}

      {errorMsg ? (
        <View style={styles.errorToast}>
          <Text style={styles.errorToastText}>⚠️  {errorMsg}</Text>
        </View>
      ) : null}

      <View style={styles.footer}>
        {stage === "idle" ? (
          <Pressable
            onPress={handleMicPress}
            style={({ pressed }) => [
              styles.micCta,
              pressed && styles.micCtaPressed,
            ]}
          >
            <Text style={styles.micCtaText}>Şimdi sen söyle 🎤</Text>
          </Pressable>
        ) : null}

        {stage === "listening" ? (
          <View style={styles.listeningBlock}>
            <Animated.View
              style={[styles.micPulse, { transform: [{ scale: pulse }] }]}
            >
              <Text style={styles.micPulseIcon}>🎤</Text>
            </Animated.View>
            <Text style={styles.listeningText}>Dinliyorum...</Text>
            <Pressable
              onPress={handleCancel}
              style={({ pressed }) => [
                styles.cancelBtn,
                pressed && styles.cancelBtnPressed,
              ]}
              hitSlop={8}
            >
              <Text style={styles.cancelBtnText}>İptal</Text>
            </Pressable>
          </View>
        ) : null}

        {stage === "graded" ? (
          <View style={styles.gradedButtons}>
            <View style={styles.retryWrap}>
              <Button
                label="Tekrar dene"
                onPress={handleRetry}
                variant="secondary"
              />
            </View>
            <View style={styles.continueWrap}>
              <Button label="Sonraki →" onPress={handleContinue} />
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

function WordRow({ w }: { w: WordPhonemeAnalysis }) {
  return (
    <View style={styles.wordBlock}>
      <View style={styles.wordHeader}>
        <Text style={styles.wordLabel}>{w.word}</Text>
        <Text style={styles.wordIpa}>/{w.targetIpa}/</Text>
        <Text style={styles.wordScore}>{w.overallScore}</Text>
      </View>
      <View style={styles.chipsRow}>
        {w.phonemes.map((p, pi) => (
          <View
            key={`${p.target}-${pi}`}
            style={[
              styles.chip,
              {
                backgroundColor: BAND_COLORS[p.band],
                borderColor: BAND_BORDER[p.band],
              },
            ]}
          >
            <Text style={[styles.chipText, { color: BAND_TEXT[p.band] }]}>
              {p.targetIpa}
            </Text>
          </View>
        ))}
      </View>
      {w.phonemes.some((p) => p.hint_tr && (p.band === "wrong" || p.band === "near")) ? (
        <View style={styles.hintsBlock}>
          {w.phonemes
            .filter((p) => p.hint_tr && (p.band === "wrong" || p.band === "near"))
            .map((p, pi) => (
              <Text key={pi} style={styles.hintText}>
                <Text style={styles.hintIpa}>/{p.targetIpa}/</Text> — {p.hint_tr}
              </Text>
            ))}
        </View>
      ) : null}
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
  phraseBlock: {
    marginBottom: tokens.spacing.md,
  },
  phrase: {
    fontSize: 28,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 36,
    marginBottom: tokens.spacing.xs,
  },
  ipa: {
    fontSize: 16,
    color: tokens.text.secondary,
    marginBottom: tokens.spacing.sm,
    fontStyle: "italic",
  },
  speakerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  speakerHint: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  hint: {
    color: tokens.text.secondary,
    fontSize: 14,
    marginTop: tokens.spacing.xs,
  },

  // Graded
  gradedScroll: {
    flexGrow: 0,
    marginTop: tokens.spacing.sm,
  },
  gradedBlock: {
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    gap: tokens.spacing.sm,
  },
  wordBlock: {
    marginBottom: tokens.spacing.sm,
  },
  wordHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: tokens.spacing.sm,
    marginBottom: 6,
  },
  wordLabel: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  wordIpa: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontStyle: "italic",
    flex: 1,
  },
  wordScore: {
    fontSize: 14,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.sm,
    borderWidth: 1.5,
    minWidth: 28,
    alignItems: "center",
  },
  chipText: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
  },
  hintsBlock: {
    marginTop: 8,
    gap: 4,
  },
  hintText: {
    fontSize: 13,
    color: tokens.text.onSurfaceVariant,
    lineHeight: 18,
  },
  hintIpa: {
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },

  scoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: tokens.spacing.sm,
  },
  scoreLabel: {
    fontSize: 14,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontWeight: tokens.weight.bold,
  },
  scoreValue: {
    fontSize: 28,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.black,
  },
  feedbackText: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },

  tipsBlock: {
    marginTop: tokens.spacing.sm,
    padding: tokens.spacing.sm,
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.brand.primarySoft,
    gap: 6,
  },
  tipsTitle: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textTransform: "uppercase",
    letterSpacing: 1.0,
    marginBottom: 4,
  },
  tipText: {
    fontSize: 13,
    color: tokens.text.primary,
    lineHeight: 18,
  },

  // Error toast
  errorToast: {
    marginTop: tokens.spacing.md,
    padding: tokens.spacing.sm,
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.semantic.errorContainer,
  },
  errorToastText: {
    color: tokens.semantic.onErrorContainer,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },

  // Footer
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },

  micCta: {
    backgroundColor: tokens.brand.primaryContainer,
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  micCtaPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  micCtaText: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },

  listeningBlock: {
    alignItems: "center",
    gap: tokens.spacing.sm,
  },
  micPulse: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.primaryFixed,
  },
  micPulseIcon: {
    fontSize: 40,
  },
  listeningText: {
    fontSize: 18,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    marginTop: tokens.spacing.xs,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: "transparent",
  },
  cancelBtnPressed: {
    opacity: 0.6,
  },
  cancelBtnText: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },

  gradedButtons: {
    flexDirection: "row",
    gap: tokens.spacing.sm,
  },
  retryWrap: {
    flex: 1,
  },
  continueWrap: {
    flex: 1,
  },
});
