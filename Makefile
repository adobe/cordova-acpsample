
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
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-acpcore.git
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-acpanalytics.git
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-aepassurance.git
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-acpuserprofile.git
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-acpplaces.git
	cd TestApp && cordova plugin add https://github.com/adobe/cordova-acpplaces-monitor.git

update-cordova-app:
	cd TestApp && cordova build

update-pods:
	cd TestApp/platforms/ios && pod update

open-ios:
	open ./TestApp/platforms/ios/HelloCordova.xcworkspace

open-android:
	open -a /Applications/Android\ Studio.app ./TestApp/platforms/android/
