# Lafla Growth Automation

The growth loop is `campaign › signup › first scene › return › invite › rewarded invite`.

| Trigger | Automation | Metric |
| --- | --- | --- |
| App opens | PostHog records return timing | D1/D7 retention |
| A scene is left unfinished | local 6-hour recovery notification | recovery open rate |
| A learner goes inactive | 24h, 3d and 7d lifecycle notifications | resurrected users |
| An invite is shared | `share_invite_sent` records source/channel | invite conversion |
| A code is redeemed | DB RPC validates it and creates one reward job | referral completion |

## One-time production setup

1. Apply migrations, including `00013_referral_automation.sql`.
2. Run a scheduled, service-role worker over `referral_reward_jobs`: claim a pending row, grant the configured RevenueCat promotional entitlement to both users, then mark it fulfilled. It must be idempotent and retry failures; never grant from the mobile client.
3. Build PostHog insights for acquisition source › signup, signup › first `scenario_completed`, D1/D7 return, invite sent › redeemed, and paywall › purchase. Keep raw text and audio out of analytics.
4. Tag every external URL with `utm_source`, `utm_medium`, and `utm_campaign`. Use a distinct referral link per creator; do not scale spend before its install-to-first-scene and D7 cohorts are visible.

## Weekly operating rule

Choose one bottleneck every Monday: low install (store page/creator hook), low first-scene completion (onboarding), low D7 (lifecycle message/content), low invites (show invite after a win), or low redemption (link-to-install flow).

The paid-scale gate: D7 ?35%, first-scene completion ?65%, and measurable referral redemption. Until then, run 8–12 small creator tests and retain the two channels that produce the best activated users—not the cheapest installs.