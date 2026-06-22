import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

import { evaluateRoleplayTurn } from "../lib/engine";
import { extractQuotedModelAnswers } from "../lib/roleplay-model";
import { repairRoleplayPattern } from "../lib/roleplay-pattern";

interface Edit {
  start: number;
  end: number;
  text: string;
}

function propertyName(property: ts.ObjectLiteralElementLike): string | null {
  if (!ts.isPropertyAssignment(property)) return null;
  if (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) {
    return property.name.text;
  }
  return null;
}

function property(
  object: ts.ObjectLiteralExpression,
  name: string,
): ts.PropertyAssignment | undefined {
  return object.properties.find(
    (candidate): candidate is ts.PropertyAssignment =>
      ts.isPropertyAssignment(candidate) && propertyName(candidate) === name,
  );
}

function literalText(node: ts.Expression): string | null {
  return ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)
    ? node.text
    : null;
}

function sourceFiles(directory: string): string[] {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return sourceFiles(fullPath);
      return entry.isFile() && entry.name.endsWith(".ts") ? [fullPath] : [];
    });
}

const dataDirectory = path.resolve(__dirname, "../data");
let insertedModelAnswers = 0;
let normalizedModelAnswers = 0;
let repairedPatterns = 0;

function primaryModelAnswer(
  hint: string,
  patterns: readonly string[],
): string | null {
  const candidates = extractQuotedModelAnswers(hint);
  let cursor = 0;
  const ranked = candidates.map((answer, index) => {
    const start = hint.indexOf(answer, cursor);
    const end = start >= 0 ? start + answer.length : cursor;
    cursor = Math.max(cursor, end);
    const before = hint.slice(Math.max(0, start - 70), start).toLocaleLowerCase("tr");
    const after = hint.slice(end, end + 70).toLocaleLowerCase("tr");
    const teachingFragment =
      /(?:türk(?: öğrenci)?|yanlış|native|çeviri|direkt)\s*[:=]?[^.!?]{0,35}$/.test(
        before,
      ) ||
      /^[’'”"]?\s*(?:yazma|deme|yanlış|bitirir|robot|der genelde|overuse|atlama|iyi band|geçmiş alışkanlık)/.test(
        after,
      );
    const matched = evaluateRoleplayTurn([...patterns], answer, []).matched;
    const wordCount = answer.split(/\s+/).filter(Boolean).length;
    const score =
      (matched ? 1000 : 0) +
      Math.min(wordCount, 14) * 10 +
      Math.min(answer.length, 120) / 10 -
      index -
      (teachingFragment ? 2000 : 0);
    return { answer, score };
  });

  ranked.sort((a, b) => b.score - a.score);
  return ranked[0]?.answer ?? null;
}

for (const filePath of sourceFiles(dataDirectory)) {
  const source = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const edits: Edit[] = [];

  function visit(node: ts.Node): void {
    if (ts.isObjectLiteralExpression(node)) {
      const speaker = property(node, "speaker");
      const hint = property(node, "hint_tr");
      const patterns = property(node, "acceptable_patterns");
      const models = property(node, "model_answers");

      if (
        speaker &&
        literalText(speaker.initializer) === "user" &&
        hint &&
        patterns
      ) {
        const hintText = literalText(hint.initializer);
        if (!hintText) {
          throw new Error(`Non-literal hint_tr in ${filePath}:${hint.pos}`);
        }

        if (!ts.isArrayLiteralExpression(patterns.initializer)) {
          throw new Error(
            `Non-array acceptable_patterns in ${filePath}:${patterns.pos}`,
          );
        }
        const normalizedPatterns: string[] = [];
        for (const element of patterns.initializer.elements) {
          const raw = literalText(element as ts.Expression);
          if (raw === null) {
            throw new Error(`Non-literal pattern in ${filePath}:${element.pos}`);
          }
          try {
            new RegExp(raw, "i");
          } catch {
            const repaired = repairRoleplayPattern(raw);
            if (!repaired) {
              throw new Error(
                `Irreparable pattern in ${filePath}:${element.pos}: ${raw}`,
              );
            }
            edits.push({
              start: element.getStart(sourceFile),
              end: element.getEnd(),
              text: JSON.stringify(repaired),
            });
            repairedPatterns += 1;
            normalizedPatterns.push(repaired);
            continue;
          }
          normalizedPatterns.push(raw);
        }

        const primary = primaryModelAnswer(hintText, normalizedPatterns);
        if (!primary) {
          throw new Error(`Missing model answer in ${filePath}:${hint.pos}`);
        }
        const serializedModels = JSON.stringify([primary]);
        if (!models) {
          const start = hint.getStart(sourceFile);
          const lineStart = source.lastIndexOf("\n", start - 1) + 1;
          const indent = source.slice(lineStart, start);
          edits.push({
            start,
            end: start,
            text: `model_answers: ${serializedModels},\n${indent}`,
          });
          insertedModelAnswers += 1;
        } else {
          if (!ts.isArrayLiteralExpression(models.initializer)) {
            throw new Error(`Non-array model_answers in ${filePath}:${models.pos}`);
          }
          const current = models.initializer.elements.map((element) =>
            literalText(element as ts.Expression),
          );
          if (
            current.length !== 1 ||
            current[0] !== primary
          ) {
            edits.push({
              start: models.initializer.getStart(sourceFile),
              end: models.initializer.getEnd(),
              text: serializedModels,
            });
            normalizedModelAnswers += 1;
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (edits.length > 0) {
    let updated = source;
    for (const edit of edits.sort((a, b) => b.start - a.start)) {
      updated = updated.slice(0, edit.start) + edit.text + updated.slice(edit.end);
    }
    fs.writeFileSync(filePath, updated, "utf8");
  }
}

console.log(JSON.stringify({
  insertedModelAnswers,
  normalizedModelAnswers,
  repairedPatterns,
}, null, 2));
