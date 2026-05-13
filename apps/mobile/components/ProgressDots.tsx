// Progress indicator at top of lesson screen — one dot per exercise.

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
    gap: 5,
    marginBottom: 28,
  },
  dot: {
    flex: 1,
    height: 4,
    backgroundColor: tokens.border.default,
    borderRadius: 2,
  },
  dotDone: {
    backgroundColor: tokens.semantic.success,
  },
  dotActive: {
    backgroundColor: tokens.brand.accent,
  },
});
