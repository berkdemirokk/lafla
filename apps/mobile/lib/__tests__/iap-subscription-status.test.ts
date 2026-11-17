import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("../sentry", () => ({
  captureException: jest.fn(),
  captureMessage: jest.fn(),
}));
jest.mock("../supabase", () => ({
  isSupabaseConfigured: () => false,
  supabase: null,
}));

import {
  getPremiumStatus,
  getSubscriptionStatus,
  hasPaidEntitlement,
  isPremium,
} from "../iap";
import { clearRewardedPremium, grantRewardedPremium } from "../rewarded";

// No RevenueCat key in tests → __DEV__ mock store path.
describe("paid subscription status vs rewarded temporary Pro", () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it("rewarded-ad Pro counts for isPremium but not for the paid entitlement", async () => {
    await grantRewardedPremium(30);

    await expect(getPremiumStatus()).resolves.toBe("active");
    await expect(isPremium()).resolves.toBe(true);
    await expect(getSubscriptionStatus()).resolves.toBe("inactive");
    await expect(hasPaidEntitlement()).resolves.toBe(false);

    await clearRewardedPremium();
    await expect(isPremium()).resolves.toBe(false);
  });

  it("a paid entitlement is reported by both", async () => {
    await AsyncStorage.setItem("lafla.premium.mock", JSON.stringify({ active: true }));

    await expect(hasPaidEntitlement()).resolves.toBe(true);
    await expect(isPremium()).resolves.toBe(true);
  });
});
