// Onboarding interest options.
// Each interest tags the user with one or more internal "modes"
// the algorithmic feed will weight.

export interface Interest {
  id: string;
  emoji: string;
  label: string;
  // Internal mode tags this interest activates in the feed algorithm.
  modes: ReadonlyArray<"flirt" | "work" | "banter" | "order" | "daily">;
}

export const INTERESTS: ReadonlyArray<Interest> = [
  {
    id: "tinder",
    emoji: "💕",
    label: "Tinder / yabancı tanışma",
    modes: ["flirt"],
  },
  {
    id: "remote_work",
    emoji: "💼",
    label: "Remote iş / Slack",
    modes: ["work"],
  },
  {
    id: "travel",
    emoji: "✈️",
    label: "Yurtdışı seyahat",
    modes: ["daily", "order"],
  },
  {
    id: "ordering",
    emoji: "🛒",
    label: "Restoran / kafe sipariş",
    modes: ["order"],
  },
  {
    id: "bar_party",
    emoji: "🍻",
    label: "Bar / parti sohbeti",
    modes: ["banter"],
  },
];
