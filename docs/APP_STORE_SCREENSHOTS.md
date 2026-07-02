# App Store Screenshots & Preview Video — Storyboard  ⚠️ NEEDS UPDATE

> **2026-05-20 status:** Bu doküman pre-pivot 8-mod tasarım planı. Mode chips (Flört/İş/Banter/Spor/Sağlık/Travel/Seyahat) eski. Senaryo bahçesi (CEFR rail %Banter 21% etc.) ile pivot-3 sonrası uyumsuz.
>
> **Quick fix path:** [`APP_STORE_METADATA.md` Section 7](./APP_STORE_METADATA.md) artık güncel screenshot brief'i içeriyor (6 mod, 480+ sahne, Bar/Airport çipleri). Bu doküman daha detaylı pixel-level planning + animation video storyboard için tutuluyor — pre-shoot review'da 8→6 mod refactor yap.
>
> **Bu PR'da değiştirilmedi**, ayrı bir "App Store creative refresh" PR'ında yapılacak. Şu an MVP submission için Section 7 yeterli.

---

> Lafla v0.1.0 — App Store Connect requires screenshots in specific device sizes. This doc covers the **6.7" iPhone (iPhone 14/15/16 Pro Max @ 1290 × 2796 px)** as the primary set. Apple auto-derives the 6.5" set; iPad and Apple Watch are not required for v0.1.0.

> **Device size decision pending:** Apple now requires either 6.9" (iPhone 16 Pro Max @ 1320×2868) **or** 6.7" as of 2025. 6.7" is back-compatible to older devices in the rendering pipeline; 6.9" gives more pixels but excludes anyone still on 14 Pro Max. Recommendation: ship 6.7" for v0.1.0, upgrade to 6.9" when we touch the listing for v0.2.

---

## Visual System

All 10 screenshots share:

- **Vertical layout:** caption text in top ~25%, device frame mockup in bottom ~75%
- **Caption typography:** Inter Bold 60pt for headline, Inter Regular 32pt for sub
- **Caption language:** Turkish primary (TR market). EN listing screenshots same images, captions swapped (Apple supports per-locale screenshots — must upload both)
- **Background:** soft gradient — Lafla brand purple (#7C5CFC) to dark (#1A1530), 35° angle
- **Frame:** flat iPhone outline, no shadow gimmicks
- **Status bar:** time `9:41`, full battery, full Wi-Fi (Apple HIG convention)

---

## Screenshot Set (10 frames, 6.7" iPhone, 1290 × 2796 px)

### 1. Hero — Brand Statement

**On screen:**
- Top: large Lafla wordmark (custom logotype, lowercase `lafla`)
- Below logo: app icon at 240×240 px, rounded square
- Tagline beneath: **"Söyle gitsin."**
- Sub-caption fills caption area

**Caption (TR):**
> İngilizce ezber değil, gerçek konuşma.

**Caption (EN):**
> Not memorization. Actual speaking.

> *Why first:* App Store auto-plays the first 1-3 screenshots in search results. Frame 1 must communicate "what is this" in under a second.

---

### 2. Tinder Opener — Scenario Card

**On screen:**
- Top of phone: profile card UI mimicking Tinder — photo placeholder, name "Emma, 24", brief bio
- Bottom: chat composer field with prompt: *"Send your opening message"*
- Below composer: 3 suggested-tone chips — `Playful`, `Direct`, `Witty`
- A subtle "Scenario 4 of 12 · Dating Mode" header

**Caption (TR):**
> Tinder'da ilk mesaj nasıl atılır?

**Caption (EN):**
> How do you open a Tinder match?

> *Why:* Most memorable, most distinctive scene. Signals "this app does what Duolingo doesn't."

---

### 3. Roleplay Chat — In Action

**On screen:**
- Mid-conversation chat screen
- User bubble (right, purple): *"I have been there twice last summer"* — with red underline on `have been ... last summer`
- Below, AI partner bubble (left, gray): *"Oh nice! Where exactly?"*
- Bottom: correction card sliding up from below
  - Header: **Düzeltme** / *Correction*
  - Old: `have been ... last summer`
  - New: `went there twice last summer`
  - Reason (Turkish): *"Geçmişte bitmiş bir zaman varsa Simple Past kullanılır — `last summer` bitmiş bir zamandır."*

**Caption (TR):**
> Hatanı Türkçe anlatıyoruz. Ezberletmiyoruz.

**Caption (EN):**
> We explain mistakes in Turkish. No memorization.

> *Why:* This is the actual product. Most converting frame for someone who's curious.

---

### 4. Stats — Scenarios Completed

**On screen:**
- Dashboard card stack
- Top card: large number **47** with label *"Sahneler tamamlandı"* / *"Scenarios completed"*
- Below: 7-day bar chart — last week's daily completions
- Card below: streak counter — *"12 gün streak"*
- Bottom: comparison line *"%34 daha fazla geçen haftadan"*

**Caption (TR):**
> XP'yi unut. Tamamladığın sahneler önemli.

**Caption (EN):**
> Forget XP grinding. Scenarios completed is the only metric.

> *Why:* Positions against Duolingo's gamification fatigue. The audience knows what we're not.

---

### 5. Skill Tree — Mode Map

**On screen:**
- Tree-style node graph, vertical scroll
- Three top branches: **Flört**, **İş**, **Banter** with mode icons
- Visible nodes under Flört: "İlk mesaj" (unlocked, gold), "Tone calibration" (unlocked), "Coffee invite" (in progress, half), "Awkward silence" (locked, padlock)
- Connecting curved lines between nodes (Duolingo-aware but flatter)
- Progress ring around active node

**Caption (TR):**
> Üç mod, sıfır tabu. Bir yerden başla.

**Caption (EN):**
> Three modes, zero taboo. Start anywhere.

> *Why:* Shows scope without listing 50 features.

---

### 6. Daily Quests — Today's Card

**On screen:**
- "Bugün" / "Today" header with date
- Three quest cards stacked:
  1. **3 Tinder sahnesi tamamla** — checkbox 1/3, reward icon
  2. **15 dakika konuş** — progress bar 8/15 min
  3. **Yeni başarı: Streak 14** — locked, hint visible
- Bottom: small banner — "Quest tamamla → Streak donmuyor"

**Caption (TR):**
> Günlük görevler, oyunlaştırma değil — momentum.

**Caption (EN):**
> Daily quests build momentum, not addiction.

> *Why:* "Quests" is a familiar pattern but we're reframing it. Honest copy.

---

### 7. Achievement Unlock — Toast / Celebration

**On screen:**
- Screen darkened in the background (faded chat behind)
- Center: full-width celebration card
- Lottie-style confetti burst illustration (static frame for screenshot)
- Header: **Yeni Başarı**
- Badge: large icon (gold gradient)
- Title: **"Donma Refleksini Yendin"**
- Subtitle: *"10 art arda Tinder sahnesini takılmadan tamamladın."*
- Below: faint stat *"Sadece kullanıcıların %8'i"*

**Caption (TR):**
> Donmadan tamamladın. Refleks artık başka.

**Caption (EN):**
> You stopped freezing. Reflexes shift.

> *Why:* Emotional moment. The badge name itself ("Donma Refleksini Yendin" = "You beat the freeze reflex") sells the product better than any feature copy.

---

### 8. TTS / Pronunciation — Listen & Repeat

**On screen:**
- Centered card: English phrase **"Hey, I noticed you're into rock climbing too"**
- Speaker icon (large, animated wave bars indicating playback)
- Below phrase: Turkish gloss in muted gray — *"Selam, senin de tırmanışa ilgi duyduğunu fark ettim"*
- Bottom: two buttons side by side — `Dinle` (Listen, with headphone icon), `Söyle` (Speak, with mic icon)
- Tiny footnote: *"Türkçe konuşana özel telaffuz ipuçları"*

**Caption (TR):**
> Dinle, söyle, telaffuzunu geliştir.

**Caption (EN):**
> Listen, speak, improve pronunciation.

> *Why:* Manifest boşken native-human audio veya premium TTS vaadi verilmez; mevcut ürün değeri sesli pratik + telaffuz ipuçları olarak anlatılır.

---

### 9. Fluency Dashboard — Profile

**On screen:**
- User avatar (illustration), display name placeholder *"Berk K."*
- Big card: **Akıcılık** / **Fluency** with score `B1+` and progress arc
- Three skill bars below with mini labels:
  - **Flört:** ████████░░ 78%
  - **İş:** █████░░░░░ 52%
  - **Banter:** ██░░░░░░░░ 21%
- Below: small "haftalık trend" sparkline (going up)
- Bottom badge cluster: 3 earned achievements (small icons)

**Caption (TR):**
> Akıcılığın anlık görünür. CEFR seviyeyle.

**Caption (EN):**
> Your fluency, visualized. Mapped to CEFR.

> *Why:* CEFR (A1/A2/B1...) is the reference Turks know from YDS/IELTS world. Connects familiar credentialing to the unfamiliar metric.

---

### 10. Modes Overview — What's Inside

**On screen:**
- Title strip: **3 Mod, Sıfır Tabu** / **3 Modes, Zero Taboo**
- Three large mode tiles stacked vertically, each with:
  - **Flört Modu** — Tinder icon · "150+ sahne" · sample line preview
  - **İş Modu** — Slack icon · "180+ sahne" · sample line preview
  - **Banter Modu** — bar/glass icon · "170+ sahne" · sample line preview
- Bottom: CTA strip *"Ücretsiz başla"*

**Caption (TR):**
> Hayatın hangi sahnesinde donuyorsun?

**Caption (EN):**
> Which scene leaves you frozen?

> *Why:* Closer that returns to the core question, invites swipe-back to frame 1 or download tap.

---

## Frame Ordering Logic

| Order | Purpose | Visible in search auto-preview (first 3)? |
|---|---|---|
| 1 | Brand recognition | Yes |
| 2 | Memorable / shareable hook (Tinder) | Yes |
| 3 | Product mechanic (correction in Turkish) | Yes |
| 4 | Anti-Duolingo positioning | No |
| 5 | Scope (three modes) | No |
| 6 | Engagement loop | No |
| 7 | Emotional payoff | No |
| 8 | Premium feature signal (TTS) | No |
| 9 | Progress trust (CEFR) | No |
| 10 | Closing question / CTA | No |

> *Apple shows the first 3 in search results auto-preview. Those three carry 80% of conversion weight. Lock those down before sweating frames 4-10.*

---

# App Preview Video — 30 Second Script

> Apple App Preview specs: 15-30 seconds, vertical 1080×1920 (or higher device-specific), max 500 MB, .mov / .mp4 / .m4v, captured from actual app (or rendered close to it). Apple rejects videos with non-functional UI or marketing-style cuts that aren't representative of the app.

**Total duration:** 30 seconds
**Scene length:** 3 seconds each = 10 scenes
**Background music:** soft electronic, low BPM, no lyrics
**Captions on screen:** Turkish primary, English version uploaded separately for EN locale

---

### Scene 1 (0:00 - 0:03) — Cold Open
**Visual:** Phone unlock, Lafla app icon on home screen, finger tap, app opens.
**On-screen text:** None.
**Voiceover/sound:** Phone unlock sound, app open whoosh.

### Scene 2 (0:03 - 0:06) — Tinder Match
**Visual:** A Tinder-style match card appears. "It's a match" toast. Camera tilts down to chat composer with cursor blinking.
**On-screen text (TR):** *"Donma anı."* (The freeze moment.)
**On-screen text (EN):** *"The freeze moment."*

### Scene 3 (0:06 - 0:09) — User Types, Hesitates
**Visual:** User starts typing "I'm bored from..." Cursor blinks. Visible hesitation (typing pauses on screen).
**On-screen text:** None — let the typing speak.

### Scene 4 (0:09 - 0:12) — Real-Time Correction
**Visual:** Mid-sentence, a soft underline appears under "bored from". A correction card slides up.
**On-screen text:** Card content visible — *"bored of"* in green, Turkish explanation underneath.
**Sound:** Subtle ding.

### Scene 5 (0:12 - 0:15) — Correction Card Detail
**Visual:** Zoom into the correction card. Turkish text reads: *"`bored from` değil — Türkçe'den direkt çevirme."*
**On-screen text:** None — the correction card is the message.

### Scene 6 (0:15 - 0:18) — Mode Swipe
**Visual:** User swipes from Flört Modu card → İş Modu card → Banter Modu card. Three quick swipes, mode tiles flying past.
**On-screen text (TR):** *"3 Mod. Sıfır tabu."*
**On-screen text (EN):** *"3 modes. Zero taboo."*

### Scene 7 (0:18 - 0:21) — Skill Tree Glance
**Visual:** Skill tree appears, camera pans across a few nodes. Tap on a node, it opens.
**On-screen text:** None. Tree shape carries it.

### Scene 8 (0:21 - 0:24) — Achievement Unlock
**Visual:** Lottie celebration. Badge: *"Donma Refleksini Yendin."* (You beat the freeze reflex.)
**On-screen text:** The badge name itself is the text.

### Scene 9 (0:24 - 0:27) — TTS Playback
**Visual:** Speaker icon pulses. Phrase visible: *"Hey, I noticed you're into rock climbing too."* Audio plays softly under music.
**On-screen text:** None — the audio carries.

### Scene 10 (0:27 - 0:30) — Brand Closer
**Visual:** Fade to dark purple gradient. Lafla logo center. Tagline beneath.
**On-screen text (TR):** **Söyle gitsin.** *lafla.app*
**On-screen text (EN):** **Just say it.** *lafla.app*
**Sound:** Music resolves, soft whoosh out.

---

## Production Notes

**Capture method:**
- Record on a real iPhone 14 Pro Max (or 6.7" sim if needed) via QuickTime screen mirror
- Use a seeded demo account with pre-populated state (47 scenarios done, "Donma Refleksi" badge ready to unlock on Scene 8)
- Pre-script all user typing so it looks natural — not too fast, not too slow

**Caption rendering:**
- Captions burned in at post-production, NOT relying on Apple's auto-caption (which is unreliable for Turkish)
- Font: Inter Bold 48pt, white on 50% black gradient overlay at bottom 15% of frame
- Position consistent across all scenes (bottom-15% safe zone, above home indicator)

**Music:**
- License from Artlist or Musicbed
- Tempo 80-90 BPM
- No vocals (Apple recommends this for App Previews — vocals fight on-screen captions)
- Fade in 0:00-0:02, fade out 0:28-0:30

**Variants to produce:**
- TR version (uploaded to TR locale)
- EN version (uploaded to EN-US locale) — same visuals, English captions burned in
- Optional: 15-second cut for social media campaigns (uses scenes 2, 4, 6, 8, 10)

**Localization tooling:**
Use the same source After Effects (or CapCut) project. Two text layers per scene — TR layer and EN layer. Toggle layer visibility, export twice.

---

## Asset Checklist (Pre-Submission)

| Asset | Spec | Status |
|---|---|---|
| 6.7" screenshots × 10 (TR) | 1290 × 2796 px | TODO |
| 6.7" screenshots × 10 (EN) | 1290 × 2796 px | TODO |
| App Preview video (TR) | 1080 × 1920, <500 MB, 15-30s | TODO |
| App Preview video (EN) | 1080 × 1920, <500 MB, 15-30s | TODO |
| App icon | 1024 × 1024 px PNG, no transparency, no rounded corners (Apple adds them) | TODO |
| Privacy policy page | live at lafla.app/privacy | TODO |
| Support page | live at lafla.app/help | TODO |
| Marketing page | live at lafla.app | TODO |

---

## Open Decisions

1. **Device size:** ship 6.7" only for v0.1.0, upgrade to 6.9" later? Or jump straight to 6.9"?
2. **Localized screenshots:** ship both TR and EN for v0.1.0, or TR-only and add EN later?
3. **Preview video:** record from real app footage, or partially mocked (since beta build may not have all polished animations)?
4. **Sample names in screenshots:** "Emma, 24" for Tinder card — Apple usually accepts but be ready to swap if reviewer flags it.
5. **Real Slack/Tinder branding:** the storyboard mentions these by name in captions. We should NOT show their actual logos in screenshots — paraphrase as "dating app" / "team chat" visually, but keep brand names in captions/copy as comparisons (covered by nominative fair use).
