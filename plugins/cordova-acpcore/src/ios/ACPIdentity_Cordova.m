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

#import <ACPCore/ACPCore.h>
#import <ACPCore/ACPIdentity.h>
#import <Cordova/CDV.h>

@interface ACPIdentity_Cordova : CDVPlugin
- (void) extensionVersionIdentity:(CDVInvokedUrlCommand*)command;
- (void) appendVisitorInfoForUrl:(CDVInvokedUrlCommand*)command;
- (void) getExperienceCloudId:(CDVInvokedUrlCommand*)command;
- (void) getIdentifiers:(CDVInvokedUrlCommand*)command;
- (void) getUrlVariables:(CDVInvokedUrlCommand*)command;
- (void) syncIdentifier:(CDVInvokedUrlCommand*)command;
- (void) syncIdentifiers:(CDVInvokedUrlCommand*)command;
#pragma mark - ACPIdentity methods

@end

@implementation ACPIdentity_Cordova

- (void) extensionVersionIdentity:(CDVInvokedUrlCommand*)command {
    [self.commandDelegate runInBackground:^{
        CDVPluginResult* pluginResult = nil;

        NSString *version = [ACPIdentity extensionVersion];

        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:version];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

- (void) appendVisitorInfoForUrl:(CDVInvokedUrlCommand*)command {
    [self.commandDelegate runInBackground:^{
        NSURL *url = [NSURL URLWithString:@"https://www.adobe.com"];
        [ACPIdentity appendToUrl:url withCallback:^(NSURL * _Nullable urlWithVisitorData) {
            CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:[urlWithVisitorData absoluteString]];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}

- (void) getExperienceCloudId:(CDVInvokedUrlCommand*)command {
    [self.commandDelegate runInBackground:^{
        [ACPIdentity getExperienceCloudId:^(NSString * _Nullable experienceCloudId) {
            CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:experienceCloudId];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}

- (void) getIdentifiers:(CDVInvokedUrlCommand*)command {
    [self.commandDelegate runInBackground:^{
        [ACPIdentity getIdentifiers:^(NSArray<ACPMobileVisitorId *> * _Nullable visitorIDs) {
            NSString *visitorIdsString = @"";
            if (!visitorIDs) {
                visitorIdsString = @"nil";
            } else if ([visitorIDs count] == 0) {
                visitorIdsString = @"[]";
            } else {
                for (ACPMobileVisitorId *visitorId in visitorIDs) {
                    visitorIdsString = [visitorIdsString stringByAppendingFormat:@"[Id: %@, Type: %@, Origin: %@, Authentication: %lu] ", [visitorId identifier], [visitorId idType], [visitorId idOrigin], (unsigned long)[visitorId authenticationState]];
                }
            }
            CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:visitorIdsString];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}

- (void) getUrlVariables:(CDVInvokedUrlCommand*)command {
    [self.commandDelegate runInBackground:^{
        [ACPIdentity getUrlVariables:^(NSString * _Nullable urlVariables) {
            CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:urlVariables];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}

- (void)syncIdentifier:(CDVInvokedUrlCommand*)command {
   [self.commandDelegate runInBackground:^{
       NSString *idType = [self getCommandArg:command.arguments[0]];
       NSString *idValue = [self getCommandArg:command.arguments[1]];
       NSInteger state = [self getAuthenticationStateValue:[self getCommandArg:command.arguments[2]]];
      
       [ACPIdentity syncIdentifier:idType identifier:idValue authentication:state];
        CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
       [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
   }];
}

- (void)syncIdentifiers:(CDVInvokedUrlCommand*)command {
   [self.commandDelegate runInBackground:^{
       NSDictionary *identifiers = [self getCommandArg:command.arguments[0]];
       NSInteger state = [self getAuthenticationStateValue:[self getCommandArg:command.arguments[1]]];
       
        if(state < 3) {
            [ACPIdentity syncIdentifiers:identifiers authentication:state];
        } else {
            [ACPIdentity syncIdentifiers:identifiers];
        }

       CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
       [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
   }];
}

/*
 * Helper functions
 */

- (id) getCommandArg:(id) argument {
    return argument == (id)[NSNull null] ? nil : argument;
}

- (NSInteger) getAuthenticationStateValue:(NSNumber*) authState {
    NSInteger authStateInt = 3; // use 3 as the auth state values range from 0-2
    if(authState) {
         switch([authState integerValue]) {
             case 0:
                 authStateInt = ACPMobileVisitorAuthenticationStateUnknown;
                 break;
             case 1:
                 authStateInt = ACPMobileVisitorAuthenticationStateAuthenticated;
                 break;
             case 2:
                 authStateInt = ACPMobileVisitorAuthenticationStateLoggedOut;
                 break;
             default:
                 authStateInt = ACPMobileVisitorAuthenticationStateUnknown;
                 break;
         }
    }
    return authStateInt;
}

@end
