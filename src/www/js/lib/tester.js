if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Only for usuage in pages build from main.html!
 */
jshero.tester = (function(koanId, i18n, LANGUAGE) {

  i18n.setLanguage(LANGUAGE);

  // const
  var I18N = i18n.get;
  var NO_WORKER = typeof Worker === "undefined";
  var WORKER_URL = LANGUAGE === "de" ? "../js/lib/testWorker.js" : "../../js/lib/testWorker.js";
  WORKER_URL += "?v=310";

  var code; // String
  var testNr; // Integer
  var results; // [TestResult]
  var callback;

  // --- PUBLIC METHODS ---

  /**
   * Read in code and run all tests.
   * callback will be called with [TestResult].
   * TestResult is defined in message.js.
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
    
    // check Worker
    if (NO_WORKER) {
      results.push({
        ok: false,
        oldBrowser: true,
        msg: I18N("oldBrowser")
      });
      callback();
      return;
    }

    // check no code
    if (code.length === 0) {
      results.push({
        ok: false,
        msg: I18N("writeCode")
      });
      callback();
      return;
    }

    readCode(evalResultAndRunNextTest);
  };

  // --- PRIVATE METHODS ---

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
        koanId: koanId,
        testIndex: testNr
      });

      endlessLoopTimeout = endlessLoopController(I18N("endlessLoopOnTest"), finishTest);
    },
      testResultCallback
    );
  };

  var evalResultAndRunNextTest = function(result) {
    results.push(result);
    testNr++;
    if (result.ok && !result.isLast) {
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

})(jshero.actualKoan.getId(),
  jshero.i18n,
  jshero.language.LANGUAGE);