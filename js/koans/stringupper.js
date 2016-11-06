jshero.koans.add({

  id: "stringupper",

  title: "String.toUpperCase()",

  lesson: 'Neben der Eigenschaft <code>length</code> besitzen Strings noch eine Reihe von Methoden. Methoden sind Funktionen, die direkt auf dem String ausgeführt werden. ' +
    'Wie die Eigenschaft <code>length</code> werden diese Methoden mit einem Punkt direkt dem String oder einer Variablen, die einen String enthält, angehängt. Da Methoden Funktionen sind, ' +
    'werden anschließend noch in runden Klammern die Parameter aufgeführt. Zwei dieser String-Methoden sind <code>toUpperCase()</code> und >code>toLowerCase()</code>. ' +
    'Sie geben den String, auf dem sie angewendet werden, in Groß- bzw. Kleinbuchstaben zurück. Wichtig dabei ist, dass der eigentliche String unverändert bleibt. ',

  task: 'Schreibe eine Funktion <code>laenge</code>, die bei Übergabe eines Strings die Anzahl der Zeichen dieses Strings zurückgibt. ' +
    '<code>laenge("Franz")</code> sollte <code>5</code> zurückgeben.',

  beforeTests: function() {
    if (typeof echo !== "undefined") {
      echo = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof laenge === 'function';
      var msg;
      if (ok) {
        msg = '<code>laenge</code> ist eine Funktion.';
      } else {
        msg = '<code>laenge</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = laenge('Hallo Welt!');
        ok = result === 11;
        if (ok) {
          msg = '<code>laenge("Hallo Welt!")</code> gibt <code>11</code> zurück.';
        } else {
          msg = '<code>laenge("Hallo Welt!")</code> gibt nicht <code>11</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>laenge("Hallo Welt!")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = laenge('');
        ok = result === 0;
        if (ok) {
          msg = '<code>laenge("")</code> gibt <code>0</code> zurück.';
        } else {
          msg = '<code>laenge("")</code> gibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>laenge("")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }
  ]

});
