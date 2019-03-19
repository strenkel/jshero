(function(msg, actualKoan, header, codeArea, tester, util, storage, i18n, LANGUAGE) {

  i18n.setLanguage(LANGUAGE);
  var I18N = i18n.get;

  var testButton = document.getElementById("test-button");
  var nextButton = document.getElementById("next-button");
  var prevButton = document.getElementById("prev-button");
  var hintLink = document.getElementById("hint-link");
  var hintArea = document.getElementById("hint-area");
  var solutionLink = document.getElementById("solution-link");
  var solutionArea = document.getElementById("solution-area");

  // used to prevent double testing by double clicks
  var testsAreRunning = false;

  /**
   * Schreibt ggf. die richtige Loesung in die Seite.
   * Initialisiert Tipp- und Lösungs-Bereich.
   */
  var write = function() {
    var koan = actualKoan.getKoan();

    if (koan.hint) {
      showHintOpenLink();
    }

    if (koan.solution) {
      showSolutionOpenLink();
    }

    var solution = storage.getSolution(koan);
    if (solution) {
      codeArea.set(solution);
      header.toGreen();
    } else {
      var shot = storage.getShot(koan);
      if (shot) {
        codeArea.set(shot);
      }
      header.toRed();
    }

  };

  var nextPageUrl = function() {
    if (actualKoan.nextId()) {
      return actualKoan.nextId() + ".html";
    } else {
      return "success.html";
    }
  };

  var testCode = function(e) {

    if (testsAreRunning) {
      return;
    }
    testsAreRunning = true;

    var code = codeArea.get();
    msg.clear();
    tester.run(code, function(results) {
      var result;
      for (var i = 0, l = results.length; i < l; i++) {
        msg.log(results[i]);
      }

      // Durch das 'return false' schliesst sich auf mobilen Geraeten das Keyboard nicht mehr.
      // Durch das expliziete Setzen des Focus außerhalb des Input-Feldes wird das Keyboard geschlossen.
      // Wir setzten den Fokus vor dem Einfuegen des Weiter-Buttons. Wird dieser eingefuegt, bekommt er den Fokus.
      testButton.focus();

      var code = codeArea.get();
      var koan = actualKoan.getKoan();
      var okAll = results[results.length - 1].ok;
      if (okAll) {
        storage.setSolution(koan, code);
        header.toGreen();
        msg.log({
          ok: true,
          msg: I18N("testsPassed")
        });
        msg.goto(nextPageUrl());
      } else {
        storage.setShot(koan, code);
        header.toRed();
        msg.log({
          ok: false,
          msg: I18N("testError")
        });
      }
      util.scrollToBottom();
      testsAreRunning = false;
    });
    // Auf touch Geraeten wird beim Betätigen des Test-Buttons bei richtiger Lösung
    // auch gleich der Klick auf den Weiter-Button ausgeloest. 'return false' verhindert das.
    // 'return false' works like Event.preventDefault and Event.stopPropagation, but has better browser support.
    return false;
  };

  var showHintOpenLink = function() {
    hintLink.innerHTML = "+ " + I18N("hint");
    util.onclick(hintLink, showHint);
  };

  var showHintCloseLink = function() {
    hintLink.innerHTML = "- " + I18N("hint");
    util.onclick(hintLink, closeHint);
  };

  var showSolutionOpenLink = function() {
    solutionLink.innerHTML = "+ " + I18N("solution");
    util.onclick(solutionLink, showSolution);
  };

  var showSolutionCloseLink = function() {
    solutionLink.innerHTML = "- " + I18N("solution");
    util.onclick(solutionLink, closeSolution);
  };

  var showHint = function() {
    hintArea.innerHTML = actualKoan.getKoan().hint;
    showHintCloseLink();
  };

  var closeHint = function() {
    hintArea.innerHTML = "";
    showHintOpenLink();
  };

  var showSolution = function() {
    solutionArea.innerHTML = actualKoan.getKoan().solution;
    showSolutionCloseLink();
  };

  var closeSolution = function() {
    solutionArea.innerHTML = "";
    showSolutionOpenLink();
  };

  util.onclick(testButton, testCode);
  window.onload = write;

})(jshero.message,
  jshero.actualKoan,
  jshero.header,
  jshero.code,
  jshero.tester,
  jshero.util,
  jshero.storage,
  jshero.i18n,
  jshero.language.LANGUAGE);
