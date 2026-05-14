// Listening drama player + comprehension Q's.
// Three phases: pre-listen vocab preview → listen → questions → complete.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../../theme";
import { Button } from "../../components/Button";
import {
  ListeningPlayer,
  type PlayerLine,
} from "../../components/exercises/ListeningPlayer";
import { speak, stop as stopSpeech } from "../../lib/tts";
import { hapticForScore, hapticSelection } from "../../lib/feedback";
import { markListeningComplete } from "../../lib/listening";

// Defensive import — see app/listening.tsx for context.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let importedDramas: any[] = [];
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("../../data/listening-dramas");
  importedDramas =
    mod.LISTENING_DRAMAS ?? mod.listeningDramas ?? mod.default ?? [];
} catch {
  // TODO(integration): wire to data/listening-dramas.ts when it lands.
  importedDramas = [];
}

interface LocalLine {
  speaker: string;
  text: string;
}

interface LocalVocab {
  en: string;
  tr: string;
}

interface LocalQuestion {
  prompt?: string;
  question?: string;
  question_tr?: string;
  question_en?: string;
  options: string[];
  correctIndex?: number;
  correct_index?: number;
  tr_explanation?: string;
  trExplanation?: string;
}

interface LocalDrama {
  id: string;
  emoji?: string;
  title: string;
  level?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  cefrLevel?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  durationMin?: number;
  duration_min?: number;
  description?: string;
  vocabPreview?: LocalVocab[];
  vocab_preview?: LocalVocab[];
  lines: LocalLine[];
  questions: LocalQuestion[];
}

function findDrama(id: string | undefined): LocalDrama | null {
  if (!id) return null;
  const list = importedDramas as LocalDrama[];
  return list.find((d) => d.id === id) ?? null;
}

function rateForLevel(lvl?: string): number {
  switch (lvl) {
    case "A1":
      return 0.85;
    case "A2":
      return 0.92;
    case "B1":
      return 0.97;
    case "B2":
      return 1.0;
    case "C1":
    case "C2":
      return 1.05;
    default:
      return 0.95;
  }
}

type Phase = "preview" | "listen" | "questions" | "done";

export default function ListeningDramaScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const drama = useMemo(() => findDrama(id), [id]);

  if (!drama) {
    return <NotFound onBack={() => router.back()} id={id} />;
  }

  const lines: PlayerLine[] = (drama.lines ?? []).map((l) => ({
    speaker: l.speaker,
    text: l.text,
  }));
  const vocab = drama.vocabPreview ?? drama.vocab_preview ?? [];
  const questions = (drama.questions ?? []).map((q) => ({
    prompt: q.question_tr ?? q.prompt ?? q.question ?? q.question_en ?? "",
    options: q.options ?? [],
    correctIndex:
      typeof q.correctIndex === "number"
        ? q.correctIndex
        : typeof q.correct_index === "number"
          ? q.correct_index
          : 0,
    explanation: q.trExplanation ?? q.tr_explanation ?? "",
  }));
  const level = drama.level ?? drama.cefrLevel;
  const baseRate = rateForLevel(level);

  const [phase, setPhase] = useState<Phase>("preview");
  const [previewIdx, setPreviewIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [qIdx, setQIdx] = useState(0);
  const savedRef = useRef(false);

  // Stop any speech when leaving the screen
  useEffect(() => {
    return () => stopSpeech();
  }, []);

  // Compute score once questions are done
  const score = useMemo(() => {
    if (answers.length !== questions.length || questions.length === 0) return 0;
    const correct = answers.filter(
      (a, i) => a === questions[i]!.correctIndex,
    ).length;
    return Math.round((correct / questions.length) * 100);
  }, [answers, questions]);

  // Persist completion when entering "done"
  useEffect(() => {
    if (phase !== "done" || savedRef.current) return;
    savedRef.current = true;
    markListeningComplete(drama.id, score).catch(() => {});
  }, [phase, drama.id, score]);

  // ----------------------------------------------------------------
  // Phase: PREVIEW (vocab cards before listen)
  // ----------------------------------------------------------------
  if (phase === "preview") {
    const total = vocab.length;
    const current = vocab[previewIdx];

    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <Header
          title={drama.title}
          level={level}
          onBack={() => {
            stopSpeech();
            router.back();
          }}
        />
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.section}>
            {total > 0
              ? `Önce kelimeler · ${previewIdx + 1}/${total}`
              : "Hazır mısın?"}
          </Text>

          {current ? (
            <View style={styles.vocabCard}>
              <Text style={styles.vocabEn}>{current.en}</Text>
              <Text style={styles.vocabTr}>{current.tr}</Text>
              <Pressable
                style={styles.speakBtn}
                onPress={() => {
                  hapticSelection();
                  speak(current.en, { lang: "en-US", rate: baseRate });
                }}
              >
                <View style={styles.speakerSymbol} />
                <Text style={styles.speakBtnLabel}>Dinle</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.noticeCard}>
              <Text style={styles.noticeTitle}>Sahne hazır</Text>
              <Text style={styles.noticeBody}>
                Hazır olunca dinlemeye başla.
              </Text>
            </View>
          )}

          {total > 1 ? (
            <View style={styles.dotsRow}>
              {vocab.map((_, i) => (
                <View
                  key={i}
                  style={[styles.dot, i === previewIdx && styles.dotActive]}
                />
              ))}
            </View>
          ) : null}
        </ScrollView>

        <View style={styles.footer}>
          {total > 0 && previewIdx < total - 1 ? (
            <Button
              label="Sıradaki kelime"
              onPress={() => {
                hapticSelection();
                setPreviewIdx((i) => i + 1);
              }}
            />
          ) : (
            <Button
              label="Hazırım"
              stacked
              onPress={() => {
                hapticSelection();
                setPhase("listen");
              }}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }

  // ----------------------------------------------------------------
  // Phase: LISTEN
  // ----------------------------------------------------------------
  if (phase === "listen") {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <Header
          title={drama.title}
          level={level}
          onBack={() => {
            stopSpeech();
            router.back();
          }}
        />
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.section}>Drama</Text>
          <ListeningPlayer lines={lines} baseRate={baseRate} />
        </ScrollView>
        <View style={styles.footer}>
          <Button
            label={
              questions.length > 0
                ? `Sorulara geç (${questions.length})`
                : "Tamamla"
            }
            onPress={() => {
              hapticSelection();
              stopSpeech();
              if (questions.length === 0) {
                setPhase("done");
              } else {
                setPhase("questions");
              }
            }}
            stacked
          />
        </View>
      </SafeAreaView>
    );
  }

  // ----------------------------------------------------------------
  // Phase: QUESTIONS
  // ----------------------------------------------------------------
  if (phase === "questions") {
    const q = questions[qIdx]!;
    const isLast = qIdx + 1 >= questions.length;
    const showResult = selected !== null;
    const isCorrect = showResult && selected === q.correctIndex;

    const submit = () => {
      if (selected === null) return;
      const newAnswers = [...answers, selected];
      setAnswers(newAnswers);
      hapticForScore(selected === q.correctIndex ? 100 : 0);
      if (isLast) {
        setPhase("done");
      } else {
        setQIdx(qIdx + 1);
        setSelected(null);
      }
    };

    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <Header
          title={drama.title}
          level={level}
          onBack={() => {
            stopSpeech();
            router.back();
          }}
        />
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.section}>
            Soru {qIdx + 1}/{questions.length}
          </Text>
          <Text style={styles.questionText}>{q.prompt}</Text>

          <View style={styles.optionList}>
            {q.options.map((opt, i) => {
              const isThis = selected === i;
              const showAsCorrect = showResult && i === q.correctIndex;
              const showAsWrong = showResult && isThis && !isCorrect;
              return (
                <Pressable
                  key={i}
                  onPress={() => {
                    if (showResult) return;
                    hapticSelection();
                    setSelected(i);
                  }}
                  disabled={showResult}
                  style={[
                    styles.option,
                    isThis && !showResult && styles.optionSelected,
                    showAsCorrect && styles.optionCorrect,
                    showAsWrong && styles.optionWrong,
                  ]}
                >
                  <Text style={styles.optionLabel}>{opt}</Text>
                </Pressable>
              );
            })}
          </View>

          {showResult && q.explanation ? (
            <View
              style={[
                styles.explain,
                isCorrect ? styles.explainOk : styles.explainMiss,
              ]}
            >
              <Text style={styles.explainText}>{q.explanation}</Text>
            </View>
          ) : null}
        </ScrollView>

        <View style={styles.footer}>
          <Button
            label={
              !showResult
                ? "Cevapla"
                : isLast
                  ? "Sonuçları gör"
                  : "Sıradaki soru"
            }
            onPress={submit}
            disabled={selected === null}
          />
        </View>
      </SafeAreaView>
    );
  }

  // ----------------------------------------------------------------
  // Phase: DONE
  // ----------------------------------------------------------------
  const correctCount = answers.filter(
    (a, i) => a === questions[i]?.correctIndex,
  ).length;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />
      <Header
        title={drama.title}
        level={level}
        onBack={() => {
          stopSpeech();
          router.back();
        }}
      />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>Puanın</Text>
          <Text style={styles.scoreValue}>{score}</Text>
          <Text style={styles.scoreSub}>
            {questions.length > 0
              ? `${correctCount}/${questions.length} doğru`
              : "Drama tamam"}
          </Text>
        </View>

        {questions.length > 0 ? (
          <View style={styles.recapList}>
            <Text style={styles.section}>Cevap özeti</Text>
            {questions.map((q, i) => {
              const userIdx = answers[i];
              const ok = userIdx === q.correctIndex;
              return (
                <View key={i} style={styles.recapItem}>
                  <View style={styles.recapHeader}>
                    <Text style={styles.recapNum}>{i + 1}.</Text>
                    <Text
                      style={[
                        styles.recapStatus,
                        ok ? styles.recapOk : styles.recapBad,
                      ]}
                    >
                      {ok ? "Doğru" : "Yanlış"}
                    </Text>
                  </View>
                  <Text style={styles.recapQuestion}>{q.prompt}</Text>
                  <Text style={styles.recapAnswer}>
                    Doğru: {q.options[q.correctIndex] ?? "—"}
                  </Text>
                  {q.explanation ? (
                    <Text style={styles.recapExplain}>{q.explanation}</Text>
                  ) : null}
                </View>
              );
            })}
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label="Listeye dön"
          stacked
          onPress={() => {
            hapticSelection();
            router.back();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

// ----------------------------------------------------------------
// Header
// ----------------------------------------------------------------
function Header({
  title,
  level,
  onBack,
}: {
  title: string;
  level?: string;
  onBack: () => void;
}) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onBack} style={styles.backBtn} hitSlop={8}>
        <Text style={styles.backText}>← Geri</Text>
      </Pressable>
      <View style={styles.headerTitleWrap}>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {title}
        </Text>
        {level ? <Text style={styles.headerLevel}>{level}</Text> : null}
      </View>
      <View style={styles.spacer} />
    </View>
  );
}

function NotFound({
  onBack,
  id,
}: {
  onBack: () => void;
  id?: string;
}) {
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <View style={styles.notFound}>
        <Text style={styles.notFoundTitle}>Drama bulunamadı</Text>
        <Text style={styles.notFoundBody}>
          {id ? `"${id}" id'li drama yok.` : "Geçersiz drama bağlantısı."}
        </Text>
        <View style={{ height: tokens.spacing.md }} />
        <Button label="Geri dön" onPress={onBack} />
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
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  headerTitleWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    maxWidth: 200,
  },
  headerLevel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    backgroundColor: tokens.brand.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
    overflow: "hidden",
  },
  spacer: { width: 70 },
  body: {
    padding: tokens.spacing.md,
    paddingBottom: tokens.spacing.lg,
    gap: tokens.spacing.md,
  },
  section: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  vocabCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    gap: tokens.spacing.sm,
    alignItems: "flex-start",
  },
  vocabEn: {
    fontSize: 30,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  vocabTr: {
    fontSize: 16,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  speakBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1.5,
    borderColor: tokens.brand.tertiary,
    marginTop: tokens.spacing.base,
  },
  speakerSymbol: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: tokens.brand.tertiary,
  },
  speakBtnLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.5,
  },
  noticeCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    gap: 6,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  noticeBody: {
    fontSize: 14,
    color: tokens.text.secondary,
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: tokens.spacing.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  dotActive: {
    backgroundColor: tokens.brand.primary,
    width: 18,
  },
  footer: {
    padding: tokens.spacing.md,
    paddingBottom: tokens.spacing.md,
    paddingTop: tokens.spacing.base,
    backgroundColor: tokens.bg.app,
  },
  questionText: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  optionList: {
    gap: tokens.spacing.sm,
  },
  option: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  optionSelected: {
    borderColor: tokens.border.outline,
  },
  optionCorrect: {
    borderColor: tokens.brand.primaryFixed,
    backgroundColor: "rgba(246, 255, 0, 0.12)",
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 22,
  },
  explain: {
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
  },
  explainOk: {
    backgroundColor: "rgba(246, 255, 0, 0.12)",
    borderWidth: 1,
    borderColor: tokens.brand.primaryFixed,
  },
  explainMiss: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  explainText: {
    color: tokens.text.secondary,
    fontSize: 14,
    lineHeight: 20,
  },
  scoreCard: {
    backgroundColor: tokens.brand.secondary,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.lg,
    alignItems: "center",
    gap: 4,
  },
  scoreLabel: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  scoreValue: {
    color: tokens.brand.primary,
    fontSize: 80,
    fontWeight: tokens.weight.black,
    letterSpacing: -2,
  },
  scoreSub: {
    color: tokens.text.inverseOnSurface,
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
  },
  recapList: {
    gap: tokens.spacing.sm,
  },
  recapItem: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    gap: 6,
  },
  recapHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recapNum: {
    fontSize: 14,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },
  recapStatus: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  recapOk: {
    color: tokens.brand.tertiary,
  },
  recapBad: {
    color: tokens.semantic.error,
  },
  recapQuestion: {
    fontSize: 15,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    lineHeight: 20,
  },
  recapAnswer: {
    fontSize: 14,
    color: tokens.text.secondary,
  },
  recapExplain: {
    fontSize: 13,
    color: tokens.text.tertiary,
    lineHeight: 18,
    marginTop: 4,
  },
  notFound: {
    flex: 1,
    padding: tokens.spacing.md,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  notFoundTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  notFoundBody: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
  },
});
