# Adobe Experience Platform - Test App for Cordova Plugins

[![CI](https://github.com/adobe/cordova-acpsample/workflows/CI/badge.svg)](https://github.com/adobe/cordova-acpsample/actions)
[![GitHub](https://img.shields.io/github/license/adobe/cordova-acpsample)](https://github.com/adobe/cordova-acpsample/blob/master/LICENSE)

This repository contains a test app to demonstrate Adobe Experience Platform plugins for Cordova.

## Prerequisites

- [Node Package Management](https://www.npmjs.com/) (`npm`)
    - Cordova is distributed via `npm`.
- [Apache Cordova](https://cordova.apache.org/#getstarted)
- [Android Studio](https://developer.android.com/studio/)
    - Required to run the sample app in Android.
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835)
    - Required to run the sample app in iOS.
- [Cocoapods](https://cocoapods.org/)
    - Required to install the AEP Cordova plugins for iOS.

## Getting started

To get started with the sample app, follow the steps below:

1. Clone or download this repository.
1. From the root directory of this repository, run the following command in terminal:
```
make setup
```

##### Testing Android

To run the test app in Android, run the following command from the root directory:

 ```
make open-android
 ```

##### Testing iOS

To run the test app in iOS, run the following command from the root directory:

```
make open-ios
```

## Making Changes

When modifying the code for the test app, you should modify `TestApp/www/index.html` and `TestApp/www/js/index.js`.

When Cordova builds each platform (Android and iOS), it will copy these files into the respective platforms.

To push changes to the Android and iOS builds, run the following command from the root directory:

```
make update
```

If you want to rebuild only the iOS or Android app, navigate to the `TestApp` directory and run:

```
cordova build <platform>
```

## Contributing

Looking to contribute to this project? Please review our [Contributing guidelines](.github/CONTRIBUTING.md) prior to opening a pull request.  

We look forward to working with you!

## Licensing  

See [LICENSING](LICENSE)
