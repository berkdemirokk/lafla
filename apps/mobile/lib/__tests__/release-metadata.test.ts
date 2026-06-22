import fs from "node:fs";
import path from "node:path";

import { SCENE_COUNT_DISPLAY } from "../scene-counts";

const repositoryRoot = path.resolve(process.cwd(), "../..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(repositoryRoot, relativePath), "utf8");
}

describe("release metadata", () => {
  it("keeps both EAS entry points identical", () => {
    expect(JSON.parse(read("eas.json"))).toEqual(
      JSON.parse(read("apps/mobile/eas.json")),
    );
  });

  it("uses remote build numbers without a conflicting local buildNumber", () => {
    const app = JSON.parse(read("apps/mobile/app.json"));
    expect(app.expo.ios.buildNumber).toBeUndefined();
    expect(app.expo.version).toBe("1.0.3");
  });

  it("keeps reviewer-facing copy aligned with the current product", () => {
    const documents = [
      "docs/APP_REVIEW_NOTES.md",
      "docs/SUBMISSION_CHECKLIST.md",
      "docs/APP_STORE_METADATA.md",
      "docs/ASC_PASTE_SHEET.md",
    ].map(read);

    for (const document of documents) {
      expect(document).toContain(SCENE_COUNT_DISPLAY);
      expect(document).not.toContain("935");
    }
    expect(documents[0]).toContain("2-step flow");
    expect(documents[0]).toContain("Optional Free Chat");
  });

  it("ships the TestFlight acceptance and linguist-review evidence templates", () => {
    const acceptance = read("docs/TESTFLIGHT_ACCEPTANCE_v1.0.3.md");
    const linguistRows = read("docs/LINGUIST_REVIEW_v1.0.3.csv")
      .trim()
      .split(/\r?\n/);

    expect(acceptance).toContain("## Release gates");
    expect(acceptance).toContain("VoiceOver");
    expect(acceptance).toContain("Monthly purchase");
    expect(linguistRows).toHaveLength(101);
  });
});
