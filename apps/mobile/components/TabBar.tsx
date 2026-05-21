// Lafla — Shared bottom tab bar (3 tabs).
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
import { tokens } from "../theme";

const BOTTOM_NAV_HEIGHT = 60;

type TabKey = "today" | "home" | "profile";

interface Tab {
  key: TabKey;
  label: string;
  route: string;
}

const TABS: ReadonlyArray<Tab> = [
  { key: "today", label: "Bugün", route: "/today" },
  { key: "home", label: "Akış", route: "/home" },
  { key: "profile", label: "Profil", route: "/profile" },
];

export function TabBar({ active }: { active: TabKey }) {
  const router = useRouter();

  return (
    <View style={[styles.nav, { height: BOTTOM_NAV_HEIGHT }]}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
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
            accessibilityState={{ selected: isActive }}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
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
