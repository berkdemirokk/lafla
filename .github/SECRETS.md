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

## Lansman Öncesi Checklist

- [ ] Apple Developer hesabı aktif (Lafla app oluşturulmuş, Bundle ID register)
- [ ] App Store Connect'te Lafla app metadata hazır
- [ ] App Store Connect API Key oluşturulmuş (Admin yetkisi)
- [ ] Expo Token alınmış
- [ ] 5 secret repo'ya eklenmiş
- [ ] Workflow manuel olarak 1 kez test edilmiş (preview profile)
