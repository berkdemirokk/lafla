// Lafla — MetricFlashChip
//
// Transient chip that flashes into view to give micro-feedback during a
// voice session ("Akıcı tempo", "Çok duraksıyorsun", ...). Self-dismisses
// after `duration` ms with a soft slide+fade. Designed to sit above the
// FluencyOverlay or be rendered inline; the component itself doesn't
// position absolutely — wrap it in a View if you need that.

import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { tokens } from "../theme";

export interface MetricFlashChipProps {
  label: string;
  icon?: string;
  duration?: number;
  onHidden?: () => void;
}

export function MetricFlashChip({
  label,
  icon,
  duration = 2200,
  onHidden,
}: MetricFlashChipProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(6);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 180,
      easing: Easing.out(Easing.quad),
    });
    translateY.value = withTiming(0, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
    });

    const hideDelay = Math.max(0, duration - 280);
    opacity.value = withDelay(
      hideDelay,
      withTiming(
        0,
        { duration: 280, easing: Easing.in(Easing.quad) },
        (finished) => {
          if (finished && onHidden) runOnJS(onHidden)();
        },
      ),
    );
    translateY.value = withDelay(
      hideDelay,
      withTiming(-4, { duration: 280, easing: Easing.in(Easing.quad) }),
    );
  }, [duration, onHidden, opacity, translateY]);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[styles.chip, animStyle]}>
      {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      <View style={styles.accent} />
    </Animated.View>
  );
}

export default MetricFlashChip;

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "rgba(0,0,0,0.78)",
    borderRadius: tokens.radius.full,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 6,
    overflow: "hidden",
  },
  icon: {
    fontSize: 12,
    color: "#f0f1f1",
  },
  label: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: "#f0f1f1",
    letterSpacing: 0.2,
  },
  accent: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: tokens.brand.tertiary,
    marginLeft: 2,
  },
});
