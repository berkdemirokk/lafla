import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";

import {
  applyThemePreference,
  getThemePreference,
  getThemePreferenceSnapshot,
  hydrateThemePreference,
  resolveThemePreference,
  setThemePreference,
  statusBarStyleForScheme,
  subscribeThemePreference,
} from "../theme-preference";

describe("theme preference", () => {
  const setColorScheme = jest
    .spyOn(Appearance, "setColorScheme")
    .mockImplementation(() => {});

  beforeEach(async () => {
    await AsyncStorage.clear();
    applyThemePreference("system");
    setColorScheme.mockClear();
  });

  afterAll(() => {
    setColorScheme.mockRestore();
  });

  it("defaults missing and invalid persisted values to system", async () => {
    await expect(getThemePreference()).resolves.toBe("system");
    await AsyncStorage.setItem("lafla.settings.themePreference", "sepia");
    await expect(getThemePreference()).resolves.toBe("system");
  });

  it("applies immediately, publishes once and persists", async () => {
    const listener = jest.fn();
    const unsubscribe = subscribeThemePreference(listener);

    const persistence = setThemePreference("light");
    expect(getThemePreferenceSnapshot()).toBe("light");
    expect(listener).toHaveBeenCalledTimes(1);
    expect(setColorScheme).toHaveBeenCalledWith("light");

    await persistence;
    await expect(
      AsyncStorage.getItem("lafla.settings.themePreference"),
    ).resolves.toBe("light");

    applyThemePreference("light");
    expect(listener).toHaveBeenCalledTimes(1);
    unsubscribe();
  });

  it("hydrates the native override and reactive snapshot", async () => {
    await AsyncStorage.setItem("lafla.settings.themePreference", "dark");

    await expect(hydrateThemePreference()).resolves.toBe("dark");
    expect(getThemePreferenceSnapshot()).toBe("dark");
    expect(setColorScheme).toHaveBeenCalledWith("dark");
  });

  it("clears the native override for system mode", () => {
    applyThemePreference("system");
    expect(setColorScheme).toHaveBeenCalledWith(null);
  });

  it("resolves system and explicit schemes deterministically", () => {
    expect(resolveThemePreference("system", "dark")).toBe("dark");
    expect(resolveThemePreference("system", "light")).toBe("light");
    expect(resolveThemePreference("system", null)).toBe("light");
    expect(resolveThemePreference("dark", "light")).toBe("dark");
    expect(resolveThemePreference("light", "dark")).toBe("light");
  });

  it("keeps status-bar content legible for every resolved scheme", () => {
    expect(statusBarStyleForScheme("dark")).toBe("light");
    expect(statusBarStyleForScheme("light")).toBe("dark");
    expect(statusBarStyleForScheme(null)).toBe("dark");
  });
});
