#!/usr/bin/env python3
"""
top-50-selector.py — Pick the lessons we ship inside the iOS app bundle.

Why this script exists
----------------------
The Lafla app has ~980 BundledLesson objects, each with one or more
roleplay_chat exercises whose NPC turns are pre-rendered MP3s. Shipping
the full audio set would blow past the App Store cellular download cap
(200 MB) and bloat install size. Strategy: bundle the ~50 lessons a
first-week user is most likely to touch; let the rest stream from the
Cloudflare Worker on demand.

This script reads the TS lesson + scene files, scores every lesson by
"first-week touchpoint probability", and emits `bundle-priority.json` —
a flat list of lesson IDs that `tools/tts-generate.py` will eventually
consume to decide what gets pre-rendered for the bundle.

Scoring heuristic (defended below; tuned for a Turkish-speaking learner
opening the app for the first time)
--------------------------------------------------------------------
* CEFR level bonus — first-week users skew A1–B1; the long-tail C1
  scenes get rendered on demand.
    A1 +30, A2 +25, B1 +15, B2 +5, C1 -10
* Mode bonus — `order` and `travel` are the highest-intent "I'm leaving
  for vacation tomorrow" moments. `daily` / `social` are
  everyday-survival staples. Work/flirt/banter follow. `sport`/`health`
  are niche unless personalized. `testprep` is power-user, deferred.
    order +20, travel +18, daily +15, social +15, work +10, flirt +8,
    banter +5, sport +3, health +3, career +5, academic +0,
    professional +5, personal +5, testprep -10
* isNew flag +15 — Lafla intentionally surfaces these in Home rows; if
  product picked it, we should bundle it.
* Skill-position bonus +25 — lessonId ending in `.1` is the first lesson
  of a skill (onboarding-shaped); these are disproportionately the
  first thing a user opens after picking a row.
* Roleplay turn count — longer scenarios feel like a "complete" tutorial
  moment, so we weight slightly toward depth. +1 per user turn across
  all roleplay_chat exercises, capped at +10 so a single chatty lesson
  can't dominate.
* Penalty for IELTS / TOEFL / YDS — -15 on top of the testprep mode
  penalty. These are big lesson sets that bloat the bundle and serve a
  tiny first-week audience.

Output
------
* stdout: top-N picks with score breakdown, mode + CEFR histograms,
  estimated audio bundle size, and a second-tier preview (N+1 .. 2N).
* file:  apps/mobile/data/bundle-priority.json — `["lesson.id", ...]`

Stdlib only — runs without any pip install. Parses the TS sources with
regex; we keep it conservative and only look at the fields the scoring
needs. Imperfect but good enough for a deterministic, reviewable list.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable

# --------------------------------------------------------------------------
# Paths
# --------------------------------------------------------------------------
# Repo layout: <repo>/tools/top-50-selector.py and <repo>/apps/mobile/data/
REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = REPO_ROOT / "apps" / "mobile" / "data"
OUTPUT_FILE = DATA_DIR / "bundle-priority.json"

# Estimated audio sizing (very rough, used only for a sanity-check print).
# Average lesson has ~1–2 roleplay_chat exercises; each has ~3 NPC turns;
# each MP3 ~18 KB at the bitrate tts-generate.py uses. We compute against
# the *actual* parsed NPC turn count per selected lesson when available
# and fall back to a 3-NPC default if no roleplay exercises were found.
MP3_KB_PER_NPC_TURN = 18
DEFAULT_NPC_TURNS_FALLBACK = 3


# --------------------------------------------------------------------------
# Scoring constants (kept at module top so they're easy to tweak)
# --------------------------------------------------------------------------
CEFR_BONUS = {
    "A1": 30,
    "A2": 25,
    "B1": 15,
    "B2": 5,
    "C1": -10,
    "C2": -15,
}

MODE_BONUS = {
    "order": 20,
    "travel": 18,
    "daily": 15,
    "social": 15,
    "work": 10,
    "flirt": 8,
    "banter": 5,
    "sport": 3,
    "health": 3,
    "career": 5,
    "academic": 0,
    "professional": 5,
    "personal": 5,
    "testprep": -10,
}

IS_NEW_BONUS = 15
FIRST_LESSON_OF_SKILL_BONUS = 25
USER_TURN_BONUS_PER = 1
USER_TURN_BONUS_CAP = 10
TESTPREP_KEYWORD_PENALTY = -15


# --------------------------------------------------------------------------
# Data models
# --------------------------------------------------------------------------
@dataclass
class Scene:
    lesson_id: str
    mode: str | None = None
    cefr_level: str | None = None
    skill_id: str | None = None
    is_new: bool = False


@dataclass
class Lesson:
    id: str
    skill_id: str | None = None
    user_turn_count: int = 0
    npc_turn_count: int = 0


@dataclass
class ScoredLesson:
    lesson_id: str
    total: int
    breakdown: dict[str, int] = field(default_factory=dict)
    mode: str | None = None
    cefr_level: str | None = None
    npc_turn_count: int = 0


# --------------------------------------------------------------------------
# Regex parsers
# --------------------------------------------------------------------------
# Scene objects can be detected by the presence of a `lessonId:` field —
# that field is unique to Scene literals in this codebase (BundledLessons
# use `id:` only). We walk each scene object's brace region and extract
# the simple scalar fields with targeted patterns.
#
# These regexes are intentionally tolerant of multiline string literals,
# trailing commas, and quote-style variation.

# Anchor at `lessonId:` to find each scene block, then look backwards
# from there for the enclosing object. Easier: split on top-level objects
# by scanning for `{ ... }` blocks that contain `lessonId:`.
SCENE_BLOCK_RE = re.compile(
    r"\{[^{}]*?lessonId:\s*\"([^\"]+)\"[^{}]*?\}",
    re.DOTALL,
)

# Inside a scene block we pull individual fields with field-specific regexes.
SCENE_MODE_RE = re.compile(r"mode:\s*\"([^\"]+)\"")
SCENE_CEFR_RE = re.compile(r"cefrLevel:\s*\"([^\"]+)\"")
SCENE_SKILL_RE = re.compile(r"skillId:\s*\"([^\"]+)\"")
SCENE_IS_NEW_RE = re.compile(r"isNew:\s*(true|false)")
SCENE_LESSON_ID_RE = re.compile(r"lessonId:\s*\"([^\"]+)\"")

# Lesson objects: every BundledLesson literal has `id:` + `skill_id:` near
# the top. We use that combination as a stable anchor to avoid matching
# stray nested objects (exercises, recap quiz entries, etc.).
LESSON_ANCHOR_RE = re.compile(
    r"id:\s*\"([a-zA-Z0-9_.\-]+)\"\s*,\s*\n\s*skill_id:\s*\"([a-zA-Z0-9_.\-]+)\"",
)

# Roleplay turn counting — we count `speaker: "user"` and `speaker: "npc"`
# occurrences inside each lesson's text region. We bucket turns to the
# nearest preceding lesson anchor so a lesson file with many lessons gets
# correct per-lesson counts.
SPEAKER_RE = re.compile(r"speaker:\s*\"(user|npc)\"")


# --------------------------------------------------------------------------
# File loading
# --------------------------------------------------------------------------
def iter_scene_files(data_dir: Path) -> Iterable[Path]:
    """Match *scenes*.ts and the aggregator scenes.ts."""
    for p in sorted(data_dir.glob("*.ts")):
        name = p.name
        if "scenes" in name:
            yield p


def iter_lesson_files(data_dir: Path) -> Iterable[Path]:
    """
    Match *lesson*.ts files but skip the aggregator `lessons.ts` (pure
    imports; no inline lesson data). The aggregator parses harmlessly
    but adds noise to error messages.
    """
    for p in sorted(data_dir.glob("*.ts")):
        name = p.name
        if "lesson" not in name:
            continue
        if name == "lessons.ts":
            # Pure barrel file — skip.
            continue
        if "scenes" in name:
            # Belongs to scenes parser; some files have both substrings.
            continue
        yield p


def parse_scenes(data_dir: Path) -> dict[str, Scene]:
    """
    Parse every scene file and return {lesson_id: Scene}. If two scenes
    point at the same lesson_id we keep the first; downstream we just
    need mode/cefr/isNew which are stable for a given lesson.
    """
    scenes: dict[str, Scene] = {}
    for path in iter_scene_files(data_dir):
        text = path.read_text(encoding="utf-8")
        for block_match in SCENE_BLOCK_RE.finditer(text):
            block = block_match.group(0)
            lesson_id_m = SCENE_LESSON_ID_RE.search(block)
            if not lesson_id_m:
                continue
            lesson_id = lesson_id_m.group(1)
            if lesson_id in scenes:
                continue
            mode_m = SCENE_MODE_RE.search(block)
            cefr_m = SCENE_CEFR_RE.search(block)
            skill_m = SCENE_SKILL_RE.search(block)
            is_new_m = SCENE_IS_NEW_RE.search(block)
            scenes[lesson_id] = Scene(
                lesson_id=lesson_id,
                mode=mode_m.group(1) if mode_m else None,
                cefr_level=cefr_m.group(1) if cefr_m else None,
                skill_id=skill_m.group(1) if skill_m else None,
                is_new=(is_new_m.group(1) == "true") if is_new_m else False,
            )
    return scenes


def parse_lessons(data_dir: Path) -> dict[str, Lesson]:
    """
    Parse every lesson file. For each BundledLesson anchor we record the
    id + skill_id, then count user/npc speaker turns occurring in the
    text region between this anchor and the next.
    """
    lessons: dict[str, Lesson] = {}
    for path in iter_lesson_files(data_dir):
        text = path.read_text(encoding="utf-8")
        anchors = list(LESSON_ANCHOR_RE.finditer(text))
        for i, m in enumerate(anchors):
            lesson_id = m.group(1)
            skill_id = m.group(2)
            start = m.end()
            end = anchors[i + 1].start() if i + 1 < len(anchors) else len(text)
            region = text[start:end]
            user_turns = 0
            npc_turns = 0
            for sp in SPEAKER_RE.finditer(region):
                if sp.group(1) == "user":
                    user_turns += 1
                else:
                    npc_turns += 1
            # First occurrence wins — but in practice ids are unique
            # across the lesson corpus.
            if lesson_id not in lessons:
                lessons[lesson_id] = Lesson(
                    id=lesson_id,
                    skill_id=skill_id,
                    user_turn_count=user_turns,
                    npc_turn_count=npc_turns,
                )
    return lessons


# --------------------------------------------------------------------------
# Scoring
# --------------------------------------------------------------------------
def score_lesson(lesson: Lesson, scene: Scene | None) -> ScoredLesson:
    breakdown: dict[str, int] = {}

    # CEFR — only scored if we have it from the scene side.
    cefr = scene.cefr_level if scene else None
    if cefr and cefr in CEFR_BONUS:
        breakdown["cefr"] = CEFR_BONUS[cefr]

    # Mode bonus.
    mode = scene.mode if scene else None
    if mode and mode in MODE_BONUS:
        breakdown["mode"] = MODE_BONUS[mode]

    # isNew flag.
    if scene and scene.is_new:
        breakdown["isNew"] = IS_NEW_BONUS

    # First-lesson-of-skill bonus. The convention is "{skill}.{group}.{idx}"
    # — e.g. `order.cafe.1.1` is the first lesson of `order.cafe`. We match
    # any lesson id that ends with `.1`, which catches both `.1.1` and
    # plain `.1` skill-position conventions.
    if lesson.id.endswith(".1"):
        breakdown["firstLesson"] = FIRST_LESSON_OF_SKILL_BONUS

    # Roleplay user-turn depth.
    if lesson.user_turn_count > 0:
        bonus = min(
            lesson.user_turn_count * USER_TURN_BONUS_PER, USER_TURN_BONUS_CAP
        )
        breakdown["userTurns"] = bonus

    # Test-prep keyword penalty — applies in addition to the mode penalty
    # because these lessons are *both* niche AND audio-heavy.
    low = lesson.id.lower()
    if any(k in low for k in ("ielts", "toefl", "yds", "yokdil")):
        breakdown["testprepKeyword"] = TESTPREP_KEYWORD_PENALTY

    total = sum(breakdown.values())
    return ScoredLesson(
        lesson_id=lesson.id,
        total=total,
        breakdown=breakdown,
        mode=mode,
        cefr_level=cefr,
        npc_turn_count=lesson.npc_turn_count,
    )


def rank_lessons(
    lessons: dict[str, Lesson], scenes: dict[str, Scene]
) -> list[ScoredLesson]:
    scored = [score_lesson(l, scenes.get(l.id)) for l in lessons.values()]
    # Stable tiebreak: higher total, then lesson_id alphabetical so the
    # output is deterministic across runs.
    scored.sort(key=lambda s: (-s.total, s.lesson_id))
    return scored


# --------------------------------------------------------------------------
# Reporting
# --------------------------------------------------------------------------
def format_breakdown(b: dict[str, int]) -> str:
    if not b:
        return "(no signals)"
    parts = [f"{k}={v:+d}" for k, v in b.items()]
    return ", ".join(parts)


def estimate_bundle_kb(picks: list[ScoredLesson]) -> int:
    total = 0
    for p in picks:
        turns = p.npc_turn_count or DEFAULT_NPC_TURNS_FALLBACK
        total += turns * MP3_KB_PER_NPC_TURN
    return total


def print_top(picks: list[ScoredLesson], top_n: int) -> None:
    print(f"\n=== Top {top_n} bundle picks ===")
    for rank, p in enumerate(picks[:top_n], start=1):
        cefr = p.cefr_level or "  "
        mode = (p.mode or "?")[:9].ljust(9)
        print(
            f"{rank:>3}. score={p.total:>4}  {cefr}  {mode}  "
            f"{p.lesson_id:<45}  [{format_breakdown(p.breakdown)}]"
        )


def print_histograms(picks: list[ScoredLesson], top_n: int) -> None:
    top = picks[:top_n]
    mode_hist = Counter(p.mode or "(no mode)" for p in top)
    cefr_hist = Counter(p.cefr_level or "(no cefr)" for p in top)

    print(f"\n=== Mode distribution in top {top_n} ===")
    for mode, count in mode_hist.most_common():
        print(f"  {mode:<14} {count:>3}")

    print(f"\n=== CEFR distribution in top {top_n} ===")
    for cefr, count in cefr_hist.most_common():
        print(f"  {cefr:<14} {count:>3}")


def print_size_estimate(picks: list[ScoredLesson], top_n: int) -> None:
    top = picks[:top_n]
    kb = estimate_bundle_kb(top)
    mb = kb / 1024.0
    total_npc_turns = sum(p.npc_turn_count for p in top)
    avg_turns = total_npc_turns / len(top) if top else 0.0
    print(f"\n=== Estimated audio bundle size ===")
    print(
        f"  {top_n} lessons x avg {avg_turns:.1f} NPC turns x "
        f"{MP3_KB_PER_NPC_TURN} KB/turn"
    )
    print(f"  total NPC turns: {total_npc_turns}")
    print(f"  estimated:       {kb:,} KB  (~{mb:.1f} MB)")
    cap_mb = 200
    if mb > cap_mb:
        print(f"  WARNING: exceeds {cap_mb} MB App Store cellular cap")
    else:
        print(f"  fits under the {cap_mb} MB App Store cellular cap (OK)")


def print_second_tier(picks: list[ScoredLesson], top_n: int) -> None:
    second = picks[top_n : top_n * 2]
    if not second:
        return
    print(f"\n=== Second tier (rank {top_n + 1}..{top_n * 2}) ===")
    for rank, p in enumerate(second, start=top_n + 1):
        cefr = p.cefr_level or "  "
        mode = (p.mode or "?")[:9].ljust(9)
        print(
            f"{rank:>3}. score={p.total:>4}  {cefr}  {mode}  {p.lesson_id}"
        )


# --------------------------------------------------------------------------
# CLI
# --------------------------------------------------------------------------
def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Score Lafla lessons and pick the top N to bundle with the "
            "iOS app audio assets."
        )
    )
    parser.add_argument(
        "--top",
        type=int,
        default=50,
        help="How many lessons to bundle (default: 50)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the picks but don't write bundle-priority.json",
    )
    parser.add_argument(
        "--data-dir",
        type=Path,
        default=DATA_DIR,
        help="Override the data directory (mostly for testing)",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=OUTPUT_FILE,
        help="Override the output JSON path",
    )
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)

    if not args.data_dir.exists():
        print(f"Data directory not found: {args.data_dir}", file=sys.stderr)
        return 2

    print(f"Parsing scenes from: {args.data_dir}")
    scenes = parse_scenes(args.data_dir)
    print(f"  parsed {len(scenes)} unique scenes (by lessonId)")

    print(f"Parsing lessons from: {args.data_dir}")
    lessons = parse_lessons(args.data_dir)
    print(f"  parsed {len(lessons)} lessons")

    # Sanity: lessons that have no matching scene won't get a mode/CEFR
    # bonus, so flag them. They can still be selected on first-lesson +
    # turn bonuses alone if they happen to fit the heuristic.
    orphan = [lid for lid in lessons if lid not in scenes]
    if orphan:
        print(
            f"  note: {len(orphan)} lessons have no matching scene "
            f"(no mode/CEFR scoring contribution)"
        )

    picks = rank_lessons(lessons, scenes)

    print_top(picks, args.top)
    print_histograms(picks, args.top)
    print_size_estimate(picks, args.top)
    print_second_tier(picks, args.top)

    bundle_ids = [p.lesson_id for p in picks[: args.top]]

    if args.dry_run:
        print(f"\n[dry-run] not writing {args.output}")
    else:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(
            json.dumps(bundle_ids, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        print(
            f"\nWrote {len(bundle_ids)} lesson ids to "
            f"{args.output.relative_to(REPO_ROOT) if args.output.is_absolute() else args.output}"
        )

    return 0


if __name__ == "__main__":
    sys.exit(main())
