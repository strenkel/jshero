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

  var prevId = function() {
    if (hasPrev()) {
      return koansArray[index - 1].id;
    }
    return null;
  };

  // --- private methods ---

  var hasNext = function() {
    return index + 1 < koansArray.length;
  };

  var hasPrev = function() {
    return index > 0;
  };

  var setIndexByUrl = function() {
    var id = getKoanIdFromUrl();
    if (id) {
      setIndexById(id);
    }
  };

  var getKoanIdFromUrl = function() {
    var parts = window.location.href.split("/");
    var lastPart = parts[parts.length -1];
    return lastPart.split(".")[0];
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
    nextId: nextId,
    prevId: prevId,
    getKoan: getKoan
  };

})(jshero.koans.getKoans());
