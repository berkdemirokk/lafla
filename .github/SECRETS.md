# GitHub Secrets — Lafla

`expo-testflight.yml` workflow için repo'da tanımlı olması gereken secret'lar.

## Repo Settings → Secrets and variables → Actions → New repository secret

| Secret Adı | Ne Olduğu | Nereden Alınır |
|---|---|---|
| `EXPO_TOKEN` | Expo CLI auth token | https://expo.dev/accounts/[USERNAME]/settings/access-tokens |
| `APP_STORE_CONNECT_KEY_ID` | App Store Connect API Key ID (10 karakter) | App Store Connect → Users and Access → Integrations → Keys |
| `APP_STORE_CONNECT_ISSUER_ID` | App Store Connect Issuer ID (UUID) | Aynı yer (Keys sayfasının üstü) |
| `APP_STORE_CONNECT_PRIVATE_KEY` | `.p8` dosyasının tam içeriği | API Key oluştururken indirilen `AuthKey_XXX.p8` dosyası (bir kere indirilebilir, kaydet) |
| `APPLE_TEAM_ID` | Apple Developer Team ID (10 karakter) | https://developer.apple.com/account → Membership |

## ascend-mobile'da Varsa Aynı Secret'lar Kullanılabilir Mi?

❌ **Hayır.** Secret'lar repo-scoped. Lafla repo'sunda **ayrı tanımlamak gerek**. Ama:
- `EXPO_TOKEN` — aynı Expo hesabıysan, **aynı token kullanabilirsin** (sadece Lafla repo'suna kopyala)
- `APPLE_TEAM_ID` — aynı Apple Developer hesabıysa **aynı**
- `APP_STORE_CONNECT_*` — aynı App Store Connect hesabıysa **aynı**

Yani **sadece kopyalama**, yeniden generate etmeye gerek yok.

## gh CLI ile Hızlı Set (Opsiyonel)

Secret'ları teker teker eklemek için:

```powershell
gh secret set EXPO_TOKEN -R berkdemirokk/lafla
gh secret set APPLE_TEAM_ID -R berkdemirokk/lafla
gh secret set APP_STORE_CONNECT_KEY_ID -R berkdemirokk/lafla
gh secret set APP_STORE_CONNECT_ISSUER_ID -R berkdemirokk/lafla
gh secret set APP_STORE_CONNECT_PRIVATE_KEY -R berkdemirokk/lafla < AuthKey_XXX.p8
```

İlk komut çalışınca terminal `?` ile değer ister, paste et + Enter.

## Workflow Tetikleme

Secret'lar tanımlı olduktan sonra:

**Manuel (her zaman):**
```
GitHub repo → Actions sekmesi → "Lafla iOS TestFlight" → "Run workflow"
```

**Otomatik (tag push):**
```powershell
git tag lafla-v0.1.0
git push origin lafla-v0.1.0
```

## EAS Secrets (Runtime — Binary'e Gömülen Env'ler)

GitHub Actions secret'larına ek olarak, app.config.ts içinden `process.env.EXPO_PUBLIC_*` ile okunan değerler **EAS Secret** olarak da tanımlanmalı. Bunlar build sırasında binary'e bake edilir.

| EAS Secret | Zorunlu mu? | Açıklama |
|---|---|---|
| `EXPO_PUBLIC_SUPABASE_URL` | **Evet** | Auth + hesap silme edge function |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | **Evet** | Aynı |
| `EXPO_PUBLIC_SENTRY_DSN` | **Evet (submission'dan önce)** | Privacy Nutrition Label "Crash Data" deklare ediyor; DSN olmadan Sentry no-op, label'a yalan söylemiş oluruz. **App Store submission'dan önce mutlaka set edin.** |
| `EXPO_PUBLIC_POSTHOG_KEY` | Opsiyonel | ATT metni artık PostHog'a referans vermediği için zorunlu değil. Product analytics istiyorsan set et. |
| `EXPO_PUBLIC_POSTHOG_HOST` | Opsiyonel | Default `https://eu.i.posthog.com` |
| `EXPO_PUBLIC_TTS_ENDPOINT` | Opsiyonel | ElevenLabs proxy; boşsa expo-speech fallback |

### EAS CLI ile Tanımlama

```bash
cd apps/mobile
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_URL --value 'https://...'
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_ANON_KEY --value 'sb_publishable_...'
eas secret:create --scope project --name EXPO_PUBLIC_SENTRY_DSN --value 'https://...@oXXX.ingest.sentry.io/YYY'

# Var olanları görmek için:
eas secret:list

# Production build:
eas build --platform ios --profile production
```

### Doğrulama

EAS build başladıktan sonra `app.config.ts` log'una bak — env değerleri görünüyorsa OK. Production'a girmeden önce TestFlight binary ile:

1. **Sentry**: cihazda intentionally crash et (örn. `__DEV__` ifadesini false yap, `throw new Error("test")` koy), Sentry dashboard'da event'i gör.
2. **Supabase**: yeni kullanıcıyla signup ol, `auth.users`'ta satır oluştu mu kontrol et.
3. **AdMob**: TestFlight'ta test cihazını AdMob test device ID'sine eklenmemiş normal cihazla aç; gerçek reklam görmelisin (Apple Review reviewer gerçek ad görür).

## Lansman Öncesi Checklist

- [ ] Apple Developer hesabı aktif (Lafla app oluşturulmuş, Bundle ID register)
- [ ] App Store Connect'te Lafla app metadata hazır
- [ ] App Store Connect API Key oluşturulmuş (Admin yetkisi)
- [ ] Expo Token alınmış
- [ ] 5 GitHub Actions secret'ı repo'ya eklenmiş
- [ ] EAS Secret olarak `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY`, **`EXPO_PUBLIC_SENTRY_DSN`** tanımlı (`eas secret:list` ile doğrula)
- [ ] Privacy policy ve App Privacy Nutrition Label canlı SDK'larla uyumlu (AdMob, Sentry, PostHog dahil)
- [ ] ATT promptu sadece reklam framing'i içeriyor (PostHog kelimesi yok)
- [ ] Workflow manuel olarak 1 kez test edilmiş (preview profile)
