# App Store Release Notes — Lafla

> "What's New in This Version" / "Yeni Neler Var" — Apple App Store Connect release notes templates.
>
> One entry per version. Keep TR + EN side-by-side so we never ship one without the other.
>
> **Current shipping version:** `0.1.0` (build 1) — see `apps/mobile/app.json` + `apps/mobile/package.json` for the source of truth.

---

## How to write App Store release notes

**Hard rules**
- Max 4000 characters per locale. Aim for **~200–500 chars** — anything longer gets cut off in the "Yeni Neler Var" preview and reads like patch notes nobody asked for.
- One release notes string per locale (TR + EN). Both must be filled in App Store Connect even if EN is just a courtesy translation for diaspora users.
- Release notes are reviewed by Apple. No links to App Store, no version-number-only updates, no profanity.

**Voice rules**
- **Lead with user value, not features.** "İngilizce pratik daha akıcı" beats "Refactored the scene state machine."
- **Be specific.** No "bug fixes and performance improvements." If we say we fixed something, say what.
- **Line breaks > paragraphs.** Mobile readers scan. One idea per line, blank line between sections.
- **Turkish first.** EN is a translation, not the canonical version. If TR sounds off, fix TR — don't write EN-first and back-translate.
- **No marketing fluff.** Lafla's voice is direct: "Söyle gitsin." Not "Embark on your English-speaking journey."
- **Sign-off:** every release ends with `Geri bildirimleriniz için: hello@lafla.app` (TR) / `Feedback: hello@lafla.app` (EN).

**Structure to copy**
1. One-line hook (what changed, in human terms).
2. 2–4 bullet-style lines (or short paragraphs) on specifics.
3. Sign-off line.

**Bad example (don't ship)**

> Bu güncellemede çeşitli hata düzeltmeleri ve performans iyileştirmeleri yapılmıştır. Lafla'yı kullandığınız için teşekkürler!

**Good example (ship)**

> Sahneler artık daha hızlı yükleniyor — özellikle Tinder ve Slack senaryolarında.
> Mikrofon izni hatası düzeltildi (iOS 17.4+).
>
> Geri bildirimleriniz için: hello@lafla.app

---

## 0.1.0 — Launch (Mayıs 2026)

> **Build:** `1` · **Platform:** iOS · **Locale priority:** TR → EN
>
> First public release. Tone: warm, confident, "we just shipped this — try it."

### TR (Türkçe — primary)

```
İlk gün! Lafla'ya hoş geldin.

Türk-context'li İngilizce sahneleri — Tinder mesajı, Slack toplantısı, bar muhabbeti. Ezber yok, gerçek konuşma var.

• 122 sahne, hepsi konuşma odaklı
• Türkçe açıklamalı düzeltmeler — sadece Türklerin yaptığı hatalara özel
• Sesli pratik, donmadan

Söyle gitsin. Geri bildirimleriniz için: hello@lafla.app
```

*(≈360 karakter — limit altında, preview'da kesilmeyecek)*

**Kısa varyant (~250 karakter, preview-safe):**

```
İlk gün! Lafla'ya hoş geldin.

Türk-context'li İngilizce sahneleri. 122 sahne, konuşma odaklı. Türkçe açıklamalı düzeltmeler — sadece Türklerin yaptığı hatalara özel.

Söyle gitsin. Geri bildirimleriniz için: hello@lafla.app
```

### EN (English — secondary)

```
Day one! Welcome to Lafla.

English scenes built for Turkish speakers — Tinder DMs, Slack stand-ups, bar chat. No drills, real conversation.

• 122 scenes, all speaking-first
• Turkish-language feedback on the mistakes only Turks make
• Voice practice without the freeze

Just say it. Feedback: hello@lafla.app
```

*(≈340 characters)*

**Short variant (~250 chars):**

```
Day one! Welcome to Lafla.

English scenes built for Turkish speakers. 122 scenes, speaking-first. Turkish-language feedback on the mistakes only Turks make.

Just say it. Feedback: hello@lafla.app
```

---

## 0.1.1 — Polish Pass (TBD)

> **Build:** `TBD` · **Theme:** Post-launch crash fixes, copy tweaks, the things we missed in week 1.
>
> Fill in after the launch wave settles. Keep it boring and specific — users trust apps that admit small fixes.

### TR

```
Hızlı düzeltmeler:

• [Ne düzeltildi — örn. "Sahne sonunda nadiren takılan ses kaydı"]
• [Küçük iyileştirme — örn. "Profil ekranı yenilendi"]
• [Performans — örn. "Sahne yükleme %30 daha hızlı"]

Geri bildirimleriniz için: hello@lafla.app
```

### EN

```
Quick fixes:

• [What got fixed — e.g. "Voice recorder occasionally stuck at end of scene"]
• [Small improvement — e.g. "Profile screen refresh"]
• [Performance — e.g. "Scene load 30% faster"]

Feedback: hello@lafla.app
```

---

## 0.2.0 — Sound + Animations (TBD)

> **Build:** `TBD` · **Theme:** First feature drop after launch. Sound design + Lottie animations land.
>
> This is a "we listened" release — frame it around what users said they wanted.

### TR

```
Lafla'ya ses ve hareket geldi.

• [Yeni ses tasarımı — örn. "Doğru cevapta yumuşak feedback sesleri"]
• [Animasyonlar — örn. "Sahne geçişleri akıcı"]
• [Eklenen sahneler — örn. "20 yeni sahne (toplam 142)"]

Söyle gitsin. Geri bildirimleriniz için: hello@lafla.app
```

### EN

```
Sound and motion arrive on Lafla.

• [New sound design — e.g. "Soft feedback tones on correct answers"]
• [Animations — e.g. "Smooth scene transitions"]
• [New scenes — e.g. "20 new scenes (142 total)"]

Just say it. Feedback: hello@lafla.app
```

---

## Checklist before submitting any version

- [ ] TR copy reviewed by a native speaker (not back-translated)
- [ ] EN copy reads naturally — no Google-Translate phrasing
- [ ] Character count under 500 for both locales (preview-safe)
- [ ] No "bug fixes and performance improvements" filler
- [ ] No links, no version numbers in body, no emoji unless brand-approved
- [ ] Sign-off email present: `hello@lafla.app`
- [ ] Version + build number in `app.json` and `package.json` match what's being submitted
- [ ] GitHub release notes drafted using `.github/release-notes-template.md`
