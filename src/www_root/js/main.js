(function(msg, actualKoan, header, codeArea, tester, util, storage, i18n, LANGUAGE) {

  i18n.setLanguage(LANGUAGE);
  var I18N = i18n.get;

  var testButton = document.getElementById("test-button");
  var hintLink = document.getElementById("hint-link");
  var hintOpenClose = document.getElementById("hint-open-close");
  var hintArea = document.getElementById("hint-area");
  var solutionLink = document.getElementById("solution-link");
  var solutionOpenClose = document.getElementById("solution-open-close");
  var solutionArea = document.getElementById("solution-area");

  // used to prevent double testruns by double clicks
  var testsAreRunning = false;

  /**
   * Do some initializations:
   * - init hint and solution link
   * - write shot or solution
   * - init green or red header
   */
  var initPage = function() {

    var koanId = actualKoan.getId();

    if (hintLink) {
      showHintOpenLink();
    }

    if (solutionLink) {
      showSolutionOpenLink();
    }

    var solution = storage.getSolution(koanId);
    if (solution) {
      codeArea.set(solution);
      header.toGreen();
    } else {
      var shot = storage.getShot(koanId);
      if (shot) {
        codeArea.set(shot);
      }
      header.toRed();
    }

    refreshFixMe();

  };

  var testCode = function(e) {

    if (testsAreRunning) {
      return;
    }
    testsAreRunning = true;

    var code = codeArea.get();
    msg.clear();
    refreshFixMe();
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
      var koanId = actualKoan.getId();
      var lastResult = results[results.length - 1];

      if (lastResult.oldBrowser) {
        // Due to backwarts compability.
        // Can be removed later on (e.g. 2020). 
        header.toRed();
      } else {
        var okAll = lastResult.ok;
        if (okAll) {
          storage.setSolution(koanId, code);
          header.toGreen();
          msg.log({
            ok: true,
            msg: I18N("testsPassed")
          });
          msg.goto(actualKoan.nextPageUrl());
        } else {
          storage.setShot(koanId, code);
          header.toRed();
          msg.log({
            ok: false,
            msg: I18N("testError")
          });
        }
      }
      util.scrollToBottom();
      testsAreRunning = false;
    });
    // Auf touch Geraeten wird beim Betätigen des Test-Buttons bei richtiger Lösung
    // auch gleich der Klick auf den Weiter-Button ausgeloest. 'return false' verhindert das.
    // 'return false' works like Event.preventDefault and Event.stopPropagation, but has better browser support.
    return false;
  };

  var refreshFixMe = function() {
    var oldFixMe = document.getElementById("fixme");
    if (oldFixMe) {
      var newFixMe = createFixMe();
      oldFixMe.parentNode.replaceChild(newFixMe, oldFixMe);
    }
  };

  var createFixMe = function() {
    var fixMe = document.createElement("div");
    fixMe.id = "fixme";
    fixMe.innerHTML = "#fixme";
    fixMe.style.height = "3em";
    fixMe.style.lineHeight = "3em";
    fixMe.style.textAlign = "center";
    fixMe.style.fontSize = "1.5em";
    fixMe.style.color = "white";
    fixMe.style.backgroundColor = "grey";
    return fixMe;
  };

  var showHintOpenLink = function() {
    hintOpenClose.innerHTML = "+";
    util.onclick(hintLink, showHint);
  };

  var showHintCloseLink = function() {
    hintOpenClose.innerHTML = "-";
    util.onclick(hintLink, closeHint);
  };

  var showSolutionOpenLink = function() {
    solutionOpenClose.innerHTML = "+";
    util.onclick(solutionLink, showSolution);
  };

  var showSolutionCloseLink = function() {
    solutionOpenClose.innerHTML = "-";
    util.onclick(solutionLink, closeSolution);
  };

  var showHint = function() {
    hintArea.style.display = "block";
    showHintCloseLink();
  };

  var closeHint = function() {
    hintArea.style.display = "none";
    showHintOpenLink();
  };

  var showSolution = function() {
    solutionArea.style.display = "block";
    showSolutionCloseLink();
  };

  var closeSolution = function() {
    solutionArea.style.display = "none";
    showSolutionOpenLink();
  };

  util.onclick(testButton, testCode);
  window.onload = initPage;

})(jshero.message,
  jshero.actualKoan,
  jshero.header,
  jshero.code,
  jshero.tester,
  jshero.util,
  jshero.storage,
  jshero.i18n,
  jshero.language.LANGUAGE);
