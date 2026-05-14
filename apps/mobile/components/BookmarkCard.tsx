// Lafla — BookmarkCard.
// Compact list-style card for the "Kaydedilenler" screen.
// Visually lighter than SceneCard (no big yellow CTA), focused on:
//   emoji + title + truncated description + "Eklendi: X" + Kaldır.

import { Pressable, StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme";

interface Props {
  emoji: string;
  title: string;
  description: string;
  addedAt: string; // ISO timestamp
  onPress: () => void;
  onRemove: () => void;
}

export function BookmarkCard({
  emoji,
  title,
  description,
  addedAt,
  onPress,
  onRemove,
}: Props) {
  const ago = formatRelativeTr(addedAt);

  // Normalize multi-line scene titles to a single readable line
  const flatTitle = title.replace(/\n/g, " ").replace(/\s+/g, " ").trim();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.emojiWrap}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {flatTitle}
        </Text>
        <Text style={styles.desc} numberOfLines={2}>
          {description}
        </Text>
        <Text style={styles.meta}>Eklendi: {ago}</Text>
      </View>

      <Pressable
        onPress={onRemove}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Kaldır"
        style={({ pressed }) => [
          styles.removeBtn,
          pressed && styles.removeBtnPressed,
        ]}
      >
        <Text style={styles.removeLabel}>Kaldır</Text>
      </Pressable>
    </Pressable>
  );
}

// Turkish relative-time formatter — keeps this card self-contained.
// Inputs older than 30 days fall back to "DD.MM.YYYY".
function formatRelativeTr(iso: string): string {
  const then = new Date(iso).getTime();
  if (!Number.isFinite(then)) return "—";
  const now = Date.now();
  const diffSec = Math.max(0, Math.floor((now - then) / 1000));
  if (diffSec < 60) return "az önce";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} dk önce`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} saat önce`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay === 1) return "dün";
  if (diffDay < 7) return `${diffDay} gün önce`;
  if (diffDay < 30) {
    const w = Math.floor(diffDay / 7);
    return w === 1 ? "1 hafta önce" : `${w} hafta önce`;
  }
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}.${d.getFullYear()}`;
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacing.sm,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.sm,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  emojiWrap: {
    width: 56,
    height: 56,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 30,
    lineHeight: 34,
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 2,
  },
  desc: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
    marginBottom: 4,
  },
  meta: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
  },
  removeBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    backgroundColor: tokens.bg.surfaceContainerLowest,
  },
  removeBtnPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  removeLabel: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
});
