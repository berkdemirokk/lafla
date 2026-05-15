# GitHub Pages — lafla.app Domain Setup

## 1. GitHub Pages'i Aktive Et (1 dk, tek seferlik)

1. https://github.com/berkdemirokk/lafla/settings/pages
2. **Source** → **GitHub Actions** seç (Deploy from a branch DEĞİL)
3. Sayfa otomatik şu URL'i göstermeli: `https://berkdemirokk.github.io/lafla/`
4. **Custom domain** kutusuna: `lafla.app` yaz, **Save**
5. **Enforce HTTPS** kutusunu işaretle (DNS aktive olunca açılır)

## 2. DNS Yapılandırması — lafla.app Sahibinin Eylemi

Domain registrar paneline gir (Namecheap, Google Domains, GoDaddy, vb.):

### Apex domain (lafla.app) için 4 A kaydı:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

### www subdomain için CNAME (opsiyonel):

```
CNAME    www    berkdemirokk.github.io
```

DNS propagasyon: 5 dk - 24 saat (genelde 30 dk yeter).

## 3. Test

DNS yayıldıktan sonra:
- `https://lafla.app/` → landing page ✓
- `https://lafla.app/privacy.html` → gizlilik politikası ✓
- `https://lafla.app/terms.html` → kullanım koşulları ✓

İlk yüklemede HTTPS sertifikası 5-30 dk içinde aktive olur (Let's Encrypt).

## 4. Verify (Apple submit'ten önce)

iOS cihazda Safari'den her iki URL'i aç. 200 OK ve sayfa görünür olmalı.

## Domain Yoksa Fallback URL

Eğer lafla.app domain'in henüz yoksa, geçici olarak mobil app'te URL'leri `https://berkdemirokk.github.io/lafla/privacy.html` + `terms.html` olarak güncelle. Domain alındığında geri lafla.app'e çevir.

Yapılması gereken:
- `apps/mobile/app/paywall.tsx` (Linking.openURL calls)
