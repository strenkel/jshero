if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.koans = (function() {

  var index = 0;
  var koansList = [];

  var add = function(koans) {
    koansList.push(koans);
  };

  var next = function() {
    index++;
  };

  var getKoans = function() {
    return koansList[index];
  };

  var nextId = function() {
    if (index + 1 < koansList.length) {
      return koansList[index + 1].id;
    }
    return null;
  };

  return {
    add: add,
    next: next,
    nextId: nextId,
    getKoans: getKoans
  };

})();
