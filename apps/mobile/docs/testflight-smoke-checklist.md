# TestFlight Smoke Checklist

Run this checklist on a real iPhone before sending a build to external testers.
The automated `qa:smoke` script verifies that these checks stay registered and
that the matching routes/CI gates exist.

## Critical Path

- [ ] SMOKE-01 Launch: cold launch opens without a blank screen, stuck splash, or font flash.
- [ ] SMOKE-02 Auth: anonymous entry and signed-in entry both reach Home.
- [ ] SMOKE-03 Placement: complete MCQ, two speaking prompts, and two listening prompts; final level changes only after oral evidence.
- [ ] SMOKE-04 Home feed: swipe at least ten scenes; active card, title, image, and CTA stay in sync.
- [ ] SMOKE-05 Scene loop: start a roleplay, reply by text, finish, and verify XP/progress is saved.
- [ ] SMOKE-06 Voice input: grant microphone/speech permission, record one answer, stop, and verify transcript appears.
- [ ] SMOKE-07 Voice diagnostics: open Settings -> Voice diagnostics, run a probe, and confirm permission/module state is visible.
- [ ] SMOKE-08 Visual match: inspect ten mixed scenes; each image must match the lesson context and never look like a random stock card.
- [ ] SMOKE-09 Daily plan: open Today, start the plan, finish one scene, and confirm next scene/progress advances once.
- [ ] SMOKE-10 Revenue flow: open paywall, restore purchases, and verify failure/no-subscription messages are clear.

## Release Gate

- [ ] SMOKE-11 Offline tolerance: disable network after launch; cached screens do not crash.
- [ ] SMOKE-12 Audio conflict: toggle auto-speak off during roleplay; TTS stops and does not resume unexpectedly.
- [ ] SMOKE-13 Settings: language, theme, reminders, analytics opt-out, and sign-out all persist after app restart.
- [ ] SMOKE-14 TestFlight upload: GitHub Actions passes typecheck, tests, content QA, visual QA, performance QA, smoke gate, Expo doctor, and upload validation.
