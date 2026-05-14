// Lafla — CoachAvatarHero.
//
// The "big Maya" presentation used on the voice / Free Chat hero screen and
// the coach intro flow. Wraps CoachAvatar at a presentation size and adds:
//   • The coach's display name underneath, in the brand typeface.
//   • A localised state caption ("Seni dinliyor", "Düşünüyor", ...).
//   • An optional "tap to interrupt" hint while the coach is speaking — only
//     shown when the consumer also wires an `onInterrupt` handler.
//
// This component is intentionally a thin composition layer: all animation
// logic lives in CoachAvatar / VoiceWaveform. By keeping the hero pure-
// layout it stays easy to reskin (we will likely iterate on this header
// several times before launch).

import { Pressable, StyleSheet, Text, View, type ImageSourcePropType } from "react-native";
import { CoachAvatar, type CoachAvatarState } from "./CoachAvatar";
import { tokens } from "../theme";

export interface CoachAvatarHeroProps {
  state: CoachAvatarState;
  /** Coach display name (e.g. "Maya"). Shown beneath the avatar. */
  name?: string;
  /** Optional bitmap fallback for the avatar. */
  imageSource?: ImageSourcePropType;
  /** Size of the avatar. Defaults to 200 (hero scale). */
  size?: number;
  /**
   * Optional handler — wires the "Konuşmasını kes" hint that appears while
   * the coach is speaking. Tapping the avatar invokes the handler. If not
   * provided, the avatar is not pressable and no hint is shown.
   */
  onInterrupt?: () => void;
  /**
   * Override the auto-localised caption. Pass an empty string to suppress
   * the caption row entirely.
   */
  captionOverride?: string;
}

export function CoachAvatarHero({
  state,
  name = "Maya",
  imageSource,
  size = 200,
  onInterrupt,
  captionOverride,
}: CoachAvatarHeroProps) {
  const caption =
    captionOverride !== undefined ? captionOverride : captionFor(state);
  const showInterrupt = state === "speaking" && typeof onInterrupt === "function";

  const avatar = (
    <CoachAvatar
      state={state}
      size={size}
      name={name}
      imageSource={imageSource}
    />
  );

  return (
    <View style={styles.wrapper}>
      {onInterrupt ? (
        <Pressable
          onPress={onInterrupt}
          accessibilityRole="button"
          accessibilityLabel={`${name}, ${captionFor(state)}`}
          hitSlop={12}
          style={({ pressed }) => [
            styles.pressArea,
            pressed && state === "speaking" && styles.pressed,
          ]}
        >
          {avatar}
        </Pressable>
      ) : (
        avatar
      )}

      <Text
        style={styles.name}
        allowFontScaling={false}
        numberOfLines={1}
      >
        {name}
      </Text>

      {caption !== "" && (
        <Text style={styles.caption} numberOfLines={1}>
          {caption}
        </Text>
      )}

      {showInterrupt && (
        <Text style={styles.interruptHint} numberOfLines={1}>
          Sustur ister misin? Dokun.
        </Text>
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Caption mapping. Turkish-first — these are user-facing strings that should
// match the rest of Lafla's onboarding/coach tone (warm, conversational, no
// title-casing). Keep these in sync with CoachAvatar.stateLabel.
// ---------------------------------------------------------------------------

function captionFor(state: CoachAvatarState): string {
  switch (state) {
    case "idle":
      return "Hazır";
    case "listening":
      return "Seni dinliyor";
    case "thinking":
      return "Düşünüyor";
    case "speaking":
      return "Konuşuyor";
    case "error":
      return "Bir şey ters gitti";
  }
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacing.base,
  },
  pressArea: {
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  name: {
    color: tokens.text.primary,
    fontFamily: tokens.font.sans,
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.3,
    marginTop: 6,
  },
  caption: {
    color: tokens.text.secondary,
    fontFamily: tokens.font.sans,
    fontSize: 14,
    fontWeight: tokens.weight.medium,
  },
  interruptHint: {
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
    fontSize: 12,
    fontWeight: tokens.weight.regular,
    marginTop: 2,
  },
});
