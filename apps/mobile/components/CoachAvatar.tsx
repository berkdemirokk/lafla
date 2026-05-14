// Lafla — CoachAvatar.
//
// The animated portrait for Maya, the persistent AI coach. Lightweight by
// design: pure React Native + react-native-reanimated, no image assets
// required. A circular gradient-feel surface with either an Image fallback
// or a single-letter monogram inside, plus per-state animations layered on
// top:
//
//   idle       — almost-imperceptible breathing scale (1.00 → 1.02 → 1.00).
//   listening  — soft pulsing ring around the circle (the "mic is hot" cue).
//   thinking   — a translucent glow halo slowly rotates 360°.
//   speaking   — a 4-bar VoiceWaveform sits below the circle; the circle
//                itself rocks subtly to suggest mouth movement.
//   error      — amber tint + small "!" badge in the lower-right.
//
// We deliberately keep every animation driven by a SINGLE `useSharedValue`
// per visual axis. This keeps the worklet count low and the render path
// predictable — important on mid-range Android devices where Maya may be
// on screen for the entire chat session.
//
// Animations are cancelled on unmount via `cancelAnimation` to avoid the
// classic Reanimated "shared value still ticking after the screen left the
// stack" leak.
//
// Visual style: matches the Cyber-Electric tokens (yellow primary, near-
// black text/onPrimary). The portrait reads as confident and adult — not
// cartoonish — so it sits well in a coaching app for working adults.

import { useEffect, useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { tokens } from "../theme";
import { VoiceWaveform } from "./VoiceWaveform";

export type CoachAvatarState =
  | "idle"
  | "listening"
  | "thinking"
  | "speaking"
  | "error";

export interface CoachAvatarProps {
  state: CoachAvatarState;
  /** Diameter in px. Default 120. */
  size?: number;
  /**
   * Coach display name. Only the first character is shown (uppercased) when
   * `imageSource` is not provided. Defaults to "Maya".
   */
  name?: string;
  /** Optional bitmap; if provided, shown instead of the monogram. */
  imageSource?: ImageSourcePropType;
  /** Visual variant. `muted` uses a darker background — for inline use. */
  variant?: "primary" | "muted";
  /** Optional style passthrough for outer wrapper (margins etc.). */
  style?: StyleProp<ViewStyle>;
}

const BREATH_MS = 3000;
const LISTEN_PULSE_MS = 1100;
const ROTATION_MS = 4500;
const SPEAK_ROCK_MS = 220;

export function CoachAvatar({
  state,
  size = 120,
  name = "Maya",
  imageSource,
  variant = "primary",
  style,
}: CoachAvatarProps) {
  // Single shared value per visual axis. We re-target them in `useEffect`
  // whenever `state` changes; no per-state shared values means the worklet
  // graph stays small.
  const scale = useSharedValue(1);
  const ringScale = useSharedValue(1);
  const ringOpacity = useSharedValue(0);
  const haloRotate = useSharedValue(0);
  const haloOpacity = useSharedValue(0);
  const rockRotate = useSharedValue(0);

  useEffect(() => {
    // Always stop in-flight animations before targeting new ones — otherwise
    // a rapid state flip (e.g. listening → speaking → listening) can leave
    // values mid-flight and produce jittery transitions.
    cancelAnimation(scale);
    cancelAnimation(ringScale);
    cancelAnimation(ringOpacity);
    cancelAnimation(haloRotate);
    cancelAnimation(haloOpacity);
    cancelAnimation(rockRotate);

    // Reset to neutral. State-specific blocks below override what they need.
    scale.value = withTiming(1, { duration: 200 });
    ringOpacity.value = withTiming(0, { duration: 200 });
    haloOpacity.value = withTiming(0, { duration: 200 });
    rockRotate.value = withTiming(0, { duration: 200 });

    switch (state) {
      case "idle":
        // Quiet breathing — almost imperceptible. Tighter range than you'd
        // think (2%) keeps it from looking like a heartbeat icon.
        scale.value = withRepeat(
          withTiming(1.02, {
            duration: BREATH_MS,
            easing: Easing.inOut(Easing.sin),
          }),
          -1,
          true,
        );
        break;
      case "listening":
        // Pulsing ring: scales out and fades while a fresh ring scales in
        // behind it. We use a single ring + repeat for simplicity; the eye
        // reads it as a continuous pulse.
        ringScale.value = 1;
        ringOpacity.value = 0.7;
        ringScale.value = withRepeat(
          withTiming(1.35, {
            duration: LISTEN_PULSE_MS,
            easing: Easing.out(Easing.quad),
          }),
          -1,
          false,
        );
        ringOpacity.value = withRepeat(
          withTiming(0, {
            duration: LISTEN_PULSE_MS,
            easing: Easing.out(Easing.quad),
          }),
          -1,
          false,
        );
        // Also gentle breathing so the circle doesn't feel frozen.
        scale.value = withRepeat(
          withTiming(1.015, {
            duration: BREATH_MS * 0.7,
            easing: Easing.inOut(Easing.sin),
          }),
          -1,
          true,
        );
        break;
      case "thinking":
        // Slow halo spin + faint shimmer. The halo opacity sits low (≈0.4)
        // so it never competes with the chat text.
        haloOpacity.value = withTiming(0.5, { duration: 300 });
        haloRotate.value = withRepeat(
          withTiming(360, {
            duration: ROTATION_MS,
            easing: Easing.linear,
          }),
          -1,
          false,
        );
        // Slight breathing keeps the face from feeling dead.
        scale.value = withRepeat(
          withTiming(1.012, {
            duration: BREATH_MS,
            easing: Easing.inOut(Easing.sin),
          }),
          -1,
          true,
        );
        break;
      case "speaking":
        // Subtle "mouth-movement" rock: a few degrees of rotation back and
        // forth, fast enough to read as syllables. The actual waveform bars
        // are rendered below (see render).
        rockRotate.value = withRepeat(
          withSequence(
            withTiming(-1.2, {
              duration: SPEAK_ROCK_MS,
              easing: Easing.inOut(Easing.quad),
            }),
            withTiming(1.2, {
              duration: SPEAK_ROCK_MS,
              easing: Easing.inOut(Easing.quad),
            }),
          ),
          -1,
          true,
        );
        scale.value = withRepeat(
          withTiming(1.025, {
            duration: 350,
            easing: Easing.inOut(Easing.sin),
          }),
          -1,
          true,
        );
        break;
      case "error":
        // Hold still. The tint + badge carry the message; an animation here
        // would read as "still trying" instead of "stuck".
        scale.value = withTiming(1, { duration: 200 });
        break;
    }

    return () => {
      cancelAnimation(scale);
      cancelAnimation(ringScale);
      cancelAnimation(ringOpacity);
      cancelAnimation(haloRotate);
      cancelAnimation(haloOpacity);
      cancelAnimation(rockRotate);
    };
  }, [
    state,
    scale,
    ringScale,
    ringOpacity,
    haloRotate,
    haloOpacity,
    rockRotate,
  ]);

  // ---- animated styles ----
  const circleStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotateZ: `${rockRotate.value}deg` },
    ],
  }));
  const ringStyle = useAnimatedStyle(() => ({
    opacity: ringOpacity.value,
    transform: [{ scale: ringScale.value }],
  }));
  const haloStyle = useAnimatedStyle(() => ({
    opacity: haloOpacity.value,
    transform: [{ rotateZ: `${haloRotate.value}deg` }],
  }));

  // ---- derived layout ----
  const initial = useMemo(() => {
    const trimmed = name.trim();
    return (trimmed[0] ?? "M").toUpperCase();
  }, [name]);

  const isError = state === "error";
  const isSpeaking = state === "speaking";
  const isThinking = state === "thinking";
  const isListening = state === "listening";

  // The ring/halo overflow the circle, so the total layout needs headroom.
  // We give the outer wrapper a fixed footprint = size * 1.5 to leave room
  // for the pulsing listening ring without clipping. For speaking, we add
  // a waveform row below.
  const halo = size * 1.25;
  const ring = size * 1.15;

  const bgColor =
    variant === "muted" ? tokens.bg.surfaceContainerHigh : tokens.brand.primary;
  const textColor =
    variant === "muted" ? tokens.text.primary : tokens.brand.onPrimary;
  const borderColor = isError
    ? "#ff9f1c" // amber
    : variant === "muted"
      ? tokens.border.light
      : tokens.brand.primaryFixed;

  return (
    <View style={[styles.wrapper, style]}>
      <View
        style={[
          styles.stack,
          { width: size * 1.5, height: size * 1.5 },
        ]}
        accessibilityRole="image"
        accessibilityLabel={`${name} (${stateLabel(state)})`}
      >
        {/* Thinking halo — translucent rotating ring behind the circle. */}
        {isThinking && (
          <Animated.View
            style={[
              styles.halo,
              {
                width: halo,
                height: halo,
                borderRadius: halo / 2,
                borderColor: tokens.brand.primary,
              },
              haloStyle,
            ]}
            pointerEvents="none"
          />
        )}

        {/* Listening pulse ring — fades+scales out from the circle edge. */}
        {isListening && (
          <Animated.View
            style={[
              styles.ring,
              {
                width: ring,
                height: ring,
                borderRadius: ring / 2,
                borderColor: tokens.brand.primary,
              },
              ringStyle,
            ]}
            pointerEvents="none"
          />
        )}

        {/* The portrait circle. */}
        <Animated.View
          style={[
            styles.circle,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: bgColor,
              borderColor,
              borderWidth: isError ? 2 : 1,
            },
            circleStyle,
          ]}
        >
          {imageSource ? (
            <Image
              source={imageSource}
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
              }}
              resizeMode="cover"
            />
          ) : (
            <Text
              style={[
                styles.initial,
                { color: textColor, fontSize: size * 0.42 },
              ]}
              allowFontScaling={false}
            >
              {initial}
            </Text>
          )}

          {/* Tiny gloss highlight to add depth without an image. Sits in the
              upper-left of the circle. */}
          <View
            pointerEvents="none"
            style={[
              styles.gloss,
              {
                width: size * 0.4,
                height: size * 0.4,
                borderRadius: size * 0.2,
                top: size * 0.08,
                left: size * 0.12,
                opacity: variant === "muted" ? 0.3 : 0.18,
              },
            ]}
          />

          {/* Error badge — small amber circle with "!" in the corner. */}
          {isError && (
            <View
              style={[
                styles.errorBadge,
                {
                  width: size * 0.28,
                  height: size * 0.28,
                  borderRadius: size * 0.14,
                  right: -size * 0.04,
                  bottom: -size * 0.04,
                },
              ]}
            >
              <Text
                style={[
                  styles.errorBadgeText,
                  { fontSize: size * 0.16 },
                ]}
                allowFontScaling={false}
              >
                !
              </Text>
            </View>
          )}
        </Animated.View>
      </View>

      {/* Speaking waveform — sits flush below the avatar stack. */}
      {isSpeaking && (
        <View style={styles.waveformRow}>
          <VoiceWaveform
            bars={4}
            height={Math.max(14, size * 0.16)}
            barWidth={Math.max(2, size * 0.025)}
            gap={Math.max(3, size * 0.04)}
            color={
              variant === "muted" ? tokens.brand.tertiary : tokens.brand.primary
            }
            accessibilityLabel="Konuşuyor"
          />
        </View>
      )}
    </View>
  );
}

function stateLabel(s: CoachAvatarState): string {
  switch (s) {
    case "idle":
      return "hazır";
    case "listening":
      return "seni dinliyor";
    case "thinking":
      return "düşünüyor";
    case "speaking":
      return "konuşuyor";
    case "error":
      return "hata";
  }
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  stack: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    // Subtle elevation so Maya feels lifted off the page on both platforms.
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 4,
  },
  initial: {
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.5,
    textAlign: "center",
    includeFontPadding: false,
  },
  gloss: {
    position: "absolute",
    backgroundColor: "#ffffff",
  },
  ring: {
    position: "absolute",
    borderWidth: 2,
  },
  halo: {
    position: "absolute",
    borderWidth: 2,
    borderStyle: "dashed",
  },
  errorBadge: {
    position: "absolute",
    backgroundColor: "#ff9f1c",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  errorBadgeText: {
    color: "#1a1c1c",
    fontWeight: tokens.weight.black,
    includeFontPadding: false,
  },
  waveformRow: {
    marginTop: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
