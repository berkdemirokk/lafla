import { useRouter } from "expo-router";

export type AppRoute =
  | "/"
  | "/auth"
  | "/accent-lab"
  | "/certificates"
  | "/diary"
  | "/freechat"
  | "/history"
  | "/home"
  | "/ielts-band"
  | "/index"
  | "/listen-mode"
  | "/mistake-coach"
  | "/onboarding"
  | "/paywall"
  | `/paywall?${string}`
  | "/phoneme-drill"
  | "/placement"
  | "/profile"
  | "/progress-compare"
  | "/relationships"
  | "/real-life"
  | "/review"
  | "/settings"
  | "/today"
  | "/vocab-book"
  | "/voice-journal"
  | "/weakness-report"
  | `/scenario/${string}`;

type Router = ReturnType<typeof useRouter>;

export function pushRoute(router: Router, route: AppRoute) {
  router.push(route as never);
}

export function replaceRoute(router: Router, route: AppRoute) {
  router.replace(route as never);
}
