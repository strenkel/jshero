(function(msg, codeArea, util) {

  var testButton = document.getElementById("test-button");
  var exampleLink = document.getElementById("show-example");

  var runCode = function() {
    msg.clear();
    var code = codeArea.get();
    if (code.length === 0) {
      msg.log("Schreibe deinen Code in das Eingabefeld.", false);
    } else {
      try {
        jshero.clearLogs();
        eval(code);
        var logs = jshero.getLogs();
        if (logs.length > 0) {
           msg.log("", true, null, logs);
        } else {
           var message = "Benutze <code>jshero.log</code> zur Ausgabe!";
           msg.log(message, false);
        }
      } catch(e) {
        msg.log("Fehler beim Ausführen des Codes!", false, e);
        console.log("Fehler beim Ausführen des Codes!", e);
      }
    }
    util.scrollToButtom();
  };

  var showExample = function() {
    var code = 'var hallo = function() {\n  return "Hallo Welt!";\n};\n\n';
    code = code + 'jshero.log("Der Aufruf \'hallo()\' liefert:");\njshero.log(hallo());';
    codeArea.set(code);
  };

  testButton.addEventListener("click", runCode);
  testButton.addEventListener("touchstart", runCode);

  exampleLink.addEventListener("click", showExample);
  exampleLink.addEventListener("touchstart", showExample);

})(jshero.message, jshero.code, jshero.util);
