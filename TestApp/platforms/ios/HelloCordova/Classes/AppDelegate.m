/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

//
//  AppDelegate.m
//  HelloCordova
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//  Copyright ___ORGANIZATIONNAME___ ___YEAR___. All rights reserved.
//

#import "AppDelegate.h"
#import "MainViewController.h"
#import <ACPCore/ACPCore.h>
#import <ACPCore/ACPIdentity.h>
#import <ACPCore/ACPLifecycle.h>
#import <ACPCore/ACPSignal.h>
#import <ACPAnalytics/ACPAnalytics.h>
#import <ACPGriffon/ACPGriffon.h>
#import <ACPPlaces/ACPPlaces.h>
#import <ACPUserProfile/ACPUserProfile.h>
#import <ACPPlacesMonitor/ACPPlacesMonitor.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    [ACPCore setLogLevel:ACPMobileLogLevelVerbose];
    [ACPCore setPrivacyStatus:ACPMobilePrivacyStatusOptIn];
    // todo setWrapperType

    // initialization and lifecycle should all be done natively
    // property "steve-places" on obu mobile5: launch-EN06755a968baf4d0dac5159fe1584479f-development
    [ACPCore configureWithAppId:@"launch-EN06755a968baf4d0dac5159fe1584479f-development"];

    [ACPIdentity registerExtension];
    [ACPLifecycle registerExtension];
    [ACPSignal registerExtension];
    [ACPAnalytics registerExtension];
    [ACPGriffon registerExtension];
    [ACPPlaces registerExtension];
    [ACPPlacesMonitor registerExtension];
    [ACPUserProfile registerExtension];

    const UIApplicationState appState = application.applicationState;
    [ACPCore start:^{
        NSLog(@"==================================================================");
        NSLog(@"AEP SDK initialization was successful.");
        NSLog(@"==================================================================");
        // only start lifecycle if the application is not in the background
        if (appState != UIApplicationStateBackground) {
            [ACPCore lifecycleStart:nil];
        }
    }];
    
    self.viewController = [[MainViewController alloc] init];
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    [ACPCore lifecyclePause];
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
    [ACPCore lifecycleStart:nil];
}


@end
