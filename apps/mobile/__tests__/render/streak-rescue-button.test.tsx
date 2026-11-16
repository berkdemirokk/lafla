jest.mock("../../lib/ads", () => ({
  isAdsInitialized: jest.fn(() => true),
  preloadRewardedAd: jest.fn(async () => true),
  subscribeAdsInitialized: jest.fn(() => () => {}),
}));
jest.mock("../../lib/analytics", () => ({ trackEvent: jest.fn(async () => {}) }));
jest.mock("../../lib/streak-rescue", () => ({
  getStreakRescueEligibility: jest.fn(),
  earnShieldWithRewardedAd: jest.fn(),
}));

import { StreakRescueButton } from "../../components/StreakRescueButton";
import * as Ads from "../../lib/ads";
import * as Rescue from "../../lib/streak-rescue";
import { t } from "../../lib/i18n";
import { render, flush, press, hasLabel, hasText } from "../../test-utils/rtr";

const isAdsInitialized = Ads.isAdsInitialized as jest.Mock;
const preloadRewardedAd = Ads.preloadRewardedAd as jest.Mock;
const subscribeAdsInitialized = Ads.subscribeAdsInitialized as jest.Mock;
const eligibility = Rescue.getStreakRescueEligibility as jest.Mock;
const earn = Rescue.earnShieldWithRewardedAd as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();
  isAdsInitialized.mockReturnValue(true);
  preloadRewardedAd.mockResolvedValue(true);
  eligibility.mockResolvedValue({ eligible: true });
  earn.mockResolvedValue({ ok: true });
});

describe("StreakRescueButton", () => {
  it("is hidden when not eligible", async () => {
    eligibility.mockResolvedValue({ eligible: false, reason: "premium" });
    const r = await render(<StreakRescueButton />);
    await flush();
    expect(r.toJSON()).toBeNull();
  });

  it("is hidden when eligibility check throws", async () => {
    eligibility.mockRejectedValue(new Error("x"));
    const r = await render(<StreakRescueButton />);
    await flush();
    expect(r.toJSON()).toBeNull();
  });

  it("is hidden when eligible but no ad is ready", async () => {
    preloadRewardedAd.mockResolvedValue(false);
    const r = await render(<StreakRescueButton />);
    await flush();
    expect(r.toJSON()).toBeNull();
  });

  it("is hidden while the ads SDK is not initialized and subscribes", async () => {
    isAdsInitialized.mockReturnValue(false);
    const r = await render(<StreakRescueButton />);
    await flush();
    expect(r.toJSON()).toBeNull();
    expect(subscribeAdsInitialized).toHaveBeenCalledTimes(1);
  });

  it("shows the shield-ready note when the user already holds a shield", async () => {
    eligibility.mockResolvedValue({ eligible: false, reason: "already_has_shield" });
    const r = await render(<StreakRescueButton />);
    await flush();
    expect(hasText(r, t("streakRescue.protected"))).toBe(true);
  });

  it("is visible when eligible and ad ready; press grants via the rescue flow", async () => {
    const onShieldEarned = jest.fn();
    const r = await render(<StreakRescueButton onShieldEarned={onShieldEarned} />);
    await flush();
    expect(hasLabel(r, t("streakRescue.cta"))).toBe(true);
    await press(r, t("streakRescue.cta"));
    await flush();
    expect(earn).toHaveBeenCalledTimes(1);
    expect(onShieldEarned).toHaveBeenCalledTimes(1);
    expect(hasLabel(r, t("streakRescue.cta"))).toBe(false);
    expect(hasText(r, t("streakRescue.protected"))).toBe(true);
  });

  it("uses the missed-yesterday copy after a grant", async () => {
    const r = await render(<StreakRescueButton missedYesterday />);
    await flush();
    await press(r, t("streakRescue.cta"));
    await flush();
    expect(hasText(r, t("streakRescue.protected_missed"))).toBe(true);
  });

  it("shows unavailable note when the ad fails", async () => {
    earn.mockResolvedValue({ ok: false, reason: "ad_failed" });
    const r = await render(<StreakRescueButton />);
    await flush();
    await press(r, t("streakRescue.cta"));
    await flush();
    expect(hasText(r, t("streakRescue.unavailable"))).toBe(true);
  });

  it("offers again after a dismissed ad when another ad is ready", async () => {
    earn.mockResolvedValue({ ok: false, reason: "ad_dismissed" });
    const r = await render(<StreakRescueButton />);
    await flush();
    await press(r, t("streakRescue.cta"));
    await flush();
    expect(hasLabel(r, t("streakRescue.cta"))).toBe(true);
  });

  it("does not crash when the rescue flow throws", async () => {
    earn.mockRejectedValue(new Error("boom"));
    const r = await render(<StreakRescueButton />);
    await flush();
    await press(r, t("streakRescue.cta"));
    await flush();
    expect(hasText(r, t("streakRescue.unavailable"))).toBe(true);
  });
});
