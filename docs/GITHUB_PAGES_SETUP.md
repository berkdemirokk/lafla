# GitHub Pages Setup — Lafla privacy + terms hosting

**Şu anki durum:** lafla.app domain'i alınmadı → default GitHub Pages URL kullanılıyor.

**Aktif URL'ler:**
- https://berkdemirokk.github.io/lafla/privacy.html
- https://berkdemirokk.github.io/lafla/terms.html

## 1. GitHub Pages'i Aktive Et (1 dk, tek seferlik)

1. https://github.com/berkdemirokk/lafla/settings/pages
2. **Source** → **GitHub Actions** seç (Deploy from a branch DEĞİL)
3. Sayfa otomatik şu URL'i göstermeli: `https://berkdemirokk.github.io/lafla/`
4. **Custom domain** kutusunu BOŞ bırak (lafla.app yok henüz)
5. **Enforce HTTPS** kutusunu işaretle (Pages otomatik sertifika sağlar)

## 2. Test (Apple submit'ten önce)

Workflow ilk çalıştığında ~2 dk içinde deploy edilir. Sonra Safari'den aç:
- https://berkdemirokk.github.io/lafla/privacy.html → 200 OK
- https://berkdemirokk.github.io/lafla/terms.html → 200 OK

Bu URL'ler mobil app'te paywall + settings'ten açılır.

## 3. (İlerde) lafla.app domain alınırsa

1. Domain'i bir registrar'dan al (Namecheap ~$10/yıl)
2. DNS panelinde 4 A kaydı ekle:
   ```
   A  @  185.199.108.153
   A  @  185.199.109.153
   A  @  185.199.110.153
   A  @  185.199.111.153
   ```
3. `apps/web/CNAME` dosyası oluştur, içine `lafla.app` yaz
4. Repo settings → Pages → Custom domain: `lafla.app` → Save
5. Mobil app URL'lerini geri lafla.app'e çevir:
   - apps/mobile/app/paywall.tsx: 2 Linking.openURL call
   - apps/mobile/app/settings.tsx: 2 Linking.openURL call
