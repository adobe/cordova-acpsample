
setup: init do-install

update: uninstall-plugins do-install

do-install: install-plugins update-pods update-cordova-app

init:
	cd TestApp && npm install

uninstall-plugins:
	cd TestApp && cordova plugin remove cordova-acpanalytics
	cd TestApp && cordova plugin remove cordova-aepassurance
	cd TestApp && cordova plugin remove cordova-acpuserprofile
	cd TestApp && cordova plugin remove cordova-acpplacesmonitor
	cd TestApp && cordova plugin remove cordova-acpplaces
	cd TestApp && cordova plugin remove cordova-acpcore

install-plugins:
	cd TestApp && cordova plugin add @adobe/cordova-acpcore@1.0.0
	cd TestApp && cordova plugin add @adobe/cordova-acpanalytics@0.0.1
	cd TestApp && cordova plugin add @adobe/cordova-aepassurance@1.0.0
	cd TestApp && cordova plugin add @adobe/cordova-acpuserprofile@0.0.1
	cd TestApp && cordova plugin add @adobe/cordova-acpplaces@0.0.1
	cd TestApp && cordova plugin add @adobe/cordova-acpplacesmonitor@0.0.1

update-cordova-app:
	cd TestApp && cordova build

update-pods:
	cd TestApp/platforms/ios && pod update

open-ios:
	open ./TestApp/platforms/ios/HelloCordova.xcworkspace

open-android:
	open -a /Applications/Android\ Studio.app ./TestApp/platforms/android/
