import AsyncStorage from "@react-native-async-storage/async-storage";

const mockPremiumStatus = jest.fn(async () => "inactive");
// Paid subscription only (no rewarded-ad temporary Pro). Defaults to
// following mockPremiumStatus; override to simulate a rewarded-Pro window.
const mockSubscriptionStatus = jest.fn(async () => mockPremiumStatus());
const mockTrackEvent = jest.fn(async () => {});
const mockShowRewardedAdForPlacement = jest.fn();

jest.mock("../iap", () => ({
  getPremiumStatus: () => mockPremiumStatus(),
  isPremium: async () => (await mockPremiumStatus()) === "active",
  getSubscriptionStatus: () => mockSubscriptionStatus(),
  hasPaidEntitlement: async () => (await mockSubscriptionStatus()) === "active",
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
  getStreakRescueBannerState,
  getStreakRescueEligibility,
} from "../streak-rescue";
import {
  consumeShieldIfAvailable,
  getMonthlyGrant,
  getShieldCount,
  getStreakRiskState,
} from "../streak-shield";
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
    mockSubscriptionStatus.mockImplementation(async () => mockPremiumStatus());
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

  it("does not give the Pro monthly grant to a free user inside a rewarded-Pro window", async () => {
    // Rewarded-ad temporary Pro: isPremium()/getPremiumStatus() say active,
    // but there is no paid subscription.
    mockPremiumStatus.mockResolvedValue("active");
    mockSubscriptionStatus.mockResolvedValue("inactive");
    setNow("2026-11-30T23:50:00");
    await expect(getShieldCount()).resolves.toBe(0);

    setNow("2026-12-01T00:05:00"); // month rolls over mid-window
    await expect(getShieldCount()).resolves.toBe(0);
    await expect(getMonthlyGrant()).resolves.toBe(0);
  });

  it("keeps an earned shield (not the Pro grant) across a rollover in a rewarded-Pro window", async () => {
    await expect(earnShieldWithRewardedAd(completed)).resolves.toEqual({ ok: true });
    mockPremiumStatus.mockResolvedValue("active");
    mockSubscriptionStatus.mockResolvedValue("inactive");
    setNow("2026-12-01T09:00:00");
    await expect(getShieldCount()).resolves.toBe(1);
  });

  it("grants 2 at rollover for a paid subscriber", async () => {
    mockPremiumStatus.mockResolvedValue("active");
    mockSubscriptionStatus.mockResolvedValue("active");
    setNow("2026-12-01T09:00:00");
    await expect(getShieldCount()).resolves.toBe(2);
    await expect(getMonthlyGrant()).resolves.toBe(2);
  });
});

describe("streak risk window (local calendar days, mirrors bumpStreak)", () => {
  const at = (y: number, m: number, d: number, h: number, min = 0) =>
    new Date(y, m - 1, d, h, min);

  it.each([
    ["practiced today", at(2026, 11, 16, 8), at(2026, 11, 16, 23), "none"],
    ["yesterday, <22h ago", at(2026, 11, 15, 20), at(2026, 11, 16, 10), "none"],
    ["yesterday, ≥22h ago", at(2026, 11, 15, 8), at(2026, 11, 16, 7), "due_today"],
    ["missed yesterday, just past midnight (25.5h)", at(2026, 11, 14, 23), at(2026, 11, 16, 0, 30), "missed_yesterday"],
    ["missed yesterday, opened at 30h (old 22–26h window missed this)", at(2026, 11, 14, 20), at(2026, 11, 16, 2), "missed_yesterday"],
    ["yesterday morning, opened at 37h same day → still due today", at(2026, 11, 14, 8), at(2026, 11, 15, 21), "due_today"],
    ["missed yesterday, late in the day (62h)", at(2026, 11, 14, 8), at(2026, 11, 16, 22), "missed_yesterday"],
    ["two days missed", at(2026, 11, 13, 22), at(2026, 11, 16, 1), "none"],
    ["future timestamp (clock drift)", at(2026, 11, 17, 9), at(2026, 11, 16, 9), "none"],
  ])("%s", (_label, last, now, expected) => {
    expect(getStreakRiskState(last.toISOString(), now)).toBe(expected);
  });

  it("handles missing / invalid timestamps", () => {
    expect(getStreakRiskState(undefined)).toBe("none");
    expect(getStreakRiskState(null)).toBe("none");
    expect(getStreakRiskState("not-a-date")).toBe("none");
  });
});

describe("streak rescue banner state", () => {
  const now = new Date(2026, 10, 16, 21, 0); // Mon 21:00 local
  const missed = new Date(2026, 10, 14, 9, 0).toISOString(); // Sat → missed Sun
  const yesterday = new Date(2026, 10, 15, 9, 0).toISOString();

  beforeEach(async () => {
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
    jest.setSystemTime(now);
    mockPremiumStatus.mockResolvedValue("inactive");
    mockSubscriptionStatus.mockImplementation(async () => mockPremiumStatus());
    await AsyncStorage.clear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("shows the whole missed-yesterday day for a free user who can earn a shield", async () => {
    await expect(
      getStreakRescueBannerState({ current_streak: 9, last_lesson_at: missed }, now),
    ).resolves.toBe("missed_yesterday");
  });

  it("shows missed-yesterday when the user already holds a shield", async () => {
    mockPremiumStatus.mockResolvedValue("active");
    await expect(getShieldCount()).resolves.toBe(2);
    await expect(
      getStreakRescueBannerState({ current_streak: 9, last_lesson_at: missed }, now),
    ).resolves.toBe("missed_yesterday");
  });

  it("hides missed-yesterday when no shield is held and none can be earned", async () => {
    mockPremiumStatus.mockResolvedValue("active");
    await getShieldCount();
    await consumeShieldIfAvailable();
    await consumeShieldIfAvailable();
    await expect(
      getStreakRescueBannerState({ current_streak: 9, last_lesson_at: missed }, now),
    ).resolves.toBe("none");
  });

  it("returns due_today for a yesterday-practicer late in the window", async () => {
    await expect(
      getStreakRescueBannerState({ current_streak: 3, last_lesson_at: yesterday }, now),
    ).resolves.toBe("due_today");
  });

  it("hides with no streak, after a 2+ day gap, or with no profile", async () => {
    await expect(
      getStreakRescueBannerState({ current_streak: 0, last_lesson_at: missed }, now),
    ).resolves.toBe("none");
    await expect(
      getStreakRescueBannerState(
        { current_streak: 9, last_lesson_at: new Date(2026, 10, 13, 9).toISOString() },
        now,
      ),
    ).resolves.toBe("none");
    await expect(getStreakRescueBannerState(null, now)).resolves.toBe("none");
  });
});

describe("risk window matches when bumpStreak can actually use a shield", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const lp = require("../local-progress") as typeof import("../local-progress");

  beforeEach(async () => {
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
    mockPremiumStatus.mockResolvedValue("inactive");
    mockSubscriptionStatus.mockImplementation(async () => mockPremiumStatus());
    await AsyncStorage.clear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("missed_yesterday + earned shield → lesson today preserves the streak", async () => {
    const last = new Date(2026, 10, 14, 9, 0);
    const now = new Date(2026, 10, 16, 23, 30); // 62.5h later, still the save day
    jest.setSystemTime(now);
    await lp.setLocalProfile({ current_streak: 9, longest_streak: 9, last_lesson_at: last.toISOString() });

    expect(getStreakRiskState(last.toISOString(), now)).toBe("missed_yesterday");
    await expect(earnShieldWithRewardedAd(completed)).resolves.toEqual({ ok: true });

    await lp.bumpStreak();
    await expect(lp.getLocalProfile()).resolves.toMatchObject({ current_streak: 10 });
    await expect(getShieldCount()).resolves.toBe(0);
  });

  it("after local midnight (2 missed days) the shield no longer helps and the banner is gone", async () => {
    const last = new Date(2026, 10, 14, 9, 0);
    const now = new Date(2026, 10, 17, 0, 10);
    jest.setSystemTime(new Date(2026, 10, 16, 12, 0));
    await expect(earnShieldWithRewardedAd(completed)).resolves.toEqual({ ok: true });
    jest.setSystemTime(now);
    await lp.setLocalProfile({ current_streak: 9, longest_streak: 9, last_lesson_at: last.toISOString() });

    expect(getStreakRiskState(last.toISOString(), now)).toBe("none");
    await lp.bumpStreak();
    await expect(lp.getLocalProfile()).resolves.toMatchObject({ current_streak: 1 });
    await expect(getShieldCount()).resolves.toBe(1); // not wasted
  });
});
