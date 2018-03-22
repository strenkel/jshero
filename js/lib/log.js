if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Override console.log to test the logging and show it in the test output.
 */
(function() {

  var logs = [];

  if (typeof console === "undefined") {
    console = { log: function() { } };
  }

  var origConsoleLog = console.log;

  /**
   * console.log for usage in exercise code.
   */
  console.log = function() {
    logs.push(arguments[0]);
    origConsoleLog.apply(null, arguments);
  }

  /**
   * For usage in exercise code.
   *
   * @param log, String
   * @deprecated use console.log in exercise code
   */
  jshero.log = function(log) {
    logs.push(log);
  };

  /**
   * For usage in management-code.
   */
  jshero.clearLogs = function() {
    logs = [];
  };

  /**
   * For usage in management-code.
   */
  jshero.getLogs = function() {
    return logs;
  };

  /**
   * Tests whether log was loggt.
   * For usage in management-code.
   *
   * @param {*} log
   * @returns true | false
   */
  jshero.hasLog = function(log) {
     for (var i =0, l = logs.length; i < l ; i++) {
       if (logs[i] === log) {
         return true;
       }
     }
     return false;
  }

})();
