// Lafla design system — primary button
// Two variants: primary (orange CTA) and secondary (subtle, on-card)

import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { tokens } from "../theme";

interface Props {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  label,
  onPress,
  variant = "primary",
  disabled,
  loading,
}: Props) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        isPrimary ? styles.btnPrimary : styles.btnSecondary,
        pressed && !disabled && styles.btnPressed,
        disabled && styles.btnDisabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? "white" : tokens.text.primary} />
      ) : (
        <Text style={[styles.label, !isPrimary && styles.labelSecondary]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.button,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPrimary: {
    backgroundColor: tokens.brand.accent,
  },
  btnSecondary: {
    backgroundColor: tokens.bg.card,
  },
  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  btnDisabled: {
    opacity: 0.4,
  },
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.3,
  },
  labelSecondary: {
    color: tokens.text.primary,
  },
});
