//
//  LaflaWidget.swift
//  Lafla — iOS Home Screen Widget
//
//  Renders a Turkish-first snapshot of the user's daily English plan, streak,
//  and CEFR level. All copy comes from the JSON the JS side writes into the
//  shared App Group (`group.com.lafla.app`) under key `lafla.widget.snapshot`.
//
//  No network calls. No live data. The widget is intentionally dumb — it only
//  reflects whatever the app last persisted. iOS refreshes the timeline every
//  ~30 minutes; the JS app also pushes updates on focus + lesson complete via
//  the `LaflaWidgetBridge` module, which calls
//  `WidgetCenter.shared.reloadAllTimelines()`.
//
//  Brand: neon yellow `#F6FF00` on near-black `#1A1C1C`, white text. Matches
//  the Cyber-Electric Modern light/dark theme tokens used in the app.
//

import WidgetKit
import SwiftUI

// MARK: - App Group + decoding

private enum WidgetStore {
    static let appGroup = "group.com.lafla.app"
    static let key = "lafla.widget.snapshot"

    /// Read the latest snapshot JSON from the shared `UserDefaults` suite.
    /// Returns `nil` if the suite isn't reachable (App Group capability not
    /// enabled on either target) or no snapshot has been written yet.
    static func load() -> LaflaSnapshot? {
        guard let defaults = UserDefaults(suiteName: appGroup),
              let json = defaults.string(forKey: key),
              let data = json.data(using: .utf8) else {
            return nil
        }
        let decoder = JSONDecoder()
        return try? decoder.decode(LaflaSnapshot.self, from: data)
    }
}

// MARK: - Snapshot model (mirrors `WidgetSnapshot` in lib/widget-data.ts)

struct LaflaPlanItem: Codable, Hashable {
    let title_tr: String
    let type: String
    let completed: Bool
}

struct LaflaSnapshot: Codable, Hashable {
    let greeting_tr: String
    let todayFocus_tr: String
    let streakDays: Int
    let cefrLevel: String
    let planPreview: [LaflaPlanItem]
    let nextActionDeeplink: String
    let updatedAt: String

    /// Fallback used by the placeholder view + when the App Group is empty.
    /// Keeps the widget legible in the gallery before the user opens the app.
    static let placeholder = LaflaSnapshot(
        greeting_tr: "Merhaba",
        todayFocus_tr: "Bugün: günlük plan seni bekliyor",
        streakDays: 0,
        cefrLevel: "B1",
        planPreview: [
            LaflaPlanItem(title_tr: "Mülakat açılışı", type: "lesson", completed: false),
            LaflaPlanItem(title_tr: "Dinleme pratiği", type: "listening", completed: false),
            LaflaPlanItem(title_tr: "Coach ile pratik", type: "coach", completed: false)
        ],
        nextActionDeeplink: "lafla://feed",
        updatedAt: ISO8601DateFormatter().string(from: Date())
    )
}

// MARK: - Timeline provider

struct LaflaEntry: TimelineEntry {
    let date: Date
    let snapshot: LaflaSnapshot
}

struct LaflaProvider: TimelineProvider {
    func placeholder(in context: Context) -> LaflaEntry {
        LaflaEntry(date: Date(), snapshot: .placeholder)
    }

    func getSnapshot(in context: Context, completion: @escaping (LaflaEntry) -> Void) {
        let snap = WidgetStore.load() ?? .placeholder
        completion(LaflaEntry(date: Date(), snapshot: snap))
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<LaflaEntry>) -> Void) {
        let snap = WidgetStore.load() ?? .placeholder
        let now = Date()
        let entry = LaflaEntry(date: now, snapshot: snap)

        // Ask iOS to refresh in 30 minutes. The app also pushes ad-hoc
        // reloads via `WidgetCenter.shared.reloadAllTimelines()` when the
        // user finishes a lesson, so this is a safety net.
        let refreshAt = Calendar.current.date(byAdding: .minute, value: 30, to: now) ?? now.addingTimeInterval(1800)
        let timeline = Timeline(entries: [entry], policy: .after(refreshAt))
        completion(timeline)
    }
}

// MARK: - Design tokens

private enum LaflaTheme {
    // Neon Noir — mirrors apps/mobile/theme/index.ts
    static let bg = Color.black                                                          // #000000
    static let bgInverse = Color(red: 0x12 / 255, green: 0x12 / 255, blue: 0x12 / 255)   // #121212
    // Property names kept (yellow/blue) for binary-stable Swift refs; values updated.
    static let yellow = Color(red: 0xFF / 255, green: 0x06 / 255, blue: 0x7A / 255)      // #FF067A pink
    static let yellowSoft = Color(red: 0xFF / 255, green: 0x06 / 255, blue: 0x7A / 255).opacity(0.15)
    static let blue = Color(red: 0x00 / 255, green: 0xFF / 255, blue: 0xFF / 255)        // #00FFFF cyan
    static let white = Color.white
    static let muted = Color(white: 1.0, opacity: 0.65)
    static let dim = Color(white: 1.0, opacity: 0.40)
    static let onYellow = Color.white                                                    // white on pink
}

// MARK: - Shared atoms

private struct LevelBadge: View {
    let level: String

    var body: some View {
        Text(level)
            .font(.system(size: 11, weight: .bold, design: .rounded))
            .foregroundColor(LaflaTheme.onYellow)
            .padding(.horizontal, 8)
            .padding(.vertical, 3)
            .background(
                Capsule(style: .continuous)
                    .fill(LaflaTheme.yellow)
            )
            .accessibilityLabel(Text("Seviye \(level)"))
    }
}

private struct StreakChip: View {
    let days: Int

    var body: some View {
        HStack(spacing: 4) {
            Text("🔥")
                .font(.system(size: 14))
            Text("\(days)")
                .font(.system(size: 14, weight: .bold, design: .rounded))
                .foregroundColor(LaflaTheme.white)
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 3)
        .background(
            Capsule(style: .continuous)
                .fill(LaflaTheme.yellowSoft)
        )
        .accessibilityLabel(Text("\(days) gün seri"))
    }
}

private struct PlanRow: View {
    let item: LaflaPlanItem

    private var glyph: String {
        switch item.type {
        case "lesson": return "📘"
        case "listening": return "🎧"
        case "coach": return "💬"
        case "review": return "🔁"
        case "reading": return "📖"
        default: return "•"
        }
    }

    var body: some View {
        HStack(spacing: 8) {
            Text(glyph)
                .font(.system(size: 13))
            Text(item.title_tr)
                .font(.system(size: 13, weight: .medium))
                .foregroundColor(item.completed ? LaflaTheme.dim : LaflaTheme.white)
                .strikethrough(item.completed, color: LaflaTheme.dim)
                .lineLimit(1)
            Spacer(minLength: 0)
            if item.completed {
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 12))
                    .foregroundColor(LaflaTheme.blue)
            }
        }
    }
}

// MARK: - Size-specific views

private struct SmallWidget: View {
    let snap: LaflaSnapshot

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                LevelBadge(level: snap.cefrLevel)
                Spacer()
            }
            Spacer(minLength: 0)
            HStack(alignment: .firstTextBaseline, spacing: 4) {
                Text("\(snap.streakDays)")
                    .font(.system(size: 44, weight: .black, design: .rounded))
                    .foregroundColor(LaflaTheme.yellow)
                Text("🔥")
                    .font(.system(size: 22))
            }
            Text("gün seri")
                .font(.system(size: 12, weight: .semibold))
                .foregroundColor(LaflaTheme.muted)
            Spacer(minLength: 0)
        }
        .padding(14)
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading)
    }
}

private struct MediumWidget: View {
    let snap: LaflaSnapshot

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                StreakChip(days: snap.streakDays)
                LevelBadge(level: snap.cefrLevel)
                Spacer()
                Text("LAFLA")
                    .font(.system(size: 10, weight: .black, design: .rounded))
                    .foregroundColor(LaflaTheme.yellow)
                    .tracking(2)
            }
            Spacer(minLength: 0)
            Text(snap.todayFocus_tr)
                .font(.system(size: 16, weight: .bold))
                .foregroundColor(LaflaTheme.white)
                .lineLimit(2)
                .multilineTextAlignment(.leading)
            Spacer(minLength: 0)
            Text("Devam etmek için dokun")
                .font(.system(size: 11, weight: .medium))
                .foregroundColor(LaflaTheme.muted)
        }
        .padding(16)
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading)
    }
}

private struct LargeWidget: View {
    let snap: LaflaSnapshot

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .center) {
                VStack(alignment: .leading, spacing: 2) {
                    Text(snap.greeting_tr)
                        .font(.system(size: 18, weight: .bold))
                        .foregroundColor(LaflaTheme.white)
                        .lineLimit(1)
                    Text("Bugünün planı")
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundColor(LaflaTheme.muted)
                        .tracking(0.5)
                }
                Spacer()
                VStack(alignment: .trailing, spacing: 6) {
                    LevelBadge(level: snap.cefrLevel)
                    StreakChip(days: snap.streakDays)
                }
            }

            Divider()
                .background(LaflaTheme.dim)

            Text(snap.todayFocus_tr)
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(LaflaTheme.yellow)
                .lineLimit(2)

            VStack(alignment: .leading, spacing: 8) {
                ForEach(Array(snap.planPreview.prefix(3).enumerated()), id: \.offset) { _, item in
                    PlanRow(item: item)
                }
                if snap.planPreview.isEmpty {
                    Text("Plan boş — uygulamayı aç ve programını seç.")
                        .font(.system(size: 12))
                        .foregroundColor(LaflaTheme.muted)
                        .lineLimit(2)
                }
            }

            Spacer(minLength: 0)

            HStack {
                Text("Devam etmek için dokun")
                    .font(.system(size: 11, weight: .medium))
                    .foregroundColor(LaflaTheme.muted)
                Spacer()
                Text("LAFLA")
                    .font(.system(size: 10, weight: .black, design: .rounded))
                    .foregroundColor(LaflaTheme.yellow)
                    .tracking(2)
            }
        }
        .padding(18)
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading)
    }
}

// MARK: - Entry view (size dispatcher)

struct LaflaWidgetEntryView: View {
    @Environment(\.widgetFamily) private var family
    var entry: LaflaProvider.Entry

    var body: some View {
        ZStack {
            LaflaTheme.bg
            content
        }
        .widgetURL(URL(string: entry.snapshot.nextActionDeeplink))
        .containerBackground(for: .widget) {
            LaflaTheme.bg
        }
    }

    @ViewBuilder
    private var content: some View {
        switch family {
        case .systemSmall:
            SmallWidget(snap: entry.snapshot)
        case .systemMedium:
            MediumWidget(snap: entry.snapshot)
        case .systemLarge:
            LargeWidget(snap: entry.snapshot)
        default:
            MediumWidget(snap: entry.snapshot)
        }
    }
}

// MARK: - Widget definition

struct LaflaWidget: Widget {
    let kind: String = "LaflaWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: LaflaProvider()) { entry in
            LaflaWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("Lafla")
        .description("Bugünün İngilizce planı, seri sayın ve seviyen — tek dokunuş uzakta.")
        .supportedFamilies([.systemSmall, .systemMedium, .systemLarge])
        .contentMarginsDisabled()
    }
}

// MARK: - Previews

#if DEBUG
struct LaflaWidget_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            LaflaWidgetEntryView(entry: LaflaEntry(date: Date(), snapshot: .placeholder))
                .previewContext(WidgetPreviewContext(family: .systemSmall))
                .previewDisplayName("Small")
            LaflaWidgetEntryView(entry: LaflaEntry(date: Date(), snapshot: .placeholder))
                .previewContext(WidgetPreviewContext(family: .systemMedium))
                .previewDisplayName("Medium")
            LaflaWidgetEntryView(entry: LaflaEntry(date: Date(), snapshot: .placeholder))
                .previewContext(WidgetPreviewContext(family: .systemLarge))
                .previewDisplayName("Large")
        }
    }
}
#endif
