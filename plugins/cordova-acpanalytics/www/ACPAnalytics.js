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

var ACPAnalytics = (function() {
    var exec = require('cordova/exec');
	var ACPAnalytics = (typeof exports !== 'undefined') && exports || {};
	var PLUGIN_NAME = "ACPAnalytics_Cordova";
	// ===========================================================================
	// public APIs
	// ===========================================================================

    // Gets the current Analytics extension version.
    ACPAnalytics.extensionVersion = function (success, error) {
        exec(success, error, 'ACPAnalytics_Cordova', 'extensionVersion', []);
    };

    // Sends all queued hits to Analytics, regardless of the current hit batch settings.
    ACPAnalytics.sendQueuedHits = function (success, error) {
        exec(success, error, 'ACPAnalytics_Cordova', 'sendQueuedHits', []);
    };

    // Force delete, without sending to Analytics, all hits being stored or batched on the SDK.
    ACPAnalytics.clearQueue = function (success, error) {
        exec(success, error, 'ACPAnalytics_Cordova', 'clearQueue', []);
    };

    // Retrieves the total number of Analytics hits in the tracking queue.
    ACPAnalytics.getQueueSize = function (success, error) {
        exec(success, error, 'ACPAnalytics_Cordova', 'getQueueSize', []);
    };

    // Retrieves the Analytics tracking identifier that is generated for this app/device instance.
    ACPAnalytics.getTrackingIdentifier = function (success, error) {
        exec(success, error, 'ACPAnalytics_Cordova', 'getTrackingIdentifier', []);
    };

    // Gets a custom Analytics visitor identifier.
    ACPAnalytics.getVisitorIdentifier = function (success, error) {
        exec(success, error, 'ACPAnalytics_Cordova', 'getVisitorIdentifier', []);
    };

    // Sets a custom Analytics visitor identifier.
    ACPAnalytics.setVisitorIdentifier = function (visitorId, success, error) {
        if (typeof value !== 'string' || !(value instanceof String)) {
            console.log("Failed to set the visitor identifier, visitor id needs to be string.");
        }
        exec(success, error, 'ACPAnalytics_Cordova', 'setVisitorIdentifier', [visitorId]);
    };

	return ACPAnalytics;
}());

module.exports = ACPAnalytics;
