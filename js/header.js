if (typeof jshero === "undefined") {
  var jshero = {};
}

// Ist fuer das Rot/Gruen-Markieren der Seite zustaendig. 
jshero.header = (function() {

  var headerElm = document.getElementById("header");

  var toGreen = function() {
    headerElm.className = "green";
  };
  
  var toRed = function() {
    headerElm.className = "red";
  };

  return {
    toGreen: toGreen,
    toRed: toRed
  };

})();
