// Progress dots — Cyber-Electric: yellow done, BLUE glowing active, gray pending.

import { View, StyleSheet } from "react-native";
import { tokens } from "../theme";

interface Props {
  total: number;
  currentIndex: number;
}

export function ProgressDots({ total, currentIndex }: Props) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, i) => {
        const state =
          i < currentIndex ? "done" : i === currentIndex ? "active" : "pending";
        return (
          <View
            key={i}
            style={[
              styles.dot,
              state === "done" && styles.dotDone,
              state === "active" && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
  },
  dot: {
    flex: 1,
    height: 8,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: 4,
  },
  dotDone: {
    backgroundColor: tokens.brand.primary, // yellow = completed
  },
  dotActive: {
    backgroundColor: tokens.brand.tertiary, // BLUE = current focus
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 4,
  },
});
