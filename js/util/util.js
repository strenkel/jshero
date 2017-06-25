if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.util = (function() {

  // Does not work local with file:///...
  var isPhoneGap = function() {
    return document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
  };

  var scrollToButtom = function() {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return {
    isPhoneGap: isPhoneGap,
    scrollToButtom: scrollToButtom
  };

})();
