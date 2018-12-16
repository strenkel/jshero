if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Override console.log to test the logging and show it in the test output.
 * Original console.log is unchanged.
 */
jshero.log = (function() {

  var logs = [];

  if (typeof console === "undefined") {
    console = {
      log: function() { }
    };
  }

  var origConsoleLog = console.log;

  /**
   * console.log for usage in exercise code.
   * Handles the first argument for test output.
   */
  console.log = function() {
    logs.push("" + arguments[0]);
    origConsoleLog.apply(console, arguments);
  }

  var clear = function() {
    logs = [];
  };

  var getAll = function() {
    return logs;
  };

  /**
   * Tests whether log was loggt.
   *
   * @param {*} log
   * @returns true | false
   */
  var hasLog = function(log) {
    for (var i = 0, l = logs.length; i < l; i++) {
      if (logs[i] === log) {
        return true;
      }
    }
    return false;
  };

  // For usage in management-code.
  return {
    getAll: getAll,
    clear: clear,
    hasLog: hasLog
  };

})();
