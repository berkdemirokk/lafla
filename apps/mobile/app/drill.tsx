// Lafla — Daily drill session.
//
// Surfaces auto-generated micro-exercises for the top active mistakes the
// user has been making in freechat/lessons. One pattern per drill card,
// rotating across spot_mistake / translate / fill_blank shapes.
//
// Flow:
//   1. Load drills via generateDailyDrills()
//   2. Render card-by-card; user picks/types an answer
//   3. On correct → markCorrectAttempt(patternId); wrong → markIncorrectAttempt
//   4. Show summary "X / Y düzeltildi" with feed return CTA
//
// Integration: add `<Stack.Screen name="drill" />` to app/_layout.tsx.
// Entry points: MistakesBanner on /feed, or coach proactive nudge.

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Button } from "../components/Button";
import { tokens } from "../theme";
import {
  generateDailyDrills,
  type GeneratedDrill,
} from "../lib/drill-generator";
import {
  markCorrectAttempt,
  markIncorrectAttempt,
} from "../lib/mistake-tracker";

interface DrillOutcome {
  drillId: string;
  patternId: string;
  correct: boolean;
}

export default function DrillScreen() {
  const router = useRouter();
  const [drills, setDrills] = useState<GeneratedDrill[] | null>(null);
  const [index, setIndex] = useState(0);
  const [outcomes, setOutcomes] = useState<DrillOutcome[]>([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      const list = await generateDailyDrills(5);
      if (alive) setDrills(list);
    })();
    return () => {
      alive = false;
    };
  }, []);

  const total = drills?.length ?? 0;
  const current = drills && index < total ? drills[index] : null;
  const done = drills !== null && index >= total && total > 0;
  const empty = drills !== null && total === 0;

  const progressPct = useMemo(() => {
    if (!total) return 0;
    return Math.min(1, index / total);
  }, [index, total]);

  const handleOutcome = useCallback(
    async (correct: boolean) => {
      if (!current) return;
      try {
        if (correct) await markCorrectAttempt(current.patternId);
        else await markIncorrectAttempt(current.patternId);
      } catch {
        // best-effort
      }
      setOutcomes((arr) => [
        ...arr,
        { drillId: current.id, patternId: current.patternId, correct },
      ]);
      setIndex((i) => i + 1);
    },
    [current],
  );

  const handleDefer = useCallback(() => {
    router.replace("/feed" as never);
  }, [router]);

  if (drills === null) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.loading}>
          <ActivityIndicator color={tokens.brand.tertiary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <View style={styles.headerCenter}>
          <Text style={styles.headerKicker}>Bugünün Düzeltme Seansı</Text>
          {!empty && !done && (
            <Text style={styles.headerCount}>
              {Math.min(index + 1, total)} / {total}
            </Text>
          )}
          {done && <Text style={styles.headerCount}>Tamamlandı</Text>}
        </View>
        <View style={styles.spacer} />
      </View>

      {/* Progress */}
      {!empty && (
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${Math.round(progressPct * 100)}%` },
            ]}
          />
        </View>
      )}

      {empty && <EmptyState onContinue={() => router.replace("/feed" as never)} />}

      {done && drills.length > 0 && (
        <DrillSummary
          total={total}
          outcomes={outcomes}
          onContinue={() => router.replace("/feed" as never)}
        />
      )}

      {current && !done && (
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <DrillCard
            key={current.id}
            drill={current}
            onResolve={handleOutcome}
            onDefer={handleDefer}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// DrillCard — routes to the correct body component based on drill.type.
// ---------------------------------------------------------------------------

function DrillCard({
  drill,
  onResolve,
  onDefer,
}: {
  drill: GeneratedDrill;
  onResolve: (correct: boolean) => void;
  onDefer: () => void;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardMetaRow}>
        <Text style={styles.categoryTag}>{drill.category.toUpperCase()}</Text>
        <Text style={styles.weightTag}>•••••</Text>
      </View>

      <Text style={styles.prompt}>{drill.prompt_tr}</Text>

      {drill.type === "spot_mistake" && (
        <SpotMistakeBody data={drill.data} onResolve={onResolve} />
      )}
      {drill.type === "translate" && (
        <TranslateBody data={drill.data} onResolve={onResolve} />
      )}
      {drill.type === "fill_blank" && (
        <FillBlankBody data={drill.data} onResolve={onResolve} />
      )}

      <Pressable onPress={onDefer} style={styles.deferBtn}>
        <Text style={styles.deferText}>Daha sonra</Text>
      </Pressable>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Body: spot_mistake — show wrong sentence, user types correction.
// ---------------------------------------------------------------------------

function SpotMistakeBody({
  data,
  onResolve,
}: {
  data: Record<string, unknown>;
  onResolve: (correct: boolean) => void;
}) {
  const incorrect = String(data.incorrect_sentence ?? "");
  const correct = String(data.correct_sentence ?? "");
  const explanation = String(data.tr_explanation ?? "");
  const userExample = data.user_example ? String(data.user_example) : null;

  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [scored, setScored] = useState<null | boolean>(null);

  const submit = () => {
    if (!input.trim() || scored !== null) return;
    const normalizedInput = normalize(input);
    const normalizedTarget = normalize(correct);
    const ok =
      normalizedInput === normalizedTarget ||
      normalizedInput === normalizedTarget.replace(/[.,!?]/g, "") ||
      // Allow first-clause match for compound corrections.
      normalizedTarget.startsWith(normalizedInput) ||
      normalizedInput.includes(normalizedTarget.split(/[.,!?]/)[0]!.trim());
    setScored(ok);
    setRevealed(true);
  };

  return (
    <View style={styles.body}>
      <View style={styles.wrongBox}>
        <Text style={styles.wrongLabel}>HATALI</Text>
        <Text style={styles.wrongText}>{incorrect}</Text>
      </View>

      {userExample && (
        <Text style={styles.userQuote}>
          Senin yaptığın hata: "{userExample}"
        </Text>
      )}

      <TextInput
        style={[
          styles.input,
          scored !== null && (scored ? styles.inputOk : styles.inputMiss),
        ]}
        placeholder="Doğrusunu yaz..."
        placeholderTextColor={tokens.text.tertiary}
        value={input}
        onChangeText={setInput}
        multiline
        editable={scored === null}
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      {revealed && (
        <View
          style={[
            styles.feedback,
            scored ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {scored ? "Doğru" : `Doğrusu: "${correct}"`}
          </Text>
          {explanation && (
            <Text style={styles.feedbackText}>{explanation}</Text>
          )}
        </View>
      )}

      <View style={styles.footer}>
        {scored === null ? (
          <Button label="Kontrol Et" onPress={submit} />
        ) : (
          <Button
            label="Sonraki"
            onPress={() => onResolve(scored)}
            stacked
          />
        )}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Body: translate
// ---------------------------------------------------------------------------

function TranslateBody({
  data,
  onResolve,
}: {
  data: Record<string, unknown>;
  onResolve: (correct: boolean) => void;
}) {
  const source = String(data.source_tr ?? "");
  const target = String(data.target_en ?? "");
  const hint = String(data.tr_hint ?? "");

  const [input, setInput] = useState("");
  const [scored, setScored] = useState<null | boolean>(null);

  const submit = () => {
    if (!input.trim() || scored !== null) return;
    const ok = normalize(input) === normalize(target);
    setScored(ok);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.sourceTr}>{source}</Text>

      <TextInput
        style={[
          styles.input,
          scored !== null && (scored ? styles.inputOk : styles.inputMiss),
        ]}
        placeholder="İngilizce yaz..."
        placeholderTextColor={tokens.text.tertiary}
        value={input}
        onChangeText={setInput}
        multiline
        editable={scored === null}
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      {scored !== null && (
        <View
          style={[
            styles.feedback,
            scored ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {scored ? "Doğru" : `Hedef: "${target}"`}
          </Text>
          {hint && <Text style={styles.feedbackText}>{hint}</Text>}
        </View>
      )}

      <View style={styles.footer}>
        {scored === null ? (
          <Button label="Kontrol Et" onPress={submit} />
        ) : (
          <Button
            label="Sonraki"
            onPress={() => onResolve(scored)}
            stacked
          />
        )}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Body: fill_blank — tap-to-select from options.
// ---------------------------------------------------------------------------

function FillBlankBody({
  data,
  onResolve,
}: {
  data: Record<string, unknown>;
  onResolve: (correct: boolean) => void;
}) {
  const template = String(data.sentence_template ?? "");
  const answer = String(data.answer ?? "");
  const distractors = (data.distractors as string[]) ?? [];
  const hint = String(data.tr_hint ?? "");

  const options = useMemo(() => {
    const opts = [answer, ...distractors].filter((v): v is string => !!v);
    // Deterministic shuffle by length to keep test reruns stable.
    return opts.sort((a, b) => a.length - b.length || a.localeCompare(b));
  }, [answer, distractors]);

  const [picked, setPicked] = useState<string | null>(null);
  const scored = picked === null ? null : normalize(picked) === normalize(answer);

  return (
    <View style={styles.body}>
      <Text style={styles.sentenceTemplate}>{template}</Text>

      <View style={styles.optionGrid}>
        {options.map((opt) => {
          const isPicked = picked === opt;
          const isCorrect = scored !== null && normalize(opt) === normalize(answer);
          return (
            <Pressable
              key={opt}
              disabled={picked !== null}
              onPress={() => setPicked(opt)}
              style={[
                styles.optionBtn,
                isPicked && (scored ? styles.optionOk : styles.optionMiss),
                picked !== null && !isPicked && isCorrect && styles.optionOk,
              ]}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>

      {scored !== null && (
        <View
          style={[
            styles.feedback,
            scored ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {scored ? "Doğru" : `Doğrusu: "${answer}"`}
          </Text>
          {hint && <Text style={styles.feedbackText}>{hint}</Text>}
        </View>
      )}

      <View style={styles.footer}>
        {scored !== null && (
          <Button
            label="Sonraki"
            onPress={() => onResolve(scored)}
            stacked
          />
        )}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Summary + empty state
// ---------------------------------------------------------------------------

function DrillSummary({
  total,
  outcomes,
  onContinue,
}: {
  total: number;
  outcomes: DrillOutcome[];
  onContinue: () => void;
}) {
  const fixed = outcomes.filter((o) => o.correct).length;
  return (
    <ScrollView contentContainerStyle={summaryStyles.content}>
      <Text style={summaryStyles.title}>
        {fixed} / {total} düzeltildi
      </Text>
      <Text style={summaryStyles.sub}>
        Maya bu hataları takip ediyor. Üç kez üst üste doğru yaparsan listeden
        düşer.
      </Text>
      <View style={summaryStyles.cta}>
        <Button label="Akışa dön" onPress={onContinue} stacked />
      </View>
    </ScrollView>
  );
}

function EmptyState({ onContinue }: { onContinue: () => void }) {
  return (
    <View style={styles.emptyWrap}>
      <Text style={styles.emptyTitle}>Bugün düzeltme yok.</Text>
      <Text style={styles.emptySub}>
        Henüz takip edilecek bir hata kalıbı yok. Maya ile konuşmaya devam et —
        yeni hatalar yakaladıkça burada görünür.
      </Text>
      <View style={styles.emptyCta}>
        <Button label="Akışa dön" onPress={onContinue} />
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// utils
// ---------------------------------------------------------------------------

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’']/g, "'")
    .replace(/[“”"]/g, '"')
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: {
    paddingVertical: 6,
    paddingRight: 12,
    minWidth: 80,
  },
  backText: {
    fontSize: 15,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
  },
  headerKicker: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
  },
  headerCount: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginTop: 2,
  },
  spacer: { minWidth: 80 },
  progressTrack: {
    height: 4,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    marginHorizontal: 16,
    borderRadius: tokens.radius.full,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 48,
  },
  card: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.lg,
    padding: 20,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  cardMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryTag: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.2,
    color: tokens.brand.tertiary,
  },
  weightTag: {
    fontSize: 10,
    color: tokens.text.tertiary,
    letterSpacing: 2,
  },
  prompt: {
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    marginBottom: 16,
    lineHeight: 22,
  },
  body: { gap: 12 },
  wrongBox: {
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.semantic.errorContainer,
    padding: 14,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
  },
  wrongLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    color: tokens.semantic.onErrorContainer,
    marginBottom: 4,
  },
  wrongText: {
    fontSize: 16,
    color: tokens.semantic.onErrorContainer,
    fontWeight: tokens.weight.semibold,
  },
  userQuote: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontStyle: "italic",
  },
  sourceTr: {
    fontSize: 17,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    backgroundColor: tokens.bg.surfaceContainer,
    padding: 14,
    borderRadius: tokens.radius.base,
  },
  sentenceTemplate: {
    fontSize: 18,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    padding: 14,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    textAlign: "center",
  },
  input: {
    minHeight: 80,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    borderRadius: tokens.radius.base,
    padding: 12,
    fontSize: 15,
    color: tokens.text.primary,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    textAlignVertical: "top",
  },
  inputOk: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  inputMiss: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  optionBtn: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    backgroundColor: tokens.bg.surfaceContainerLowest,
  },
  optionOk: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  optionMiss: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionText: {
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  feedback: {
    borderRadius: tokens.radius.base,
    padding: 12,
    borderWidth: 1,
  },
  feedbackOk: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderColor: tokens.brand.tertiary,
  },
  feedbackMiss: {
    backgroundColor: tokens.semantic.errorContainer,
    borderColor: tokens.semantic.error,
  },
  feedbackTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 4,
  },
  feedbackText: {
    fontSize: 13,
    color: tokens.text.onSurfaceVariant,
    lineHeight: 18,
  },
  footer: {
    marginTop: 4,
  },
  deferBtn: {
    alignSelf: "center",
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  deferText: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
  },
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  emptyEmoji: { fontSize: 48, marginBottom: 12 },
  emptyTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 8,
  },
  emptySub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
  emptyCta: { width: "100%" },
});

const summaryStyles = StyleSheet.create({
  content: {
    padding: 24,
    alignItems: "center",
    gap: 12,
  },
  icon: { fontSize: 56, marginTop: 24 },
  title: {
    fontSize: 26,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
  },
  sub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 8,
  },
  cta: { marginTop: 24, width: "100%" },
});
