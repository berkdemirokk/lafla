# Lafla Pilot Launch Playbook

> **Status**: Draft v1.0 — 2026-05-19
> **Owner**: @berkdemirokk (solo founder)
> **Window**: Build 19 (live on TestFlight) → Build 20 (Chatterbox voices) → Public App Store launch
> **Goal**: Validate retention, scoring honesty, and content quality with 20–50 Turkish-speaking testers before spending a single lira on paid acquisition.

This is a founder-to-founder playbook. No marketing fluff. If a section feels obvious to you, skip it — the point is to give you a checklist when your brain is mush from shipping all week.

---

## 1. Pilot Goals & Success Metrics

The pilot is a hypothesis test, not a launch. We are answering exactly four questions:

1. **Do Turkish users come back?** (retention)
2. **Does our scoring feel fair when they speak English?** (product honesty)
3. **Is the content good enough that they'd pay $9.99/mo?** (willingness-to-pay signal)
4. **Is anything fundamentally broken that Apple would reject for?** (launch safety)

### Numeric Targets

| Metric | Target | Why this number |
|---|---|---|
| Unique testers installed | 50 in 30 days | Lower bound for statistical comfort on retention; upper bound of what solo founder can support |
| D7 retention | ≥ 40% | Below this, no amount of paid acquisition fixes the leaky bucket |
| D30 retention | ≥ 20% | This is the "would I pay" cohort. Below 20%, do not launch publicly |
| Scoring complaint rate | < 10% of sessions reported | Above this, scoring engine needs another tuning pass before paid users see it |
| Qualitative feedback | ≥ 5 written responses per week | Quantity beats quality at this stage; we're hunting patterns |
| Crash-free sessions | ≥ 99.5% | Sentry threshold. Anything lower = stop-ship |
| P0 Apple-rejection bugs | 0 | IAP fraud, ATT violation, broken purchase flow, microphone permission crash |

### Anti-Goals (what we are NOT measuring)

- Total session count vanity metric — bots, friends-being-nice, founder testing all inflate it.
- NPS at week 1 — too noisy with N<50. Save for week 4.
- Conversion to paid in pilot — we have RevenueCat Sandbox; intent matters more than transactions.
- "Did they finish all 980 lessons?" — nobody will. Don't measure it.

---

## 2. TestFlight Setup

Five steps. Do these in order in App Store Connect → Lafla → TestFlight.

### Step 1 — Create the Internal Test Group

- **Path**: App Store Connect → My Apps → Lafla → TestFlight → Internal Testing → `+`
- **Name**: `Lafla Internal` (members: just you + any trusted dev friend with App Store Connect access)
- **What it gives you**: Builds appear here within ~10 minutes of upload, no Apple review. Use this for smoke-testing every build before promoting it to externals.
- **Screenshot to expect**: Left sidebar shows "Internal Testing" with a count badge. Each build has a "Test Details" link.

### Step 2 — Configure the External Test Group with a Public Link

- **Path**: TestFlight → External Testing → `+ New Group`
- **Name**: `Lafla Beta — Türkiye Pilot`
- **Toggle ON**: "Enable Public Link" — this is the magic. You get a `testflight.apple.com/join/XXXXXXXX` URL you can share anywhere. Up to 10,000 testers, no per-tester email invitations.
- **Set tester limit**: 100 (you can raise it later; lower number prevents bots flooding it on day 1)
- **Screenshot to expect**: A blue "Public Link" panel appears with the URL, a QR code, and a tester count.

### Step 3 — Add Review Notes for the First External Build

External builds need a one-time Apple review (24–48h typical). For every subsequent build it's automatic.

- **Path**: TestFlight → Build X.X (XX) → Test Information
- **What's New for Testers** (Turkish):
  > "Lafla beta sürümüne hoş geldin! Bu sürümde gerçek seslerle 8 sahne ve 980+ ders var. Lütfen mikrofon erişimine izin ver. Geri bildirim için TestFlight uygulamasındaki 'Send Feedback' butonunu kullan ya da bana DM at."
- **Beta App Description**: Copy from `docs/APP_STORE_METADATA.md` Turkish description, abridged.
- **Email for Feedback**: your founder email
- **Review Notes** (English, for Apple reviewer): *Point them at `docs/APP_REVIEW_NOTES.md`* — that doc should explain the test scenarios, demo credentials if any, microphone permission rationale, and ATT prompt flow.
- **Demo Account**: If onboarding requires sign-in, give them a working test account.

### Step 4 — Make the Build Available

- After Apple approves the external build (you'll get an email), go back to the External Group and **toggle the build to "Available"**.
- Public link goes live the moment you do this.

### Step 5 — Grab the Public Link URL

- **Pattern**: `https://testflight.apple.com/join/{8-char-code}`
- Bookmark it. Save it as a QR code (App Store Connect generates one automatically — download as PNG).
- This is the single URL you will paste into every recruitment channel below.

> **Callout — Build 19 vs Build 20**: Build 19 is fine to start recruitment with (Siri voices). When Build 20 lands with Chatterbox, testers auto-update — no action needed from them, just push the new build through the same external group. Mention in the build's "What's New" that the audio quality jumped.

---

## 3. Recruitment Channels

Ranked by **ROI for solo dev** — installs per hour of founder time. Each channel includes ready-to-paste Turkish copy and an honest conversion estimate.

### Tier 1 — Highest ROI

#### a) Friend Network — Direct WhatsApp / iMessage

- **Conversion**: ~50% install rate from people who know you
- **Time**: 1 hour to message 20 people
- **Why first**: zero cost, guaranteed installs, honest feedback because they know you, and gives you a baseline cohort to compare strangers against
- **Sample Turkish message** (1:1, personal):

> "Selam [isim]! 6 aydır üzerinde çalıştığım Lafla isimli iOS uygulamasını TestFlight beta'da yayına aldım — Türkler için İngilizce konuşma pratiği. AI değil, gerçek sahneler. 5 dakikalık bir denemen ve dürüst geri bildirimin benim için altın değerinde olur. Link: [TestFlight URL]. iPhone gerek + önce App Store'dan TestFlight indir. Kullanmazsan kırılmam, denersen yeter."

- **Tactical tip**: send Sunday afternoon. Highest WhatsApp read rate. Avoid Monday mornings.

#### b) Twitter/X — Personal Handle + Thread

- **Conversion**: ~1–3% of impressions click; ~30% of clickers install
- **Time**: 1 hour to write thread, then 15 min/day for replies for a week
- **Audience**: Turkish indie/tech Twitter, English-learning enthusiasts
- **Sample Turkish thread** (5 tweets):

> 1/ 6 aydır şu soruyu cevaplamaya çalışıyorum: Neden Türkler 10 yıl İngilizce çalışıyor da konuşamıyor?
>
> 2/ Cevap "kelime eksiği" değil. Pratik eksikliği. Ama yanlış konuşmaktan utanmadan pratik yapılacak yer yok.
>
> 3/ Lafla'yı onun için yaptım. iOS app. 8 sahne (kafe, iş görüşmesi, flört, seyahat...), 980+ mini-ders. Konuşuyorsun, anlık skor alıyorsun, AI değil — gerçek senaryolar.
>
> 4/ Şu an beta'da. 50 Türk kullanıcıyı 30 gün boyunca arıyorum. Bedava. TestFlight üzerinden:
> [link]
>
> 5/ Geri bildirimin uygulamayı şekillendirecek. Sevmezsen tek tweet at, sileyim sıkıntı yok. Sevenler için: ücretli sürüm $9.99/ay olacak, beta'cılara ömür boyu indirim.

- **Tactical tip**: Pin the thread. Tag 2–3 Turkish indie hacker accounts (don't beg — just mention). Reply to every comment within 2 hours for the first 48h to feed the algorithm.

#### c) Reddit — r/Turkey, r/TurkeyJerky, r/IELTS

- **Conversion**: ~5% of post viewers will click the link, ~30% of clickers install
- **Time**: 30 min/post + 2 hours/day reading rules for each subreddit beforehand
- **Risk**: Reddit is allergic to self-promo. Read the sidebar 3 times. Some subs require flair or "Saturday self-promo threads only."
- **Sample r/Turkey post** (use a soft, question-led title):

> **Başlık**: "Türkler olarak neden 'speaking' kısmında takılıyoruz? — uygulama yaptım, 20 beta tester arıyorum"
>
> **Body**:
> Selam, 10 yıldır yazılımcıyım, 6 aydır kendi projem üzerinde çalışıyorum. Lafla — iOS'ta İngilizce konuşma pratik uygulaması. Yapay zeka chatbot değil; senaryo-bazlı (kafe, iş görüşmesi, müzakere falan), konuştuğun cümleler için anlık skor veriyor.
>
> Şu an beta'da, gerçek Türk kullanıcılardan dürüst geri bildirim arıyorum.
>
> 30 gün boyunca bedava. iPhone + TestFlight (App Store'dan ücretsiz indirilir) gerekiyor.
>
> İlgilenen DM atsın ya da buraya yorum yazsın. Yapıcı eleştiriye en açık dönemim, lütfen acımayın.
>
> (Mod ekibi: self-promo kurallarına uygun olduğunu düşünüyorum, sorun varsa silerim.)

- **Tactical tip**: Don't post on r/IELTS in Turkish — use English version there. Mention specifically "looking for Turkish speakers preparing for IELTS." Post Wed–Thu around 19:00 TR time.

### Tier 2 — Medium ROI

#### d) Facebook Groups — "İngilizce Öğreniyorum", "IELTS Türkiye", "YDS YÖKDİL"

- **Conversion**: ~2–4% of group viewers click; install rate lower than Twitter because Facebook users skew older / less iOS
- **Time**: 1 hour to vet groups + craft per-group variant
- **Risk**: Most groups have rules against self-promo. Either DM the admin for permission OR phrase as a community ask, not a launch announcement.
- **Sample Facebook post** (community-framed):

> "Merhaba arkadaşlar 👋
>
> 6 aydır Türkler için bir İngilizce konuşma pratik uygulaması yapıyorum. Şu an beta aşamasında ve 20-30 Türk kullanıcıdan dürüst geri bildirim arıyorum. Tamamen ücretsiz, sadece iPhone gerekiyor.
>
> Grup yöneticilerinin izniyle paylaşıyorum — uygunsuzsa silerim. Detaylar ve katılım için DM atabilirsiniz."

- **Tactical tip**: Don't paste the TestFlight link in the public post — let interested users DM. Reduces low-quality installs and signals respect for the group.

#### e) LinkedIn — Turkish ESL Teachers + Sales/Tech Pros

- **Conversion**: ~10% reply rate to DMs, ~40% install of repliers
- **Time**: 3 hours for 50 personalized DMs
- **Audience filter**: LinkedIn search "İngilizce öğretmeni" OR "Sales Manager" + Location: Turkey + iPhone-likely demographics
- **Sample LinkedIn DM**:

> "Merhaba [İsim], profilinizdeki [konu]'a dair yazdığınız [post/yorum] çok değerliydi.
>
> Lafla isimli, Türkler için İngilizce konuşma pratik uygulamasını geliştiriyorum. iOS beta'da şu an. ESL eğitiminde 10+ yıl deneyiminiz var — ürünü 1 hafta deneyip 5 dakika geri bildirim verir misiniz? Karşılığında ömür boyu bedava erişim + uygulamada teşekkürler bölümü.
>
> TestFlight linki: [link]"

- **Tactical tip**: LinkedIn caps you at ~25 DMs/day before flagging. Spread over a week.

### Tier 3 — Lower ROI, but worth a shot

#### f) Universities — CS + Translation Departments

- **Conversion**: 0–80% wildly variable depending on professor relationship
- **Time**: 4 hours to find emails + write 5 personalized professor emails
- **Audience**: Boğaziçi, Bilkent, ODTÜ, İTÜ — CS for tech-savvy iOS users; Translation/ELT departments for language-motivated users
- **Sample email to professor** (Turkish, formal):

> **Konu**: Türk öğrenciler için İngilizce konuşma pratik uygulaması — beta test desteği
>
> Sayın [Prof. Dr. İsim Soyisim],
>
> Ben Berk Demir, 10 yıllık bir yazılım geliştiricisiyim. Son 6 aydır Türk kullanıcılar için "Lafla" isimli bir iOS uygulaması geliştiriyorum: senaryo-bazlı İngilizce konuşma pratiği, akademik dil değerlendirmesinden ilham alan bir skorlama motoru.
>
> Şu an 30 günlük beta dönemindeyiz ve [üniversite/bölüm] öğrencilerinin geri bildirimi ürün için kritik. Eğer bültenize / öğrenci kanalınıza paylaşmanın bir yolu varsa minnettar olurum.
>
> Detaylar ve TestFlight bağlantısı ekte. Dilediğiniz zaman görüşmek isterim.
>
> Saygılarımla,
> Berk Demir
> [LinkedIn link]

- **Tactical tip**: Translation/ELT departments have higher install rates than CS but CS students give better bug reports. Hit both.

### Recruitment Forecast (Honest)

| Channel | Time (hrs) | Expected Installs | Quality of Feedback |
|---|---|---|---|
| Friend network | 1 | 10–15 | Very high (they know you) |
| Twitter/X | 5 (incl. replies) | 8–15 | High (tech-fluent) |
| Reddit | 3 | 5–12 | Medium-high (mixed motives) |
| Facebook groups | 2 | 5–10 | Medium (language learners, less iOS-savvy) |
| LinkedIn | 3 | 5–10 | Very high (domain experts) |
| Universities | 4 | 0–20 (long tail, gated by reply) | High if it lands |
| **TOTAL** | **18 hrs over 2 weeks** | **33–82 installs** | — |

If you hit the low end, supplement with paid (see section 9).

---

## 4. Onboarding the Tester

The tester's first 10 minutes determine whether they ever open the app again. Make those minutes obvious.

### The Welcome DM / Email Script

Send this within 1 hour of any tester confirming interest:

> **Konu**: Lafla Beta — Başlamadan önce 3 şey
>
> Selam [isim], beta'ya katıldığın için teşekkürler 🙏
>
> **1) Yükle**: TestFlight uygulamasını App Store'dan indir (zaten varsa atla). Sonra şu linke tıkla → [TestFlight URL]. "Accept" + "Install" deyince Lafla yüklenecek.
>
> **2) İlk 5 dakikada şunları dene**:
> - "Flört (Flirt)" sahnesini aç — en eğlencelisi
> - NPC'nin sesini dinle (kulaklık önerilir)
> - Telefonun mikrofon iznini iste — sonra İngilizce bir cümle söyle
> - Skoru gör. Skor "yanlış" geliyorsa kaydını al, bana DM at — bu zaten araştırdığım kritik şey
>
> **3) Geri bildirim için**:
> - Bug / problem: TestFlight içindeki "Send Feedback" butonu en hızlısı (otomatik ekran görüntüsü ekler)
> - Genel düşünce: bu DM'e cevap yaz, dilediğin uzunlukta
> - Hafta sonu 5 soruluk anket göndereceğim (~2 dk)
>
> Sorularını bekliyorum. İlk 24 saatte cevap garantili.
>
> — Berk

### The "First 3 Things to Try" Frame

Don't say "try everything." Direct attention to the *exact* surfaces where you most need signal:

1. **Open one specific scenario** (Flirt — most viral feedback surface)
2. **Listen to NPC audio** (validates Chatterbox quality in Build 20)
3. **Try saying something in English and observe the score** (validates the scoring engine — your highest-risk hypothesis)

### Bug Report Channels (Pick ONE — don't fragment)

| Option | Pro | Con | Recommendation |
|---|---|---|---|
| Google Form | Structured, exportable, friction-free for tester | Async, no back-and-forth | **Use for weekly surveys** |
| Discord server | Community feel, real-time | Solo dev = ghost server vibes | Skip for now |
| TestFlight Feedback button | Auto-screenshot, native | Buried in TestFlight app | **Use for bug reports** |
| Twitter DM / WhatsApp | Personal, fast | Doesn't scale past 30 testers | **Use for high-value testers (friends, LinkedIn pros)** |

**Recommendation**: TestFlight Feedback for bugs, Google Form for structured surveys, founder DM as a high-touch escape hatch.

### Survey Cadence

- **Day 0**: Welcome message (above)
- **Day 3**: 1-question check-in via DM ("Yüklemeyi başardın mı? Bir sorun var mı?")
- **Day 7**: Week 1 survey (5 questions, see section 5)
- **Day 14**: Mid-pilot DM nudge for inactive users
- **Day 28**: Week 4 survey (10 questions)
- **Day 30**: Thank-you DM with "ömür boyu indirim" coupon code

---

## 5. Weekly Feedback Survey Templates

Use Google Forms (free, dead simple, exports to Sheets). Send the link via DM with a 1-line ask.

### Week 1 Survey — 5 Questions, ~2 min

1. **Bu hafta Lafla'yı kaç kez açtın?**
   - 0 / 1–2 / 3–5 / 6–10 / 10+
2. **En faydalı bulduğun mod hangisi oldu?**
   - Flört / İş / Kafe / Seyahat / Banter / Diğer (yazınız)
3. **En sinir bozucu olan şey neydi?** (open text — 1 zorunlu cümle)
4. **Şu anki haliyle aylık $9.99 öder miydin?**
   - Kesinlikle / Belki / Hayır / Önce şunlar düzelmeli: [text]
5. **Eklemek istediğin başka bir şey?** (open text, optional)

### Week 4 Survey — 10 Questions, ~5 min

1. **Son 30 günde toplam kaç oturum yaptın?** (estimate)
2. **NPS**: Bir arkadaşına Lafla'yı önerme ihtimalin 0–10?
3. **Skorlama dürüst hissettirdi mi?** (1–5, ve "neden?" open text)
4. **Ses kalitesi nasıldı?** (NPC audio — 1–5)
5. **Hangi sahne / konu eksik kaldı?** (open text)
6. **Hangi rakip uygulamalarla karşılaştırdın?** (Speak, Cambly, Duolingo, hiçbiri, diğer)
7. **Aylık fiyat algın**:
   - $9.99/ay çok ucuz / tam doğru / pahalı / asla ödemem
8. **Sınav hazırlığı (IELTS / TOEFL) için $99 tek seferlik öder miydin?** (evet / hayır / belki)
9. **Demografik**: yaş aralığı + meslek + İngilizce seviyen (kendi tahminin)
10. **Lafla hakkında bir cümle yazsan — ne yazardın?** (open text — bu pazarlama için altın)

**Tactical tip**: Question 10 in Week 4 is the most valuable single field in this entire playbook. Those one-line testimonials are your launch-day Twitter content and App Store screenshots.

---

## 6. Daily Pilot Metrics Dashboard

Check these every morning, 5 min, coffee in hand. If anything is red, that's the day's priority.

| Metric | Source | Healthy | Yellow | Red — stop and fix |
|---|---|---|---|---|
| TestFlight install count | App Store Connect → TestFlight | +1–3/day | 0/day for 2 days | Distribution channel broken |
| D1 retention | PostHog (post-ATT) + Sentry session data | ≥ 60% | 40–60% | < 40% |
| D7 retention | PostHog cohort | ≥ 40% | 25–40% | < 25% |
| Lesson completion rate | PostHog event `lesson_completed` / `lesson_started` | ≥ 65% | 45–65% | < 45% |
| Avg scoring complaint signal | Sessions where score < 40 AND user retried 3+ times | < 10% | 10–20% | > 20% |
| Subscription start rate (Sandbox) | RevenueCat dashboard | ≥ 5% of WAU initiate | 2–5% | < 2% (low intent signal) |
| Crash-free sessions | Sentry | ≥ 99.5% | 98.5–99.5% | < 98.5% |
| Unresolved bug reports (P0/P1) | TestFlight feedback inbox | 0 P0, < 3 P1 | 1 P0 | > 1 P0 for > 24h |

**On ATT**: Most TR users will decline tracking. PostHog will only capture non-tracked events. Cross-reference with RevenueCat (purchase events) and Sentry (session counts) for retention. Don't over-engineer this — directional truth is enough at N<50.

### Founder's Daily 5-Minute Routine

1. Open Sentry → check crashes overnight
2. Open App Store Connect → TestFlight → new installs?
3. Open RevenueCat → any sandbox subscription starts?
4. Open Gmail / TestFlight feedback → triage new bug reports (see section 7)
5. Open PostHog → glance at yesterday's retention cohort

Total: 5 minutes if nothing is on fire.

---

## 7. Bug Triage Protocol

When 30 people are using a beta, you'll get 5–10 bug reports per week. Without a system, you'll either drown or ignore them. Pick a tier in your head for each report within 30 seconds of reading it.

### Severity Tiers

| Tier | Definition | Examples | SLA | Response |
|---|---|---|---|---|
| **P0 — Crash / Money** | App crashes, IAP broken, ATT rejected, data loss, security | Crash on first lesson, paywall infinite-loop, microphone permission denial loops | Fix < 24h, ship hotfix build | "Hemen bakıyorum, en geç yarın düzeltme yollayacağım — teşekkürler!" |
| **P1 — Scoring / Content** | Wrong score on valid English, broken lesson logic, offensive content | "Hello, how are you?" scored 20/100; lesson ID 437 has typo | Investigate < 72h, fix in next build | "Bunu kaydettim, hangi cümleyi söylediğini ve aldığın skoru paylaşır mısın? Skorlamayı düzelteceğim." |
| **P2 — Visual / UX** | Layout bug, dark mode glitch, animation jank, text overflow | Korean characters render as boxes (oof), home screen card cuts off | Fix < 1 week | "Görüyorum, sıraya aldım. Bir-iki sürüm içinde gelecek." |
| **P3 — Nice-to-have** | Feature request, "could you also support..." | "Yapay zeka eklenebilir mi?", "Android sürüm gelecek mi?" | Icebox / monthly review | "Geri bildirim için teşekkürler, not aldım. Şu an iOS + sahne odaklı kalıyoruz; ileride değerlendiririm." |

### Response Templates

**P0 reply (within 4 hours)**:
> "Selam [isim], rapor için çok teşekkürler — bu kritik bir bug. Şu an üzerinde çalışıyorum, en geç yarın yeni build'i TestFlight'a yolluyorum. Yüklediğin anda haber vereyim mi?"

**P1 reply (within 24 hours)**:
> "Merhaba [isim], geri bildirim için teşekkürler. Skorlama konusunda hassas çalışıyoruz — söylediğin tam cümleyi ve aldığın skoru paylaşabilir misin? (Mümkünse ekran görüntüsü.) Tuningi bunlara göre yapacağım."

**P2 reply (within 1 week)**:
> "Selam, bunu gördüm, backlog'a aldım. 1-2 sürüm içinde düzelteceğim. Tekrar yazınca bahsetmen yeterli, takip ediyorum."

**P3 reply (within 1 week, polite no)**:
> "Geri bildirim için minnettarım. Şu an [iOS / sahne pratiği / Türkçe-İngilizce] üzerine odaklanıyoruz, [Android / AI chat / başka dil çifti] şu an roadmap'te değil ama not aldım — kullanıcı sayısı belli bir noktaya gelirse değerlendiririm."

> **Callout — Founder pitfall**: The temptation is to fix every P2 to look responsive. Don't. Every P2 you ship is a P0 you didn't ship. Bug triage is a focus weapon.

---

## 8. Exit Criteria for Public Launch

Do not submit to App Store Review until ALL of these are true:

- [ ] **50+ unique testers installed** OR 4 weeks elapsed (whichever first)
- [ ] **D7 retention ≥ 40%** OR clear positive trajectory (40% → 45% week over week on rolling cohorts)
- [ ] **Zero P0 bugs in the last 7 days** (crashes, IAP fraud, ATT violations)
- [ ] **Scoring complaint rate < 10%** of sessions in the last 14 days
- [ ] **3+ unsolicited positive testimonials** usable for marketing (saved as screenshots, with permission to quote)
- [ ] **`docs/APP_REVIEW_NOTES.md` finalized** — demo account, scenario walkthrough, ATT/microphone rationale
- [ ] **`docs/APP_STORE_METADATA.md` finalized** — Turkish + English descriptions, keywords, 6 screenshots, preview video optional
- [ ] **Build 20 (Chatterbox voices) shipped and audio-quality survey question scores ≥ 4/5 average**
- [ ] **RevenueCat production products approved** — `lafla.premium.monthly` live, Exam Pass one-time product configured (currently broken — see lafla_project.md)
- [ ] **Info.plist usage strings translated to English** (currently Turkish — Apple has rejected for less on global apps)
- [ ] **Apple sandbox-tested purchase flow on 3 devices** without issue

If any one of these is unchecked, you are not ready. The cost of waiting 1 more week is dwarfed by the cost of a botched launch with 1-star reviews.

---

## 9. Risk & Mitigation

### Risk: Low Signup

**Symptom**: < 10 installs after Week 1.

**Mitigation ladder** (try in order):
1. Re-post on Twitter with new angle (e.g., a screen recording of the actual app).
2. Reach out to 5 Turkish micro-influencers in the language-learning or tech niche on Instagram/TikTok. Budget: ₺500–2000 each for a Story mention. Look for 5k–30k follower accounts — they're cheap and have engaged audiences.
3. Run a ₺500 Twitter/X promoted-thread test targeted at TR users interested in "ielts" + "ingilizce." Measure CPI (cost per install).
4. Last resort: write a Medium article in Turkish ("Türkler için İngilizce konuşma uygulamasını sıfırdan nasıl yaptım") and link the beta. Indie-builder content has a long tail.

### Risk: Negative Feedback Dominant

**Symptom**: Week 1 survey shows scoring complaints in > 30% of responses or "would not pay" > 50%.

**Mitigation**:
- **Do not launch publicly.** This is the entire point of the pilot.
- Run a tuning sprint on the scoring engine — pull the bottom-decile scored sessions, manually re-score, adjust pattern-matcher thresholds.
- Run a 2-week scoped second pilot with 10 returning testers to validate the fix.
- It is **cheaper to delay launch by 4 weeks than to launch into 1-star reviews you cannot delete.**

### Risk: Audio Quality Complaints

**Symptom**: Week 1 survey audio-quality score < 3/5 average.

**Mitigation**:
- Build 19 uses Siri voices — known fallback, low magic.
- Build 20 (Chatterbox) is the bet. If Chatterbox quality survey scores < 4/5, **fall back to Siri until the Worker pipeline is live** rather than ship subpar voices to App Store.
- Worst case: ship without Chatterbox in v1, market the speech-recognition + scoring as the wedge, add real voices in v1.1.

### Risk: Sentry Shows Crashes

**Symptom**: Crash-free sessions < 99.5%.

**Mitigation**:
- **Fix-first, ship-second.** No new features until crash-free is back above threshold.
- Triage by frequency × user-impact. A 0.3% crash hitting 80% of users is worse than a 1% crash hitting 5%.
- Communicate to testers transparently: "Bir crash sorunu fark ettim, 24 saat içinde düzeltiyorum, sabrın için teşekkürler."

### Risk: Apple Beta Review Rejects External Build

**Symptom**: Email from Apple within 24–48h of submitting external build for review.

**Mitigation**:
- Read the rejection reason word for word.
- Most common: missing demo account, unclear microphone usage description, ATT prompt before microphone prompt (wrong order), broken IAP sandbox.
- Fix in `docs/APP_REVIEW_NOTES.md` first, then resubmit with explicit reply addressing each point.
- This is also why we updated the Info.plist English strings (lafla_project.md flagged this as a known follow-up).

---

## 10. Post-Pilot — Public Launch Triggers

Once exit criteria (section 8) are met, here's the launch sequence. None of this happens during the pilot — it's the **next** 1–2 weeks after pilot exit.

### Pre-Launch Checklist (Week of Submit)

- [ ] Final ASO pass — keywords, title localization, description tweaks driven by Week 4 survey insights. Base: `docs/APP_STORE_METADATA.md`.
- [ ] Screenshots regenerated with final UI (6 per locale × 2 locales = 12 PNGs at 6.7" + 5.5")
- [ ] App Preview video (optional but +20% conversion historically) — 30s, no narration, show the speak-and-score loop
- [ ] Submit for review → expect 24–72h turnaround
- [ ] Prepare press kit: 1-page PDF + 5 screenshots + founder bio + contact

### Launch Day (Day Apple approves)

- [ ] Phased release: enable "Phased Release for Automatic Updates" → 1% → 100% over 7 days
- [ ] Sentry alerts armed for any crash spike during ramp
- [ ] Twitter announce thread (template below)
- [ ] Email beta testers: "Lafla canlıda — paylaşırsan minnettarım, ömür boyu kuponunuz hâlâ aktif"

### Twitter/X Launch Thread Template (Turkish)

> 1/ 7 ay önce bir soruyla başladım: Neden Türkler 10 yıl İngilizce çalışıyor da konuşamıyor?
>
> 2/ Bugün Lafla App Store'da. iOS'ta İngilizce konuşma pratiği. Senaryo-bazlı, anlık skorlama, AI chatbot DEĞİL — gerçek sahneler, gerçek ses.
>
> 3/ 30 günlük beta'da 50 kullanıcı, [D7 retention rakamı]% D7 retention, [NPS skoru] NPS. Buradan dürüst geri bildirim aldım, ürünü onlarla şekillendirdim.
>
> 4/ İndirme: [App Store link]
> Ücretsiz başla, sevdiysen Speak+ $9.99/ay.
>
> 5/ Beta'cılara: ömür boyu %50 indirim koduniz e-postanızda. Buradaki herkese: ilk hafta retweet edenlere 3 ay ücretsiz, DM atın.
>
> 6/ Sonsuz teşekkürler [beta testers tag if comfortable]. Bu olmadan olmazdı.

### Reddit Announce Post (r/Turkey)

> **Başlık**: "Lafla artık App Store'da — Türkler için İngilizce konuşma pratiği, 7 aylık solo geliştirici hikayesi"
>
> 6 ay önce buraya beta için post atmıştım. 50 Türk kullanıcı geri bildirim verdi, bugün canlıdayız. Detaylar, neyi neden yaptık, hata yaptığımız her şey: [Medium link / Twitter thread]
>
> App Store: [link]
>
> İlk hafta sorular için buradayım, AMA gibi düşünün.

### Turkish Tech Press Email Template

To: Webrazzi, ShiftDelete, TechInside editors

> **Konu**: Lafla — Türkler için yeni nesil İngilizce konuşma uygulaması (App Store'da yayında, 50 beta'cı + [retention rakamı]% D7)
>
> Merhaba [Editör adı],
>
> Ben Berk Demir, 10 yıllık yazılım geliştiricisi. Bugün 7 aylık solo projem olan Lafla'yı App Store'da yayına aldım — Türkler için İngilizce konuşma pratiği uygulaması. AI chatbot yerine senaryo-bazlı, anlık skorlama, gerçek sesli NPC'ler.
>
> 30 günlük kapalı beta'da 50 Türk kullanıcıyla D7 retention %[X], NPS [Y] aldık. Aşağıda press kit, ekran görüntüleri ve röportaja açığım.
>
> Press kit (1 sayfa): [link]
> App Store: [link]
> Demo hesabı + tüm sürüm sizin için bedava: [credentials]
>
> Habere uygun bulursanız öncelikli erişim verebilirim. Yanıtınızı bekliyorum.
>
> Saygılarımla,
> Berk Demir
> [phone] | [LinkedIn]

### Day 30 Post-Launch Retro

- Write a retro doc: predicted metrics vs. actual, what surprised, what to do differently next launch
- Share it publicly on Twitter — indie-builder transparency content drives the next 1000 installs
- File it as `docs/LAUNCH_RETRO_v1.md` for future-you

---

## Final Founder Reminder

The pilot is **information**, not vanity. Every install that doesn't retain is a data point that prevents a $5,000 paid acquisition mistake later. Every "this scoring is wrong" complaint is a P1 saved from being a 1-star public review.

Ship slow. Listen hard. Then ship fast.

— good luck out there 🚀
