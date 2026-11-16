import {
  APPLE_LIMITS,
  METADATA,
  appleLength,
  diffAppInfo,
  localeKeyFor,
  syncAppInfo,
  validateMetadataLimits,
} from "../../scripts/asc-sync";

type FetchCall = { url: string; method: string; body?: unknown };

function jsonResponse(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: String(status),
    json: async () => body,
    text: async () => JSON.stringify(body),
  } as unknown as Response;
}

function mockAsc(appInfos: unknown[], localizations: unknown[]): FetchCall[] {
  const calls: FetchCall[] = [];
  global.fetch = jest.fn(async (input: unknown, init?: RequestInit) => {
    const url = String(input);
    const method = init?.method ?? "GET";
    calls.push({ url, method, body: init?.body ? JSON.parse(String(init.body)) : undefined });
    if (url.endsWith("/apps/app-1/appInfos?limit=10")) return jsonResponse({ data: appInfos });
    if (url.includes("/appInfoLocalizations?limit=50")) return jsonResponse({ data: localizations });
    if (method === "PATCH") return jsonResponse({ data: {} });
    throw new Error(`unexpected request ${method} ${url}`);
  }) as unknown as typeof fetch;
  return calls;
}

describe("asc-sync app info (name/subtitle)", () => {
  const originalFetch = global.fetch;
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => undefined);
  });
  afterEach(() => {
    global.fetch = originalFetch;
    logSpy.mockRestore();
  });

  it("keeps every pushed field within Apple limits", () => {
    expect(validateMetadataLimits()).toEqual([]);
    for (const key of ["tr", "en"] as const) {
      expect(appleLength(METADATA[key].name)).toBeLessThanOrEqual(APPLE_LIMITS.name);
      expect(appleLength(METADATA[key].subtitle)).toBeLessThanOrEqual(APPLE_LIMITS.subtitle);
    }
  });

  it("reports an over-limit name or subtitle", () => {
    const errors = validateMetadataLimits({
      tr: { ...METADATA.tr, name: "x".repeat(31) },
      en: { ...METADATA.en, subtitle: "y".repeat(40) },
    });
    expect(errors).toHaveLength(2);
    expect(errors[0]).toContain("tr.name 31/30");
    expect(errors[1]).toContain("en.subtitle 40/30");
  });

  it("counts Turkish dotted capitals as one character", () => {
    expect(appleLength("İ".normalize("NFD"))).toBe(1);
  });

  it("maps ASC locales to metadata keys", () => {
    expect(localeKeyFor("tr")).toBe("tr");
    expect(localeKeyFor("tr-TR")).toBe("tr");
    expect(localeKeyFor("en-US")).toBe("en");
    expect(localeKeyFor("de-DE")).toBeNull();
  });

  it("diffs only changed fields", () => {
    expect(diffAppInfo({ name: "A", subtitle: "B" }, { name: "A", subtitle: "C" })).toEqual([
      { field: "subtitle", from: "B", to: "C" },
    ]);
    expect(diffAppInfo({}, { name: "A", subtitle: "B" })).toHaveLength(2);
  });

  it("dry-run reads the editable appInfo but never PATCHes", async () => {
    const calls = mockAsc(
      [
        { id: "live", type: "appInfos", attributes: { state: "READY_FOR_DISTRIBUTION" } },
        { id: "draft", type: "appInfos", attributes: { state: "PREPARE_FOR_SUBMISSION" } },
      ],
      [{ id: "loc-tr", type: "appInfoLocalizations", attributes: { locale: "tr", name: "Old", subtitle: "Old" } }],
    );
    await syncAppInfo("token", "app-1", true);
    expect(calls.map((c) => c.method)).toEqual(["GET", "GET"]);
    expect(calls[1].url).toContain("/appInfos/draft/appInfoLocalizations");
  });

  it("apply PATCHes changed name/subtitle per locale", async () => {
    const calls = mockAsc(
      [{ id: "draft", type: "appInfos", attributes: { appStoreState: "PREPARE_FOR_SUBMISSION" } }],
      [
        { id: "loc-tr", type: "appInfoLocalizations", attributes: { locale: "tr", name: "Old", subtitle: METADATA.tr.subtitle } },
        { id: "loc-en", type: "appInfoLocalizations", attributes: { locale: "en-US", name: METADATA.en.name, subtitle: METADATA.en.subtitle } },
      ],
    );
    await syncAppInfo("token", "app-1", false);
    const patches = calls.filter((c) => c.method === "PATCH");
    expect(patches).toHaveLength(1);
    expect(patches[0].url).toMatch(/\/appInfoLocalizations\/loc-tr$/);
    expect(patches[0].body).toEqual({
      data: { id: "loc-tr", type: "appInfoLocalizations", attributes: { name: METADATA.tr.name } },
    });
  });

  it("skips when only a live (read-only) appInfo exists", async () => {
    const calls = mockAsc(
      [{ id: "live", type: "appInfos", attributes: { state: "READY_FOR_DISTRIBUTION" } }],
      [],
    );
    await syncAppInfo("token", "app-1", false);
    expect(calls).toHaveLength(1);
  });
});
