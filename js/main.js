(function(msg, koans, header) {

  var testButton = document.getElementById("test-button");
  var nextButton = document.getElementById("next-button");
  var prevButton = document.getElementById("prev-button");

  var write = function() {
    koans.setIndexByUrl();
    var koan = koans.getKoan();
    document.getElementById("koans-title").innerHTML = (koans.getIndex() + 1) + ". " + koan.title;
    document.getElementById("koans-lesson").innerHTML = koan.lesson;
    document.getElementById("koans-task").innerHTML = koan.task;
    
    var solution = koan.getSolution();
    if (solution) {
      setCode(solution);
      header.toGreen();
    } else {
      header.toRed();
    }
    
    if (koans.hasPrev()) {
      prevButton.href = "main.html?koan=" + koans.prevId();
    } else {
      prevButton.href = "index.html";
    }
    nextButton.href = nextPageUrl();
  };

  var nextPageUrl = function() {
    if (koans.hasNext()) {
      return "main.html?koan=" + koans.nextId();
    } else {
      return "success.html";
    }
  };

  var testCode = function() {
    clear();
    var koan = koans.getKoan();
    koan.beforeTests();
    var okAll = false;
    var ok = readCode();
    var result;
    if (ok) {
      okAll = true;
      var tests = koan.tests;
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
    if (okAll) {
      var code = getCode();
      koan.setSolution(code);
      header.toGreen();
      var message = "<a href='" + nextPageUrl() + "'>Alle Tests bestanden! Gehe zur nächsten Übung!</a>";
      msg.log(message, true);
    } else {
      header.toRed();
      msg.log("Test-Fehler! Korrigiere den Fehler und führe die Tests erneut aus!", false);
    }
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
    var code = getCode();
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

  var getCode = function() {
    var code = document.getElementById('code-area').value;
    return code.trim();
  };
  
  var setCode = function(code) {
    document.getElementById('code-area').value = code;
  };

  testButton.onclick = testCode;
  window.onload = write;

})(jshero.message, jshero.koans, jshero.header);

