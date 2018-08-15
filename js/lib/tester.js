if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.tester = (function(koan, log, i18n, LANGUAGE) {

  i18n.setLanguage(LANGUAGE);
  var I18N = i18n.get;

  var HAS_WORKER = typeof Worker !== "undefined";
  var WORKER_URL = LANGUAGE === "de" ? "js/lib/testWorker.js" : "../js/lib/testWorker.js";
  var code;
  var testNr = -1;
  var results = [];
  var callback;

  // --- PUBLIC METHODS ---

  /**
   * Read in code and run all tests.
   * callback will be called with [TestResult].
   *
   * @param {String} code
   * @param {Function} callback
   */
  var run = function(myCode, myCallback) {

    // init global variables
    code = myCode;
    results = [];
    testNr = -1;
    callback = function() {
      myCallback(results);
    };

    // check no code
    if (code.length === 0) {
      results.push({
        ok: false,
        msg: I18N("writeCode")
      });
      callback();
      return;
    }

    koan.beforeTests();
    readCode(evalResultAndRunNextTest);
  };

  // --- PRIVATE METHODS ---

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
   * Create an initialized worker.
   *
   * @param {function(Worker)} successCallback
   * @param {function(TestResult)} errorCallback
   */
  var createWorker = function(successCallback, errorCallback) {

    var worker = new Worker(WORKER_URL);

    worker.onerror = function(event) {
      errorCallback({
        ok: false,
        msg: I18N("unknownError"),
        e: event
      });
    };

    worker.onmessage = function() {
      successCallback(worker);
    };

    worker.postMessage({
      action: "init",
      language: LANGUAGE
    });
  };

  var readCode = function(testResultCallback) {

    createWorker(function(worker) {

      var endlessLoopTimeout;

      var finishRead = function(result) {
        clearTimeout(endlessLoopTimeout);
        worker.terminate();
        testResultCallback(result);
      };

      worker.onmessage = function(event) {
        finishRead(event.data);
      };

      worker.onerror = function(event) {
        finishRead({
          ok: false,
          msg: I18N("unknownError"),
          e: event
        });
      };

      worker.postMessage({
        action: "read",
        code: code
      });

      endlessLoopTimeout = endlessLoopController(I18N("endlessLoopOnRead"), finishRead);
    },
      testResultCallback
    )
  };

  /**
   * Fallback for browsers not supporting Worker (IE<10).
   * Can't stop endless loops.
   */
  var readCodeFallback = function(testResultCallback) {

    var result;
    log.clear();

    try {
      globalEval(code);
      result = {
        ok: true,
        msg: I18N("noSyntaxError")
      };
    } catch (e) {
      result = {
        ok: false,
        msg: I18N("syntaxError"),
        e: e
      };
    }
    result.logs = log.getAll();
    testResultCallback(result);
  };

  readCode = HAS_WORKER ? readCode : readCodeFallback;

  var runTest = function(testResultCallback) {

    createWorker(function(worker) {

      var endlessLoopTimeout;

      var finishTest = function(result) {
        clearTimeout(endlessLoopTimeout);
        worker.terminate();
        testResultCallback(result);
      };

      worker.onmessage = function(event) {
        finishTest(event.data);
      };

      worker.onerror = function(event) {
        finishTest({
          ok: false,
          msg: I18N("unknownError"),
          e: event
        });
      };

      worker.postMessage({
        action: "test",
        code: code,
        language: LANGUAGE,
        koanId: koan.id,
        testIndex: testNr
      });

      endlessLoopTimeout = endlessLoopController(I18N("endlessLoopOnTest"), finishTest);
    },
      testResultCallback
    );
  };

  /**
   * Fallback for browsers not supporting Worker (IE<10).
   * Can't stop endless loops.
   */
  var runTestFallback = function(testResultCallback) {

    var result;
    log.clear();

    try {
      globalEval(code);
      result = koan.tests[testNr]();
    } catch (exc) {
      result = {
        ok: false,
        msg: I18N("unknownError"),
        e: exc
      };
    }
    result.logs = log.getAll();
    testResultCallback(result);
  };

  runTest = HAS_WORKER ? runTest : runTestFallback;

  var evalResultAndRunNextTest = function(result) {
    results.push(result);
    testNr++;
    if (result.ok && testNr < koan.tests.length) {
      runTest(evalResultAndRunNextTest);
    } else {
      callback();
    }
  };

  var endlessLoopController = function(message, myCallback) {
    return setTimeout(function() {
      myCallback({
        ok: false,
        msg: message
      });
    }, 2000);
  };

  return {
    run: run
  };

})(jshero.actualKoan.getKoan(),
  jshero.log,
  jshero.i18n,
  jshero.language.LANGUAGE);