(function(msg, codeArea, util, storage, I18N) {

  var testButton = document.getElementById("test-button");
  var clearButton = document.getElementById("clear-button");
  var exampleLink = document.getElementById("show-example");

  var runCode = function() {

    // see main.js method testCode
    testButton.focus();

    msg.clear();
    var code = codeArea.get();
    if (code.length === 0) {
      msg.log(I18N("writeCode"), false);
      storage.removePlaygroundCode();
    } else {
      storage.setPlaygroundCode(code);
      try {
        jshero.clearLogs();
        eval(code);
        var logs = jshero.getLogs();
        if (logs.length > 0) {
          msg.log("", true, null, logs);
        } else {
          var message = "Benutze <code>console.log</code> zur Ausgabe!";
          msg.log(message, false);
        }
      } catch (e) {
        var logs = jshero.getLogs();
        msg.log("Fehler beim Ausführen des Codes!", false, e, logs);
      }
    }
    util.scrollToBottom();

    // see main.js method testCode
    return false;
  };

  var showExample = function() {
    var code = 'var hallo = function() {\n  return "Hallo Welt!";\n};\n\n';
    code = code + 'console.log("Der Aufruf \'hallo()\' liefert:");\nconsole.log(hallo());';
    codeArea.set(code);
  };

  var insertCodeFromStorage = function() {
    var code = storage.getPlaygroundCode();
    if (code) {
      codeArea.set(code);
    }
  }

  var clearCode = function() {
    storage.removePlaygroundCode();
    codeArea.set("");
  }

  testButton.onclick = runCode;
  testButton.ontouchstart = runCode;

  clearButton.onclick = clearCode;
  clearButton.ontouchstart = clearCode;

  exampleLink.onclick = showExample;
  exampleLink.ontouchstart = showExample;

  window.onload = insertCodeFromStorage;

})(jshero.message, jshero.code, jshero.util, jshero.storage, jshero.i18n.get);
