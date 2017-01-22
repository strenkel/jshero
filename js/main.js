(function(msg, koans, header) {

  var testButton = document.getElementById("test-button");
  var nextButton = document.getElementById("next-button");
  var prevButton = document.getElementById("prev-button");
  var codeArea = document.getElementById('code-area');

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
    adjustCodeAreaHeight();
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
        } catch (exc) {
          console.log("Unbekannter Testfehler!", exc)
          result = {
            ok: false,
            msg: "Unbekannter Testfehler!",
            e: exc
          };
        }
        msg.log(result.msg, result.ok, result.e);
        if(!result.ok) {
          okAll = false;
          break;
        }
      }
    }

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
    window.scrollTo(0, document.body.scrollHeight);
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
      msg.log("Fehler beim Einlesen des Codes!", false, e);
      console.log("Syntax-Fehler.", e);
      return false;
    }
  };

  var getCode = function() {
    var code = codeArea.value;
    return code.trim();
  };
  
  var setCode = function(code) {
    codeArea.value = code;
  };

  var adjustCodeAreaHeight = function() {
    while (codeArea.scrollHeight > codeArea.clientHeight) {
      codeArea.rows = codeArea.rows + 5;
    }
  };

  testButton.onclick = testCode;
  codeArea.onkeyup = adjustCodeAreaHeight;
  window.onload = write;


})(jshero.message, jshero.koans, jshero.header);

