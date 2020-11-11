cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-acpcore.cordova-acpcore",
      "file": "plugins/cordova-acpcore/www/ACPCore.js",
      "pluginId": "cordova-acpcore",
      "clobbers": [
        "ACPCore"
      ]
    },
    {
      "id": "cordova-acpcore.cordova-acpidentity",
      "file": "plugins/cordova-acpcore/www/ACPIdentity.js",
      "pluginId": "cordova-acpcore",
      "clobbers": [
        "ACPIdentity"
      ]
    },
    {
      "id": "cordova-acpcore.cordova-acplifecycle",
      "file": "plugins/cordova-acpcore/www/ACPLifecycle.js",
      "pluginId": "cordova-acpcore",
      "clobbers": [
        "ACPLifecycle"
      ]
    },
    {
      "id": "cordova-acpcore.cordova-acpsignal",
      "file": "plugins/cordova-acpcore/www/ACPSignal.js",
      "pluginId": "cordova-acpcore",
      "clobbers": [
        "ACPSignal"
      ]
    },
    {
      "id": "cordova-acpanalytics.cordova-acpanalytics",
      "file": "plugins/cordova-acpanalytics/www/ACPAnalytics.js",
      "pluginId": "cordova-acpanalytics",
      "clobbers": [
        "ACPAnalytics"
      ]
    },
    {
      "id": "cordova-aepassurance.cordova-aepassurance",
      "file": "plugins/cordova-aepassurance/www/AEPAssurance.js",
      "pluginId": "cordova-aepassurance",
      "clobbers": [
        "AEPAssurance"
      ]
    },
    {
      "id": "cordova-acpuserprofile.cordova-acpuserprofile",
      "file": "plugins/cordova-acpuserprofile/www/ACPUserProfile.js",
      "pluginId": "cordova-acpuserprofile",
      "clobbers": [
        "ACPUserProfile"
      ]
    },
    {
      "id": "cordova-acpplaces.cordova-acpplaces",
      "file": "plugins/cordova-acpplaces/www/ACPPlaces.js",
      "pluginId": "cordova-acpplaces",
      "clobbers": [
        "ACPPlaces"
      ]
    },
    {
      "id": "cordova-acpplacesmonitor.cordova-acpplacesmonitor",
      "file": "plugins/cordova-acpplacesmonitor/www/ACPPlacesMonitor.js",
      "pluginId": "cordova-acpplacesmonitor",
      "clobbers": [
        "ACPPlacesMonitor"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.0.3",
    "cordova-acpcore": "0.0.1",
    "cordova-acpanalytics": "0.0.1",
    "cordova-aepassurance": "0.0.1",
    "cordova-acpuserprofile": "0.0.1",
    "cordova-acpplaces": "0.0.1",
    "cordova-acpplacesmonitor": "0.0.1"
  };
});