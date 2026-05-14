// Lafla — Placement test (adaptive, ~5 minutes, 10 items).
//
// Engine: starts at B1, steps level up after correct, down after wrong.
// Per-sub-skill scoring (vocab / reading / listening / self_rate) feeds
// the final estimate. Result screen lets the user override ± 1 level.
//
// To integrate: In app/onboarding.tsx, after interest selection,
// add a step that asks "Seviyeni biliyor musun?" with options:
//   - "Biliyorum, ben [A1-C2]" → direct setCefrLevel
//   - "Emin değilim, 5 dakikalık test yap" → router.push("/placement-test")
//   - "Sonra belirlerim" → defer (defaults to B1)
//
// Also register `<Stack.Screen name="placement-test" />` in app/_layout.tsx
// when integrating.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { tokens } from "../theme";
import { speak, stop as stopSpeech } from "../lib/tts";
import {
  CEFR_LEVELS,
  CEFR_LEVEL_LABELS_TR,
  adjustLevel,
  setCefrLevel,
  type CefrLevel,
} from "../lib/cefr-level";
import {
  placementQuestions,
  type PlacementQuestion,
  type PlacementSkill,
} from "../lib/__cefr-test-bank";

const TOTAL_ITEMS = 10;

type AnswerLog = {
  question: PlacementQuestion;
  /** For MC questions: did the user pick the right option. */
  correct: boolean | null;
  /** For self_rate: 1..5. */
  selfRateValue: number | null;
};

type SubSkillScores = Record<PlacementSkill, { hits: number; total: number }>;

function emptyScores(): SubSkillScores {
  return {
    vocab: { hits: 0, total: 0 },
    reading: { hits: 0, total: 0 },
    listening: { hits: 0, total: 0 },
    self_rate: { hits: 0, total: 0 },
  };
}

/**
 * Pick the next question for the given target level, rotating sub-skills
 * to keep coverage across the 10-item run. Avoids reusing answered items.
 */
function pickNextQuestion(
  targetLevel: CefrLevel,
  answeredIds: Set<string>,
  index: number,
): PlacementQuestion | null {
  // Soft rotation: vocab, reading, listening every 3rd, self_rate every 5th.
  const desired: PlacementSkill =
    index === 4 || index === 9
      ? "self_rate"
      : index % 3 === 0
        ? "vocab"
        : index % 3 === 1
          ? "reading"
          : "listening";

  const pool = placementQuestions.filter((q) => !answeredIds.has(q.id));

  // First try exact level + desired skill.
  const exact = pool.find(
    (q) => q.targetLevel === targetLevel && q.skillTested === desired,
  );
  if (exact) return exact;

  // Then any skill at exact level.
  const sameLevel = pool.find((q) => q.targetLevel === targetLevel);
  if (sameLevel) return sameLevel;

  // Fall back to nearest level with desired skill.
  const sameSkill = [...pool]
    .filter((q) => q.skillTested === desired)
    .sort(
      (a, b) =>
        Math.abs(CEFR_LEVELS.indexOf(a.targetLevel) - CEFR_LEVELS.indexOf(targetLevel)) -
        Math.abs(CEFR_LEVELS.indexOf(b.targetLevel) - CEFR_LEVELS.indexOf(targetLevel)),
    );
  if (sameSkill.length > 0) return sameSkill[0];

  return pool[0] ?? null;
}

function estimateLevel(log: AnswerLog[]): CefrLevel {
  // Average the difficulty of correctly-answered MC items + 1 above the
  // hardest one the user got right. Self-ratings of 4–5 are treated as
  // confirmations at that question's level.
  if (log.length === 0) return "B1";

  const credited = log
    .filter((a) => {
      if (a.question.skillTested === "self_rate") {
        return a.selfRateValue !== null && a.selfRateValue >= 4;
      }
      return a.correct === true;
    })
    .map((a) => CEFR_LEVELS.indexOf(a.question.targetLevel));

  if (credited.length === 0) return "A1";

  const max = Math.max(...credited);
  const avg = credited.reduce((s, n) => s + n, 0) / credited.length;
  const idx = Math.round((max * 0.6 + avg * 0.4));
  return CEFR_LEVELS[Math.max(0, Math.min(CEFR_LEVELS.length - 1, idx))];
}

function buildSubScores(log: AnswerLog[]): SubSkillScores {
  const scores = emptyScores();
  for (const a of log) {
    const bucket = scores[a.question.skillTested];
    bucket.total += 1;
    if (a.question.skillTested === "self_rate") {
      if (a.selfRateValue !== null && a.selfRateValue >= 4) bucket.hits += 1;
    } else if (a.correct === true) {
      bucket.hits += 1;
    }
  }
  return scores;
}

const SKILL_LABEL_TR: Record<PlacementSkill, string> = {
  vocab: "Kelime",
  reading: "Okuma",
  listening: "Dinleme",
  self_rate: "Konuşma güveni",
};

export default function PlacementTest() {
  const router = useRouter();

  const [stage, setStage] = useState<"intro" | "running" | "result">("intro");
  const [currentLevel, setCurrentLevel] = useState<CefrLevel>("B1");
  const [index, setIndex] = useState(0);
  const [log, setLog] = useState<AnswerLog[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedRate, setSelectedRate] = useState<number | null>(null);
  const [listeningRevealed, setListeningRevealed] = useState(false);
  const [overrideLevel, setOverrideLevel] = useState<CefrLevel | null>(null);
  const [saving, setSaving] = useState(false);

  const answeredIds = useMemo(
    () => new Set(log.map((a) => a.question.id)),
    [log],
  );

  const question = useMemo<PlacementQuestion | null>(() => {
    if (stage !== "running") return null;
    return pickNextQuestion(currentLevel, answeredIds, index);
  }, [stage, currentLevel, answeredIds, index]);

  // Cleanup speech on unmount.
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  // Auto-play listening prompts when shown.
  const playedForRef = useRef<string | null>(null);
  useEffect(() => {
    if (!question) return;
    if (
      question.skillTested === "listening" &&
      question.prompt_en &&
      playedForRef.current !== question.id
    ) {
      playedForRef.current = question.id;
      speak(question.prompt_en, { lang: "en-US" });
    }
  }, [question]);

  const startTest = () => {
    setLog([]);
    setIndex(0);
    setCurrentLevel("B1");
    setSelectedOption(null);
    setSelectedRate(null);
    setListeningRevealed(false);
    setStage("running");
  };

  const submitAnswer = () => {
    if (!question) return;

    let correct: boolean | null = null;
    let selfRateValue: number | null = null;

    if (question.skillTested === "self_rate") {
      if (selectedRate === null) return;
      selfRateValue = selectedRate;
    } else {
      if (selectedOption === null) return;
      correct = selectedOption === question.correctIndex;
    }

    const nextLog: AnswerLog[] = [
      ...log,
      { question, correct, selfRateValue },
    ];
    setLog(nextLog);

    // Decide adaptive direction.
    let next: CefrLevel = currentLevel;
    if (correct === true) next = adjustLevel(currentLevel, "up");
    else if (correct === false) next = adjustLevel(currentLevel, "down");
    else if (selfRateValue !== null) {
      next =
        selfRateValue >= 4
          ? adjustLevel(currentLevel, "up")
          : selfRateValue <= 2
            ? adjustLevel(currentLevel, "down")
            : currentLevel;
    }
    setCurrentLevel(next);

    const isLast = nextLog.length >= TOTAL_ITEMS;
    if (isLast) {
      setOverrideLevel(estimateLevel(nextLog));
      setStage("result");
      return;
    }

    setIndex((i) => i + 1);
    setSelectedOption(null);
    setSelectedRate(null);
    setListeningRevealed(false);
  };

  const handleConfirm = async () => {
    const chosen = overrideLevel ?? estimateLevel(log);
    setSaving(true);
    await setCefrLevel(chosen);
    setSaving(false);
    router.replace("/feed");
  };

  // ---------------- INTRO ----------------
  if (stage === "intro") {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.headerRow}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>← Geri</Text>
          </Pressable>
          <View style={{ width: 70 }} />
        </View>
        <ScrollView contentContainerStyle={styles.introContent}>
          <Text style={styles.title}>Seviye Belirleme</Text>
          <Text style={styles.subtitle}>
            10 soru, yaklaşık 5 dakika. Doğru yanıtlarda zorluk artar,
            yanlışta düşer. Sonunda CEFR seviyeni gösteririz — beğenmezsen
            bir adım yukarı ya da aşağı kayabilirsin.
          </Text>

          <View style={styles.bulletCard}>
            <Text style={styles.bulletTitle}>Test 4 alana bakar</Text>
            <Text style={styles.bullet}>• Kelime bilgisi</Text>
            <Text style={styles.bullet}>• Okuduğunu anlama</Text>
            <Text style={styles.bullet}>• Dinleme (sesli sorular)</Text>
            <Text style={styles.bullet}>• Konuşma güveni (kendin not ver)</Text>
          </View>

          <Text style={styles.hint}>
            Doğru yanıtı bilmiyorsan tahmin etme; eğitim için gerçek seviyen
            daha değerli.
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <Button label="Teste başla" onPress={startTest} stacked />
        </View>
      </SafeAreaView>
    );
  }

  // ---------------- RUNNING ----------------
  if (stage === "running" && question) {
    const progress = (log.length / TOTAL_ITEMS) * 100;
    const canSubmit =
      question.skillTested === "self_rate"
        ? selectedRate !== null
        : selectedOption !== null;

    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.headerRow}>
          <Pressable
            onPress={() => router.back()}
            style={styles.backBtn}
            hitSlop={12}
          >
            <Text style={styles.backText}>← Çık</Text>
          </Pressable>
          <Text style={styles.counter}>
            {log.length + 1} / {TOTAL_ITEMS}
          </Text>
          <View style={{ width: 70 }} />
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>

        <ScrollView contentContainerStyle={styles.runContent}>
          <Text style={styles.skillTag}>
            {SKILL_LABEL_TR[question.skillTested]} · {question.targetLevel}
          </Text>

          {question.skillTested === "listening" ? (
            <View>
              <Text style={styles.prompt}>{question.prompt_tr}</Text>
              <Pressable
                onPress={() => {
                  if (question.prompt_en) speak(question.prompt_en, { lang: "en-US" });
                }}
                style={styles.speakBtn}
              >
                <Text style={styles.speakBtnText}>Tekrar dinle</Text>
              </Pressable>
              {!listeningRevealed && (
                <Pressable
                  onPress={() => setListeningRevealed(true)}
                  style={styles.revealBtn}
                >
                  <Text style={styles.revealBtnText}>Metni göster (zorluk düşer)</Text>
                </Pressable>
              )}
              {listeningRevealed && question.prompt_en && (
                <Text style={styles.revealedText}>"{question.prompt_en}"</Text>
              )}
            </View>
          ) : (
            <Text style={styles.prompt}>{question.prompt_tr}</Text>
          )}

          {question.skillTested === "self_rate" && question.selfRateScale ? (
            <View style={styles.rateRow}>
              {Array.from(
                { length: question.selfRateScale.max - question.selfRateScale.min + 1 },
                (_, i) => i + (question.selfRateScale?.min ?? 1),
              ).map((value) => (
                <Pressable
                  key={value}
                  onPress={() => setSelectedRate(value)}
                  style={[
                    styles.rateChip,
                    selectedRate === value && styles.rateChipSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.rateChipText,
                      selectedRate === value && styles.rateChipTextSelected,
                    ]}
                  >
                    {value}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : (
            <View style={styles.optionList}>
              {question.options?.map((opt, i) => {
                const isSelected = selectedOption === i;
                return (
                  <Pressable
                    key={`${question.id}-opt-${i}`}
                    onPress={() => setSelectedOption(i)}
                    style={[
                      styles.option,
                      isSelected && styles.optionSelected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.optionTextSelected,
                      ]}
                    >
                      {opt}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          )}

          {question.skillTested === "self_rate" && question.selfRateScale && (
            <View style={styles.scaleLabels}>
              <Text style={styles.scaleLabelText}>
                {question.selfRateScale.minLabel_tr}
              </Text>
              <Text style={styles.scaleLabelText}>
                {question.selfRateScale.maxLabel_tr}
              </Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          <Button
            label={log.length + 1 === TOTAL_ITEMS ? "Bitir" : "Devam et"}
            onPress={submitAnswer}
            disabled={!canSubmit}
          />
        </View>
      </SafeAreaView>
    );
  }

  // ---------------- RESULT ----------------
  const detected = estimateLevel(log);
  const subScores = buildSubScores(log);
  const chosen = overrideLevel ?? detected;
  const detectedIdx = CEFR_LEVELS.indexOf(detected);
  const allowedOverrides = CEFR_LEVELS.slice(
    Math.max(0, detectedIdx - 1),
    Math.min(CEFR_LEVELS.length, detectedIdx + 2),
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.resultContent}>
        <Text style={styles.title}>Sonuç</Text>
        <Text style={styles.subtitle}>Tahmin ettiğimiz seviye:</Text>

        <View style={styles.levelBadge}>
          <Text style={styles.levelBadgeLabel}>
            {CEFR_LEVEL_LABELS_TR[detected].label}
          </Text>
          <Text style={styles.levelBadgeDesc}>
            {CEFR_LEVEL_LABELS_TR[detected].desc}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Alt beceriler</Text>
        <View style={styles.subSkills}>
          {(Object.keys(subScores) as PlacementSkill[]).map((skill) => {
            const s = subScores[skill];
            const pct = s.total === 0 ? 0 : (s.hits / s.total) * 100;
            return (
              <View key={skill} style={styles.subRow}>
                <Text style={styles.subLabel}>{SKILL_LABEL_TR[skill]}</Text>
                <View style={styles.subBar}>
                  <View style={[styles.subBarFill, { width: `${pct}%` }]} />
                </View>
                <Text style={styles.subValue}>
                  {s.hits}/{s.total}
                </Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.sectionTitle}>Bu seviye doğru mu?</Text>
        <Text style={styles.hint}>
          Bir adım yukarı ya da aşağı kayabilirsin.
        </Text>
        <View style={styles.overrideRow}>
          {allowedOverrides.map((lvl) => {
            const isSelected = chosen === lvl;
            return (
              <Pressable
                key={lvl}
                onPress={() => setOverrideLevel(lvl)}
                style={[
                  styles.overrideChip,
                  isSelected && styles.overrideChipSelected,
                ]}
              >
                <Text
                  style={[
                    styles.overrideChipText,
                    isSelected && styles.overrideChipTextSelected,
                  ]}
                >
                  {lvl}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={saving ? "Kaydediliyor..." : `${chosen} olarak başla`}
          onPress={handleConfirm}
          disabled={saving}
          stacked
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  counter: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },
  progressBar: {
    height: 4,
    backgroundColor: tokens.bg.surfaceContainer,
    marginHorizontal: 16,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
  },
  introContent: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.md,
    paddingBottom: 120,
  },
  runContent: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.md,
    paddingBottom: 140,
  },
  resultContent: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.md,
    paddingBottom: 140,
  },
  title: {
    fontSize: 30,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
    marginBottom: tokens.spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: tokens.text.secondary,
    lineHeight: 24,
    marginBottom: tokens.spacing.md,
  },
  bulletCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 18,
    marginBottom: tokens.spacing.md,
  },
  bulletTitle: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 8,
  },
  bullet: {
    fontSize: 15,
    color: tokens.text.onSurfaceVariant,
    lineHeight: 24,
  },
  hint: {
    fontSize: 13,
    color: tokens.text.tertiary,
    lineHeight: 20,
    marginBottom: tokens.spacing.sm,
  },
  skillTag: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.2,
    color: tokens.brand.tertiary,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  prompt: {
    fontSize: 20,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 28,
    marginBottom: tokens.spacing.md,
  },
  speakBtn: {
    alignSelf: "flex-start",
    backgroundColor: tokens.brand.tertiarySoft,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    marginBottom: 12,
  },
  speakBtnText: {
    color: tokens.brand.tertiary,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
  },
  revealBtn: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 6,
    marginBottom: 12,
  },
  revealBtnText: {
    color: tokens.text.tertiary,
    fontSize: 13,
    textDecorationLine: "underline",
  },
  revealedText: {
    fontSize: 16,
    fontStyle: "italic",
    color: tokens.text.secondary,
    marginBottom: 14,
  },
  optionList: {
    gap: 10,
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
  },
  optionText: {
    fontSize: 15,
    color: tokens.text.primary,
    fontWeight: tokens.weight.medium,
  },
  optionTextSelected: {
    fontWeight: tokens.weight.bold,
  },
  rateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 8,
  },
  rateChip: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  rateChipSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
  },
  rateChipText: {
    fontSize: 20,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
  rateChipTextSelected: {
    color: tokens.text.primary,
  },
  scaleLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 4,
  },
  scaleLabelText: {
    fontSize: 12,
    color: tokens.text.tertiary,
  },
  levelBadge: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 20,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    marginBottom: tokens.spacing.md,
  },
  levelBadgeLabel: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 6,
  },
  levelBadgeDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginTop: 12,
    marginBottom: 10,
  },
  subSkills: {
    gap: 12,
    marginBottom: tokens.spacing.md,
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  subLabel: {
    width: 110,
    fontSize: 14,
    color: tokens.text.onSurfaceVariant,
    fontWeight: tokens.weight.medium,
  },
  subBar: {
    flex: 1,
    height: 8,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: 4,
    overflow: "hidden",
  },
  subBarFill: {
    height: "100%",
    backgroundColor: tokens.brand.tertiary,
  },
  subValue: {
    width: 36,
    textAlign: "right",
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  overrideRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
    marginBottom: tokens.spacing.md,
  },
  overrideChip: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  overrideChipSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
  },
  overrideChipText: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
  overrideChipTextSelected: {
    color: tokens.text.primary,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.md,
    paddingBottom: 28,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
});
