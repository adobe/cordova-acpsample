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
// Global vars
var retrievedLat, retrievedLong;
// Constants
NEVER_EXPIRE = -1;
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

    // acpplaces
    document.getElementById("extensionVersionPlaces").addEventListener("click", extensionVersionPlaces);
    document.getElementById("clear").addEventListener("click", clear);
    document.getElementById("getCurrentPointsOfInterest").addEventListener("click", getCurrentPointsOfInterest);
    document.getElementById("getLastKnownLocation").addEventListener("click", getLastKnownLocation);
    document.getElementById("getNearbyPointsOfInterest").addEventListener("click", getNearbyPointsOfInterest);
    document.getElementById("setAuthorizationStatus").addEventListener("click", setAuthorizationStatus);
    // get current location from cordova-plugin-geolocation for use with Places
    document.getElementById("getCurrentLocation").addEventListener("click", getLocation);
    // manually add geofence using cordova-plugin-geofence for testing purposes
    document.getElementById("addGeofence").addEventListener("click", addGeofence);

    // acpuserprofile
    document.getElementById("extensionVersionUserProfile").addEventListener("click", extensionVersionUserProfile);
    document.getElementById("getUserAttributes").addEventListener("click", getUserAttributes);
    document.getElementById("removeUserAttribute").addEventListener("click", removeUserAttribute);
    document.getElementById("removeUserAttributes").addEventListener("click", removeUserAttributes);
    document.getElementById("updateUserAttribute").addEventListener("click", updateUserAttribute);
    document.getElementById("updateUserAttributes").addEventListener("click", updateUserAttributes);
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

// acpplaces methods
function extensionVersionPlaces() {
    ACPPlaces.extensionVersion(handleCallback, handleError);
}

function clear() {
    var sessionUrl = document.getElementById("input_startSessionUrl").value;
    ACPPlaces.clear(handleCallback, handleError);
}

function getCurrentPointsOfInterest() {
    ACPPlaces.getCurrentPointsOfInterest(handleCallback, handleError);
}

function getLastKnownLocation() {
    ACPPlaces.getLastKnownLocation(handleCallback, handleError);
}

function getNearbyPointsOfInterest() {
    var location = {latitude:retrievedLat, longitude:retrievedLong};
    var limit = 10;
    ACPPlaces.getNearbyPointsOfInterest(location, limit, handlePois, handleError);
}

function setAuthorizationStatus() {
    ACPPlaces.setAuthorizationStatus(ACPPlaces.AuthorizationStatusAlways, handleCallback, handleError);
}

// acpuserprofile methods
function extensionVersionUserProfile() {
    ACPUserProfile.extensionVersion(handleCallback, handleError);
}

function getUserAttributes() {
    var attributeNames = new Array();
    attributeNames.push("first name");
    attributeNames.push("age");
    attributeNames.push("vehicles");
    attributeNames.push("colors");
    attributeNames.push("phone number");
    attributeNames.push("state");
    ACPUserProfile.getUserAttributes(attributeNames, handleCallback, handleError);
}

function removeUserAttribute() {
    ACPUserProfile.removeUserAttribute("state", handleCallback, handleError);
}

function removeUserAttributes() {
    var attributeNames = new Array();
    attributeNames.push("vehicles");
    attributeNames.push("colors");
    attributeNames.push("phone number");
    ACPUserProfile.removeUserAttributes(attributeNames, handleCallback, handleError);
}

function updateUserAttribute() {
    var vehicles = new Array();
    vehicles.push("truck");
    vehicles.push("train");
    vehicles.push("jet");
    vehicles.push("blimp");
    ACPUserProfile.updateUserAttribute("vehicles", vehicles, handleCallback, handleError);
}

function updateUserAttributes() {
    var firstName = "john";
    var age = 40;
    var state = "California";
    var phoneNumber = "555-555-5555";
    var vehicles = new Array();
    vehicles.push("car");
    vehicles.push("boat");
    vehicles.push("airplane");
    vehicles.push("motorcycle");
    var colors = {"color1":"red", "color2":"blue", "color3":"green", "color4":"silver"};
    var attributeMap = {"first name":firstName, "age":age, "state":state, "phone number":phoneNumber, "vehicles":vehicles, "colors":colors};
    ACPUserProfile.updateUserAttributes(attributeMap, handleCallback, handleError);
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

// get the device's current coordinates using cordova-plugin-geolocation
function getLocation() {
        navigator.geolocation.getCurrentPosition(onGetLocationSuccess, onGetLocationError);
}

function onGetLocationSuccess(position) {
    if(((retrievedLat || retrievedLong) === null) || ((retrievedLat !== position.coords.latitude) || retrievedLong !== position.coords.longitude))
    {
        alert("Latitude: "          + position.coords.latitude          + "\n" +
              "Longitude: "         + position.coords.longitude         + "\n" +
              "Altitude: "          + position.coords.altitude          + "\n" +
              "Accuracy: "          + position.coords.accuracy          + "\n" +
              "Altitude Accuracy: " + position.coords.altitudeAccuracy  + "\n" +
              "Heading: "           + position.coords.heading           + "\n" +
              "Speed: "             + position.coords.speed             + "\n" +
              "Timestamp: "         + position.timestamp                + "\n");
    }
    retrievedLat = position.coords.latitude;
    retrievedLong = position.coords.longitude;
};

function onGetLocationError(error) {
        alert("code: "    + error.code    + "\n" +
              "message: " + error.message + "\n");
}

// Geofence helpers
// intialize geofence tracking onDeviceReady. once geofence plugin is intialized, 
// we can add listeners for geofence transition and geofence notification clicked.
document.addEventListener("deviceready", function () {
    // window.geofence is now available
    window.geofence.initialize().then(function () {
        console.log("Geofence Plugin: Successful initialization");
        // listen for geofence transition then process each using ACPPlaces.processGeofence
        window.geofence.onTransitionReceived = function (geofences) {
            geofences.forEach(function (geo) {
                console.log("Geofence transition detected", geo);
                var region = {latitude:geo.latitude, longitude:geo.longitude, radius:geo.radius};
                var geofence = {requestId:geo.id, circularRegion:region, expirationDuration:NEVER_EXPIRE};
                console.log("Calling ACPPlaces.processGeofence: ", geofence);
                // processGeofence called for Android and processRegionEvent called for iOS
                ACPPlaces.processGeofence(geofence, geo.transitionType, handleCallback, handleError);
            });
        };

        // called when geofence notification is clicked through
        window.geofence.onNotificationClicked = (function (notificationData) {
            console.log(notificationData);
        });
    }, function (error) {
        console.log("Geofence: Error", error);
    });
}, false);

// create geofences using cordova-plugin-geofence from POI's returned by ACPPlaces.getNearbyPointsOfInterest.
function handlePois(result) {
    var index;
    const jsonArray = JSON.parse(result);
    for (index = 0; index < jsonArray.length; index++) {
        var json = jsonArray[index];
        window.geofence.addOrUpdate({
            id: json.Identifier,
            latitude: json.Latitude,
            longitude: json.Longitude,
            radius: 1000,
            transitionType: ACPPlaces.ACPRegionEventTypeEntry,
            notification: {
                id: 1,
                title: json.POI,
                text: "Geofence entered.",
                icon: "",
                openAppOnClick: true,
                data: {name:'San Jose',
                       id: json.Identifier
                }
            }
        }).then(function () {
            console.log("Geofence successfully added for: ", json.POI);
        }, function (error) {
            console.log("Adding geofence failed", error);
        });
        index++;
    }
    handleCallback(result);
}

// add a geofence on demand using cordova-plugin-geofence for testing
function addGeofence() {
    window.geofence.addOrUpdate({
            id: "geofence-id",
            latitude: 37.5630,
            longitude: -122.3255,
            radius: 1000,
            transitionType: ACPPlaces.ACPRegionEventTypeEntry,
            notification: {
                id: 2,
                title: "San Mateo",
                text: "Geofence entered.",
                icon: "",
                openAppOnClick: true,
                data: {name:'San Mateo',
                       id: 'geofence-id'
                }
            }
        }).then(function () {
        console.log("Geofence successfully added for San Mateo");
    }, function (error) {
        console.log("Adding geofence failed", error);
    });
}


    
