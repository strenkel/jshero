if (typeof jshero === "undefined") {
  var jshero = {};
}

(function(msg, koans) {

  var testButton = document.getElementById("test-button");
  var nextButton = document.getElementById("next-button");
  var prevButton = document.getElementById("prev-button");

  var write = function() {
    var koan = getKoanFromUrl() || getKoanFromStorage();
    setKoanToStorage(koan);
    koans.setIndexById(koan);
    document.getElementById("koans-title").innerHTML = koans.getKoan().title;
    document.getElementById("koans-lesson").innerHTML = koans.getKoan().lesson;
    document.getElementById("koans-task").innerHTML = koans.getKoan().task;
    if (koans.hasPrev()) {
      prevButton.href = "main.html?koan=" + koans.prevId();
    } else {
      prevButton.href = "index.html";
    }
    if (koans.hasNext()) {
      nextButton.href = "main.html?koan=" + koans.nextId();
    } else {
      nextButton.href = "success.html";
    }
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
    var result;
    if (ok) {
      okAll = true;
      var tests = koans.getKoan().tests;
      for (var i = 0, l = tests.length; i < l; i++) {
        try {
          result = tests[i]();
        } catch (e) {
          console.log("Unbekannter Testfehler!", e)
          result = {
            ok: false,
            msg: "Unbekannter Testfehler!"
          };
        }
        msg.log(result.msg, result.ok);
        if(!result.ok) {
          okAll = false;
          break;
        }
      };
    }
    handleTestButton(okAll);
    scrollToButtom();
  };

  var scrollToButtom = function() {
    window.scrollTo(0,document.body.scrollHeight);
  };

  var handleTestButton = function(okAll) {
    if (okAll) {
      testButton.className = "green";
    } else {
      testButton.className = "red";
    }
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

