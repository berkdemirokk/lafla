export type AccentId =
  | "american"
  | "british"
  | "indian"
  | "irish"
  | "international";

export function resolveAccentLocale(accent: AccentId): string {
  switch (accent) {
    case "british":
      return "en-GB";
    case "indian":
      return "en-IN";
    case "irish":
      return "en-IE";
    case "international":
      return "en-SG";
    default:
      return "en-US";
  }
}
