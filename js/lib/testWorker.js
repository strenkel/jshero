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

    var koansMinUrl = language === "de" ? "../koans-min/koans.js" : "../../en/js/koans-min/koans.js";
    importScripts(koansMinUrl);

    var koan = koans.getById(koanId);
    var result;

    try {
      globalEval(code);
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

  var initI18n = function() {
    i18n.setLanguage(language);
    I18N = i18n.get;
  };

  onmessage = function(event) {

    code = event.data.code;
    testIndex = event.data.testIndex;
    koanId = event.data.koanId;
    language = event.data.language;

    initI18n();

    var result;
    if (koanId) {
      result = testCode();
    } else {
      result = readCode();
    }
    postMessage(result);
  };

})(jshero.koans,
  jshero.log,
  jshero.i18n);