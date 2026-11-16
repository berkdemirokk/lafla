import AsyncStorage from "@react-native-async-storage/async-storage";

const mockStatus = jest.fn(async () => "unknown");
jest.mock("../iap", () => ({
  getSubscriptionStatus: () => mockStatus(),
  hasPaidEntitlement: async () => (await mockStatus()) === "active",
}));
jest.mock("../analytics", () => ({ trackEvent: jest.fn(async () => {}) }));

import { getShieldCount } from "../streak-shield";

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe("monthly shield refresh while subscription status is unknown", () => {
  it("writes neither count nor marker, then grants once status resolves", async () => {
    mockStatus.mockResolvedValue("unknown");
    expect(await getShieldCount()).toBe(0);
    expect(await AsyncStorage.getItem("lafla.shield.refresh_ym")).toBeNull();
    expect(await AsyncStorage.getItem("lafla.shield.count")).toBeNull();

    mockStatus.mockResolvedValue("active");
    expect(await getShieldCount()).toBe(2);
    expect(await AsyncStorage.getItem("lafla.shield.refresh_ym")).not.toBeNull();
  });
});
