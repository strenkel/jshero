if (typeof jshero === "undefined") {
  var jshero = {};
}

(function(msg, koans) {

  var testButton = document.getElementById("test-button");
  var nextButton = document.getElementById("next-button");

  var write = function() {
    var koan = getKoanFromUrl() || getKoanFromStorage();
    koans.setIndexById(koan);
    document.getElementById("koans-title").innerHTML = koans.getKoan().title;
    document.getElementById("koans-lesson").innerHTML = koans.getKoan().lesson;
    document.getElementById("koans-task").innerHTML = koans.getKoan().task;
    nextButton.href = "main.html?koan=" + koans.nextId(); 
  };

  var getKoanFromUrl = function() {
    var parts = window.location.search.split("=");
    if (parts.length === 2) {
      return parts[1];
    }
    return null;
  };

  var getKoanFromStorage = function() {
    return localStorage.getItem("lastKoanId");
  };
  
  var setKoanToStorage = function(koan) {
    localStorage.setItem("lastKoanId", koan);
  };

  var testCode = function() {
    clear();
    koans.getKoan().beforeTests();
    var okAll = false;
    var ok = readCode();
    if (ok) {
      okAll = true;
      var tests = koans.getKoan().tests;
      for (var i = 0, l = tests.length; i < l; i = i + 2) {
        try {
          ok = tests[i + 1]();
        } catch (e) {
          ok = false;
        }
        msg.log(tests[i], ok);
        if(!ok) {
          okAll = false;
          break;
        }
      };
    }
    handleButtons(okAll);
    scrollToButtom();
    handleStorage(okAll);
  };

  var handleStorage = function(okAll) {
    if (okAll) {
      setKoanToStorage(koans.nextId());
    }
  };

  var scrollToButtom = function() {
    window.scrollTo(0,document.body.scrollHeight);
  };

  var handleButtons = function(okAll) {
    var visibility;
    if (okAll) {
      visibility = "visible";
      testButton.className = "green";
    } else {
      visibility = "hidden";
      testButton.className = "red";
    }
    nextButton.style.visibility = visibility;
  };

  var clear = function() {
    msg.clear();
  };

  var readCode = function() {
    var code = document.getElementById('code-area').value;
    code = code.trim();
    if (code.length === 0) {
      msg.log("Schreibe deinen Code in das Eingabefeld.", false);
      return false;
    }
    try {
      var geval = eval;
      geval(code);
      msg.log("Die Syntax ist korrekt.", true);
      return true;
    } catch(e) {
      msg.log("Syntax-Fehler!", false);
      console.log(e);
      return false;
    }
  };

  testButton.onclick = testCode;
  window.onload = write;

})(jshero.message, jshero.koans);

