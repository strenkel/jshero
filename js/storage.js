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
  
  var setSolution = function(koan, text) {
    console.log("xxx", koan, text);
    localStorage.setItem("solution_" + koan, text);
  };
  
  var getSolution = function(koan) {
    console.log("yyy", koan, localStorage.getItem("solution_" + koan));
    return localStorage.getItem("solution_" + koan);
  };
  
  return {
    setActualKoan: setActualKoan,
    getActualKoan: getActualKoan,
    setSolution: setSolution,
    getSolution: getSolution
  };
  
})();
