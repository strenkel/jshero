if (typeof jshero === "undefined") {
  var jshero = {};
}

(function() {

  var logs = []; 

  jshero.log = function(log) {
    logs.push(log);
  };

  jshero.clearLogs = function() {
    logs = [];
  };

  jshero.getLogs = function() {
    return logs;
  }

})();
