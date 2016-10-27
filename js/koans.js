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

  var hasNext = function() {
    return index + 1 < koans.length;
  };

  var nextId = function() {
    if (hasNext()) {
      return koans[index + 1].id;
    }
    return null;
  };
  
  var hasPrev = function() {
    return index > 0;
  };

  var prevId = function() {
    if (hasPrev()) {
      return koans[index - 1].id;
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
  
  var getIndex = function() {
    return index;
  }

  return {
    add: add,
    next: next,
    nextId: nextId,
    hasNext: hasNext,
    prevId: prevId,
    hasPrev: hasPrev,
    getKoan: getKoan,
    setIndexById: setIndexById,
    getIndex: getIndex
  };

})();
