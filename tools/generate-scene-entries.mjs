#!/usr/bin/env node
/**
 * Lafla — Auto-generate Scene entries for newly added lesson files.
 *
 * 2026-05-21 — Massive content expansion ekledik (5 lesson file, 215 yeni
 * lesson). Her birinin scenes.ts'te Scene entry'si olmalı yoksa Akış
 * feed'de görünmezler. Bu script lesson'lardan title/description çıkarıp
 * Scene entries üretir.
 *
 * Mode/emoji mapping kuralları:
 *   - skill_id ile mode belirle (`order.bar.*` → "order", `bar.approach.*` → "bar")
 *   - CEFR difficulty ile heuristic: roleplay_chat difficulty <= 3 → A2, 4 → B1, 5 → B2, 6 → C1
 *   - Emoji: ID prefix'ten çıkar
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const REPO = resolve(import.meta.dirname ?? ".", "..");
const SCENES_PATH = resolve(REPO, "apps/mobile/data/scenes.ts");

const FILES = [
  "apps/mobile/data/bar-deep-lesson.ts",
  "apps/mobile/data/airport-deep-lesson.ts",
  "apps/mobile/data/story-arc-lesson.ts",
  "apps/mobile/data/daily-expansion-lesson.ts",
  "apps/mobile/data/flirt-deep-lesson.ts",
  "apps/mobile/data/work-expansion-lesson.ts",
];

// Extract lesson metadata via regex (good enough for our well-formed files)
function parseLessonFile(filePath) {
  const content = readFileSync(resolve(REPO, filePath), "utf8");
  const lessons = [];
  // Match each lesson object — look for `id: "..."` followed by `title: "..."` etc.
  const blockRe = /\{\s+id:\s*"([^"]+)",\s*skill_id:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",\s*description:\s*"([^"]+)",[\s\S]*?estimated_minutes:\s*(\d+),[\s\S]*?difficulty:\s*(\d)[\s\S]*?type:\s*"roleplay_chat"/g;
  let m;
  while ((m = blockRe.exec(content)) !== null) {
    const [, id, skill_id, title, description, mins, diff] = m;
    lessons.push({
      id,
      skill_id,
      title,
      description,
      estimated_minutes: parseInt(mins, 10),
      difficulty: parseInt(diff, 10),
    });
  }
  return lessons;
}

function modeForSkill(skill_id) {
  if (skill_id.startsWith("order.bar")) return "order";
  if (skill_id.startsWith("bar.")) return "bar";
  if (skill_id.startsWith("airport")) return "airport";
  if (skill_id.startsWith("daily.")) return "daily";
  if (skill_id.startsWith("flirt.")) return "flirt";
  if (skill_id.startsWith("work.")) return "work";
  if (skill_id.startsWith("ielts.")) return "ielts";
  if (skill_id.startsWith("story.")) {
    // Story arcs map to their narrative content — read from the lesson's actual mode if needed
    // Default to 'daily' (most common in arcs) — overridden below by per-lesson mode if present
    return "daily";
  }
  return "daily";
}

function cefrForDifficulty(diff) {
  if (diff <= 2) return "A2";
  if (diff === 3) return "A2";
  if (diff === 4) return "B1";
  if (diff === 5) return "B2";
  return "C1"; // 6+
}

// For story-arc lessons, parse the `mode` field from BundledLesson definition since
// they have explicit modes set
function parseStoryArcModes(filePath) {
  const content = readFileSync(resolve(REPO, filePath), "utf8");
  // Match: id: "story.X", ... + look ahead for a mode comment or skill_id pattern
  // Since BundledLesson doesn't have mode, we have to infer from the test or title.
  // Better: use the script's heuristic via skill_id (story.erasmus, story.nyc, story.ielts)
  const map = {};
  const idRe = /id:\s*"(story\.[^"]+)"/g;
  let m;
  while ((m = idRe.exec(content)) !== null) {
    map[m[1]] = m[1]; // placeholder
  }
  return map;
}

function emojiForId(id, mode) {
  if (id.startsWith("story.erasmus")) return "🇩🇪";
  if (id.startsWith("story.nyc")) return "🗽";
  if (id.startsWith("story.ielts")) return "🎓";
  if (id.startsWith("ielts.w1")) return "📊";
  if (id.startsWith("ielts.w2")) return "✍️";
  if (id.startsWith("ielts.")) return "🎓";
  // Mode-based fallback
  const map = {
    order: "🍽️",
    bar: "🍻",
    airport: "✈️",
    daily: "☕",
    flirt: "💕",
    work: "💼",
    ielts: "🎓",
  };
  return map[mode] ?? "💬";
}

// Story arc explicit mode (since their scenarios cross modes)
function storyArcMode(id) {
  // erasmus: day-by-day, mode in title — fallback to per-id heuristic
  // We default story scenes to a "story" mode? But SceneMode type doesn't include "story".
  // Solution: route by id position. For now route to closest existing mode.
  if (id.includes("erasmus.1") || id.includes("erasmus.15")) return "airport";
  if (id.includes("erasmus.5")) return "bar";
  if (id.includes("erasmus.6") || id.includes("erasmus.9") || id.includes("erasmus.10") || id.includes("erasmus.14")) return "flirt";
  if (id.includes("erasmus.8") || id.includes("erasmus.12")) return "order";
  if (id.includes("erasmus.3") || id.includes("erasmus.11")) return "work";
  if (id.startsWith("story.erasmus")) return "daily";
  if (id.includes("nyc.1") || id.includes("nyc.12")) return "airport";
  if (id.includes("nyc.3") || id.includes("nyc.6") || id.includes("nyc.11")) return "order";
  if (id.includes("nyc.8")) return "bar";
  if (id.startsWith("story.nyc")) return "daily";
  if (id.startsWith("story.ielts")) return "ielts";
  return "daily";
}

const allEntries = [];
for (const file of FILES) {
  const lessons = parseLessonFile(file);
  console.error(`  ${file}: ${lessons.length} lessons`);
  for (const l of lessons) {
    let mode = modeForSkill(l.skill_id);
    if (l.skill_id.startsWith("story.")) {
      mode = storyArcMode(l.id);
    }
    const cefr = cefrForDifficulty(l.difficulty);
    const emoji = emojiForId(l.id, mode);
    const sceneId = "scene-" + l.id.replace(/\./g, "-");
    const titleEsc = l.title.replace(/"/g, '\\"');
    const descEsc = l.description.replace(/"/g, '\\"');
    allEntries.push(
      `  { id: "${sceneId}", emoji: "${emoji}", title: "${titleEsc}", description: "${descEsc}", durationMin: ${l.estimated_minutes}, mode: "${mode}", skillId: "${l.skill_id}", cefrLevel: "${cefr}", lessonId: "${l.id}", isNew: true },`,
    );
  }
}

console.error(`Total entries: ${allEntries.length}`);
console.log(allEntries.join("\n"));
