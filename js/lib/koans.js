if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.koans = (function() {

  var index = 0;
  var koans = [];
  var koansMap = {};

  var add = function(koan) {
    koans.push(koan);
    koansMap[koan.id] = koan;
  };

  /**
   * Pass an array of all koan ids that should appear in the tutorial.
   * This order in the array will define
   * the order in which the koans appear in the tutorial.
   * Must be called AFTER all koans are added!
   *
   * @param {[koandId]} order
   */
  var initReorder = function(order) {

    if (order.length !== koans.length) {
      console.log("ERROR: Koans-Order-Array length unequal to Koans length!");
    }

    var koan;
    koans = [];
    for (var i = 0, l = order.length; i < l; i++) {
      koan = koansMap[order[i]];
      if (koan != null) {
        koans.push(koan);
      } else {
        console.log("ERROR: No koan for koan-Id in order array!");
      }
    }
  };

  var getKoans = function() {
    return koans;
  };

  // --- private methods ---

  return {
    add: add,
    initReorder: initReorder,
    getKoans: getKoans
  };

})();
