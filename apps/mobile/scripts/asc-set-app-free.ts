import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const ASC_BASE = "https://api.appstoreconnect.apple.com/v1";
const BUNDLE_ID = "com.lafla.app";
const BASE_TERRITORY = "USA";

interface Resource {
  id: string;
  type: string;
  attributes?: Record<string, unknown>;
  relationships?: Record<string, unknown>;
}

interface JsonApiList {
  data: Resource[];
  included?: Resource[];
}

interface JsonApiSingle {
  data: Resource;
  included?: Resource[];
}

interface JwtConfig {
  keyId: string;
  issuerId: string;
  privateKey: string;
}

function base64UrlEncode(buf: Buffer | string): string {
  const b = typeof buf === "string" ? Buffer.from(buf) : buf;
  return b
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function generateJwt(cfg: JwtConfig): string {
  const header = base64UrlEncode(
    JSON.stringify({ alg: "ES256", kid: cfg.keyId, typ: "JWT" }),
  );
  const now = Math.floor(Date.now() / 1000);
  const payload = base64UrlEncode(
    JSON.stringify({
      iss: cfg.issuerId,
      iat: now,
      exp: now + 1200,
      aud: "appstoreconnect-v1",
    }),
  );
  const unsigned = `${header}.${payload}`;
  const signer = createSign("SHA256");
  signer.update(unsigned);
  signer.end();
  const sig = signer.sign({ key: cfg.privateKey, dsaEncoding: "ieee-p1363" });
  return `${unsigned}.${base64UrlEncode(sig)}`;
}

function loadConfig(): JwtConfig {
  const keyId = process.env.ASC_KEY_ID ?? process.env.APP_STORE_CONNECT_KEY_ID;
  const issuerId =
    process.env.ASC_ISSUER_ID ?? process.env.APP_STORE_CONNECT_ISSUER_ID;
  const privateKeyEnv =
    process.env.ASC_PRIVATE_KEY ?? process.env.APP_STORE_CONNECT_PRIVATE_KEY;
  const privateKeyPath =
    process.env.ASC_PRIVATE_KEY_PATH ??
    process.env.APP_STORE_CONNECT_PRIVATE_KEY_PATH;

  if (!keyId) throw new Error("ASC_KEY_ID env eksik");
  if (!issuerId) throw new Error("ASC_ISSUER_ID env eksik");
  let privateKey: string | null = null;
  if (privateKeyEnv && privateKeyEnv.includes("PRIVATE KEY")) {
    privateKey = privateKeyEnv;
  } else if (privateKeyPath) {
    privateKey = readFileSync(resolve(privateKeyPath), "utf8");
  } else if (privateKeyEnv) {
    privateKey = readFileSync(resolve(privateKeyEnv), "utf8");
  }
  if (!privateKey) throw new Error("ASC private key bulunamadı");
  return { keyId, issuerId, privateKey };
}

async function ascFetch(
  token: string,
  path: string,
  init: RequestInit = {},
): Promise<unknown> {
  const url = path.startsWith("http") ? path : `${ASC_BASE}${path}`;
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    ...((init.headers as Record<string, string> | undefined) ?? {}),
  };
  if (init.body && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }
  const res = await fetch(url, { ...init, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => "<no body>");
    throw new Error(`ASC ${res.status} ${res.statusText}: ${text}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

async function findAppId(token: string): Promise<string> {
  const list = (await ascFetch(
    token,
    `/apps?filter[bundleId]=${encodeURIComponent(BUNDLE_ID)}&limit=1`,
  )) as JsonApiList;
  const first = list.data?.[0];
  if (!first) throw new Error(`App not found for bundleId ${BUNDLE_ID}`);
  return first.id;
}

async function readCurrentPriceSchedule(
  token: string,
  appId: string,
): Promise<void> {
  const schedule = (await ascFetch(
    token,
    `/apps/${appId}/appPriceSchedule?include=baseTerritory,manualPrices&limit[manualPrices]=10&fields[appPrices]=manual,startDate,endDate,appPricePoint,territory`,
  )) as JsonApiSingle;
  console.log(`Current price schedule id: ${schedule.data.id}`);
  for (const item of schedule.included ?? []) {
    if (item.type === "appPrices") {
      console.log(
        `  current appPrice ${item.id}: start=${String(item.attributes?.startDate ?? "none")} end=${String(item.attributes?.endDate ?? "none")}`,
      );
    }
    if (item.type === "appPricePoints") {
      console.log(
        `  current pricePoint ${item.id}: customerPrice=${String(item.attributes?.customerPrice ?? "unknown")}`,
      );
    }
  }
}

async function findFreePricePointId(
  token: string,
  appId: string,
): Promise<string> {
  const list = (await ascFetch(
    token,
    `/apps/${appId}/appPricePoints?filter[territory]=${BASE_TERRITORY}&fields[appPricePoints]=customerPrice,proceeds,territory&limit=200`,
  )) as JsonApiList;
  const freePoint = list.data.find((point) => {
    const price = Number(point.attributes?.customerPrice);
    return Number.isFinite(price) && price === 0;
  });
  if (!freePoint) {
    const sample = list.data
      .slice(0, 10)
      .map((point) => `${point.id}:${String(point.attributes?.customerPrice)}`)
      .join(", ");
    throw new Error(`Free price point bulunamadı. First points: ${sample}`);
  }
  return freePoint.id;
}

async function setAppFree(
  token: string,
  appId: string,
  pricePointId: string,
): Promise<void> {
  const body = {
    data: {
      type: "appPriceSchedules",
      relationships: {
        app: { data: { type: "apps", id: appId } },
        baseTerritory: { data: { type: "territories", id: BASE_TERRITORY } },
        manualPrices: { data: [{ type: "appPrices", id: "manualPrice-0" }] },
      },
    },
    included: [
      {
        type: "appPrices",
        id: "manualPrice-0",
        attributes: { startDate: null },
        relationships: {
          appPricePoint: {
            data: { type: "appPricePoints", id: pricePointId },
          },
        },
      },
    ],
  };

  const res = (await ascFetch(token, "/appPriceSchedules", {
    method: "POST",
    body: JSON.stringify(body),
  })) as JsonApiSingle;
  console.log(`Created free price schedule: ${res.data.id}`);
}

async function main() {
  const apply = process.argv.includes("--apply");
  console.log(`[asc-set-app-free] ${apply ? "APPLY" : "DRY-RUN"} ${BUNDLE_ID}`);
  const cfg = loadConfig();
  const token = generateJwt(cfg);
  const appId = await findAppId(token);
  console.log(`App id: ${appId}`);
  await readCurrentPriceSchedule(token, appId);
  const freePricePointId = await findFreePricePointId(token, appId);
  console.log(`Free ${BASE_TERRITORY} price point: ${freePricePointId}`);

  if (!apply) {
    console.log("Dry-run complete. Add --apply to set app price to Free.");
    return;
  }

  await setAppFree(token, appId, freePricePointId);
  await readCurrentPriceSchedule(token, appId);
  console.log("Done.");
}

main().catch((err) => {
  console.error("asc-set-app-free failed:", err.message ?? err);
  process.exit(1);
});
