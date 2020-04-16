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

var ACPCore = (function() {
    var ACPCore = (typeof exports !== 'undefined') && exports || {};
    var exec = cordova.require('cordova/exec'); // eslint-disable-line no-undef

    var PLUGIN_NAME = "ACPCore_Cordova";

    // ===========================================================================
    // public objects
    // ===========================================================================
    ACPCore.createEvent = function(name, type, source, data) {
        return {
            name: name,
            type: type,
            source: source,
            data: data
        };
    };

    // ===========================================================================
    // public enums
    // ===========================================================================
    ACPCore.ACPMobilePrivacyStatusOptIn = 0;
    ACPCore.ACPMobilePrivacyStatusOptOut = 1;
    ACPCore.ACPMobilePrivacyStatusUnknown = 2;

    ACPCore.ACPMobileLogLevelError = 0;
    ACPCore.ACPMobileLogLevelWarning = 1;
    ACPCore.ACPMobileLogLevelDebug = 2;
    ACPCore.ACPMobileLogLevelVerbose = 3;

    // ===========================================================================
    // public APIs
    // ===========================================================================
    ACPCore.dispatchEvent = function(sdkEvent, success, fail) {
        var FUNCTION_NAME = dispatchEvent.name;

        if (!isValidEvent(sdkEvent)) {
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [sdkEvent]);
    };

    ACPCore.dispatchEventWithResponseCallback = function(sdkEvent, success, fail) {
        var FUNCTION_NAME = dispatchEventWithResponseCallback.name;

        if (!isValidEvent(sdkEvent)) {
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [sdkEvent]);
    };

    ACPCore.dispatchResponseEvent = function(responseEvent, requestEvent, success, fail) {
        var FUNCTION_NAME = dispatchResponseEvent.name;

        if (!isValidEvent(responseEvent)) {
            return;
        }

        if (!isValidEvent(requestEvent)) {
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [responseEvent, requestEvent]);
    };

    ACPCore.downloadRules = function(success, fail) {
        var FUNCTION_NAME = downloadRules.name;

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, []);
    };

    ACPCore.extensionVersion = function(success, fail) {
        var FUNCTION_NAME = extensionVersion.name;

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, []);
    };

    ACPCore.getPrivacyStatus = function(success, fail) {
        var FUNCTION_NAME = getPrivacyStatus.name;

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, []);
    };

    ACPCore.getSdkIdentities = function(success, fail) {
        var FUNCTION_NAME = getSdkIdentities.name;

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, []);
    };

    ACPCore.setAdvertisingIdentifier = function(identifier, success, fail) {
        var FUNCTION_NAME = setAdvertisingIdentifer.name;

        if (!isString(identifier)) {
            printNotAString("identifier", FUNCTION_NAME);
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [identifier]);
    };

    ACPCore.setLogLevel = function(logLevel, success, fail) {
        var FUNCTION_NAME = setLogLevel.name;

        if (!isNumber(logLevel)) {
            printNotANumber("logLevel", FUNCTION_NAME);
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [logLevel]);
    };

    ACPCore.setPrivacyStatus = function(privacyStatus, success, fail) {
        var FUNCTION_NAME = setPrivacyStatus.name;

        if (!isNumber(privacyStatus)) {
            printNotANumber("privacyStatus", FUNCTION_NAME);
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [privacyStatus]);
    };

    ACPCore.trackAction = function(action, contextData, success, fail) {
        var FUNCTION_NAME = trackAction.name;

        if (!isString(action)) {
            printNotAString("action", FUNCTION_NAME);
            return;
        }

        if (contextData && !isObject(contextData)) {
            printNotAnObject("contextData", FUNCTION_NAME);
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [action, contextData]);
    };

    ACPCore.trackState = function(state, contextData, success, fail) {
        var FUNCTION_NAME = trackState.name;

        if (!isString(state)) {
            printNotAString("state", FUNCTION_NAME);
            return;
        }

        if (contextData && !isObject(contextData)) {
            printNotAnObject("contextData", FUNCTION_NAME);
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [state, contextData]);
    };

    ACPCore.updateConfiguration = function(config, success, fail) {
        var FUNCTION_NAME = updateConfiguration.name;

        if (!isObject(config)) {
            printNotAnObject("config", FUNCTION_NAME);
            return;
        }

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (fail && !isFunction(fail)) {
            printNotAFunction("fail", FUNCTION_NAME);
            return;
        }

        return exec(success, fail, PLUGIN_NAME, FUNCTION_NAME, [config]);
    };

return ACPCore;

}());

// ===========================================================================
// input sanitization
// ===========================================================================
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function printNotAString(paramName, functionName) {
    console.log("Ignoring call to '" + functionName + "'. The '" + paramName + "' parameter is required to be a String.");
}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}

function printNotANumber(paramName, functionName) {
    console.log("Ignoring call to '" + functionName + "'. The '" + paramName + "' parameter is required to be a Number.");
}

function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

function printNotAnObject(paramName, functionName) {
    console.log("Ignoring call to '" + functionName + "'. The '" + paramName + "' parameter is required to be an Object.");
}

function isFunction (value) {
    return typeof value === 'function';
}

function printNotAFunction(paramName, functionName) {
    console.log("Ignoring call to '" + functionName + "'. The '" + paramName + "' parameter is required to be a function.");
}

function isValidEvent(event) {
    if (!isString(event.name)) {
        console.log("Event.name must be of type String.");
        return false;
    }

    if (!isString(event.type)) {
        console.log("Event.type must be of type String.");
        return false;
    }

    if (!isString(event.source)) {
        console.log("Event.source must be of type String.");
        return false;
    }

    if (!isObject(event.data)) {
        console.log("Event.data must be of type Object.");
        return false;
    }

    return true;
}

module.exports = ACPCore;
