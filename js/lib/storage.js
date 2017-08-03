if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.storage = (function(lang) {
  
  var setSolution = function(koan, solution) {
    localStorage.setItem(getKey(koan), solution);
  };
  
  var getSolution = function(koan) {
    return localStorage.getItem(getKey(koan));
  };
  
  var removeSolution = function(koan) {
    return localStorage.removeItem(getKey(koan));
  };

  var getKey = function(koan) {
    var prefix = "solution_";
    if (lang !== "de") {
       prefix = prefix + lang + "_";
    }
    return prefix + koan.id;
  };

  return {
    setSolution: setSolution,
    getSolution: getSolution,
    removeSolution: removeSolution
  };
  
})(jshero.i18n.getLang());
