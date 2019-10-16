importScripts(
  "../util/nodeutil.js",
  "../util/polyfill.js",
  "../util/util.js",
  "../util/i18n.js",
  "../util/array.js",
  "../util/object.js",
  "../util/date.js",
  "log.js",
  "evaluator.js",
  "testutil.js"
);

(function() {

  // --- stateless util methods ---

  var cloneError = function(e) {
    var clone = {
      message: e.message
    };
    if (e.lineNumber) {
      clone.lineNumber = e.lineNumber;
    }
    if (e.columnNumber) {
      clone.columnNumber = e.columnNumber;
    }
    if (e.line) {
      clone.line = e.line;
    }
    return clone;
  };

  (function(log, i18n, evaluator) {

    var I18N;
    var code;
    var koanId;
    var testIndex;
    var language;

    var readCode = function() {

      var result;
      log.clear();

      try {
        evaluator
          .init(code)
          .evalParse();
        result = {
          ok: true,
          msg: I18N("noSyntaxError")
        };
      } catch (e) {
        result = {
          ok: false,
          msg: I18N("syntaxError"),
          e: cloneError(e)
        };
      }
      result.logs = log.getAll();
      return result;
    };

    var testCode = function() {

      var koan = jshero.koans.getById(koanId);
      var result;

      try {
        evaluator.init(code);
        log.clear();
        result = koan.tests[testIndex]();
      } catch (exc) {
        result = {
          ok: false,
          msg: I18N("unknownError"),
          e: exc
        };
      }
      if (result.e) {
        result.e = cloneError(result.e);
      } else {
        result.isLast = testIndex === koan.tests.length - 1;
      }
      result.logs = log.getAll();
      return result;
    };

    var init = function() {
      initI18n();
      initKoans();
      return {
        ok: true
      };
    };

    var initI18n = function() {
      i18n.setLanguage(language);
      I18N = i18n.get;
    };

    var initKoans = function() {
      var koansUrl = language === "de" ? "../koans.js" : "../../en/js/koans.js";
      // add dummy version to prevent caching after new release
      koansUrl += "?v=304"; 
      importScripts(koansUrl);
    };

    /**
     * Parameter for the three actions:
     * init: language
     * read: code
     * test: code, koanId, testIndex
     */
    onmessage = function(event) {

      code = event.data.code; // {String}
      testIndex = event.data.testIndex; // {0, 1, 2, ...}
      koanId = event.data.koanId; // {String}
      language = event.data.language; // "de" | "en"
      var action = event.data.action; // "init" | "read" | "test"

      var result;
      if (action === "init") {
        result = init();
      } else if (action === "read") {
        result = readCode();
      } else if (action === "test") {
        result = testCode();
      }
      postMessage(result);
    };

  })(jshero.log,
    jshero.i18n,
    jshero.evaluator);

})();