(function(koans) {
  
  var rootElm = document.getElementById("koans");
  
  var write = function() {
    koans.getKoans().forEach(function(koan, i) {
      writeKoan(koan, i);
    });
  };
  
  var writeKoan = function(koan, i) {
    var elm = document.createElement("a");
    elm.innerHTML = (i + 1) + ". " + koan.title;
    if (koan.getSolution()) {
      elm.className = "green";
    } else {
      elm.className = "red";
    }
    elm.href = "main.html?koan=" + koan.id;
    rootElm.appendChild(elm);
  };

  window.onload = write;

})(jshero.koans);
