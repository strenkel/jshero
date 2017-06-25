if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Write messages and controls in the messages-Element.
 */
jshero.message = (function() {

  var messageRoot = document.getElementById('messages');

  /**
   * Write a message-Element.
   *
   * @param message, String
   * @param type, Boolean, the color of the message, true: green, false: red
   * @param e, Exception
   * @param logs, [String]
   */
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
      errormessage = errormessage + e; // converts e to String
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

  /**
   * Write a NEXT-Botton.
   */
  var goto = function(url) {
    var link = document.createElement('a');
    link.href = url;
    link.innerHTML = "Weiter";
    link.className = "link-button";
    messageRoot.appendChild(link);
    link.focus();
  };

  /**
   * Remove all message-Elements.
   */
  var clear = function() {
    messageRoot.innerHTML = null;
  };

  return {
    log: log,
    goto: goto,
    clear: clear
  };

})();
