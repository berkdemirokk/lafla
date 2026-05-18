# Chatterbox TTS — offline generation pipeline

Lafla's premium voices are pre-rendered offline with
[Chatterbox](https://github.com/resemble-ai/chatterbox) (open-source PyTorch
TTS from Resemble AI) and bundled into the iOS app as static MP3 assets.

This means:

- No runtime LLM / API calls — every NPC line is a `require()` away.
- No ElevenLabs spend, no Cloudflare Worker dependency.
- App works **fully offline** for the bundled lessons.
- Apple's Siri TTS stays only as a last-resort fallback.

The pipeline runs **once on your local machine**, ships the MP3s in the
app bundle, and is regenerated only when lesson text changes.

---

## 1. Prerequisites

| Component | Required version | Notes |
| --- | --- | --- |
| Python | 3.10 or 3.11 | 3.12 also works; 3.13 sometimes lags on PyTorch wheels |
| NVIDIA driver | latest | check `nvidia-smi`. Mine: RTX 5060 Ti 8 GB |
| CUDA Toolkit | 12.1 (matches torch cu121 wheels) | not strictly required if you only need runtime CUDA — the PyTorch wheel ships the runtime, but having Toolkit installed makes debug easier |
| FFmpeg | 6.x | needed for MP3 transcoding (`pydub` shells out to it) |
| Git LFS | optional | only if you also store voice-ref `.wav` files in git |

Confirm GPU is visible:

```powershell
nvidia-smi
```

You should see your RTX 5060 Ti with 8 GB VRAM and the driver version.

---

## 2. Install (Windows)

From the repo root (`C:\Users\berk\eng\lafla`):

```powershell
# 1. fresh venv (kept out of the main pnpm workspace)
python -m venv .venv-tts
.\.venv-tts\Scripts\Activate.ps1

# 2. PyTorch — CUDA 12.1 build
pip install --upgrade pip
pip install torch --index-url https://download.pytorch.org/whl/cu121

# 3. Chatterbox + audio helpers
pip install chatterbox-tts soundfile tqdm pydub

# 4. sanity check: GPU is visible from torch
python -c "import torch; print('cuda:', torch.cuda.is_available(), '|', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'n/a')"
```

Install FFmpeg if it isn't already on `PATH`:

```powershell
winget install --id=Gyan.FFmpeg -e
# restart the shell so PATH picks up the new entry, then:
ffmpeg -version
```

---

## 3. Provide voice references (optional but recommended)

Add a 3–10 s clean `.wav` clip for each of the 10 voice IDs at
`tools/voice-refs/`. See `tools/voice-refs/README.md` for the full persona
spec and legal sourcing options.

If you skip this step the generator still runs — Chatterbox falls back to
its built-in voice and warns once per missing id. Quality is fine for a
proof-of-concept; the cloned voices are noticeably more distinct.

---

## 4. Run the generator

```powershell
# all ~3500 unique NPC lines, single GPU worker
python tools/tts-generate.py

# smoke test — first 20 lines only
python tools/tts-generate.py --limit 20

# parse + planning only, no model load
python tools/tts-generate.py --dry-run
```

What you'll see:

```
[info] scanning C:\Users\berk\eng\lafla\apps\mobile\data
[info] 3221 unique NPC utterances across 10 voices
       vc_default      1024
       vc_friend        612
       ...
[info] 0 already on disk, 3221 to generate
generate: 100%|████████████| 3221/3221 [1:48:00<00:00,  2.0s/clip]
[info] generated 3221 / 3221 (0 failed)
[info] wrote apps\mobile\assets\audio\index.ts
```

### Expected throughput on RTX 5060 Ti (8 GB)

Chatterbox runs around **0.4–0.7 s per second of synthesised audio** on
this class of GPU. NPC turns average ~3 s of audio each, so ~2 s/clip
end-to-end with the MP3 transcode step.

- ~3500 unique clips × ~2 s ≈ **2 hours** for a full first pass.
- Resumable: rerunning skips files that already exist.
- `--workers 2` is possible but will spike VRAM to ~6.5 GB; only safe with
  no other GPU workload running.

---

## 5. Bundle size & shipping strategy

Each MP3 is ~80–150 KB at 64 kbps mono.

- ~3500 clips × ~120 KB ≈ **~420 MB raw**.

That's far above Apple's **200 MB cellular download cap** (and inflates
binary size on every install). The plan:

1. **Phase 1 (now)**: Generate everything locally, but only `require()` the
   top 50 lessons (~150 MB) in `audio/index.ts`. The script writes a full
   `AUDIO_INDEX` of what's on disk; you'll filter that to the bundled subset
   before shipping. Anything not in `AUDIO_INDEX` falls through to Siri TTS
   at runtime (existing behaviour).
2. **Phase 2 (later)**: Move the rest to **Cloudflare R2** (10 GB free
   tier). The mobile app downloads + caches them on first play via the same
   `lib/tts-cache.ts` machinery that's already wired for ElevenLabs. No
   Worker needed — just an open R2 bucket with the MP3s named by hash.
3. **Phase 3 (much later)**: If we ever break 10 GB on R2, B2 or DO Spaces
   are the cheap next steps.

The hash function is **identical** in Python and JS (djb2 over
`text + "|" + voiceId`, masked to uint32, 8-char hex). That means a file
written by the Python script is findable by the mobile runtime at the
same path with zero extra plumbing.

---

## 6. Regenerating

After editing lessons, just rerun:

```powershell
python tools/tts-generate.py
```

It hashes the new text and only generates the diff. If you swap a voice
reference and want all clips for that voice re-cut:

```powershell
Remove-Item -Recurse apps\mobile\assets\audio\vc_match
python tools/tts-generate.py
```

---

## 7. Troubleshooting

| Symptom | Fix |
| --- | --- |
| `RuntimeError: CUDA out of memory` | Drop `--workers` to 1, close any other GPU app, or restart the shell. |
| `OSError: cannot find ffmpeg` | Install FFmpeg (see step 2) and restart the shell. |
| Worker hangs on first clip | First call loads weights from HuggingFace cache (~2 GB download). Let it finish — only happens once. |
| `index.ts` is empty | The generator only adds entries whose MP3 actually exists on disk. Did the run fail before any clip succeeded? Check the per-job error messages in the run output. |
| Mobile build complains about `require("./vc_x/abc12345.mp3")` | The MP3 must exist on disk at generate time — Metro statically resolves the path. Rerun the generator. |

---

## 8. What this script does NOT do

- It does **not** call any remote API. Chatterbox runs entirely on-device.
- It does **not** delete old MP3s — orphaned files from removed lessons
  stay around until you `git clean` the audio folder.
- It does **not** modify lesson `.ts` files. The generator only reads.

The script is at `tools/tts-generate.py`; the output index is at
`apps/mobile/assets/audio/index.ts`. The runtime that reads them is in
`apps/mobile/lib/tts.ts`.
