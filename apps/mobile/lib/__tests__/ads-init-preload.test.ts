const mockSetConfig = jest.fn(async () => {});
const mockInitialize = jest.fn(async () => {});
const mockCreateRewarded = jest.fn();

jest.mock("react-native-google-mobile-ads", () => ({
  __esModule: true,
  default: () => ({
    setRequestConfiguration: mockSetConfig,
    initialize: mockInitialize,
  }),
  AdEventType: { LOADED: "loaded", ERROR: "error" },
  RewardedAdEventType: { LOADED: "rewarded_loaded" },
  MaxAdContentRating: { T: "T" },
  InterstitialAd: { createForAdRequest: jest.fn() },
  RewardedAd: {
    createForAdRequest: (...a: unknown[]) => mockCreateRewarded(...a),
  },
  TestIds: { BANNER: "b", INTERSTITIAL: "i", REWARDED: "r" },
}));
jest.mock("expo-constants", () => ({ __esModule: true, default: {} }));
jest.mock("../iap", () => ({ getPremiumStatus: jest.fn() }));
jest.mock("../rewarded", () => ({ grantRewardedPremium: jest.fn() }));
jest.mock("../analytics", () => ({ trackEvent: jest.fn(async () => {}) }));
jest.mock("../sentry", () => ({ captureMessage: jest.fn() }));

import { initAds, isAdsInitialized, preloadRewardedAd } from "../ads";

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

describe("initAds", () => {
  it("shares one initialization across concurrent callers, retries once after failure", async () => {
    mockInitialize.mockRejectedValueOnce(new Error("boom"));
    await Promise.all([initAds(), initAds()]);
    expect(mockInitialize).toHaveBeenCalledTimes(1);
    expect(isAdsInitialized()).toBe(false);

    await jest.advanceTimersByTimeAsync(5000);
    expect(mockInitialize).toHaveBeenCalledTimes(2);
    expect(isAdsInitialized()).toBe(true);
  });
});

describe("preloadRewardedAd", () => {
  it("does not stay stuck when createForAdRequest throws synchronously", async () => {
    mockCreateRewarded.mockImplementationOnce(() => {
      throw new Error("sync");
    });
    await expect(preloadRewardedAd()).resolves.toBe(false);
    await Promise.resolve();

    mockCreateRewarded.mockImplementationOnce(() => ({
      addAdEventListener: (evt: string, cb: () => void) => {
        if (evt === "rewarded_loaded") setTimeout(cb, 0);
        return () => {};
      },
      load: jest.fn(),
    }));
    const next = preloadRewardedAd();
    await jest.advanceTimersByTimeAsync(1);
    await expect(next).resolves.toBe(true);
    expect(mockCreateRewarded).toHaveBeenCalledTimes(2);
  });
});
