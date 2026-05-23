// Lafla — Story Arc V2 → Scene[] auto-generator.
//
// 2026-05-23 — Bug fix: 132 BundledLesson lessons.ts'te kayıtlı ama
// scenes.ts'te Scene entry'leri YOK → Home swipe feed, daily plan,
// daily-exclusive bu sahneleri SEÇEMEZ. "Shipped but invisible" sorunu.
//
// Bu script story-arc-v2-lesson.ts'i parse eder, her lesson için
// data/scenes.ts schema'sına uygun Scene objesi üretir. Çıktı:
// `data/story-arc-v2-scenes.ts` — Scene[] export. scenes.ts'e import+spread
// edilince Home feed'de görünür.
//
// Çalıştırma: cd apps/mobile && npx tsx scripts/generate-arc-scenes.ts

import * as fs from "node:fs";
import * as path from "node:path";

const MOBILE_DIR = path.basename(process.cwd()) === "mobile"
  ? process.cwd()
  : path.join(process.cwd(), "apps", "mobile");

// ─── Arc → mode + emoji mapping ──────────────────────────────────────
// Her arc skill_id'sini bir SceneMode'a ve emojisine eşle. Mode seçimi
// içerikle uyumlu olmalı — kullanıcı interest filter'ı bu mode'a göre
// çalışır.
// 2026-05-23 — Audit fix: mode diversity. Önceki versiyon 8 arc'ı "work"
// olarak işaretlemişti — flirt/bar/order interest user'lar 132 sahnenin
// ~85%'ini hiç görmüyordu. Yeniden dengelendi:
//   work × 5 (junior dev, ny conf, customer support, salary, work conflict)
//   daily × 4 (erasmus — çoğu sosyal/kişisel, doctor, apartment, tech support)
//   flirt × 2 (online dating, freelance — client relationship intim)
//   airport × 3 (us immigration, solo japan, long haul)
//   bar × 1 (uni admission — informal Q&A "akademik sosyal" register)
//   order × 0 (intentional — order zaten cafe/restaurant ana modu var)
//   ielts × 0 (intentional — IELTS sahneleri ayrı story arc V1'de)
const ARC_CONFIG: Record<
  string,
  { mode: string; emoji: string; titleHint: string }
> = {
  // ─ DAILY (4) ────────────────────────────────────
  "arc.erasmus_amsterdam": {
    mode: "daily",
    emoji: "🇳🇱",
    titleHint: "Erasmus Amsterdam",
  },
  "arc.doctor_visit": {
    mode: "daily",
    emoji: "🩺",
    titleHint: "Doctor Visit",
  },
  "arc.apartment_hunt": {
    mode: "daily",
    emoji: "🏠",
    titleHint: "Apartment Hunt",
  },
  "arc.tech_support": {
    mode: "daily",
    emoji: "📞",
    titleHint: "Tech Support Call",
  },
  // ─ WORK (5) ─────────────────────────────────────
  "arc.junior_dev_london": {
    mode: "work",
    emoji: "💻",
    titleHint: "Junior Dev London",
  },
  "arc.ny_tech_conf": {
    mode: "work",
    emoji: "🗽",
    titleHint: "NY Tech Conference",
  },
  "arc.customer_support": {
    mode: "work",
    emoji: "🎧",
    titleHint: "Customer Support",
  },
  "arc.work_conflict": {
    mode: "work",
    emoji: "⚠️",
    titleHint: "Work Conflict",
  },
  "arc.salary_neg": {
    mode: "work",
    emoji: "💼",
    titleHint: "Salary Negotiation",
  },
  // ─ FLIRT (2) ────────────────────────────────────
  "arc.online_dating": {
    mode: "flirt",
    emoji: "💬",
    titleHint: "Online Dating",
  },
  "arc.freelance": {
    mode: "flirt",
    emoji: "📋",
    titleHint: "Freelance Client",
  },
  // ─ AIRPORT (3) ──────────────────────────────────
  "arc.us_immigration": {
    mode: "airport",
    emoji: "🛂",
    titleHint: "US Immigration",
  },
  "arc.solo_japan": {
    mode: "airport",
    emoji: "🇯🇵",
    titleHint: "Solo Japan Travel",
  },
  "arc.long_haul": {
    mode: "airport",
    emoji: "✈️",
    titleHint: "Long-Haul Flight",
  },
  // ─ BAR (1) ──────────────────────────────────────
  "arc.uni_admission": {
    mode: "bar",
    emoji: "🎓",
    titleHint: "Uni Admission",
  },
};

// ─── CEFR progression — arc başında A2-B1, ortasında B1-B2, sonunda B2-C1
function cefrForIndex(index: number, total: number): string {
  const pct = index / total;
  if (pct < 0.3) return "A2";
  if (pct < 0.65) return "B1";
  if (pct < 0.9) return "B2";
  return "B2"; // Çoğu arc B2 zirvesinde biter, C1'e gitmez
}

// ─── Lesson parsing ──────────────────────────────────────────────────
interface ParsedLesson {
  id: string;
  skill_id: string;
  index: number;
  title: string;
  description: string;
  estimated_minutes: number;
}

function parseStoryArcV2(): ParsedLesson[] {
  const filePath = path.join(MOBILE_DIR, "data", "story-arc-v2-lesson.ts");
  const src = fs.readFileSync(filePath, "utf-8");

  // BundledLesson const'ları yakalama. Her const ~100-150 satır.
  const lessons: ParsedLesson[] = [];
  const bundleRegex =
    /export\s+const\s+\w+\s*:\s*BundledLesson\s*=\s*\{([^]*?)\n\};/g;

  let match;
  while ((match = bundleRegex.exec(src)) !== null) {
    const body = match[1]!;
    const idMatch = body.match(/^\s*id:\s*"([^"]+)"/m);
    const skillIdMatch = body.match(/skill_id:\s*"([^"]+)"/);
    const indexMatch = body.match(/index:\s*(\d+)/);
    const titleMatch = body.match(/title:\s*"([^"]+)"/);
    const descMatch = body.match(/description:\s*"([^"]+)"/);
    const minutesMatch = body.match(/estimated_minutes:\s*(\d+)/);

    if (!idMatch || !skillIdMatch || !titleMatch) continue;

    lessons.push({
      id: idMatch[1]!,
      skill_id: skillIdMatch[1]!,
      index: indexMatch ? parseInt(indexMatch[1]!, 10) : 0,
      title: titleMatch[1]!,
      description: descMatch ? descMatch[1]! : "",
      estimated_minutes: minutesMatch ? parseInt(minutesMatch[1]!, 10) : 5,
    });
  }
  return lessons;
}

// ─── Title shortening — 4-line max for swipe card display ────────────
function shortenTitle(raw: string, arcHint: string): string {
  // "Sahne 1 — Erasmus orientation: hangi modülleri seçeyim?"
  // → "Erasmus orientation:\nhangi modülleri seçeyim?"
  // Strip "Sahne N — " prefix.
  let t = raw.replace(/^Sahne\s+\d+\s*[—\-:]\s*/u, "");
  // Hard cap ~50 char for swipe card.
  if (t.length > 50) t = t.slice(0, 47) + "…";
  return t;
}

// ─── Skill ID short version (display in Scene id) ─────────────────────
function sceneIdFor(lessonId: string): string {
  // arc.erasmus_amsterdam.1 → scene-arc-erasmus_amsterdam-1
  return "scene-" + lessonId.replace(/\./g, "-");
}

// ─── Output generation ───────────────────────────────────────────────
function generateSceneFile(lessons: ParsedLesson[]): string {
  // Group lessons by skill_id to compute arc totals (for CEFR progression).
  const byArc = new Map<string, ParsedLesson[]>();
  for (const l of lessons) {
    const arr = byArc.get(l.skill_id) ?? [];
    arr.push(l);
    byArc.set(l.skill_id, arr);
  }
  // Sort each arc by index ascending.
  for (const arr of byArc.values()) {
    arr.sort((a, b) => a.index - b.index);
  }

  const lines: string[] = [];
  lines.push("// Lafla — Story Arc V2 Scene entries (AUTO-GENERATED).");
  lines.push("//");
  lines.push("// 2026-05-23 — scripts/generate-arc-scenes.ts ile üretildi.");
  lines.push("// data/story-arc-v2-lesson.ts'teki 132 BundledLesson'ın");
  lines.push("// scenes.ts schema'sına uygun karşılığı. Home swipe feed,");
  lines.push("// daily plan, daily-exclusive bu sahneleri SEÇEBİLİR.");
  lines.push("//");
  lines.push("// Regenerate: cd apps/mobile && npx tsx scripts/generate-arc-scenes.ts");
  lines.push("");
  lines.push('import type { Scene } from "./scenes";');
  lines.push("");
  lines.push("export const storyArcV2Scenes: ReadonlyArray<Scene> = [");

  for (const [skillId, arcLessons] of byArc) {
    const config = ARC_CONFIG[skillId];
    if (!config) {
      lines.push(`  // SKIP unknown arc: ${skillId}`);
      continue;
    }
    lines.push(`  // ── ${config.titleHint} (${arcLessons.length} sahne)`);
    for (const lesson of arcLessons) {
      const sceneId = sceneIdFor(lesson.id);
      const title = shortenTitle(lesson.title, config.titleHint)
        .replace(/"/g, '\\"');
      const description = lesson.description.replace(/"/g, '\\"');
      const cefr = cefrForIndex(lesson.index - 1, arcLessons.length);
      lines.push(
        `  { id: "${sceneId}", emoji: "${config.emoji}", title: "${title}", description: "${description}", durationMin: ${lesson.estimated_minutes}, mode: "${config.mode}", skillId: "${skillId}", cefrLevel: "${cefr}", lessonId: "${lesson.id}", isNew: true },`,
      );
    }
  }

  lines.push("];");
  lines.push("");
  return lines.join("\n");
}

// ─── Main ────────────────────────────────────────────────────────────
function main(): void {
  console.log("Parsing data/story-arc-v2-lesson.ts...");
  const lessons = parseStoryArcV2();
  console.log(`  ${lessons.length} lessons parsed.`);

  if (lessons.length === 0) {
    console.error("No lessons parsed — check regex / file path.");
    process.exit(1);
  }

  const output = generateSceneFile(lessons);
  const outputPath = path.join(
    MOBILE_DIR,
    "data",
    "story-arc-v2-scenes.ts",
  );
  fs.writeFileSync(outputPath, output);
  console.log(`Wrote ${lessons.length} Scene entries to:`);
  console.log(`  ${outputPath}`);
  console.log("");
  console.log("Manuel adım: data/scenes.ts'e import + spread ekle:");
  console.log('  import { storyArcV2Scenes } from "./story-arc-v2-scenes";');
  console.log("  ...");
  console.log("  ...storyArcV2Scenes,");
}

main();
