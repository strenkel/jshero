(function(koans) {

  // write koans
  
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

  // reset

  var resetButton = document.getElementById("reset-button");
  var resetConfiramtionRoot = document.getElementById("reset-confirmation");
  var resetYesButton = document.getElementById("reset-yes-button");
  var resetNoButton = document.getElementById("reset-no-button");

  resetButton.onclick = function() {
    resetConfiramtionRoot.style.visibility = "visible";
    scrollToButtom();
  };

  resetNoButton.onclick = function() {
    resetConfiramtionRoot.style.visibility = "hidden";
  };

  resetYesButton.onclick = function() {
    resetConfiramtionRoot.style.visibility = "hidden";
    koans.clearSolutions();
    rootElm.innerHTML = "";
    write();
    window.scrollTo(0, 0);
  };

  var scrollToButtom = function() {
    window.scrollTo(0, document.body.scrollHeight);
  };

})(jshero.koans);
