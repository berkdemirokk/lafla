import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const MOBILE_ROOT = path.resolve(__dirname, "../..");
const SOURCE_ROOTS = [
  path.join(MOBILE_ROOT, "app"),
  path.join(MOBILE_ROOT, "components"),
];

function collectTsxFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectTsxFiles(entryPath);
    return entry.name.endsWith(".tsx") ? [entryPath] : [];
  });
}

function findMissingAccessibilityContracts(): string[] {
  const violations: string[] = [];

  for (const filePath of SOURCE_ROOTS.flatMap(collectTsxFiles)) {
    const sourceText = fs.readFileSync(filePath, "utf8");
    const sourceFile = ts.createSourceFile(
      filePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

    const visit = (node: ts.Node) => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText(sourceFile);
        const jsxAttributes = node.attributes.properties.filter(
          ts.isJsxAttribute,
        );
        const accessibilityLabel = jsxAttributes.find(
          (attribute) =>
            attribute.name.getText(sourceFile) === "accessibilityLabel",
        );
        if (
          accessibilityLabel?.initializer &&
          ts.isStringLiteral(accessibilityLabel.initializer) &&
          accessibilityLabel.initializer.text.trim().length === 0
        ) {
          const { line } = sourceFile.getLineAndCharacterOfPosition(
            node.getStart(sourceFile),
          );
          violations.push(
            `${path.relative(MOBILE_ROOT, filePath)}:${line + 1} ${tagName} has empty accessibilityLabel`,
          );
        }

        if (tagName === "Pressable" || tagName === "TextInput") {
          const attributes = new Set(
            jsxAttributes.map((attribute) =>
              attribute.name.getText(sourceFile),
            ),
          );
          const missing =
            tagName === "Pressable"
              ? ["accessibilityRole", "accessibilityLabel"].filter(
                  (attribute) => !attributes.has(attribute),
                )
              : attributes.has("accessibilityLabel")
                ? []
                : ["accessibilityLabel"];

          if (missing.length > 0) {
            const { line } = sourceFile.getLineAndCharacterOfPosition(
              node.getStart(sourceFile),
            );
            violations.push(
              `${path.relative(MOBILE_ROOT, filePath)}:${line + 1} ${tagName} missing ${missing.join(", ")}`,
            );
          }
        }
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
  }

  return violations;
}

describe("accessibility contract", () => {
  it("gives every native interactive control an explicit Turkish-friendly contract", () => {
    expect(findMissingAccessibilityContracts()).toEqual([]);
  });

  it("does not globally cap iOS Dynamic Type", () => {
    const layout = fs.readFileSync(path.join(MOBILE_ROOT, "app", "_layout.tsx"), "utf8");
    expect(layout).not.toContain("maxFontSizeMultiplier");
    expect(layout).not.toMatch(/(?:Text|TextInput)\.defaultProps/);
  });
});
