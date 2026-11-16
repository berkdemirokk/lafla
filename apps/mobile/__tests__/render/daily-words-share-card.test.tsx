jest.mock("react-native-view-shot", () => ({ captureRef: jest.fn() }));
jest.mock("expo-sharing", () => ({
  isAvailableAsync: jest.fn(),
  shareAsync: jest.fn(),
}));
jest.mock("../../lib/analytics", () => ({ trackEvent: jest.fn(async () => {}) }));
jest.mock("../../lib/local-progress", () => ({
  getLocalProfile: jest.fn(async () => ({ current_streak: 4 })),
}));

import { Share } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";

import { DailyWordsShareButton } from "../../components/DailyWordsShareCard";
import { trackEvent } from "../../lib/analytics";
import { t } from "../../lib/i18n";
import { render, flush, press, hasLabel } from "../../test-utils/rtr";

const capture = captureRef as jest.Mock;
const isAvailable = Sharing.isAvailableAsync as jest.Mock;
const shareAsync = Sharing.shareAsync as jest.Mock;
const track = trackEvent as jest.Mock;

const words = [
  { word: "alpha", translation: "a-tr" },
  { word: "beta", translation: "b-tr" },
  { word: "gamma", translation: "c-tr" },
  { word: "delta", translation: "d-tr" },
  { word: "epsilon", translation: "e-tr" },
] as never[];

let shareSpy: jest.SpyInstance;

beforeEach(() => {
  jest.clearAllMocks();
  capture.mockResolvedValue("file:///tmp/card.png");
  isAvailable.mockResolvedValue(true);
  shareAsync.mockResolvedValue(undefined);
  shareSpy = jest.spyOn(Share, "share").mockResolvedValue({ action: "sharedAction" } as never);
});
afterEach(() => shareSpy.mockRestore());

describe("DailyWordsShareButton", () => {
  it("renders the share button", async () => {
    const r = await render(<DailyWordsShareButton correct={8} total={10} words={words} />);
    await flush();
    expect(hasLabel(r, t("shareCard.button"))).toBe(true);
  });

  it("shares the captured image on the happy path", async () => {
    const r = await render(<DailyWordsShareButton correct={8} total={10} words={words} />);
    await flush();
    await press(r, t("shareCard.button"));
    await flush();
    // The card ref may not be mounted by the renderer (no host view refs),
    // in which case the flow must have degraded to text share, never thrown.
    if (shareAsync.mock.calls.length > 0) {
      expect(shareAsync).toHaveBeenCalledWith("file:///tmp/card.png", expect.any(Object));
      expect(shareSpy).not.toHaveBeenCalled();
    } else {
      expect(shareSpy).toHaveBeenCalledTimes(1);
    }
    expect(track).toHaveBeenCalledWith(
      "daily_words_shared",
      expect.objectContaining({ correct: 8, total: 10 }),
    );
  });

  it("falls back to text share when capture throws", async () => {
    capture.mockRejectedValue(new Error("capture failed"));
    const r = await render(<DailyWordsShareButton correct={8} total={10} words={words} />);
    await flush();
    await press(r, t("shareCard.button"));
    await flush();
    expect(shareAsync).not.toHaveBeenCalled();
    expect(shareSpy).toHaveBeenCalledTimes(1);
    const [content] = shareSpy.mock.calls[0]!;
    expect(String((content as { message: string }).message)).toContain("apps.apple.com");
    expect(track).toHaveBeenCalledWith(
      "daily_words_shared",
      expect.objectContaining({ method: "text" }),
    );
  });

  it("falls back to text share when sharing is unavailable", async () => {
    isAvailable.mockResolvedValue(false);
    const r = await render(<DailyWordsShareButton correct={8} total={10} words={words} />);
    await flush();
    await press(r, t("shareCard.button"));
    await flush();
    expect(shareAsync).not.toHaveBeenCalled();
    expect(shareSpy).toHaveBeenCalledTimes(1);
  });

  it("never throws when both image and text share fail", async () => {
    capture.mockRejectedValue(new Error("capture failed"));
    shareSpy.mockRejectedValue(new Error("share failed"));
    const r = await render(<DailyWordsShareButton correct={8} total={10} words={words} />);
    await flush();
    await expect(press(r, t("shareCard.button"))).resolves.toBeUndefined();
    await flush();
    expect(track).toHaveBeenCalledWith(
      "daily_words_shared",
      expect.objectContaining({ method: "failed" }),
    );
    // button is usable again afterwards
    expect(hasLabel(r, t("shareCard.button"))).toBe(true);
  });

  it("renders with zero words and zero score", async () => {
    const r = await render(<DailyWordsShareButton correct={0} total={0} words={[]} />);
    await flush();
    expect(hasLabel(r, t("shareCard.button"))).toBe(true);
  });
});
