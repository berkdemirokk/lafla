// Daily 10 words — learn, then a quick multiple-choice check.
//
// 1. Learn: one card per word (English, Turkish, example, audio).
// 2. Check: Turkish prompt, four English choices, shuffled order.
// 3. Done: score, words go into the SRS review queue, streak counts.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { Button } from "../components/Button";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";
import { DailyWordsShareButton } from "../components/DailyWordsShareCard";
import { tokens } from "../theme";
import { useTranslation } from "../lib/i18n";
import { speak } from "../lib/tts";
import { trackEvent } from "../lib/analytics";
import {
  completeTodayWords,
  getDistractorsFor,
  getTodayWords,
  type DailyWord,
} from "../lib/daily-words";
import { maybeRequestReview } from "../lib/review-prompt";

type Phase = "learn" | "check" | "done";

interface Question {
  word: DailyWord;
  options: string[];
}

function shuffle<T>(items: T[]): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

export default function DailyWordsScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");
  const [words, setWords] = useState<DailyWord[]>([]);
  const [phase, setPhase] = useState<Phase>("learn");
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [results, setResults] = useState<Array<{ key: string; correct: boolean }>>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [saving, setSaving] = useState(false);
  const reviewAsked = useRef(false);
  const finishing = useRef(false);
  const dayKeyRef = useRef<string | undefined>(undefined);

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const today = await getTodayWords();
      dayKeyRef.current = today.dayKey;
      setWords(today.words);
      if (today.completed) {
        setCorrectCount(today.correctCount ?? 0);
        setPhase("done");
      } else {
        setPhase("learn");
        setIdx(0);
        void trackEvent("daily_words_started", { total: today.words.length }).catch(() => {});
      }
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const questions = useMemo<Question[]>(
    () =>
      shuffle(words).map((word) => ({
        word,
        options: shuffle([word.word, ...getDistractorsFor(word)]),
      })),
    [words],
  );

  const current = words[idx];
  const question = questions[idx];

  const nextLearn = () => {
    void Haptics.selectionAsync().catch(() => {});
    if (idx + 1 >= words.length) {
      setPhase("check");
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };

  const choose = (option: string) => {
    if (!question || picked) return;
    const correct = option === question.word.word;
    setPicked(option);
    void Haptics.notificationAsync(
      correct
        ? Haptics.NotificationFeedbackType.Success
        : Haptics.NotificationFeedbackType.Error,
    ).catch(() => {});
    setResults((prev) => [...prev, { key: question.word.key, correct }]);
  };

  const finish = async (all: Array<{ key: string; correct: boolean }>) => {
    if (finishing.current) return;
    finishing.current = true;
    setSaving(true);
    try {
      const res = await completeTodayWords(all, new Date(), dayKeyRef.current);
      setCorrectCount(res.correctCount);
      setPhase("done");
      if (!res.alreadyCompleted && !reviewAsked.current && words.length > 0) {
        reviewAsked.current = true;
        const ratio = res.correctCount / words.length;
        setTimeout(() => void maybeRequestReview(ratio), 1200);
      }
    } catch {
      finishing.current = false;
      setStatus("error");
    } finally {
      setSaving(false);
    }
  };

  const nextCheck = () => {
    if (idx + 1 >= questions.length) {
      void finish(results);
    } else {
      setIdx(idx + 1);
      setPicked(null);
    }
  };

  if (status !== "ready") {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <AsyncScreenState status={status} onRetry={() => void load()} />
      </SafeAreaView>
    );
  }

  const header = (
    <View style={styles.header}>
      <Pressable
        onPress={() => router.back()}
        style={styles.headerSide}
        hitSlop={12}
        accessibilityRole="button"
        accessibilityLabel={t("common.back")}
      >
        <Text style={styles.backText}>← {t("common.back")}</Text>
      </Pressable>
      <Text style={styles.headerTitle}>
        {phase === "check" ? t("dailyWords.check_title") : t("dailyWords.title")}
      </Text>
      <Text style={[styles.headerSide, styles.progress]}>
        {phase === "done" ? "" : `${idx + 1} / ${words.length}`}
      </Text>
    </View>
  );

  if (words.length === 0) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        {header}
        <View style={styles.center}>
          <Text style={styles.doneTitle}>{t("dailyWords.empty_title")}</Text>
          <Text style={styles.doneSub}>{t("dailyWords.empty_body")}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (phase === "done") {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        {header}
        <ScrollView contentContainerStyle={styles.doneWrap}>
          <Text style={styles.doneEmoji}>🎯</Text>
          <Text style={styles.doneTitle}>{t("dailyWords.done_title")}</Text>
          <Text style={styles.doneScore} accessibilityLiveRegion="polite">
            {t("dailyWords.done_score", {
              correct: String(correctCount),
              total: String(words.length),
            })}
          </Text>
          <Text style={styles.doneSub}>{t("dailyWords.done_body")}</Text>
          <View style={styles.wordList}>
            {words.map((w) => (
              <Pressable
                key={w.key}
                onPress={() => void speak(w.word).catch(() => {})}
                style={({ pressed }) => [styles.wordRow, pressed && styles.pressed]}
                accessibilityRole="button"
                accessibilityLabel={t("dailyWords.listen", { word: w.word })}
              >
                <Text style={styles.wordRowEn}>{w.word}</Text>
                <Text style={styles.wordRowTr} numberOfLines={1}>
                  {w.translation}
                </Text>
              </Pressable>
            ))}
          </View>
          <DailyWordsShareButton correct={correctCount} total={words.length} words={words} />
          <View style={styles.footerBtn}>
            <Button
              label={t("dailyWords.back_today")}
              onPress={() =>
                router.canGoBack() ? router.back() : router.replace("/today" as never)
              }
              stacked
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (phase === "learn" && current) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        {header}
        <View style={styles.body}>
          <View style={styles.card}>
            <Text style={styles.levelPill}>{current.cefr}</Text>
            <Pressable
              onPress={() => void speak(current.word).catch(() => {})}
              accessibilityRole="button"
              accessibilityLabel={t("dailyWords.listen", { word: current.word })}
            >
              <Text style={styles.cardWord}>{current.word} 🔊</Text>
            </Pressable>
            <Text style={styles.cardTr}>{current.translation}</Text>
            {current.example ? (
              <View style={styles.exampleBox}>
                <Text style={styles.exampleEn}>{current.example}</Text>
                {current.exampleTr ? (
                  <Text style={styles.exampleTr}>{current.exampleTr}</Text>
                ) : null}
              </View>
            ) : null}
          </View>
          <Button
            label={
              idx + 1 >= words.length ? t("dailyWords.start_check") : t("dailyWords.next_word")
            }
            onPress={nextLearn}
            stacked
          />
        </View>
      </SafeAreaView>
    );
  }

  if (!question) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <AsyncScreenState status="error" onRetry={() => void load()} />
      </SafeAreaView>
    );
  }

  const isLast = idx + 1 >= questions.length;
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />
      {header}
      <View style={styles.body}>
        <View style={styles.questionCard}>
          <Text style={styles.questionHint}>{t("dailyWords.question_hint")}</Text>
          <Text style={styles.questionTr}>{question.word.translation}</Text>
        </View>
        <View style={styles.options}>
          {question.options.map((option) => {
            const isAnswer = option === question.word.word;
            const isPicked = option === picked;
            return (
              <Pressable
                key={option}
                onPress={() => choose(option)}
                disabled={Boolean(picked)}
                style={({ pressed }) => [
                  styles.option,
                  picked && isAnswer && styles.optionCorrect,
                  picked && isPicked && !isAnswer && styles.optionWrong,
                  pressed && !picked && styles.pressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel={option}
                accessibilityState={{ disabled: Boolean(picked), selected: isPicked }}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            );
          })}
        </View>
        <Button
          label={isLast ? t("dailyWords.finish") : t("common.continue")}
          onPress={nextCheck}
          disabled={!picked || saving}
          loading={saving}
          stacked
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  headerSide: { minWidth: 72 },
  backText: {
    color: tokens.text.secondary,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  progress: {
    textAlign: "right",
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    justifyContent: "space-between",
    gap: 20,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
  levelPill: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 1,
  },
  cardWord: {
    fontSize: 34,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    fontFamily: tokens.font.display,
  },
  cardTr: {
    fontSize: 20,
    fontWeight: tokens.weight.semibold,
    color: tokens.brand.tertiary,
    textAlign: "center",
  },
  exampleBox: {
    marginTop: 12,
    padding: 16,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    alignSelf: "stretch",
    gap: 6,
  },
  exampleEn: {
    fontSize: 16,
    color: tokens.text.primary,
    lineHeight: 22,
  },
  exampleTr: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  questionCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    paddingHorizontal: 24,
    paddingVertical: 36,
    alignItems: "center",
    gap: 10,
  },
  questionHint: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.6,
  },
  questionTr: {
    fontSize: 28,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    fontFamily: tokens.font.display,
  },
  options: { gap: 10 },
  option: {
    minHeight: 54,
    justifyContent: "center",
    paddingHorizontal: 18,
    borderRadius: tokens.radius.base,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  optionCorrect: {
    borderColor: tokens.semantic.success,
    backgroundColor: tokens.semantic.successContainer,
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionText: {
    fontSize: 17,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  pressed: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  doneWrap: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 48,
    gap: 10,
  },
  doneEmoji: { fontSize: 48 },
  doneTitle: {
    fontSize: 26,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    fontFamily: tokens.font.display,
  },
  doneScore: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },
  doneSub: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 21,
  },
  wordList: { alignSelf: "stretch", marginTop: 16, gap: 8 },
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  wordRowEn: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  wordRowTr: {
    flexShrink: 1,
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "right",
  },
  footerBtn: { alignSelf: "stretch", marginTop: 24 },
});
