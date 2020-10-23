if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.util = (function() {

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  };

  /**
   * Replaces the placeholders %0, %1, %2, ... with the values in the array.
   *
   * @param {string} message with placeholders.
   * @param {array} values for the placeholders.
   *
   * return {string} the formatted message
   */
  function formatMessage(message, values) {
    let result = message;
    for (let i = 0; i < values.length; i++) {
      result = result.replace("%" + i, values[i]);
    }
    return result;
  };

  function onclick(elm, func) {
    const myFunc = function() {
      func();
      return false;
    };
    elm.onclick = myFunc;
    elm.ontouchstart = myFunc;
  };

  return Object.freeze({
    scrollToBottom: scrollToBottom,
    scrollToTop: scrollToTop,
    formatMessage: formatMessage,
    onclick: onclick
  });

})();
