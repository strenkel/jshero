if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.storage = (function() {
  
  var setSolution = function(koan, solution) {
    localStorage.setItem("solution_" + koan.id, solution);
  };
  
  var getSolution = function(koan) {
    return localStorage.getItem("solution_" + koan.id);
  };
  
  var removeSolution = function(koan) {
    return localStorage.removeItem("solution_" + koan.id);
  };

  return {
    setSolution: setSolution,
    getSolution: getSolution,
    removeSolution: removeSolution
  };
  
})();
