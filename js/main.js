(function(msg, actualKoan, header, codeArea, tester, log, util, storage, i18n, LANGUAGE) {

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
   * Schreibt die Aufgabe und ggf. die richtige Loesung in die Seite.
   * Setzt die Links fuer vorherige und naechste Seite.
   */
  var write = function() {
    var koan = actualKoan.getKoan();
    document.getElementById("koans-title").innerHTML = (actualKoan.getIndex() + 1) + ". " + koan.title;

    // IE8: '...innerHTML = koan.lesson' works with <div> but not with <p> elements!
    document.getElementById("koans-lesson").innerHTML = koan.lesson;
    document.getElementById("koans-task").innerHTML = koan.task;

    if (koan.hint) {
      showHintLink();
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

    prevButton.href = prevPageUrl();
    nextButton.href = nextPageUrl();
  };

  var prevPageUrl = function() {
    if (actualKoan.prevId()) {
      return "main.html?koan=" + actualKoan.prevId();
    } else if (LANGUAGE === "de") {
      return "intro.html";
    } else {
      return "home.html";
    }
  };

  var nextPageUrl = function() {
    if (actualKoan.nextId()) {
      return "main.html?koan=" + actualKoan.nextId();
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

  var showHintLink = function() {
    hintLink.innerHTML = I18N("hint");
    hintLink.onclick = showHint;
  };

  var showSolutionLink = function() {
    solutionLink.innerHTML = I18N("solution");
    solutionLink.onclick = showSolution;
  };

  var showHint = function() {
    hintArea.innerHTML = actualKoan.getKoan().hint;
    showSolutionLink();
  };

  var showSolution = function() {
    solutionArea.innerHTML = actualKoan.getKoan().solution;
  };

  testButton.onclick = testCode;
  testButton.ontouchstart = testCode;
  window.onload = write;

})(jshero.message,
  jshero.actualKoan,
  jshero.header,
  jshero.code,
  jshero.tester,
  jshero.log,
  jshero.util,
  jshero.storage,
  jshero.i18n,
  jshero.language.LANGUAGE);
