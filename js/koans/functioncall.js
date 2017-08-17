jshero.koans.add({

  id: "functioncall",

  title: "Funktionsaufrufe",

  lesson: 'Wichtig ist der Unterschied zwischen der Definition und dem Aufruf einer Funktion. ' +
    'Mit der Definition wird festgelegt, was die Funktion machen soll. Sie wird dabei nicht ausgeführt. Sie wird lediglich zur Ausführung bereitgestellt. ' +
    'Erst mit ihrem Aufruf wir die Funktion ausgeführt. Dann werden die Anweisung im Funktionsblock der Reihe nach abgearbeitet. ' +
    'Funktionen werden einmal definiert, um sie dann an ganz verschiedenen Programmstellen durch ihren Aufruf zu nutzen.',
        
  task: 'Schreibe eine Funktion <code>hallo</code>, die <code>"Moin"</code> zurückgibt. ' +
    'Rufe die Funktion auf und weise einer Variablen <code>begruessung</code> die Rückgabe dieses Aufrufs zu.',

  beforeTests: function() {
    if (typeof hallo !== "undefined") {
      hallo = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof hallo === 'function';
      var msg;
      if (ok) {
        msg = '<code>hallo</code> ist eine Funktion.';
      } else {
        msg = '<code>hallo</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var ok, msg, e;
      try {
        var result = hallo();
        ok = result === "Hallo Welt!";
        if (ok) {
          msg = '<code>hallo()</code> gibt <code>"Hallo Welt!"</code> zurück.';
        } else {
          msg = '<code>hallo()</code> gibt nicht <code>"Hallo Welt!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>hallo()</code>.";
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }
  ]

});
