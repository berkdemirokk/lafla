import { StyleSheet } from "react-native";

import {
  darkThemeColors,
  lightThemeColors,
  resolveAdaptiveColorForPlatform,
  tokens,
  type ThemeColorPalette,
} from "..";

type Rgba = readonly [number, number, number, number];

function parseColor(color: string): Rgba {
  const hex = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(color);
  if (hex) {
    return [
      Number.parseInt(hex[1]!, 16) / 255,
      Number.parseInt(hex[2]!, 16) / 255,
      Number.parseInt(hex[3]!, 16) / 255,
      1,
    ];
  }

  const rgba =
    /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
      color,
    );
  if (!rgba) throw new Error(`Unsupported test color: ${color}`);
  return [
    Number(rgba[1]) / 255,
    Number(rgba[2]) / 255,
    Number(rgba[3]) / 255,
    rgba[4] === undefined ? 1 : Number(rgba[4]),
  ];
}

function composite(foreground: Rgba, background: Rgba): Rgba {
  const alpha = foreground[3] + background[3] * (1 - foreground[3]);
  if (alpha === 0) return [0, 0, 0, 0];
  return [
    (foreground[0] * foreground[3] +
      background[0] * background[3] * (1 - foreground[3])) /
      alpha,
    (foreground[1] * foreground[3] +
      background[1] * background[3] * (1 - foreground[3])) /
      alpha,
    (foreground[2] * foreground[3] +
      background[2] * background[3] * (1 - foreground[3])) /
      alpha,
    alpha,
  ];
}

function luminance(color: Rgba): number {
  const linear = color.slice(0, 3).map((channel) =>
    channel <= 0.04045
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * linear[0]! + 0.7152 * linear[1]! + 0.0722 * linear[2]!;
}

function contrastOn(
  foreground: string,
  background: string,
  base = background,
): number {
  const opaqueBase = parseColor(base);
  const renderedBackground = composite(parseColor(background), opaqueBase);
  const renderedForeground = composite(parseColor(foreground), renderedBackground);
  const light = Math.max(
    luminance(renderedForeground),
    luminance(renderedBackground),
  );
  const dark = Math.min(
    luminance(renderedForeground),
    luminance(renderedBackground),
  );
  return (light + 0.05) / (dark + 0.05);
}

function expectAa(
  label: string,
  foreground: string,
  background: string,
  base?: string,
) {
  const ratio = contrastOn(foreground, background, base);
  expect({ label, ratio }).toEqual({
    label,
    ratio: expect.any(Number),
  });
  expect(ratio).toBeGreaterThanOrEqual(4.5);
}

function assertPaletteContrast(
  name: string,
  palette: ThemeColorPalette,
) {
  const page = palette.bg.app;
  const surface = palette.bg.surface;

  for (const [label, color] of [
    ["primary", palette.text.primary],
    ["secondary", palette.text.secondary],
    ["tertiary", palette.text.tertiary],
    ["onSurfaceVariant", palette.text.onSurfaceVariant],
    ["secondaryFixedDim", palette.text.secondaryFixedDim],
  ] as const) {
    expectAa(`${name}.text.${label}`, color, page);
  }

  expectAa(`${name}.inverse`, palette.text.inverseOnSurface, palette.bg.inverseSurface);
  expectAa(`${name}.brand.primary-as-text`, palette.brand.primary, surface);
  expectAa(`${name}.brand.onPrimary`, palette.brand.onPrimary, palette.brand.primary);
  expectAa(
    `${name}.brand.onPrimaryFixed`,
    palette.brand.onPrimary,
    palette.brand.primaryFixed,
  );
  expectAa(`${name}.brand.onSecondary`, palette.brand.onSecondary, palette.brand.secondary);
  expectAa(`${name}.brand.tertiary-as-text`, palette.brand.tertiary, surface);
  expectAa(`${name}.brand.onTertiary`, palette.brand.onTertiary, palette.brand.tertiary);
  expectAa(
    `${name}.brand.onTertiaryContainer`,
    palette.brand.onTertiaryContainer,
    palette.brand.tertiaryContainer,
    surface,
  );

  for (const semantic of ["success", "warning", "error"] as const) {
    const capitalized = `${semantic[0]!.toUpperCase()}${semantic.slice(1)}` as
      | "Success"
      | "Warning"
      | "Error";
    const onKey = `on${capitalized}` as const;
    const containerKey = `${semantic}Container` as const;
    const onContainerKey = `on${capitalized}Container` as const;

    expectAa(
      `${name}.semantic.${semantic}-as-text`,
      palette.semantic[semantic],
      surface,
    );
    expectAa(
      `${name}.semantic.${onKey}`,
      palette.semantic[onKey],
      palette.semantic[semantic],
    );
    expectAa(
      `${name}.semantic.${onContainerKey}`,
      palette.semantic[onContainerKey],
      palette.semantic[containerKey],
      surface,
    );
  }
}

function keyPaths(value: object, prefix = ""): string[] {
  return Object.entries(value).flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return child && typeof child === "object"
      ? keyPaths(child as object, path)
      : [path];
  });
}

describe("theme color contract", () => {
  it("keeps light and dark palettes structurally identical", () => {
    expect(keyPaths(lightThemeColors)).toEqual(keyPaths(darkThemeColors));
  });

  it("meets WCAG AA for normal-size semantic text in light mode", () => {
    assertPaletteContrast("light", lightThemeColors);
  });

  it("meets WCAG AA for normal-size semantic text in dark mode", () => {
    assertPaletteContrast("dark", darkThemeColors);
  });

  it("keeps adaptive iOS colors inside module-scope StyleSheets", () => {
    const styles = StyleSheet.create({
      root: { backgroundColor: tokens.bg.app },
    });
    const flattened = StyleSheet.flatten(styles.root);

    expect(flattened.backgroundColor).toBe(tokens.bg.app);
    expect(tokens.bg.app).toEqual(
      expect.objectContaining({
        dynamic: expect.objectContaining({
          light: lightThemeColors.bg.app,
          dark: darkThemeColors.bg.app,
        }),
      }),
    );
  });

  it("uses native semantic surfaces and AA-safe accents on Android", () => {
    const semantic = resolveAdaptiveColorForPlatform(
      "android",
      lightThemeColors.bg.app,
      darkThemeColors.bg.app,
      ["?android:attr/colorBackground", "?attr/colorBackground"],
    ) as unknown as {
      semantic?: string[];
      resource_paths?: string[];
    };
    const nativePaths = semantic.resource_paths ?? semantic.semantic;

    expect(nativePaths).toContain("?android:attr/colorBackground");
    expect(
      resolveAdaptiveColorForPlatform(
        "android",
        lightThemeColors.brand.primary,
        darkThemeColors.brand.primary,
        "#E4066A",
      ),
    ).toBe("#E4066A");
    expect(
      resolveAdaptiveColorForPlatform(
        "android",
        lightThemeColors.brand.tertiary,
        darkThemeColors.brand.tertiary,
        "#00838B",
      ),
    ).toBe("#00838B");
  });
});
