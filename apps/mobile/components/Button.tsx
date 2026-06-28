// Lafla design system — pill button (Stitch Cool)
// Primary: neon yellow bg + near-black text, fully rounded pill.
// Optional "stacked" 3D shadow effect for hero CTAs.

import { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { tokens } from "../theme";

interface Props {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  loading?: boolean;
  /** Adds a "stacked" 3D shadow effect — for hero CTAs (lesson complete, BAŞLA). */
  stacked?: boolean;
}

export function Button({
  label,
  onPress,
  variant = "primary",
  disabled,
  loading,
  stacked,
}: Props) {
  const [pressed, setPressed] = useState(false);
  const isPrimary = variant === "primary";
  const isGhost = variant === "ghost";

  return (
    <View style={[stacked && styles.stackedWrap]}>
      {/* Stacked shadow layer */}
      {stacked && (
        <View
          style={[
            styles.stackedShadow,
            pressed && styles.stackedShadowPressed,
          ]}
        />
      )}

      <Pressable
        style={[
          styles.btn,
          isPrimary && styles.btnPrimary,
          variant === "secondary" && styles.btnSecondary,
          isGhost && styles.btnGhost,
          pressed && stacked && styles.btnPressedStacked,
          pressed && !stacked && styles.btnPressedFlat,
          disabled && styles.btnDisabled,
        ]}
        onPress={onPress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        disabled={disabled || loading}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{
          disabled: Boolean(disabled || loading),
          busy: Boolean(loading),
        }}
      >
        {loading ? (
          <ActivityIndicator
            color={isPrimary ? tokens.text.onPrimary : tokens.text.primary}
            accessibilityElementsHidden
            importantForAccessibility="no"
          />
        ) : (
          <Text
            style={[
              styles.label,
              isPrimary && styles.labelPrimary,
              variant === "secondary" && styles.labelSecondary,
              isGhost && styles.labelGhost,
            ]}
          >
            {label}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  stackedWrap: {
    position: "relative",
  },
  stackedShadow: {
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    bottom: -6,
    backgroundColor: tokens.brand.primaryFixedDim,
    borderRadius: tokens.radius.full,
  },
  stackedShadowPressed: {
    top: 0,
    bottom: 0,
  },
  btn: {
    minHeight: 48,
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPrimary: {
    backgroundColor: tokens.brand.primaryContainer,
  },
  btnSecondary: {
    backgroundColor: tokens.bg.surfaceContainer,
  },
  btnGhost: {
    backgroundColor: "transparent",
  },
  btnPressedFlat: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  btnPressedStacked: {
    transform: [{ translateY: 6 }],
  },
  btnDisabled: {
    opacity: 0.4,
  },
  label: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.3,
  },
  labelPrimary: {
    color: tokens.text.onPrimary,
  },
  labelSecondary: {
    color: tokens.text.primary,
  },
  labelGhost: {
    color: tokens.text.secondary,
  },
});
