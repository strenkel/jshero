if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.cordova = (function() {

  // The cordova android build gets:
  // document.URL == "file:///android_asset/wwww/..." (02/2019)
  var isAndroidApp = function() {
    return document.URL.indexOf('android') > -1;
  };

  var addAndroidCSS = function() {
    if (isAndroidApp()) {
      var body = document.getElementsByTagName("BODY")[0];
      body.classList.add("android");
    }
  }

  // --- CODE TO EXCECUTE IMMEDIATELY ---

  addAndroidCSS();

})();