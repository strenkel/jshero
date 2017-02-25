if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.util = (function() {

  var isPhoneGap = function() {
    return document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
  };

  return {
    isPhoneGap: isPhoneGap
  };

})();
