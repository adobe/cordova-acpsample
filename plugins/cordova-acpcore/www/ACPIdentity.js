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

var ACPIdentity = (function() {
	var ACPIdentity = (typeof exports !== 'undefined') && exports || {};
	var exec = cordova.require('cordova/exec'); // eslint-disable-line no-undef

	var PLUGIN_NAME = "ACPIdentity_Cordova";

	// ===========================================================================
	// public APIs
	// ===========================================================================
	// Identity
	ACPIdentity.extensionVersion = function(success, fail) {
		return exec(success, fail, PLUGIN_NAME, "extensionVersionIdentity", []);
	};

	ACPIdentity.appendVisitorInfoForUrl = function(success, fail) {
		return exec(success, fail, PLUGIN_NAME, "appendVisitorInfoForUrl", []);
	};

	ACPIdentity.getExperienceCloudId = function(success, fail) {
		return exec(success, fail, PLUGIN_NAME, "getExperienceCloudId", []);
	};

	ACPIdentity.getIdentifiers = function(success, fail) {
		return exec(success, fail, PLUGIN_NAME, "getIdentifiers", []);
	};

	ACPIdentity.getUrlVariables = function(success, fail) {
		return exec(success, fail, PLUGIN_NAME, "getUrlVariables", []);
	};

	ACPIdentity.syncIdentifier = function(id, value, authState, success, fail) {
		return exec(success, fail, PLUGIN_NAME, "syncIdentifier", [id, value, authState]);
	};

	ACPIdentity.syncIdentifiers = function(identifiers, authState, success, fail) {
		return exec(success, fail, PLUGIN_NAME, "syncIdentifiers", [identifiers, authState]);
	};

	return ACPIdentity;

}());

module.exports = ACPIdentity;
