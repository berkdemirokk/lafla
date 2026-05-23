# Apple Sign-In Token Revocation — Setup Guide

> **Guideline 5.1.1(v) compliance.** Eğer app Sign in with Apple sunuyorsa, account deletion'da Apple'ın refresh_token'ı revoke edilmelidir. Bu rehber Apple Developer Console + Supabase secrets setup'ını adım adım anlatır.

**Implementation status:**
- ✅ Code: `lib/auth-apple.ts` + `supabase/functions/apple-token-exchange/` + `supabase/functions/delete-account/` (v0.9.2)
- ✅ Migration: `supabase/migrations/00004_apple_credentials.sql`
- ❌ **Apple Developer Console setup — sen yapmalısın (15 dk)**
- ❌ **Supabase secrets — sen yapmalısın (5 dk)**
- ❌ **Migration deploy + function deploy — sen yapmalısın (5 dk)**

Toplam: ~25 dakika.

---

## Adım 1 — Apple Developer Console: Services ID yarat (~5 dk)

1. **https://developer.apple.com/account/resources/identifiers/list** aç
2. Sağ üstte filter dropdown'u **"Services IDs"** yap
3. Sağ üstte **"+"** tıkla
4. **"Services IDs"** seç → **Continue**
5. Form:
   | Alan | Değer |
   |---|---|
   | Description | `Lafla Sign in with Apple` |
   | Identifier | `com.lafla.signinwithapple.service` |
6. **Continue** → **Register**
7. Yeni yaratılan Service ID'ye tıkla → **"Sign in with Apple"** check'le → **Configure**
8. **Primary App ID:** `com.lafla.app` seç
9. **Domains and Subdomains:** (boş bırak — biz native iOS app'iz, redirect URL kullanmıyoruz)
10. **Save** → **Continue** → **Save**

📝 **Not ettiğin:** Service ID: `com.lafla.signinwithapple.service`

---

## Adım 2 — Apple Developer Console: Sign in with Apple Key (~5 dk)

> ⚠️ Bu **Sign in with Apple key**'dir, App Store Connect API key DEĞİL. Ayrı bir key.

1. **https://developer.apple.com/account/resources/authkeys/list** aç
2. Sağ üstte **"+"** tıkla
3. Form:
   | Alan | Değer |
   |---|---|
   | Key Name | `Lafla Sign in with Apple Key` |
4. **"Sign in with Apple"** check'le → **Configure** → **Primary App ID:** `com.lafla.app` → **Save**
5. **Continue** → **Register**
6. **"Download"** butonuna bas → `AuthKey_XXXXXXXXXX.p8` dosyasını indir
7. **⚠️ ÖNEMLİ:** Bu dosyayı sadece BİR KEZ indirebilirsin. Kaybedersen yeni key yaratman lazım. Güvenli yere kopyala.
8. Sayfada gösterilen **Key ID**'yi kopyala (10 karakter, ör. `ABC1234DEF`)

📝 **Not ettiğin:**
- Key ID: `XXXXXXXXXX`
- .p8 dosya yolu: `~/Downloads/AuthKey_XXXXXXXXXX.p8`
- Team ID: `44B88YK392` (zaten biliyoruz)

---

## Adım 3 — Supabase Secrets (~5 dk)

3 environment variable Supabase Edge Functions'a eklenmeli:

### Yol A — Supabase Dashboard
1. **https://supabase.com/dashboard/project/dljlqmzjfewevoxibdlh/settings/functions** aç
2. **Edge Function Secrets** bölümüne 3 secret ekle:

| Name | Value |
|---|---|
| `APPLE_TEAM_ID` | `44B88YK392` |
| `APPLE_SIGNIN_SERVICE_ID` | `com.lafla.signinwithapple.service` |
| `APPLE_SIGNIN_KEY_ID` | (Adım 2'den) |
| `APPLE_SIGNIN_PRIVATE_KEY` | (`.p8` dosyasının **tüm içeriği** — `-----BEGIN PRIVATE KEY-----` dahil) |

**Save**.

### Yol B — Supabase CLI (alternatif)
```bash
supabase secrets set --project-ref dljlqmzjfewevoxibdlh \
  APPLE_TEAM_ID="44B88YK392" \
  APPLE_SIGNIN_SERVICE_ID="com.lafla.signinwithapple.service" \
  APPLE_SIGNIN_KEY_ID="XXXXXXXXXX" \
  APPLE_SIGNIN_PRIVATE_KEY="$(cat ~/Downloads/AuthKey_XXXXXXXXXX.p8)"
```

---

## Adım 4 — Migration + function deploy (~5 dk)

### Migration deploy
```bash
supabase db push --project-ref dljlqmzjfewevoxibdlh
```

Yeni `apple_credentials` table'ı oluşur (RLS service-role-only).

### Edge function deploy
```bash
supabase functions deploy apple-token-exchange --project-ref dljlqmzjfewevoxibdlh
supabase functions deploy delete-account --project-ref dljlqmzjfewevoxibdlh
```

İki function da deploy olur. delete-account zaten vardı, sadece güncelleme.

### Doğrula (opsiyonel, dry-run)
```bash
curl -X POST https://dljlqmzjfewevoxibdlh.supabase.co/functions/v1/apple-token-exchange \
  -H "Authorization: Bearer <user-jwt>" \
  -H "Content-Type: application/json" \
  -d '{"authorization_code":"test"}'
```

Beklenen: `502 apple_token_exchange_failed` (test code geçersiz çünkü). Eğer `503 apple_signin_not_configured` görürsen secrets eksik.

---

## Adım 5 — TestFlight build'inde doğrula (~5 dk)

1. v0.9.2 build TestFlight'a geldiğinde uygulama yükle
2. Apple Sign In ile giriş yap (yeni hesap olsun, mevcut yoksa)
3. Bir sahne yap, vs.
4. Settings → Hesabımı Sil → "SİL" yaz → onay
5. **Beklenen:** Hesap silindi + Supabase dashboard'da auth.users'da kullanıcı yok
6. **Doğrula:** iOS Settings → Apple ID → Password & Security → **Apps Using Apple ID** → Lafla artık listede olmamalı (revoke başarılıysa)

Eğer Lafla hala listede ise → revoke fail oldu. `delete-account` function logs'a bak (Supabase Dashboard → Edge Functions → delete-account → Logs).

---

## Tanı: graceful degradation

Kod path'i sırasıyla:

| Ne çalışıyor? | Behavior |
|---|---|
| Apple env tam set + apple_credentials'ta refresh_token var | ✅ Revoke çağrılır, başarısızsa errors[] döner |
| Apple env eksik + apple_credentials'ta refresh_token var | ⚠️ Revoke skip'lenir, errors[]'a yansır ama deletion devam |
| apple_credentials'ta refresh_token yok (email ile sign in olmuş user) | ⏭️ Revoke skip (Apple Sign-In user değil zaten) |
| Apple API down | ⚠️ errors[]'a yansır, deletion devam (kullanıcı Apple ID settings'den manuel revoke yapabilir) |

**Trade-off bilinçli:** Apple endpoint geçici down olsa bile kullanıcının "hesabımı sil" hakkını engelleyemeyiz (5.1.1(v) zorunlu deletion'dan daha katı). Apple revoke fail olursa Apple ID settings yolu açık kalır.

---

## App Review Notes (eğer setup yetiştirilmezse mitigation)

Eğer submission'a kadar Adım 1-4 bitmezse, App Review Information → Notes alanına ekle:

```
NOTE on Apple Sign-In token revocation (Guideline 5.1.1(v)):
- Account deletion is implemented and immediate (Settings → Hesabımı Sil).
- Apple Sign-In refresh_token revocation backend implementation is in place
  (supabase/functions/delete-account → POST appleid.apple.com/auth/revoke).
- Apple Developer Console Sign-in-with-Apple key setup is being finalized
  and will be enabled in v1.0.1 (within 30 days of approval).
- In the interim, users can revoke Apple Sign-In via:
  iOS Settings → Apple ID → Password & Security → Apps Using Apple ID → Lafla → Stop Using Apple ID.
```

Apple bunu bazen kabul eder. Güvenli yol: setup'ı submission'dan ÖNCE bitir.

---

**Doc owner:** Apple Sign-In setup
**Version:** 1.0
**Last updated:** 2026-05-23
**Status:** Code complete, manual setup pending user
