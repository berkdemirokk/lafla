//
//  LaflaWidgetBundle.swift
//  Lafla — iOS Home Screen Widget Extension
//
//  Bundle entrypoint. WidgetKit looks for a `@main` `WidgetBundle` in the
//  extension target and registers every widget it returns. We only ship one
//  widget today (`LaflaWidget`); add more here later (e.g. lock-screen
//  accessory widgets, Live Activity) without touching the main app target.
//

import WidgetKit
import SwiftUI

@main
struct LaflaWidgetBundle: WidgetBundle {
    var body: some Widget {
        LaflaWidget()
    }
}
