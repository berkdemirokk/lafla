// Placement — adaptive CEFR test (2026-05-21, +speaking/listening 2026-05-23).
//
// Onboarding'in son adımı (self-report cefr) yerine veya onun "Test ile
// belirle" CTA'sı arkasında. 12 MCQ adaptive (B1 ile başla, ±1 seviye),
// sonra 2 speaking + 2 listening ile final calibration.
//
// 2026-05-23 — CEFR audit fix #1: önceki versiyon SADECE okuma/grammar
// MCQ test ediyordu. Bir speaking app için bu ölümcül bir gap'ti — Türk
// öğrencisi grammar'ı pasif tanıyıp B1 alabiliyordu ama konuşamıyor, B1
// sahneleri batırıyor, trust ilk gün kayboluyordu. Şimdi son iki adım
// gerçek speaking (PronouncePhrase + phoneme grader) ve gerçek listening
// (TTS audio + transcribe). Eğer her ikisinde de düşük puan alırsa
// final level otomatik -1 band düşer ("okumana göre B1 idin ama dinleme
// + konuşma A2 — sana A2 sahneleri sunuyoruz").

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import { hapticImpact, hapticSelection, hapticSuccess } from "../lib/feedback";
import { type CefrLevel } from "../lib/cefr-level";
import { trackEvent } from "../lib/analytics";
import { finalizeOnboarding } from "../lib/onboarding-finalize";
import { getInterests } from "../lib/local-progress";
import { pickOnboardingScenarioId } from "../lib/onboarding-intro";
import { PronouncePhrase } from "../components/exercises/PronouncePhrase";
import { ListenAndTranscribe } from "../components/exercises/ListenAndTranscribe";
import type { ExerciseResult } from "../lib/engine";
import { useTranslation } from "../lib/i18n";
import { AsyncScreenState } from "../components/AsyncScreenState";
import {
  PLACEMENT_QUESTION_COUNT,
  computeFinalLevel,
  nextLevelDown,
  nextLevelUp,
  pickQuestionFromLevel,
  type PlacementQuestion,
} from "../data/cefr-placement-bank";
import {
  ORAL_PROMPT_COUNT,
  ORAL_SKIPPED_SCORE,
  appendOralScore,
  applyOralAdjustment,
  averageOralScores,
  normalizeOralScores,
} from "../lib/placement-oral-calibration";

// ─── Speaking + listening prompts, indexed by the MCQ-derived level ─
// Each level gets a CEFR-tuned phrase. PronouncePhrase grades phoneme-by-
// phoneme via the Levenshtein-on-IPA pipeline; ListenAndTranscribe plays
// via TTS then asks the user to type back. Both are well-tested existing
// exercises — we're just wiring them into the placement flow.

const SPEAKING_PHRASES: Record<CefrLevel, Array<{ phrase: string; tr: string }>> = {
  A1: [
    { phrase: "Hello, my name is Alex.", tr: "Merhaba, benim adım Alex." },
    { phrase: "I need a ticket, please.", tr: "Bir bilete ihtiyacım var." },
  ],
  A2: [
    {
      phrase: "I usually go to work by bus.",
      tr: "Genelde işe otobüsle giderim.",
    },
    {
      phrase: "Could you repeat that more slowly?",
      tr: "Bunu daha yavaş tekrar eder misin?",
    },
  ],
  B1: [
    {
      phrase: "I'd like to know more about your weekend.",
      tr: "Hafta sonun hakkında daha çok bilgi almak isterim.",
    },
    {
      phrase: "I can explain the problem if you have a minute.",
      tr: "Bir dakikan varsa problemi açıklayabilirim.",
    },
  ],
  B2: [
    {
      phrase: "If I had known earlier, I would have prepared something.",
      tr: "Daha önce bilseydim bir şeyler hazırlardım.",
    },
    {
      phrase: "The deadline is tight, but we can still make it work.",
      tr: "Teslim tarihi sıkışık ama bunu yine de halledebiliriz.",
    },
  ],
  C1: [
    {
      phrase: "On balance, the proposal warrants further consideration.",
      tr: "Genel olarak, öneri daha fazla değerlendirilmeyi hak ediyor.",
    },
    {
      phrase: "I would push back on that assumption for two reasons.",
      tr: "Bu varsayıma iki nedenle itiraz ederdim.",
    },
  ],
  C2: [
    {
      phrase: "Were it not for the complications, the project would have wrapped up.",
      tr: "Komplikasyonlar olmasaydı proje tamamlanmış olacaktı.",
    },
    {
      phrase: "That being the case, we should revise the framing entirely.",
      tr: "Durum buysa çerçeveyi tamamen yeniden kurmalıyız.",
    },
  ],
};

const LISTENING_PHRASES: Record<CefrLevel, Array<{ sentence: string; tr: string }>> = {
  A1: [
    { sentence: "Where is the bathroom?", tr: "Tuvalet nerede?" },
    { sentence: "I am from Turkey.", tr: "Türkiye'den geliyorum." },
  ],
  A2: [
    {
      sentence: "Could I have a cup of coffee, please?",
      tr: "Bir fincan kahve alabilir miyim, lütfen?",
    },
    {
      sentence: "The bus leaves in ten minutes.",
      tr: "Otobüs on dakika içinde kalkıyor.",
    },
  ],
  B1: [
    {
      sentence: "Could you tell me where the nearest pharmacy is?",
      tr: "Bana en yakın eczanenin nerede olduğunu söyler misin?",
    },
    {
      sentence: "I missed the train because the platform changed.",
      tr: "Peron değiştiği için treni kaçırdım.",
    },
  ],
  B2: [
    {
      sentence: "I'm afraid the meeting has been postponed.",
      tr: "Maalesef toplantı ertelendi.",
    },
    {
      sentence: "We need to clarify the scope before we agree to the timeline.",
      tr: "Takvimi kabul etmeden önce kapsamı netleştirmeliyiz.",
    },
  ],
  C1: [
    {
      sentence: "In hindsight, we should have allocated more resources.",
      tr: "Geriye dönüp bakınca daha çok kaynak ayırmalıydık.",
    },
    {
      sentence: "The evidence is persuasive, albeit somewhat limited.",
      tr: "Kanıt ikna edici ama biraz sınırlı.",
    },
  ],
  C2: [
    {
      sentence: "Were the data to prove inconclusive, we'd revisit our assumptions.",
      tr: "Veri yetersiz çıkarsa varsayımlarımızı tekrar gözden geçireceğiz.",
    },
    {
      sentence: "Had it not been for that caveat, I would have endorsed it outright.",
      tr: "O çekince olmasaydı bunu doğrudan desteklerdim.",
    },
  ],
};

// Test phases. "mcq" → 12 MCQ adaptive; "speaking" → 2 PronouncePhrase
// at MCQ-derived level; "listening" → 2 ListenAndTranscribe at same level;
// "done" → result + handoff. Each phase has a single source of truth state
// so back navigation never desyncs.
type Phase = "mcq" | "speaking" | "listening" | "done";

// Adjustment rule: if BOTH speaking and listening miss ≥50% the user is
// passive-only (reads grammar but can't speak / understand audio). Drop
// one band — better to start them too low than too high. If only one
// fails we keep the MCQ level (could be a one-off bad read or noise).
const FAIL_THRESHOLD = 50;

// 2026-05-23 — Audit fix: placement state persistence.
//   Önceki versiyon tüm phase state'ini React useState'te tutuyordu. User
//   8 dakikalık testin ortasında telefon kapanırsa (call, OOM, force-close)
//   tüm progress kaybolurdu — baştan başlamak gerekti. Şimdi her transition'da
//   state AsyncStorage'a yazılır; mount'ta restore edilir; handleAccept'te
//   temizlenir.
const K_PLACEMENT_STATE = "lafla.placement.state";

interface PersistedPlacement {
  phase: Phase;
  history: HistoryEntry[];
  currentLevel: CefrLevel;
  usedIds: string[]; // Set serialize edilmiyor — array olarak yaz/oku
  mcqDerivedLevel: CefrLevel | null;
  speakingScore?: number | null;
  listeningScore?: number | null;
  speakingScores?: number[];
  listeningScores?: number[];
  finalLevel: CefrLevel | null;
}

interface HistoryEntry {
  level: CefrLevel;
  correct: boolean;
  question_id: string;
}

function nextAdaptiveLevel(
  currentLevel: CefrLevel,
  history: readonly HistoryEntry[],
): CefrLevel {
  const recent = history.slice(-2);
  if (recent.length < 2) return currentLevel;
  if (recent.every((entry) => entry.correct)) return nextLevelUp(currentLevel);
  if (recent.every((entry) => !entry.correct)) {
    return nextLevelDown(currentLevel);
  }
  return currentLevel;
}

export default function PlacementScreen() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentLevel, setCurrentLevel] = useState<CefrLevel>("B1");
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [questionNonce, setQuestionNonce] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  // 2026-05-23 — replaced single `finished` flag with a Phase machine so
  // the post-MCQ speaking + listening steps don't have to bolt onto the
  // old boolean. `done` is the new terminal state.
  const [phase, setPhase] = useState<Phase>("mcq");
  const [mcqDerivedLevel, setMcqDerivedLevel] = useState<CefrLevel | null>(
    null,
  );
  const [speakingScores, setSpeakingScores] = useState<number[]>([]);
  const [listeningScores, setListeningScores] = useState<number[]>([]);
  const [finalLevel, setFinalLevel] = useState<CefrLevel | null>(null);
  const [saving, setSaving] = useState(false);
  // 2026-05-21 — adaptive transition feedback. Sonraki soru daha kolay
  // veya zor olursa kullanıcıya açıklayalım. Boş string → render edilmez.
  const [adaptiveHint, setAdaptiveHint] = useState<string | null>(null);
  const speakingScore = useMemo(
    () => averageOralScores(speakingScores),
    [speakingScores],
  );
  const listeningScore = useMemo(
    () => averageOralScores(listeningScores),
    [listeningScores],
  );

  // Bir kez seç — turn boyunca aynı soru
  const current: PlacementQuestion | null = useMemo(() => {
    if (phase !== "mcq") return null;
    return pickQuestionFromLevel(currentLevel, usedIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLevel, phase, questionNonce]);

  // ─── Persistence (audit fix #2) ─────────────────────────────
  //
  // 2026-05-23 — Audit fix v2: race + done-phase persist düzeltildi.
  //   • restoredRef gate: persist effect restore TAMAMLANANA kadar yazma
  //     yapmaz. Eski versiyon initial-commit ile default state'i kaydedip
  //     restore'un üzerine yazıyordu (silent state loss).
  //   • "done" phase artık persist EDİLİR — force-close on done ekranı →
  //     re-open'da "done" state restore + finalLevel görünür, kullanıcı
  //     handleAccept'i bulup tıklayabilir. Eski versiyon done'u skip'liyordu
  //     → restore "listening" phase'i ile geliyordu → tekrar listening test
  //     yaptırıyordu (30s emotional whiplash).
  const restoredRef = useRef(false);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(K_PLACEMENT_STATE);
        if (!raw) {
          void trackEvent("placement_started").catch(() => {});
          restoredRef.current = true;
          return;
        }
        const saved = JSON.parse(raw) as PersistedPlacement;
        // Sanity check — eski yapı varsa görmezden gel.
        if (!saved || typeof saved.phase !== "string") {
          void trackEvent("placement_started").catch(() => {});
          restoredRef.current = true;
          return;
        }
        setPhase(saved.phase);
        setHistory(saved.history ?? []);
        setCurrentLevel(saved.currentLevel ?? "B1");
        setUsedIds(new Set(saved.usedIds ?? []));
        setQuestionNonce((n) => n + 1);
        setMcqDerivedLevel(saved.mcqDerivedLevel);
        setSpeakingScores(
          normalizeOralScores(saved.speakingScores, saved.speakingScore),
        );
        setListeningScores(
          normalizeOralScores(saved.listeningScores, saved.listeningScore),
        );
        setFinalLevel(saved.finalLevel);
        void trackEvent("placement_resumed", { phase: saved.phase }).catch(
          () => {},
        );
      } catch {
        void trackEvent("placement_started").catch(() => {});
      } finally {
        // restoredRef'i HER yolda işaretle — restore başarısız olsa bile
        // persist'in çalışmasına izin ver (yeni baştan başlama akışı).
        restoredRef.current = true;
      }
    })();
  }, []);

  // Her state transition'ında AsyncStorage'a yaz. Restore tamamlanana
  // kadar BEKLER (restoredRef gate).
  useEffect(() => {
    // Restore henüz olmadıysa yazma — default state'i restore'un üzerine
    // yazma race'ini önler.
    if (!restoredRef.current) return;
    const persisted: PersistedPlacement = {
      phase,
      history,
      currentLevel,
      usedIds: Array.from(usedIds),
      mcqDerivedLevel,
      speakingScore,
      listeningScore,
      speakingScores,
      listeningScores,
      finalLevel,
    };
    void AsyncStorage.setItem(
      K_PLACEMENT_STATE,
      JSON.stringify(persisted),
    ).catch(() => {});
  }, [
    phase,
    history,
    currentLevel,
    usedIds,
    mcqDerivedLevel,
    speakingScore,
    listeningScore,
    speakingScores,
    listeningScores,
    finalLevel,
  ]);

  // ─── interaction ────────────────────────────────────────────

  const handleSelect = (idx: number) => {
    if (revealed) return;
    hapticSelection();
    setSelectedIdx(idx);
  };

  const handleConfirm = () => {
    if (selectedIdx === null || !current) return;
    const isCorrect = selectedIdx === current.correct_index;
    hapticImpact(isCorrect ? "light" : "medium");
    setRevealed(true);

    setTimeout(() => {
      const newHistory = [
        ...history,
        { level: current.level, correct: isCorrect, question_id: current.id },
      ];
      setUsedIds((prev) => {
        const next = new Set(prev);
        next.add(current.id);
        return next;
      });
      setHistory(newHistory);

      // MCQ tamamlandı — speaking + listening phase'lerine geç.
      // Final level şu an YAPILMIYOR; speaking + listening sonucu birleşince
      // applyMcqLevelAdjustment ile karara bağlanacak.
      if (newHistory.length >= PLACEMENT_QUESTION_COUNT) {
        const mcqLevel = computeFinalLevel(newHistory);
        setMcqDerivedLevel(mcqLevel);
        setPhase("speaking");
        setRevealed(false);
        setSelectedIdx(null);
        setAdaptiveHint(null);
        void trackEvent("placement_mcq_completed", {
          mcq_level: mcqLevel,
          history: newHistory,
        }).catch(() => {});
        return;
      }

      // Adaptive geçiş + mikro açıklama.
      // Tek soru seviyeyi zıplatmasın: yalnızca arka arkaya iki doğru/yanlış
      // aynı yönde sinyal verirse band değiştir.
      const nextLevel = nextAdaptiveLevel(current.level, newHistory);
      setAdaptiveHint(
        nextLevel !== current.level
          ? isCorrect
            ? t("placement.adaptive_harder")
            : t("placement.adaptive_easier")
          : null,
      );
      setCurrentLevel(nextLevel);
      setQuestionNonce((n) => n + 1);
      setRevealed(false);
      setSelectedIdx(null);
    }, 1500); // 1.5s explanation süresi
  };

  // ─── speaking + listening handlers ──────────────────────────
  // 2026-05-23 — wrap the existing exercise components so the placement
  // test gets free reuse of phoneme grader + TTS + STT pipelines.

  const handleSpeakingComplete = (result: ExerciseResult) => {
    const nextScores = appendOralScore(speakingScores, result.score);
    setSpeakingScores(nextScores);
    void trackEvent("placement_speaking_completed", {
      score: result.score,
      scores: nextScores,
      prompt_number: nextScores.length,
      prompt_total: ORAL_PROMPT_COUNT,
      mcq_level: mcqDerivedLevel,
    }).catch(() => {});
    if (nextScores.length >= ORAL_PROMPT_COUNT) setPhase("listening");
  };

  const handleListeningComplete = (result: ExerciseResult) => {
    const nextScores = appendOralScore(listeningScores, result.score);
    setListeningScores(nextScores);
    void trackEvent("placement_listening_completed", {
      score: result.score,
      scores: nextScores,
      prompt_number: nextScores.length,
      prompt_total: ORAL_PROMPT_COUNT,
      mcq_level: mcqDerivedLevel,
    }).catch(() => {});
    if (nextScores.length < ORAL_PROMPT_COUNT) return;
    const finalListeningScore = averageOralScores(nextScores);
    // Now we have all three signals — compute the adjusted final level.
    const adjusted = applyOralAdjustment(
      mcqDerivedLevel ?? "A1",
      speakingScore,
      finalListeningScore,
    );
    setFinalLevel(adjusted);
    setPhase("done");
    void trackEvent("placement_completed", {
      final_level: adjusted,
      mcq_level: mcqDerivedLevel,
      speaking_score: speakingScore,
      speaking_scores: speakingScores,
      listening_score: finalListeningScore,
      listening_scores: nextScores,
    }).catch(() => {});
  };

  // 2026-05-25 (B-SCN-15) — Speaking + listening skip handlers.
  // Mic permission reddedildiyse / TTS çalışmazsa kullanıcı placement'ın
  // 80%'ini bitirmiş halde stuck olmasın diye opt-in skip kapısı.
  // Skip is not neutral: no oral evidence should not preserve a high MCQ level.
  // Use a soft synthetic miss so permission/TTS failures do not trap the user,
  // but the final level is still conservative.
  const handleSpeakingSkip = () => {
    const nextScores = appendOralScore(speakingScores, ORAL_SKIPPED_SCORE);
    setSpeakingScores(nextScores);
    void trackEvent("placement_speaking_skipped", {
      mcq_level: mcqDerivedLevel,
      synthetic_score: ORAL_SKIPPED_SCORE,
      scores: nextScores,
      prompt_number: nextScores.length,
      prompt_total: ORAL_PROMPT_COUNT,
    }).catch(() => {});
    if (nextScores.length >= ORAL_PROMPT_COUNT) setPhase("listening");
  };

  const handleListeningSkip = () => {
    const nextScores = appendOralScore(listeningScores, ORAL_SKIPPED_SCORE);
    setListeningScores(nextScores);
    void trackEvent("placement_listening_skipped", {
      mcq_level: mcqDerivedLevel,
      synthetic_score: ORAL_SKIPPED_SCORE,
      scores: nextScores,
      prompt_number: nextScores.length,
      prompt_total: ORAL_PROMPT_COUNT,
    }).catch(() => {});
    if (nextScores.length < ORAL_PROMPT_COUNT) return;
    const finalListeningScore = averageOralScores(nextScores);
    const adjusted = applyOralAdjustment(
      mcqDerivedLevel ?? "A1",
      speakingScore,
      finalListeningScore,
    );
    setFinalLevel(adjusted);
    setPhase("done");
    void trackEvent("placement_completed", {
      final_level: adjusted,
      mcq_level: mcqDerivedLevel,
      speaking_score: speakingScore,
      speaking_scores: speakingScores,
      listening_score: finalListeningScore,
      listening_scores: nextScores,
    }).catch(() => {});
  };

  const handleAccept = async () => {
    if (!finalLevel || saving) return;
    setSaving(true);
    hapticSuccess();
    let selectedInterests: string[] = [];

    // 2026-05-23 — audit fix: K_PLACEMENT_STATE'i ÖNCE değil SONRA sil.
    // Önceki versiyon finalizeOnboarding'den ÖNCE remove ediyordu —
    // eğer finalize throw ederse user "ne placement ne onboarded"
    // state'inde kalıyordu (broken). Şimdi: finalize success'inden
    // sonra atomik temizlik (line below).

    // Finalize onboarding (helper) — setCefrLevel + setOnboarded + ATT +
    // analytics + completeOnboarding (Supabase sync). Interests + name
    // disk'te zaten kaydedildi onboarding tarafında.
    // 2026-05-25 (B-AUTH-9) — finalizeOnboarding throw ederse (AsyncStorage
    // full, Supabase 5xx) önceki versiyon uncaught promise rejection
    // çekirdek'e gidiyordu. Şimdi: kullanıcıya hata göster, saving'i kaldır.
    try {
      const [interests, nameRaw] = await Promise.all([
        getInterests().catch(() => [] as string[]),
        AsyncStorage.getItem("lafla.displayName").catch(() => null),
      ]);
      selectedInterests = interests;
      await finalizeOnboarding({
        level: finalLevel,
        interests,
        displayName: nameRaw ?? "",
        source: "placement_test",
      });
    } catch (e) {
      setSaving(false);
      Alert.alert(
        t("common.error_title"),
        t("placement.save_error"),
        [{ text: t("common.ok") }],
      );
      return;
    }

    // Finalize başarılı — şimdi atomik temizlik. Restore state'i sil.
    void AsyncStorage.removeItem(K_PLACEMENT_STATE).catch(() => {});

    // Placement yolunda da ilk pratik seçilen bağlama göre belirlenir.
    const introDone = await AsyncStorage.getItem(
      "lafla.intro.match.completed",
    ).catch(() => null);
    if (introDone === "true") {
      router.replace("/today" as never);
    } else {
      const scenarioId = pickOnboardingScenarioId(
        selectedInterests,
        finalLevel,
      );
      router.replace(`/scenario/${scenarioId}?intro=true` as never);
    }
  };

  // ─── progress dots ──────────────────────────────────────────

  const progress = history.length;
  const total = PLACEMENT_QUESTION_COUNT;

  const recoverPlacement = async () => {
    await AsyncStorage.removeItem(K_PLACEMENT_STATE).catch(() => {});
    setHistory([]);
    setCurrentLevel("B1");
    setUsedIds(new Set());
    setSelectedIdx(null);
    setRevealed(false);
    setMcqDerivedLevel(null);
    setSpeakingScores([]);
    setListeningScores([]);
    setFinalLevel(null);
    setAdaptiveHint(null);
    setPhase("mcq");
    setQuestionNonce((nonce) => nonce + 1);
    void trackEvent("placement_recovered").catch(() => {});
  };

  // ─── speaking phase ─────────────────────────────────────────
  if (phase === "speaking" && mcqDerivedLevel) {
    const promptIndex = Math.min(
      speakingScores.length,
      ORAL_PROMPT_COUNT - 1,
    );
    const target = SPEAKING_PHRASES[mcqDerivedLevel][promptIndex];
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t("placement.speaking_title")}</Text>
          <Text style={styles.headerSub}>
            {t("placement.speaking_body", {
              current: String(promptIndex + 1),
              total: String(ORAL_PROMPT_COUNT),
            })}
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.body}>
          <PronouncePhrase
            phrase={target.phrase}
            trHint={locale === "tr" ? target.tr : undefined}
            onComplete={handleSpeakingComplete}
            onSkip={handleSpeakingSkip}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── listening phase ────────────────────────────────────────
  if (phase === "listening" && mcqDerivedLevel) {
    const promptIndex = Math.min(
      listeningScores.length,
      ORAL_PROMPT_COUNT - 1,
    );
    const target = LISTENING_PHRASES[mcqDerivedLevel][promptIndex];
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t("placement.listening_title")}</Text>
          <Text style={styles.headerSub}>
            {t("placement.listening_body", {
              current: String(promptIndex + 1),
              total: String(ORAL_PROMPT_COUNT),
            })}
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.body}>
          <ListenAndTranscribe
            sentence={target.sentence}
            trHint={locale === "tr" ? target.tr : undefined}
            onComplete={handleListeningComplete}
            onSkip={handleListeningSkip}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── finished state ─────────────────────────────────────────

  if (phase === "done" && finalLevel) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <ScrollView contentContainerStyle={styles.doneWrap}>
          <Text style={styles.doneEmoji}>🎯</Text>
          <Text style={styles.doneTitle}>{t("placement.done_title")}</Text>
          <View style={styles.levelHero}>
            <Text style={styles.levelHeroText}>{finalLevel}</Text>
          </View>
          <Text style={styles.doneSub}>
            {t(`placement.level.${finalLevel}`)}
          </Text>
          {/* If the oral checks demoted the user from their MCQ level we
              surface a one-line explanation. Better to admit "we adjusted"
              than to silently disagree with the user's own intuition. */}
          {mcqDerivedLevel && mcqDerivedLevel !== finalLevel ? (
            <Text style={styles.doneAdjustment}>
              {t("placement.adjustment", { reading: mcqDerivedLevel, oral: finalLevel })}
            </Text>
          ) : null}
          <Text style={styles.doneFoot}>
            {t("placement.done_foot")}
          </Text>
          <View style={styles.doneFooter}>
            <Button
              label={saving ? "…" : t("placement.home")}
              onPress={handleAccept}
              disabled={saving}
              stacked
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── question render ────────────────────────────────────────

  if (!current) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <AsyncScreenState status="error" onRetry={() => void recoverPlacement()} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />

      {/* Header — progress + escape hatch */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          {/* 2026-05-26 — Çıkış/iptal butonu. Önceki versiyon: placement
              ortasında geri çıkış yolu yoktu, kullanıcı 8 dakikalık teste
              giriyor "self-report yapacaktım" diyemiyordu. Şimdi: cancel
              persist state'i sil + /onboarding'e dön. */}
          <Pressable
            onPress={() => {
              hapticSelection();
              Alert.alert(
                t("placement.exit_title"),
                t("placement.exit_body"),
                [
                  { text: t("placement.continue_test"), style: "cancel" },
                  {
                    text: t("placement.exit"),
                    style: "destructive",
                    onPress: async () => {
                      await AsyncStorage.removeItem(K_PLACEMENT_STATE).catch(
                        () => {},
                      );
                      router.replace("/onboarding" as never);
                    },
                  },
                ],
              );
            }}
            hitSlop={12}
            style={styles.headerCancel}
            accessibilityRole="button"
            accessibilityLabel={t("placement.exit_title")}
          >
            <Text style={styles.headerCancelText}>← {t("placement.exit")}</Text>
          </Pressable>
          <Text style={styles.headerTitle}>{t("placement.title")}</Text>
          <View style={styles.headerCancel} />
        </View>
        <View style={styles.dotsRow}>
          {Array.from({ length: total }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i < progress && styles.dotDone,
                i === progress && styles.dotActive,
              ]}
            />
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        {/* Adaptive transition hint — bir önceki cevap seviye değiştirdiyse
            burada kullanıcıya neden değiştiğini söyler. Bu küçük şeffaflık
            kullanıcının "Niye bu soru bu kadar basit/zor?" sorusuna cevap. */}
        {adaptiveHint && (
          <View style={styles.adaptiveHint}>
            <Text style={styles.adaptiveHintText}>{adaptiveHint}</Text>
          </View>
        )}
        <Text style={styles.prompt}>{current.prompt}</Text>
        {locale === "tr" && current.prompt_tr ? (
          <Text style={styles.promptTr}>{current.prompt_tr}</Text>
        ) : null}

        <View style={styles.optionsCol}>
          {current.options.map((opt, i) => {
            const isSelected = selectedIdx === i;
            const isCorrectOption = i === current.correct_index;
            const showCorrect = revealed && isCorrectOption;
            const showWrong = revealed && isSelected && !isCorrectOption;
            return (
              <Pressable
                key={i}
                onPress={() => handleSelect(i)}
                disabled={revealed}
                style={({ pressed }) => [
                  styles.option,
                  isSelected && !revealed && styles.optionSelected,
                  showCorrect && styles.optionCorrect,
                  showWrong && styles.optionWrong,
                  pressed && !revealed && styles.optionPressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel={opt}
                accessibilityState={{ selected: isSelected, disabled: revealed }}
              >
                <Text
                  style={[
                    styles.optionText,
                    showCorrect && styles.optionTextCorrect,
                    showWrong && styles.optionTextWrong,
                  ]}
                >
                  {opt}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Explanation — sadece revealed sonrası */}
        {revealed && locale === "tr" && (
          <View style={styles.explainBox}>
            <Text style={styles.explainText}>{current.explanation_tr}</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={revealed ? t("placement.next") : t("placement.answer")}
          onPress={revealed ? () => {} : handleConfirm}
          disabled={selectedIdx === null || revealed}
          stacked
        />
      </View>
    </SafeAreaView>
  );
}

// ─── helpers ────────────────────────────────────────────────────────

/**
 * Final level adjustment based on speaking + listening evidence.
 *
 * The MCQ side measures recognition + grammar — a Turkish learner who's
 * spent years reading English can hit B1 on MCQ while being unable to
 * speak or understand audio at all. The two oral checks let us catch
 * that mismatch and demote the level so day-1 scenes don't drown them.
 *
 * Rule:
 *   - Speaking < 30 → two drops, speaking < 50 → one drop.
 *   - Listening < 50 → one drop. Skips are synthetic 35s, so skipping both
 *     oral checks cannot preserve a high MCQ-only result.
 *   - When both are ≥ 50 we trust the MCQ result fully.
 *
 * The asymmetry is intentional: we'd rather start a B1 user at A2 by
 * mistake (a few easy wins → they reclassify upward via real practice
 * via PROGRESS_HIGH inside cefr-level.ts) than start an A2 at B1 and
 * have them churn.
 */
function levelDescription(l: CefrLevel): string {
  switch (l) {
    case "A1":
      return "Birkaç kelime biliyorsun, sahneler buradan başlar — yavaş ve net.";
    case "A2":
      return "Basit cümleler kuruyorsun, takıldığın yerler var. Sahneler temel + günlük.";
    case "B1":
      return "Günlük konuşmayı yürütebiliyorsun. Sahneler iş + flört + sosyal karışım.";
    case "B2":
      return "İş ve sosyal hayatta rahatın, akıcılık geliştiriyorsun. Sahneler nüanslı.";
    case "C1":
      return "İleri seviye — idiom + register oynamaları, native-yakın.";
    case "C2":
      return "Ustalık seviyesi. Hâlâ küçük cilalar var ama büyük resmi yakaladın.";
  }
}

// ─── styles ─────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },

  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerCancel: {
    width: 64,
    minHeight: 32,
    justifyContent: "center",
  },
  headerCancelText: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
  },
  // Subtitle used during speaking + listening phases (no progress dots
  // there — single oral check, no "X of Y" framing).
  headerSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
    marginTop: 2,
  },
  dotsRow: { flexDirection: "row", gap: 6 },
  dot: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  dotActive: {
    backgroundColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.65,
    shadowRadius: 10,
  },
  dotDone: {
    backgroundColor: tokens.brand.tertiary,
  },

  body: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
  },

  prompt: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  promptTr: {
    fontSize: 14,
    color: tokens.text.tertiary,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  // Adaptive hint pill — bir önceki cevaba göre seviye değiştiyse mikro
  // açıklama. "Bunu kolay yaptın" / "Bu zor geldi". Pink/Cyan tint.
  adaptiveHint: {
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    marginBottom: 18,
  },
  adaptiveHintText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.3,
  },

  optionsCol: { gap: 10, marginTop: 16 },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.base,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    backgroundColor: tokens.bg.surfaceContainerLow,
  },
  optionSelected: {
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
  },
  optionPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  optionCorrect: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionText: {
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  optionTextCorrect: {
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.extrabold,
  },
  optionTextWrong: {
    color: tokens.semantic.error,
    fontWeight: tokens.weight.bold,
  },

  explainBox: {
    marginTop: 20,
    padding: 14,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.tertiary,
  },
  explainText: {
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.primary,
  },

  footer: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.app,
  },

  // ─── done ─────────────
  doneWrap: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
    alignItems: "center",
  },
  doneEmoji: { fontSize: 56, marginBottom: 8 },
  doneTitle: {
    fontSize: 24,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    fontFamily: tokens.font.display,
    marginBottom: 20,
  },
  levelHero: {
    paddingHorizontal: 32,
    paddingVertical: 18,
    borderRadius: tokens.radius.lg,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 8,
    marginBottom: 18,
  },
  levelHeroText: {
    fontSize: 52,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: -2,
    fontFamily: tokens.font.display,
  },
  doneSub: {
    fontSize: 15,
    lineHeight: 22,
    color: tokens.text.primary,
    textAlign: "center",
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  doneAdjustment: {
    fontSize: 13,
    color: tokens.brand.tertiary,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 14,
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    lineHeight: 18,
    fontWeight: tokens.weight.semibold,
  },
  doneFoot: {
    fontSize: 12,
    color: tokens.text.tertiary,
    textAlign: "center",
    paddingHorizontal: 24,
    lineHeight: 17,
  },
  doneFooter: {
    width: "100%",
    marginTop: 32,
  },
});
