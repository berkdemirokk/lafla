// Skills tree — grouped by mode + skill, vertical progression nodes.
// Each skill's lessons unlock progressively (1 → 2 → 3 → 4).

import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { allLessons, type BundledLesson } from "../data/lessons";
import { getCompletedLessonIds } from "../lib/local-progress";
import { tokens } from "../theme";

interface SkillGroup {
  skill_id: string;
  mode: string;
  title: string;
  emoji: string;
  lessons: BundledLesson[];
}

const MODE_INFO: Record<string, { label: string; emoji: string }> = {
  "order": { label: "Sipariş", emoji: "☕" },
  "flirt": { label: "Flört", emoji: "💘" },
  "work": { label: "İş", emoji: "💼" },
  "daily": { label: "Günlük", emoji: "🚶" },
  "banter": { label: "Banter", emoji: "🎤" },
};

const SKILL_TITLES: Record<string, { title: string; emoji: string }> = {
  "order.cafe": { title: "Kafe Siparişi", emoji: "☕" },
  "order.restaurant": { title: "Restoran", emoji: "🍽️" },
  "order.custom": { title: "Özel İstek", emoji: "🥗" },
  "order.bill": { title: "Hesap", emoji: "🧾" },
  "order.complaint": { title: "Şikayet", emoji: "😤" },
  "order.tipping": { title: "Bahşiş", emoji: "💵" },
  "order.bar": { title: "Bar Siparişi", emoji: "🍺" },
  "order.delivery": { title: "Delivery", emoji: "🛵" },
  "flirt.opener": { title: "Tinder Opener", emoji: "💬" },
  "flirt.banter": { title: "Banter (Flört)", emoji: "⚡" },
  "flirt.voice": { title: "Voice Notes", emoji: "🎤" },
  "flirt.date": { title: "Randevu Plan", emoji: "📅" },
  "flirt.cancel": { title: "İptal Etme", emoji: "🙏" },
  "flirt.define": { title: "İlişki Tanımı", emoji: "💞" },
  "flirt.rejection": { title: "Ret / Kabul", emoji: "🚫" },
  "flirt.recovery": { title: "Toparlama", emoji: "🧯" },
  "work.slack": { title: "Slack Adabı", emoji: "💬" },
  "work.meeting": { title: "Toplantı", emoji: "👥" },
  "work.email": { title: "Email", emoji: "📧" },
  "work.review": { title: "Performans", emoji: "📊" },
  "work.coffeechat": { title: "Coffee Chat", emoji: "☕" },
  "work.interview": { title: "Mülakat", emoji: "🎯" },
  "work.codereview": { title: "Code Review", emoji: "👨‍💻" },
  "daily.directions": { title: "Yön Tarifi", emoji: "🗺️" },
  "daily.transport": { title: "Ulaşım", emoji: "🚇" },
  "daily.shopping": { title: "Alışveriş", emoji: "🛒" },
  "daily.pharmacy": { title: "Eczane", emoji: "💊" },
  "daily.hotel": { title: "Otel", emoji: "🏨" },
  "daily.phone": { title: "Telefon", emoji: "📞" },
  "daily.emergency": { title: "Acil", emoji: "🚨" },
  "daily.smalltalk": { title: "Small Talk", emoji: "🌤️" },
  "banter.bar": { title: "Bar Açılış", emoji: "🍻" },
  "banter.roast": { title: "Komik Atışma", emoji: "😏" },
  "banter.whatdoyoudo": { title: "Ne İş Yapıyon", emoji: "💼" },
  "banter.compliment": { title: "İltifat", emoji: "✨" },
  "banter.exit": { title: "Kibarca Bitir", emoji: "👋" },
  "banter.opinions": { title: "Güçlü Fikir", emoji: "🔥" },
};

export default function SkillsScreen() {
  const router = useRouter();
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    getCompletedLessonIds().then(setCompleted);
  }, []);

  const groupedByMode = useMemo(() => {
    const grouped: Record<string, SkillGroup[]> = {};
    const skillMap = new Map<string, SkillGroup>();

    for (const lesson of allLessons) {
      if (!skillMap.has(lesson.skill_id)) {
        const meta = SKILL_TITLES[lesson.skill_id];
        const mode = lesson.skill_id.split(".")[0]!;
        skillMap.set(lesson.skill_id, {
          skill_id: lesson.skill_id,
          mode,
          title: meta?.title ?? lesson.skill_id,
          emoji: meta?.emoji ?? "📚",
          lessons: [],
        });
      }
      skillMap.get(lesson.skill_id)!.lessons.push(lesson);
    }

    for (const group of skillMap.values()) {
      group.lessons.sort((a, b) => a.index - b.index);
      if (!grouped[group.mode]) grouped[group.mode] = [];
      grouped[group.mode]!.push(group);
    }

    return grouped;
  }, []);

  const isLessonLocked = (group: SkillGroup, idx: number): boolean => {
    if (idx === 0) return false;
    // Lock if previous lesson in this skill not completed
    const prev = group.lessons[idx - 1];
    return prev ? !completed.has(prev.id) : false;
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Beceri Ağacı</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {Object.entries(MODE_INFO).map(([mode, info]) => {
          const skills = groupedByMode[mode];
          if (!skills || skills.length === 0) return null;
          return (
            <View key={mode} style={styles.modeSection}>
              <View style={styles.modeHeader}>
                <Text style={styles.modeEmoji}>{info.emoji}</Text>
                <Text style={styles.modeTitle}>{info.label}</Text>
                <Text style={styles.modeMeta}>
                  {skills.length} skill ·{" "}
                  {skills.reduce((s, sk) => s + sk.lessons.length, 0)} ders
                </Text>
              </View>

              {skills.map((group) => {
                const doneCount = group.lessons.filter((l) =>
                  completed.has(l.id),
                ).length;
                const pct = (doneCount / group.lessons.length) * 100;
                return (
                  <View key={group.skill_id} style={styles.skillCard}>
                    <View style={styles.skillHeader}>
                      <Text style={styles.skillEmoji}>{group.emoji}</Text>
                      <View style={styles.skillTitleWrap}>
                        <Text style={styles.skillTitle}>{group.title}</Text>
                        <View style={styles.progressBar}>
                          <View
                            style={[styles.progressFill, { width: `${pct}%` }]}
                          />
                        </View>
                      </View>
                      <Text style={styles.skillCount}>
                        {doneCount}/{group.lessons.length}
                      </Text>
                    </View>
                    <View style={styles.lessonRow}>
                      {group.lessons.map((lesson, idx) => {
                        const isDone = completed.has(lesson.id);
                        const isLocked = isLessonLocked(group, idx);
                        return (
                          <Pressable
                            key={lesson.id}
                            disabled={isLocked}
                            onPress={() =>
                              router.push(`/lesson/${lesson.id}` as never)
                            }
                            style={[
                              styles.node,
                              isDone && styles.nodeDone,
                              isLocked && styles.nodeLocked,
                            ]}
                          >
                            <Text
                              style={[
                                styles.nodeIcon,
                                isLocked && styles.nodeIconLocked,
                              ]}
                            >
                              {isLocked ? "🔒" : isDone ? "✓" : `${idx + 1}`}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

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
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  content: {
    padding: tokens.spacing.md,
    paddingBottom: 80,
  },
  modeSection: {
    marginBottom: tokens.spacing.lg,
  },
  modeHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 4,
    marginBottom: 12,
  },
  modeEmoji: { fontSize: 22 },
  modeTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    flex: 1,
  },
  modeMeta: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
  },
  skillCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 14,
    marginBottom: 10,
  },
  skillHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  skillEmoji: { fontSize: 22 },
  skillTitleWrap: { flex: 1 },
  skillTitle: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 2,
  },
  skillCount: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
  lessonRow: {
    flexDirection: "row",
    gap: 10,
  },
  node: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: tokens.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: tokens.brand.primary,
  },
  nodeDone: {
    backgroundColor: tokens.brand.primary,
    borderColor: tokens.brand.primary,
  },
  nodeLocked: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderColor: tokens.border.outlineVariant,
  },
  nodeIcon: {
    fontSize: 16,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
  },
  nodeIconLocked: {
    color: tokens.text.tertiary,
    fontSize: 14,
  },
});
