# Lafla roleplay product requirements

Last reviewed: 2026-07-09

## Product bar

Lafla is not a generic quiz app. The roleplay loop must feel like a short,
safe English rehearsal for Turkish learners:

1. The learner understands the real-life task before answering.
2. The learner can get unstuck without failing the scene.
3. Guided help supports completion but does not inflate mastery.
4. The learner gets a concrete post-session comparison: their wording versus a
   more natural answer.
5. The session stays short enough to repeat daily.

## Evidence used

- ELSA positions roleplay around scenario choice, realistic conversation, and
  detailed post-session feedback.
  Source: https://elsaspeak.com/en/ai/
- Apple's App Store story for ELSA highlights suggested responses beside the
  microphone, natural speech, and feedback on pronunciation, grammar, and
  vocabulary after roleplay.
  Source: https://apps.apple.com/ph/iphone/story/id1745623441
- Duolingo's Video Call research describes spoken/written NPC turns, optional
  speech transcription, translation hints, phrase suggestions, and end-of-call
  feedback/tips.
  Source: https://duolingo-papers.s3.amazonaws.com/reports/Duolingo_whitepaper_language_video_call_improves_speaking_2025.pdf
- Apple review guidelines require clear privacy policy access, consent for data
  collection, data minimization, permission respect, and in-app account deletion
  when accounts are supported.
  Source: https://developer.apple.com/app-store/review/guidelines/
- Apple subscription guidance requires ongoing value, clear subscription status,
  and regular feature/content improvements for subscription apps.
  Source: https://developer.apple.com/app-store/subscriptions/

## Current implementation commitments

- Sessions are capped to short focused scenes.
- Beginner scenes start with guided support.
- Ready answers are now rehearsal-first: preview, listen, then send.
- Supported turns are counted separately from independent mastery.
- Verdict now includes a per-turn coach summary with learner answer and natural
  target answer.

## Next requirements to implement

1. Add an explicit "Acil İngilizce" entry point on Home for immediate real-life
   sentence generation.
2. Show first-response time, hint usage, abandonment point, and next-day return
   in analytics dashboards.
3. Make the custom scenario generator visible before the generic scene feed for
   users who already completed onboarding.
4. Add a "repeat this answer by voice" loop from the verdict coach summary.
5. Audit all permission and privacy copy before App Store review.
