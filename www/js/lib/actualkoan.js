if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * For usuage in pages build from main.html.
 */
jshero.actualKoan = (function(koansArray) {

  var index = 0; // default index

  var getKoan = function() {
    return koansArray[index];
  };

  var nextId = function() {
    if (hasNext()) {
      return koansArray[index + 1].id;
    }
    return null;
  };

  var getId = function() {
    var parts = window.location.href.split("/");
    var lastPart = parts[parts.length -1];
    return lastPart.split(".")[0];
  };

  // --- private methods ---

  var hasNext = function() {
    return index + 1 < koansArray.length;
  };

  var setIndexByUrl = function() {
    var id = getId();
    if (id) {
      setIndexById(id);
    }
  };

  var setIndexById = function(id) {
    for (var i = 0, l = koansArray.length; i < l; i++) {
      if (koansArray[i].id === id) {
        index = i;
        break;
      }
    }
  };

  // run on load
  setIndexByUrl();

  return {
    getId: getId,
    nextId: nextId,
    getKoan: getKoan
  };

})(jshero.koans.getKoans());
