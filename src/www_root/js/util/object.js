if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.object = (function() {

  "use strict";

  /**
   * Flat comparison of two ojects.
   * Two object are equals if all own and enumerable properties are strict equals.
   * 
   * FIXME: flatEquals({}, 1) returns true, but should return false. 
   *
   * @param {Object} o1
   * @param {Object} o1
   */
  function flatEquals(o1, o2) {

    if (o1 == null || o2 == null) {
      return false;
    }

    for (let p in o1) {
      if (o1.hasOwnProperty(p)) {
        if (o1[p] !== o2[p]) {
          return false;
        }
      }
    }

    for (let p in o2) {
      if (o2.hasOwnProperty(p)) {
        if (o1[p] !== o2[p]) {
          return false;
        }
      }
    }

    return true;
  };

  return Object.freeze({
    flatEquals: flatEquals
  });

})();