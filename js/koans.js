if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.koans = (function(storage) {

  var index = 0;
  var koans = [];

  var add = function(koan) {
    koan.setSolution = function(solution) {
      storage.setSolution(koan, solution);
    };
    koan.getSolution = function() {
      return storage.getSolution(koan);
    };
    koans.push(koan);
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

  var setIndexByUrl = function() {
    var id = getKoanIdFromUrl();
    setIndexById(id);
  };

  var getIndex = function() {
    return index;
  };

  var getKoans = function() {
    return koans;
  };

  var clearSolutions = function() {
    koans.forEach(function(koan) {
      storage.removeSolution(koan);
    });
  };

  // --- private methods ---

  var getKoanIdFromUrl = function() {
    var parts = window.location.search.split("=");
    if (parts.length === 2) {
      if (parts[0] === "?koan") {      
        return parts[1];
      } else if (parts[0] === "?pos" && parts[1] === "last") {
        return koans[koans.length - 1].id;
      }
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
    nextId: nextId,
    hasNext: hasNext,
    prevId: prevId,
    hasPrev: hasPrev,
    getKoan: getKoan,
    setIndexByUrl: setIndexByUrl,
    getIndex: getIndex,
    getKoans: getKoans,
    clearSolutions: clearSolutions
  };

})(jshero.storage);
