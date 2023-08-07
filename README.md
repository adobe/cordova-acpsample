# Adobe Experience Platform - Test App for Cordova Plugins

## Notice of deprecation

Since *April 25, 2023*, [Apple has required](https://developer.apple.com/news/?id=jd9wcyov) apps submitted to the App Store to be built with Xcode 14.1 or later. The Experience Platform Mobile SDKs and extensions outlined below were built with prior versions of Xcode and are no longer compatible with iOS and iPadOS given Apple’s current App Store requirements. Consequently, on *August 31, 2023*, Adobe will be deprecating support for the following Experience Platform Mobile SDKs and wrapper extensions:

- [ACP iOS SDK](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#ios)
- [Cordova](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#cordova)
- [Flutter for ACP](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#flutter)
- [React Native for ACP](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#react-native)
- [Xamarin](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#xamarin)

After *August 31, 2023*, applications already submitted to the App Store that contain these SDKs and wrapper extensions will continue to operate, however, Adobe will not be providing security updates or bug fixes, and these SDKs and wrapper extensions will be provided as-is exclusive of any warranty, due to the App Store policy outlined above.

We encourage all customers to migrate to the latest Adobe Experience Platform versions of the Mobile SDK to ensure continued compatibility and support. Documentation for the latest versions of the Adobe Experience Platform Mobile SDKs can be found [here](https://developer.adobe.com/client-sdks/documentation/current-sdk-versions/). The iOS migration guide can be found [here](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-swift/).

---

<!-- [![CI](https://github.com/adobe/cordova-acpsample/workflows/CI/badge.svg)](https://github.com/adobe/cordova-acpsample/actions) 

-->

[![GitHub](https://img.shields.io/github/license/adobe/cordova-acpsample)](https://github.com/adobe/cordova-acpsample/blob/master/LICENSE)

This repository contains a test app to demonstrate Adobe Experience Platform plugins for Cordova.

## Prerequisites

- [Node Package Management](https://www.npmjs.com/)
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
