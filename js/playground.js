(function(msg, codeArea, util, storage, i18n, LANGUAGE) {

  i18n.setLanguage(LANGUAGE);
  var I18N = i18n.get;

  var testButton = document.getElementById("test-button");
  var clearButton = document.getElementById("clear-button");
  var exampleLink = document.getElementById("show-example");

  var runCode = function() {

    // see main.js method testCode
    testButton.focus();

    msg.clear();
    var code = codeArea.get();
    if (code.length === 0) {
      msg.log({
        ok: false,
        msg: I18N("writeCode")
      });
      storage.removePlaygroundCode();
    } else {
      storage.setPlaygroundCode(code);
      try {
        jshero.clearLogs();
        eval(code);
        var logs = jshero.getLogs();
        if (logs.length > 0) {
          msg.log({
            ok: true,
            logs: logs
          });
        } else {
          var message = "Benutze <code>console.log</code> zur Ausgabe!";
          msg.log({
            ok: false,
            msg: message
          });
        }
      } catch (e) {
        msg.log({
          ok: false,
          msg: "Fehler beim Ausführen des Codes!",
          e: e,
          logs: jshero.getLogs()
        });
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

})(jshero.message, jshero.code, jshero.util, jshero.storage, jshero.i18n, jshero.language.LANGUAGE);
