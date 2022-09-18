if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Write messages and controls in the messages-Element.
 * Singleton.
 */
jshero.message = (function(I18N) {

  var messageRoot = document.getElementById('messages');

  /**
   * Write a message-Element.
   *
   * @param testResult: {
   *   ok {Boolean}, // true = test passed
   *   logs {[String]}, // log messages
   *   e {Exception} // the exception in case of an error
   *   msg {String} // the i18n message
   *   oldBrowser {Boolean} // true = JS feature detection failed (e.g. no Worker support)
   *   isLast {Boolean}  // true = the last test
   * }
   */
  var log = function(testResult) {

    var errormessage = createErrorMessage(testResult.e);
    var baseMessageElm = createBaseMessageElm(errormessage, testResult.msg);
    var logsElm = createLogsElm(testResult.logs);
    var messageElm = createMessageElm(logsElm, baseMessageElm);

    messageElm.className = testResult.ok ? 'green' : 'red';
    messageRoot.appendChild(messageElm);
    return messageElm;
  };

  /**
   * Write a NEXT-Botton.
   */
  var goto = function(url) {
    var link = document.createElement('a');
    link.href = url;
    link.innerHTML = I18N("goon");
    link.className = "link-button";
    messageRoot.appendChild(link);
    link.focus();
    return link;
  };

  /**
   * Remove all message-Elements.
   */
  var clear = function() {
    messageRoot.innerHTML = "";
  };

  // --- private functions ---

  var createLogsElm = function(logs) {
    logs = logs || [];
    if (logs.length > 0) {
      var logsElm = document.createElement('div');
      logsElm.id = "logs";
      for (var i = 0, l = logs.length; i < l; i++) {
        var logElm = document.createElement('div');
        logElm.innerHTML = "> " + logs[i];
        logsElm.appendChild(logElm);
      }
      return logsElm;
    }
    return null;
  };

  var createErrorMessage = function(e) {
    var errormessage = "";
    if (e) {
      errormessage = errormessage + e.message;
      if (e.lineNumber != null && e.columnNumber != null) {
        // mozilla
        errormessage = errormessage + " (" + I18N("line") + ": " + e.lineNumber +
          ", " + I18N("column") + ": " + e.columnNumber + ")";
      }
      else if (e.line != null) {
        // safari
        errormessage = errormessage + " (Zeile: " + e.line + ")";
      }
      errormessage = errormessage + ". ";
    }
    return errormessage;
  };

  var createBaseMessageElm = function(errormessage, message) {
    message = message || "";
    var baseMessageElm = document.createElement('div');
    baseMessageElm.innerHTML = errormessage + message;
    return baseMessageElm;
  };

  var createMessageElm = function(logsElm, baseMessageElm) {
    var messageElm = document.createElement('p');
    if (logsElm) {
      messageElm.appendChild(logsElm);
    }
    messageElm.appendChild(baseMessageElm);
    return messageElm;
  };

  return {
    log: log,
    goto: goto,
    clear: clear
  };

})(jshero.i18n.get);

