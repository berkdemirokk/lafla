import fs from "node:fs";
import path from "node:path";

import { allScenarios } from "../lib/scenario";
import { modelAnswersForTurn } from "../lib/roleplay-model";

const SAMPLE_SIZE = 100;
const outputPath = path.resolve(
  __dirname,
  "../../../docs/LINGUIST_REVIEW_v1.0.4.csv",
);

function csv(value: unknown): string {
  const text = String(value ?? "").replace(/\r?\n/g, " ");
  return `"${text.replaceAll('"', '""')}"`;
}

const groups = new Map<string, ReturnType<typeof allScenarios>>();
for (const scenario of [...allScenarios()].sort((a, b) =>
  a.id.localeCompare(b.id),
)) {
  const key = `${scenario.mode}|${scenario.cefrLevel ?? "unmapped"}`;
  groups.set(key, [...(groups.get(key) ?? []), scenario]);
}

const queues = [...groups.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, scenarios]) => [...scenarios]);
const selected: ReturnType<typeof allScenarios> = [];
while (selected.length < SAMPLE_SIZE && queues.some((queue) => queue.length)) {
  for (const queue of queues) {
    const scenario = queue.shift();
    if (scenario) selected.push(scenario);
    if (selected.length >= SAMPLE_SIZE) break;
  }
}

const header = [
  "scenario_id",
  "mode",
  "cefr",
  "title",
  "npc_role",
  "setting",
  "user_turns",
  "npc_lines",
  "model_answers",
  "turkish_hints",
  "naturalness_1_5",
  "grammar_ok",
  "cultural_fit_ok",
  "reviewer_notes",
];
const lines = [header.map(csv).join(",")];
for (const scenario of selected) {
  const users = scenario.scene.turns.filter((turn) => turn.speaker === "user");
  const npcs = scenario.scene.turns
    .filter((turn) => turn.speaker === "npc")
    .map((turn) => turn.message ?? "");
  lines.push(
    [
      scenario.id,
      scenario.mode,
      scenario.cefrLevel ?? "unmapped",
      scenario.title,
      scenario.scene.npc_role,
      scenario.scene.setting,
      users.length,
      npcs.join(" || "),
      users.map((turn) => modelAnswersForTurn(turn)[0] ?? "").join(" || "),
      users.map((turn) => turn.hint_tr ?? "").join(" || "),
      "",
      "",
      "",
      "",
    ].map(csv).join(","),
  );
}

const generated = `${lines.join("\n")}\n`;
if (process.argv.includes("--check")) {
  const current = fs.existsSync(outputPath)
    ? fs.readFileSync(outputPath, "utf8")
    : "";
  if (current !== generated) {
    throw new Error(
      "Linguist review sample is stale. Run: pnpm --filter @lafla/mobile qa:linguist",
    );
  }
  console.log(`Linguist review sample is current (${selected.length} scenarios).`);
} else {
  fs.writeFileSync(outputPath, generated, "utf8");
  console.log(`Wrote ${selected.length} scenarios to ${outputPath}`);
}
