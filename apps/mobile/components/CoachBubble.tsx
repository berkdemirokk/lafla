// Lafla — CoachBubble.
//
// A chat bubble for a coach message in the Free Chat / lesson dialogue
// surface. Two visual states:
//   • "speaking"  — the coach is currently mid-utterance. The inline avatar
//                   shows the speaking animation and a subtle "..." caret
//                   appears at the end of the text.
//   • "delivered" — the line is complete (default). Shows a timestamp and,
//                   if `onSpeak` is provided, a replay-TTS speaker button.
//
// The bubble itself uses a near-black "inverseSurface" background to match
// Lafla's existing NPC bubble convention (see SceneCard.tsx and the
// achievement toast). Text sits on `inverseOnSurface` for contrast.
//
// Inline avatar is fixed at 32 px to keep the bubble compact in a tight
// chat layout. It's pulled flush left, with the bubble offset by avatar
// + gap so the bubble starts where the avatar ends.

import { Pressable, StyleSheet, Text, View } from "react-native";
import { CoachAvatar, type CoachAvatarState } from "./CoachAvatar";
import { tokens } from "../theme";

export interface CoachBubbleProps {
  text: string;
  /** "speaking" mid-utterance; "delivered" after the message is final. */
  state?: "speaking" | "delivered";
  /** Pre-formatted timestamp (e.g. "14:23"). Shown only when delivered. */
  timestamp?: string;
  /** Tap-to-replay TTS handler. If omitted, the speaker icon is hidden. */
  onSpeak?: () => void;
  /** Coach name — only the initial is shown inside the inline avatar. */
  coachName?: string;
}

export function CoachBubble({
  text,
  state = "delivered",
  timestamp,
  onSpeak,
  coachName = "Maya",
}: CoachBubbleProps) {
  // Map bubble state → avatar state. We only ever use "speaking" or "idle"
  // here; the bubble doesn't model thinking/listening (those are global UI).
  const avatarState: CoachAvatarState =
    state === "speaking" ? "speaking" : "idle";

  return (
    <View style={styles.row}>
      <View style={styles.avatarSlot}>
        <CoachAvatar state={avatarState} size={32} name={coachName} />
      </View>

      <View style={styles.bubbleColumn}>
        <View style={styles.bubble}>
          <Text style={styles.text}>
            {text}
            {state === "speaking" && (
              <Text style={styles.caret}> ...</Text>
            )}
          </Text>
        </View>

        {/* Footer row: timestamp + optional speaker. We hide the whole row
            when there's nothing to show so the bubble stays tight. */}
        {(timestamp || onSpeak) && state !== "speaking" && (
          <View style={styles.footer}>
            {timestamp ? (
              <Text style={styles.timestamp}>{timestamp}</Text>
            ) : (
              <View style={styles.spacer} />
            )}
            {onSpeak && (
              <Pressable
                onPress={onSpeak}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel="Mesajı tekrar dinle"
                style={({ pressed }) => [
                  styles.speakerBtn,
                  pressed && styles.speakerBtnPressed,
                ]}
              >
                <Text style={styles.speakerIcon}>🔊</Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginVertical: 6,
    // Coach bubbles align to the start of the row. The user's own bubbles
    // (rendered by a sibling component) would mirror this layout.
    alignSelf: "flex-start",
    maxWidth: "92%",
  },
  avatarSlot: {
    // The CoachAvatar reserves headroom (size * 1.5) for its ring/halo
    // even at rest. At 32px that's 48px which is too tall here, so we cap
    // the slot height and let the avatar render centered.
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -4, // optical alignment with the bubble's first text line.
  },
  bubbleColumn: {
    flexShrink: 1,
  },
  bubble: {
    backgroundColor: tokens.bg.inverseSurface,
    borderTopLeftRadius: 4,
    borderTopRightRadius: tokens.radius.base,
    borderBottomLeftRadius: tokens.radius.base,
    borderBottomRightRadius: tokens.radius.base,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  text: {
    color: tokens.text.inverseOnSurface,
    fontFamily: tokens.font.sans,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: tokens.weight.regular,
  },
  caret: {
    color: tokens.brand.primary,
    fontWeight: tokens.weight.bold,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    paddingHorizontal: 4,
    gap: 8,
  },
  spacer: {
    flex: 1,
  },
  timestamp: {
    color: tokens.text.tertiary,
    fontSize: 11,
    fontFamily: tokens.font.sans,
    fontWeight: tokens.weight.medium,
    flex: 1,
  },
  speakerBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  speakerBtnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  speakerIcon: {
    fontSize: 14,
    color: tokens.brand.tertiary,
  },
});
