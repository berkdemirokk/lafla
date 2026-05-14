//
//  LaflaWidgetBridge.m
//  Lafla — React Native bridge registration for LaflaWidgetBridge.swift
//
//  Lives in the MAIN APP target (not the widget extension). The Swift class
//  is exposed to React Native via these Objective-C macros — RN's bridge
//  doesn't pick up `@objc` Swift classes on its own.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LaflaWidgetBridge, NSObject)

RCT_EXTERN_METHOD(writeSnapshot:(NSString *)json
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end
