// Lafla — Shared bottom tab bar.
//
// 2026-05-21 — 3-ekran yapısı:
//   Bugün → /today    (default: daily plan + banners)
//   Akış  → /home     (TikTok swipe feed)
//   Profil → /profile (stats + history + ayarlar)
//
// Each screen renders this with the active tab key. Pressing the active tab
// is a no-op; pressing another navigates via router.replace (no back stack
// build-up between tabs — clean separation).

import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useTranslation } from "../lib/i18n";
import { tokens } from "../theme";

const BOTTOM_NAV_HEIGHT = 60;

type TabKey = "today" | "real-life" | "home" | "profile";

interface Tab {
  key: TabKey;
  labelKey: string;
  route: string;
}

const TABS: ReadonlyArray<Tab> = [
  { key: "today", labelKey: "tabs.today", route: "/today" },
  { key: "real-life", labelKey: "tabs.real_life", route: "/real-life" },
  { key: "home", labelKey: "tabs.home", route: "/home" },
  { key: "profile", labelKey: "tabs.profile", route: "/profile" },
];

export function TabBar({ active }: { active: TabKey }) {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <View style={[styles.nav, { height: BOTTOM_NAV_HEIGHT }]}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        const label = t(tab.labelKey);
        return (
          <Pressable
            key={tab.key}
            onPress={() => {
              if (!isActive) router.replace(tab.route as never);
            }}
            style={({ pressed }) => [
              styles.tab,
              pressed && !isActive && styles.tabPressed,
            ]}
            accessibilityRole="tab"
            accessibilityLabel={label}
            accessibilityHint={
              isActive
                ? t("tabs.selected_hint")
                : t("tabs.go_to", { tab: label })
            }
            accessibilityState={{ selected: isActive }}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export const TAB_BAR_HEIGHT = BOTTOM_NAV_HEIGHT;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerLowest,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  tabPressed: { opacity: 0.7 },
  label: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.3,
  },
  labelActive: { color: tokens.brand.primary },
});
