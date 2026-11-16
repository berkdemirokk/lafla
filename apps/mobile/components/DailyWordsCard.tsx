// Today screen entry point for the daily 10 words.

import { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";

import { Icon } from "./Icon";
import { tokens } from "../theme";
import { useTranslation } from "../lib/i18n";
import { pushRoute } from "../lib/routes";
import {
  DAILY_WORD_COUNT,
  getTodayWords,
  syncDailyWordsNudge,
} from "../lib/daily-words";

interface CardState {
  ready: boolean;
  completed: boolean;
  preview: string[];
  count: number;
}

export function DailyWordsCard() {
  const router = useRouter();
  const { t } = useTranslation();
  const [state, setState] = useState<CardState>({
    ready: false,
    completed: false,
    preview: [],
    count: DAILY_WORD_COUNT,
  });

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      void (async () => {
        try {
          const today = await getTodayWords();
          if (cancelled) return;
          setState({
            ready: true,
            completed: today.completed,
            preview: today.words.slice(0, 3).map((w) => w.word),
            count: today.words.length,
          });
          void syncDailyWordsNudge(today.completed).catch(() => {});
        } catch {
          if (!cancelled) setState((s) => ({ ...s, ready: true }));
        }
      })();
      return () => {
        cancelled = true;
      };
    }, []),
  );

  if (!state.ready || state.count === 0) return null;

  return (
    <Pressable
      onPress={() => pushRoute(router, "/daily-words")}
      style={({ pressed }) => [
        styles.card,
        state.completed && styles.cardDone,
        pressed && styles.pressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={
        state.completed
          ? t("dailyWords.card_done_label")
          : t("dailyWords.card_label", { count: String(state.count) })
      }
    >
      <View style={styles.iconWrap}>
        <Icon
          name={state.completed ? "checkmark" : "vocab"}
          size={22}
          color={state.completed ? tokens.brand.tertiary : tokens.brand.primary}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.eyebrow}>
          {t("dailyWords.card_eyebrow", { count: String(state.count) })}
        </Text>
        <Text style={styles.title}>
          {state.completed ? t("dailyWords.card_done_title") : t("dailyWords.card_title")}
        </Text>
        <Text style={styles.sub} numberOfLines={1}>
          {state.completed
            ? t("dailyWords.card_done_sub")
            : `${state.preview.join(" · ")} …`}
        </Text>
      </View>
      <Icon name="chevronRight" size={20} color={tokens.text.tertiary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
  },
  cardDone: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.bg.surfaceContainer,
  },
  text: { flex: 1, gap: 2 },
  eyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
  },
  sub: {
    fontSize: 13,
    color: tokens.text.secondary,
  },
  pressed: { opacity: 0.86, transform: [{ scale: 0.98 }] },
});
