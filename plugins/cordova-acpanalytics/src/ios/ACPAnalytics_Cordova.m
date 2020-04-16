/*
 Copyright 2020 Adobe. All rights reserved.
 This file is licensed to you under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License. You may obtain a copy
 of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under
 the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 OF ANY KIND, either express or implied. See the License for the specific language
 governing permissions and limitations under the License.
 */

/********* cordova-acpanalytics.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import <ACPAnalytics/ACPAnalytics.h>
#import <Cordova/CDVPluginResult.h>

@interface ACPAnalytics_Cordova : CDVPlugin

- (void)extensionVersion:(CDVInvokedUrlCommand*)command;
- (void)sendQueuedHits:(CDVInvokedUrlCommand*)command;
- (void)clearQueue:(CDVInvokedUrlCommand*)comman;
- (void)getQueueSize:(CDVInvokedUrlCommand*)command;
- (void)getTrackingIdentifier:(CDVInvokedUrlCommand*)command;
- (void)getVisitorIdentifier:(CDVInvokedUrlCommand*)command;
- (void)setVisitorIdentifier:(CDVInvokedUrlCommand*)command;

@end

@implementation ACPAnalytics_Cordova

- (void)extensionVersion:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        CDVPluginResult* pluginResult = nil;
        NSString* extensionVersion = [ACPAnalytics extensionVersion];

        if (extensionVersion != nil && [extensionVersion length] > 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:extensionVersion];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        }

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

- (void)sendQueuedHits:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        [ACPAnalytics sendQueuedHits];
        CDVPluginResult* pluginResult = nil;
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

- (void)clearQueue:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        [ACPAnalytics clearQueue];
        CDVPluginResult* pluginResult = nil;
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

- (void)getQueueSize:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        [ACPAnalytics getQueueSize:^(NSUInteger queueSize) {
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:[NSString stringWithFormat:@"%@",  @(queueSize)]];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}

- (void)getTrackingIdentifier:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        [ACPAnalytics getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier) {
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:trackingIdentifier];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}

- (void)getVisitorIdentifier:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        [ACPAnalytics getVisitorIdentifier:^(NSString * _Nullable visitorIdentifier) {
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:visitorIdentifier];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}

- (void)setVisitorIdentifier:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        NSString *vid = [command.arguments objectAtIndex:0];
        [ACPAnalytics setVisitorIdentifier:vid];
        [self.commandDelegate sendPluginResult:nil callbackId:command.callbackId];
    }];
}

@end
