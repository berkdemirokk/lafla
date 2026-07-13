const ALLOWED_NOTIFICATION_ROUTES = new Set([
  "/profile",
  "/today",
  "/freechat",
  "/review",
]);

let pendingRoute: string | null = null;
let notificationBootstrapComplete = false;
let resolveNotificationBootstrap: (() => void) | null = null;
const notificationBootstrap = new Promise<void>((resolve) => {
  resolveNotificationBootstrap = resolve;
});

export function routeFromNotificationDeepLink(value: unknown): string | null {
  if (typeof value !== "string" || !value.startsWith("lafla://")) return null;
  const path = value.replace(/^lafla:\/\//, "/").split(/[?#]/, 1)[0] ?? "";
  return ALLOWED_NOTIFICATION_ROUTES.has(path) ? path : null;
}

export function setPendingNotificationRoute(route: string): void {
  if (ALLOWED_NOTIFICATION_ROUTES.has(route)) pendingRoute = route;
}

export function consumePendingNotificationRoute(): string | null {
  const route = pendingRoute;
  pendingRoute = null;
  return route;
}

export function markNotificationBootstrapComplete(): void {
  if (notificationBootstrapComplete) return;
  notificationBootstrapComplete = true;
  resolveNotificationBootstrap?.();
  resolveNotificationBootstrap = null;
}

export async function waitForNotificationBootstrap(
  timeoutMs = 1200,
): Promise<void> {
  if (notificationBootstrapComplete) return;
  await Promise.race([
    notificationBootstrap,
    new Promise<void>((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
}
