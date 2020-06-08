cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-geofence.TransitionType",
      "file": "plugins/cordova-plugin-geofence/www/TransitionType.js",
      "pluginId": "cordova-plugin-geofence",
      "clobbers": [
        "TransitionType"
      ]
    },
    {
      "id": "cordova-plugin-geofence.geofence",
      "file": "plugins/cordova-plugin-geofence/www/geofence.js",
      "pluginId": "cordova-plugin-geofence",
      "clobbers": [
        "geofence"
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
      "id": "cordova-acpgriffon.cordova-acpgriffon",
      "file": "plugins/cordova-acpgriffon/www/ACPGriffon.js",
      "pluginId": "cordova-acpgriffon",
      "clobbers": [
        "ACPGriffon"
      ]
    },
    {
      "id": "cordova-acpplaces.cordova-acpplaces",
      "file": "plugins/cordova-acpplaces/www/ACPPlaces.js",
      "pluginId": "cordova-acpplaces",
      "clobbers": [
        "ACPPlaces"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-add-swift-support": "2.0.2",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-geofence": "0.8.0",
    "cordova-acpcore": "0.0.1",
    "cordova-acpanalytics": "0.0.1",
    "cordova-acpgriffon": "0.0.1",
    "cordova-acpplaces": "0.0.1"
  };
});