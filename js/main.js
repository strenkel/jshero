(function(msg, koans, header, codeArea, util) {

  var testButton = document.getElementById("test-button");
  var nextButton = document.getElementById("next-button");
  var prevButton = document.getElementById("prev-button");

  /**
   * Schreibt die Aufgabe und ggf. die richtige Loesung in die Seite.
   * Setzt die Links fuer vorherige und naechste Seite.
   */
  var write = function() {
    koans.setIndexByUrl();
    var koan = koans.getKoan();
    document.getElementById("koans-title").innerHTML = (koans.getIndex() + 1) + ". " + koan.title;
    document.getElementById("koans-lesson").innerHTML = koan.lesson;
    document.getElementById("koans-task").innerHTML = koan.task;
    
    var solution = koan.getSolution();
    if (solution) {
      codeArea.set(solution);
      header.toGreen();
    } else {
      header.toRed();
    }

    if (koans.hasPrev()) {
      prevButton.href = "main.html?koan=" + koans.prevId();
    } else {
      prevButton.href = "intro.html";
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

  var testCode = function(e) {
    
    e.preventDefault();

    msg.clear();
    var koan = koans.getKoan();
    koan.beforeTests();
    var okAll = false;
    var ok = readCode();
    var result;
    
    if (ok) {
      okAll = true;
      var tests = koan.tests;
      for (var i = 0, l = tests.length; i < l; i++) {
        jshero.clearLogs();
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
        msg.log(result.msg, result.ok, result.e, jshero.getLogs());
        if(!result.ok) {
          okAll = false;
          break;
        }
      }
    }

    // Durch das preventDefault() schloss sich auf mobilen Geraeten das Keyboard nicht mehr.
    // Durch das expliziete Setzen des Focus außerhalb des Input-Feldes wird das Keyboard geschlossen.
    // Wir setzten den Fokus vor dem Einfügen des Weiter-Buttons. Wird dieser eingefügt, bekommt er den Fokus.
    testButton.focus();

    if (okAll) {
      var code = codeArea.get();
      koan.setSolution(code);
      header.toGreen();
      msg.log("Alle Tests bestanden!", true);
      msg.goto(nextPageUrl());
    } else {
      header.toRed();
      msg.log("Test-Fehler! Korrigiere den Fehler und führe die Tests erneut aus!", false);
    }
    util.scrollToBottom();
  };

  var readCode = function() {
    var code = codeArea.get();
    if (code.length === 0) {
      msg.log("Schreibe deinen Code in das Eingabefeld.", false);
      return false;
    }
    try {
      // global eval: it works at global scope rather than local scope
      var geval = eval;
      geval(code);
      msg.log("Code erfolgreich eingelesen.", true);
      return true;
    } catch(e) {
      msg.log("Fehler beim Einlesen des Codes!", false, e);
      console.log("Fehler beim Einlesen des Codes!", e);
      return false;
    }
  };

  testButton.addEventListener("click", testCode);
  testButton.addEventListener("touchstart", testCode);
  window.onload = write;

})(jshero.message, jshero.koans, jshero.header, jshero.code, jshero.util);

