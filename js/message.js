if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.message = (function() {

  var messageRoot = document.getElementById('messages');

  var log = function(message, type, e, logs) {

    logs = logs || [];
    var logsElm = document.createElement('div');
    logsElm.id = "logs";
    for (var i = 0, l = logs.length; i < l; i++) {
      var logElm = document.createElement('div');
      logElm.innerHTML = logs[i];
      logsElm.appendChild(logElm);
    }

    var errormessage = "";
    if (e) {
      errormessage = errormessage + e;
      if (e.lineNumber != null && e.columnNumber != null) {
        // mozilla
        errormessage = errormessage + " (Zeile: " + e.lineNumber + ", Reihe: " + e.columnNumber + ")";
      } else if (e.line != null) {
        // safari
        errormessage = errormessage + " (Zeile: " + e.line + ")";
      }
      errormessage = errormessage + ". ";
    }


    var messageElm = document.createElement('div');
    messageElm.innerHTML = errormessage + message;
    var paragraph = document.createElement('p');
    if (logs.length > 0) {
      paragraph.appendChild(logsElm);
    }
    paragraph.appendChild(messageElm);
    paragraph.className = type ? 'green' : 'red';
    messageRoot.appendChild(paragraph);
  };

  var goto = function(url) {
    var link = document.createElement('a');
    link.href = url;
    link.innerHTML = "Weiter";
    link.className = "link-button";
    messageRoot.appendChild(link);
    link.focus();
  };

  var clear = function() {
    messageRoot.innerHTML = null;
  };

  return {
    log: log,
    goto: goto,
    clear: clear
  };

})();
