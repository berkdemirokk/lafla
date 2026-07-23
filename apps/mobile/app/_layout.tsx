// Root navigator — Neon Noir, lean surface.
//
// History: the previous layout registered 32 screens. After the radical cut
// (2026-05-20) we kept only routes that map to the single-action home + voice
// loop. Faz 2 (v0.8.0) added phoneme-drill + listen-mode as silent-environment
// alternatives. Faz 3 (v0.9.0) kept the route surface stable.
//
// 2026-05-25 — 22 route. Önceki sayım stale'di (16 derdi). 6 yeni ekran
// auto-discover ile çalışıyordu ama screenOptions (animation: fade,
// contentStyle bg) almıyordu. Şimdi register edildi: today, history,
// certificates, ielts-band, vocab-book, weakness-report. Yeni ekran
// eklerken bu listeyi güncel tut.

import { useEffect, useState } from "react";
import { Stack, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  AppState,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpaceGrotesk_500Medium } from "@expo-google-fonts/space-grotesk/500Medium";
import { SpaceGrotesk_600SemiBold } from "@expo-google-fonts/space-grotesk/600SemiBold";
import { SpaceGrotesk_700Bold } from "@expo-google-fonts/space-grotesk/700Bold";
import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_500Medium } from "@expo-google-fonts/inter/500Medium";
import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { Inter_800ExtraBold } from "@expo-google-fonts/inter/800ExtraBold";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { initAnalytics, trackEvent } from "../lib/analytics";
import { initSentry } from "../lib/sentry";
import { initAds } from "../lib/ads";
import { requestAttOnce } from "../lib/att";
import { ThemeProvider, tokens, useAppTheme } from "../theme";
import { hydrateThemePreference } from "../lib/theme-preference";
import { hydrateLocale } from "../lib/i18n";
import { flushCloudProgressOutbox } from "../lib/cloud-progress-outbox";
import {
  markNotificationBootstrapComplete,
  routeFromNotificationDeepLink,
  setPendingNotificationRoute,
} from "../lib/notification-routing";

const K_LAST_OPEN_DAY = "lafla.analytics.lastOpenDay";
const K_LAST_NOTIFICATION_RESPONSE = "lafla.notifications.lastResponse";

function localDayKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function daysBetweenKeys(previous: string | null, current: string): number | null {
  if (!previous) return null;
  const parse = (key: string) => {
    const [year, month, day] = key.split("-").map(Number);
    return Date.UTC(year ?? 0, (month ?? 1) - 1, day ?? 1);
  };
  const diff = Math.round((parse(current) - parse(previous)) / 86_400_000);
  return Number.isFinite(diff) && diff >= 0 ? diff : null;
}

// 2026-05-24 — Font load gate.
// Theme tokens (theme/index.ts) referans veriyor:
//   font.display       → "SpaceGrotesk_700Bold"   (en ağır SG variant'ı —
//                        Google Fonts'ta Space Grotesk Bold'da biter, Black/
//                        ExtraBold yok. 76pt wordmark da bu weight'i kullanır.)
//   font.displaySemi   → "SpaceGrotesk_600SemiBold"
//   font.displayMedium → "SpaceGrotesk_500Medium"
//   font.sans          → "Inter_500Medium"
//   font.sansRegular   → "Inter_400Regular"
//   font.sansSemi      → "Inter_600SemiBold"
//   font.sansBold      → "Inter_700Bold"
//   font.sansExtra     → "Inter_800ExtraBold"
// useFonts'a verdiğimiz key'ler EXACT bu string'lerle eşleşmeli — yoksa
// runtime'da System fallback'e düşer (sessizce).
SplashScreen.preventAutoHideAsync().catch(() => {
  /* no-op — preventAutoHideAsync may reject if hide already called (Fast Refresh) */
});

const LAUNCH_FALLBACK_MS = 1200;

// Initialize once at module load so the SDK is live before any render —
// crashes during the very first frame are still captured.
initSentry();

export default function RootLayout() {
  const [preferencesReady, setPreferencesReady] = useState(false);
  const [showLaunchFallback, setShowLaunchFallback] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  const canRenderApp = (fontsLoaded || fontError) && preferencesReady;

  useEffect(() => {
    if (canRenderApp || showLaunchFallback) {
      // Font yüklenemediyse splash'i yine de kapat — system font ile devam.
      // (App'in launch'ı font hatasıyla bloklanmasın.)
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [canRenderApp, showLaunchFallback]);

  useEffect(() => {
    if (canRenderApp) return;
    const timeout = setTimeout(() => {
      setShowLaunchFallback(true);
    }, LAUNCH_FALLBACK_MS);
    return () => clearTimeout(timeout);
  }, [canRenderApp]);

  useEffect(() => {
    let cancelled = false;
    void Promise.all([
      hydrateThemePreference().catch(() => "system" as const),
      hydrateLocale(),
    ])
      .finally(() => {
        if (!cancelled) setPreferencesReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        void flushCloudProgressOutbox().catch(() => {});
      }
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    // Defensive: also run on mount in case the module-level call was a no-op
    // due to a transient config issue. initSentry() is idempotent.
    initSentry();
    // Analytics bootstrap — best-effort. Failures must never crash launch.
    void (async () => {
      try {
        await initAnalytics();
        const today = localDayKey(new Date());
        const previous = await AsyncStorage.getItem(K_LAST_OPEN_DAY).catch(
          () => null,
        );
        const daysSinceLastOpen = daysBetweenKeys(previous, today);
        await trackEvent("app_opened", {
          days_since_last_open: daysSinceLastOpen ?? -1,
          next_day_return: daysSinceLastOpen === 1,
        });
        if (daysSinceLastOpen !== null && daysSinceLastOpen >= 1) {
          await trackEvent("app_returned", {
            days_since_last_open: daysSinceLastOpen,
            next_day_return: daysSinceLastOpen === 1,
          });
        }
        await AsyncStorage.setItem(K_LAST_OPEN_DAY, today).catch(() => {});
      } catch {
        // ignore — analytics is non-critical
      }
    })();
    // 2026-05-23 — Apple Review safety: AdMob başlatmadan ÖNCE ATT prompt
    // gösterilmeli. ATTrackingManager.requestTrackingAuthorization initAds
    // (mobileAds().initialize()) öncesinde çalışırsa Apple "Sequence
    // correct" der. requestAttOnce idempotent — 2. açılışta no-op.
    void (async () => {
      try {
        await requestAttOnce();
      } catch {
        // ATT failure non-critical; AdMob non-personalized'a düşer
      }
      void initAds().catch(() => {});
    })();

    // 2026-05-26 — Push notification deep link handler.
    // Önceki versiyon: 13 template `lafla://freechat`, `lafla://today` gibi
    // deep link tanımlıyordu ama hiçbir kod bunları işlemiyordu. Kullanıcı
    // bildirime basıyor → app açılıyor → splash → /today (her zaman aynı).
    // Şimdi: notification.data.deepLink → uygun route'a yönlendir.
    //
    // 2026-05-26 (P1 audit fix) — Eski 600ms setTimeout cold launch'ta
    // Stack henüz mount olmadıysa router.push throw'lar ve try/catch sessizce
    // yutuyordu → kullanıcı bildirime bassa hiçbir yere gitmiyordu. Yeni:
    // exponential retry (200ms → 500ms → 1200ms → 2500ms) ile router hazır
    // olana kadar dene. Hâlâ fail ederse silent fail (worst case /today).
    const routeNotification = async (
      r: Notifications.NotificationResponse,
      coldLaunch: boolean,
    ) => {
      try {
        const responseId = r.notification.request.identifier;
        const previousId = await AsyncStorage.getItem(
          K_LAST_NOTIFICATION_RESPONSE,
        ).catch(() => null);
        if (responseId && responseId === previousId) return;
        const path = routeFromNotificationDeepLink(
          r.notification.request.content.data?.deepLink,
        );
        if (!path) return;
        if (responseId) {
          await AsyncStorage.setItem(K_LAST_NOTIFICATION_RESPONSE, responseId).catch(
            () => {},
          );
        }
        if (coldLaunch) {
          setPendingNotificationRoute(path);
          return;
        }
        const retries = [200, 500, 1200, 2500];
        let attempted = 0;
        const tryPush = () => {
          try {
            router.push(path as never);
          } catch {
            if (attempted < retries.length) {
              setTimeout(tryPush, retries[attempted++]);
            }
            // sessizce yut — son retry'da bile fail ederse user splash/today'de kalır
          }
        };
        setTimeout(tryPush, retries[attempted++]);
      } catch {
        // bozuk payload — yut
      }
    };
    void Notifications.getLastNotificationResponseAsync()
      .then((response) => {
        if (response) return routeNotification(response, true);
      })
      .catch(() => {})
      .finally(markNotificationBootstrapComplete);
    const sub = Notifications.addNotificationResponseReceivedListener((r) => {
      void routeNotification(r, false);
    });
    return () => sub.remove();
  }, []);

  // Splash kapanana kadar (ya font hazır ya da yüklenemedi) UI gösterme —
  // yarım font tipografisi flash yapması önlenir.
  if (!canRenderApp) {
    return showLaunchFallback ? <LaunchFallback /> : null;
  }

  return (
    <ThemeProvider>
      <ThemedRootNavigator />
    </ThemeProvider>
  );
}

function ThemedRootNavigator() {
  const { colors, scheme } = useAppTheme();

  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: colors.bg.app }}
    >
      <ErrorBoundary>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.bg.app },
            animation: "fade",
          }}
        >
          <Stack.Screen
            name="index"
            options={{ contentStyle: { backgroundColor: colors.bg.onBackground } }}
          />
          <Stack.Screen name="auth" />
          <Stack.Screen name="reset-password" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="home" />
          <Stack.Screen name="scenario/[id]" />
          <Stack.Screen name="freechat" />
          <Stack.Screen name="leaderboard" />
          <Stack.Screen name="review" />
          <Stack.Screen name="placement" />
          <Stack.Screen name="paywall" />
          <Stack.Screen name="profile" />
          <Stack.Screen name="settings" />
          <Stack.Screen name="voice-diagnostics" />
          <Stack.Screen name="diary" />
          <Stack.Screen name="voice-journal" />
          <Stack.Screen name="relationships" />
          <Stack.Screen name="phoneme-drill" />
          <Stack.Screen name="listen-mode" />
          <Stack.Screen name="today" />
          <Stack.Screen name="history" />
          <Stack.Screen name="certificates" />
          <Stack.Screen name="ielts-band" />
          <Stack.Screen name="vocab-book" />
          <Stack.Screen name="weakness-report" />
          <Stack.Screen name="mistake-coach" />
          <Stack.Screen name="real-life" />
          <Stack.Screen name="progress-compare" />
          <Stack.Screen name="accent-lab" />
        </Stack>
      </ErrorBoundary>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
    </SafeAreaProvider>
  );
}

function LaunchFallback() {
  return (
    <View style={stylesLaunch.root}>
      <Text style={stylesLaunch.wordmark}>Lafla</Text>
      <View style={stylesLaunch.accent} />
    </View>
  );
}

const stylesLaunch = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.bg.app,
  },
  wordmark: {
    color: tokens.text.primary,
    fontSize: 56,
    fontWeight: "800",
  },
  accent: {
    width: 56,
    height: 2,
    marginTop: 12,
    borderRadius: 1,
    backgroundColor: tokens.brand.primary,
  },
});
