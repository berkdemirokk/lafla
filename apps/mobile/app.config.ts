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
//   SENTRY_AUTH_TOKEN          — sadece build/sourcemap upload; runtime'a değmez

import type { ExpoConfig } from "expo/config";
import appJson from "./app.json";

const base = appJson.expo as unknown as ExpoConfig;
const baseExtra = (base.extra ?? {}) as Record<string, unknown>;

export default (): ExpoConfig => ({
  ...base,
  extra: {
    ...baseExtra,
    sentryDsn:
      process.env.EXPO_PUBLIC_SENTRY_DSN ??
      (baseExtra.sentryDsn as string | undefined) ??
      "",
    posthogKey:
      process.env.EXPO_PUBLIC_POSTHOG_KEY ??
      (baseExtra.posthogKey as string | undefined) ??
      "",
    posthogHost:
      process.env.EXPO_PUBLIC_POSTHOG_HOST ??
      (baseExtra.posthogHost as string | undefined) ??
      "https://eu.i.posthog.com",
    ttsEndpoint:
      process.env.EXPO_PUBLIC_TTS_ENDPOINT ??
      (baseExtra.ttsEndpoint as string | undefined) ??
      "",
  },
});
