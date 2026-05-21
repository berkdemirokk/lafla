#!/usr/bin/env node
/**
 * Lafla — delete stale iOS provisioning profile from Expo Cloud.
 *
 * 2026-05-21 — Push Notifications capability was enabled in Apple Developer
 * Portal after the cached profile was created (May 18). EAS local builds use
 * the cached profile without checking Apple servers, so they fail with:
 *
 *   "Provisioning Profile ... doesn't include the Push Notifications capability."
 *
 * Workaround: delete the cached profile from Expo Cloud via GraphQL. The
 * next EAS build will regenerate from Apple (which now has push enabled).
 *
 * Auth: uses the same sessionSecret that `eas-cli` reads from ~/.expo/state.json.
 *
 * Run from this directory: `node tools/delete-stale-profile.mjs`
 */

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const PROJECT_FULL_NAME = "@berkdemirok/lafla";
const BUNDLE_ID = "com.lafla.app";
const ENDPOINT = "https://api.expo.dev/graphql";

// 1) Read sessionSecret from EAS CLI's state file
const state = JSON.parse(
  readFileSync(join(homedir(), ".expo", "state.json"), "utf8"),
);
const sessionSecret = state?.auth?.sessionSecret;
if (!sessionSecret) {
  console.error("✗ No sessionSecret in ~/.expo/state.json. Run `eas login` first.");
  process.exit(1);
}
console.log(`✓ Authenticated as: ${state.auth.username}`);

// 2) GraphQL helper. Expo's GraphQL accepts the sessionSecret as a header.
async function gql(query, variables = {}) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "expo-session": sessionSecret,
    },
    body: JSON.stringify({ query, variables }),
  });
  const body = await res.json();
  if (body.errors) {
    console.error("✗ GraphQL errors:");
    for (const e of body.errors) console.error("  ", e.message);
    throw new Error("GraphQL failed");
  }
  return body.data;
}

// 3) Find AppleAppIdentifier ID for our bundle (use real EAS query shape)
const idLookup = await gql(
  `query AppleAppIdentifierByBundleIdQuery(
    $accountName: String!
    $bundleIdentifier: String!
  ) {
    account {
      byName(accountName: $accountName) {
        id
        appleAppIdentifiers(bundleIdentifier: $bundleIdentifier) {
          id
          bundleIdentifier
        }
      }
    }
  }`,
  { accountName: state.auth.username, bundleIdentifier: BUNDLE_ID },
);

const appleAppId = idLookup?.account?.byName?.appleAppIdentifiers?.[0];
if (!appleAppId) {
  console.error(`✗ Could not find AppleAppIdentifier for ${BUNDLE_ID}`);
  process.exit(1);
}
console.log(`✓ Apple App Identifier: ${appleAppId.id}`);

// 4) Query the current provisioning profile
const profileQuery = await gql(
  `query AppleProvisioningProfilesByAppQuery(
    $projectFullName: String!
    $appleAppIdentifierId: String!
    $iosDistributionType: IosDistributionType!
  ) {
    app {
      byFullName(fullName: $projectFullName) {
        id
        iosAppCredentials(filter: { appleAppIdentifierId: $appleAppIdentifierId }) {
          id
          iosAppBuildCredentialsList(
            filter: { iosDistributionType: $iosDistributionType }
          ) {
            id
            provisioningProfile {
              id
              developerPortalIdentifier
              expiration
              updatedAt
            }
          }
        }
      }
    }
  }`,
  {
    projectFullName: PROJECT_FULL_NAME,
    appleAppIdentifierId: appleAppId.id,
    iosDistributionType: "APP_STORE",
  },
);

const buildCreds =
  profileQuery?.app?.byFullName?.iosAppCredentials?.[0]
    ?.iosAppBuildCredentialsList?.[0];
const profile = buildCreds?.provisioningProfile;
if (!profile) {
  console.log("ℹ No provisioning profile found — nothing to delete.");
  process.exit(0);
}
console.log(`✓ Found profile:`);
console.log(`    ID:        ${profile.id}`);
console.log(`    Portal ID: ${profile.developerPortalIdentifier}`);
console.log(`    Updated:   ${profile.updatedAt}`);
console.log(`    Expires:   ${profile.expiration}`);

// 5) Delete it
console.log(`→ Deleting...`);
await gql(
  `mutation DeleteAppleProvisioningProfilesMutation($appleProvisioningProfileIds: [ID!]!) {
    appleProvisioningProfile {
      deleteAppleProvisioningProfiles(ids: $appleProvisioningProfileIds) {
        id
      }
    }
  }`,
  { appleProvisioningProfileIds: [profile.id] },
);

console.log(`✓ Deleted. Next EAS build will regenerate using App Store Connect API key.`);
