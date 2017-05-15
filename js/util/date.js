if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.date = (function() {

  /**
   * Prueft, ob obj ein Date-Objekt ist.
   */
  var isDate = function(obj) {
    return Object.prototype.toString.call(obj) === "[object Date]";
  };

  /**
   * Prüft, ob die beiden Date-Objekte den selben Zeitpunt repräsentieren.
   */
  var isEqual = function(d1, d2) {
    return d1.getTime() === d2.getTime();
  };

  return {
    isDate: isDate,
    isEqual: isEqual
  };

})();
