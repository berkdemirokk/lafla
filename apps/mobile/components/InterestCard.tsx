// Onboarding interest selection — multi-select card row

import { Pressable, Text, View, StyleSheet } from "react-native";
import { tokens } from "../theme";

interface Props {
  emoji: string;
  label: string;
  selected: boolean;
  onPress: () => void;
}

export function InterestCard({ emoji, label, selected, onPress }: Props) {
  return (
    <Pressable
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.check, selected && styles.checkSelected]}>
        <Text
          style={[styles.checkText, selected && styles.checkTextSelected]}
        >
          {selected ? "✓" : "+"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg.card,
    borderWidth: 2,
    borderColor: tokens.border.default,
    borderRadius: tokens.radius.card,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  cardSelected: {
    borderColor: tokens.brand.accent,
    backgroundColor: tokens.brand.accentSoft,
  },
  emoji: {
    fontSize: 24,
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  check: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: tokens.bg.input,
    alignItems: "center",
    justifyContent: "center",
  },
  checkSelected: {
    backgroundColor: tokens.brand.accent,
  },
  checkText: {
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    fontSize: 14,
  },
  checkTextSelected: {
    color: "white",
  },
});
