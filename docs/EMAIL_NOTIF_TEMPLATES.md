# Email + Notification Templates

Centralized copy catalog for system communications, written in Maya's voice
(kept in the template source as a local copy contract). Two surfaces:

- **Email templates** — `apps/mobile/data/email-templates.ts` (15 templates,
  Turkish-first, dark HTML + plain-text fallback).
- **Push notification templates** — `apps/mobile/data/notification-templates.ts`
  (20 templates, short Turkish copy with deep links).

Both are pure data + simple `{variable}` substitution. The Supabase Edge
Function dispatcher imports the registry, picks an id, fills variables,
sends.

The smart picker (`apps/mobile/lib/templates.ts`) handles on-device push
selection: reads coach state, CEFR level, streak, SRS due count, and known
mistake patterns to choose the best-fit notification, respecting per-template
cooldowns (`lafla.notif.lastFired`).

## Voice rules

- Warm but professional, like a personal coach
- Direct, never childish — no `🎉 TEBRİKLER!!`, no caps-lock cheering
- 1-2 short paragraphs, references concrete user details when available
- Always closes with `— Maya, Lafla'daki koçun`

## Email templates (15)

| id | When it fires | Required vars |
|---|---|---|
| `welcome` | First successful signup | `name` |
| `first-week-recap` | 7 days after signup | `name`, `minutes`, `sessions`, `newWords` |
| `weekly-report` | Every Monday morning (if active) | `name`, `minutes`, `sessions`, `lessons`, `pronAvg` |
| `streak-break` | Day after a 7+ day streak ends | `name`, `daysGone`, `lastStreak` |
| `level-up` | CEFR level advancement | `name`, `level`, `prevLevel` |
| `payment-success` | Initial subscription payment ok | `name`, `amount`, `currency`, `nextBillingDate` |
| `payment-failed` | Renewal charge rejected | `name`, `amount`, `currency`, `graceDays` |
| `subscription-renewed` | Successful renewal | `name`, `amount`, `currency`, `nextBillingDate`, `period` |
| `subscription-cancelled` | User cancels Premium | `name`, `endsOn` |
| `account-deleted-confirmation` | Account deletion processed | `name`, `deletedOn` |
| `password-reset` | User requests reset | `name`, `resetUrl`, `expiresMin` |
| `long-absence-reactivation` | 21+ days no activity | `name`, `daysGone` |
| `monthly-progress` | 1st of each month | `name`, `monthName`, `hours`, `newWords`, `pronAvg` |
| `milestone-100-hours` | Cumulative practice ≥ 100h | `name` |
| `certificate-earned` | New CEFR certificate minted | `name`, `level`, `certificateUrl` |

## Notification templates (20)

| id | When it fires | Cooldown (h) | Deep link |
|---|---|---|---|
| `daily-reminder-morning` | 7–10am, no activity yet | 22 | `lafla://feed` |
| `daily-reminder-evening` | 18–21pm, no activity yet | 22 | `lafla://feed` |
| `streak-risk` | Active streak, 18–26h gap | 20 | `lafla://feed` |
| `streak-saved` | Streak shield consumed | 24 | `lafla://settings/subscription` |
| `review-due` | ≥ 8 SRS items due | 24 | `lafla://review` |
| `drill-due` | Known weakness, idle ≥ 12h | 24 | `lafla://drills` |
| `coach-checkin-3-day-absence` | 3–7 days no interaction | 72 | `lafla://freechat` |
| `coach-checkin-7-day-absence` | 7–30 days no interaction | 168 | `lafla://freechat` |
| `new-content-program` | New program seeded for level | 168 | `lafla://programs` |
| `level-up-announcement` | CEFR level advancement | 0 (event) | `lafla://progress` |
| `certificate-ready` | New cert minted | 0 (event) | `lafla://certificates` |
| `mission-pack-started` | Mission pack onboarded | 48 | `lafla://missions` |
| `mission-pack-completed` | Mission pack 100% done | 0 (event) | `lafla://missions` |
| `weekly-summary` | Monday, active in last 9 days | 144 | `lafla://progress` |
| `anniversary` | 1 year since signup | 0 (event) | `lafla://progress` |
| `improvement-milestone` | Measurable metric jump | 168 | `lafla://progress` |
| `first-pronunciation-perfect` | First 100/100 phoneme score | 0 (event) | `lafla://drills` |
| `filler-detox-progress` | Filler-word rate drop | 168 | `lafla://progress` |
| `voice-session-streak` | N consecutive voice sessions | 48 | `lafla://freechat-voice` |
| `comeback-after-30-days` | First open after 30+d gap | 720 | `lafla://feed` |

## Smart picker priority

`pickBestNotification()` walks predicates in this order and returns the first
candidate that's both eligible and off-cooldown:

1. `comeback-after-30-days`
2. `coach-checkin-7-day-absence`
3. `streak-risk`
4. `review-due` (≥8 items)
5. `drill-due` (known weakness, idle ≥12h)
6. `coach-checkin-3-day-absence`
7. `weekly-summary` (Mondays)
8. `daily-reminder-morning` / `daily-reminder-evening`

Lifecycle/milestone notifications (`level-up`, `certificate-ready`, etc.)
are event-triggered and don't flow through the picker — call them directly
from the originating code path.

## Sample renders — "Berk, B1 level, 12-day streak"

### Email: `welcome` → Berk

> **Subject:** Lafla'ya hoş geldin, Berk
>
> Merhaba Berk,
>
> Ben Maya — Lafla'daki kişisel İngilizce koçun. Önümüzdeki haftalarda seni
> tanıyacağım: seviyeni, hangi konularda takıldığını, hangi saatlerde
> pratiğe vaktinin olduğunu. Hepsi cihazında kalıyor, kimseyle paylaşılmıyor.
>
> Başlangıç için tek bir öneri: bugün 5 dakika ayır, bir konu seç ve
> konuşmaya başla. Hata yapmak burada normal — düzeltmek benim işim.
>
> — Maya, Lafla'daki koçun

### Email: `weekly-report` → Berk, 12-day streak

> **Subject:** Bu hafta: 84 dakika, 6 oturum
>
> Selam Berk,
>
> Hafta özetin: **84 dakika** pratik, 6 koçluk seansı, 9 ders tamamlandı.
> Telaffuz ortalaman 72/100 — bu, geçen haftaya göre +4 fark.
>
> Gelecek hafta için bir öneri: `/θ/` sesli kelimeler. Üzerinde 10–15 dakika
> çalışırsan farkı hissedersin.
>
> — Maya, Lafla'daki koçun

### Notification: `streak-risk` → Berk

- Title: **Birkaç dakika kaldı, Berk**
- Body: 12 günlük serini bugün sürdürmek için bir tur yeter.
- Deep link: `lafla://feed`

### Notification: `daily-reminder-evening` → Berk (last topic: "interview prep")

- Title: **Akşam pratiği, Berk**
- Body: Günü kapatmadan 5 dakika — interview prep üzerine kısa bir tur?
- Deep link: `lafla://feed`

## Edge Function integration

```ts
import { EMAIL_TEMPLATES, renderTemplate } from "@/data/email-templates";

const tpl = EMAIL_TEMPLATES["weekly-report"];
const { subject, html, text } = renderTemplate(tpl, {
  name: "Berk",
  minutes: "84",
  sessions: "6",
  lessons: "9",
  pronAvg: "72",
  pronDelta: "+4",
  nextFocus: "/θ/ sesli kelimeler",
  reportUrl: "https://lafla.app/progress",
  unsubscribeUrl: "https://lafla.app/u/abc123",
});
```

For push, the on-device path uses `pickBestNotification()` → `renderNotification()`.
For server-pushed events (level-up, payment, certificate), the Edge Function
imports `NOTIFICATION_TEMPLATES` directly and renders against the event payload.
