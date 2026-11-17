import {
  consumePendingNotificationRoute,
  markNotificationBootstrapComplete,
  routeFromNotificationDeepLink,
  setPendingNotificationRoute,
  waitForNotificationBootstrap,
} from "../notification-routing";

describe("notification routing", () => {
  it("allows only known in-app destinations", () => {
    expect(routeFromNotificationDeepLink("lafla://profile")).toBe("/profile");
    expect(routeFromNotificationDeepLink("lafla://review?from=push")).toBe("/review");
    expect(routeFromNotificationDeepLink("https://example.com/profile")).toBeNull();
    expect(routeFromNotificationDeepLink("lafla://settings?action=delete")).toBeNull();
    expect(routeFromNotificationDeepLink("lafla://../auth")).toBeNull();
  });

  it("consumes a cold-launch destination once", () => {
    setPendingNotificationRoute("/profile");
    expect(consumePendingNotificationRoute()).toBe("/profile");
    expect(consumePendingNotificationRoute()).toBeNull();
  });

  it("waits until cold-launch notification discovery is complete", async () => {
    let resolved = false;
    const waiting = waitForNotificationBootstrap(500).then(() => {
      resolved = true;
    });
    await Promise.resolve();
    expect(resolved).toBe(false);
    markNotificationBootstrapComplete();
    await waiting;
    expect(resolved).toBe(true);
  });
});
