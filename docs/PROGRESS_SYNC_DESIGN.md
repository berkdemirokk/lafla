# Progress synchronization design

Status: proposal; the current application does not yet implement this design.

## Current behavior and risks

`lib/srs.ts` calculates lesson completion and review state locally, then sends a best-effort upsert to `lesson_state`. Completion also upserts local skill mastery. Both tables use a user and lesson/skill primary key (`supabase/migrations/00001_initial.sql`). An older device or an out-of-order request can overwrite newer progress. Failures are not queued for retry. Due reviews, metrics, and achievements read local state, so a server-only correction does not restore progress on another device. `recordReview` also ignores error responses from Supabase.

SRS intervals and mastery use order-dependent calculations. Taking the greatest counter or most recent snapshot is not sufficient to merge concurrent histories.

## Target behavior

Each completion and review has one stable event ID. The server applies an event at most once and maintains a canonical result. A device can work offline, retry after interruption, and eventually restore canonical progress without discarding pending local work. Account changes cannot send one person's pending events under another person's identity.

## Implementation stages

1. **Define event contract and order.** Store event ID, owner, kind, lesson ID, skill ID when applicable, completion accuracy and exercise count or review rating, plus occurrence and receipt timestamps. Validate type, range and payload size. Use server acceptance order as the initial canonical order, with a server-generated sequence. This explicitly means an event submitted late is applied after previously accepted events; device timestamps are informational. Evaluate whether that tradeoff is acceptable for SRS before release. If chronological ordering is required, define clock-skew handling and replay per affected lesson and skill.
2. **Server transaction.** Add `progress_events` with unique `(user_id, event_id)`, a monotonic server sequence, and cascading account deletion. Expose an authenticated RPC that derives the owner from `auth.uid()`, checks the payload and serializes mutations for that user's affected lesson and skill. In one database transaction, insert the event, update `lesson_state` and, for completion, `skill_mastery`, using formulas equivalent to the app. Duplicate IDs return the existing acknowledgement and do not apply the operation twice. Restrict direct writes to aggregate tables once compatible clients have migrated. Pin function search paths and test RLS and cross-user access.
3. **Durable client outbox.** Use a transactional local store, such as SQLite, to write the event, its owner and the optimistic local projection together. A retry sends the same event ID. Remove it only after acknowledgement; retry transient failures with bounded exponential backoff on startup, sign-in and connectivity recovery. Surface permanent errors for recovery rather than dropping them. Guard concurrent flushes and retain events across restarts. Prevent events assigned to one account from being flushed by another. Define a separate, explicit one-time ownership transfer for anonymous events.
4. **Pull and reconcile.** Provide a server snapshot or change feed with a consistent sequence watermark. Persist the canonical snapshot and cursor atomically; rebuild the visible local projection by replaying unacknowledged events over it in local order. Avoid acknowledging events based only on a snapshot timestamp. Hook refresh into sign-in and app resume, and ensure due reviews, metrics and achievements read the reconciled state. Define behavior when connectivity fails and when an event is permanently rejected.
5. **Rollout.** Ship server compatibility first, then clients capable of outbox and pull. Instrument duplicate acknowledgements, retries, rejected events and queue age without logging sensitive content. Keep a versioned compatibility period for older clients; retire direct aggregate writes only after supported clients use the RPC. Avoid mixing legacy blind upserts and event-derived aggregates without an explicit conflict policy.

## Existing data migration

Existing aggregates lack event history, so they cannot be reconstructed accurately. Treat each user's existing server state as an immutable baseline with a migration version and watermark; apply only subsequently accepted events over that baseline. Never invent historical events from aggregate counters. Define an idempotent import for device-only progress, with a stable import ID and an explicit per-user/per-device marker. Where server and device snapshots conflict, do not blindly add counters or replace one with the other: retain both for reconciliation and specify a product-approved selection or conflict resolution policy. Test upgraded users, multiple devices upgrading at different times, and anonymous data adoption before enabling automatic import. Back up and rehearse migration and rollback on disposable data.

## Acceptance tests

- Two devices complete the same skill while offline and sync in both orders; each unique event contributes once, and both devices converge to the server's declared order.
- Completion and review events for the same lesson preserve the chosen SRS ordering, including late submissions.
- A request commits but its response is lost; retrying the same ID changes no counter or interval twice.
- Parallel duplicates and delayed responses cannot overwrite a later canonical state.
- App termination between local completion, send, acknowledgement and queue removal loses neither work nor a retry.
- Sign out and another sign-in never upload the first account's outbox; anonymous adoption runs at most once.
- Fresh installation restores lesson state and mastery, and pending local events survive snapshot refresh.
- Network failures retain queued events; permanent validation failures are visible and recoverable.
- Legacy baseline/import is repeatable without duplicated progress, including a second device with stale data.
- RLS and RPC checks reject anonymous and cross-user operations; account deletion removes server events and local cleanup is verified separately.
- Existing local-only flows, review scheduling, metrics and achievements behave correctly through upgrade and offline use.
