(function(storage, util) {

  // --- add green/red to koan links ---

  var koanLinks = document.getElementById("koans").children;;

  function addClasses() {
    for (var i = 0, l = koanLinks.length; i < l; i++) {
      addClass(koanLinks[i]);
    }
  };

  function addClass(link) {
    var koanId = link.href.split("=")[1];
    if (storage.getSolution({id: koanId})) {
      link.className = "green";
    } else {
      link.className = "red";
    }
  };

  window.onload = addClasses;

  // --- reset ---

  var resetButtonRoot = document.getElementById("reset-exercises");
  var resetButton = document.getElementById("reset-button");
  var resetConfiramtionRoot = document.getElementById("reset-confirmation");
  var resetYesButton = document.getElementById("reset-yes-button");
  var resetNoButton = document.getElementById("reset-no-button");

  resetButton.onclick = function() {
    showConfirmation();
    util.scrollToBottom();
  };

  resetNoButton.onclick = showReset;

  resetYesButton.onclick = function() {
    showReset();
    resetKoans();
    util.scrollToTop();
  };

  function resetKoans() {
    storage.clear();
    addClasses();
  };

  function showConfirmation() {
    resetConfiramtionRoot.style.display = "block";
    resetButtonRoot.style.display = "none";
  };

  function showReset() {
    resetButtonRoot.style.display = "block";
    resetConfiramtionRoot.style.display = "none";
  };

})(jshero.storage, jshero.util);
