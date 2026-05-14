// Cultural Intelligence Quiz — 10 random scenarios, forced choice A/B.
// Built from do_tr vs dont_tr fields of each tip.
// Calm, magazine-like presentation; no celebratory streamers.
//
// Add to _layout.tsx:  <Stack.Screen name="cultural-quiz" />

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../theme";
import {
  CULTURAL_TIPS,
  type CulturalTip,
  type CulturalAxis,
} from "../data/cultural-tips";

const AXIS_LABEL_TR: Record<CulturalAxis, string> = {
  directness: "Doğrudanlık",
  register: "Resmiyet",
  regional: "Bölgesel",
  humor: "Mizah",
  tipping: "Bahşiş",
  "body-language": "Beden Dili",
  "small-talk": "Küçük Sohbet",
  compliments: "İltifat",
  complaints: "Şikâyet",
  agreement: "Onay",
  time: "Zaman",
  "social-norms": "Sosyal Normlar",
};

const QUIZ_SIZE = 10;

type ChoiceSlot = "A" | "B";

interface QuizQuestion {
  tipId: string;
  axis: CulturalAxis;
  scenario: string;
  options: { slot: ChoiceSlot; text: string; isCorrect: boolean }[];
  correctSlot: ChoiceSlot;
  pitfall: string;
  title: string;
}

function shuffle<T>(arr: readonly T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function buildQuestion(tip: CulturalTip): QuizQuestion {
  // Randomize whether DO is A or B
  const correctIsA = Math.random() < 0.5;
  const options: QuizQuestion["options"] = correctIsA
    ? [
        { slot: "A", text: tip.do_tr, isCorrect: true },
        { slot: "B", text: tip.dont_tr, isCorrect: false },
      ]
    : [
        { slot: "A", text: tip.dont_tr, isCorrect: false },
        { slot: "B", text: tip.do_tr, isCorrect: true },
      ];

  return {
    tipId: tip.id,
    axis: tip.axis,
    scenario: tip.scenario_tr,
    options,
    correctSlot: correctIsA ? "A" : "B",
    pitfall: tip.pitfall_for_turks_tr,
    title: tip.title_tr,
  };
}

export default function CulturalQuizScreen() {
  const router = useRouter();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<ChoiceSlot | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const buildOnce = useRef(false);

  useEffect(() => {
    if (buildOnce.current) return;
    buildOnce.current = true;
    const pool = shuffle(CULTURAL_TIPS).slice(0, QUIZ_SIZE);
    setQuestions(pool.map(buildQuestion));
  }, []);

  const q = questions[idx];
  const progress = questions.length === 0 ? 0 : (idx + 1) / questions.length;

  const summary = useMemo(() => {
    if (!done) return null;
    const pct = Math.round((score / questions.length) * 100);
    let kicker = "DENEME";
    let line = "Devam — kart sayfasında detayları gözden geçir.";
    if (pct >= 90) {
      kicker = "ETKİLEYİCİ";
      line = "Kültürel sezgi neredeyse anadil seviyesinde.";
    } else if (pct >= 70) {
      kicker = "İYİ";
      line = "Sağlam temel. Birkaç ince noktayı tekrar et.";
    } else if (pct >= 40) {
      kicker = "ORTA";
      line = "Birkaç kart daha okumaya değer.";
    } else {
      kicker = "BAŞLANGIÇ";
      line = "Kart sayfasını okumak hızlandıracak.";
    }
    return { pct, kicker, line };
  }, [done, score, questions.length]);

  const handleChoose = (slot: ChoiceSlot) => {
    if (selected !== null) return;
    setSelected(slot);
    if (slot === q.correctSlot) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setIdx((n) => n + 1);
    setSelected(null);
  };

  if (questions.length === 0) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Hazırlanıyor…</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (done && summary) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            <Text style={styles.backText}>← Geri</Text>
          </Pressable>
          <Text style={styles.title}>Sonuç</Text>
          <View style={styles.spacer} />
        </View>

        <ScrollView contentContainerStyle={styles.summaryBody}>
          <Text style={styles.summaryKicker}>{summary.kicker}</Text>
          <Text style={styles.summaryScore}>
            {score}
            <Text style={styles.summaryScoreTotal}>/{questions.length}</Text>
          </Text>
          <Text style={styles.summaryPct}>{summary.pct}% doğru</Text>
          <Text style={styles.summaryLine}>{summary.line}</Text>

          <View style={styles.divider} />

          <Text style={styles.reviewLabel}>SORULARI YENİDEN GÖZ AT</Text>
          {questions.map((qq, i) => {
            // We don't track per-question selection history (kept lightweight);
            // we just show the questions and correct answers as a recap.
            const correct = qq.options.find((o) => o.isCorrect);
            return (
              <View key={qq.tipId} style={styles.reviewItem}>
                <Text style={styles.reviewIdx}>#{i + 1}</Text>
                <Text style={styles.reviewTitle}>{qq.title}</Text>
                <Text style={styles.reviewAnswerLabel}>DOĞRU CEVAP</Text>
                <Text style={styles.reviewAnswer}>{correct?.text}</Text>
              </View>
            );
          })}

          <View style={{ height: 32 }} />

          <Pressable
            onPress={() => router.replace("/cultural" as never)}
            style={({ pressed }) => [
              styles.primaryBtn,
              pressed && styles.btnPressed,
            ]}
          >
            <Text style={styles.primaryBtnText}>Kartlara dön</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const isCorrect = selected !== null && selected === q.correctSlot;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Çık</Text>
        </Pressable>
        <Text style={styles.title}>Kültür Quizi</Text>
        <Text style={styles.scoreText}>
          {idx + 1}/{questions.length}
        </Text>
      </View>

      {/* Progress */}
      <View style={styles.progressOuter}>
        <View style={[styles.progressInner, { width: `${progress * 100}%` }]} />
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.axisLabel}>{AXIS_LABEL_TR[q.axis]}</Text>
        <Text style={styles.scenarioTitle}>{q.title}</Text>
        <Text style={styles.scenarioText}>{q.scenario}</Text>

        <View style={styles.optionsWrap}>
          {q.options.map((opt) => {
            const isSelected = selected === opt.slot;
            const showCorrect = selected !== null && opt.isCorrect;
            const showWrong = isSelected && !opt.isCorrect;
            return (
              <Pressable
                key={opt.slot}
                onPress={() => handleChoose(opt.slot)}
                disabled={selected !== null}
                style={({ pressed }) => [
                  styles.optionCard,
                  showCorrect && styles.optionCorrect,
                  showWrong && styles.optionWrong,
                  pressed && selected === null && styles.optionPressed,
                ]}
              >
                <View style={styles.optionTop}>
                  <Text
                    style={[
                      styles.optionSlot,
                      showCorrect && styles.optionSlotCorrect,
                      showWrong && styles.optionSlotWrong,
                    ]}
                  >
                    {opt.slot}
                  </Text>
                  {showCorrect && (
                    <Text style={styles.optionTagCorrect}>DOĞRU</Text>
                  )}
                  {showWrong && (
                    <Text style={styles.optionTagWrong}>YANLIŞ</Text>
                  )}
                </View>
                <Text style={styles.optionText}>{opt.text}</Text>
              </Pressable>
            );
          })}
        </View>

        {selected !== null && (
          <View
            style={[
              styles.feedback,
              isCorrect ? styles.feedbackOk : styles.feedbackBad,
            ]}
          >
            <Text
              style={[
                styles.feedbackKicker,
                isCorrect
                  ? styles.feedbackKickerOk
                  : styles.feedbackKickerBad,
              ]}
            >
              {isCorrect ? "İYİ SEZGİ" : "İNCE NOKTA"}
            </Text>
            <Text style={styles.feedbackText}>{q.pitfall}</Text>
          </View>
        )}

        <View style={{ height: 32 }} />
      </ScrollView>

      {selected !== null && (
        <View style={styles.footer}>
          <Pressable
            onPress={handleNext}
            style={({ pressed }) => [
              styles.primaryBtn,
              pressed && styles.btnPressed,
            ]}
          >
            <Text style={styles.primaryBtnText}>
              {idx + 1 >= questions.length ? "Bitir" : "Sıradaki →"}
            </Text>
          </Pressable>
        </View>
      )}
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
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  spacer: { width: 70 },
  scoreText: {
    width: 70,
    textAlign: "right",
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.4,
  },
  progressOuter: {
    height: 3,
    backgroundColor: tokens.bg.surfaceContainer,
    marginHorizontal: tokens.spacing.md,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressInner: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
  },
  body: { flex: 1 },
  bodyContent: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.md,
  },
  axisLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: 1.4,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  scenarioTitle: {
    fontSize: 24,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    lineHeight: 30,
    marginBottom: tokens.spacing.sm,
  },
  scenarioText: {
    fontSize: 16,
    color: tokens.text.secondary,
    lineHeight: 24,
    marginBottom: tokens.spacing.md,
  },
  optionsWrap: {
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.md,
  },
  optionCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 2,
    borderColor: tokens.border.light,
    marginBottom: tokens.spacing.sm,
  },
  optionPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  optionCorrect: {
    backgroundColor: tokens.semantic.successContainer,
    borderColor: tokens.semantic.success,
  },
  optionWrong: {
    backgroundColor: tokens.semantic.errorContainer,
    borderColor: tokens.semantic.error,
  },
  optionTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  optionSlot: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.tertiary,
    letterSpacing: -0.5,
  },
  optionSlotCorrect: {
    color: tokens.semantic.success,
  },
  optionSlotWrong: {
    color: tokens.semantic.error,
  },
  optionTagCorrect: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.semantic.success,
    letterSpacing: 1.2,
  },
  optionTagWrong: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.semantic.error,
    letterSpacing: 1.2,
  },
  optionText: {
    fontSize: 15,
    color: tokens.text.primary,
    lineHeight: 22,
    fontWeight: tokens.weight.medium,
  },
  feedback: {
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    marginTop: tokens.spacing.sm,
    borderLeftWidth: 4,
  },
  feedbackOk: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderLeftColor: tokens.brand.tertiary,
  },
  feedbackBad: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderLeftColor: tokens.text.primary,
  },
  feedbackKicker: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  feedbackKickerOk: {
    color: tokens.brand.tertiary,
  },
  feedbackKickerBad: {
    color: tokens.text.primary,
  },
  feedbackText: {
    fontSize: 14,
    color: tokens.text.primary,
    lineHeight: 21,
    fontWeight: tokens.weight.regular,
  },
  footer: {
    padding: tokens.spacing.md,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.app,
  },
  primaryBtn: {
    height: 52,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },
  btnPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 14,
    color: tokens.text.tertiary,
  },
  summaryBody: {
    padding: tokens.spacing.md,
    paddingBottom: 64,
  },
  summaryKicker: {
    fontSize: 12,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: 1.6,
    marginTop: tokens.spacing.md,
    marginBottom: tokens.spacing.base,
  },
  summaryScore: {
    fontSize: 96,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -3,
    lineHeight: 100,
  },
  summaryScoreTotal: {
    fontSize: 32,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
  },
  summaryPct: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    marginBottom: tokens.spacing.sm,
  },
  summaryLine: {
    fontSize: 17,
    color: tokens.text.secondary,
    lineHeight: 25,
    marginBottom: tokens.spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: tokens.border.light,
    marginVertical: tokens.spacing.md,
  },
  reviewLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: tokens.spacing.sm,
  },
  reviewItem: {
    padding: tokens.spacing.sm,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.sm,
    marginBottom: 10,
  },
  reviewIdx: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  reviewTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 6,
    lineHeight: 20,
  },
  reviewAnswerLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.black,
    color: tokens.semantic.success,
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  reviewAnswer: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
  },
});
