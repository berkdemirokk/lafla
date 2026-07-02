import fs from "node:fs";
import path from "node:path";

import {
  PRO_MONTHLY_PRICE_COMPACT,
  PRO_MONTHLY_PRICE_DISPLAY,
  PRO_YEARLY_PRICE_COMPACT,
  PRO_YEARLY_PRICE_DISPLAY,
  PRO_YEARLY_SAVINGS_LABEL_EN,
  PRO_YEARLY_SAVINGS_LABEL_TR,
} from "../monetization";
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
    expect(app.expo.version).toBe("1.0.4");
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

  it("does not sell unrecorded native-audio inventory in the paywall", () => {
    const paywall = read("apps/mobile/app/paywall.tsx");
    const nativeAudioManifest = read("apps/mobile/data/native-audio-manifest.ts");

    expect(nativeAudioManifest).toContain(
      "NATIVE_AUDIO_MANIFEST: ReadonlyArray<NativeAudioBundle> = []",
    );
    expect(paywall).not.toContain("Native ses ile konuş");
    expect(paywall).toContain("Sesli pratik + telaffuz geri bildirimi");
  });

  it("keeps monetization copy aligned across release surfaces", () => {
    const paywall = read("apps/mobile/app/paywall.tsx");
    const ielts = read("apps/mobile/app/ielts-band.tsx");
    const weakness = read("apps/mobile/app/weakness-report.tsx");
    const reviewNotes = read("docs/APP_REVIEW_NOTES.md");
    const revenueCat = read("docs/REVENUECAT.md");
    const submission = read("docs/SUBMISSION_CHECKLIST.md");
    const asc = read("docs/ASC_PASTE_SHEET.md");
    const metadata = read("docs/APP_STORE_METADATA.md");

    expect(paywall).toContain("PRO_MONTHLY_PRICE_DISPLAY");
    expect(ielts).toContain("PRO_MONTHLY_PRICE_COMPACT");
    expect(weakness).toContain("PRO_MONTHLY_PRICE_COMPACT");

    for (const document of [reviewNotes, revenueCat, submission, asc, metadata]) {
      expect(document).toContain(PRO_MONTHLY_PRICE_COMPACT);
      expect(document).toContain(PRO_YEARLY_PRICE_COMPACT);
      expect(document).not.toContain("₺149");
      expect(document).not.toContain("149 TL");
      expect(document).not.toContain("$9.99");
    }

    expect(revenueCat).toContain(PRO_MONTHLY_PRICE_DISPLAY);
    expect(revenueCat).toContain(PRO_YEARLY_PRICE_DISPLAY);
    expect(asc).toContain(PRO_YEARLY_SAVINGS_LABEL_TR);
    expect(metadata).toContain(PRO_YEARLY_SAVINGS_LABEL_EN);
  });

  it("ships the TestFlight acceptance and linguist-review evidence templates", () => {
    const acceptance = read("docs/TESTFLIGHT_ACCEPTANCE_v1.0.4.md");
    const linguistRows = read("docs/LINGUIST_REVIEW_v1.0.4.csv")
      .trim()
      .split(/\r?\n/);

    expect(acceptance).toContain("## Release gates");
    expect(acceptance).toContain("VoiceOver");
    expect(acceptance).toContain("Monthly purchase");
    expect(linguistRows).toHaveLength(101);
  });
});
