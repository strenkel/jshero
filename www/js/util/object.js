if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.object = (function() {

  /**
   * Flat comparison of two ojects.
   * Two object are equals if all own and enumerable properties are strict equals.
   *
   * @param {Object} o1
   * @param {Object} o1
   */
  var flatEquals = function(o1, o2) {

    for (var p in o1) {
      if (o1.hasOwnProperty(p)) {
        if (o1[p] !== o2[p]) {
          return false;
        }
      }
    }

    for (var p in o2) {
      if (o2.hasOwnProperty(p)) {
        if (o1[p] !== o2[p]) {
          return false;
        }
      }
    }

    return true;
  };

  return {
    flatEquals: flatEquals
  };

})();