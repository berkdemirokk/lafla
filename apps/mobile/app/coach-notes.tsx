// Lafla — "Maya'nın Notları" / Coach self-awareness dashboard.
//
// Transparent, magazine-style screen that shows the user exactly what Maya
// remembers about them: name, level, program, time invested, recent topics,
// observed weaknesses, recent voice sessions, and Maya's next suggestion.
//
// Design intent (and the WHY behind the styling choices):
// - This is the trust-building surface. Lucida AI and friends hide their
//   "memory" behind a vague personality. We show ours. Adult Turkish copy,
//   no badges, no cheerleading, no streak fire emoji.
// - Each section is a card with a subtle outline + thin top label. We chose
//   sectioned cards over a single long list because the categories carry
//   genuinely different semantics ("identity" is static, "observations" are
//   active concerns) and grouping makes them legible at a glance.
// - We load EVERYTHING through lib/coach-insights.ts in a single pass so the
//   screen is a pure presentation layer with one useEffect.
//
// Integration (do NOT edit any of these from here; the host wires them up):
//
//   To integrate /coach-notes:
//   1. app/_layout.tsx — add <Stack.Screen name="coach-notes" />
//   2. app/profile.tsx — add "Maya'nın notları" row → router.push("/coach-notes")
//   3. app/freechat.tsx — add a tiny info icon next to Maya's name → "/coach-notes"
//
// Defensive imports: every cross-module call is wrapped in try/catch in the
// aggregator (lib/coach-insights.ts). If any store is empty or fails, the
// matching section renders an "henüz yeterli veri yok" placeholder rather
// than collapsing.

import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../theme";
import { CoachNoteCard } from "../components/CoachNoteCard";
import { CoachKnowledgeSummary } from "../components/CoachKnowledgeSummary";
import {
  formatDurationTr,
  formatShortDateTr,
  getCoachKnowledge,
  type CoachKnowledge,
} from "../lib/coach-insights";
import { getCefrLevel, CEFR_LEVEL_LABELS_TR } from "../lib/cefr-level";
import {
  getActiveProgram,
  getProgramDef,
  type ProgramState,
  type ProgramDef,
} from "../lib/programs";

// Defensive: metrics is used only for total practice hours. If it fails, the
// hero falls back to a coach.totalMessages-based estimate so the card still
// renders something honest.
function loadMetricsModule():
  | { computeMetrics: () => Promise<{ totalPracticeMinutes: number; coachChatMinutes: number }> }
  | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("../lib/metrics");
    if (mod && typeof mod.computeMetrics === "function") {
      return mod as {
        computeMetrics: () => Promise<{
          totalPracticeMinutes: number;
          coachChatMinutes: number;
        }>;
      };
    }
    return null;
  } catch {
    return null;
  }
}

// Resolved-mistake counter (defensive). The tracker exports
// getAllTrackedMistakes; resolved rows = corrected.
async function safeCountResolvedMistakes(): Promise<number> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("../lib/mistake-tracker");
    if (mod && typeof mod.getAllTrackedMistakes === "function") {
      const all = await mod.getAllTrackedMistakes();
      if (!Array.isArray(all)) return 0;
      return all.filter((m: { resolved?: boolean }) => m?.resolved).length;
    }
  } catch {
    // ignore
  }
  return 0;
}

interface ScreenData {
  knowledge: CoachKnowledge;
  level: string | null;
  program: { state: ProgramState; def: ProgramDef } | null;
  hoursTogether: number;
  mistakesCorrected: number;
}

export default function CoachNotesScreen() {
  const router = useRouter();
  const [data, setData] = useState<ScreenData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // Load all stores in parallel. Aggregator + level + program + metrics +
      // resolved-mistake count. Anything that fails is absorbed by its own
      // safe wrapper; this Promise.all never throws.
      const knowledgeP = getCoachKnowledge();
      const levelP = (async () => {
        try {
          return await getCefrLevel();
        } catch {
          return null;
        }
      })();
      const programP = (async () => {
        try {
          const st = await getActiveProgram();
          if (!st) return null;
          const def = getProgramDef(st.id);
          if (!def) return null;
          return { state: st, def };
        } catch {
          return null;
        }
      })();
      const metricsMod = loadMetricsModule();
      const metricsP = (async () => {
        if (!metricsMod) return { totalPracticeMinutes: 0, coachChatMinutes: 0 };
        try {
          return await metricsMod.computeMetrics();
        } catch {
          return { totalPracticeMinutes: 0, coachChatMinutes: 0 };
        }
      })();
      const resolvedP = safeCountResolvedMistakes();

      const [knowledge, level, program, metrics, mistakesCorrected] =
        await Promise.all([knowledgeP, levelP, programP, metricsP, resolvedP]);

      // Total time: practice minutes from metrics + voice-session minutes the
      // aggregator already collected. We deliberately combine here (not in
      // the aggregator) so the screen has full control over the "headline"
      // number — easier to tweak the heuristic later without touching the
      // pure-data layer.
      const voiceSec = knowledge.sessions.reduce(
        (acc, s) => acc + (s.durationSec || 0),
        0,
      );
      const totalMinutes = metrics.totalPracticeMinutes + voiceSec / 60;
      const hoursTogether = totalMinutes / 60;

      if (!cancelled) {
        setData({
          knowledge,
          level: level
            ? (CEFR_LEVEL_LABELS_TR[level]?.label ?? level)
            : null,
          program,
          hoursTogether,
          mistakesCorrected,
        });
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Maya'nın notları</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subtitle}>
          Maya'nın seninle ilgili hatırladıkları. Şeffaf — sakla, sil, ya da
          bırak gelişsin.
        </Text>

        {loading || !data ? (
          <View style={styles.loadingWrap}>
            <Text style={styles.loadingText}>Maya notlarına bakıyor…</Text>
          </View>
        ) : (
          <ContentSections data={data} router={router} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Sections.
// Split into a separate component so the screen body stays a thin shell —
// makes the loading branch readable and lets us add Suspense later if we
// move to a streaming data layer.
// ---------------------------------------------------------------------------

interface ContentProps {
  data: ScreenData;
  router: ReturnType<typeof useRouter>;
}

function ContentSections({ data, router }: ContentProps) {
  const { knowledge, level, program, hoursTogether, mistakesCorrected } = data;
  const { coach, weaknesses, topics, sessions, suggestion } = knowledge;

  return (
    <View>
      {/* HERO — quiet summary, sets the tone for the rest of the screen. */}
      <CoachKnowledgeSummary
        coachName={coach.name}
        hoursTogether={hoursTogether}
        topicsCovered={topics.length}
        mistakesCorrected={mistakesCorrected}
      />

      {/* 1. KIMLIK — static facts Maya knows about the user. */}
      <Section label="Kimliğin" hint="Maya'nın profilinde yazanlar">
        <IdentityCard
          userName={coach.userDisplayName}
          coachName={coach.name}
          level={level}
          program={program}
          totalMessages={coach.totalMessages}
          totalSessions={coach.totalSessions}
          hoursTogether={hoursTogether}
        />
      </Section>

      {/* 2. ÜZERINDE ÇALIŞTIĞIN KONULAR — recent topic memory MRU. */}
      <Section
        label="Üzerinde çalıştığın konular"
        hint="Son 5 sohbetin başlığı"
      >
        {topics.length === 0 ? (
          <EmptyNote text="Henüz birlikte hiçbir konuyu konuşmadık." />
        ) : (
          topics.map((t, i) => (
            <CoachNoteCard
              key={`${t}-${i}`}
              icon="·"
              title={t}
              body={i === 0 ? "Geçen seferki konu" : "Önceki sohbetlerden"}
              meta={i === 0 ? "en yeni" : undefined}
              variant="neutral"
            />
          ))
        )}
      </Section>

      {/* 3. MAYA'NIN GÖZLEMLERI — weaknesses + mistake-tracker join. */}
      <Section
        label="Maya'nın gözlemleri"
        hint="Tekrar eden hatalar ve dil noktaları"
      >
        {weaknesses.length === 0 ? (
          <EmptyNote text="Maya henüz dikkat çekici bir kalıp görmedi. Devam et — gözleri açık." />
        ) : (
          weaknesses.map((w) => (
            <CoachNoteCard
              key={w.patternId}
              icon="•"
              title={w.description_tr}
              body={w.reason_tr || "Maya bu kalıbı birkaç kez fark etti."}
              meta={
                w.count > 1
                  ? `${w.count} kez yaptın${w.lastSeenLabel ? `, ${w.lastSeenLabel}` : ""}`
                  : w.lastSeenLabel || undefined
              }
              variant="concern"
            />
          ))
        )}
      </Section>

      {/* 4. BIRLIKTE YAPTIKLARIMIZ — last 5 voice sessions. */}
      <Section
        label="Birlikte yaptıklarımız"
        hint="Son sesli pratik seansların"
      >
        {sessions.length === 0 ? (
          <EmptyNote text="Henüz birlikte sesli pratik yapmadık. Hazır olunca beklerim." />
        ) : (
          sessions.map((s) => {
            const dateLabel = formatShortDateTr(s.startedAt);
            const duration = formatDurationTr(s.durationSec);
            const topic =
              Array.isArray(s.topics) && s.topics.length > 0
                ? s.topics[0]
                : null;
            return (
              <CoachNoteCard
                key={s.id}
                icon="→"
                title={topic ?? `${s.turnsCount} sıra sohbet`}
                body={`${dateLabel} · ${duration}`}
                variant="neutral"
              />
            );
          })
        )}
      </Section>

      {/* 5. ÖNERIM — Maya's next-step rule output. */}
      <Section label="Önerim" hint="Maya'nın bir sonraki adım önerisi">
        {suggestion ? (
          <CoachNoteCard
            icon="→"
            title={suggestion.title}
            body=""
            variant="positive"
            cta={
              suggestion.cta && suggestion.route
                ? {
                    label: suggestion.cta,
                    onPress: () => {
                      const route = suggestion.route;
                      if (!route) return;
                      try {
                        // expo-router accepts plain string routes.
                        // Cast through unknown to keep this resilient to
                        // future RoutePath type changes.
                        (
                          router as unknown as {
                            push: (path: string) => void;
                          }
                        ).push(route);
                      } catch {
                        // ignore — navigation is best-effort
                      }
                    },
                  }
                : undefined
            }
          />
        ) : (
          <EmptyNote text="Şimdilik bir önerim yok. Birkaç sohbet daha edelim, sonra paylaşırım." />
        )}
      </Section>

      <Text style={styles.footnote}>
        Bu notların hepsi yalnızca bu cihazda. İstediğin zaman Ayarlar →
        "Maya'yı sıfırla" ile hepsini silebilirsin.
      </Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Section wrapper. Thin label + optional hint, subtle divider underneath.
// ---------------------------------------------------------------------------

function Section({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionLabel}>{label}</Text>
        {hint ? <Text style={styles.sectionHint}>{hint}</Text> : null}
      </View>
      <View style={styles.sectionDivider} />
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}

function EmptyNote({ text }: { text: string }) {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>{text}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Identity card — static facts laid out as a simple definition list. Lives
// inline in this file (rather than a separate component) because it's the
// only place we need this exact layout.
// ---------------------------------------------------------------------------

function IdentityCard({
  userName,
  coachName,
  level,
  program,
  totalMessages,
  totalSessions,
  hoursTogether,
}: {
  userName: string | null;
  coachName: string;
  level: string | null;
  program: { state: ProgramState; def: ProgramDef } | null;
  totalMessages: number;
  totalSessions: number;
  hoursTogether: number;
}) {
  return (
    <View style={styles.identityCard}>
      <IdentityRow
        label="Adın"
        value={userName ?? "Henüz söylemedin"}
      />
      <IdentityRow label="Koçun" value={coachName} />
      <IdentityRow label="Seviyen" value={level ?? "Henüz belirlenmedi"} />
      <IdentityRow
        label="Hedef program"
        value={program ? program.def.title : "Aktif program yok"}
      />
      {program ? (
        <IdentityRow
          label="Programda gün"
          value={`${program.state.currentDay} / ${program.def.durationWeeks * 7}`}
        />
      ) : null}
      <IdentityRow
        label="Pratik süresi"
        value={formatHoursTotal(hoursTogether)}
      />
      <IdentityRow
        label="Sohbet"
        value={`${totalSessions} seans · ${totalMessages} mesaj`}
      />
    </View>
  );
}

function IdentityRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.identityRow}>
      <Text style={styles.identityLabel}>{label}</Text>
      <Text style={styles.identityValue} numberOfLines={2}>
        {value}
      </Text>
    </View>
  );
}

function formatHoursTotal(hours: number): string {
  if (!Number.isFinite(hours) || hours <= 0) return "Henüz başlamadık";
  const totalMinutes = Math.round(hours * 60);
  if (totalMinutes < 60) return `${totalMinutes} dakika`;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (m === 0) return `${h} saat`;
  return `${h} saat ${m} dk`;
}

// ---------------------------------------------------------------------------
// Styles.
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: {
    color: tokens.text.secondary,
    fontSize: 15,
    fontFamily: tokens.font.sans,
  },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.sans,
    letterSpacing: -0.3,
  },
  headerSpacer: { width: 70 },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: tokens.text.secondary,
    fontFamily: tokens.font.sans,
    marginTop: 4,
    marginBottom: 20,
  },
  loadingWrap: {
    paddingVertical: 48,
    alignItems: "center",
  },
  loadingText: {
    fontSize: 14,
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 6,
    paddingHorizontal: 2,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.4,
    textTransform: "uppercase",
    color: tokens.text.primary,
    fontFamily: tokens.font.sans,
  },
  sectionHint: {
    flexShrink: 1,
    fontSize: 11,
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
    marginLeft: 10,
    textAlign: "right",
  },
  sectionDivider: {
    height: 1,
    backgroundColor: tokens.border.light,
    marginBottom: 10,
  },
  sectionBody: {
    // no extra padding — cards bring their own
  },
  empty: {
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  emptyText: {
    fontSize: 13,
    lineHeight: 19,
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
    fontStyle: "italic",
  },
  identityCard: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  identityRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
    gap: 16,
  },
  identityLabel: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
    flexShrink: 0,
    minWidth: 110,
  },
  identityValue: {
    flex: 1,
    fontSize: 14,
    color: tokens.text.primary,
    fontFamily: tokens.font.sans,
    fontWeight: tokens.weight.medium,
    textAlign: "right",
  },
  footnote: {
    fontSize: 12,
    lineHeight: 17,
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
    fontStyle: "italic",
    marginTop: 8,
    paddingHorizontal: 4,
  },
});
