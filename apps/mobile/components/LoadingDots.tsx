// Lafla design system — LoadingDots.
// Three dots fading in sequence (200ms stagger). Used for "AI is thinking…"
// and short async signals. Pure RN Animated.

import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { tokens } from "../theme";

interface Props {
  color?: string;
  size?: number;
}

const DOT_COUNT = 3;
const STAGGER_MS = 200;
const FADE_MS = 400;

export function LoadingDots({
  color = tokens.text.secondary,
  size = 8,
}: Props) {
  // One animated value per dot, started at low opacity.
  const opacities = useRef(
    Array.from({ length: DOT_COUNT }, () => new Animated.Value(0.3)),
  ).current;

  useEffect(() => {
    const animations = opacities.map((opacity, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * STAGGER_MS),
          Animated.timing(opacity, {
            toValue: 1,
            duration: FADE_MS,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: FADE_MS,
            useNativeDriver: true,
          }),
          // Pad so total loop length is consistent regardless of dot index.
          Animated.delay((DOT_COUNT - 1 - i) * STAGGER_MS),
        ]),
      ),
    );
    animations.forEach((a) => a.start());
    return () => animations.forEach((a) => a.stop());
  }, [opacities]);

  return (
    <View style={styles.row}>
      {opacities.map((opacity, i) => (
        <Animated.View
          key={i}
          style={[
            styles.dot,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: color,
              opacity,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    // size and color applied inline.
  },
});
