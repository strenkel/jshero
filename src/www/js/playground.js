(function(msg, codeArea, util, storage, log, i18n, LANGUAGE) {

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
        log.clear();
        evalCode(code);
        var logs = log.getAll();
        if (logs.length > 0) {
          msg.log({
            ok: true,
            logs: logs
          });
        } else {
          var message = I18N("useConsole");
          msg.log({
            ok: false,
            msg: message
          });
        }
      } catch (e) {
        msg.log({
          ok: false,
          msg: I18N("runError"),
          e: e,
          logs: log.getAll()
        });
      }
    }
    util.scrollToBottom();

    // see main.js method testCode
    return false;
  };

  /**
   * Eval code in separate function scope.
   * So we can't overwrite variables in management code with test code.
   * 
   * @param {String} code 
   */
  var evalCode = function(code) {
    eval(code);
  };

  var showExample = function() {
    var code = 'var hello = function() {\n  return "Hello world!";\n};\n\n';
    code = code + 'console.log("hello() returns:");\n';
    code = code + 'console.log(hello());';
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
    codeArea.clear();
    msg.clear();
  }

  util.onclick(testButton, runCode);
  util.onclick(clearButton, clearCode);
  util.onclick(exampleLink, showExample);

  window.onload = insertCodeFromStorage;

})(jshero.message,
  jshero.code,
  jshero.util,
  jshero.storage,
  jshero.log,
  jshero.i18n,
  jshero.language.LANGUAGE);
