# Voice Reference Attribution

These voice reference clips are pulled from the **CMU ARCTIC** corpus
(Carnegie Mellon Speech Group, http://festvox.org/cmu_arctic/).

CMU ARCTIC is released for any use without restriction (public-domain
announcement on festvox.org). No attribution is legally required, but we
credit the source here as good practice.

## Clips used

| File | Speaker | Source clip | Persona |
|---|---|---|---|
| vc_match.wav | SLT (US female) | arctic_a0050 | Warm casual female (Tinder/date NPCs) |
| vc_doctor.wav | CLB (US female) | arctic_b0050 | Professional clear female (doctors, nurses) |
| vc_service.wav | SLT (US female) | arctic_a0250 | Friendly young neutral (baristas, waiters) |
| vc_coach.wav | BDL (US male) | arctic_a0070 | Energetic male (coaches, trainers) |
| vc_boss.wav | JMK (Canadian male) | arctic_b0100 | Authoritative mid-age (bosses, interviewers) |
| vc_teacher.wav | RMS (US male) | arctic_b0040 | Thoughtful neutral (teachers, professors) |
| vc_friend.wav | BDL (US male) | arctic_a0200 | Warm peer male (friends, colleagues) |
| vc_family.wav | CLB (US female) | arctic_a0250 | Familial warm (family contexts) |
| vc_travel.wav | KSP (Indian English male) | arctic_a0040 | Professional announcement (gate agents, pilots) |
| vc_default.wav | RMS (US male) | arctic_a0010 | Default neutral fallback |

## How these are used

Lafla's TTS pipeline (`tools/tts-generate.py`) uses Chatterbox TTS
(Resemble AI, open source) with voice cloning. Each generated audio
file takes the timbre/style of the matching reference clip while
speaking the actual lesson text.

The references themselves are NEVER played to the end user — they're
only inputs to the offline generation pipeline. The user only hears
the synthesized output (Chatterbox's voice-cloned reading of Lafla
lesson lines).

## Regenerating

```bash
bash tools/pull-voice-refs.sh
```

Idempotent — overwrites existing files with fresh fetches. Source URLs
(Festvox @ CMU) have been stable since 2003.

## v1.1+ upgrade path

These CMU ARCTIC clips are TTS-research-grade studio recordings —
clean but somewhat flat in prosody. v1.1 plan (see
`docs/NATIVE_VOICE_ACTOR_BRIEF.md`) is to record 10 hand-picked
sahnes with a contracted Turkish-American native voice actor for the
hero personas (vc_match, vc_boss, vc_service). This replaces the
TTS-generated audio for those scenes with true human studio audio
and earns the "🎙️ NATIVE" badge in the UI (cf.
`apps/mobile/data/native-audio-manifest.ts`).
