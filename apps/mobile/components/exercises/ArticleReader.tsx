// Lafla — ArticleReader
// Renders a graded English article and replaces each highlight phrase with a
// tappable underlined span. Tapping a highlight opens an elegant bottom-sheet
// popover with the Turkish translation, an optional note, "Speak" (TTS), and
// "SRS'e ekle" (saves to local vocab via lib/reading.addVocabToSrs).

import { useMemo, useRef, useState, useEffect } from "react";
import {
  Animated,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SpeakerButton } from "../SpeakerButton";
import { speak } from "../../lib/tts";
import { hapticSelection } from "../../lib/feedback";
import { addVocabToSrs } from "../../lib/reading";
import type { ReadingHighlight } from "../../data/reading-articles";
import { tokens } from "../../theme";

interface Props {
  articleId: string;
  body: string;
  highlights: ReadonlyArray<ReadingHighlight>;
  /** Optional: notified when user adds a word to SRS. */
  onAddedToSrs?: (word: string) => void;
}

type Segment =
  | { kind: "text"; text: string }
  | { kind: "highlight"; text: string; data: ReadingHighlight };

// Build a flat list of text/highlight segments. Longest phrases match first so
// "good morning" wins over a separate "good" highlight if both exist.
function segmentize(
  body: string,
  highlights: ReadonlyArray<ReadingHighlight>,
): Segment[] {
  if (highlights.length === 0) return [{ kind: "text", text: body }];
  const sorted = [...highlights].sort(
    (a, b) => b.word_or_phrase.length - a.word_or_phrase.length,
  );

  const segments: Segment[] = [{ kind: "text", text: body }];
  for (const h of sorted) {
    const phrase = h.word_or_phrase;
    if (!phrase) continue;
    const next: Segment[] = [];
    for (const seg of segments) {
      if (seg.kind !== "text") {
        next.push(seg);
        continue;
      }
      let rest = seg.text;
      // Case-insensitive matching but preserve original casing in the article.
      const lower = rest.toLowerCase();
      const lowerPhrase = phrase.toLowerCase();
      let cursor = 0;
      let matchIdx = lower.indexOf(lowerPhrase, cursor);
      while (matchIdx !== -1) {
        if (matchIdx > cursor) {
          next.push({ kind: "text", text: rest.slice(cursor, matchIdx) });
        }
        next.push({
          kind: "highlight",
          text: rest.slice(matchIdx, matchIdx + phrase.length),
          data: h,
        });
        cursor = matchIdx + phrase.length;
        matchIdx = lower.indexOf(lowerPhrase, cursor);
      }
      if (cursor < rest.length) {
        next.push({ kind: "text", text: rest.slice(cursor) });
      }
    }
    segments.splice(0, segments.length, ...next);
  }
  return segments;
}

export function ArticleReader({
  articleId,
  body,
  highlights,
  onAddedToSrs,
}: Props) {
  const [active, setActive] = useState<ReadingHighlight | null>(null);
  const [added, setAdded] = useState<Set<string>>(new Set());
  const fade = useRef(new Animated.Value(0)).current;

  const segments = useMemo(
    () => segmentize(body, highlights),
    [body, highlights],
  );

  useEffect(() => {
    if (active) {
      Animated.timing(fade, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }).start();
    } else {
      fade.setValue(0);
    }
  }, [active, fade]);

  const openHighlight = (h: ReadingHighlight) => {
    hapticSelection();
    setActive(h);
  };

  const close = () => setActive(null);

  const handleAdd = async () => {
    if (!active) return;
    await addVocabToSrs(articleId, active.word_or_phrase, active.translation_tr);
    setAdded((prev) => {
      const next = new Set(prev);
      next.add(active.word_or_phrase.toLowerCase());
      return next;
    });
    onAddedToSrs?.(active.word_or_phrase);
  };

  const activeAdded = active
    ? added.has(active.word_or_phrase.toLowerCase())
    : false;

  return (
    <View>
      <Text style={styles.body}>
        {segments.map((seg, i) =>
          seg.kind === "text" ? (
            <Text key={i}>{seg.text}</Text>
          ) : (
            <Text
              key={i}
              onPress={() => openHighlight(seg.data)}
              suppressHighlighting
              style={styles.highlight}
            >
              {seg.text}
            </Text>
          ),
        )}
      </Text>

      <Modal
        transparent
        visible={active !== null}
        animationType="fade"
        onRequestClose={close}
      >
        <Pressable style={styles.backdrop} onPress={close}>
          {active && (
            <Animated.View
              style={[styles.sheet, { opacity: fade }]}
              // Stop taps inside the sheet from closing it
              onStartShouldSetResponder={() => true}
            >
              <View style={styles.handle} />
              <View style={styles.wordRow}>
                <Text style={styles.word}>{active.word_or_phrase}</Text>
                <SpeakerButton text={active.word_or_phrase} size="md" />
              </View>
              <Text style={styles.translation}>{active.translation_tr}</Text>
              {active.note_tr ? (
                <Text style={styles.note}>{active.note_tr}</Text>
              ) : null}

              <View style={styles.actions}>
                <Pressable
                  style={[styles.actionBtn, styles.actionSecondary]}
                  onPress={() => speak(active.word_or_phrase)}
                >
                  <Text style={styles.actionSecondaryText}>Seslendir</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.actionBtn,
                    activeAdded ? styles.actionDisabled : styles.actionPrimary,
                  ]}
                  onPress={handleAdd}
                  disabled={activeAdded}
                >
                  <Text style={styles.actionPrimaryText}>
                    {activeAdded ? "Eklendi ✓" : "SRS'e ekle"}
                  </Text>
                </Pressable>
              </View>
            </Animated.View>
          )}
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontSize: 18,
    lineHeight: 30,
    color: tokens.text.primary,
    fontWeight: tokens.weight.regular,
  },
  highlight: {
    color: tokens.brand.tertiary,
    textDecorationLine: "underline",
    fontWeight: tokens.weight.semibold,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(26, 28, 28, 0.45)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.sm,
    paddingBottom: 28,
  },
  handle: {
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    alignSelf: "center",
    marginBottom: tokens.spacing.sm,
  },
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  word: {
    flex: 1,
    fontSize: 26,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  translation: {
    fontSize: 17,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.semibold,
    marginBottom: 4,
  },
  note: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginTop: 6,
    fontStyle: "italic",
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: tokens.spacing.md,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  actionPrimary: {
    backgroundColor: tokens.brand.primaryContainer,
  },
  actionPrimaryText: {
    color: tokens.text.onPrimary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 15,
    letterSpacing: 0.2,
  },
  actionSecondary: {
    backgroundColor: tokens.bg.surfaceContainer,
  },
  actionSecondaryText: {
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    fontSize: 15,
  },
  actionDisabled: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
});
