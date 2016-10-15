if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.koans = (function() {

  var index = 0;
  var koans = [];

  var add = function(koan) {
    koans.push(koan);
  };

  var next = function() {
    index++;
  };

  var getKoan = function() {
    return koans[index];
  };

  var nextId = function() {
    if (index + 1 < koans.length) {
      return koans[index + 1].id;
    }
    return null;
  };

  var setIndexById = function(id) {
    koans.forEach(function(koan, i) {
      if (koan.id === id) {
        index = i;
      }
    });
  };

  return {
    add: add,
    next: next,
    nextId: nextId,
    getKoan: getKoan,
    setIndexById: setIndexById
  };

})();
