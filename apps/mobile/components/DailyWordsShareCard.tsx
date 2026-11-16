// Daily words share card + "Paylaş" button.
//
// The card is rendered off-screen (mounted but invisible) so view-shot can
// capture real pixels, then shared as a PNG via expo-sharing. If capture or
// expo-sharing fails / is unavailable, we fall back to RN Share with a plain
// text message that still carries the App Store link. Never throws.
//
// Note: components/ShareCard.tsx is the scenario-verdict card; this one is
// specific to the daily 10 words "done" screen.

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Platform, Share, StyleSheet, Text, View } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";

import { Button } from "./Button";
import { tokens } from "../theme";
import { useTranslation } from "../lib/i18n";
import { trackEvent } from "../lib/analytics";
import { getLocalProfile } from "../lib/local-progress";
import {
  buildShareCardModel,
  buildShareText,
  type DailyWordsShareModel,
  type ShareWord,
} from "../lib/daily-words-share";

// ─── Card (capture target) ──────────────────────────────────────────────

interface CardProps {
  model: DailyWordsShareModel;
  wordsTitle: string;
}

export const DailyWordsShareCard = forwardRef<View, CardProps>(function DailyWordsShareCard(
  { model, wordsTitle },
  ref,
) {
  return (
    <View
      ref={ref}
      style={styles.card}
      collapsable={false}
      accessible
      accessibilityRole="image"
      accessibilityLabel={model.accessibilityLabel}
    >
      <View style={styles.topBar}>
        <Text style={styles.wordmark}>Lafla</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.headline}>{model.headline}</Text>
        <Text style={styles.score}>{model.score}</Text>
        {model.streak ? (
          <View style={styles.streakPill}>
            <Text style={styles.streakText}>{model.streak}</Text>
          </View>
        ) : null}
      </View>

      {model.words.length > 0 ? (
        <View style={styles.wordsBox}>
          <Text style={styles.wordsTitle}>{wordsTitle}</Text>
          {model.words.map((w) => (
            <View key={w.word} style={styles.wordRow}>
              <Text style={styles.wordEn} numberOfLines={1}>
                {w.word}
              </Text>
              <Text style={styles.wordTr} numberOfLines={1}>
                {w.translation}
              </Text>
            </View>
          ))}
        </View>
      ) : null}

      <View style={styles.footer}>
        <Text style={styles.cta}>{model.cta}</Text>
        <Text style={styles.url} numberOfLines={1}>
          {model.url.replace(/^https:\/\//, "")}
        </Text>
      </View>
    </View>
  );
});

// ─── Button + share flow ────────────────────────────────────────────────

interface ButtonProps {
  correct: number;
  total: number;
  words: ReadonlyArray<ShareWord>;
}

type ShareMethod = "image" | "text" | "failed";

export function DailyWordsShareButton({ correct, total, words }: ButtonProps) {
  const { t } = useTranslation();
  const cardRef = useRef<View>(null);
  const [streak, setStreak] = useState(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    getLocalProfile()
      .then((p) => {
        if (alive) setStreak(p.current_streak ?? 0);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const input = { correct, total, streak, words };
  const model = buildShareCardModel(input, t);

  const onShare = useCallback(async () => {
    if (busy) return;
    setBusy(true);
    const message = buildShareText({ correct, total, streak, words }, t);
    let method: ShareMethod = "image";
    try {
      const node = cardRef.current;
      if (!node) throw new Error("share card not mounted");
      const uri = await captureRef(node, { format: "png", quality: 1, result: "tmpfile" });
      if (!(await Sharing.isAvailableAsync())) throw new Error("sharing unavailable");
      await Sharing.shareAsync(uri, {
        dialogTitle: t("shareCard.dialog_title"),
        mimeType: "image/png",
        UTI: "public.png",
      });
    } catch {
      method = "text";
      try {
        // The link is already inside `message`; passing `url` too would
        // duplicate it on iOS.
        await Share.share({ message }, { dialogTitle: t("shareCard.dialog_title") });
      } catch {
        method = "failed";
      }
    } finally {
      setBusy(false);
    }
    void trackEvent("daily_words_shared", { method, correct, total, streak }).catch(() => {});
  }, [busy, correct, total, streak, words, t]);

  return (
    <>
      <View style={styles.buttonWrap}>
        <Button
          label={t("shareCard.button")}
          onPress={() => void onShare()}
          variant="secondary"
          loading={busy}
          testID="daily-words-share"
        />
      </View>
      {/* Off-screen capture target. Hidden from screen readers; the shared
          image carries its own accessibilityLabel for completeness. */}
      <View
        style={styles.hidden}
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        <DailyWordsShareCard ref={cardRef} model={model} wordsTitle={t("shareCard.words_title")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonWrap: { alignSelf: "stretch", marginTop: 12 },
  // Same off-screen trick as StreakMilestoneModal: iOS needs opacity 1 to
  // capture pixels, Android needs it in-bounds (so it is made transparent).
  hidden: {
    position: "absolute",
    top: Platform.OS === "ios" ? -3000 : 0,
    left: Platform.OS === "ios" ? -3000 : 0,
    opacity: Platform.OS === "ios" ? 1 : 0,
  },
  card: {
    width: 270,
    height: 480, // 9:16 story ratio
    backgroundColor: tokens.bg.app,
    borderRadius: 18,
    padding: 20,
    justifyContent: "space-between",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: tokens.brand.primary,
  },
  topBar: { alignItems: "center" },
  wordmark: {
    fontSize: 30,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -1.2,
    fontFamily: tokens.font.display,
  },
  hero: { alignItems: "center", gap: 6 },
  headline: {
    fontSize: 18,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    lineHeight: 23,
    fontFamily: tokens.font.display,
  },
  score: {
    fontSize: 26,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    fontFamily: tokens.font.display,
  },
  streakPill: {
    marginTop: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    borderWidth: 1.5,
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  streakText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },
  wordsBox: {
    gap: 6,
    padding: 12,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  wordsTitle: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
    textAlign: "center",
  },
  wordRow: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
  wordEn: {
    flexShrink: 0,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  wordTr: {
    flexShrink: 1,
    fontSize: 13,
    color: tokens.text.secondary,
    textAlign: "right",
  },
  footer: { alignItems: "center", gap: 2 },
  cta: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    textAlign: "center",
  },
  url: {
    fontSize: 10,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },
});
