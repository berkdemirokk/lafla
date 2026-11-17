/**
 * Local calendar-day key for user-facing daily loops.
 *
 * Quotas, daily plans, streak nudges, and "today" UI should roll over when
 * the user's device reaches local midnight. A UTC key is stable for servers,
 * but it makes Istanbul users wait until 03:00 for a "new day" in summer.
 */
export function localDayKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
