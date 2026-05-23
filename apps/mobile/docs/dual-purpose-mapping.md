# Dual-Purpose Scenario Mapping: Lifestyle ↔ Exam Prep

## Why this matters

Lafla operates two tracks (Daily Life and Exam Prep), but many users straddle both — they have IELTS in 90 days AND a trip to London next month. Roughly 30% of well-designed lifestyle scenarios can double as IELTS/TOEFL speaking practice with zero or minimal content rework, which means a single authored scene serves two SKUs: Lafla Pro subscribers and Exam Pass buyers. This is the highest-leverage content we ship — one production cost, two revenue streams, and a stronger value prop for the ~40% of our addressable market who care about both outcomes.

## Mapping table

The table below maps inferred lifestyle scenarios (40 total across 8 categories, 5 per category) to dual-purpose exam tags. Only scenarios that genuinely double-serve are tagged.

| lifestyle id | lifestyle title | dual-purpose exam(s) | notes |
|---|---|---|---|
| cafe-coffee-order | Ordering coffee at a cafe | — | Pure transactional; too short for monologue |
| cafe-describe-favorite-meal | Telling a friend your favorite meal | IELTS P2: Food; TOEFL Independent Task | Phase 2 reframes as 2-min cue card "Describe a meal you enjoy" |
| cafe-recommend-restaurant | Recommending a restaurant to a colleague | IELTS P2: Places; IELTS P3: Eating habits | Add a P3 follow-up on "fast food culture in your country" |
| cafe-complain-about-order | Complaining politely about an order | — | Real-world only; not a typical exam prompt |
| cafe-small-talk-barista | Small talk with the barista | — | Transactional length |
| work-introduce-yourself | Introducing yourself to a new team | IELTS P1: Work/Studies | P1-style: "What do you do? Do you enjoy it?" |
| work-describe-your-job | Explaining what you do for a living | IELTS P1: Work; IELTS P2: Job you'd like | Strong dual-purpose; reframe as cue card |
| work-meeting-disagreement | Disagreeing in a meeting | — | Workplace-specific register |
| work-ask-for-raise | Asking your manager for a raise | — | Too high-stakes/specific |
| work-remote-vs-office | Remote vs. office working preferences | IELTS P3: Work-life balance; TOEFL Independent | Classic opinion prompt |
| travel-airport-checkin | Checking in at the airport | — | Transactional |
| travel-describe-hometown | Telling a seatmate about your hometown | IELTS P1: Hometown; IELTS P2: A place you love | Canonical IELTS topic; near-zero rework |
| travel-describe-memorable-trip | Sharing a memorable trip story | IELTS P2: A memorable journey; TOEFL Independent | Direct cue card overlap |
| travel-ask-for-directions | Asking for directions | — | Transactional |
| travel-cultural-differences | Discussing cultural differences abroad | IELTS P3: Culture & globalization | Pairs with hometown for P3 depth |
| dating-first-date-questions | First-date getting-to-know-you questions | IELTS P1: Hobbies, Friends, Free time | P1 topics map cleanly |
| dating-describe-ideal-partner | Describing your ideal partner to a friend | IELTS P2: A person who influenced you (adjacent) | Reframe toward "describe someone you admire" |
| dating-app-bio-conversation | Discussing dating app experiences | — | Modern-life specific; not standard exam |
| dating-meet-the-family | Meeting a partner's family | — | Cultural/specific |
| dating-talk-about-hobbies | Talking about hobbies on a date | IELTS P1: Hobbies; IELTS P2: A skill you learned | High-frequency P1 topic |
| shopping-return-item | Returning a faulty item | — | Transactional |
| shopping-describe-favorite-purchase | Describing a recent meaningful purchase | IELTS P2: An item you bought; TOEFL Independent | Direct cue card match |
| shopping-bargain-at-market | Bargaining at a local market | — | Register-specific |
| shopping-online-vs-store | Online shopping vs. in-store debate | IELTS P3: Consumer habits; TOEFL Integrated-style | Opinion + comparison structure |
| shopping-ask-staff-help | Asking shop staff for help | — | Transactional |
| health-book-appointment | Booking a doctor's appointment | — | Transactional |
| health-describe-symptoms | Describing symptoms to a doctor | — | Domain-specific vocab, not exam-aligned |
| health-discuss-healthy-habits | Discussing healthy lifestyle habits | IELTS P3: Health & society; TOEFL Independent | Common opinion topic |
| health-pharmacy-request | Asking for medication at a pharmacy | — | Transactional |
| health-talk-about-exercise | Talking about your exercise routine | IELTS P1: Sports/Keeping fit; IELTS P2: A healthy activity | High-frequency P1 |
| housing-rent-apartment | Renting an apartment | — | Transactional |
| housing-describe-your-home | Describing where you live | IELTS P1: Accommodation; IELTS P2: Your home | Canonical IELTS topic |
| housing-neighbor-noise | Handling a noisy neighbor | — | Conflict-resolution specific |
| housing-utility-problem | Reporting a utility problem | — | Transactional |
| housing-ideal-future-home | Describing your dream home | IELTS P2: An ideal home; TOEFL Independent | Direct cue card match |
| digital-phone-customer-service | Calling customer service | — | Transactional |
| digital-social-media-habits | Discussing your social media use | IELTS P3: Technology & society; TOEFL Independent | Strong opinion-prompt fit |
| digital-recommend-an-app | Recommending an app to a friend | IELTS P2: A useful website/app | Direct cue card match |
| digital-cancel-subscription | Cancelling a subscription on the phone | — | Transactional |
| digital-tech-in-daily-life | Talking about technology in daily life | IELTS P3: Technology trends | Pairs with social media for P3 |

**Total tagged: 14 of 40 (35%)** — slightly above the 30% target, deliberately, to leave room for trimming during editorial review.

## Implementation pattern

Add an optional `dualPurpose` array to the `Scene` type. An array (not a single object) handles scenes that map to multiple parts (e.g., both P1 and P2).

```ts
type DualPurposeTag = {
  exam: 'IELTS' | 'TOEFL';
  part: 'P1' | 'P2' | 'P3' | 'Task1' | 'Task2';
  topic: string;          // e.g. 'Food', 'Hometown', 'Technology'
  reframeNeeded?: boolean; // true if Phase 2 needs an exam-mode variant
};

type Scene = {
  id: string;
  title: string;
  category: LifestyleCategory;
  // ... existing fields
  dualPurpose?: DualPurposeTag[];
};
```

The exam-prep track's query layer filters `scenes.where(s => s.dualPurpose?.some(t => t.exam === 'IELTS' && t.part === 'P2'))`. When a user is enrolled in both tracks, these scenes show in both tabs with a small "also in Exam Prep" pill — reinforcing the dual-value perception without duplicating content.

## Editorial guidelines

When a writer authors a dual-purpose scenario, follow these rules so it works in both modes without two separate scripts:

- **Phase 1 stays conversational**: keep dialog turns short (1-2 sentences), with a partner character. This serves Daily Life and acts as warm-up for the exam variant.
- **Phase 2 carries the monologue load**: design the user's final turn (or a dedicated "extended response" beat) as a 1.5-2 minute solo speaking opportunity on the scene's core topic. This is the IELTS P2 cue card moment.
- **Include a P3-style follow-up question** in the scene's "deeper exploration" branch — e.g., after describing your hometown, the partner asks "how has it changed in the last 20 years?" This is exam-grade abstraction served naturally.
- **Use canonical IELTS/TOEFL topic vocabulary** in the target word bank (e.g., for "describe your home": *spacious, cosy, semi-detached, suburb, neighbourhood*). Lifestyle users learn useful words; exam users get scored vocabulary for free.
- **Tag the reframe explicitly** in the scene metadata when Phase 2 needs different framing for exam mode (e.g., the partner character is replaced by an "examiner prompt" card). Most scenes won't need this — but flag the ones that do.
