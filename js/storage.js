if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.storage = (function() {
  
  var getActualKoan = function() {
    return localStorage.getItem("actualKoanId");
  };
  
  var setActualKoan = function(koan) {
    localStorage.setItem("actualKoanId", koan);
  };
  
  var setSolution = function(koan, solution) {
    localStorage.setItem("solution_" + koan.id, solution);
  };
  
  var getSolution = function(koan) {
    return localStorage.getItem("solution_" + koan.id);
  };
  
  return {
    setActualKoan: setActualKoan,
    getActualKoan: getActualKoan,
    setSolution: setSolution,
    getSolution: getSolution
  };
  
})();
