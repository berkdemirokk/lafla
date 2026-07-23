import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

import { useTranslation } from "../lib/i18n";
import { tokens } from "../theme";

export type AsyncScreenStatus = "loading" | "ready" | "error";

export function AsyncScreenState({
  status,
  onRetry,
}: {
  status: Exclude<AsyncScreenStatus, "ready">;
  onRetry: () => void;
}) {
  const { t } = useTranslation();

  if (status === "loading") {
    return (
      <View style={styles.wrap} accessibilityLiveRegion="polite">
        <ActivityIndicator size="large" color={tokens.brand.primary} />
        <Text style={styles.body}>{t("common.loading")}</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrap} accessibilityLiveRegion="assertive">
      <Text style={styles.title}>{t("common.load_error_title")}</Text>
      <Text style={styles.body}>{t("common.load_error_body")}</Text>
      <Pressable
        onPress={onRetry}
        accessibilityRole="button"
        accessibilityLabel={t("common.try_again")}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>{t("common.try_again")}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 12,
  },
  title: {
    color: tokens.text.primary,
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    textAlign: "center",
  },
  body: {
    color: tokens.text.secondary,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  button: {
    minHeight: 44,
    paddingHorizontal: 22,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: { opacity: 0.82 },
  buttonText: {
    color: tokens.text.onPrimary,
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
  },
});
