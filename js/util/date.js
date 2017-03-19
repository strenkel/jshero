if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.date = (function() {

  var to2 = function(n) {
    if (n < 10) {
      return "0" + n;
    }
    return "" + n;
  };

  /**
   * Gibt das Datum im Format dd.mm.YYYY zurueck.
   */
  var toGermanString = function(date) {
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    return to2(dd) + "." + to2(mm) + "." + yyyy;
  };

  /**
   * Prueft, ob obj ein Date-Objekt ist.
   */
  var isDate = function(obj) {
    return Object.prototype.toString.call(obj) === "[object Date]";
  };

  return {
    toGermanString: toGermanString,
    isDate: isDate
  };

})();
