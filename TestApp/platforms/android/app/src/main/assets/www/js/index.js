/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.

This file has been modified from its original form. The original
license can be viewed in the NOTICES.txt file.
*/
var app = {
    // Application Constructor
    initialize: function() {
        registerControls();
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {},

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        if (parentElement !== null) {
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');

            console.log('Received Event: ' + id);
        }
    }
};

app.initialize();

// ==========================================================================================
// Adobe Cordova plugin methods
// ==========================================================================================
function registerControls() {
    // acpcore
    document.getElementById("extensionVersionCore").addEventListener("click", extensionVersionCore);
    document.getElementById("dispatchEvent").addEventListener("click", dispatchEvent);
    document.getElementById("dispatchEventWithResponseCallback").addEventListener("click", dispatchEventWithResponseCallback);
    document.getElementById("dispatchResponseEvent").addEventListener("click", dispatchResponseEvent);
    document.getElementById("downloadRules").addEventListener("click", downloadRules);
    document.getElementById("getPrivacyStatus").addEventListener("click", getPrivacyStatus);
    document.getElementById("getSdkIdentities").addEventListener("click", getSdkIdentities);
    document.getElementById("setAdvertisingIdentifier").addEventListener("click", setAdvertisingIdentifier);
    document.getElementById("setLogLevel").addEventListener("click", setLogLevel);
    document.getElementById("setPrivacyStatus").addEventListener("click", setPrivacyStatus);
    document.getElementById("trackAction").addEventListener("click", trackAction);
    document.getElementById("trackState").addEventListener("click", trackState);
    document.getElementById("updateConfig").addEventListener("click", updateConfig);

    // acpanalytics
    document.getElementById("btn_extensionVersionAnalytics").addEventListener("click", extensionVersionAnalytics);
    document.getElementById("btn_sendQueuedHits").addEventListener("click", sendQueuedHits);
    document.getElementById("btn_clearQueue").addEventListener("click", clearQueue);
    document.getElementById("btn_getQueueSize").addEventListener("click", getQueueSize);
    document.getElementById("btn_getTrackingIdentifier").addEventListener("click", getTrackingIdentifier);
    document.getElementById("btn_getVisitorIdentifier").addEventListener("click", getVisitorIdentifier);
    document.getElementById("btn_setVisitorIdentifier").addEventListener("click", setVisitorIdentifier);

    // acpidentity
    document.getElementById("extensionVersionIdentity").addEventListener("click", extensionVersionIdentity);
    document.getElementById("appendVisitorInfoForUrl").addEventListener("click", appendVisitorInfoForUrl);
    document.getElementById("getExperienceCloudId").addEventListener("click", getExperienceCloudId);
    document.getElementById("getIdentifiers").addEventListener("click", getIdentifiers);
    document.getElementById("getUrlVariables").addEventListener("click", getUrlVariables);
    document.getElementById("syncIdentifier").addEventListener("click", syncIdentifier);
    document.getElementById("syncIdentifiers").addEventListener("click", syncIdentifiers);
    document.getElementById("syncIdentifiersWithAuthState").addEventListener("click", syncIdentifiersWithAuthState);

    // acplifecycle
    document.getElementById("btn_extensionVersionLifecycle").addEventListener("click", extensionVersionLifecycle);

    // acpsignal
    document.getElementById("btn_extensionVersionSignal").addEventListener("click", extensionVersionSignal);

    //acpgriffon
    document.getElementById("btn_extensionVersionGriffon").addEventListener("click", extensionVersionGriffon);
    document.getElementById("btn_startSession").addEventListener("click", startSession);
}

// acpcore methods
function extensionVersionCore() {
    ACPCore.extensionVersion(handleCallback, handleCallback);
}

function dispatchEvent() {
    var e = ACPCore.createEvent("eventName", "eventType", "eventSource", {"key":"value"});
    ACPCore.dispatchEvent(e, handleCallback, handleError);
}

function dispatchEventWithResponseCallback() {
    var e = ACPCore.createEvent("eventName", "eventType", "eventSource", {"key":"value"});
    ACPCore.dispatchEventWithResponseCallback(e, handleCallback, handleError);
}

function dispatchResponseEvent() {
    var e1 = ACPCore.createEvent("eventName", "eventType", "eventSource", {"key":"value"});
    var e2 = ACPCore.createEvent("eventName2", "eventType", "eventSource", {"key":"value"});
    ACPCore.dispatchResponseEvent(e1, e2, handleCallback, handleError);
}

function downloadRules() {
    ACPCore.downloadRules(handleCallback, handleError);
}

function getPrivacyStatus() {
    ACPCore.getPrivacyStatus(handleCallback, handleError);
}

function getSdkIdentities() {
    ACPCore.getSdkIdentities(handleCallback, handleError);
}

function setAdvertisingIdentifier() {
    ACPCore.setAdvertisingIdentifier("someAdid", handleCallback, handleError);
}

function setLogLevel() {
    ACPCore.setLogLevel(ACPCore.ACPMobileLogLevelVerbose, handleCallback, handleError);
}

function setPrivacyStatus() {
    ACPCore.setPrivacyStatus(ACPCore.ACPMobilePrivacyStatusOptIn, handleCallback, handleError);
}

function trackAction() {
    ACPCore.trackAction("cordovaAction", {"cordovaKey":"cordovaValue"}, handleCallback, handleError);
}

function trackState() {
    ACPCore.trackState("cordovaState", {"cordovaKey":"cordovaValue"}, handleCallback, handleError);
}

function updateConfig() {
    ACPCore.updateConfiguration({"newConfigKey":"newConfigValue"}, handleCallback, handleError);
}

// acpanalytics methods
function extensionVersionAnalytics() {
    ACPAnalytics.extensionVersion(handleCallback, handleError);
}

function sendQueuedHits() {
    ACPAnalytics.sendQueuedHits(handleCallback, handleError);
}

function clearQueue() {
    ACPAnalytics.clearQueue(handleCallback, handleError);
}

function getQueueSize() {
    ACPAnalytics.getQueueSize(handleCallback, handleError);
}

function getTrackingIdentifier() {
    ACPAnalytics.getTrackingIdentifier(handleCallback, handleError);
}

function getVisitorIdentifier() {
    ACPAnalytics.getVisitorIdentifier(handleCallback, handleError);
}

function setVisitorIdentifier() {
    var visitorId = document.getElementById("input_setVisitorIdentifier").value;
    ACPAnalytics.setVisitorIdentifier(visitorId, handleCallback, handleError);
}

// acpidentity methods
function extensionVersionIdentity() {
    ACPIdentity.extensionVersion(handleCallback, handleError);
}

function appendVisitorInfoForUrl() {
    ACPIdentity.appendVisitorInfoForUrl("https://www.adobe.com", handleCallback, handleError);
}

function getExperienceCloudId() {
    ACPIdentity.getExperienceCloudId(handleCallback, handleError);
}

function getIdentifiers() {
    ACPIdentity.getIdentifiers(handleCallback, handleError);
}

function getUrlVariables() {
    ACPIdentity.getUrlVariables(handleCallback, handleError);
}

function syncIdentifier() {
    ACPIdentity.syncIdentifier("id1", "value1", ACPIdentity.ACPMobileVisitorAuthenticationStateUnknown, handleCallback, handleError);
}

function syncIdentifiers() {
    ACPIdentity.syncIdentifiers({"id2":"value2", "id3":"value3", "id4":"value4"}, handleCallback, handleError);
}

function syncIdentifiersWithAuthState() {
    ACPIdentity.syncIdentifiers({"id2":"value2", "id3":"value3", "id4":"value4"}, ACPIdentity.ACPMobileVisitorAuthenticationStateLoggedOut, handleCallback, handleError);
}

// acplifecycle methods
function extensionVersionLifecycle() {
    ACPLifecycle.extensionVersion(handleCallback, handleError);
}

// acpsignal methods
function extensionVersionSignal() {
    ACPSignal.extensionVersion(handleCallback, handleError);
}

//acpgriffon methods
function extensionVersionGriffon() {
    ACPGriffon.extensionVersion(handleCallback, handleError);
}

function startSession() {
    var sessionUrl = document.getElementById("input_startSessionUrl").value;
    ACPGriffon.startSession(sessionUrl, handleCallback, handleError);
}

// ==========================================================================================
// Helpers
// ==========================================================================================
function handleCallback(result) {
    var text = "Success with result '" + result + "'";
    updateResultLabel(text);
}

function handleError(result) {
    var text = "Error with result '" + result + "'";
    updateResultLabel(text);
}

function updateResultLabel(text) {
    var label = document.getElementById("lblresult");
    label.innerHTML = text;
    console.log(text);
}
