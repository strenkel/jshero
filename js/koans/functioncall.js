jshero.koans.add({

  id: "functioncall",

  title: "Funktionsaufrufe",

  lesson: `Wichtig ist der Unterschied zwischen der Definition und dem Aufruf einer Funktion.
    Mit der Definition wird festgelegt, was die Funktion machen soll. Sie wird dabei nicht ausgeführt. Sie wird lediglich zur Ausführung bereitgestellt.
    Erst mit ihrem Aufruf wird die Funktion ausgeführt. Dann werden die Anweisung im Funktionsblock der Reihe nach abgearbeitet.
    Definiert werden Funktionen mit dem Schlüsselwort <code>function</code>. Ist die Funktion einer Variablen zugewiesen, geschiet der Aufruf der Funktion über diese Variable.
    Funktionen werden einmal definiert, um sie dann an verschiedenen Programmstellen durch ihren Aufruf zu nutzen.`,

  task: `Deklariere eine Variable <code>begruesse</code> und weise ihr eine Funktion zu, die <code>"Moin!"</code> zurückgibt.
    Deklariere eine Variable <code>begruessung</code>. Rufe die Funktion auf und weise der Variablen <code>begruessung</code> die Rückgabe dieses Aufrufs zu.`,

  beforeTests: function() {
    if (typeof begruesse !== "undefined") {
      hallo = undefined;
    }
    if (typeof begruessung !== "undefined") {
      begruessung = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof begruesse === 'function';
      var msg;
      if (ok) {
        msg = '<code>begruesse</code> ist eine Funktion.';
      } else {
        msg = '<code>begruesse</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = begruesse();
        ok = result === "Moin!";
        if (ok) {
          msg = '<code>begruesse()</code> gibt <code>"Moin!"</code> zurück.';
        } else {
          msg = '<code>begruesse()</code> gibt nicht <code>"Moin!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
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
    },

    function() {
      var ok = typeof begruessung !== 'undefined';
      var msg;
      if (ok) {
        msg = "<code>begruessung</code> hat einen Wert.";
      } else {
        msg = "<code>begruessung</code> hat keinen Wert.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = begruessung === "Moin!";
      var msg;
      if (ok) {
        msg = '<code>begruessung</code> hat den Wert "Moin!".';
      } else {
        msg = '<code>begruessung</code> hat nicht den Wert <code>"Moin!"</code>, sondern den Wert <code>' + JSON.stringify(begruessung) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }
  ]

});
