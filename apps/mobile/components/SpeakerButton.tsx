// Speaker button — taps to hear English pronunciation.

import { Pressable, Text, StyleSheet, type ViewStyle, type StyleProp } from "react-native";
import { speak } from "../lib/tts";
import { tokens } from "../theme";

interface Props {
  text: string;
  lang?: "en-US" | "tr-TR";
  size?: "sm" | "md" | "lg";
  style?: StyleProp<ViewStyle>;
}

export function SpeakerButton({ text, lang = "en-US", size = "md", style }: Props) {
  const dim = size === "sm" ? 28 : size === "lg" ? 48 : 36;
  return (
    <Pressable
      onPress={() => speak(text, { lang })}
      hitSlop={8}
      style={({ pressed }) => [
        styles.btn,
        { width: dim, height: dim, borderRadius: dim / 2 },
        pressed && styles.btnPressed,
        style,
      ]}
    >
      <Text style={[styles.icon, { fontSize: dim * 0.5 }]}>🔊</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  btnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  icon: {
    color: tokens.brand.tertiary,
  },
});
