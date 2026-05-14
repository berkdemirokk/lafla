// SttUnavailableNotice — inline banner shown above speech features when
// expo-speech-recognition can't be used on this device.
//
// Drop this above any mic-based exercise UI as a heads-up: it explains
// (in adult Turkish) *why* speech is unavailable and offers a single
// clear action — "Yazarak pratik et" — that switches the caller into
// the typing flow.
//
// Design intent: this is an *informational* affordance, not a blocking
// alert. It's dismissable so power users can collapse it once they've
// internalized the message, but it stays available to be re-summoned
// by the screen if needed (e.g. after a reset).
//
// Style follows the Cyber-Electric token system; the banner uses a
// soft yellow surface (primarySoft) so it reads as "heads up, not
// error" — error red is reserved for actual breakage.

import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import {
  getFallbackPromptTr,
  type STTCapability,
} from "../lib/stt-fallback";

interface Props {
  capability: STTCapability;
  /** Invoked when the user taps "Yazarak pratik et". */
  onSwitchToTyping: () => void;
  /** Optional — show a dismiss "X" button. Defaults to true. */
  dismissable?: boolean;
  /** Called when the user dismisses the banner. */
  onDismiss?: () => void;
  /** Hint copy override — defaults to getFallbackPromptTr(capability). */
  messageOverride?: string;
}

export function SttUnavailableNotice({
  capability,
  onSwitchToTyping,
  dismissable = true,
  onDismiss,
  messageOverride,
}: Props) {
  const [dismissed, setDismissed] = useState(false);

  // Don't render when speech is actually fine — defensive against the
  // caller forgetting to gate on cap.available.
  if (capability.available) return null;
  if (dismissed) return null;

  const message = messageOverride ?? getFallbackPromptTr(capability);

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  return (
    <View
      style={styles.container}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
    >
      <View style={styles.row}>
        <View style={styles.iconCol}>
          <Text style={styles.icon}>i</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.title}>Sesli pratik kullanılamıyor</Text>
          <Text style={styles.body}>{message}</Text>
          <Pressable
            onPress={onSwitchToTyping}
            style={({ pressed }) => [
              styles.cta,
              pressed && styles.ctaPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Yazarak pratik et"
          >
            <Text style={styles.ctaText}>Yazarak pratik et</Text>
          </Pressable>
        </View>
        {dismissable ? (
          <Pressable
            onPress={handleDismiss}
            style={({ pressed }) => [
              styles.dismiss,
              pressed && styles.dismissPressed,
            ]}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Kapat"
          >
            <Text style={styles.dismissText}>×</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.brand.primarySoft,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.brand.primaryFixedDim,
    padding: tokens.spacing.sm,
    marginVertical: tokens.spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: tokens.spacing.sm,
  },
  iconCol: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  icon: {
    fontSize: 16,
    fontWeight: tokens.weight.black,
    color: tokens.text.onPrimary,
    lineHeight: 18,
  },
  textCol: {
    flex: 1,
    gap: tokens.spacing.xs,
  },
  title: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: 0.2,
  },
  body: {
    fontSize: 13,
    color: tokens.text.onSurfaceVariant,
    lineHeight: 18,
  },
  cta: {
    alignSelf: "flex-start",
    marginTop: tokens.spacing.xs,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.secondary,
  },
  ctaPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  ctaText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.onSecondary,
    letterSpacing: 0.2,
  },
  dismiss: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  dismissPressed: {
    opacity: 0.5,
  },
  dismissText: {
    fontSize: 22,
    color: tokens.text.secondary,
    lineHeight: 24,
    fontWeight: tokens.weight.medium,
  },
});
