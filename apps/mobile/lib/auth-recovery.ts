export function recoveryTokensFromUrl(url: string): {
  accessToken: string;
  refreshToken: string;
} | null {
  try {
    const parsed = new URL(url);
    const hashParams = new URLSearchParams(parsed.hash.replace(/^#/, ""));
    const readParam = (name: string) =>
      hashParams.get(name) ?? parsed.searchParams.get(name);
    const accessToken = readParam("access_token") ?? "";
    const refreshToken = readParam("refresh_token") ?? "";
    const type = readParam("type");
    if (!accessToken || !refreshToken || (type && type !== "recovery")) return null;
    return { accessToken, refreshToken };
  } catch {
    return null;
  }
}

export function validateNewPassword(password: string, confirmation: string): string | null {
  if (password.length < 8) return "too_short";
  if (password !== confirmation) return "mismatch";
  return null;
}
