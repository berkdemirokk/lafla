// Lafla — Dinamik Expo config.
//
// app.json statik defaults; app.config.ts build-time'da env'den
// hassas/değişken alanları enjekte eder. İkisi de mevcut olduğunda Expo
// bu dosyayı primary olarak kullanır ve app.json'u base referans yapar.
//
// 2026-05-24 — sentryDsn ve posthogKey app.json'da boş string'di → telemetry
// prod'da sessizce kapalıydı. Şimdi EXPO_PUBLIC_* env'lerinden okunur.
// EAS Secrets veya .env üzerinden tanımlı olmalı; tanımlı değilse fallback
// yine boş string (sessiz devre dışı kalma).
//
// İlgili env değişkenleri:
//   EXPO_PUBLIC_SENTRY_DSN     — Sentry client DSN (frontend, publish edilebilir)
//   EXPO_PUBLIC_POSTHOG_KEY    — PostHog public write key
//   EXPO_PUBLIC_POSTHOG_HOST   — opsiyonel, default app.json'dan gelir
//   EXPO_PUBLIC_TTS_ENDPOINT   — opsiyonel TTS proxy URL
//   EXPO_PUBLIC_SUPABASE_URL   — Supabase project URL (frontend, publish edilebilir)
//   EXPO_PUBLIC_SUPABASE_ANON_KEY — Supabase anon key (frontend, publish edilebilir)
//   EXPO_PUBLIC_REVENUECAT_IOS_KEY — RevenueCat public iOS SDK key
//   SENTRY_AUTH_TOKEN          — opsiyonel; sadece build/sourcemap upload, runtime'a değmez

import type { ConfigContext, ExpoConfig } from "expo/config";

// 2026-05-24 — `{ config }` parametresini kullan. Expo CLI app.json'u parse
// edip default'larla merge edip `config` olarak verir. Önceki versiyon
// app.json'u directly import ediyordu, Expo'nun default plugin/config
// merge'ini bypass ediyordu → expo-doctor uyarı verdi + bazı native
// config'ler eksik kalabilirdi. Şimdi `config` spread + sadece env-driven
// extra alanlarını override.
export default ({ config }: ConfigContext): ExpoConfig => {
  const baseExtra = (config.extra ?? {}) as Record<string, unknown>;
  if (process.env.EAS_BUILD_PROFILE === "production") {
    const requiredProductionValues: Record<string, string | undefined> = {
      EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      EXPO_PUBLIC_SENTRY_DSN: process.env.EXPO_PUBLIC_SENTRY_DSN,
      EXPO_PUBLIC_REVENUECAT_IOS_KEY:
        process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY,
    };
    const missing = Object.entries(requiredProductionValues)
      .filter(([, value]) => !value?.trim())
      .map(([name]) => name);
    if (missing.length > 0) {
      throw new Error(
        `Production build blocked: missing ${missing.join(", ")}`,
      );
    }
  }
  return {
    ...config,
    name: config.name ?? "Lafla",
    slug: config.slug ?? "lafla",
    extra: {
      ...baseExtra,
      sentryDsn:
        process.env.EXPO_PUBLIC_SENTRY_DSN ||
        (baseExtra.sentryDsn as string | undefined) ||
        "",
      posthogKey:
        process.env.EXPO_PUBLIC_POSTHOG_KEY ||
        (baseExtra.posthogKey as string | undefined) ||
        "",
      posthogHost:
        process.env.EXPO_PUBLIC_POSTHOG_HOST ||
        (baseExtra.posthogHost as string | undefined) ||
        "https://eu.i.posthog.com",
      ttsEndpoint:
        process.env.EXPO_PUBLIC_TTS_ENDPOINT ||
        (baseExtra.ttsEndpoint as string | undefined) ||
        "",
      supabaseUrl:
        process.env.EXPO_PUBLIC_SUPABASE_URL ||
        (baseExtra.supabaseUrl as string | undefined) ||
        "",
      supabaseAnonKey:
        process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
        (baseExtra.supabaseAnonKey as string | undefined) ||
        "",
      revenuecatIosKey:
        process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY ||
        (baseExtra.revenuecatIosKey as string | undefined) ||
        "",
    },
  };
};
