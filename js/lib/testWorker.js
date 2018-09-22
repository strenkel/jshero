importScripts(
  "../util/polyfill.js",
  "../util/util.js",
  "../util/i18n.js",
  "../util/array.js",
  "../util/date.js",
  "log.js",
  "koans.js",
  "testutil.js"
);

(function() {

  // --- stateless util methods ---

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

  /**
   * Execute 'code' and export all variables in 'exports' to the global object.
   * 
   * @param {String} code 
   * @param {[String]} exports 
   */
  var evalAndExport = function(code, exports) {
    exports = exports || [];
    var codeWithExports = code;
    var myExport;
    for (var i = 0, l = exports.length; i < l; i++) {
      myExport = exports[i];
      codeWithExports = codeWithExports + "; self['" + myExport + "']=" + myExport;
    }
    // Can be replaced by eval when all koans have exports.
    globalEval(codeWithExports);
  };

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

  (function(koans, log, i18n) {

    var I18N;
    var code;
    var koanId;
    var testIndex;
    var language;

    var readCode = function() {

      var result;
      log.clear();

      try {
        eval(code);
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

      var koan = koans.getById(koanId);
      var result;

      try {
        evalAndExport(code, koan.exports);
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
      var koansMinUrl = language === "de" ? "../koans-min/koans.js" : "../../en/js/koans-min/koans.js";
      importScripts(koansMinUrl);
    };

    onmessage = function(event) {

      code = event.data.code;
      testIndex = event.data.testIndex;
      koanId = event.data.koanId;
      language = event.data.language;
      var action = event.data.action;

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

  })(jshero.koans,
    jshero.log,
    jshero.i18n);

})();