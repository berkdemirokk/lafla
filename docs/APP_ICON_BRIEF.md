# Lafla — App Icon Redesign Brief

**Status:** Ready for design execution
**Owner:** Brand / Design
**Target:** App Store submission build
**Files affected:** `apps/mobile/assets/icon.png`, `apps/mobile/assets/adaptive-icon.png`

---

## 1. Brand Identity Recap

**Name.** "Lafla" — Turkish slang from *laflamak* / *laf etmek*, meaning roughly "let's chat," "let's speak." Informal but not childish. A word an adult Turk says to a friend at a café, not one a parent says to a five-year-old. That distinction is the entire brand.

**Voice.** Confident, adult, premium. The product treats users as capable professionals working on their English, not kids being entertained into acquisition. **Not cute. Not cartoon. No mascot.** If the icon could plausibly sit next to Duolingo's owl, we have failed.

**Theme — Neon Noir.**
- Hot pink: `#FF067A` (brand anchor)
- Electric cyan: `#00FFFF` (highlight)
- Near-black: `#000000` to `#0A0A0F` (canvas)
- Evokes late-night Istanbul, Blade Runner, neon signage on Istiklal Caddesi at 2am.

**Differentiation.** Türkçe-aware feedback — Lafla explains *why* your English is wrong in Turkish, with examples a Turkish speaker recognizes. The icon doesn't need to literally encode this, but it must feel like it belongs to a product that takes its user seriously.

**Target user.** Turkish adults 22-40, urban, professional. Istanbul, Ankara, Izmir. iPhone. Pays for Spotify Premium. Tried Duolingo, found it patronizing. Tried Cambly, found it expensive.

---

## 2. Icon Design Principles

These are non-negotiable.

1. **Recognizable at 60×60.** The smallest size iOS renders us at (Spotlight, Settings). If the mark dissolves into mush at that size, it fails. Test every concept at 60×60 before promoting it.
2. **Premium reference set.** Lafla belongs next to Speak, Lerna AI, Linear, Arc, Things, Bear. **Not** Duolingo, Babbel, Memrise, Drops.
3. **No literal English flag.** No Union Jack, no Stars and Stripes. Lafla is English-as-a-tool, not English-as-an-allegiance.
4. **No generic speech bubble.** The laziest possible visual for a conversation app. Every translator and messaging app already uses it.
5. **No mascot.** No owl, no cat, no anthropomorphic anything. Mascots signal "for children."
6. **Dark base.** App is dark-mode-first. Black or near-black background, glow-style luminous foreground. A white icon would clash with the in-app experience.
7. **Hint at speech without depicting it.** Allowed: waveforms, glow rings, letterforms with motion. Disallowed: mouths, ears, microphones, megaphones.
8. **One memorable shape.** A user must be able to describe it in one sentence: "a glowing pink L on black." Not "a complex composition of seven elements."

---

## 3. Three Direction Concepts

Each direction below is ready to hand to a freelance designer, an in-house designer, or feed to an AI image tool. Each concept is also stress-tested for the principles above.

### Direction A — "The L Mark" (typographic)

**Description.** A custom-drawn capital **L** centered on near-black, rendered in hot pink (`#FF067A`) with a soft cyan (`#00FFFF`) inner glow bleeding 8-12 px outward — a backlit neon sign. Bold, roughly 60% of icon height, optically centered. The **bottom horizontal stroke does not terminate in a sharp 90° corner;** instead it flows into a single subtle wave curve (one peak, one trough) before fading. The letterform itself "speaks."

**Why it works.**
- Typographic icons feel premium (Linear, Lyft, Lemonade).
- The L is unique to Lafla — no competitor uses it.
- Wordmark recognition: after two weeks the L reads instantly, like Spotify's green or Notion's N.
- Wave detail disappears at 60×60 (good — L still works as letterform) and rewards inspection at 1024.

**Reference set.** Linear's L, Vercel's triangle, Notion's N, Arc's A.

**Risk.** A naked letter is only as good as its custom drawing. Helvetica Bold will look like a placeholder. The custom bottom-stroke curve earns the icon its existence.

---

### Direction B — "Sound Wave"

**Description.** Five vertical bars on near-black, evenly spaced. Heights left-to-right: short, medium, tall, medium, short — classic audio waveform. Vertical gradient from hot pink at bottom to cyan at top, rounded caps (radius ≈ half bar width). Bars sit on an invisible baseline at vertical midpoint. **Hidden moment:** negative space between the two tallest bars suggests an L at small sizes (optional, don't over-engineer).

**Why it works.**
- Sound-wave is the second-laziest visual for a voice app, but this palette makes it specific to us.
- Reads instantly at every size; five-bar pattern survives compression beautifully.
- Strong audio/voice association without a mouth or microphone.

**Reference set.** Apple Voice Memos meets Spotify meets a Bang & Olufsen ad.

**Risk.** Less distinctive than A. A user might confuse it with a music app. The pink-to-cyan gradient is unusual enough to mitigate (no music app uses that combo), but the risk remains.

---

### Direction C — "Speech Orb"

**Description.** A single sphere, hot pink, centered slightly above the optical midpoint of pure black. ~40% of icon width. Internal cyan glow lights it from within like a plasma bulb. Around it, at ~1.5× its diameter, a thin (2-3 px at 1024) cyan ring traces a perfect circle — echo, broadcast, spread. The space between orb and ring is empty black, intentional.

**Why it works.**
- Orb-on-dark is the visual language of modern AI (ChatGPT, Claude, Apple Intelligence, Pi). Signals intelligence + voice simultaneously.
- Maximum simplicity. Two shapes, two colors. Will render perfectly at 16×16.
- Easy to animate later (pulsing ring) for launch screens.

**Reference set.** ChatGPT, Apple Intelligence's swirl, Anthropic's glyph.

**Risk.** It looks like an AI assistant icon. That's also the strength. The question — does Lafla ride the AI-product wave or differentiate from it? — is a positioning decision, not just an icon decision.

---

## 4. Technical Specifications

| Asset | Size | Format | Notes |
|---|---|---|---|
| `icon.png` | 1024×1024 | PNG, no alpha, sRGB | iOS auto-rounds corners. Do not pre-round. Do not add a drop shadow under the icon — the OS draws one. |
| `adaptive-icon.png` | 1024×1024 | PNG, transparent background allowed | Android adaptive icon. Foreground only; the OS composites a background. Keep the mark within the central 66% safe zone (676×676 centered). |
| `icon-monochrome.png` (optional) | 1024×1024 | PNG, single-channel | watchOS / iOS tinted icons. Render the mark in pure white on transparent. Skip if not shipping a watch app. |

**Color management.** Export from a color-managed source (Figma, Affinity, Sketch). Ensure sRGB embedded. iOS will color-shift if the file is tagged P3 and the system isn't expecting it.

**No effects baked into the file** beyond what is intentional (the inner glow on the L, the gradient on the bars, the inner light on the orb). No Photoshop drop shadows. No outer glows. No bevels. The OS handles platform chrome.

**File hygiene.** Strip metadata before commit. App Store Connect rejects icons with non-square pixels, alpha channels (on `icon.png`), or color profiles other than sRGB.

---

## 5. AI Generation Prompts

Use these verbatim as starting points for DALL-E 3, Midjourney v6, Stable Diffusion XL, or GPT-Image-1. Each prompt has been written to produce a usable first draft; expect to iterate 5-10 times before a finalist emerges.

### Direction A — L Mark

> Minimalist iOS app icon, 1024x1024, square format. A single bold custom-drawn capital letter "L" centered on a pure black background. The L is rendered in vibrant hot pink hex #FF067A with a soft cyan hex #00FFFF inner glow halo extending 10 pixels outward, suggesting a backlit neon sign. The bottom horizontal stroke of the L curves gently into a single subtle wave before fading. Premium tech aesthetic in the style of Linear, Notion, and Arc browser. Flat 2D vector look, no 3D, no shadows beyond the inner glow, no rounded corners on the canvas itself. High contrast, crisp edges, professional, adult, late-night-Istanbul feeling. No text other than the L. No mascot. No flag.

### Direction B — Sound Wave

> Minimalist iOS app icon, 1024x1024, square format. Five vertical bars centered on a pure black background, arranged horizontally with even spacing. Bar heights from left to right: short, medium, tall, medium, short — forming an audio waveform silhouette. Each bar has a vertical gradient from hot pink hex #FF067A at the bottom to electric cyan hex #00FFFF at the top, with rounded caps. Bars sit on an invisible horizontal baseline at the icon's vertical center. Premium tech aesthetic, like Apple Voice Memos meets Spotify, but darker and more sophisticated. Flat 2D, no 3D, no drop shadows, no rounded corners on the canvas, crisp edges. Adult, urban, professional. No text. No microphone or speech bubble.

### Direction C — Speech Orb

> Minimalist iOS app icon, 1024x1024, square format. A single luminous sphere on a pure black background. The sphere is roughly 40% of the icon's width, centered slightly above the optical midpoint. The sphere is rendered in hot pink hex #FF067A with an internal cyan hex #00FFFF glow, as if lit from within like a plasma ball. Around the sphere, at 1.5 times its diameter, traces a single thin cyan ring suggesting echo or sound radiating outward. The space between sphere and ring is empty black. Premium AI-product aesthetic in the style of ChatGPT, Anthropic, and Apple Intelligence. Flat 2D with subtle inner glow only. No 3D bevels, no drop shadows, no rounded corners on the canvas. Adult, intelligent, modern. No text. No microphone. No face.

**Prompt tuning notes.**
- Most image models render hex codes approximately, not precisely. Plan to color-correct in Figma or Affinity afterward.
- If outputs trend cartoonish, add "vector, flat design, app icon, professional, no illustration" to the negative prompt.
- If outputs add unwanted decorative elements, add "single mark, no background details, no patterns, no texture" to the prompt.
- Midjourney: append `--ar 1:1 --style raw --stylize 100` for cleaner output.

---

## 6. Recommended Direction

**Direction A — The L Mark.**

1. **Distinctiveness at 60×60.** Among 23 home-screen icons, the L is the one a user can identify without reading the label. Sound-wave bars and orbs exist on other apps; the custom Lafla L exists only on Lafla. This is the single most important property of an app icon.

2. **Premium signaling.** Typographic marks are the visual language of grown-up software (Linear, Lyft, Lemonade, Letterboxd). Abstract orbs and waveforms have been mass-produced into commodity status by three years of AI startups. The L is rarer; rarer reads as more premium.

3. **Wordmark continuation.** The word "Lafla" and the letter "L" are inseparable. Every icon impression reinforces brand-name muscle memory. Orbs and bars are unnamed — they don't reinforce the word. Over 6-12 months the L compounds into brand recognition the others cannot.

**Caveat.** Direction A succeeds or fails entirely on the custom L drawing. A geometric-sans L will look like a placeholder. Budget either a freelance type designer (~$800-2000) or 2-3 days of in-house Figma iteration with reference logos open.

---

## 7. Iteration Process

A disciplined workflow that prevents falling in love with the first draft.

### Phase 1 — Generate (1-2 days)
Run each direction's AI prompt 4 times. Tag candidates (A1-A4, B1-B4, C1-C4). Don't iterate individuals yet — collect the full set first.

### Phase 2 — Filter (1 hour)
Print all 12 at 60×60 on one page. Squint. Eliminate mush or ambiguous shapes. Expect 6-8 survivors.

### Phase 3 — Direction lock (1 hour, with stakeholder)
Lock to ONE direction with the founder. Do not keep all three alive into Phase 4 — it triples the work. Pick 2 strongest candidates within the locked direction.

### Phase 4 — Refinement (2-3 days)
Bring finalists into Figma. Color-correct to exact hex. Adjust stroke weights, glow intensity, optical centering. Generate sizes 1024 / 180 / 120 / 87 / 80 / 76 / 60 / 40 / 29 / 20. Inspect each.

### Phase 5 — Home-screen mockup (1 hour)
Composite candidates among real apps (WhatsApp, Spotify, Instagram, banking app). View on an actual phone at arm's length. Does Lafla hold its own, or shrink?

### Phase 6 — External validation (1 day)
Show finalists to **5 target-demographic people** (Turkish, 22-40, iPhone). Use lockscreen framing, not "design critique." Ask in order:
  1. "Which of these apps looks the most expensive?"
  2. "Which would you tap first?"
  3. "What do you think these apps do?"
If Lafla wins (1) and (2) more often than not, ship. If (3) lands wildly off "talking / English / AI / language," investigate.

### Phase 7 — Commit (30 min)
Export final 1024×1024 PNGs. Replace `apps/mobile/assets/icon.png` and `apps/mobile/assets/adaptive-icon.png`. Bump build number. TestFlight first; verify on real device before App Store submission.

---

## 8. App Store Marketing Image

The App Store listing displays a **separate** 1024×1024 image at the top of the product page. It is not the icon — it is the marketing image, and it has more room to breathe.

**Two options.**

### Option 8a — Wordmark variant
Scale the L (Direction A) to ~50% canvas, position left third. Right side: the wordmark **"Lafla"** in a geometric, slightly condensed sans, all lowercase, cyan against near-black. Below in muted cyan at 40% opacity: **"İngilizce konuş. Lafla."** ("Speak English. Have a chat.") Ties icon to wordmark for users arriving from non-branded search.

**Font.** Söhne, Inter Display, Aeonik, or General Sans. Avoid Helvetica (overused) and Montserrat (cheap-startup association).

### Option 8b — Hero composition
A marquee in-product screen — likely a Tinder/Bumble-style swipe card mid-swipe with the next card peeking behind. Lafla icon as small badge top-right at 8-10% canvas for source-marking.

**Recommendation.** Ship 8a first — it establishes brand identity for cold-context users. Switch to 8b in a follow-up update once install velocity is established.

---

## 9. Summary & Next Steps

1. Lock Direction A as the brief target.
2. Brief a designer (or 2-3 prompt iterations on an image model) using Section 5 prompt A.
3. Generate 4 candidates, run them through the seven-phase iteration process in Section 7.
4. Deliver final assets to `apps/mobile/assets/icon.png` and `apps/mobile/assets/adaptive-icon.png`.
5. Prepare the App Store marketing image per Section 8a in parallel.
6. Validate on TestFlight before App Store submission.

**Done state.** A Turkish professional in their mid-thirties opens their phone in a café, scrolls past Spotify and WhatsApp and their banking app, and sees the Lafla L glowing on a black square — and it looks like it belongs there.
