# Voice references for Chatterbox cloning

Drop a 3–10 second `.wav` clip here for each voice id below. Chatterbox uses
it as the timbre/style anchor; without it the model falls back to its built-in
voice and `tts-generate.py` warns once per missing id.

## Format requirements

- **Container/codec**: WAV, PCM 16-bit, mono
- **Sample rate**: 24000 Hz (Chatterbox's native). 16 kHz / 22.05 kHz / 44.1 kHz
  also work — the model resamples internally.
- **Length**: 3–10 s. Shorter sounds robotic, longer wastes encoder budget.
- **Content**: any English speech. Clean room tone, no music, no overlapping
  voices. A single sentence delivered in the target style is ideal.

## Voices

| File | Persona | Tone notes |
| --- | --- | --- |
| `vc_match.wav` | Warm casual female | Mid-20s, flirty but grounded. Slight smile in voice, conversational pace. Used for Tinder / date / flirt NPCs. |
| `vc_doctor.wav` | Professional clear female | 30s–40s, calm authority. Clear consonants, unhurried. Used for doctors, nurses, pharmacists, clinic staff. |
| `vc_service.wav` | Friendly young neutral | 20s, upbeat service worker. Brisk but warm, smiles audibly. Used for baristas, waiters, servers, cashiers, shop assistants. |
| `vc_coach.wav` | Energetic male | 30s, gym-coach energy. Forward, encouraging, slightly louder. Used for coaches, trainers, PTs. |
| `vc_boss.wav` | Authoritative mid-age | 40s, executive presence. Lower register, deliberate cadence. Used for bosses, managers, interviewers, directors, examiners. |
| `vc_teacher.wav` | Thoughtful neutral | 30s, classroom teacher. Patient, articulate, slight upward intonation on questions. Used for teachers, professors, tutors. |
| `vc_friend.wav` | Warm peer male | 20s–30s, friend-group voice. Relaxed, occasional laughter in delivery. Used for friends, buddies, roommates, colleagues, coworkers. |
| `vc_family.wav` | Familial warm | Older female (40s–60s), motherly warmth. Slight rasp ok, comforting. Used for family/mom/dad/cousin contexts. |
| `vc_travel.wav` | Professional announcement | Neutral 30s, gate-agent / cabin-crew cadence. Even pacing, scripted feel. Used for pilots, gate agents, flight crew, concierges. |
| `vc_default.wav` | Default neutral | Mid-Atlantic neutral. Anchor for any role that doesn't match the keyword map. |

## Where to source samples (legal / cheap)

1. **Record your own** — quietest room you have, USB mic, single take, no
   processing. This is what the rest of the open-source TTS community
   actually does and is by far the highest quality option.
2. **Pixabay Voice** (`pixabay.com/sound-effects/search/voice/`) — CC0
   spoken-word clips. Filter by gender/age. Trim to 5 s.
3. **Mozilla Common Voice** dataset — CC0 by speaker. Pick a Validated
   clip that matches the persona.
4. **LibriVox** public-domain audiobooks — pull a 5 s phrase from a
   speaker whose voice fits.

DO NOT use clips of named/identifiable celebrities or actors without a
licence — Chatterbox includes a Resemble AI watermark in every output to
discourage misuse, but the legal/ethical guard is still on us.

## After dropping clips

Run the generator again:

```powershell
python tools/tts-generate.py
```

The script is resumable — it only regenerates MP3s that don't exist yet.
If you want to refresh a voice after swapping its reference, delete the
voice's folder under `apps/mobile/assets/audio/` first:

```powershell
Remove-Item -Recurse apps/mobile/assets/audio/vc_match
python tools/tts-generate.py
```
