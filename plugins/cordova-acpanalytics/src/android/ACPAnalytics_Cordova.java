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

package com.adobe.marketing.mobile.cordova;

import android.os.Handler;
import android.os.Looper;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import com.adobe.marketing.mobile.Analytics;
import com.adobe.marketing.mobile.AdobeCallback;

/**
 * This class echoes a string called from JavaScript.
 */
public class ACPAnalytics_Cordova extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {

        if ("extensionVersion".equals(action)) {
            String extensionVersion = Analytics.extensionVersion();
            if (extensionVersion.length() > 0) {
                callbackContext.success(extensionVersion);
            } else {
                callbackContext.error("Extension version is null or empty");
            }
            return true;
        } else if ("sendQueuedHits".equals((action))) {
            Analytics.sendQueuedHits();
            callbackContext.success();
            return true;
        } else if ("clearQueue".equals((action))) {
            Analytics.clearQueue();
            callbackContext.success();
            return true;
        } else if ("getQueueSize".equals((action))) {
            getQueueSize(callbackContext);
            return true;
        } else if ("getTrackingIdentifier".equals((action))) {
            getTrackingIdentifier(callbackContext);
            return true;
        } else if ("getVisitorIdentifier".equals((action))) {
            getVisitorIdentifier(callbackContext);
            return true;
        } else if ("setVisitorIdentifier".equals((action))) {
            setVisitorIdentifier(args, callbackContext);
            callbackContext.success("");
            return true;
        }

        return false;
    }

    private void getQueueSize(final CallbackContext callback) {
        Analytics.getQueueSize(new AdobeCallback<Long>() {
            @Override
            public void call(final Long queueSize) {
                runOnUIThread(new Runnable() {
                    @Override
                    public void run() {
                        callback.success(String.valueOf(queueSize));
                    }
                });
            }
        });
    }

    private void getTrackingIdentifier(final CallbackContext callbackContext) {
        Analytics.getTrackingIdentifier(new AdobeCallback<String>() {
            @Override
            public void call(final String trackingIdentifier) {
                runOnUIThread(new Runnable() {
                    @Override
                    public void run() {
                        callbackContext.success(trackingIdentifier);
                    }
                });
            }
        });
    }

    private void getVisitorIdentifier(final CallbackContext callbackContext) {
        Analytics.getVisitorIdentifier(new AdobeCallback<String>() {
            @Override
            public void call(final String visitorIdentifier) {
                runOnUIThread(new Runnable() {
                    @Override
                    public void run() {
                        callbackContext.success(visitorIdentifier);
                    }
                });
            }
        });
    }

    private void setVisitorIdentifier(final JSONArray arguments, final CallbackContext callbackContext) {
        if (arguments == null || arguments.length() <= 0) {
            callbackContext.error("Visitor Id is null or empty");
            return;
        }
        String visitorId;
        try {
            visitorId = arguments.getString(0);
        } catch (JSONException e) {
            callbackContext.error("Error while parsing arguments, Error " + e.getLocalizedMessage());
            return;
        }
        Analytics.setVisitorIdentifier(visitorId);
    }

    private void runOnUIThread(Runnable runnable) {
        new Handler(Looper.getMainLooper()).post(runnable);
    }
}
