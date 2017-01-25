(function(koans) {

  // --- write koans ---
  
  var rootElm = document.getElementById("koans");
  
  function write() {
    koans.getKoans().forEach(function(koan, i) {
      writeKoan(koan, i);
    });
  };
  
  function writeKoan(koan, i) {
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

  // --- reset ---

  var resetButtonRoot = document.getElementById("reset-exercises");
  var resetButton = document.getElementById("reset-button");
  var resetConfiramtionRoot = document.getElementById("reset-confirmation");
  var resetYesButton = document.getElementById("reset-yes-button");
  var resetNoButton = document.getElementById("reset-no-button");

  resetButton.onclick = function() {
    showConfirmation();
    scrollToButtom();
  };

  resetNoButton.onclick = showReset;

  resetYesButton.onclick = function() {
    showReset();
    resetKoans();
    scrollToTop();
  };

  function resetKoans() {
    koans.clearSolutions();
    rootElm.innerHTML = "";
    write();
  };

  function showConfirmation() {
    resetConfiramtionRoot.style.display = "block";
    resetButtonRoot.style.display = "none";
  };

  function showReset() {
    resetButtonRoot.style.display = "block";
    resetConfiramtionRoot.style.display = "none";
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  };

  function scrollToButtom() {
    window.scrollTo(0, document.body.scrollHeight);
  };

})(jshero.koans);
