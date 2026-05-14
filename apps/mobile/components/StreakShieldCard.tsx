// Esneklik Günü card — shown on profile + streakcalendar.
//
// Visual: rounded card, Pro pill or "Pro ile aç",
// counter "X / 2 kullanılabilir bu ay", subtitle explaining what flex days do,
// and a "[date] kullanıldı" line if the user has spent one before.

import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import {
  getShieldState,
  SHIELDS_PER_MONTH_PREMIUM,
  type ShieldState,
} from "../lib/streak-shield";
import { tokens } from "../theme";

interface Props {
  /** Optional override — if not provided the card refetches on mount. */
  state?: ShieldState;
  /** Re-fetch every time this value changes. Useful after navigation back. */
  refreshKey?: string | number;
  /** Override "open paywall" tap. Defaults to router.push('/paywall'). */
  onUpsellPress?: () => void;
}

function formatTrDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const day = d.getDate();
  const months = [
    "Oca", "Şub", "Mar", "Nis", "May", "Haz",
    "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara",
  ];
  return `${day} ${months[d.getMonth()]}`;
}

export function StreakShieldCard({ state, refreshKey, onUpsellPress }: Props) {
  const router = useRouter();
  const [data, setData] = useState<ShieldState | null>(state ?? null);

  useEffect(() => {
    if (state) {
      setData(state);
      return;
    }
    let alive = true;
    (async () => {
      const next = await getShieldState();
      if (alive) setData(next);
    })();
    return () => {
      alive = false;
    };
  }, [state, refreshKey]);

  if (!data) {
    return (
      <View style={[styles.card, styles.cardPlaceholder]}>
        <View style={styles.skeletonRow} />
        <View style={[styles.skeletonRow, styles.skeletonRowShort]} />
      </View>
    );
  }

  const isPremium = data.isPremium;
  const cap = SHIELDS_PER_MONTH_PREMIUM;
  const counterText = isPremium
    ? `${data.available} / ${cap} kullanılabilir bu ay`
    : `Pro üyelikle açılır`;

  const handleUpsell = () => {
    if (onUpsellPress) {
      onUpsellPress();
      return;
    }
    router.push("/paywall" as never);
  };

  return (
    <View style={[styles.card, isPremium ? styles.cardActive : styles.cardLocked]}>
      <View style={styles.headerRow}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Esneklik Günü</Text>
        </View>
        {isPremium ? (
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumBadgeText}>PRO</Text>
          </View>
        ) : (
          <Pressable
            style={styles.upsellPill}
            onPress={handleUpsell}
            accessibilityRole="button"
            accessibilityLabel="Pro ile aç"
          >
            <Text style={styles.upsellPillText}>Pro ile aç</Text>
          </Pressable>
        )}
      </View>

      <Text style={[styles.counter, !isPremium && styles.counterLocked]}>
        {counterText}
      </Text>

      <Text style={styles.subtitle}>
        Bir gün kaçırırsan aktif günlerin korunur.
      </Text>

      {data.lastUsedAt ? (
        <Text style={styles.meta}>
          {formatTrDate(data.lastUsedAt)} kullanıldı
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: tokens.radius.base,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    gap: 6,
  },
  cardActive: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderColor: tokens.brand.tertiary,
  },
  cardLocked: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderColor: tokens.border.outlineVariant,
  },
  cardPlaceholder: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderColor: tokens.bg.surfaceContainer,
    minHeight: 96,
    justifyContent: "center",
    gap: 8,
  },
  skeletonRow: {
    height: 12,
    borderRadius: 6,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  skeletonRowShort: {
    width: "55%",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  premiumBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  premiumBadgeText: {
    fontSize: 10,
    fontWeight: tokens.weight.black,
    color: tokens.brand.onPrimary,
    letterSpacing: 1.1,
  },
  upsellPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.secondary,
  },
  upsellPillText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.onSecondary,
    letterSpacing: 0.3,
  },
  counter: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },
  counterLocked: {
    color: tokens.text.tertiary,
  },
  subtitle: {
    fontSize: 12,
    color: tokens.text.secondary,
    lineHeight: 16,
  },
  meta: {
    marginTop: 4,
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
  },
});
