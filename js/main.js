(function(msg, actualKoan, header, codeArea, log, util, storage, i18n, LANGUAGE) {

  i18n.setLanguage(LANGUAGE);
  var I18N = i18n.get;

  /**
   * Cross Browser global eval. In particular for IE8.
   * By Chris West - MIT Licensed: http://cwestblog.com/2013/03/08/javascript-global-eval/
   * Difference to Chris: Returns undefined if global eval or execScript is not available.
   * The 'setTimeout' return form Chris would not work here without changing our code.
   * See also: http://perfectionkills.com/global-eval-what-are-the-options/
   */
  var globalEval = (function(global, realArray, indirectEval, indirectEvalWorks) {
    try {
      eval('var Array={};');
      indirectEvalWorks = indirectEval('Array') == realArray;
    } catch (err) { }

    return indirectEvalWorks
      ? indirectEval
      : (global.execScript
        ? function(expression) {
          global.execScript(expression);
        }
        : undefined
      );
  })(this, Array, (2, eval));

  var testButton = document.getElementById("test-button");
  var nextButton = document.getElementById("next-button");
  var prevButton = document.getElementById("prev-button");

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

    msg.clear();
    var koan = actualKoan.getKoan();
    koan.beforeTests();
    var okAll = false;
    var ok = readCode();
    var result;

    if (ok) {
      okAll = true;
      var tests = koan.tests;
      for (var i = 0, l = tests.length; i < l; i++) {
        log.clear();
        try {
          result = tests[i]();
        } catch (exc) {
          result = {
            ok: false,
            msg: I18N("unknownError"),
            e: exc
          };
        }
        result.logs = log.getAll();
        msg.log(result);
        if (!result.ok) {
          okAll = false;
          break;
        }
      }
    }

    // Durch das 'return false' schliesst sich auf mobilen Geraeten das Keyboard nicht mehr.
    // Durch das expliziete Setzen des Focus außerhalb des Input-Feldes wird das Keyboard geschlossen.
    // Wir setzten den Fokus vor dem Einfuegen des Weiter-Buttons. Wird dieser eingefuegt, bekommt er den Fokus.
    testButton.focus();

    var code = codeArea.get();
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

    // Auf touch Geraeten wird beim Betätigen des Test-Buttons bei richtiger Lösung
    // auch gleich der Klick auf den Weiter-Button ausgeloest. 'return false' verhindert das.
    // 'return false' works like Event.preventDefault and Event.stopPropagation, but has better browser support.
    return false;
  };

  var readCode = function() {
    var code = codeArea.get();
    if (code.length === 0) {
      msg.log({
        ok: false,
        msg: I18N("writeCode")
      });
      return false;
    }
    try {
      log.clear();
      globalEval(code);
      msg.log({
        ok: true,
        msg: I18N("noSyntaxError"),
        logs: log.getAll()
      });
      return true;
    } catch (e) {
      msg.log({
        ok: false,
        msg: I18N("syntaxError"),
        e: e,
        logs: log.getAll()
      });
      return false;
    }
  };

  testButton.onclick = testCode;
  testButton.ontouchstart = testCode;
  window.onload = write;

})(jshero.message,
  jshero.actualKoan,
  jshero.header,
  jshero.code,
  jshero.log,
  jshero.util,
  jshero.storage,
  jshero.i18n,
  jshero.language.LANGUAGE);
