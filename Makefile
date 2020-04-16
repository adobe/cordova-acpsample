
setup: init do-install

update: uninstall-plugins do-install

do-install: install-plugins update-pods update-cordova-app

init:
	cd TestApp && npm install

uninstall-plugins:
	cd TestApp && cordova plugin remove cordova-acpanalytics
	cd TestApp && cordova plugin remove cordova-acpgriffon
	cd TestApp && cordova plugin remove cordova-acpcore

install-plugins:
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-acpcore.git
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-acpanalytics.git
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-acpgriffon.git

update-cordova-app:
	cd TestApp && cordova build

update-pods:
	cd TestApp/platforms/ios && pod update

open-ios:
	open ./TestApp/platforms/ios/HelloCordova.xcworkspace

open-android:
	open -a /Applications/Android\ Studio.app ./TestApp/platforms/android/
