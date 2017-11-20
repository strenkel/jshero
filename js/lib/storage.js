if (typeof jshero === "undefined") {
  var jshero = {};
}

// Note for hosting: local storage is regulated by the same origin police. http://www.jshero.net and http://jshero.net
// are different origins. The local storage under www.jshero.net and jshero.net will not be shared.
// Therefore (and due to other reasons) it is recomended to redirect non-www to www (or vice versa).
// See: https://stackoverflow.com/questions/12050590/redirect-non-www-to-www-in-htaccess

jshero.storage = (function(lang) {

  // --- handle solutions ---

  var setSolution = function(koan, solution) {
    localStorage.setItem(getSolutionKey(koan), solution);
  };

  var getSolution = function(koan) {
    return localStorage.getItem(getSolutionKey(koan));
  };

  var removeSolution = function(koan) {
    return localStorage.removeItem(getSolutionKey(koan));
  };

  // --- handle shots ---

  var setShot = function(koan, solution) {
    if (solution) {
      localStorage.setItem(getShotKey(koan), solution);
    } else {
      removeShot(koan);
    }
  };

  var getShot = function(koan) {
    return localStorage.getItem(getShotKey(koan));
  };

  var removeShot = function(koan) {
    return localStorage.removeItem(getShotKey(koan));
  };

  // --- private methods ---

  var getSolutionKey = function(koan) {
    return getKey(koan, "solution_");
  };

  var getShotKey = function(koan) {
    return getKey(koan, "shot_");
  };

  var getKey = function(koan, prefix) {
    if (lang !== "de") {
      prefix = prefix + lang + "_";
    }
    return prefix + koan.id;
  };

  return {
    setSolution: setSolution,
    getSolution: getSolution,
    removeSolution: removeSolution,
    setShot: setShot,
    getShot: getShot,
    removeShot: removeShot
  };

})(jshero.i18n.getLang());
