if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Global logging-function used in the exercise-code.
 */
(function() {

  var logs = []; 

  /**
   * For usage in exercise-code.
   *
   * @param log, String
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
  }

})();
