"""
Lafla offline TTS generation pipeline (Chatterbox + RTX 5060 Ti).

WHAT THIS SCRIPT DOES
─────────────────────
1. Walks `apps/mobile/data/*lesson*.ts` and `apps/mobile/data/*lessons.ts`.
2. Extracts every `roleplay_chat` exercise and pulls each NPC turn's
   `message` string (the literal text we want to voice).
3. For each `(npc_role, setting)` pair, picks a voice from the VOICE_MAP
   (priority is keyword-order in the map — first match wins).
4. Generates an MP3 with Chatterbox TTS (open-source PyTorch model from
   Resemble AI) and writes it to:
       apps/mobile/assets/audio/<voiceId>/<hash>.mp3
5. Skips files that already exist (resumable).
6. Emits `apps/mobile/assets/audio/index.ts` — a literal-keyed Record
   mapping each text-hash to a `require(...)` callback that Metro can
   statically bundle.

DESIGN NOTES
────────────
• The hash MUST stay in lockstep with `hashText()` in
  `apps/mobile/lib/tts-cache.ts`. We replicate djb2-xor here verbatim so
  the JS runtime can re-derive the same filename without any data sync.

• The lesson files are TypeScript modules of literal object syntax
  (no expressions inside `turns[]`). A regex pass is plenty — no AST
  parser dependency required.

• Chatterbox supports voice cloning via a 3–10s reference clip. The
  refs live at `tools/voice-refs/<voiceId>.wav`. If absent, we fall
  back to the model's built-in voice and warn once per voice id.

• Multiprocessing: model load is heavy (~1–2 GB VRAM warm), so each
  worker process loads its own model copy. The model is initialised
  lazily inside the worker.  With 8 GB VRAM on the RTX 5060 Ti, one
  worker (workers=1) is the safe default — bump to 2 only if you've
  confirmed VRAM headroom.

USAGE
─────
    python tools/tts-generate.py
    python tools/tts-generate.py --workers 2 --limit 50  # smoke test
    python tools/tts-generate.py --dry-run               # parse + plan only
"""

from __future__ import annotations

import argparse
import json
import multiprocessing as mp
import os
import re
import sys
import warnings
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

try:
    from tqdm import tqdm
except ImportError:  # pragma: no cover — dev-time only
    def tqdm(it, **_):  # type: ignore[no-redef]
        return it


# ─── paths ────────────────────────────────────────────────────────────────

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = REPO_ROOT / "apps" / "mobile" / "data"
AUDIO_OUT_DIR = REPO_ROOT / "apps" / "mobile" / "assets" / "audio"
INDEX_TS = AUDIO_OUT_DIR / "index.ts"
VOICE_REFS_DIR = REPO_ROOT / "tools" / "voice-refs"


# ─── voice map ────────────────────────────────────────────────────────────
# Order matters: first keyword hit wins. Keep this list in sync with the
# narrative description in tools/voice-refs/README.md.

VOICE_MAP: list[tuple[str, str, list[str]]] = [
    # (voiceId, label, keywords-checked-against-(npc_role + " " + setting).lower())
    ("vc_match",   "warm-casual-female",        ["match", "tinder", "date", "flirt"]),
    ("vc_doctor",  "professional-clear-female", ["doctor", "dr.", "hospital", "clinic", "nurse", "pharmacy", "pharmacist"]),
    ("vc_service", "friendly-young-neutral",    ["barista", "waiter", "server", "cashier", "shop assistant", "store associate"]),
    ("vc_coach",   "energetic-male",            ["coach", "trainer", " pt ", "gym"]),
    ("vc_boss",    "authoritative-mid-age",     ["boss", "manager", "interviewer", "director", "examiner"]),
    ("vc_teacher", "thoughtful-neutral",        ["teacher", "professor", "tutor"]),
    ("vc_friend",  "warm-peer-male",            ["friend", "buddy", "roommate", "colleague", "coworker"]),
    ("vc_family",  "familial-warm",             ["family", "mom", "dad", "cousin", "sibling", "aunt", "uncle"]),
    ("vc_travel",  "professional-announcement", ["pilot", "gate agent", "flight crew", "stewardess", "concierge"]),
]
DEFAULT_VOICE_ID = "vc_default"
DEFAULT_VOICE_LABEL = "default-neutral"


# ─── regexes for the lesson parser ────────────────────────────────────────
# Lesson files use TS literal object syntax — no expressions inside `turns`,
# so a careful regex pass extracts everything we need.

# Matches "type: 'roleplay_chat'" or `type: "roleplay_chat"`.
RE_ROLEPLAY_TYPE = re.compile(r"""type\s*:\s*["']roleplay_chat["']""")

# Captures the inside of `npc_role: "..."` (either quote style).
RE_NPC_ROLE = re.compile(r"""npc_role\s*:\s*(["'])(?P<v>.*?)\1""")
RE_SETTING = re.compile(r"""setting\s*:\s*(["'])(?P<v>.*?)\1""")

# Inside a `turns: [ ... ]` array we look for blocks
#     { speaker: "npc", message: "..." }
# The message can be a regular string OR a template literal in backticks.
# We MUST handle escaped quotes inside double-quoted strings.
RE_NPC_BLOCK = re.compile(
    r"""\{\s*
        speaker\s*:\s*["']npc["']\s*,\s*
        message\s*:\s*
        (?:
            "(?P<dq>(?:[^"\\]|\\.)*)"
          | '(?P<sq>(?:[^'\\]|\\.)*)'
          | `(?P<bt>(?:[^`\\]|\\.)*)`
        )
        \s*[,}]
    """,
    re.VERBOSE | re.DOTALL,
)

# Pulls the body of a `turns: [ ... ]` array. Counts brackets to handle
# nested arrays (acceptable_patterns lists, etc.).
def _slice_turns_arrays(source: str) -> Iterable[str]:
    """Yields the text inside each `turns: [ ... ]` array."""
    idx = 0
    while True:
        m = re.search(r"turns\s*:\s*\[", source[idx:])
        if not m:
            return
        start = idx + m.end()  # position right after the opening `[`
        depth = 1
        i = start
        while i < len(source) and depth > 0:
            c = source[i]
            if c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    yield source[start:i]
                    idx = i + 1
                    break
            i += 1
        else:
            return  # unbalanced — give up on this file


# ─── data structures ──────────────────────────────────────────────────────

@dataclass(frozen=True)
class Job:
    """One MP3 we need to generate."""
    text: str
    voice_id: str
    out_path: Path           # absolute target file
    rel_require_path: str    # what we write into index.ts as the require arg

    @property
    def hash(self) -> str:
        return djb2_hash(self.text, self.voice_id)


# ─── hashing (must mirror lib/tts-cache.ts:hashText) ──────────────────────

def djb2_hash(text: str, voice_id: str) -> str:
    """
    Bernstein djb2-xor over `text + "|" + voice_id`, masked to uint32,
    formatted as zero-padded 8-char hex.

    PORT NOTE: bit-for-bit identical to `hashText()` in
    apps/mobile/lib/tts-cache.ts. If you change one, change both.
    """
    s = f"{text}|{voice_id}"
    h = 5381
    for ch in s:
        # Python ints are unbounded — apply uint32 mask after every op.
        h = (((h << 5) + h) ^ ord(ch)) & 0xFFFFFFFF
    return f"{h:08x}"


# ─── parsing ──────────────────────────────────────────────────────────────

def _unescape_ts_string(raw: str) -> str:
    """
    Cheap-and-good JS/TS string unescape: \\n, \\t, \\", \\', \\\\, \\u00XX.
    json.loads handles all of these once we wrap the raw value in quotes,
    but we have to neutralise any embedded raw newlines (rare but legal in
    backtick literals) first.
    """
    # Remove raw newlines — TTS doesn't care about layout.
    cleaned = raw.replace("\r\n", " ").replace("\n", " ").replace("\r", " ")
    # Re-quote and let json do the heavy lifting. Escape inner double quotes
    # that weren't escaped (won't happen for double-quoted source, but safe
    # for backtick literals).
    try:
        # Most strings already escape inner double quotes; the rare backtick
        # case might have raw ". Re-escape any unescaped double quote.
        safe = re.sub(r'(?<!\\)"', r'\\"', cleaned)
        return json.loads(f'"{safe}"')
    except json.JSONDecodeError:
        return cleaned


def pick_voice(npc_role: str, setting: str) -> tuple[str, str]:
    """Return (voiceId, voiceLabel) by keyword priority."""
    haystack = f"{npc_role} {setting}".lower()
    for voice_id, label, keywords in VOICE_MAP:
        for kw in keywords:
            if kw in haystack:
                return voice_id, label
    return DEFAULT_VOICE_ID, DEFAULT_VOICE_LABEL


def extract_jobs(lesson_path: Path) -> list[Job]:
    """Parse a single lesson file and return the Jobs it implies."""
    src = lesson_path.read_text(encoding="utf-8")
    jobs: list[Job] = []

    # We need (npc_role, setting) context for each `turns` block. Because
    # the file is linear, we walk roleplay_chat blocks in order and snip
    # the surrounding text up to the next exercise.
    #
    # Simpler approach: split the file on `{` to find exercise objects;
    # for each one that contains type:"roleplay_chat", harvest its role
    # and setting and any npc blocks inside its `turns: [...]`.

    # Find every "{" at start of an exercise — approximated as a "{ id:"
    # boundary. Lesson files reliably begin each exercise with `id:`.
    # We use that to demarcate exercise scopes.
    exercise_starts = [m.start() for m in re.finditer(r"\{\s*\n?\s*id\s*:", src)]
    exercise_starts.append(len(src))

    for i in range(len(exercise_starts) - 1):
        block = src[exercise_starts[i] : exercise_starts[i + 1]]
        if not RE_ROLEPLAY_TYPE.search(block):
            continue

        role_m = RE_NPC_ROLE.search(block)
        setting_m = RE_SETTING.search(block)
        npc_role = role_m.group("v") if role_m else ""
        setting = setting_m.group("v") if setting_m else ""

        voice_id, _label = pick_voice(npc_role, setting)

        # Each exercise has at most one `turns: [ ... ]`. _slice_turns_arrays
        # returns its inner body.
        for turns_body in _slice_turns_arrays(block):
            for npc_m in RE_NPC_BLOCK.finditer(turns_body):
                raw = npc_m.group("dq") or npc_m.group("sq") or npc_m.group("bt") or ""
                text = _unescape_ts_string(raw).strip()
                if not text:
                    continue

                out_dir = AUDIO_OUT_DIR / voice_id
                hashv = djb2_hash(text, voice_id)
                out_path = out_dir / f"{hashv}.mp3"
                rel_require = f"./{voice_id}/{hashv}.mp3"
                jobs.append(Job(text=text, voice_id=voice_id, out_path=out_path, rel_require_path=rel_require))

    return jobs


def collect_all_jobs() -> list[Job]:
    files = sorted(
        list(DATA_DIR.glob("*lesson*.ts")) + list(DATA_DIR.glob("*lessons.ts"))
    )
    # Dedupe by filename so `*lesson*.ts` matching `*lessons.ts` doesn't double up.
    seen_paths: set[Path] = set()
    unique_files = []
    for f in files:
        if f in seen_paths:
            continue
        seen_paths.add(f)
        unique_files.append(f)

    all_jobs: list[Job] = []
    for f in unique_files:
        try:
            all_jobs.extend(extract_jobs(f))
        except Exception as e:  # noqa: BLE001
            print(f"[warn] failed to parse {f.name}: {e}", file=sys.stderr)

    # De-duplicate by hash — identical text+voice should generate once.
    by_hash: dict[str, Job] = {}
    for j in all_jobs:
        by_hash.setdefault(j.hash, j)
    return list(by_hash.values())


# ─── Chatterbox generation ────────────────────────────────────────────────

_MODEL_SINGLETON = None  # per-worker
_MISSING_REF_WARNED: set[str] = set()


def _get_model():
    """Lazy-load Chatterbox in the worker process."""
    global _MODEL_SINGLETON
    if _MODEL_SINGLETON is not None:
        return _MODEL_SINGLETON

    try:
        # Hide chatterbox's noisy warnings on import.
        with warnings.catch_warnings():
            warnings.simplefilter("ignore")
            from chatterbox.tts import ChatterboxTTS  # type: ignore
        import torch  # type: ignore
    except ImportError as e:
        raise SystemExit(
            "Chatterbox / torch not installed. See docs/CHATTERBOX_SETUP.md.\n"
            f"ImportError: {e}"
        )

    device = "cuda" if torch.cuda.is_available() else "cpu"
    if device == "cpu":
        print("[warn] CUDA not available — falling back to CPU (very slow).", file=sys.stderr)
    _MODEL_SINGLETON = ChatterboxTTS.from_pretrained(device=device)
    return _MODEL_SINGLETON


def _resolve_voice_ref(voice_id: str) -> Path | None:
    """Return path to the reference wav, or None if not present."""
    candidate = VOICE_REFS_DIR / f"{voice_id}.wav"
    if candidate.exists():
        return candidate
    if voice_id not in _MISSING_REF_WARNED:
        _MISSING_REF_WARNED.add(voice_id)
        print(
            f"[warn] no voice reference at {candidate.relative_to(REPO_ROOT)} — "
            f"using Chatterbox default voice for {voice_id}.",
            file=sys.stderr,
        )
    return None


def _generate_one(job: Job) -> tuple[str, bool, str]:
    """
    Worker entry point. Returns (job.hash, success, message).
    Designed to never raise — failures are reported via return value so the
    parent's progress bar keeps moving.
    """
    if job.out_path.exists():
        return job.hash, True, "skipped"

    try:
        model = _get_model()
        import soundfile as sf  # type: ignore
        import torch  # type: ignore

        ref = _resolve_voice_ref(job.voice_id)
        gen_kwargs = {"text": job.text}
        if ref is not None:
            gen_kwargs["audio_prompt_path"] = str(ref)

        with torch.inference_mode():
            wav = model.generate(**gen_kwargs)

        # Chatterbox returns a torch.Tensor [1, T] at the model's sample rate.
        sr = getattr(model, "sr", 24000)
        if hasattr(wav, "detach"):
            wav = wav.detach().cpu().numpy().squeeze()

        job.out_path.parent.mkdir(parents=True, exist_ok=True)

        # Write WAV first, then transcode to MP3 via pydub (uses ffmpeg).
        # If pydub isn't around, fall back to writing WAV — the index.ts
        # output below uses .mp3 extensions, so we strongly prefer MP3.
        tmp_wav = job.out_path.with_suffix(".wav")
        sf.write(tmp_wav, wav, sr)
        try:
            from pydub import AudioSegment  # type: ignore
            seg = AudioSegment.from_wav(tmp_wav)
            seg.export(job.out_path, format="mp3", bitrate="64k")
            tmp_wav.unlink(missing_ok=True)
        except Exception as e:  # noqa: BLE001
            # No pydub/ffmpeg — keep the wav but warn loudly.
            tmp_wav.rename(job.out_path.with_suffix(".wav"))
            return job.hash, False, f"wrote .wav (no ffmpeg/pydub): {e}"

        return job.hash, True, "generated"
    except Exception as e:  # noqa: BLE001
        return job.hash, False, f"error: {e}"


# ─── index.ts emitter ─────────────────────────────────────────────────────

INDEX_TS_HEADER = """\
// AUTO-GENERATED by tools/tts-generate.py — do not hand-edit.
// Maps djb2(text + "|" + voiceId) → require() of bundled MP3.
// The mobile runtime computes the same hash via lib/tts-cache.ts:hashText.
"""


def write_index_ts(jobs: list[Job]) -> None:
    """Emit the literal-keyed require map Metro can statically bundle."""
    # Only include jobs whose MP3 actually exists on disk — we don't want
    # to require() a missing file at build time.
    present = [j for j in jobs if j.out_path.exists()]
    lines = [INDEX_TS_HEADER, "", "export const AUDIO_INDEX: Record<string, () => any> = {"]
    for j in sorted(present, key=lambda j: j.hash):
        # double-quoted require path is fine — voice IDs and hashes are ASCII.
        lines.append(f'  "{j.hash}": () => require("{j.rel_require_path}"),')
    lines.append("};")
    lines.append("")
    INDEX_TS.write_text("\n".join(lines), encoding="utf-8")


# ─── main ─────────────────────────────────────────────────────────────────

def main() -> int:
    ap = argparse.ArgumentParser(description="Lafla offline TTS pipeline (Chatterbox).")
    ap.add_argument("--workers", type=int, default=1,
                    help="Parallel generation workers (default 1; bump only with VRAM headroom).")
    ap.add_argument("--limit", type=int, default=None,
                    help="Smoke test: only generate the first N missing jobs.")
    ap.add_argument("--dry-run", action="store_true",
                    help="Parse and plan only; don't load the model or write MP3s.")
    args = ap.parse_args()

    AUDIO_OUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"[info] scanning {DATA_DIR}")
    jobs = collect_all_jobs()
    by_voice: dict[str, int] = {}
    for j in jobs:
        by_voice[j.voice_id] = by_voice.get(j.voice_id, 0) + 1

    already = sum(1 for j in jobs if j.out_path.exists())
    todo = [j for j in jobs if not j.out_path.exists()]
    if args.limit is not None:
        todo = todo[: args.limit]

    print(f"[info] {len(jobs)} unique NPC utterances across {len(by_voice)} voices")
    for voice_id, count in sorted(by_voice.items(), key=lambda kv: -kv[1]):
        print(f"       {voice_id:<14}{count:>5}")
    print(f"[info] {already} already on disk, {len(todo)} to generate")

    if args.dry_run:
        write_index_ts(jobs)
        print(f"[info] dry-run done; wrote {INDEX_TS} for already-present files")
        return 0

    if not todo:
        write_index_ts(jobs)
        print("[info] nothing to do — index.ts refreshed.")
        return 0

    # Multiprocessing — each worker holds its own model copy in VRAM.
    if args.workers > 1:
        ctx = mp.get_context("spawn")  # safe for CUDA
        with ctx.Pool(processes=args.workers) as pool:
            results = list(tqdm(
                pool.imap_unordered(_generate_one, todo, chunksize=1),
                total=len(todo),
                desc="generate",
                unit="clip",
            ))
    else:
        results = []
        for j in tqdm(todo, desc="generate", unit="clip"):
            results.append(_generate_one(j))

    ok = sum(1 for _h, success, _msg in results if success)
    fail = len(results) - ok
    print(f"[info] generated {ok} / {len(todo)} ({fail} failed)")
    if fail:
        for h, success, msg in results:
            if not success:
                print(f"  {h}: {msg}", file=sys.stderr)

    write_index_ts(jobs)
    print(f"[info] wrote {INDEX_TS}")
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
