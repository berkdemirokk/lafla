import appConfig from "../../app.json";

describe("native theme configuration", () => {
  it("allows the system and in-app preference to select either appearance", () => {
    expect(appConfig.expo.userInterfaceStyle).toBe("automatic");
  });

  it("does not flash a dark native splash in light mode", () => {
    expect(appConfig.expo).not.toHaveProperty("splash");
    const splashPlugin = appConfig.expo.plugins.find(
      (plugin) => Array.isArray(plugin) && plugin[0] === "expo-splash-screen",
    );
    expect(splashPlugin).toEqual([
      "expo-splash-screen",
      expect.objectContaining({
        backgroundColor: "#F7F7FA",
        dark: expect.objectContaining({ backgroundColor: "#000000" }),
      }),
    ]);
  });
});
