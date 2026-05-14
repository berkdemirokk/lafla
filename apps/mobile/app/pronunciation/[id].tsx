// Lafla — Pronunciation practice screen.
//
// Focused pronunciation drill for a scenario's key phrases. Pulls phrases
// from scenario.setup[].en plus any English examples embedded inside
// scenario.scene.turns[].hint_tr (text between single quotes).
//
// For each phrase the user:
//   1. Taps "Dinle" → TTS speaks the phrase
//   2. Taps "Şimdi sen söyle" → starts speech recognition (iOS 17+)
//   3. Gets word-by-word colored feedback (good/okay/miss)
//   4. Retries or advances
//
// On the final card we show the overall average pronunciation score for
// the scenario and a CTA back to the lesson flow.
//
// Graceful degrade: if expo-speech-recognition isn't bundled (try-require
// in lib/speech-recognition.ts returns null → isAvailable() === false),
// we render an iOS-17+/mic-permission notice and a skip CTA instead of
// the practice loop.

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button";
import { getScenario } from "../../lib/scenario";
import { speak } from "../../lib/tts";
import {
  startListening,
  stopListening,
  isAvailable as isSrAvailable,
} from "../../lib/speech-recognition";
import {
  gradePronunciation,
  type PronunciationGrade,
  type PronunciationBand,
} from "../../lib/pronunciation-grader";
import { hapticImpact, hapticForScore } from "../../lib/feedback";
import { tokens } from "../../theme";

// ---------------------------------------------------------------------------
// Phrase extraction
// ---------------------------------------------------------------------------

const EXAMPLE_QUOTE_RE = /'([^']{2,})'/g;

/**
 * Pull English example phrases from a Turkish hint string. Hints often
 * look like: "X mi diye sor — 'Could you...?' gibi.". We extract the
 * quoted English bits.
 */
function extractExamplesFromHint(hint: string | undefined): string[] {
  if (!hint) return [];
  const out: string[] = [];
  let m: RegExpExecArray | null;
  EXAMPLE_QUOTE_RE.lastIndex = 0;
  while ((m = EXAMPLE_QUOTE_RE.exec(hint)) !== null) {
    const raw = (m[1] ?? "").trim();
    if (raw.length === 0) continue;
    // Skip anything that doesn't look like an English phrase (e.g. just
    // punctuation, or text with Turkish-specific characters which would
    // suggest the hint quoted a Turkish equivalent).
    if (!/[a-zA-Z]/.test(raw)) continue;
    out.push(raw);
  }
  return out;
}

function collectPhrases(scenario: {
  setup: { en: string }[];
  scene: { turns: { hint_tr?: string }[] };
}): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const push = (p: string) => {
    const key = p.toLowerCase().trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(p.trim());
  };
  for (const s of scenario.setup) push(s.en);
  for (const t of scenario.scene.turns) {
    for (const ex of extractExamplesFromHint(t.hint_tr)) push(ex);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Screen
// ---------------------------------------------------------------------------

type PhaseState =
  | { status: "idle" }
  | { status: "listening" }
  | { status: "scored"; grade: PronunciationGrade };

export default function PronunciationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const scenario = id ? getScenario(id) : null;

  // SR availability — async check, default to "unknown" → render loading state.
  const [srReady, setSrReady] = useState<"unknown" | "yes" | "no">("unknown");
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const ok = await isSrAvailable();
        if (alive) setSrReady(ok ? "yes" : "no");
      } catch {
        if (alive) setSrReady("no");
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const phrases = useMemo(
    () => (scenario ? collectPhrases(scenario) : []),
    [scenario],
  );

  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<PhaseState>({ status: "idle" });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  // Stop any in-flight SR session on unmount.
  useEffect(() => {
    return () => {
      stopListening().catch(() => {});
    };
  }, []);

  if (!scenario) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.notFound}>
          <Text style={styles.notFoundTitle}>Sahne bulunamadı</Text>
          <Button label="Geri" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  const total = phrases.length;
  const current = phrases[idx];

  const handleBack = () => router.back();

  const handleSkip = () => {
    router.replace(`/scenario/${scenario.id}` as never);
  };

  const startMic = async () => {
    if (!current) return;
    setErrorMsg(null);
    setPhase({ status: "listening" });
    hapticImpact("medium");
    await startListening({
      lang: "en-US",
      onResult: (text, isFinal) => {
        if (!isFinal) return;
        const grade = gradePronunciation(current, text);
        setPhase({ status: "scored", grade });
        hapticForScore(grade.score);
      },
      onError: () => {
        setErrorMsg("Mikrofon hatası");
        setPhase({ status: "idle" });
      },
    });
  };

  const retry = () => {
    setPhase({ status: "idle" });
    setErrorMsg(null);
  };

  const advance = () => {
    if (phase.status === "scored") {
      setHistory((h) => [...h, phase.grade.score]);
    }
    hapticImpact("light");
    if (idx + 1 >= total) {
      setDone(true);
    } else {
      setIdx(idx + 1);
      setPhase({ status: "idle" });
      setErrorMsg(null);
    }
  };

  const finalAverage = useMemo(() => {
    if (history.length === 0) return 0;
    const sum = history.reduce((s, n) => s + n, 0);
    return Math.round(sum / history.length);
  }, [history]);

  const onFinishedReturn = () => {
    router.replace(`/scenario/${scenario.id}` as never);
  };

  // ---------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={handleBack} style={styles.exitBtn} hitSlop={8}>
          <Text style={styles.exitText}>← Geri</Text>
        </Pressable>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {scenario.title}
        </Text>
        <View style={styles.spacer} />
      </View>

      {/* Progress dots (hide on degraded SR state and on final card) */}
      {srReady === "yes" && !done && total > 0 && (
        <View style={styles.dotsRow}>
          {phrases.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i < idx && styles.dotDone,
                i === idx && styles.dotActive,
              ]}
            />
          ))}
          <Text style={styles.dotsCount}>
            {idx + 1} / {total}
          </Text>
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {srReady === "unknown" && (
          <View style={styles.loadingBox}>
            <Text style={styles.loadingText}>Hazırlanıyor…</Text>
          </View>
        )}

        {srReady === "no" && (
          <DegradedView onSkip={handleSkip} />
        )}

        {srReady === "yes" && total === 0 && (
          <View style={styles.loadingBox}>
            <Text style={styles.loadingText}>
              Bu sahnede telaffuz cümlesi bulunamadı.
            </Text>
            <View style={{ height: 24 }} />
            <Button label="Geri dön" onPress={handleBack} />
          </View>
        )}

        {srReady === "yes" && !done && current && (
          <PhraseCard
            phrase={current}
            phase={phase}
            errorMsg={errorMsg}
            onListen={() => speak(current)}
            onStartMic={startMic}
            onRetry={retry}
            onAdvance={advance}
            isLast={idx + 1 >= total}
          />
        )}

        {srReady === "yes" && done && (
          <FinishedCard
            average={finalAverage}
            attempts={history.length}
            total={total}
            onReturn={onFinishedReturn}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function PhraseCard({
  phrase,
  phase,
  errorMsg,
  onListen,
  onStartMic,
  onRetry,
  onAdvance,
  isLast,
}: {
  phrase: string;
  phase: PhaseState;
  errorMsg: string | null;
  onListen: () => void;
  onStartMic: () => void;
  onRetry: () => void;
  onAdvance: () => void;
  isLast: boolean;
}) {
  return (
    <View>
      {/* Listen pill at the top */}
      <View style={styles.listenRow}>
        <Pressable
          onPress={onListen}
          style={({ pressed }) => [
            styles.listenBtn,
            pressed && styles.listenBtnPressed,
          ]}
          hitSlop={8}
        >
          <Text style={styles.listenText}>Dinle 🔊</Text>
        </Pressable>
      </View>

      {/* Phrase hero */}
      <View style={styles.hero}>
        <Text style={styles.heroLabel}>TELAFFUZ ET</Text>
        <Text style={styles.heroPhrase}>{phrase}</Text>
      </View>

      {/* Result band */}
      {phase.status === "scored" && (
        <View style={styles.resultBox}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultLabel}>Skor</Text>
            <Text style={styles.resultScore}>{phase.grade.score}</Text>
            <Text style={styles.resultOf}>/ 100</Text>
          </View>
          <View style={styles.wordsRow}>
            {phase.grade.bandsByWord.map((wb, i) => (
              <View key={`${wb.word}-${i}`} style={[styles.wordBox, bandStyle(wb.band)]}>
                <Text style={[styles.wordText, bandTextStyle(wb.band)]}>
                  {wb.word}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {errorMsg && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{errorMsg}</Text>
        </View>
      )}

      {/* CTA area */}
      <View style={styles.ctaWrap}>
        {phase.status === "idle" && (
          <MicCta listening={false} onPress={onStartMic} />
        )}
        {phase.status === "listening" && (
          <MicCta listening={true} onPress={() => {}} />
        )}
        {phase.status === "scored" && (
          <View style={styles.scoredCtaRow}>
            <View style={styles.scoredHalf}>
              <Button
                label="Tekrar dene"
                variant="secondary"
                onPress={onRetry}
              />
            </View>
            <View style={styles.scoredHalf}>
              <Button
                label={isLast ? "Bitir →" : "İleri →"}
                onPress={onAdvance}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

function MicCta({
  listening,
  onPress,
}: {
  listening: boolean;
  onPress: () => void;
}) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!listening) {
      pulse.setValue(1);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.18,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [listening, pulse]);

  return (
    <Pressable onPress={onPress} disabled={listening}>
      <View style={micStyles.outer}>
        <Animated.View
          style={[
            micStyles.glow,
            listening && {
              transform: [{ scale: pulse }],
            },
          ]}
        />
        <View
          style={[
            micStyles.btn,
            listening && micStyles.btnListening,
          ]}
        >
          <Text style={micStyles.icon}>🎤</Text>
          <Text style={micStyles.label}>
            {listening ? "Dinliyorum…" : "Şimdi sen söyle"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

function FinishedCard({
  average,
  attempts,
  total,
  onReturn,
}: {
  average: number;
  attempts: number;
  total: number;
  onReturn: () => void;
}) {
  const band: PronunciationBand =
    average >= 85 ? "good" : average >= 50 ? "okay" : "miss";
  const msg =
    band === "good"
      ? "Telaffuzun çok iyi. Sahneye hazırsın."
      : band === "okay"
      ? "Fena değil. Birkaç kelimeyi daha rahat söyleyebilirsin."
      : "Biraz daha çalış. Tekrar tekrar dinleyip dene.";
  const emoji = band === "good" ? "🎙️" : band === "okay" ? "👌" : "🌱";

  return (
    <View style={finishedStyles.wrap}>
      <Text style={finishedStyles.emoji}>{emoji}</Text>
      <Text style={finishedStyles.title}>Telaffuz Tamam</Text>
      <Text style={finishedStyles.msg}>{msg}</Text>

      <View style={finishedStyles.scoreCard}>
        <Text style={finishedStyles.scoreLabel}>Ortalama</Text>
        <Text style={finishedStyles.scoreNum}>{average}</Text>
        <Text style={finishedStyles.scoreOf}>/ 100</Text>
      </View>

      <Text style={finishedStyles.meta}>
        {attempts} / {total} cümle denendi
      </Text>

      <View style={finishedStyles.footer}>
        <Button label="Bitti, akışa dön" onPress={onReturn} stacked />
      </View>
    </View>
  );
}

function DegradedView({ onSkip }: { onSkip: () => void }) {
  return (
    <View style={degradedStyles.wrap}>
      <Text style={degradedStyles.emoji}>🎤</Text>
      <Text style={degradedStyles.title}>Mikrofon kullanılamıyor</Text>
      <Text style={degradedStyles.msg}>
        Telaffuz testi için iOS 17+ ve mikrofon izni gerek. Bu cihazda
        konuşma tanıma şu an aktif değil.
      </Text>
      <View style={degradedStyles.footer}>
        <Button label="Sahneye geç →" onPress={onSkip} stacked />
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Style helpers
// ---------------------------------------------------------------------------

function bandStyle(b: PronunciationBand) {
  if (b === "good") return styles.wordGood;
  if (b === "okay") return styles.wordOkay;
  return styles.wordMiss;
}

function bandTextStyle(b: PronunciationBand) {
  if (b === "good") return styles.wordTextGood;
  if (b === "okay") return styles.wordTextOkay;
  return styles.wordTextMiss;
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  exitBtn: { width: 80 },
  exitText: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  spacer: { width: 80 },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 6,
    flexWrap: "wrap",
  },
  dot: {
    width: 18,
    height: 4,
    borderRadius: 2,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  dotActive: { backgroundColor: tokens.brand.primary },
  dotDone: { backgroundColor: tokens.brand.primaryFixed },
  dotsCount: {
    marginLeft: 8,
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.2,
  },
  scroll: {
    flexGrow: 1,
    padding: tokens.spacing.md,
    paddingBottom: tokens.spacing.lg,
  },
  loadingBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: tokens.spacing.lg,
  },
  loadingText: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 32,
  },
  notFoundTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },

  // Listen pill
  listenRow: {
    alignItems: "flex-end",
    marginBottom: tokens.spacing.sm,
  },
  listenBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
  },
  listenBtnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  listenText: {
    color: tokens.brand.tertiary,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
  },

  // Hero
  hero: {
    backgroundColor: "rgba(246, 255, 0, 0.14)",
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    borderRadius: tokens.radius.base,
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: tokens.spacing.md,
  },
  heroLabel: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.6,
    marginBottom: 14,
  },
  heroPhrase: {
    fontSize: 28,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    textAlign: "center",
    lineHeight: 36,
  },

  // Result
  resultBox: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  resultHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    gap: 6,
    marginBottom: 12,
  },
  resultLabel: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.2,
    marginRight: 6,
  },
  resultScore: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: -1,
  },
  resultOf: {
    fontSize: 14,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },
  wordsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
  },
  wordBox: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: tokens.radius.sm,
    borderWidth: 1,
  },
  wordGood: {
    backgroundColor: "rgba(25, 120, 229, 0.12)",
    borderColor: tokens.brand.tertiary,
  },
  wordOkay: {
    backgroundColor: "rgba(246, 255, 0, 0.20)",
    borderColor: tokens.brand.primaryFixed,
  },
  wordMiss: {
    backgroundColor: tokens.semantic.errorContainer,
    borderColor: tokens.semantic.error,
  },
  wordText: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
  },
  wordTextGood: { color: tokens.brand.tertiary },
  wordTextOkay: { color: tokens.text.primary },
  wordTextMiss: { color: tokens.semantic.onErrorContainer },

  // Error
  errorBox: {
    backgroundColor: tokens.semantic.errorContainer,
    borderRadius: tokens.radius.base,
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: 12,
    marginBottom: tokens.spacing.md,
  },
  errorText: {
    color: tokens.semantic.onErrorContainer,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    textAlign: "center",
  },

  // CTA area
  ctaWrap: {
    marginTop: tokens.spacing.sm,
  },
  scoredCtaRow: {
    flexDirection: "row",
    gap: 12,
  },
  scoredHalf: {
    flex: 1,
  },
});

const micStyles = StyleSheet.create({
  outer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  glow: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: tokens.brand.primaryGlow,
  },
  btn: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  btnListening: {
    backgroundColor: tokens.brand.primaryFixed,
  },
  icon: {
    fontSize: 38,
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    color: tokens.text.onPrimary,
    fontWeight: tokens.weight.extrabold,
    textAlign: "center",
    letterSpacing: 0.2,
  },
});

const finishedStyles = StyleSheet.create({
  wrap: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: tokens.spacing.lg,
  },
  emoji: {
    fontSize: 88,
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  msg: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: tokens.spacing.md,
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  scoreCard: {
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: tokens.brand.secondary,
    paddingHorizontal: 36,
    paddingTop: 28,
    paddingBottom: 22,
    borderRadius: tokens.radius.base,
    marginBottom: tokens.spacing.sm,
    gap: 4,
    position: "relative",
  },
  scoreLabel: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    position: "absolute",
    top: 8,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  scoreNum: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: -2,
  },
  scoreOf: {
    fontSize: 22,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.bold,
  },
  meta: {
    fontSize: 13,
    color: tokens.text.tertiary,
    marginBottom: tokens.spacing.md,
    fontWeight: tokens.weight.semibold,
  },
  footer: {
    width: "100%",
    paddingHorizontal: tokens.spacing.md,
  },
});

const degradedStyles = StyleSheet.create({
  wrap: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: tokens.spacing.lg,
  },
  emoji: {
    fontSize: 72,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.4,
    marginBottom: 12,
    textAlign: "center",
  },
  msg: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 16,
    marginBottom: tokens.spacing.lg,
  },
  footer: {
    width: "100%",
    paddingHorizontal: tokens.spacing.md,
  },
});
