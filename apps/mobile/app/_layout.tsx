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

import { useEffect } from "react";
import { Stack, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import { Text as RNText, TextInput as RNTextInput } from "react-native";
import {
  useFonts,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { initAnalytics, trackEvent } from "../lib/analytics";
import { initSentry } from "../lib/sentry";
import { initAds } from "../lib/ads";
import { requestAttOnce } from "../lib/att";
import { tokens } from "../theme";

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

// 2026-05-24 — Dynamic Type clamp.
// iOS XXL erişilebilirlik metin boyutu varsayılan olarak 1.7x büyütür; kartlar
// + chip'ler + paywall fiyatları bu boyutta kırılıyordu. 1.4x cap ile çoğu
// layout'u koruyup gözü zayıf kullanıcı için de okunabilir kalıyoruz. Uygulama
// genelinde tek satır default — her Text/TextInput'u tek tek override etmek
// yerine. Bireysel override (ör. hero başlığı) lokal prop ile yapılabilir.
const TEXT_MAX_SCALE = 1.4;
// RN Text/TextInput defaultProps API'si TypeScript'te declare edilmiyor ama
// runtime'da çalışıyor. Bilinen pattern (React Native 0.79).
type DefaultPropable = { defaultProps?: Record<string, unknown> };
const _Text = RNText as unknown as DefaultPropable;
_Text.defaultProps = { ..._Text.defaultProps, maxFontSizeMultiplier: TEXT_MAX_SCALE };
const _TextInput = RNTextInput as unknown as DefaultPropable;
_TextInput.defaultProps = {
  ..._TextInput.defaultProps,
  maxFontSizeMultiplier: TEXT_MAX_SCALE,
};

// Initialize once at module load so the SDK is live before any render —
// crashes during the very first frame are still captured.
initSentry();

export default function RootLayout() {
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

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Font yüklenemediyse splash'i yine de kapat — system font ile devam.
      // (App'in launch'ı font hatasıyla bloklanmasın.)
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    // Defensive: also run on mount in case the module-level call was a no-op
    // due to a transient config issue. initSentry() is idempotent.
    initSentry();
    // Analytics bootstrap — best-effort. Failures must never crash launch.
    void (async () => {
      try {
        await initAnalytics();
        await trackEvent("app_opened");
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
    const sub = Notifications.addNotificationResponseReceivedListener((r) => {
      try {
        const link = r.notification.request.content.data?.deepLink;
        if (typeof link !== "string" || !link.startsWith("lafla://")) return;
        const path = link.replace(/^lafla:\/\//, "/");
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
    });
    return () => sub.remove();
  }, []);

  // Splash kapanana kadar (ya font hazır ya da yüklenemedi) UI gösterme —
  // yarım font tipografisi flash yapması önlenir.
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: tokens.bg.app },
            animation: "fade",
          }}
        >
          <Stack.Screen
            name="index"
            options={{ contentStyle: { backgroundColor: tokens.bg.onBackground } }}
          />
          <Stack.Screen name="auth" />
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
        </Stack>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
