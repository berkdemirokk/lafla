// Lafla — Bildirim opt-in (onboarding'in son, atlanabilir adımı).
//
// 2026-11-16 — İlk pratik (intro sahne) bittikten sonra bir kez gösterilir
// (bkz. lib/notify-opt-in.ts → routeAfterOnboarding). Değeri anlatır,
// hatırlatma saatini seçtirir; "Hatırlat" sistem izin penceresini tetikler
// (enableDailyReminder). "Şimdi değil" → bir daha sorulmaz. İzin reddedilirse
// sessizce /today'e geçilir — darlama yok, Ayarlar'a yönlendirme yok.

import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../components/Button";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { hapticSelection, hapticSuccess } from "../lib/feedback";
import { useTranslation } from "../lib/i18n";
import {
  DEFAULT_NOTIFY_OPT_IN_HOUR,
  NOTIFY_OPT_IN_HOURS,
  acceptNotifyOptIn,
  formatReminderHour,
  skipNotifyOptIn,
  type NotifyOptInHour,
} from "../lib/notify-opt-in";
import { replaceRoute } from "../lib/routes";
import { tokens } from "../theme";

const PERIOD_KEY: Record<NotifyOptInHour, string> = {
  9: "notifyOptIn.time_morning",
  13: "notifyOptIn.time_noon",
  20: "notifyOptIn.time_evening",
};

export default function NotifyOptInScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [hour, setHour] = useState<NotifyOptInHour>(DEFAULT_NOTIFY_OPT_IN_HOUR);
  const [busy, setBusy] = useState(false);

  const finish = () => replaceRoute(router, "/today");

  const handleEnable = async () => {
    if (busy) return;
    setBusy(true);
    const enabled = await acceptNotifyOptIn(hour).catch(() => false);
    if (enabled) hapticSuccess();
    // Reddedildiyse de devam: tekrar sormuyoruz.
    finish();
  };

  const handleSkip = async () => {
    if (busy) return;
    hapticSelection();
    setBusy(true);
    await skipNotifyOptIn().catch(() => {});
    finish();
  };

  return (
    <SafeAreaView
      style={styles.safe}
      edges={["top", "bottom"]}
      testID="notify-opt-in-screen"
    >
      <ThemedStatusBar />
      <ScrollView
        contentContainerStyle={styles.content}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.bellWrap} importantForAccessibility="no-hide-descendants">
          <Text style={styles.bell} accessibilityElementsHidden>
            🔔
          </Text>
        </View>
        <Text style={styles.eyebrow}>{t("notifyOptIn.eyebrow")}</Text>
        <Text style={styles.title} accessibilityRole="header">
          {t("notifyOptIn.title")}
        </Text>
        <Text style={styles.body}>{t("notifyOptIn.body")}</Text>

        <Text style={styles.timeLabel}>{t("notifyOptIn.time_label")}</Text>
        <View style={styles.timeRow} accessibilityRole="radiogroup">
          {NOTIFY_OPT_IN_HOURS.map((h) => {
            const selected = h === hour;
            const time = formatReminderHour(h);
            const period = t(PERIOD_KEY[h]);
            return (
              <Pressable
                key={h}
                onPress={() => {
                  if (busy) return;
                  hapticSelection();
                  setHour(h);
                }}
                style={[styles.timeChip, selected && styles.timeChipSelected]}
                accessibilityRole="radio"
                accessibilityLabel={t("notifyOptIn.time_option_label", {
                  period,
                  time,
                })}
                accessibilityState={{ selected, checked: selected, disabled: busy }}
                hitSlop={4}
              >
                <Text
                  style={[
                    styles.timeChipPeriod,
                    selected && styles.timeChipTextSelected,
                  ]}
                >
                  {period}
                </Text>
                <Text
                  style={[
                    styles.timeChipTime,
                    selected && styles.timeChipTextSelected,
                  ]}
                >
                  {time}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={`${t("notifyOptIn.cta")} · ${formatReminderHour(hour)}`}
          onPress={() => void handleEnable()}
          loading={busy}
          disabled={busy}
          stacked
          testID="notify-opt-in-enable"
        />
        <Button
          label={t("notifyOptIn.skip")}
          variant="ghost"
          onPress={() => void handleSkip()}
          disabled={busy}
          testID="notify-opt-in-skip"
        />
        <Text style={styles.footnote}>{t("notifyOptIn.footnote")}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.md,
  },
  bellWrap: {
    width: 72,
    height: 72,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: tokens.spacing.md,
  },
  bell: { fontSize: 34 },
  eyebrow: {
    fontFamily: tokens.font.sansBold,
    fontSize: 12,
    letterSpacing: 1.4,
    color: tokens.text.secondary,
    marginBottom: tokens.spacing.base,
  },
  title: {
    fontFamily: tokens.font.display,
    fontSize: 30,
    lineHeight: 36,
    color: tokens.text.primary,
    marginBottom: tokens.spacing.sm,
  },
  body: {
    fontFamily: tokens.font.sansRegular,
    fontSize: 16,
    lineHeight: 24,
    color: tokens.text.secondary,
    marginBottom: tokens.spacing.md,
  },
  timeLabel: {
    fontFamily: tokens.font.sansSemi,
    fontSize: 15,
    color: tokens.text.primary,
    marginBottom: tokens.spacing.sm,
  },
  timeRow: {
    flexDirection: "row",
    gap: tokens.spacing.base,
  },
  timeChip: {
    flex: 1,
    minHeight: 64,
    paddingVertical: tokens.spacing.sm,
    borderRadius: tokens.radius.base,
    borderWidth: 1.5,
    borderColor: tokens.border.outlineVariant,
    backgroundColor: tokens.bg.surfaceContainerLow,
    alignItems: "center",
    justifyContent: "center",
  },
  timeChipSelected: {
    borderColor: tokens.brand.primaryContainer,
    backgroundColor: tokens.brand.primaryContainer,
  },
  timeChipPeriod: {
    fontFamily: tokens.font.sans,
    fontSize: 13,
    color: tokens.text.secondary,
  },
  timeChipTime: {
    fontFamily: tokens.font.displaySemi,
    fontSize: 18,
    color: tokens.text.primary,
    marginTop: 2,
  },
  timeChipTextSelected: {
    color: tokens.text.onPrimary,
  },
  footer: {
    paddingHorizontal: tokens.spacing.md,
    paddingBottom: tokens.spacing.sm,
    gap: tokens.spacing.base,
  },
  footnote: {
    fontFamily: tokens.font.sansRegular,
    fontSize: 12,
    lineHeight: 17,
    color: tokens.text.tertiary,
    textAlign: "center",
  },
});
