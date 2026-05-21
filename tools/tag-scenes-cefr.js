#!/usr/bin/env node
/**
 * Lafla — tag inline scenes in data/scenes.ts with CEFR levels.
 *
 * 2026-05-21 — Scene-level adaptation foundation. Inline scenes were
 * historically untagged (only dedicated *-scenes.ts files had cefrLevel).
 * This script assigns an "anchor" level to each scene based on its
 * lessonId pattern, enabling:
 *   1. Real home feed filtering (no more passthrough)
 *   2. Scenario engine adaptation (user level vs scene level → hint
 *      visibility, NPC pace, pattern strictness)
 *
 * Approach: regex-replace each scene object that lacks `cefrLevel:`
 * with one that has it. Mapping is per-skill (lessonId before the
 * third dot). Idempotent — re-runnable; scenes that already have
 * cefrLevel are skipped.
 */

const fs = require("fs");
const path = require("path");

const FILE = path.resolve(__dirname, "../apps/mobile/data/scenes.ts");

// Skill-ID → anchor CEFR level. Where a skill spans 2 levels, we pick
// the MORE GENEROUS one (i.e. the level it's accessible from) so the
// filter doesn't gut early users.
const SKILL_LEVEL = {
  // ─── order (transactional, low difficulty) ─────────────────────
  "order.cafe": "A2",
  "order.fastfood": "A2",
  "order.grocery": "A2",
  "order.restaurant": "A2",
  "order.delivery": "A2",
  "order.bill": "A2",
  "order.complaint": "B1",

  // ─── daily (situational) ───────────────────────────────────────
  "daily.bank": "B1",
  "daily.directions": "A2",
  "daily.emergency": "B1",
  "daily.gym": "B1",
  "daily.hotel": "A2",
  "daily.pharmacy": "A2",
  "daily.phone": "A2",
  "daily.salon": "B1",
  "daily.shopping": "A2",
  "daily.smalltalk": "B1",
  "daily.taxi": "A2",
  "daily.tech_support": "B1",
  "daily.transport": "A2",

  // ─── flirt (social) ────────────────────────────────────────────
  "flirt.opener": "A2",
  "flirt.banter": "B1",
  "flirt.date": "B1",
  "flirt.define": "B1",
  "flirt.second_date": "B1",
  "flirt.voice": "B1",

  // ─── work (professional) ───────────────────────────────────────
  "work.standup": "B1",
  "work.slack": "B1",
  "work.email": "B1",
  "work.meeting": "B1",
  "work.coffeechat": "B1",
  "work.networking": "B1",
  "work.review": "B2",
  "work.feedback_giving": "B2",
  "work.promotion_ask": "B2",
  "work.interview": "B2",
  "work.codereview": "B2",
  "work.disagree": "B2",
  "work.career": "B1",
  "work.professional": "B2",

  // ─── airport (travel) ──────────────────────────────────────────
  "airport.44": "A2",
  "airport.45": "A2",
  "airport.46": "B1",
  "airport.47": "B1",

  // ─── bar ───────────────────────────────────────────────────────
  "bar": "B1",
  "bar.approach": "B1",
};

// Skill prefix fallback if specific key missing
const PREFIX_LEVEL = {
  "order": "A2",
  "daily": "B1",
  "flirt": "B1",
  "work": "B1",
  "airport": "A2",
  "bar": "B1",
};

function levelForLessonId(lessonId) {
  // Try exact skill match (e.g. "order.cafe")
  const parts = lessonId.split(".");
  for (let i = parts.length; i > 0; i--) {
    const key = parts.slice(0, i).join(".");
    if (SKILL_LEVEL[key]) return SKILL_LEVEL[key];
  }
  // Mode-level fallback
  if (PREFIX_LEVEL[parts[0]]) return PREFIX_LEVEL[parts[0]];
  return "B1"; // safe default
}

const src = fs.readFileSync(FILE, "utf8");
const lines = src.split(/\r?\n/);

let added = 0;
let already = 0;
let unknown = [];

// State: track current scene block. A scene block starts when we hit `{`
// in SAMPLE_SCENES array context, accumulates until `},`, then we check
// if it has cefrLevel and lessonId.
//
// Simpler: scan line-by-line. When we hit a line with `lessonId: "..."`,
// remember the level we want. When we hit the closing `}` of that scene
// block (next line starting with `  },`), inject `    cefrLevel: "X",`
// before it.
//
// To handle multiline inline scene objects (one per line vs multiline),
// we instead scan with a regex over the whole file.

// Regex: match a scene object literal — `{ ... }` — capture content.
// Inline scenes in scenes.ts are mostly single-line. Some are multiline.
// Strategy: regex find each {...lessonId:"X"...} block and inspect.

const out = [];
let i = 0;
while (i < lines.length) {
  const line = lines[i];

  // Single-line scene: `  { id: "scene-...", ..., lessonId: "...", ... },`
  if (line.match(/lessonId:\s*"[^"]+"/) && line.match(/^\s*\{/) && line.match(/\},?\s*$/)) {
    const lessonMatch = line.match(/lessonId:\s*"([^"]+)"/);
    if (lessonMatch && !line.match(/cefrLevel:/)) {
      const lvl = levelForLessonId(lessonMatch[1]);
      // Insert cefrLevel before lessonId
      const newLine = line.replace(
        /(lessonId:\s*"[^"]+")/,
        `cefrLevel: "${lvl}", $1`,
      );
      out.push(newLine);
      added++;
      i++;
      continue;
    } else if (lessonMatch && line.match(/cefrLevel:/)) {
      already++;
    }
    out.push(line);
    i++;
    continue;
  }

  // Multi-line scene: starts with `  {`, accumulate until `  },`.
  if (line.match(/^\s+\{\s*$/) || (line.match(/^\s+\{/) && !line.match(/\}/))) {
    // Collect lines until closing
    const block = [line];
    let j = i + 1;
    while (j < lines.length && !lines[j].match(/^\s+\},?\s*$/)) {
      block.push(lines[j]);
      j++;
    }
    if (j < lines.length) block.push(lines[j]); // closing line

    const blockStr = block.join("\n");
    const lessonMatch = blockStr.match(/lessonId:\s*"([^"]+)"/);
    if (lessonMatch && !blockStr.match(/cefrLevel:/)) {
      const lvl = levelForLessonId(lessonMatch[1]);
      // Insert cefrLevel line just before lessonId line
      const newBlock = block.map((l) => {
        if (l.match(/lessonId:/)) {
          const indent = (l.match(/^\s+/) || [""])[0];
          return `${indent}cefrLevel: "${lvl}",\n${l}`;
        }
        return l;
      });
      out.push(...newBlock);
      added++;
      i = j + 1;
      continue;
    } else if (lessonMatch && blockStr.match(/cefrLevel:/)) {
      already++;
    }
    out.push(...block);
    i = j + 1;
    continue;
  }

  out.push(line);
  i++;
}

fs.writeFileSync(FILE, out.join("\n"));
console.log(`✓ Tagged ${added} scenes`);
console.log(`  Already tagged: ${already}`);
if (unknown.length) {
  console.log(`  Unknown lesson ids:`);
  for (const u of unknown) console.log(`    ${u}`);
}
