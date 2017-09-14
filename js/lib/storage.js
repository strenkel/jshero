if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.storage = (function(lang) {
  
  // --- solution ---

  var setSolution = function(koan, solution) {
    localStorage.setItem(getSolutionKey(koan), solution);
  };
  
  var getSolution = function(koan) {
    return localStorage.getItem(getSolutionKey(koan));
  };
  
  var removeSolution = function(koan) {
    return localStorage.removeItem(getSolutionKey(koan));
  };

  // --- shot ---

  var setShot = function(koan, solution) {
    localStorage.setItem(getShotKey(koan), solution);
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
