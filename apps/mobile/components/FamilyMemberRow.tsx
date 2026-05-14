// Lafla — Family Plan member row.
// Reusable list row for the in-app family dashboard.
// Cosmetic only: Apple Family Sharing drives the real entitlement.

import { View, Text, StyleSheet, Pressable } from "react-native";
import { tokens } from "../theme";

interface Props {
  name: string;
  hasActivePro: boolean;
  role?: "organizer" | "member";
  onRemove?: () => void;
}

// Stable palette of soft accents for avatar circles.
// Deterministic per name so the same person keeps the same color.
const AVATAR_COLORS = [
  tokens.brand.tertiarySoft,
  tokens.brand.primarySoft,
  tokens.bg.surfaceContainerHighest,
  tokens.semantic.successContainer,
];

function pickColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(h) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

function getInitial(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  return trimmed.charAt(0).toUpperCase();
}

export function FamilyMemberRow({
  name,
  hasActivePro,
  role = "member",
  onRemove,
}: Props) {
  const isOrganizer = role === "organizer";
  const avatarBg = pickColor(name);

  return (
    <View style={styles.row}>
      <View style={[styles.avatar, { backgroundColor: avatarBg }]}>
        <Text style={styles.avatarInitial}>{getInitial(name)}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.pillRow}>
          {isOrganizer && (
            <View style={[styles.pill, styles.pillOrganizer]}>
              <Text style={[styles.pillText, styles.pillTextOrganizer]}>
                Organizatör
              </Text>
            </View>
          )}
          <View
            style={[
              styles.pill,
              hasActivePro ? styles.pillActive : styles.pillInactive,
            ]}
          >
            <Text
              style={[
                styles.pillText,
                hasActivePro ? styles.pillTextActive : styles.pillTextInactive,
              ]}
            >
              {hasActivePro ? "Pro aktif" : "Pro yok"}
            </Text>
          </View>
        </View>
      </View>

      {onRemove ? (
        <Pressable
          onPress={onRemove}
          style={styles.removeBtn}
          hitSlop={8}
          accessibilityLabel={`${name} adlı üyeyi kaldır`}
          accessibilityRole="button"
        >
          <Text style={styles.removeText}>Kaldır</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.sm,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: tokens.spacing.sm,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitial: {
    fontSize: 18,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
  },
  body: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  pillRow: {
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
  },
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: tokens.radius.sm,
  },
  pillOrganizer: {
    backgroundColor: tokens.brand.primarySoft,
  },
  pillActive: {
    backgroundColor: tokens.brand.tertiarySoft,
  },
  pillInactive: {
    backgroundColor: tokens.bg.surfaceContainerHighest,
  },
  pillText: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  pillTextOrganizer: {
    color: tokens.text.primary,
  },
  pillTextActive: {
    color: tokens.brand.tertiary,
  },
  pillTextInactive: {
    color: tokens.text.tertiary,
  },
  removeBtn: {
    paddingHorizontal: tokens.spacing.sm,
    paddingVertical: 6,
  },
  removeText: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },
});
