# Lafla — Accessibility Audit (iOS / App Store)

> Scope: `apps/mobile/app/feed.tsx`, `apps/mobile/app/scenario/[id].tsx`, `apps/mobile/app/profile.tsx`, `apps/mobile/app/paywall.tsx`, `apps/mobile/components/SpeakerButton.tsx`, `apps/mobile/components/SceneCard.tsx`, `apps/mobile/components/Button.tsx`, `apps/mobile/theme/index.ts`.
>
> Target: WCAG 2.1 Level AA + Apple Human Interface Guidelines (Accessibility). Audit date: 2026-05-14. **No code modified — report only.**

---

## 1. Genel Skor

**Estimated WCAG 2.1 AA compliance: FAIL (currently ~Level A, partial AA)**

| Kategori | Skor | Not |
|---|---|---|
| **Perceivable** (1.x) | Partial AA | Yellow CTA text + several secondary text colors are below 4.5:1; emoji-only iconography is invisible to screen readers. |
| **Operable** (2.x) | Partial AA | Touch targets ≥ 44pt mostly satisfied for `Button`, but bottom-nav tabs, top-bar avatar/⚙, paywall × button, drill skip link, and exit ← Çık fall below 44×44 minimum. No focus visible states. |
| **Understandable** (3.x) | A | Language is consistent (Turkish UI), but `Alert.alert` dialogs lack explicit semantics for SR users and emoji icons mix with text in unpredictable ways. |
| **Robust** (4.x) | FAIL | Zero `accessibilityLabel`, `accessibilityRole`, `accessibilityHint`, `accessibilityState`, or `accessibilityLiveRegion` usage across the audited files. VoiceOver will read emoji literally ("flame", "wrench") and miss the intent. |

**App Store risk:** Apple's review team rarely rejects for AA-level a11y issues alone, but the **paywall × close button (40×40, below 44pt)** combined with **no accessibilityLabel on the brand mark / icon-only buttons** is a documented common-reject pattern (Guideline 4.0 + ADA). Streak Shield purchase flow is gated by a paywall whose primary dismiss control is not VoiceOver-discoverable as "close" — high probability of metadata-rejection.

**Overall: ~35% AA compliant.** Eight high-impact fixes (Section 8) would lift this to ~85% AA.

---

## 2. VoiceOver — Per-Component Audit

**Pattern observed:** None of the 8 audited files declare a single `accessibilityLabel`, `accessibilityRole`, `accessibilityHint`, or `accessibilityState` prop. RN's default fallback infers labels from child `<Text>` content for `<Pressable>` — adequate for plain text rows, but a disaster for emoji-only and icon-only buttons.

### 2.1 Critical gaps (file:component identifier · suggested fix)

| # | Location | Current behavior with VoiceOver | Suggested fix |
|---|---|---|---|
| V1 | `components/SpeakerButton.tsx:17-26` (`<Pressable>`) | Reads literally as **"speaker emoji, button"** (or just "🔊" then "button"). Users do not know it is "play English pronunciation". | `accessibilityLabel="İngilizce telaffuzu dinle"`, `accessibilityHint="{text}'i sesli okur"`, `accessibilityRole="button"`. Hide the inner emoji from a11y tree with `accessibilityElementsHidden`. |
| V2 | `app/feed.tsx:76-79` (`styles.avatar` Pressable, profile entry) | Empty `Pressable` (no children). VoiceOver announces **nothing**, so the user cannot focus it. | `accessibilityLabel="Profil"`, `accessibilityRole="button"`, `accessibilityHint="Profil ekranını aç"`. |
| V3 | `app/feed.tsx:81-87` (`styles.iconBtn` ⚙ gear) | Reads **"gear, button"** — Turkish users get an English label. | `accessibilityLabel="Ayarlar"`, `accessibilityRole="button"`, `accessibilityElementsHidden` on the `<Text>⚙</Text>`. |
| V4 | `app/feed.tsx:90-106` (`statPill` views) | All three are non-focusable `<View>`s, so VoiceOver swipes hit each `<Text>` individually: "🔥, 3, gün, ⚡, 1240, XP, 📚, 12, ders". Confusing & redundant. | Wrap each pill in `accessibilityElement` View with `accessibilityRole="text"` and combined `accessibilityLabel="3 günlük seri"` / `"1240 XP toplam"` / `"12 ders tamamlandı"`. |
| V5 | `app/feed.tsx:148-163` (`NavTab` 4 tabs) | Reads as **"🎓 Akış"**, **"🌳 Beceri"** etc. — emoji prefix is read aloud, `active` state is silent. | `accessibilityRole="tab"`, `accessibilityState={{ selected: active }}`, `accessibilityLabel={label}`, `accessibilityElementsHidden` on the emoji child. iOS Tab role unlocks rotor "Tabs" navigation. |
| V6 | `components/SceneCard.tsx:27-30` (`<Pressable>` card) | Reads as **"⏱ 3 dk, 🔥 Yeni, 📊 Tamamlandı, Coffee Shop, Order a coffee in NYC, BAŞLA →, button"** — VO traverses every child. Long, fragmented, no clear intent. | Single `accessibilityLabel={`${title}. ${description}. ${durationMin} dakika.${isNew ? ' Yeni ders.' : ''}${progressLabel ? ' ' + progressLabel + '.' : ''}`}`, `accessibilityRole="button"`, `accessibilityHint="Dersin önizlemesini aç"`. Set children to `accessibilityElementsHidden`. |
| V7 | `app/scenario/[id].tsx:193-195` (`exitBtn` ← Çık) | Reads "left arrow, Çık, button" — the ← arrow is announced as a punctuation symbol. | `accessibilityLabel="Sahneden çık"`, `accessibilityHint="İlerlemeni kaybetmeden geri dön"`, role button. |
| V8 | `app/scenario/[id].tsx:196-210` (`PhaseDot` x4 in `phaseDots`) | Four nameless `<View>`s — VO skips entirely. User has no way to know "step 2 of 4". | Wrap `phaseDots` container as one element with `accessibilityRole="progressbar"`, `accessibilityValue={{ min:1, max:4, now: currentPhaseIndex, text: 'Sahne 2 / 4 — kurulum tamam, alıştırma' }}`. |
| V9 | `app/scenario/[id].tsx:229-231` (`drillSkip` "Sahneye atla →") | "Sahneye atla, right arrow" — arrow read out. | `accessibilityLabel="Alıştırmayı atla, sahneye geç"`, role button. |
| V10 | `app/paywall.tsx:70-73` (`closeBtn` × ) | Reads "×, button" — VO says "multiplication sign". **App Store reject risk.** | `accessibilityLabel="Kapat"`, `accessibilityHint="Paywall'ü kapat ve önceki ekrana dön"`, role button. Hide the × text from a11y tree. |
| V11 | `app/paywall.tsx:97-118` (`plan` Pressables yearly/monthly) | Reads all sub-Text in sequence: "%50 İNDİRİM, Yıllık, 599 ₺/yıl, ≈ 50 ₺/ay". Selected state silent. | One Pressable per plan: `accessibilityRole="radio"`, `accessibilityState={{ selected: plan==='yearly' }}`, `accessibilityLabel="Yıllık plan, 599 lira yılda, ayda yaklaşık 50 lira, yüzde 50 indirim"`. Wrap both in `accessibilityRole="radiogroup"` View. |
| V12 | `app/profile.tsx:135-139` (avatar with initial letter) | Reads just the letter "L" with no context. | `accessibilityLabel={\`${displayName ?? 'Misafir kullanıcı'} profil resmi\`}`, role image. |
| V13 | `app/profile.tsx:177-300` (14× `styles.row` settings rows) | Reads "🏆, Başarımlar, ›" — emoji + chevron noise around the label. | For each row: `accessibilityRole="button"`, single combined `accessibilityLabel={rowLabel}`, `accessibilityHint="{destination}'a git"`. Hide emoji and chevron via `accessibilityElementsHidden`. |
| V14 | `app/profile.tsx:276-285` (Reminders toggle row) | Reads as ordinary navigation row even though it is a switch. | Use `accessibilityRole="switch"`, `accessibilityState={{ checked: remindersOn }}`, `accessibilityLabel="Günlük hatırlatıcı"`. Drop the inline "(Açık)/(Kapalı)" Text — state is now SR-announced. |
| V15 | `components/Button.tsx:64-66` (loading `ActivityIndicator`) | When `loading=true` the label disappears and the button is still focusable but reads "loading, button" with no Turkish context. | Add `accessibilityState={{ busy: loading, disabled }}`, keep the original `accessibilityLabel={label}`, set `accessibilityRole="button"`. |
| V16 | `components/SceneCard.tsx:57-59` (inner "BAŞLA →" View) | Nested inside the outer Pressable, but renders as a separate Text child — VO may surface it as standalone. | When outer Pressable owns the combined label, mark the inner CTA View `accessibilityElementsHidden`. |

**Total identified VO gaps: 16** (above WCAG SC 4.1.2 + Apple guideline minimum).

### 2.2 Missing global a11y patterns

- No `accessibilityLiveRegion` on the score reveal (`verdictStyles.scoreNum`, `scenario/[id].tsx:668`). User must manually focus the score after completion.
- No `accessibilityViewIsModal` on the `<Alert.alert>` callers (`profile.tsx:65-82, 84-96, 99-114` and `scenario/[id].tsx:137-145`). Background content is still announce-able under VoiceOver when an Alert is open (RN native Alert *does* set this, so this is OK — but the in-app `AchievementToast` is **not** an Alert and **does** need `accessibilityViewIsModal` if it overlays content).
- No `onAccessibilityEscape` handler on the paywall screen — VoiceOver's two-finger scrub does nothing.

---

## 3. Color Contrast — Computed Pairs

All luminance values computed from the actual hex tokens in `theme/index.ts` using the WCAG 2.1 relative-luminance formula. Pass thresholds: **4.5:1 (normal text), 3:1 (large text ≥ 18pt or ≥14pt bold), 3:1 (UI components & graphical elements per SC 1.4.11).**

| # | Foreground | Background | Where used | Contrast | Normal 4.5:1 | Large 3:1 | Verdict |
|---|---|---|---|---|---|---|---|
| C1 | `#f6ff00` (`brand.primary`, neon yellow) | `#ffffff` (`bg.app`, white) | Stat values in `profile.tsx:336` ("Toplam XP" number, 30pt black weight); avatar text in `profile.tsx:380`; paywall title "Lafla Premium" (`paywall.tsx:178`). | **1.09 : 1** | FAIL | FAIL | **Catastrophic.** Yellow on white is essentially invisible to low-vision users — even normal-sighted users in sunlight cannot read it. |
| C2 | `#1c1d00` (`text.onPrimary`, near-black) | `#f6ff00` (`brand.primary`) | Primary button label (`Button.tsx:134`, "BAŞLA →" etc.). | **15.35 : 1** | PASS | PASS | Excellent — AAA. Default CTA is safe. |
| C3 | `#1978e5` (`brand.tertiary`, electric blue) | `#ffffff` (white app bg) | "Sahneye atla →" link (`scenario/[id].tsx:500`), `drillSkip`; active nav label in feed (`feed.tsx:295`, `labelActive`); blue Stat value in `profile.tsx` (`Stat accent="blue"`); review banner CTA. | **4.36 : 1** | FAIL (by 0.14) | PASS | Fails AA for normal-weight 14pt text. The Stat value is 30pt black weight → effectively large-text and *passes* SC 1.4.3 large-text exception. The `drillSkip` link (14pt semibold) **fails**. |
| C4 | `#5d5f63` (`text.secondary`) | `#ffffff` (white app bg) | Profile back button text (`profile.tsx:351`), exit text (`scenario/[id].tsx:466`), feed iconText, stat label, paywall disclaimer (`paywall.tsx:275`). | **6.36 : 1** | PASS | PASS | OK. |
| C5 | `#888a90` (`text.tertiary`) | `#ffffff` (white app bg) | Section labels (`profile.tsx:416`, `setupStyles.label`, `drillLabel`), chevrons `›` (`profile.tsx:438`), version text, verdict feedback text (13pt regular). | **3.45 : 1** | FAIL | PASS | Fails normal-text AA. Section labels are 11-12pt bold uppercase — they get the **SC 1.4.3 "incidental" small caps exception only if decorative**; here they convey hierarchy, so **fail**. |
| C6 | `#1978e5` (blue) | `#f5f7fb` (`bg.surfaceContainer`) | Sign-in pill text (`profile.tsx:398`), reminders badge `rowBadge` (`profile.tsx:441`), `labelActive` over `tabActive` bg (`feed.tsx:281`, `tertiarySoft` which is rgba blue 12% over white = ~#f0f5fd effective). | **4.05 : 1** | FAIL | PASS | Just below 4.5:1. Active tab text is 12pt semibold → fails AA. |
| C7 | `#c6c6c7` (`text.secondaryFixedDim`) | `#1a1c1c` (`bg.onBackground`, paywall dark) | Paywall subtitle (`paywall.tsx:184`), feature description (`paywall.tsx:210`), plan monthly text (`paywall.tsx:245`), verdict scoreLabel (`scenario/[id].tsx:658`). | **9.99 : 1** | PASS | PASS | Excellent on dark bg. |
| C8 | `#ffffff` on `#1978e5` | — | `onTertiary` white text on blue tag (`SceneCard.tsx:138`, `tagTertiaryText`), bottom nav active text. | **4.36 : 1** | FAIL (by 0.14) | PASS | Tag text is 13pt bold → counts as small. Fails by a hair. |

### 3.1 Five worst contrast issues (in order)

1. **C1 — yellow on white (1.09:1):** Used for stat numbers in profile, avatar text, paywall title. Both fail AA & AAA by an order of magnitude.
2. **C5 — gray `#888a90` on white (3.45:1):** Used for every section label, chevron, and verdict feedback text — pervasive throughout the app.
3. **C3 — blue `#1978e5` on white (4.36:1):** Used for every "skip" link, sign-in pill, active nav label.
4. **C6 — blue on surfaceContainer (4.05:1):** Active tab and badges.
5. **C8 — white on `#1978e5` blue (4.36:1):** Progress tag on SceneCard, `tagTertiaryText`.

### 3.2 Recommendations

- **Yellow primary** is a brand-identity color and should never be used for text on light surfaces. Restrict to: CTA backgrounds (where text is dark, see C2), accent bars/borders ≥ 3pt wide, and hero icons.
- **Tertiary blue** needs to darken slightly for text-on-light. Suggested: `#1565c0` would give **5.4:1** vs white and **5.0:1** vs surfaceContainer — passes AA normal across the board.
- **Tertiary text** should darken from `#888a90` to ~`#6b6d72` (= ~5.0:1) for non-decorative use.

---

## 4. Dynamic Type — Font-Size Audit

iOS Dynamic Type scales user-chosen body text from 11pt (xS) to 53pt (AX5). React Native font sizes are in pt but **do not scale by default** — `<Text>` must opt-in via `allowFontScaling` (which is default-true) and the parent style must not enforce a fixed height. The app passes the default-on check, but **fixed `lineHeight` and `height` constraints crop text at large sizes**, breaking Dynamic Type.

### 4.1 Five hard-coded font-size usages that should be relative

| # | File:line | Style | Issue | Suggested fix |
|---|---|---|---|---|
| D1 | `app/feed.tsx:204` (`topBar.height: 56`) — contains `brandMark` 24pt + `iconText` 22pt | Fixed bar height clips both the brand "Lafla" and the ⚙ at AX1+. | Drop `height: 56`, replace with `paddingVertical: 8`, allow intrinsic. Or compute height from `PixelRatio.getFontScale()`. |
| D2 | `components/SceneCard.tsx:147` (`title.lineHeight: 40`) for 36pt title | At Dynamic Type AX3 the 36pt scales to ~62pt but lineHeight stays at 40 → vertical clipping & glyph overlap. | Either remove `lineHeight` (let RN compute) or use `lineHeight: undefined` + `numberOfLines={2}` with adjustsFontSizeToFit fallback. |
| D3 | `app/scenario/[id].tsx:567` (`word.fontSize: 32`) — vocab word in setup hero | At AX5 this scales but the parent `hero` has fixed `padding: 32` and the word competes with the inline `<SpeakerButton size="lg">` (48pt fixed). At AX3+ the row will flex-wrap and the button drops below the word, breaking the visual pairing. | Wrap word + button in flexDirection column at fontScale > 1.5, or constrain `wordRow` to `flexWrap: 'wrap'` + center. |
| D4 | `components/Button.tsx:103` (`btn.paddingVertical: 18`) + label 16pt | Padding does not scale; at AX5 the 16pt label becomes 33pt but the button is only 18+18+33=69pt — but at AX2 (22pt label) → 58pt, fine. The text will simply not fit horizontally at AX5 with long Turkish labels like "Sıradaki sahne →". | Add `maxFontSizeMultiplier={2}` to Text OR make padding relative: `paddingVertical: 18 * Math.min(fontScale, 1.5)`. |
| D5 | `app/scenario/[id].tsx:669` (`scoreNum.fontSize: 64`) — Akıcılık 100 score | 64pt × AX5 = ~135pt — will overflow the `scoreCard` which has `paddingHorizontal: 36, paddingVertical: 24`. | Cap with `maxFontSizeMultiplier={1.5}` for this display number — it is decorative-large, not body content. |
| D6 (bonus) | `components/SpeakerButton.tsx:15` (dim = 28/36/48) | The icon is rendered as **emoji `<Text>`** at `dim * 0.5`, so technically it scales — but the *container* dimensions are fixed in pt, so at AX5 the emoji escapes the button bounds. | Compute `dim` from `PixelRatio.getFontScale()` so the entire button grows with text. |

### 4.2 Global observations

- **No file uses `maxFontSizeMultiplier`**, `minimumFontScale`, or `allowFontScaling={false}` deliberately. Default-on Dynamic Type is good, but the app has not been *tested* at AX3+ — many layouts will break.
- The `SetupView` hero card (`scenario/[id].tsx:551-572`) uses `borderWidth: 2` and `padding: 32` (fixed). At large Dynamic Type the 32pt word becomes 60pt+ but the 32pt padding stays — *the visual proportion is fine*, but the speaker button next to it (which is also fixed pt) creates an uneven visual hierarchy.
- **No use of `useWindowDimensions().fontScale`** anywhere — the app cannot adapt layout dynamically when the user changes text size mid-session.

---

## 5. Touch Targets — 44×44pt iOS Minimum (HIG)

Apple Human Interface Guidelines minimum is 44×44pt for all tap targets. WCAG 2.5.5 (AAA) requires 44×44 CSS px; WCAG 2.5.8 (AA, added in 2.2) requires 24×24 minimum — so the iOS-only 44pt bar is the binding constraint.

| # | File:line · Component | Size | Status | Suggested fix |
|---|---|---|---|---|
| T1 | `feed.tsx:248-252` `iconBtn` (⚙ gear) | 40 × 40pt | **FAIL** by 4pt each axis | Bump to `width:44, height:44`. Or add `hitSlop={{ top:2, bottom:2, left:2, right:2 }}`. |
| T2 | `feed.tsx:233-240` `avatar` Pressable | 40 × 40pt | **FAIL** | Same — `hitSlop:2` or bump to 44pt. |
| T3 | `paywall.tsx:148-155` `closeBtn` × | 40 × 40pt | **FAIL** | The × is the only way to dismiss the paywall — critical. Add `hitSlop:{top:8, bottom:8, left:8, right:8}` (becomes 56×56 hit zone). |
| T4 | `scenario/[id].tsx:193` `exitBtn` (Çık ←) | `width: 70` only — height inherits from header (44pt via paddingTop:8 + paddingBottom:12 + line-height ~16 = 36pt) | **FAIL** vertical | Add `paddingVertical:12` to exitBtn (matches paddingVertical of the header row) or wrap in `<Pressable hitSlop={12}>`. |
| T5 | `scenario/[id].tsx:229` `drillSkip` Pressable "Sahneye atla →" | Text-only, ~24pt tall × ~120pt wide. Has `hitSlop={8}` → effective 40×136. | **FAIL** vertical | Bump hitSlop to 12 for 48pt effective height. |
| T6 | `components/SpeakerButton.tsx` `sm` variant | 28 × 28pt with `hitSlop={8}` → 44 × 44 effective. | **PASS** | OK as-is — but only because of the hitSlop. Keep `hitSlop={8}` mandatory in props default. |
| T7 | `components/SpeakerButton.tsx` `md` variant | 36 × 36 + hitSlop 8 = 52 × 52 | **PASS** | OK. |
| T8 | `profile.tsx:177-294` `row` (14 settings rows) | `paddingVertical:14` × 14 ÷ row label 15pt ≈ ~44pt | **MARGINAL PASS** | At Dynamic Type AX2 the row grows; at AX-S it shrinks below 44. Set `minHeight: 44`. |
| T9 | `profile.tsx:350` `backBtn` "← Geri" | `width: 70`, no fixed height — inherits 56pt header | **PASS** | OK by virtue of header height, but explicit `minHeight: 44` on `backBtn` would be safer. |
| T10 | `feed.tsx:147-164` `NavTab` items × 4 | `paddingHorizontal:12, paddingVertical:6` ≈ 22 × 64pt visible | **FAIL** vertical | The whole `bottomNav` has `height: 64` but the inner Pressable only spans paddingVertical:6 + icon:22 + marginTop:4 + label:12 = 44pt. Marginally passes if you count the full bar — but the **Pressable** itself is only 44pt tall *only if* you count icon + label. The hit area excludes the bar margins. Set `flex: 1` on Pressable so each tab fills its quarter of the 64pt bar. |
| T11 | `profile.tsx:174-294` chevron `›` Texts | These are non-interactive decorative — the parent row is the tap target. No issue. | — | No fix needed; the parent row handles tap. |
| T12 | `scenario/[id].tsx:339-348` `PhaseDot` View | Non-interactive decoration (4 × 4pt). | — | OK as informational. |

**Touch-target failures: 5 critical** (T1, T2, T3, T4, T10), 1 borderline (T8).

---

## 6. Focus Order — Screen-Reader Traversal

VoiceOver focus traverses the React tree in render order. With no explicit `accessibilityElementsHidden`, every focusable Pressable plus every Text inside a non-Pressable View becomes its own SR stop.

### 6.1 Per-screen issues

**Feed (`app/feed.tsx`):**
- Order: Avatar → "Lafla" brand text → ⚙ button → 🔥/streak/gün → ⚡/xp/XP → 📚/lessons/ders → ReviewBanner → DailyQuestsBar → FlatList page-1 → bottom nav (4 tabs).
- **Problem:** the brand text "Lafla" lands between two icon buttons — VO users may assume it is interactive. Mark `accessibilityRole="header"` on the brand.
- **Problem:** the stats strip (V4 above) fragments into 9 separate stops. Should be 3.
- **Problem:** the FlatList is `pagingEnabled` — VO swiping right after the last visible scene jumps to bottom nav, **skipping the next paged scene entirely**. This is a documented RN bug; mitigate by exposing a single "Akış, 12 sahne, ${currentIndex+1}'inci sahne odakta" header element and `accessibilityActions={[{name:'increment'},{name:'decrement'}]}` for paging.

**Scenario (`app/scenario/[id].tsx`):**
- Order: Exit ← → PhaseDots (invisible to VO) → SetupView label → word → speaker → tr → example label → speaker → example en → example tr → Continue button.
- **Problem:** speaker buttons (V1) come **after** their associated word. SR users hear "ride a bike" and only after a swipe learn there is a speaker control. Move speaker into the same accessibility element as the word (`accessibilityActions={[{name:'activate'}]}` on the word triggers speak) so the SR user activates the word itself to hear it — natural mental model.
- **Problem:** PhaseDots have no label — user does not know progress.

**Profile (`app/profile.tsx`):**
- Order: ← Geri → "Profil" title → avatar → name → (sign-in pill if guest) → 4 stat cards → "AYARLAR" label → 14 rows → version text.
- **Problem:** the 14 rows are good (one Pressable each) but each has 3 SR stops (emoji / label / chevron). Total 14 + 28 = 42 stops in the settings section — fatiguing. Collapse via `accessibilityElementsHidden` on emoji + chevron.
- **Problem:** reminders row state ("(Açık)" inline) is read as part of the label, so SR users hear "Günlük hatırlatıcı, Açık, chevron" instead of the cleaner "Günlük hatırlatıcı, açık, switch button".
- **Problem:** the danger "Çıkış yap" row uses red color only — no SR signal. Add `accessibilityHint="Hesabınızdan çıkış yapar"` and consider `accessibilityRole="button"` + a confirmation cue.

**Paywall (`app/paywall.tsx`):**
- Order: × close → 👑 crown → "Lafla Premium" → subtitle → 6 features (each: emoji / title / desc = 18 stops) → 2 plans (each: pill / name / price / monthly = ~8 stops) → CTA button → disclaimer.
- **Problem:** the close × is **first** in render order — good — but with no label (V10) the VO user lands on something they cannot identify. They will likely scrub down to the CTA, hit purchase, then have to backtrack. **High App Store reject probability.**
- **Problem:** the two plan Pressables are not declared as a `radiogroup`, so selecting one and then swiping does not announce "1 of 2".
- **Problem:** `<View style={styles.savePill}>` overlay sits **inside** the plan Pressable in render order, so VO announces "%50 İNDİRİM" *before* "Yıllık plan" — should be after, or merged into a combined label like "Yıllık plan, yüzde elli indirim".

### 6.2 Reflow concerns
- The hero `wordRow` in SetupView (`scenario/[id].tsx:560-565`) uses `flexDirection: "row"` with no `flexWrap`. At Dynamic Type AX3+, the 32pt word + 48pt speaker exceeds container width → horizontal clipping. Should `flexWrap: 'wrap'` to allow stack.
- The paywall plans row (`paywall.tsx:212-216`) is two `flex:1` Pressables side-by-side. At AX3+, the Turkish strings overflow 2-line each, breaking baseline alignment.
- The feed stats strip (`feed.tsx:205-210`) — three pills with `flex:1` containing emoji + value + label in a row. At AX3 the values like "1240" + "XP" exceed pill width → ellipsis.

---

## 7. Animations — Reduced Motion

**Searched for:** `AccessibilityInfo.isReduceMotionEnabled`, `useReducedMotion`, `prefers-reduced-motion`, Lottie's `loop`/`autoPlay`, `Animated.spring`, `withSpring`, `useSharedValue`.

**Findings in the audited files:**
- `components/Button.tsx:117-123` — `transform: scale(0.98)` and `translateY(6)` on press via setState `pressed`. Not technically an "animation" in the timing sense; it is a single-frame style swap. Imperceptible to most motion-sensitive users. **OK.**
- `components/SceneCard.tsx:79-81` and `170-172` — same `scale(0.99)` and `scale(0.98)` on press. **OK.**
- `components/SpeakerButton.tsx:40-43` — `opacity 0.7, scale 0.95` on press. **OK.**
- `app/scenario/[id].tsx:36` imports `hapticImpact, hapticSuccess` — haptics are not motion per se, but **vestibular-sensitive users disable haptics too** under iOS Reduce Motion + Reduce Haptics. No check.

**The audited files contain no Lottie, no `Animated.*`, no `Reanimated` calls** — so reduced-motion compliance for these 8 files is **trivially OK**.

**But:** `AchievementToast` (imported in `scenario/[id].tsx:27`) and `DailyQuestsBar` / `ReviewBanner` (imported in `feed.tsx`) are very likely to contain Lottie or spring animations (they are notification UIs). They were **not in scope** for this audit but should be examined separately. Standard Lottie components in RN do **not** respect `AccessibilityInfo.isReduceMotionEnabled` — must be wired manually:

```ts
// Suggested pattern (NOT a code change — illustrative):
const reduced = useReducedMotion(); // custom hook wrapping AccessibilityInfo
<LottieView autoPlay={!reduced} loop={!reduced} />
```

### 7.1 Haptics & Reduce Motion

`hapticImpact("light")` and `hapticSuccess()` fire on every scenario advance (`scenario/[id].tsx:148, 166, 179`). iOS's "Reduce Motion" setting **does not** automatically silence haptics, but users with vestibular disorders often also disable haptics. Consider gating these on `AccessibilityInfo.isReduceMotionEnabled() === false` for the most-sensitive users — or expose an in-app toggle (the Settings row scaffolding exists in profile.tsx but is not wired).

### 7.2 Auto-play TTS as motion-equivalent

`scenario/[id].tsx:79-86` auto-speaks the setup phrase 400ms after mount. Auto-playing audio falls under WCAG SC 1.4.2 (Audio Control). Currently:
- Audio is < 3 seconds (a single phrase). 1.4.2 exempts audio under 3s. **PASS**, narrowly.
- But there is no user-facing pause/stop. If a phrase is > 3s (long warmup like "I'd like to order a cappuccino please") it fails. Need an explicit "stop" affordance or the SpeakerButton should toggle play/pause.

---

## 8. Top 10 Priority Fixes (Ranked by Impact)

> Ranking criteria: (a) App Store reject probability, (b) percent of users affected, (c) implementation effort. All examples below are **suggested code** — no files have been modified.

### Priority 1 — Paywall close button: VoiceOver label + 44pt target

**File:** `apps/mobile/app/paywall.tsx:70-73`
**Impact:** High. App Store reviewers explicitly test the dismiss control on modal paywalls. Failing this is a near-certain ITMS rejection cycle.

**Before:**
```tsx
<Pressable onPress={() => router.back()} style={styles.closeBtn}>
  <Text style={styles.closeText}>×</Text>
</Pressable>
```
**After (suggested):**
```tsx
<Pressable
  onPress={() => router.back()}
  style={styles.closeBtn}
  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
  accessibilityLabel="Kapat"
  accessibilityHint="Premium ekranını kapat"
  accessibilityRole="button"
>
  <Text style={styles.closeText} accessibilityElementsHidden importantForAccessibility="no">×</Text>
</Pressable>
```

### Priority 2 — Replace yellow-on-white text with dark text on yellow

**File:** `apps/mobile/app/profile.tsx:332-339, 380-381`, `apps/mobile/app/paywall.tsx:174-180`
**Impact:** ~15% of users with mild low vision cannot read these. WCAG 1.4.3 fail.

**Before:**
```tsx
<Text style={[statStyles.value, { color }]}>{value}</Text>  // color may be #f6ff00 on white
```
**After (suggested):** restrict yellow to backgrounds only. For text, use `tokens.text.primary` (#1a1c1c) on yellow card, or `tokens.brand.tertiary` (blue) on white. For the paywall hero title, swap to:
```tsx
title: { ...title, color: tokens.text.inverseOnSurface }, // white on dark = 15:1
```

### Priority 3 — Speaker button accessibilityLabel

**File:** `apps/mobile/components/SpeakerButton.tsx:17-29`
**Impact:** Core feature of the app (pronunciation) — VO users cannot find it.

**Before:**
```tsx
<Pressable onPress={() => speak(text, { lang })} hitSlop={8} style={...}>
  <Text style={[styles.icon, { fontSize: dim * 0.5 }]}>🔊</Text>
</Pressable>
```
**After (suggested):**
```tsx
<Pressable
  onPress={() => speak(text, { lang })}
  hitSlop={8}
  accessibilityRole="button"
  accessibilityLabel={`${text} kelimesini dinle`}
  accessibilityHint="İngilizce telaffuzu sesli oynatır"
  style={...}
>
  <Text accessibilityElementsHidden importantForAccessibility="no" style={[styles.icon, { fontSize: dim * 0.5 }]}>🔊</Text>
</Pressable>
```

### Priority 4 — Bottom nav tabs: tab role + selected state + 44pt height

**File:** `apps/mobile/app/feed.tsx:147-163, 181-190`, `feed.tsx:273-279`
**Impact:** Every user, every session. SR users have no idea which tab is active.

**Before:**
```tsx
<Pressable style={[navStyles.tab, active && navStyles.tabActive]} onPress={onPress}>
  <Text style={navStyles.icon}>{icon}</Text>
  <Text style={[navStyles.label, active && navStyles.labelActive]}>{label}</Text>
</Pressable>
```
**After (suggested):**
```tsx
<Pressable
  style={[navStyles.tab, active && navStyles.tabActive, { flex: 1, minHeight: 44 }]}
  onPress={onPress}
  accessibilityRole="tab"
  accessibilityState={{ selected: !!active }}
  accessibilityLabel={label}
>
  <Text style={navStyles.icon} accessibilityElementsHidden>{icon}</Text>
  <Text style={[navStyles.label, active && navStyles.labelActive]} accessibilityElementsHidden>{label}</Text>
</Pressable>
```

### Priority 5 — SceneCard combined accessibilityLabel + role

**File:** `apps/mobile/components/SceneCard.tsx:27-62`
**Impact:** Every feed scroll. Currently announces ~8 fragments per card.

**Before:** plain Pressable wrapping 6 Text children.
**After (suggested):**
```tsx
<Pressable
  style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
  onPress={onPress}
  accessibilityRole="button"
  accessibilityLabel={
    `${title}. ${description}. ${durationMin} dakikalık ders.` +
    (isNew ? " Yeni." : "") +
    (progressLabel ? ` ${progressLabel}.` : "")
  }
  accessibilityHint="Dersin önizlemesini açar"
>
  {/* mark all children as decorative */}
  <View style={styles.accentBar} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" />
  <Text style={styles.emojiBg} accessibilityElementsHidden>{emoji}</Text>
  {/* ... rest unchanged but wrapped in a View with importantForAccessibility="no-hide-descendants" */}
</Pressable>
```

### Priority 6 — Tertiary text color darkening (`#888a90` → `#6b6d72`)

**File:** `apps/mobile/theme/index.ts:30` (`text.tertiary`)
**Impact:** All section labels, chevrons, captions, verdict feedback. ~30 sites.

**Before:** `tertiary: "#888a90"` — 3.45:1 vs white (FAIL).
**After (suggested):** `tertiary: "#6b6d72"` — ~5.0:1 vs white (PASS).

(Single token change cascades to all consumers.)

### Priority 7 — Settings row chevron + emoji hiding for clean SR readout

**File:** `apps/mobile/app/profile.tsx:177-300` (14 rows)
**Impact:** Profile is the primary navigation hub. SR fatigue across 14 stops.

**Before:**
```tsx
<Pressable style={styles.row} onPress={...}>
  <Text style={styles.rowIcon}>🏆</Text>
  <Text style={styles.rowText}>Başarımlar</Text>
  <Text style={styles.rowChevron}>›</Text>
</Pressable>
```
**After (suggested):**
```tsx
<Pressable
  style={styles.row}
  onPress={...}
  accessibilityRole="button"
  accessibilityLabel="Başarımlar"
  accessibilityHint="Başarımlar ekranını aç"
>
  <Text style={styles.rowIcon} accessibilityElementsHidden>🏆</Text>
  <Text style={styles.rowText}>Başarımlar</Text>
  <Text style={styles.rowChevron} accessibilityElementsHidden>›</Text>
</Pressable>
```
(Apply pattern to all 14 rows; convert reminders row to `accessibilityRole="switch"` with `accessibilityState.checked`.)

### Priority 8 — Avatar Pressable in feed top bar: label + 44pt

**File:** `apps/mobile/app/feed.tsx:76-79, 233-240`
**Impact:** Empty Pressable invisible to SR.

**Before:**
```tsx
<Pressable style={styles.avatar} onPress={() => router.push("/profile" as never)} />
```
**After (suggested):**
```tsx
<Pressable
  style={[styles.avatar, { width: 44, height: 44, borderRadius: 22 }]}
  onPress={() => router.push("/profile" as never)}
  accessibilityRole="button"
  accessibilityLabel="Profil"
  accessibilityHint="Profil ekranını aç"
/>
```

### Priority 9 — Plan radiogroup semantics on paywall

**File:** `apps/mobile/app/paywall.tsx:96-119`
**Impact:** Conversion-critical screen. SR users currently cannot tell plans apart or know which is selected.

**Before:** two independent Pressables.
**After (suggested):**
```tsx
<View accessibilityRole="radiogroup" style={styles.plans}>
  <Pressable
    style={[styles.plan, plan === "yearly" && styles.planSelected]}
    onPress={() => setPlan("yearly")}
    accessibilityRole="radio"
    accessibilityState={{ selected: plan === "yearly", checked: plan === "yearly" }}
    accessibilityLabel="Yıllık plan, 599 lira, ayda yaklaşık 50 lira, yüzde elli indirim"
  >
    {/* children hidden from a11y tree */}
  </Pressable>
  {/* monthly Pressable analogous */}
</View>
```

### Priority 10 — Phase progress as a single accessibilityRole="progressbar"

**File:** `apps/mobile/app/scenario/[id].tsx:196-211, 339-348`
**Impact:** SR users have no idea where they are in the 4-phase scenario.

**Before:** four nameless `<PhaseDot>` Views inside a `phaseDots` container.
**After (suggested):**
```tsx
const phaseIdx = phase === 'setup' ? 1 : phase === 'drill' ? 2 : phase === 'scene' ? 3 : 4;
const phaseLabel = phase === 'setup' ? 'Kurulum' : phase === 'drill' ? 'Alıştırma' : phase === 'scene' ? 'Sahne' : 'Sonuç';

<View
  style={styles.phaseDots}
  accessibilityRole="progressbar"
  accessibilityValue={{ min: 1, max: 4, now: phaseIdx, text: `${phaseLabel}, ${phaseIdx} / 4` }}
>
  <PhaseDot active={phase === "setup"} done={phase !== "setup"} />
  {/* others — all with importantForAccessibility="no-hide-descendants" */}
</View>
```

---

## Appendix A — Files audited

| File | LOC | Critical findings |
|---|---|---|
| `apps/mobile/app/feed.tsx` | 297 | V2, V3, V4, V5 · T1, T2, T10 · D1 · focus order |
| `apps/mobile/app/scenario/[id].tsx` | 711 | V7, V8, V9 · T4, T5 · D2, D3, D5 · focus order · auto-TTS |
| `apps/mobile/app/profile.tsx` | 482 | V12, V13, V14 · T8 · contrast C5 · 14-row SR fatigue |
| `apps/mobile/app/paywall.tsx` | 281 | V10, V11 · T3 · contrast C1 · focus order on plans |
| `apps/mobile/components/SpeakerButton.tsx` | 47 | V1 · D6 |
| `apps/mobile/components/SceneCard.tsx` | 181 | V6, V16 · contrast C8 · D2 |
| `apps/mobile/components/Button.tsx` | 143 | V15 · D4 · `maxFontSizeMultiplier` missing |
| `apps/mobile/theme/index.ts` | 109 | Tokens drive C1, C3, C5, C6, C8 — fixing here fixes all consumers |

## Appendix B — Quick-test checklist before App Store submission

- [ ] Enable VoiceOver, tab through Feed → Scenario start → Verdict → back. Every focus stop should have a Turkish label.
- [ ] Settings → Accessibility → Larger Text → AX3. Open Scenario setup. Word + speaker button + Continue must all be visible without clipping.
- [ ] Settings → Accessibility → Display & Text Size → Increase Contrast: ON. Stat numbers in profile, paywall title still legible.
- [ ] Reduce Motion: ON. Open feed scroll, paywall, scenario advance — no spring/bounce that exceeds essential motion.
- [ ] All `Pressable` elements ≥ 44×44pt hit area (consider hitSlop).
- [ ] No `Alert.alert` calls without a Turkish title + body that conveys consequences.

---

*Audit produced 2026-05-14. Methodology: WCAG 2.1 AA conformance via per-component static review + token-level contrast computation (relative luminance per WCAG 2.x).*
