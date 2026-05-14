# Speech Recognition

Pronunciation features in Lafla rely on on-device speech-to-text so a
learner can say an English phrase and get word-level feedback. This
doc explains the library choice, the iOS setup, and the permission
flow.

## Library choice: `expo-speech-recognition`

We picked [`expo-speech-recognition`][esr] over the older
[`@react-native-voice/voice`][rnv].

| Concern              | `expo-speech-recognition`                                  | `@react-native-voice/voice`                |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------ |
| Maintenance          | Active, Expo-aligned                                       | Sporadic, community-maintained             |
| iOS backend          | Native iOS 17+ `Speech` framework (on-device by default)   | Older `SFSpeechRecognizer` wiring          |
| Expo config plugin   | Yes — sets Info.plist keys automatically                   | No — requires manual native config         |
| Continuous + interim | Built-in `interimResults` / `continuous` flags             | Available but quirkier on iOS              |
| TypeScript types     | Ships first-class types                                    | Community-typed                            |
| Bare workflow        | Works in dev client or prebuild                            | Requires `pod install` and linking         |

iOS 17 ships an on-device recognizer that doesn't require network and
gives word-level timing. `expo-speech-recognition` exposes that
recognizer cleanly. For a Turkish-first app where learners speak short
English phrases, that's exactly the shape we need.

We continue to use `expo-speech` (TTS) for native pronunciation
playback — it's a separate package.

## Installation

> Not installed yet. The mobile lib loads it via `require()` in a
> `try/catch`, so the bundle still works without it; calls just fall
> through to the "not available" branch.

```sh
pnpm --filter @lafla/mobile add expo-speech-recognition
```

The package has an Expo config plugin. After install, add it to
`apps/mobile/app.json` under `plugins`:

```json
{
  "expo": {
    "plugins": ["expo-speech-recognition"]
  }
}
```

## iOS Info.plist keys

Apple requires two purpose strings. Add them under `ios.infoPlist` in
`apps/mobile/app.json`:

```json
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NSSpeechRecognitionUsageDescription": "Lafla, telaffuzunu değerlendirmek için söylediklerini dinler.",
        "NSMicrophoneUsageDescription": "Lafla, İngilizce telaffuz alıştırmaları sırasında mikrofonu kullanır."
      }
    }
  }
}
```

Without these strings the app crashes the first time you call
`requestPermissionsAsync()` — iOS treats missing usage descriptions as
a hard fault, not a denial.

## Permission flow

The wrapper at `apps/mobile/lib/speech-recognition.ts` exposes:

- `isAvailable(): Promise<boolean>` — returns `false` if the native
  module isn't linked (e.g. running in Expo Go without a custom dev
  client) or the device doesn't support speech recognition.
- `requestPermission(): Promise<boolean>` — prompts for both the
  speech-recognition and microphone permissions on first call. iOS
  remembers the answer; subsequent calls return immediately.
- `startListening({ lang, onResult, onError, timeoutMs })` —
  internally calls `requestPermission()` and bails with
  `onError("speech recognition permission denied")` if the user said
  no. Auto-stops after `timeoutMs` (default 8 s) so a stuck mic
  doesn't drain battery.
- `stopListening()` — idempotent; safe to call even if nothing is
  listening.

Recommended UX:

1. Call `isAvailable()` once at lesson startup. If it returns
   `false`, hide the mic button and show the text-input fallback.
2. The first time the user taps mic, call `requestPermission()` and
   show a "we need the mic to grade your pronunciation" sheet on
   denial.
3. Pipe `onResult(text, isFinal)` into UI state — show interim text
   in grey, then snap to black + run the grader when `isFinal` is
   true.
4. Feed the final transcript into `gradePronunciation(target, heard)`
   from `apps/mobile/lib/pronunciation-grader.ts` to get a 0–100
   score plus per-word bands (`good` / `okay` / `miss`).

## Testing on simulator vs device

iOS Simulator can run speech recognition in iOS 17+ but the host Mac's
microphone is used, which makes results noisy. Always smoke-test on a
real device before shipping a lesson that gates progression on
pronunciation score.

[esr]: https://github.com/jamsch/expo-speech-recognition
[rnv]: https://github.com/react-native-voice/voice
