# ElevenLabs Premium TTS

Optional premium text-to-speech for Lafla. Replaces the synthetic on-device voice (`expo-speech`) with high-quality, native-sounding English audio fetched from [ElevenLabs](https://elevenlabs.io/). Audio is cached on-device after the first play, so a phrase that recurs across lessons only costs one API call per user.

This integration is **off by default**. Without an API key the app silently keeps using `expo-speech` — there is no UX regression.

---

## Setup

1. **Create an ElevenLabs account.** Free tier is enough to validate the integration.
2. **Grab your API key** from the ElevenLabs dashboard → Profile → API Key.
3. **Set the environment variable** in `apps/mobile/.env` (or your CI secrets):

   ```
   EXPO_PUBLIC_ELEVENLABS_KEY=sk_xxxxxxxxxxxxxxxx
   ```

   The `EXPO_PUBLIC_` prefix is required — Expo only inlines env vars with that prefix into the JS bundle.

4. **Rebuild the dev client / re-run `expo start --clear`.** Env vars are baked at bundle time, not runtime.

That's it — no SDK install, no native module rebuild. The helper uses `fetch` directly.

---

## Pricing tiers

| Tier        | Cost      | Monthly chars | Notes |
| ----------- | --------- | ------------- | ----- |
| Free        | $0        | 10,000        | Watermark-free output, all voices, fine for dev + small beta. |
| Starter     | $5 / mo   | 30,000        | Cheapest paid tier. Roughly 30 min of audio. |
| Creator     | $22 / mo  | 100,000       | Typical sweet spot for a launched consumer app with a few hundred MAU. |
| Pro / Scale | $99+ / mo | 500,000+      | Needed only if you skip caching, which we don't. |

**With caching, real usage is much lower than raw char counts suggest.** A typical Lafla session reuses the same ~50 core phrases across lessons; once those are cached on a user's device they cost zero API characters forever.

Rule of thumb: **estimated chars / month ≈ unique_phrases × active_users × 0.3** (the 0.3 accounts for partial overlap between users' lesson paths).

---

## Voice options

The helper supports four English-leaning voices. Sample them in the [ElevenLabs voice library](https://elevenlabs.io/app/voice-library) before picking a default.

| Key       | Voice ID                 | Character                         | Suggested use                       |
| --------- | ------------------------ | --------------------------------- | ----------------------------------- |
| `rachel`  | `21m00Tcm4TlvDq8ikWAM`   | Warm American female, calm        | Default narrator, vocab drills.     |
| `adam`    | `pNInz6obpgDQGcFmaJgB`   | Deep American male, neutral       | Long-form readings, story mode.     |
| `bella`   | `EXAVITQu4vr4xnSDxMaL`   | Soft American female, friendly    | Encouragement, success states.      |
| `antoni`  | `ErXwobaYiN019PkySvjV`   | American male, conversational     | Dialog roleplay (B-side speaker).   |

The helper defaults to `rachel`. Caller can override per-call.

---

## How it works

```
SpeakerButton (UI)
       │
       ▼
  elevenlabs.synthesize(text, voice)
       │
       ├── cache hit?  ──►  return file:// URI
       │
       ├── no API key? ──►  return null  ──►  fallback to expo-speech
       │
       └── POST /v1/text-to-speech/<voice_id>
              │
              ▼
        audio-cache.storeCached(key, mp3Bytes)
              │
              ▼
        return file:// URI
```

- **Cache key**: `${voice}:fnv1a(text.trim().toLowerCase())`. Deterministic, voice-scoped, case-insensitive.
- **Cache location**: `expo-file-system`'s `cacheDirectory + lafla-audio/`. Survives app restarts; the OS may evict under disk pressure, in which case the next call refetches.
- **Index**: `AsyncStorage` key `lafla.audio.cache` maps cache keys to relative filenames so we don't scan the directory on every lookup.

---

## Integration plan for `SpeakerButton`

The existing `components/SpeakerButton.tsx` currently calls `tts.speak(text)`. The proposed change (left as a follow-up — **not done in this PR**) wraps that call:

```ts
import { synthesize } from "@/lib/elevenlabs";
import { speak as fallbackSpeak } from "@/lib/tts";
import { Audio } from "expo-av"; // already a transitive dep via expo-speech? confirm before use

async function speakPremium(text: string) {
  const uri = await synthesize(text); // null if no key / network failure
  if (!uri) {
    fallbackSpeak(text);
    return;
  }
  const { sound } = await Audio.Sound.createAsync({ uri });
  await sound.playAsync();
  // Unload after playback to avoid leaking native resources.
  sound.setOnPlaybackStatusUpdate((status) => {
    if (status.isLoaded && status.didJustFinish) sound.unloadAsync();
  });
}
```

Notes:

- `expo-av` is the standard way to play arbitrary audio files in Expo. If it isn't already in `package.json`, that's a separate install decision — **out of scope** for this helper.
- The fallback path is the load-bearing piece: anyone running the app without an API key (open-source contributors, CI, reviewers) should see no behavior change.
- Consider a feature flag (`useSession`-level setting?) so a user can opt into premium voice; on free tiers this also lets you cap monthly API spend.

---

## Tradeoffs

**Why ElevenLabs over alternatives?**

- **Quality**: clearly above Google Cloud TTS / Azure Neural on conversational English; subjectively the best for "this sounds like a real person teaching me" use case Lafla cares about.
- **Latency**: ~500ms–1.5s for short phrases on the multilingual_v2 model. Cache hides this after first play.
- **Lock-in risk**: low. The helper is one ~100-line file; swapping providers (Cartesia, PlayHT, Deepgram Aura) means rewriting `synthesize()` and reusing `audio-cache.ts` as-is.

**Why not stream?**

- ElevenLabs supports streaming (`/stream` endpoint) for sub-200ms time-to-first-audio, but it complicates caching (we need the full MP3 to persist). For a learning app where phrases are short and repeated, batch + cache is the right call. Revisit if we add a "conversation mode" with long, never-repeated utterances.

**Why FNV-1a instead of MD5?**

- We need a stable filename, not a cryptographic guarantee. FNV-1a is a few lines of inline code; pulling in a real hash library (`spark-md5`, `crypto-js`) for filename generation would be overkill.

**Why ArrayBuffer → base64 → `writeAsStringAsync`?**

- `expo-file-system` doesn't accept raw binary writes; base64 is the standard workaround. The encoder in `audio-cache.ts` handles chunking so we don't blow the call stack on long files.
