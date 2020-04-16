cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
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
    }
  ];
  module.exports.metadata = {
    "cordova-acpcore": "0.0.1",
    "cordova-acpanalytics": "0.0.1",
    "cordova-acpgriffon": "0.0.1"
  };
});