if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.array = (function() {

  var isEqual = function(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (var i = 0, l = a.length; i < l; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  };

  return {
    isEqual: isEqual
  };

})();
