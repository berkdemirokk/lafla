//
//  LaflaWidgetBridge.swift
//  Lafla — React Native ↔ Widget bridge
//
//  This file lives in the MAIN APP target (not the widget extension). It
//  exposes a `LaflaWidgetBridge` native module to JS so `lib/widget-bridge.ts`
//  can hand JSON snapshots over to UserDefaults of the shared App Group and
//  ask WidgetKit to reload the timeline.
//
//  Pair with `LaflaWidgetBridge.m` for the Objective-C macros that expose the
//  class to React Native's bridge.
//
//  App Group: `group.com.lafla.app`
//  UserDefaults key: `lafla.widget.snapshot`
//

import Foundation
import WidgetKit

@objc(LaflaWidgetBridge)
final class LaflaWidgetBridge: NSObject {
    private static let appGroup = "group.com.lafla.app"
    private static let key = "lafla.widget.snapshot"

    @objc
    static func requiresMainQueueSetup() -> Bool { false }

    /// Persist `json` to the shared App Group and reload all widget
    /// timelines. Resolves with `nil`, never rejects under normal conditions —
    /// widget freshness is best-effort.
    @objc(writeSnapshot:resolver:rejecter:)
    func writeSnapshot(_ json: NSString,
                       resolver resolve: @escaping RCTPromiseResolveBlock,
                       rejecter reject: @escaping RCTPromiseRejectBlock) {
        guard let defaults = UserDefaults(suiteName: Self.appGroup) else {
            // App Group not configured — surface as resolve(nil) so JS doesn't
            // treat it as fatal. The error will only happen during initial
            // setup before capabilities are wired up.
            resolve(nil)
            return
        }

        defaults.set(json as String, forKey: Self.key)

        if #available(iOS 14.0, *) {
            WidgetCenter.shared.reloadAllTimelines()
        }

        resolve(nil)
    }
}

/// Promise block types for callers that don't import React/RCTBridgeModule
/// directly. The real definitions come from React when this file is compiled
/// inside the main app target — these typealiases keep the file valid in
/// isolated builds too.
#if !RCT_BRIDGE_MODULE_AVAILABLE
typealias RCTPromiseResolveBlock = (Any?) -> Void
typealias RCTPromiseRejectBlock = (String?, String?, Error?) -> Void
#endif
