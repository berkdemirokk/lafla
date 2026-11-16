import AsyncStorage from "@react-native-async-storage/async-storage";

const mockPremiumStatus = jest.fn(async () => "inactive");
const mockTrackEvent = jest.fn(async () => {});
const mockShowRewardedAdForPlacement = jest.fn();

jest.mock("../iap", () => ({
  getPremiumStatus: () => mockPremiumStatus(),
  isPremium: async () => (await mockPremiumStatus()) === "active",
  notifyPremiumChange: jest.fn(),
}));

jest.mock("../analytics", () => ({
  trackEvent: (...args: unknown[]) => mockTrackEvent(...(args as [])),
}));

// ads.ts pulls in the native AdMob SDK — the rescue logic only needs the
// placement-scoped show function, which tests inject explicitly anyway.
jest.mock("../ads", () => ({
  showRewardedAdForPlacement: (...args: unknown[]) =>
    mockShowRewardedAdForPlacement(...args),
}));

import {
  RESCUE_MONTHLY_EARN_CAP,
  earnShieldWithRewardedAd,
  getStreakRescueEligibility,
} from "../streak-rescue";
import { consumeShieldIfAvailable, getShieldCount } from "../streak-shield";
import type { RewardedResult } from "../ads";

const completed = async (): Promise<RewardedResult> => ({
  ok: true,
  minutesGranted: 30,
});
const dismissed = async (): Promise<RewardedResult> => ({
  ok: false,
  reason: "Reklam tamamlanmadı",
  userClosed: true,
});
const noFill = async (): Promise<RewardedResult> => ({
  ok: false,
  reason: "no-fill",
});

function setNow(iso: string) {
  jest.setSystemTime(new Date(iso));
}

describe("streak rescue (rewarded-ad shield for free users)", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    // Fake only Date so AsyncStorage's promise plumbing keeps running.
    jest.useFakeTimers({
      doNotFake: [
        "nextTick",
        "setImmediate",
        "setTimeout",
        "setInterval",
        "clearTimeout",
        "clearInterval",
        "queueMicrotask",
      ],
    });
    setNow("2026-11-16T10:00:00");
    mockPremiumStatus.mockResolvedValue("inactive");
    await AsyncStorage.clear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("grants exactly one shield only after a completed reward callback", async () => {
    const play = jest.fn(completed);

    await expect(earnShieldWithRewardedAd(play)).resolves.toEqual({ ok: true });

    expect(play).toHaveBeenCalledTimes(1);
    await expect(getShieldCount()).resolves.toBe(1);
    expect(mockTrackEvent).toHaveBeenCalledWith("streak_rescue_shield_earned");
  });

  it("uses the placement-scoped ad (no temporary Pro) by default", async () => {
    mockShowRewardedAdForPlacement.mockImplementation(completed);

    await expect(earnShieldWithRewardedAd()).resolves.toEqual({ ok: true });
    expect(mockShowRewardedAdForPlacement).toHaveBeenCalledWith("streak_rescue");
  });

  it("never grants when the ad is dismissed, fails, or throws", async () => {
    await expect(earnShieldWithRewardedAd(dismissed)).resolves.toEqual({
      ok: false,
      reason: "ad_dismissed",
    });
    await expect(earnShieldWithRewardedAd(noFill)).resolves.toEqual({
      ok: false,
      reason: "ad_failed",
    });
    await expect(
      earnShieldWithRewardedAd(async () => {
        throw new Error("sdk crash");
      }),
    ).resolves.toEqual({ ok: false, reason: "ad_failed" });

    await expect(getShieldCount()).resolves.toBe(0);
    // Failed attempts don't burn the daily allowance.
    await expect(getStreakRescueEligibility()).resolves.toEqual({ eligible: true });
  });

  it("is not offered to Pro users or when entitlement is unknown", async () => {
    const play = jest.fn(completed);

    mockPremiumStatus.mockResolvedValue("active");
    await expect(getStreakRescueEligibility()).resolves.toEqual({
      eligible: false,
      reason: "premium",
    });
    await expect(earnShieldWithRewardedAd(play)).resolves.toEqual({
      ok: false,
      reason: "premium",
    });

    mockPremiumStatus.mockResolvedValue("unknown");
    await expect(earnShieldWithRewardedAd(play)).resolves.toEqual({
      ok: false,
      reason: "premium_unknown",
    });

    expect(play).not.toHaveBeenCalled();
  });

  it("caps held shields at one", async () => {
    await earnShieldWithRewardedAd(completed);
    const play = jest.fn(completed);

    // Next day — daily cap no longer applies, but the hold cap does.
    setNow("2026-11-17T10:00:00");
    await expect(earnShieldWithRewardedAd(play)).resolves.toEqual({
      ok: false,
      reason: "already_has_shield",
    });
    expect(play).not.toHaveBeenCalled();
    await expect(getShieldCount()).resolves.toBe(1);
  });

  it("allows at most one earn per local calendar day", async () => {
    await earnShieldWithRewardedAd(completed);
    await expect(consumeShieldIfAvailable()).resolves.toBe(true);

    setNow("2026-11-16T23:30:00");
    await expect(getStreakRescueEligibility()).resolves.toEqual({
      eligible: false,
      reason: "daily_cap",
    });

    setNow("2026-11-17T00:10:00");
    await expect(getStreakRescueEligibility()).resolves.toEqual({ eligible: true });
  });

  it("allows at most two earns per calendar month, resetting next month", async () => {
    for (let i = 0; i < RESCUE_MONTHLY_EARN_CAP; i += 1) {
      setNow(`2026-11-${String(10 + i * 3).padStart(2, "0")}T10:00:00`);
      await expect(earnShieldWithRewardedAd(completed)).resolves.toEqual({ ok: true });
      await expect(consumeShieldIfAvailable()).resolves.toBe(true);
    }

    setNow("2026-11-25T10:00:00");
    await expect(getStreakRescueEligibility()).resolves.toEqual({
      eligible: false,
      reason: "monthly_cap",
    });

    setNow("2026-12-01T10:00:00");
    await expect(getStreakRescueEligibility()).resolves.toEqual({ eligible: true });
  });

  it("re-checks entitlement after the ad and skips the grant if it changed", async () => {
    const play = jest.fn(async () => {
      mockPremiumStatus.mockResolvedValue("active"); // e.g. purchase mid-ad
      return completed();
    });

    await expect(earnShieldWithRewardedAd(play)).resolves.toEqual({
      ok: false,
      reason: "premium",
    });
    mockPremiumStatus.mockResolvedValue("inactive");
    await expect(getShieldCount()).resolves.toBe(0);
  });

  it("rejects a concurrent second attempt while an ad is on screen", async () => {
    let finish: ((r: RewardedResult) => void) | null = null;
    const slow = () =>
      new Promise<RewardedResult>((resolve) => {
        finish = resolve;
      });

    const first = earnShieldWithRewardedAd(slow);
    await expect(earnShieldWithRewardedAd(completed)).resolves.toEqual({
      ok: false,
      reason: "in_progress",
    });
    // Let the first attempt reach the ad before completing it.
    while (!finish) {
      await new Promise((r) => setImmediate(r));
    }
    (finish as (r: RewardedResult) => void)({ ok: true, minutesGranted: 30 });
    await expect(first).resolves.toEqual({ ok: true });
    await expect(getShieldCount()).resolves.toBe(1);
  });

  it("keeps an unused earned shield across the monthly refresh", async () => {
    await earnShieldWithRewardedAd(completed);

    setNow("2026-12-02T10:00:00");
    await expect(getShieldCount()).resolves.toBe(1);
    await expect(consumeShieldIfAvailable()).resolves.toBe(true);

    // Consumed shield does not come back next month (free grant is 0).
    setNow("2027-01-02T10:00:00");
    await expect(getShieldCount()).resolves.toBe(0);
  });

  it("leaves the Pro monthly grant unchanged", async () => {
    mockPremiumStatus.mockResolvedValue("active");
    await expect(getShieldCount()).resolves.toBe(2);

    setNow("2026-12-01T10:00:00");
    await consumeShieldIfAvailable();
    await consumeShieldIfAvailable();
    setNow("2027-01-01T10:00:00");
    await expect(getShieldCount()).resolves.toBe(2);
  });
});
