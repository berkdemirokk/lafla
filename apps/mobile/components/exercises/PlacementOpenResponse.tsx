import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Button } from "../Button";
import type { ExerciseResult } from "../../lib/engine";
import { hapticImpact } from "../../lib/feedback";
import { useTranslation } from "../../lib/i18n";
import { scorePlacementProduction } from "../../lib/placement-production";
import { isAvailable, startListening, stopListening } from "../../lib/speech-recognition";
import { tokens } from "../../theme";

interface Props {
  prompt: string;
  trHint?: string;
  onComplete: (result: ExerciseResult) => void;
  onSkip: () => void;
}

type Stage = "idle" | "starting" | "listening";

export function PlacementOpenResponse({ prompt, trHint, onComplete, onSkip }: Props) {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [stage, setStage] = useState<Stage>("idle");
  const [error, setError] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => () => {
    abortRef.current?.abort();
    void stopListening();
  }, []);

  const toggleListening = async () => {
    if (stage === "listening") {
      await stopListening();
      setStage("idle");
      return;
    }
    if (stage !== "idle") return;

    hapticImpact("medium");
    setError(false);
    setStage("starting");
    if (!(await isAvailable().catch(() => false))) {
      setError(true);
      setStage("idle");
      return;
    }

    const controller = new AbortController();
    abortRef.current = controller;
    await startListening({
      lang: "en-US",
      timeoutMs: 20000,
      signal: controller.signal,
      onResult: (transcript, isFinal) => {
        setText(transcript);
        setStage(isFinal ? "idle" : "listening");
      },
      onError: () => {
        if (!controller.signal.aborted) setError(true);
        setStage("idle");
      },
    }).catch(() => {
      setError(true);
      setStage("idle");
    });
    if (!controller.signal.aborted) setStage((current) => current === "starting" ? "listening" : current);
  };

  const submit = () => {
    const answer = text.trim();
    if (!answer) return;
    const score = scorePlacementProduction(answer);
    onComplete({
      exercise_id: "placement_open_response",
      exercise_type: "placement_open_response",
      correct: score >= 50,
      score,
      user_responses: [answer],
    });
  };

  const listening = stage === "listening";
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>{t("placement.open_response_label")}</Text>
      <Text style={styles.prompt}>{prompt}</Text>
      {trHint ? <Text style={styles.hint}>{trHint}</Text> : null}

      <TextInput
        value={text}
        onChangeText={setText}
        multiline
        maxLength={800}
        placeholder={t("placement.open_response_placeholder")}
        placeholderTextColor={tokens.text.tertiary}
        style={styles.input}
        textAlignVertical="top"
        autoCapitalize="sentences"
        autoCorrect
        accessibilityLabel={t("placement.open_response_input_label")}
      />

      <Pressable
        onPress={() => void toggleListening()}
        style={({ pressed }) => [styles.micButton, listening && styles.micButtonActive, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={listening ? t("exercise.stop_microphone") : t("placement.open_response_record")}
      >
        {stage === "starting" ? (
          <ActivityIndicator color={tokens.text.primary} />
        ) : (
          <Ionicons name={listening ? "stop" : "mic"} size={22} color={tokens.text.primary} />
        )}
        <Text style={styles.micLabel}>
          {listening ? t("placement.open_response_listening") : t("placement.open_response_record")}
        </Text>
      </Pressable>
      {error ? <Text style={styles.error}>{t("placement.open_response_mic_fallback")}</Text> : null}

      <Button label={t("placement.open_response_submit")} onPress={submit} disabled={!text.trim()} stacked />
      <Button label={t("common.skip")} onPress={onSkip} variant="ghost" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 14 },
  eyebrow: { color: tokens.brand.tertiary, fontSize: 12, fontWeight: tokens.weight.extrabold },
  prompt: { color: tokens.text.primary, fontSize: 24, lineHeight: 32, fontWeight: tokens.weight.black },
  hint: { color: tokens.text.secondary, fontSize: 14, lineHeight: 20 },
  input: {
    minHeight: 132,
    padding: 16,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    backgroundColor: tokens.bg.surfaceContainer,
    color: tokens.text.primary,
    fontSize: 16,
    lineHeight: 24,
  },
  micButton: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  micButtonActive: { borderWidth: 1, borderColor: tokens.brand.tertiary },
  micLabel: { color: tokens.text.primary, fontSize: 15, fontWeight: tokens.weight.bold },
  error: { color: tokens.semantic.error, fontSize: 13, lineHeight: 18 },
  pressed: { opacity: 0.82 },
});
