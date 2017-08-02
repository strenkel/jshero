if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.util = (function() {

  // Does not work local with file:///...
  var isPhoneGap = function() {
    return document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
  };

  var isEnglish = function() {
    return document.URL.indexOf( '/en/' ) > -1;
  };

  var scrollToBottom = function() {
    window.scrollTo(0, document.body.scrollHeight);
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  };

  return {
    isEnglish: isEnglish,
    isPhoneGap: isPhoneGap,
    scrollToBottom: scrollToBottom,
    scrollToTop: scrollToTop
  };

})();
