// Deck study screen — two modes.
//   Mode A "Browse":  swipe through 15 cards, tap to flip, mark as learned, hear pronunciation.
//   Mode B "Study":   shuffled 15-card multi-choice quiz (English -> Turkish), 4 options each.
//
// Results: "Sonuç: X/15. {missed} kelimeyi SRS'e ekledim, yarın tekrar görürsün."

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
  useWindowDimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { VocabCardView } from "../../components/VocabCardView";
import { tokens } from "../../theme";
import {
  getDeckProgress,
  markCardLearned,
} from "../../lib/vocab-deck";

// --- Defensive type & data import -------------------------------------------
// Mirrors the fallback in decks.tsx until data/vocab-decks.ts lands.
type CefrLevelLike = "A1" | "A2" | "B1" | "B2" | "C1";

type LocalVocabCard = {
  id: string;
  english: string;
  turkish: string;
  exampleEn?: string | null;
  exampleTr?: string | null;
};

type LocalVocabDeck = {
  id: string;
  emoji: string;
  title_tr: string;
  description_tr?: string;
  level: CefrLevelLike;
  cards: LocalVocabCard[];
};

let importedDecks: LocalVocabDeck[] | undefined;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("../../data/vocab-decks");
  importedDecks =
    (mod.VOCAB_DECKS as LocalVocabDeck[]) ??
    (mod.vocabDecks as LocalVocabDeck[]) ??
    (mod.default as LocalVocabDeck[]) ??
    undefined;
} catch {
  importedDecks = undefined;
}
const VOCAB_DECKS: LocalVocabDeck[] = importedDecks ?? [];

// --- Helpers -----------------------------------------------------------------

function shuffle<T>(arr: ReadonlyArray<T>): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
}

type Mode = "browse" | "quiz" | "result";

interface QuizQuestion {
  card: LocalVocabCard;
  options: string[]; // 4 turkish options, one correct
  correctIndex: number;
}

function buildQuiz(deck: LocalVocabDeck): QuizQuestion[] {
  const shuffled = shuffle(deck.cards);
  return shuffled.map((card) => {
    const distractorPool = deck.cards
      .filter((c) => c.id !== card.id)
      .map((c) => c.turkish);
    const distractors = shuffle(distractorPool).slice(0, 3);
    const allOptions = shuffle([card.turkish, ...distractors]);
    return {
      card,
      options: allOptions,
      correctIndex: allOptions.indexOf(card.turkish),
    };
  });
}

// --- Screen ------------------------------------------------------------------

export default function DeckScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const deck = useMemo(() => VOCAB_DECKS.find((d) => d.id === id), [id]);

  const [mode, setMode] = useState<Mode>("browse");
  const [learnedIds, setLearnedIds] = useState<string[]>([]);

  // Load initial progress
  useEffect(() => {
    if (!id) return;
    getDeckProgress(id).then((p) => setLearnedIds(p.learnedIds));
  }, [id]);

  if (!deck) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>← Geri</Text>
          </Pressable>
          <Text style={styles.title}>Deste yok</Text>
          <View style={styles.spacer} />
        </View>
        <View style={styles.missing}>
          <Text style={styles.missingTitle}>Bu deste bulunamadı</Text>
          <Text style={styles.missingDesc}>
            Geri dönüp başka bir deste seç.
          </Text>
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
        <View style={styles.titleWrap}>
          <Text style={styles.title} numberOfLines={1}>
            {deck.emoji} {deck.title_tr}
          </Text>
          <Text style={styles.subtitle}>
            {deck.level} · {deck.cards.length} kart · {learnedIds.length}{" "}
            öğrenildi
          </Text>
        </View>
        <View style={styles.spacer} />
      </View>

      {mode === "browse" && (
        <BrowseMode
          deck={deck}
          learnedIds={learnedIds}
          onLearned={async (cardId) => {
            await markCardLearned(deck.id, cardId);
            setLearnedIds((prev) =>
              prev.includes(cardId) ? prev : [...prev, cardId],
            );
          }}
          onStartQuiz={() => setMode("quiz")}
        />
      )}

      {mode === "quiz" && (
        <QuizMode
          deck={deck}
          onDone={async (missedIds) => {
            // We don't have a true card-level SRS today — mark CORRECT cards
            // as learned; missed cards remain unlearned ("yarın tekrar").
            const correctIds = deck.cards
              .map((c) => c.id)
              .filter((cid) => !missedIds.includes(cid));
            for (const cid of correctIds) {
              await markCardLearned(deck.id, cid);
            }
            const fresh = await getDeckProgress(deck.id);
            setLearnedIds(fresh.learnedIds);
            setMode("result");
          }}
          onExit={() => setMode("browse")}
        />
      )}

      {mode === "result" && (
        <ResultMode
          deck={deck}
          learnedCount={learnedIds.length}
          onRestart={() => setMode("quiz")}
          onBrowse={() => setMode("browse")}
        />
      )}
    </SafeAreaView>
  );
}

// --- Mode A: Browse ---------------------------------------------------------

interface BrowseProps {
  deck: LocalVocabDeck;
  learnedIds: string[];
  onLearned: (cardId: string) => void;
  onStartQuiz: () => void;
}

function BrowseMode({
  deck,
  learnedIds,
  onLearned,
  onStartQuiz,
}: BrowseProps) {
  const { width } = useWindowDimensions();
  const [activeIdx, setActiveIdx] = useState(0);
  const listRef = useRef<FlatList<LocalVocabCard>>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const idx = Math.round(offsetX / width);
    if (idx !== activeIdx) setActiveIdx(idx);
  };

  const activeCard = deck.cards[activeIdx];
  const isLearned = activeCard
    ? learnedIds.includes(activeCard.id)
    : false;

  return (
    <View style={styles.browseRoot}>
      {/* Page dots */}
      <View style={styles.dotsRow}>
        <Text style={styles.dotsText}>
          {activeIdx + 1} / {deck.cards.length}
        </Text>
      </View>

      {/* Carousel */}
      <FlatList
        ref={listRef}
        data={deck.cards}
        keyExtractor={(c) => c.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={{ width, paddingHorizontal: tokens.spacing.md }}>
            <View style={styles.cardSlot}>
              <VocabCardView
                english={item.english}
                turkish={item.turkish}
                exampleEn={item.exampleEn ?? null}
                exampleTr={item.exampleTr ?? null}
                learned={learnedIds.includes(item.id)}
              />
            </View>
          </View>
        )}
      />

      {/* Actions */}
      <View style={styles.browseActions}>
        <Pressable
          onPress={() => activeCard && onLearned(activeCard.id)}
          style={[
            styles.smallBtn,
            isLearned && styles.smallBtnDone,
          ]}
        >
          <Text
            style={[
              styles.smallBtnText,
              isLearned && styles.smallBtnTextDone,
            ]}
          >
            {isLearned ? "✓ SRS'de" : "+ SRS'e ekle"}
          </Text>
        </Pressable>

        <View style={{ flex: 1 }}>
          <Button label="Çalışma moduna geç" onPress={onStartQuiz} />
        </View>
      </View>
    </View>
  );
}

// --- Mode B: Quiz -----------------------------------------------------------

interface QuizProps {
  deck: LocalVocabDeck;
  onDone: (missedIds: string[]) => void;
  onExit: () => void;
}

function QuizMode({ deck, onDone, onExit }: QuizProps) {
  const [questions] = useState<QuizQuestion[]>(() => buildQuiz(deck));
  const [qIdx, setQIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [missedIds, setMissedIds] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const q = questions[qIdx];
  if (!q) {
    // shouldn't happen — guard for empty decks
    return (
      <View style={styles.missing}>
        <Text style={styles.missingTitle}>Soru bulunamadı</Text>
        <Pressable onPress={onExit} style={styles.linkBtn}>
          <Text style={styles.linkBtnText}>Geri dön</Text>
        </Pressable>
      </View>
    );
  }

  const answered = selectedIdx !== null;
  const isCorrect = answered && selectedIdx === q.correctIndex;

  const onSelect = (idx: number) => {
    if (answered) return;
    setSelectedIdx(idx);
    if (idx === q.correctIndex) {
      setScore((s) => s + 1);
    } else {
      setMissedIds((prev) =>
        prev.includes(q.card.id) ? prev : [...prev, q.card.id],
      );
    }
  };

  const onNext = () => {
    if (qIdx + 1 >= questions.length) {
      onDone(missedIds);
      return;
    }
    setQIdx(qIdx + 1);
    setSelectedIdx(null);
  };

  const progress = ((qIdx + (answered ? 1 : 0)) / questions.length) * 100;

  return (
    <View style={styles.quizRoot}>
      {/* Progress bar */}
      <View style={styles.quizProgressWrap}>
        <View style={styles.quizProgressBar}>
          <View
            style={[styles.quizProgressFill, { width: `${progress}%` }]}
          />
        </View>
        <Text style={styles.quizProgressText}>
          {qIdx + 1} / {questions.length} · Skor: {score}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.quizScroll}>
        {/* Prompt */}
        <View style={styles.quizPromptCard}>
          <Text style={styles.quizPromptLabel}>Türkçesi ne?</Text>
          <Text style={styles.quizPromptWord} adjustsFontSizeToFit numberOfLines={2}>
            {q.card.english}
          </Text>
        </View>

        {/* Options */}
        <View style={styles.optionsCol}>
          {q.options.map((opt, idx) => {
            const isSelected = selectedIdx === idx;
            const isRightAnswer = idx === q.correctIndex;
            const showCorrect = answered && isRightAnswer;
            const showWrong = answered && isSelected && !isRightAnswer;

            return (
              <Pressable
                key={`${idx}-${opt}`}
                onPress={() => onSelect(idx)}
                disabled={answered}
                style={({ pressed }) => [
                  styles.optionBtn,
                  pressed && !answered && styles.optionBtnPressed,
                  showCorrect && styles.optionBtnCorrect,
                  showWrong && styles.optionBtnWrong,
                ]}
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

        {/* Feedback */}
        {answered && (
          <View
            style={[
              styles.feedbackCard,
              isCorrect ? styles.feedbackOk : styles.feedbackBad,
            ]}
          >
            <Text
              style={[
                styles.feedbackTitle,
                isCorrect ? styles.feedbackTitleOk : styles.feedbackTitleBad,
              ]}
            >
              {isCorrect ? "Doğru" : "Yanlış"}
            </Text>
            {!isCorrect && (
              <Text style={styles.feedbackSub}>
                Doğrusu: {q.card.turkish}
              </Text>
            )}
            {q.card.exampleEn && (
              <Text style={styles.feedbackExample}>“{q.card.exampleEn}”</Text>
            )}
          </View>
        )}
      </ScrollView>

      {/* Footer actions */}
      <View style={styles.quizFooter}>
        <Pressable onPress={onExit} style={styles.linkBtn}>
          <Text style={styles.linkBtnText}>Çık</Text>
        </Pressable>
        <View style={{ flex: 1 }}>
          <Button
            label={
              qIdx + 1 >= questions.length ? "Sonuçları gör" : "Sonraki"
            }
            onPress={onNext}
            disabled={!answered}
          />
        </View>
      </View>
    </View>
  );
}

// --- Mode: Result -----------------------------------------------------------

interface ResultProps {
  deck: LocalVocabDeck;
  learnedCount: number;
  onRestart: () => void;
  onBrowse: () => void;
}

function ResultMode({
  deck,
  learnedCount,
  onRestart,
  onBrowse,
}: ResultProps) {
  const total = deck.cards.length;
  const missed = total - learnedCount;
  return (
    <ScrollView contentContainerStyle={styles.resultRoot}>
      <Text style={styles.resultTitle}>Sonuç</Text>
      <Text style={styles.resultScore}>
        {learnedCount}
        <Text style={styles.resultScoreOf}>/{total}</Text>
      </Text>
      <Text style={styles.resultMessage}>
        {missed === 0
          ? "Tüm kelimeleri doğru bildin."
          : `${missed} kelimeyi SRS'e ekledim, yarın tekrar görürsün.`}
      </Text>

      <View style={styles.resultActions}>
        <Button label="Tekrar dene" onPress={onRestart} variant="secondary" />
        <View style={{ height: 12 }} />
        <Button label="Kartlara geri dön" onPress={onBrowse} />
      </View>
    </ScrollView>
  );
}

// --- Styles -----------------------------------------------------------------

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
  titleWrap: { flex: 1, alignItems: "center" },
  title: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  subtitle: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
    marginTop: 2,
  },
  spacer: { width: 70 },

  // Browse
  browseRoot: { flex: 1 },
  dotsRow: {
    alignItems: "center",
    paddingVertical: tokens.spacing.sm,
  },
  dotsText: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.5,
  },
  cardSlot: {
    flex: 1,
    justifyContent: "center",
  },
  browseActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: tokens.spacing.md,
    paddingBottom: tokens.spacing.md,
  },
  smallBtn: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  smallBtnDone: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderColor: tokens.brand.tertiary,
  },
  smallBtnText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  smallBtnTextDone: {
    color: tokens.brand.tertiary,
  },

  // Quiz
  quizRoot: { flex: 1 },
  quizProgressWrap: {
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.base,
    gap: 6,
  },
  quizProgressBar: {
    height: 6,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: 3,
    overflow: "hidden",
  },
  quizProgressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 3,
  },
  quizProgressText: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    textAlign: "right",
  },
  quizScroll: {
    padding: tokens.spacing.md,
    paddingBottom: tokens.spacing.lg,
    gap: tokens.spacing.md,
  },
  quizPromptCard: {
    backgroundColor: tokens.brand.secondary,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.lg,
    alignItems: "center",
    minHeight: 140,
    justifyContent: "center",
  },
  quizPromptLabel: {
    fontSize: 12,
    color: tokens.brand.primary,
    fontWeight: tokens.weight.black,
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  quizPromptWord: {
    fontSize: 36,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.inverseOnSurface,
    textAlign: "center",
    letterSpacing: -0.6,
  },
  optionsCol: {
    gap: 10,
  },
  optionBtn: {
    backgroundColor: tokens.bg.surfaceContainer,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.base,
    borderWidth: 2,
    borderColor: tokens.border.light,
  },
  optionBtnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  optionBtnCorrect: {
    backgroundColor: tokens.semantic.successContainer,
    borderColor: tokens.semantic.success,
  },
  optionBtnWrong: {
    backgroundColor: tokens.semantic.errorContainer,
    borderColor: tokens.semantic.error,
  },
  optionText: {
    fontSize: 17,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  optionTextCorrect: {
    color: tokens.semantic.success,
  },
  optionTextWrong: {
    color: tokens.semantic.error,
  },
  feedbackCard: {
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
  },
  feedbackOk: {
    backgroundColor: tokens.semantic.successContainer,
    borderColor: tokens.semantic.success,
  },
  feedbackBad: {
    backgroundColor: tokens.semantic.errorContainer,
    borderColor: tokens.semantic.error,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    marginBottom: 4,
  },
  feedbackTitleOk: { color: tokens.semantic.success },
  feedbackTitleBad: { color: tokens.semantic.error },
  feedbackSub: {
    fontSize: 14,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    marginBottom: 4,
  },
  feedbackExample: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontStyle: "italic",
  },
  quizFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: tokens.spacing.md,
  },
  linkBtn: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  linkBtnText: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.bold,
  },

  // Result
  resultRoot: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: tokens.spacing.md,
    paddingTop: tokens.spacing.lg,
  },
  resultEmoji: {
    fontSize: 72,
    marginBottom: tokens.spacing.sm,
  },
  resultTitle: {
    fontSize: 18,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 80,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -2,
    marginBottom: tokens.spacing.sm,
  },
  resultScoreOf: {
    fontSize: 40,
    color: tokens.text.tertiary,
  },
  resultMessage: {
    fontSize: 16,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: tokens.spacing.lg,
    maxWidth: 320,
  },
  resultActions: {
    width: "100%",
    maxWidth: 340,
  },

  // Missing deck fallback
  missing: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: tokens.spacing.lg,
  },
  missingEmoji: {
    fontSize: 56,
    marginBottom: tokens.spacing.sm,
  },
  missingTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 6,
  },
  missingDesc: {
    fontSize: 14,
    color: tokens.text.tertiary,
    textAlign: "center",
  },
});
