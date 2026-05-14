// Lafla design system — EmptyState.
// Generic "no data yet" screen: large emoji, title, description, optional CTA.
// Centered vertically + horizontally within its parent container.

import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";
import { Button } from "./Button";

interface Props {
  emoji: string;
  title: string;
  description: string;
  ctaLabel?: string;
  onCtaPress?: () => void;
}

export function EmptyState({
  emoji,
  title,
  description,
  ctaLabel,
  onCtaPress,
}: Props) {
  const hasCta = !!ctaLabel && !!onCtaPress;

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {hasCta && (
        <View style={styles.cta}>
          <Button label={ctaLabel!} onPress={onCtaPress!} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.lg,
    gap: tokens.spacing.sm,
  },
  emoji: {
    fontSize: 64,
    lineHeight: 76,
    marginBottom: tokens.spacing.base,
  },
  title: {
    fontSize: 24,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
    fontFamily: tokens.font.sans,
  },
  description: {
    fontSize: 16,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 320,
    fontFamily: tokens.font.sans,
  },
  cta: {
    marginTop: tokens.spacing.md,
    alignSelf: "stretch",
    maxWidth: 320,
  },
});
