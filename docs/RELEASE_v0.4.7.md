# Release v0.4.7 — App Store Connect Release Notes

**Tag:** `lafla-v0.4.7`  •  **Build:** 8  •  **Released:** 2026-05-23

> Copy-paste ready for App Store Connect → My Apps → Lafla → Distribution
> → App Store → Version Information → "What's New in This Version".

---

## TR (Turkish) — primary

```
Daha derin pratik. Daha sağlam ölçüm.

• 800+ sahne — 132 yeni hikaye yayı: Erasmus Amsterdam, Londra'da junior dev, NY tech konferansı, Tokyo solo seyahat, US vize mülakatı, freelance müşteri yönetimi ve daha fazlası. Birbirine bağlı, gerçekçi sahneler.

• Yıllık abonelik (₺999) — Speak+ aylık ₺99 yerine 2 ay bedava.

• Seviye testi artık konuşma + dinleme ile bitiyor. Sadece gramer cevaplayıp B1 alma devri kapandı — gerçek seviyeni gösterir.

• IELTS Band tahmini artık gerçek telaffuz skorunla. Önceki versiyon yaklaşıktı.

• Günlük (yazılı) + sesli günlük: kendi gelişimini somut gör, kendi sesini geri dinle.

• Karşılaştığın NPC'ler seni hatırlar. Mia, Sam, Erin — sahne sayısına göre Tanıdık → Arkadaş → Yakın.

• Yeni 3D hisli arayüz: hero kartlarda derinlik, akıcı geçişler.

Söyle gitsin. Geri bildirimleriniz için: hello@lafla.app
```

**Karakter sayısı:** ~870 (4000 limit altında, ~500 preview-safe değil ama bu büyük release; ilk 200 char "Daha derin pratik. Daha sağlam ölçüm. • 800+ sahne — 132 yeni hikaye yayı: Erasmus Amsterdam, Londra'da junior dev, NY tech konferansı, Tokyo solo seyahat...")

---

## EN (English) — translation

```
Deeper practice. Sharper measurement.

• 800+ scenes — 132 new story arcs: Erasmus Amsterdam, junior dev in London, NY tech conference, Tokyo solo travel, US visa interview, freelance client management, and more. Connected, realistic scenes.

• Yearly subscription (₺999) — 2 months free vs Speak+ monthly ₺99.

• Placement test now ends with speaking + listening. No more answering grammar and getting B1 — it shows your real level.

• IELTS Band estimate now uses your actual pronunciation score. The previous version was approximate.

• Diary (text) + voice journal: see your progress, hear your own voice over time.

• NPCs remember you. Mia, Sam, Erin — Acquaintance → Friend → Close based on how many scenes you've shared.

• New 3D-feeling interface: hero cards with depth, smoother transitions.

Just say it. Feedback: hello@lafla.app
```

---

## Internal changelog (NOT for App Store — engineering log)

### Monetization
- Yearly subscription tier (₺999) added to paywall
- Live discount badge computed from priceAmountMicros ratio
- Single source of truth for tier prices (RevenueCat)

### CEFR engine fixes
- Placement test: added 1 speaking (PronouncePhrase) + 1 listening (ListenAndTranscribe) phase after 10 MCQ
- Placement state persistence (force-close = resume from where you left)
- Pronunciation score → recordCefrProgress feed (was: thrown away after UI)
- Pronunciation history (lib/pronunciation-history.ts) for IELTS Band Estimator
- Scene tag audit script (`npx tsx scripts/audit-cefr-tags.ts`) — flags B1/B2 marker register inside lower-tagged scenes
- 3 audited mismatches fixed: story.erasmus.10, daily.expand.17, story.ielts.7

### Content
- Story Arc V2: 132 new scenes across 15 arcs (Erasmus, junior dev, NY conf, customer support, US immigration, doctor visit, apartment hunt, online dating, work conflict, salary negotiation, freelance, solo Japan, tech support, uni admission, long-haul flight)
- Bar mode 30→60 scenes (CEFR balanced: A2×6, B1×12, B2×8, C1×4)
- Total: ~800 scenes

### Engagement (brand-safe, no XP/league)
- Daily Diary: 1-cümle text journal (Day One tarzı)
- Voice Journal: 30-entry FIFO m4a archive with orphan-file cleanup
- NPC Relationships: persistent characters with composite bucket:name key, in-scene tier banner ("Mia · Arkadaş · 6. sahnen")

### UI premium polish
- 3D pseudo-effects: hero press tilt (±4° perspective), scroll parallax, splash wordmark perspective entrance
- iOS button bevel highlights (paywall, verdict scoreCard, hero)
- Floating drop shadows (offset 0,4)
- Hairline borders (1.5px)
- Streak chip: 360° flip → spring scale (less childish)
- Splash halo: size + brightness halved (less neon-sign)

### Audio routing
- RoleplayChat speak() now passes npcRole + setting to TTS — bundled voices route correctly (vc_match, vc_friend, vc_doctor, etc)

### Apple Review safety
- Tinder trademark → Match (18 files: notification, filename, symbols, IDs)
- AdMob children categorization: NO (was YES — conflicted with flirt/bar content)
- Privacy nutrition document updated for new local data (diary, voice journal, NPC relationships)
- maxAdContentRating: T (Teen)

### Audit fixes
- Voice Journal orphan file sweep (was: m4a leak on crash)
- Placement state persistence (was: force-close = baseline restart)
- NPC relationship banner in-scene (was: tier silently tracked, no UI surface)

---

## Submission checklist (manual user-side steps)

- [ ] App Store Connect → IAP products: confirm `lafla.premium.monthly` (₺99) + `lafla.premium.yearly` (₺999) exist, both attached to "Lafla Pro" entitlement
- [ ] RevenueCat dashboard: confirm Offering `default` has both `$rc_monthly` and `$rc_annual` packages
- [ ] App Store Connect → Age Rating: confirm 17+ (flirt + alcohol content)
- [ ] App Store Connect → Privacy Nutrition: matches `docs/APP_STORE_PRIVACY_NUTRITION.md`
- [ ] Sandbox tester: end-to-end purchase flow (monthly + yearly + restore)
- [ ] Apple Sign In: end-to-end sign-in + account deletion
- [ ] App preview video (optional but boosts conversion ~15-20%)
- [ ] Screenshots: 6.7" + 5.5" (5 each, TR + EN locales)
- [ ] Submit for review with these release notes copy-pasted into "What's New"
