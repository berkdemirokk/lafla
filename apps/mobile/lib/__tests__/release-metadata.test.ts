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
    expect(app.expo.version).toBe("1.0.5");
  });

  it("ships localized iOS permission prompts through Expo's native locale pipeline", () => {
    const app = JSON.parse(read("apps/mobile/app.json"));
    const en = JSON.parse(read("apps/mobile/native-locales/en.json"));
    const tr = JSON.parse(read("apps/mobile/native-locales/tr.json"));
    const requiredKeys = [
      "NSMicrophoneUsageDescription",
      "NSPhotoLibraryUsageDescription",
      "NSSpeechRecognitionUsageDescription",
      "NSUserTrackingUsageDescription",
    ];

    expect(app.expo.locales).toEqual({
      en: "./native-locales/en.json",
      tr: "./native-locales/tr.json",
    });
    expect(Object.keys(en).sort()).toEqual(requiredKeys.sort());
    expect(Object.keys(tr).sort()).toEqual(requiredKeys.sort());
    for (const key of requiredKeys) {
      expect(en[key]).toEqual(expect.any(String));
      expect(tr[key]).toEqual(expect.any(String));
      expect(en[key].trim()).not.toBe("");
      expect(tr[key].trim()).not.toBe("");
      expect(en[key]).not.toBe(tr[key]);
    }
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

  it("keeps localized promotional text current and within App Store limits", () => {
    const syncScript = read("apps/mobile/scripts/asc-sync.ts");
    const promotionalTexts = Array.from(
      syncScript.matchAll(/promotionalText:\s*\n\s*"([^"]+)"/g),
      (match) => match[1],
    );

    expect(promotionalTexts).toHaveLength(2);
    for (const promotionalText of promotionalTexts) {
      expect(promotionalText.length).toBeLessThanOrEqual(170);
      expect(promotionalText).toMatch(/algoritmik|algorithmic/i);
    }
    expect(syncScript).not.toMatch(/ilk sürüm|just launched/i);
  });

  it("does not sell unrecorded native-audio inventory in the paywall", () => {
    const paywall = read("apps/mobile/app/paywall.tsx");
    const nativeAudioManifest = read("apps/mobile/data/native-audio-manifest.ts");
    const trMessages = JSON.parse(
      read("apps/mobile/locales/tr.json"),
    ) as Record<string, string>;

    expect(nativeAudioManifest).toContain(
      "NATIVE_AUDIO_MANIFEST: ReadonlyArray<NativeAudioBundle> = []",
    );
    expect(paywall).not.toContain("Native ses ile konuş");
    expect(paywall).toContain("paywall.feature.voice_title");
    expect(trMessages["paywall.feature.voice_title"]).toBe(
      "Sesli pratik + telaffuz geri bildirimi",
    );
  });

  it("does not time out a StoreKit purchase that remains active in native UI", () => {
    const paywall = read("apps/mobile/app/paywall.tsx");
    expect(paywall).toContain("await purchasePackage(selected)");
    expect(paywall).not.toMatch(/Promise\.race\(\[\s*purchasePackage/);
    expect(paywall).toContain("purchaseInFlightRef.current");
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

    for (const document of [revenueCat, submission, asc]) {
      expect(document).toContain(PRO_MONTHLY_PRICE_COMPACT);
      expect(document).toContain(PRO_YEARLY_PRICE_COMPACT);
    }

    for (const document of [reviewNotes, revenueCat, submission, asc, metadata]) {
      expect(document).not.toContain("₺149");
      expect(document).not.toContain("149 TL");
      expect(document).not.toContain("$9.99");
    }

    expect(revenueCat).toContain(PRO_MONTHLY_PRICE_DISPLAY);
    expect(revenueCat).toContain(PRO_YEARLY_PRICE_DISPLAY);
    expect(asc).toContain(PRO_YEARLY_SAVINGS_LABEL_TR);
    expect(asc).toContain(PRO_YEARLY_SAVINGS_LABEL_EN);
    expect(metadata).toContain(
      "exact localized price and billing period before confirmation",
    );
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

  it("blocks production releases without runtime services and treats source maps as optional", () => {
    const workflow = read(".github/workflows/expo-testflight.yml");
    const expoConfig = read("apps/mobile/app.config.ts");
    const requiredSecretsLoop = workflow.match(/for name in ([^;]+); do/)?.[1] ?? "";

    expect(requiredSecretsLoop).toContain("SENTRY_DSN");
    expect(requiredSecretsLoop).not.toContain("SENTRY_AUTH_TOKEN");
    expect(workflow).toContain(
      "SENTRY_AUTH_TOKEN is missing; source-map upload will be skipped",
    );
    expect(expoConfig).toContain('EAS_BUILD_PROFILE === "production"');
    expect(expoConfig).not.toMatch(/SENTRY_AUTH_TOKEN:\s*process\.env\.SENTRY_AUTH_TOKEN/);
    expect(expoConfig).toContain("Production build blocked");
  });
});
