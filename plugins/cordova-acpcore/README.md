# AEP SDK Cordova Plugin

- [Prerequisites](#prerequisites)
- [Using the Plugin](#using-the-plugin)
- [Getting Started](#getting-started)
- [Build Distribution](#build-distribution)
- [Additional Resources](#additional-resources)
- [Licensing](#licensing)

## Prerequisites

Cordova is distributed via [Node Package Management](https://www.npmjs.com/) (aka - `npm`).

In order to install and build Cordova applications you will need to have `Node.js` installed. [Install Node.js](https://nodejs.org/en/).

Once Node.js is installed, you can install the Cordova framework from terminal:

```
sudo npm install -g cordova
```

## Using the Plugin

To start using the AEP SDK for Cordova, navigate to the directory of your Cordova app and install the plugin:

```
cordova plugin add https://github.com/adobe/cordova-acpcore.git
```

Check out the documentation for help with APIs

## Getting Started

A Cordova app for testing the plugin is located in the `samples/AEPTestApp` directory. The app is configured for both iOS and Android platforms.

#### Android
1. Open Android Studio
1. From the menu, select **File** > **Open...**
1. Navigate to the `samples/AEPTestApp/platforms/android` directory and press the **Open** button
1. The ACPCore library is now accessible within the *index.html* file via `window.ACPCore`

	```html
	<button style="height:200px; width:600px" onclick="window.ACPCore.trackState('login page', {'user':'john','remember':'true'});">
		callTrackState
	</button>
	```

#### iOS
1. Open `samples/AEPTestApp/platforms/ios/HelloCordova.xcworkspace`
1. The ACPCore library is now accessible within the *index.html* file via `window.ACPCore`

	```html
	<button style="height:200px; width:600px" onclick="window.ACPCore.trackState('login page', {'user':'john','remember':'true'});">
		callTrackState
	</button>
	```



# TODO: finish readme

## Build Distribution

1. The version in the GitHub tag must match the version property of the package.json file.  EX - the tag v4.7.0-Cordova will be published when property in package.json is 4.7.0

###npm
The releases of our Cordova support offered at https://github.com/Adobe-Marketing-Cloud/mobile-services must be published to npm.  Note that the version specified in the tag must match the version property of the package.json.  Once a new release has been made and tagged, follow the steps below:

#####publish to npm#####
1. Browse to your local directory where the Adobe-Marketing-Cloud/mobile-services repository is located
2. Login to npm
   - ```npm login```
   - u: adobemobileservices
   - p: androidsucks
3. Publish the newly released tag to npm
   - ```npm publish```

## Additional Resources

## Licensing
This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
