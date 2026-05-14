// TypingPronunciation — drop-in replacement for mic-based pronunciation
// when STT is unavailable (iOS 15/16, denied mic permission, missing
// native module).
//
// Mirrors PhonemePronunciation's three-stage flow:
//   idle    → phrase + IPA + TextInput + "Değerlendir" CTA
//   graded  → per-word color bands + overall score + retry / continue
//
// The grading pipeline is *identical* to the speech path — we route the
// typed text through gradePronunciation() and gradePronunciationWithPhonemes(),
// which both treat their second argument as "what the recognizer heard".
// For Levenshtein scoring this is exactly equivalent; for phoneme-level
// scoring the IPA-from-spelling step is the same on either input source.
//
// Because typing is always available there is no "permission denied"
// failure mode here — we go straight from idle to graded.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "../Button";
import { SpeakerButton } from "../SpeakerButton";
import { tokens } from "../../theme";
import {
  hapticForScore,
  hapticImpact,
} from "../../lib/feedback";
import type { ExerciseResult } from "../../lib/engine";
import {
  gradePronunciation,
  gradePronunciationWithPhonemes,
  type WordBand,
  type PronunciationBand,
  type PronunciationGrade,
  type PhonemeAnalysisResult,
} from "../../lib/pronunciation-grader";
import { sentenceToPhonemes, phonemesToIpa } from "../../lib/phoneme-grader";

interface Props {
  /** English target phrase the user would have spoken. */
  phrase: string;
  /** Optional Turkish meaning shown above the input. */
  trMeaning?: string;
  /** Whether speech mode is available — controls "Sesli moda geç" button. */
  speechAvailable?: boolean;
  /** Callback when the user opts to switch back to mic mode. */
  onSwitchToSpeech?: () => void;
  /** Word-level grading callback (matches PronouncePhrase shape). */
  onComplete: (
    result: ExerciseResult,
    detail: {
      grade: PronunciationGrade;
      phonemeAnalysis: PhonemeAnalysisResult;
      typed: string;
    },
  ) => void;
}

type Stage = "idle" | "grading" | "graded";

interface GradedState {
  grade: PronunciationGrade;
  phonemes: PhonemeAnalysisResult;
  typed: string;
}

// Reuse the same band palette as the speech version so users see a
// consistent "good / okay / miss" colour language across both flows.
const BAND_COLORS: Record<PronunciationBand, string> = {
  good: "#95d5b2",
  okay: "#ffd54f",
  miss: "#ef9a9a",
};

function feedbackFor(score: number): string {
  if (score >= 85) return "Yazım tam isabet.";
  if (score >= 50) return "Yakın — kelime sırasına ve yazıma dikkat.";
  return "Hedef cümleyi tekrar gözden geçir, harf farklarına bak.";
}

export function TypingPronunciation({
  phrase,
  trMeaning,
  speechAvailable,
  onSwitchToSpeech,
  onComplete,
}: Props) {
  const [stage, setStage] = useState<Stage>("idle");
  const [typed, setTyped] = useState("");
  const [graded, setGraded] = useState<GradedState | null>(null);

  // Prevent duplicate submissions if the user hammers the button.
  const submittingRef = useRef(false);

  // Pre-compute target IPA so the prompt block matches the speech
  // version's visual density.
  const targetIpa = useMemo(() => {
    try {
      const sp = sentenceToPhonemes(phrase);
      const wordsIpa = sp.perWord
        .map((w) => phonemesToIpa(w.phonemes))
        .filter(Boolean);
      return wordsIpa.length ? `/${wordsIpa.join(" ")}/` : "";
    } catch {
      return "";
    }
  }, [phrase]);

  // Reset state if the phrase changes (parent reusing the component).
  useEffect(() => {
    setStage("idle");
    setTyped("");
    setGraded(null);
    submittingRef.current = false;
  }, [phrase]);

  const canSubmit = typed.trim().length > 0 && stage !== "grading";

  const handleGrade = async () => {
    if (!canSubmit || submittingRef.current) return;
    submittingRef.current = true;
    hapticImpact("medium");
    setStage("grading");

    const cleanTyped = typed.trim();

    // Word-level grade — synchronous, cheap.
    const grade = gradePronunciation(phrase, cleanTyped);

    // Phoneme-level analysis — same downstream pipeline as STT path.
    // Wrapped in try/catch so an unexpected g2p miss doesn't strand
    // the user mid-exercise.
    let phonemes: PhonemeAnalysisResult;
    try {
      phonemes = await gradePronunciationWithPhonemes(phrase, cleanTyped);
    } catch {
      phonemes = {
        overall: grade.score,
        perWord: [],
        weakSounds: [],
        tipsTr: [],
      };
    }

    hapticForScore(grade.score);
    setGraded({ grade, phonemes, typed: cleanTyped });
    setStage("graded");
    submittingRef.current = false;
  };

  const handleRetry = () => {
    hapticImpact("light");
    setGraded(null);
    setTyped("");
    setStage("idle");
    submittingRef.current = false;
  };

  const handleContinue = () => {
    if (!graded) return;
    onComplete(
      {
        exercise_id: "typing_pronunciation",
        exercise_type: "pronounce_phrase",
        correct: graded.grade.score >= 50,
        score: graded.grade.score,
        feedback: feedbackFor(graded.grade.score),
      },
      {
        grade: graded.grade,
        phonemeAnalysis: graded.phonemes,
        typed: graded.typed,
      },
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.prompt}>Yazarak pratik</Text>

      <View style={styles.phraseBlock}>
        <Text style={styles.phrase}>{phrase}</Text>
        {targetIpa ? <Text style={styles.ipa}>{targetIpa}</Text> : null}
        {trMeaning ? <Text style={styles.meaning}>{trMeaning}</Text> : null}
        <View style={styles.speakerRow}>
          <SpeakerButton text={phrase} size="lg" />
          <Text style={styles.speakerHint}>Önce dinle</Text>
        </View>
      </View>

      {stage !== "graded" ? (
        <View style={styles.inputBlock}>
          <Text style={styles.inputLabel}>
            Söyleyeceğin cümleyi aynen yaz
          </Text>
          <TextInput
            style={styles.input}
            value={typed}
            onChangeText={setTyped}
            placeholder="Buraya yaz..."
            placeholderTextColor={tokens.text.tertiary}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            spellCheck={false}
            editable={stage !== "grading"}
            onSubmitEditing={handleGrade}
            returnKeyType="done"
            multiline
            blurOnSubmit
          />
        </View>
      ) : null}

      {stage === "graded" && graded ? (
        <ScrollView
          style={styles.gradedScroll}
          contentContainerStyle={styles.gradedBlock}
        >
          <View style={styles.wordsRow}>
            {graded.grade.bandsByWord.map((wb, idx) => (
              <View
                key={`${wb.word}-${idx}`}
                style={[
                  styles.wordChip,
                  { backgroundColor: BAND_COLORS[wb.band] },
                ]}
              >
                <Text style={styles.wordText}>{wb.word}</Text>
              </View>
            ))}
          </View>

          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Skor</Text>
            <Text style={styles.scoreValue}>{graded.grade.score}/100</Text>
          </View>
          <Text style={styles.feedbackText}>
            {feedbackFor(graded.grade.score)}
          </Text>

          {graded.phonemes.tipsTr.length > 0 ? (
            <View style={styles.tipsBlock}>
              <Text style={styles.tipsTitle}>Sesli söyleyecekken dikkat</Text>
              {graded.phonemes.tipsTr.map((t, i) => (
                <Text key={i} style={styles.tipText}>
                  - {t}
                </Text>
              ))}
            </View>
          ) : null}

          <View style={styles.typedEcho}>
            <Text style={styles.typedEchoLabel}>Yazdığın</Text>
            <Text style={styles.typedEchoValue}>{graded.typed}</Text>
          </View>
        </ScrollView>
      ) : null}

      <View style={styles.footer}>
        {stage !== "graded" ? (
          <>
            <Pressable
              onPress={handleGrade}
              disabled={!canSubmit}
              style={({ pressed }) => [
                styles.cta,
                !canSubmit && styles.ctaDisabled,
                pressed && canSubmit && styles.ctaPressed,
              ]}
            >
              <Text style={styles.ctaText}>
                {stage === "grading"
                  ? "Değerlendiriliyor..."
                  : "Değerlendir"}
              </Text>
            </Pressable>
            {speechAvailable && onSwitchToSpeech ? (
              <Pressable
                onPress={onSwitchToSpeech}
                style={({ pressed }) => [
                  styles.switchBtn,
                  pressed && styles.switchBtnPressed,
                ]}
                hitSlop={8}
              >
                <Text style={styles.switchBtnText}>Sesli moda geç</Text>
              </Pressable>
            ) : null}
          </>
        ) : (
          <View style={styles.gradedButtons}>
            <View style={styles.retryWrap}>
              <Button
                label="Tekrar dene"
                onPress={handleRetry}
                variant="secondary"
              />
            </View>
            <View style={styles.continueWrap}>
              <Button label="Devam et" onPress={handleContinue} />
            </View>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
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
    marginBottom: tokens.spacing.xs,
    fontStyle: "italic",
  },
  meaning: {
    fontSize: 15,
    color: tokens.text.onSurfaceVariant,
    marginBottom: tokens.spacing.sm,
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

  // Input
  inputBlock: {
    marginTop: tokens.spacing.sm,
  },
  inputLabel: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    marginBottom: tokens.spacing.xs,
  },
  input: {
    minHeight: 96,
    borderWidth: 2,
    borderColor: tokens.border.light,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.sm,
    fontSize: 18,
    color: tokens.text.primary,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    textAlignVertical: "top",
  },

  // Graded
  gradedScroll: {
    flexGrow: 0,
  },
  gradedBlock: {
    marginTop: tokens.spacing.sm,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
  },
  wordsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: tokens.spacing.md,
  },
  wordChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: tokens.radius.sm,
  },
  wordText: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: tokens.spacing.xs,
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
    paddingTop: tokens.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    gap: 4,
  },
  tipsTitle: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    marginBottom: tokens.spacing.xs,
  },
  tipText: {
    fontSize: 14,
    color: tokens.text.onSurfaceVariant,
    lineHeight: 20,
  },
  typedEcho: {
    marginTop: tokens.spacing.sm,
    paddingTop: tokens.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  typedEchoLabel: {
    fontSize: 12,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    fontWeight: tokens.weight.bold,
    marginBottom: 2,
  },
  typedEchoValue: {
    fontSize: 15,
    color: tokens.text.secondary,
    fontStyle: "italic",
  },

  // Footer
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
    gap: tokens.spacing.sm,
  },
  cta: {
    backgroundColor: tokens.brand.primaryContainer,
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  ctaDisabled: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  ctaText: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },
  switchBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  switchBtnPressed: {
    opacity: 0.6,
  },
  switchBtnText: {
    fontSize: 14,
    color: tokens.brand.tertiary,
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
