if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.array = (function() {

  "use strict";

  /**
   * Returns true, if a and b are arrays with same length and
   * all elements are strict equal.
   * 
   * @param a {*}
   * @param b {*}
   */
  function isEqual(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0, l = a.length; i < l; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  };

  return Object.freeze({
    isEqual: isEqual
  });

})();
