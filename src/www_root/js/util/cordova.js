// Add a css class to the body element to distinguish web-app from android-app.
(function() {

  "use strict";

  // The cordova android build gets:
  // document.URL == "file:///android_asset/www/..."
  const isAndroidApp = document.URL.indexOf('android') > -1;
  const bodyClass = isAndroidApp ? "android-app" : "web-app";
  document.body.classList.add(bodyClass);

})();