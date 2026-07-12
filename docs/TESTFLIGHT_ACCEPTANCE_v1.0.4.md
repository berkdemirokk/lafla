# TestFlight Acceptance — Lafla v1.0.4

This is an evidence sheet, not a claim that physical tests have already run.
Complete it against the new TestFlight build before promoting the build.

## Build identity

- Version: `1.0.4`
- TestFlight production build: `113`
- GitHub Actions run: `29202895285`
- Source commit: `2f023353e9ed553e9de580c152d23d965938eaa1`
- Apple delivery UUID: `b6f38cc3-9bd8-4d41-a089-d81111a606c9`
- Upload result: `UPLOAD SUCCEEDED with no errors`
- IPA identity: `com.lafla.app` · `1.0.4 (113)`
- Native permission resources verified in IPA: `en.lproj` and `tr.lproj`
- App privacy manifest verified in IPA: tracking domains + 4 required-reason API categories
- Git commit: ____________________
- TestFlight build: ____________________
- Tester/date: ____________________

## Release gates

| Gate | Expected result | Evidence | Result |
|---|---|---|---|
| Fresh install | Auth → two-step onboarding → personalized first practice | Screen recording | ⬜ |
| Apple Sign-In | Sign-in succeeds; deleting account revokes credential and signs out | Video + Supabase check | ⬜ |
| Email auth | Login, logout, password error and retry work | Video | ⬜ |
| Quiet-room voice | Transcript appears and submits once | Video | ⬜ |
| Turkish accent | 10 fixed phrases produce usable transcripts | Score sheet | ⬜ |
| Background noise | Failure is explicit; text fallback remains usable | Video | ⬜ |
| Mic denied | Turkish error and text fallback appear; no frozen state | Video | ⬜ |
| Bluetooth audio | Start/stop does not freeze; TTS resumes afterward | Video | ⬜ |
| Offline guided scene | Bundled content opens; unavailable services degrade visibly | Video | ⬜ |
| Free Chat timeout | Static follow-up and service notice appear | Video | ⬜ |
| Free Chat safety | Crisis/medical/financial prompts are redirected safely | Screenshots | ⬜ |
| Monthly purchase | Sandbox sheet, success state and entitlement work | Sandbox receipt | ⬜ |
| Yearly purchase | Correct localized price/product and entitlement work | Sandbox receipt | ⬜ |
| Cancel purchase | User returns without false success or stuck loading | Video | ⬜ |
| Restore purchase | Existing entitlement restores after reinstall/login | Video | ⬜ |
| Account deletion | User, Apple token and local journal data are removed | Video + backend check | ⬜ |
| VoiceOver | Onboarding, roleplay, paywall and settings are navigable | Video | ⬜ |
| Large text | No clipped CTA/input at largest practical Dynamic Type size | Screenshots | ⬜ |
| Small iPhone | No overlap on the smallest supported iPhone available | Screenshots | ⬜ |
| Crash/freeze | Full P0 route completes without crash or indefinite spinner | Sentry/TestFlight logs | ⬜ |

## Fixed voice phrases

Say each once in a quiet room and once with ordinary background noise:

1. `Could I have a coffee, please?`
2. `I'd like to check in for my flight.`
3. `Could you send me the latest version?`
4. `I'm not sure I agree with that approach.`
5. `Would Thursday evening work for you?`
6. `I grew up in Istanbul, but I live here now.`
7. `Could you recommend something non-alcoholic?`
8. `Let me check and get back to you.`
9. `That sounds good, but I need a little time.`
10. `Thank you for understanding.`

Record exact transcript, whether the goal was recognized, and whether retry was
needed. Do not record or upload the tester's raw audio.

## Linguist gate

Review [LINGUIST_REVIEW_v1.0.4.csv](./LINGUIST_REVIEW_v1.0.4.csv):

- All 100 sampled scenarios reviewed by a fluent/native English reviewer.
- Average naturalness at least `4.0/5`.
- No unresolved grammar or cultural-fit blocker.
- Every issue references `scenario_id` and the corrected wording.

## Beta gate

- Minimum 5 testers; target 10.
- At least one new learner and one A1/A2 learner.
- Each tester completes onboarding, two guided scenes and one return session.
- Collect: first-practice completion, voice-attempt success, retry recovery,
  next-day return, crash/freeze, and free-text confusion.
- No P0 issue; all P1 issues have an owner and release decision.

## Promotion decision

- ⬜ All release gates passed
- ⬜ Linguist gate passed
- ⬜ Beta gate passed
- ⬜ App Store Connect IAP, demo account, screenshots and privacy answers checked
- Decision/owner/date: ______________________________________________
