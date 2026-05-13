// Interest card — Cyber-Electric: yellow-tinted selected, soft surface unselected.

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
      <View style={styles.left}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={[styles.label, selected && styles.labelSelected]}>
          {label}
        </Text>
      </View>
      <View
        style={[
          styles.check,
          selected ? styles.checkSelected : styles.checkUnselected,
        ]}
      >
        {selected && <Text style={styles.checkIcon}>✓</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  cardSelected: {
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.md,
    flex: 1,
  },
  emoji: {
    fontSize: 28,
  },
  label: {
    fontSize: 18,
    color: tokens.text.primary,
    fontWeight: tokens.weight.regular,
    flex: 1,
  },
  labelSelected: {
    fontWeight: tokens.weight.semibold,
  },
  check: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkSelected: {
    backgroundColor: tokens.brand.primary,
  },
  checkUnselected: {
    backgroundColor: tokens.bg.surface,
    borderWidth: 2,
    borderColor: tokens.border.outlineVariant,
  },
  checkIcon: {
    color: tokens.text.onPrimary,
    fontSize: 14,
    fontWeight: tokens.weight.black,
  },
});
