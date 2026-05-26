// ListenAndTranscribe — user listens to English audio, types what they heard.
// Cyber-Electric theme. Two states: input → submitted.
// Replay capped at 3. trHint surfaces only after the 2nd replay (subtle nudge).

import { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { hapticForScore, hapticSelection } from "../../lib/feedback";
import { matchPhrase, type ExerciseResult } from "../../lib/engine";
import { speak } from "../../lib/tts";

interface Props {
  sentence: string;
  acceptedVariants?: string[];
  trHint?: string;
  onComplete: (result: ExerciseResult) => void;
  /** 2026-05-25 (B-SCN-15) — Opt-in skip kapısı. Placement gibi flow'larda
   *  TTS/audio çalışmazsa veya kullanıcı dinleme istemiyorsa stuck kalmadan
   *  çıkabilir. Lesson akışında verilmez → buton görünmez (geri uyumluluk). */
  onSkip?: () => void;
}

const MAX_PLAYS = 3;

export function ListenAndTranscribe({
  sentence,
  acceptedVariants,
  trHint,
  onComplete,
  onSkip,
}: Props) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ExerciseResult | null>(null);
  const [playCount, setPlayCount] = useState(0);
  const didAutoPlay = useRef(false);
  // 2026-05-26 (P1 audit fix) — double-tap guard. setResult commit'ten
  // önce ikinci tap evaluate'i tekrar çalıştırıp hapticForScore'u iki
  // kez tetikliyordu.
  const submittedRef = useRef(false);

  // Auto-play on mount after 400ms delay. The initial play doesn't count
  // against the user's 3 replays — only manual taps do.
  useEffect(() => {
    if (didAutoPlay.current) return;
    didAutoPlay.current = true;
    const t = setTimeout(() => {
      speak(sentence);
    }, 400);
    return () => clearTimeout(t);
  }, [sentence]);

  const playable = playCount < MAX_PLAYS;

  const onReplay = () => {
    if (!playable) return;
    hapticSelection();
    speak(sentence);
    setPlayCount((c) => c + 1);
  };

  const submit = () => {
    if (!input.trim() || submittedRef.current) return;
    // 2026-05-25 (B-SCN-22) — Lesson author audio_text/sentence boş bıraktıysa
    // ve acceptedVariants da boş geliyorsa matchPhrase candidates.length === 0
    // branch'ine düşüp 0 puan veriyordu. Kullanıcıya anlamlı geri dön.
    if (!sentence.trim() && (!acceptedVariants || acceptedVariants.every((v) => !v.trim()))) {
      submittedRef.current = true;
      setResult({
        exercise_id: "listen_transcribe",
        exercise_type: "listen_transcribe",
        correct: false,
        score: 0,
        feedback: "Bu egzersiz hazır değil — bir sonrakine geç.",
      });
      return;
    }
    submittedRef.current = true;
    const match = matchPhrase({
      user_text: input,
      canonical: sentence,
      accepted_variants: acceptedVariants ?? [],
    });
    const score = Math.round(match.similarity * 100);
    const correct = match.similarity >= 0.75;
    const r: ExerciseResult = {
      exercise_id: "listen_transcribe",
      exercise_type: "listen_transcribe",
      correct,
      score,
      feedback: correct
        ? `Doğru duydun! "${sentence}"`
        : `Doğrusu: "${sentence}"`,
    };
    setResult(r);
    hapticForScore(r.score);
  };

  const replayLabel = playable
    ? `Tekrar dinle (${playCount}/${MAX_PLAYS})`
    : "Daha fazla dinleme yok";

  // Show trHint only after 2nd replay, and only while still answering.
  const showHint = !result && !!trHint && playCount >= 2;

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Duy ve yaz</Text>

      <View style={styles.speakerBlock}>
        <Pressable
          onPress={onReplay}
          disabled={!playable || !!result}
          hitSlop={12}
          style={({ pressed }) => [
            styles.speakerBtn,
            !playable && styles.speakerBtnDim,
            pressed && playable && styles.speakerBtnPressed,
          ]}
        >
          <Text style={styles.speakerIcon}>🔊</Text>
        </Pressable>
        <Text
          style={[styles.replayLabel, !playable && styles.replayLabelDim]}
        >
          {replayLabel}
        </Text>
      </View>

      <TextInput
        style={[
          styles.input,
          result && (result.correct ? styles.inputOk : styles.inputMiss),
        ]}
        placeholder="Duyduğunu yaz..."
        placeholderTextColor={tokens.text.secondary}
        value={input}
        onChangeText={setInput}
        multiline
        editable={!result}
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      {result && (
        <View
          style={[
            styles.feedback,
            result.correct ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {result.correct
              ? `✓ ${result.score}/100`
              : `✗ ${result.score}/100`}
          </Text>
          <Text style={styles.feedbackAnswerLabel}>Doğru cevap</Text>
          <Text style={styles.feedbackAnswer}>{sentence}</Text>
        </View>
      )}

      {showHint && <Text style={styles.hint}>💡 {trHint}</Text>}

      {/* 2026-05-25 (B-SCN-15) — Skip kapısı. Sadece parent onSkip verdiyse
          ve henüz cevap göndermediyse (graded sonrası skip mantıksız) görünür.
          Placement flow için escape hatch. */}
      {onSkip && !result && (
        <Pressable
          onPress={() => {
            hapticSelection();
            onSkip();
          }}
          style={({ pressed }) => [
            styles.skipBtn,
            pressed && styles.skipBtnPressed,
          ]}
          hitSlop={8}
        >
          <Text style={styles.skipBtnText}>Bu egzersizi atla →</Text>
        </Pressable>
      )}

      <View style={styles.footer}>
        <Button
          label={result ? "Devam et →" : "Kontrol et"}
          onPress={result ? () => onComplete(result) : submit}
          disabled={!result && !input.trim()}
        />
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
    marginBottom: tokens.spacing.md,
  },
  speakerBlock: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: tokens.spacing.lg,
    gap: tokens.spacing.sm,
  },
  speakerBtn: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  speakerBtnPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
  speakerBtnDim: {
    opacity: 0.35,
  },
  speakerIcon: {
    fontSize: 52,
    color: tokens.brand.tertiary,
  },
  replayLabel: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },
  replayLabelDim: {
    color: tokens.text.tertiary,
  },
  input: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    color: tokens.text.primary,
    fontSize: 17,
    minHeight: 110,
    textAlignVertical: "top",
  },
  inputOk: { borderColor: tokens.brand.primaryFixed },
  inputMiss: { borderColor: tokens.semantic.error },
  feedback: {
    marginTop: tokens.spacing.md,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
  },
  feedbackOk: {
    backgroundColor: "rgba(246, 255, 0, 0.12)",
    borderWidth: 1,
    borderColor: tokens.brand.primaryFixed,
  },
  feedbackMiss: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  feedbackTitle: {
    color: tokens.text.primary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 18,
    marginBottom: 4,
  },
  feedbackAnswerLabel: {
    color: tokens.text.secondary,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: tokens.weight.bold,
    marginTop: 4,
  },
  feedbackAnswer: {
    color: tokens.text.primary,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    lineHeight: 20,
  },
  hint: {
    color: tokens.text.secondary,
    fontSize: 14,
    marginTop: tokens.spacing.md,
  },
  // Skip button — küçük, tertiary tonda. Yalnızca onSkip prop'u verildiyse.
  skipBtn: {
    marginTop: tokens.spacing.md,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: tokens.border.outline,
  },
  skipBtnPressed: {
    opacity: 0.6,
  },
  skipBtnText: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.2,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },
});
