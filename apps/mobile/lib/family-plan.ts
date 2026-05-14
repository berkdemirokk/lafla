// Lafla — Family Plan (Apple Family Sharing companion).
//
// CONTEXT:
//   Apple Family Sharing is the mechanism that lets a Pro subscription
//   reach up to 5 family members. The entitlement transfer happens in
//   App Store / iOS Settings — we do not (and cannot) drive it from JS.
//   RevenueCat picks up the shared entitlement on the family member's
//   device via the same `getCustomerInfo()` call already used in iap.ts.
//
//   This module is the COSMETIC layer: a local dashboard the organizer
//   can use to remember who is on their family group, since iOS gives us
//   no API to read the real list. All data is stored only on this device.
//
// Storage (AsyncStorage):
//   `lafla.family.plan` -> { organizerKnown: boolean; members: FamilyMember[] }
//
// Conventions follow lib/bookmarks.ts: every function tolerates corrupt
// storage by returning safe defaults instead of throwing.

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_FAMILY = "lafla.family.plan";
const MAX_MEMBERS = 5; // Apple's hard cap for Family Sharing

export interface FamilyMember {
  id: string;
  displayName: string;
  joinedAt: string; // ISO timestamp
  role: "organizer" | "member";
  hasActivePro: boolean;
}

interface FamilyState {
  organizerKnown: boolean;
  members: FamilyMember[];
}

const DEFAULT_STATE: FamilyState = {
  organizerKnown: false,
  members: [],
};

function isFamilyMember(value: unknown): value is FamilyMember {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.displayName === "string" &&
    typeof v.joinedAt === "string" &&
    (v.role === "organizer" || v.role === "member") &&
    typeof v.hasActivePro === "boolean"
  );
}

async function readState(): Promise<FamilyState> {
  try {
    const raw = await AsyncStorage.getItem(K_FAMILY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return { ...DEFAULT_STATE };
    const obj = parsed as Record<string, unknown>;
    const members = Array.isArray(obj.members)
      ? obj.members.filter(isFamilyMember)
      : [];
    return {
      organizerKnown: obj.organizerKnown === true,
      members,
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

async function writeState(next: FamilyState): Promise<void> {
  try {
    await AsyncStorage.setItem(K_FAMILY, JSON.stringify(next));
  } catch {
    // ignore
  }
}

function makeId(): string {
  // Short local-only id; collisions don't matter at MAX_MEMBERS=5.
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

// ------------------------------------------------------------
// Public API
// ------------------------------------------------------------

export async function getFamilyMembers(): Promise<FamilyMember[]> {
  const state = await readState();
  return state.members;
}

/**
 * Add a family member by name (in-app tracking only).
 * Apple Family Sharing decides the real entitlement transfer.
 * Returns the created entry. Silently caps at MAX_MEMBERS.
 */
export async function addFamilyMemberMock(
  displayName: string,
): Promise<FamilyMember> {
  const trimmed = displayName.trim();
  const state = await readState();
  const entry: FamilyMember = {
    id: makeId(),
    displayName: trimmed.length > 0 ? trimmed : "Aile üyesi",
    joinedAt: new Date().toISOString(),
    role: "member",
    hasActivePro: true, // assumed — they're on the organizer's plan
  };
  if (state.members.length >= MAX_MEMBERS) {
    // Already at cap — return entry without persisting.
    return entry;
  }
  const next: FamilyState = {
    ...state,
    members: [...state.members, entry],
  };
  await writeState(next);
  return entry;
}

export async function removeFamilyMember(id: string): Promise<void> {
  const state = await readState();
  const filtered = state.members.filter((m) => m.id !== id);
  if (filtered.length === state.members.length) return;
  await writeState({ ...state, members: filtered });
}

export async function isUserOrganizer(): Promise<boolean> {
  const state = await readState();
  return state.organizerKnown;
}

export async function setUserAsOrganizer(yes: boolean): Promise<void> {
  const state = await readState();
  await writeState({ ...state, organizerKnown: yes });
}

export async function getFamilyPlanStatus(): Promise<{
  isActive: boolean;
  organizerKnown: boolean;
  memberCount: number;
}> {
  const state = await readState();
  return {
    // "Active" here means the user has declared themselves organizer
    // and added at least one member — the in-app dashboard is in use.
    isActive: state.organizerKnown && state.members.length > 0,
    organizerKnown: state.organizerKnown,
    memberCount: state.members.length,
  };
}

/** Max number of family members iOS allows on a single Family Sharing group. */
export const FAMILY_MAX_MEMBERS = MAX_MEMBERS;
