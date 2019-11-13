if (typeof jshero === "undefined") {
  var jshero = {};
}
/**
 * There are two jshero.koans classes!
 * This one for use in the browser and one for building the app.
 * This one is simple and handle only one koan.
 * The koans class for building handle all koans at once.
 * Both classes must implement an add method!
 */
jshero.koans = (function() {

  var koan;

  var add = function(myKoan) {
    koan = myKoan;
  };

  var get = function() {
    return koan;
  };

  return {
    add: add,
    get: get
  };

})();