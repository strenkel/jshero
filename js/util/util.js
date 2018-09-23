if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.util = (function() {

  // Does not work local with file:///...
  var isPhoneGap = function() {
    return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  };

  var scrollToBottom = function() {
    window.scrollTo(0, document.body.scrollHeight);
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  };

  /**
   * Diese Funktion ersetzt die Platzhalter %0 bis %9 durch die Werte im übergebenen Wertearray.
   *
   * @param {string} message mit den Platzhaltern.
   * @param {array} values für die Platzhalter.
   *
   * return {string} die formatierte Nachricht.
   */
  var formatMessage = function(message, values) {
    var result = message;
    for (var i = 0; i < values.length; i++) {
      result = result.replace("%" + i, values[i]);
    }
    return result;
  };

  var onclick = function(elm, func) {
    var myFunc = function() {
      func();
      return false;
    }
    elm.onclick = myFunc;
    elm.ontouchstart = myFunc;
  };

  return {
    isPhoneGap: isPhoneGap,
    scrollToBottom: scrollToBottom,
    scrollToTop: scrollToTop,
    formatMessage: formatMessage,
    onclick: onclick
  };

})();
