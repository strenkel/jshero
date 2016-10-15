if (typeof jshero === "undefined") {
  var jshero = {};
}

(function(msg, koans) {

  var testButton = document.getElementById("test-button"); 

  var write = function() {
    document.getElementById("koans-title").innerHTML = koans.getKoans().title;
    document.getElementById("koans-task").innerHTML = koans.getKoans().task;
  };

  var testCode = function() {
    clear();
    koans.getKoans().beforeTests();
    var okAll = false;
    var ok = readCode();
    if (ok) {
      okAll = true;
      var tests = koans.getKoans().tests;
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
    var visibility;
    if (okAll) {
      visibility = "visible";
      testButton.className = "green";
    } else {
      visibility = "hidden";
      testButton.className = "red";
    }
    document.getElementById("next-button").style.visibility = visibility;
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

  document.getElementById('test-button').onclick = testCode;
  window.onload = write;

})(jshero.message, jshero.koans);

