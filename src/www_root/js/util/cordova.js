// Add a css class to the body element to distinguish web-app from android-app.
(function() {

  // The cordova android build gets:
  // document.URL == "file:///android_asset/wwww/..." (02/2019)
  var isAndroidApp = function() {
    return document.URL.indexOf('android') > -1;
  };

  var addAndroidCSS = function() {
    var bodyClass;
    if (isAndroidApp()) {
      bodyClass = "android-app";
    } else {
      bodyClass = "web-app";
    }
    var body = document.getElementsByTagName("BODY")[0];
    body.classList.add(bodyClass);
  }

  // --- CODE TO EXCECUTE IMMEDIATELY ---

  addAndroidCSS();

})();