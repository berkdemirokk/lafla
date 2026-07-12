import enMessages from "../../locales/en.json";
import trMessages from "../../locales/tr.json";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

function collectSourceFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return entry.name === "__tests__" ? [] : collectSourceFiles(entryPath);
    }
    return /\.tsx?$/.test(entry.name) ? [entryPath] : [];
  });
}

describe("i18n locale dictionaries", () => {
  it("keeps Turkish and English keys in sync", () => {
    const trKeys = Object.keys(trMessages).sort();
    const enKeys = Object.keys(enMessages).sort();

    expect(enKeys).toEqual(trKeys);
  });

  it("keeps interpolation placeholders in sync", () => {
    const placeholderNames = (value: string) =>
      Array.from(value.matchAll(/\{(\w+)\}/g), (match) => match[1]).sort();

    for (const key of Object.keys(trMessages) as Array<keyof typeof trMessages>) {
      expect(placeholderNames(enMessages[key])).toEqual(
        placeholderNames(trMessages[key]),
      );
    }
  });

  it("does not ship blank translations or raw translation keys", () => {
    for (const messages of [trMessages, enMessages]) {
      for (const [key, value] of Object.entries(messages)) {
        expect(value.trim()).not.toBe("");
        expect(value).not.toBe(key);
      }
    }
  });

  it("defines every literal translation key used by app surfaces", () => {
    const mobileRoot = path.resolve(__dirname, "../..");
    const sourceFiles = ["app", "components", "lib", "theme"].flatMap((folder) =>
      collectSourceFiles(path.join(mobileRoot, folder)),
    );
    const usedKeys = new Set<string>();
    const literalTranslationCall = /\bt\(\s*(["'])([^"']+)\1/g;

    for (const sourceFile of sourceFiles) {
      const source = fs.readFileSync(sourceFile, "utf8");
      for (const match of source.matchAll(literalTranslationCall)) {
        usedKeys.add(match[2]);
      }
    }

    for (const key of usedKeys) {
      expect(Object.hasOwn(enMessages, key)).toBe(true);
      expect(Object.hasOwn(trMessages, key)).toBe(true);
    }
  });

  it("keeps every app route and shared component free of raw Turkish JSX copy", () => {
    const mobileRoot = path.resolve(__dirname, "../..");
    const routeFiles = ["app", "components"].flatMap((folder) =>
      collectSourceFiles(path.join(mobileRoot, folder)),
    ).filter((filePath) => filePath.endsWith(".tsx"));
    const violations: string[] = [];

    for (const filePath of routeFiles) {
      const route = path.relative(mobileRoot, filePath);
      const source = fs.readFileSync(filePath, "utf8");
      const sourceFile = ts.createSourceFile(
        filePath,
        source,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX,
      );
      const visit = (node: ts.Node) => {
        if (ts.isJsxText(node) && /[ÇĞİÖŞÜçğıöşü]/.test(node.text)) {
          violations.push(`${route}:${sourceFile.getLineAndCharacterOfPosition(node.pos).line + 1}`);
        }
        if (
          ts.isJsxAttribute(node) &&
          node.initializer &&
          ts.isStringLiteral(node.initializer) &&
          /[ÇĞİÖŞÜçğıöşü]/.test(node.initializer.text)
        ) {
          violations.push(`${route}:${sourceFile.getLineAndCharacterOfPosition(node.pos).line + 1}`);
        }
        ts.forEachChild(node, visit);
      };
      visit(sourceFile);
    }

    expect(violations).toEqual([]);
  });

  it("gives every interactive Pressable an accessibility role", () => {
    const mobileRoot = path.resolve(__dirname, "../..");
    const sourceFiles = ["app", "components"].flatMap((folder) =>
      collectSourceFiles(path.join(mobileRoot, folder)),
    ).filter((filePath) => filePath.endsWith(".tsx"));
    const violations: string[] = [];

    for (const filePath of sourceFiles) {
      const source = fs.readFileSync(filePath, "utf8");
      const sourceFile = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
      const visit = (node: ts.Node) => {
        if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
          if (node.tagName.getText(sourceFile) === "Pressable") {
            const attributes = node.attributes.properties
              .filter(ts.isJsxAttribute)
              .map((attribute) => attribute.name.getText(sourceFile));
            if (attributes.includes("onPress") && !attributes.includes("accessibilityRole")) {
              const line = sourceFile.getLineAndCharacterOfPosition(node.pos).line + 1;
              violations.push(`${path.relative(mobileRoot, filePath)}:${line}`);
            }
          }
        }
        ts.forEachChild(node, visit);
      };
      visit(sourceFile);
    }

    expect(violations).toEqual([]);
  });
});
