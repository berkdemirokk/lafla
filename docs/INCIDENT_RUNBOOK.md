# Incident Runbook — Lafla

> One-page mental model for the three highest-probability outages on Lafla. Read once before launch; re-read at first signal during an incident. **Speed matters more than completeness** — partial fix in 30 min beats perfect fix in 4 hours.

---

## Scenario 1: Supabase Down

**Trigger signals:**
- Spike in `auth_signin_failed` events in PostHog
- Sentry: cluster of `PostgrestError: fetch failed` or `connection refused`
- Users in support inbox reporting "giriş yapamıyorum" ("can't sign in") in waves

### Diagnostic (90 seconds)

1. Open `status.supabase.com` — is the EU region (where our DB lives) red?
2. If yes → upstream, not us. Jump to Mitigation.
3. If no → run `npx supabase status` against our project to check our row in their dashboard. If our project specifically is degraded, file a support ticket.

### Mitigation (offer immediate value)

Lafla is **local-first** by design. Most user-facing functionality continues to work without Supabase:
- All 122 lessons run locally — exercise content is bundled in the app
- Streak counter, daily quests, mastery progress — all in AsyncStorage
- Pronunciation analysis — runs locally for the basic tier; only Pro full reports need backend
- Maya conversation — degraded but offers text-only fallback (see Scenario 2 for LLM-specific outage)

What breaks without Supabase:
- Sign in / sign up (existing signed-in sessions keep working via Supabase JWT in SecureStore until token expiry, ~1 hr)
- iCloud sync across devices
- Account deletion (deferred — user can retry later)
- Server-side leaderboards (not in v0.1.0; irrelevant)

**User communication:**
- Push a soft banner via the in-app status panel: `"Sunucularımıza ulaşamıyoruz. Pratiğine devam edebilirsin, ilerlemen cihazında güvende."` ("We can't reach our servers. Keep practicing, your progress is safe on your device.")
- Banner is dismissible; auto-hides when next backend call succeeds.

### Recovery

1. Monitor `status.supabase.com` until green.
2. Tweet from `@laflaapp`: short, calm, factual. Template: `"Supabase'de yaşanan sorun nedeniyle giriş yapmakta zorluk çekenler olabilir. İlerlemeniz güvende. Düzelir düzelmez burada haber vereceğiz."`
3. After recovery, post a follow-up tweet acknowledging.
4. **Postmortem within 48 hours.** Even for upstream outages — document what we learned, what the banner did well, what to add to the runbook.

---

## Scenario 2: LLM Provider Quota Exhausted / 429 Cascade

**Trigger signals:**
- Sentry breadcrumb stream shows `LLMError: 429 Too Many Requests` cascading across all users
- Maya response p95 latency climbs above 8 seconds (PostHog dashboard)
- Support inbox: "Maya cevap vermiyor" ("Maya isn't responding") in waves

### Diagnostic (60 seconds)

1. Open the LLM provider's status page (OpenAI status / Anthropic status — whichever is the active primary).
2. Open our router dashboard: which provider is the primary right now? Is it the one rate-limited?
3. Check our billing dashboard: are we within our spend limit but hitting RPM caps, or did we hit the hard monthly limit?

### Mitigation (immediate, user-facing)

If we have a working secondary provider:
1. Flip the router config: primary → secondary.
2. New Maya sessions start hitting the secondary within ~30 seconds (no app update needed; config is server-driven via Cloudflare KV).
3. Verify recovery by hitting the `/_health/llm` route from a test device.

If both providers are degraded:
1. Maya's degraded response is pre-canned: `"Şu an çok yoğun, yazılı moda geçelim mi? Cevap vermem birkaç dakika sürebilir."` ("I'm overwhelmed right now, can we switch to text mode? My responses may take a few minutes.")
2. App flips into typing-only mode (no audio out from Maya). User can still send messages, but they queue with a "Maya cevap yazıyor..." indicator that doesn't timeout.
3. Background retry: every 30 seconds the app retries against whichever provider is healthier.

### Recovery

1. File an upgrade ticket with the provider asking for higher RPM/TPM limits.
2. Rotate to the next provider in the router config; ensure traffic balances.
3. After recovery, replay the canned-fallback transcripts (stored locally) so users see Maya "respond" to messages they sent during the outage. **This is critical for trust** — users hate when their words seem to vanish.
4. **Postmortem within 48 hours.** Was our autoscaler asleep? Was our spend cap too tight? Did our routing logic fail to detect the degradation?

---

## Scenario 3: App Store Reject

**Trigger signals:**
- App Store Connect email: "We were unable to approve your app..."
- The build's row in App Store Connect shows "Rejected" with a guideline cited (e.g., 2.1, 5.1.1(v), 1.1, 4.2)

### Diagnostic (10 minutes — slow down here)

1. **Read the reject reason carefully.** Apple cites a specific guideline. Open Apple's guidelines doc and read the cited section in full. The most common rejects we've prepared for:
   - **2.1 App Completeness** → reviewer couldn't sign in. Check `APP_REVIEW_NOTES.md` — is the demo account still valid?
   - **5.1.1(v) Account Deletion** → reviewer couldn't delete account. Test the deletion flow with the demo account.
   - **1.1 Objectionable Content** → reviewer hit something unsafe from Maya. Read the screenshots they sent.
   - **4.2 Minimum Functionality** → reviewer thought we're "just an LLM wrapper." We need to clarify structured content + 7 exercise types.
   - **3.1.1 Payments** → IAP issue. Verify all paid features are gated correctly and there's no alt-payment language.
2. **Resist the urge to over-fix.** Apple wants you to fix specifically what they cited. Adding 5 unrelated changes triggers a deeper second-round review.

### Mitigation

For each guideline:

| Guideline | Fix path |
|---|---|
| 2.1 (auth wall) | Resubmit `APP_REVIEW_NOTES.md` with refreshed demo creds in the reply to App Review |
| 5.1.1(v) (deletion) | Walk reviewer through the deletion path via screen-recording attached to reply; if there's a bug, fix in a new build |
| 1.1 (AI safety) | Tighten the post-filter for the specific case shown in screenshots; add system-prompt rules; resubmit with notes |
| 4.2 (min functionality) | Reply with a structured response describing the 7 exercise types and 500+ pre-authored scenarios. Often resolved via reply, no new build needed |
| 3.1.1 (payments) | Audit every paywall string for "external link" / "card payment" mentions; fix in a new build if found |

### Recovery

1. Reply to App Review within 24 hours acknowledging the issue.
2. If the fix is content/docs-only (not a code change), submit the reply directly — Apple often re-reviews based on the response without a new binary.
3. If the fix needs code, ship a new build with a tightly-scoped "What to Test" pointing at the fix.
4. **Apple typically re-reviews within 24-48 hours.** Don't ping support unless > 7 days elapse.
5. **Postmortem within 48 hours of approval.** Update `APP_REVIEW_NOTES.md` with the new failure mode so the next reviewer doesn't trip on the same thing.

---

## Communication Discipline (all scenarios)

1. **Slack first, Twitter second.** Internal alignment before external announcement.
2. **Banner over notification.** In-app banner is non-intrusive; a push notification feels like panic.
3. **Be specific, not apologetic.** "Sunucularımız 14:30'da geri geldi" ("Our servers came back at 14:30") beats "Üzgünüz, sorun yaşadık" ("Sorry, we had an issue").
4. **Never blame the user.** Even if their region's DNS is flaky, the right message is "we're investigating," not "your network looks weird."

## Postmortem Template

For every incident, file a doc at `docs/postmortems/YYYY-MM-DD-<short-title>.md` with:
- **Timeline** (UTC, signal → diagnosis → mitigation → recovery)
- **Root cause** (one sentence)
- **What worked** (3 bullets)
- **What didn't** (3 bullets)
- **Action items** (with owners + due dates)

Postmortems are blameless. The point is not to find who messed up — it is to fix the runbook so the next incident is shorter.
