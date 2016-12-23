jshero.koans.add({

  id: 'stringupper',

  title: 'String.toUpperCase()',

  lesson: 'Neben der Eigenschaft <code>length</code> besitzen Strings noch eine Reihe von Methoden. Das sind Funktionen, die direkt auf dem String angewendet werden. ' +
    'Wie die Eigenschaft <code>length</code> werden diese Methoden mit einem Punkt direkt dem String oder einer Variablen, die einen String enthält, angehängt. ' +
    'Da Methoden Funktionen sind, folgen in runden Klammern eingeschlossen die Parameter. ' +
    'Zwei dieser String-Methoden sind die parameterlosen Methoden <code>toUpperCase()</code> und <code>toLowerCase()</code>. ' +
    'Sie geben den String, auf dem sie angewendet werden, in Groß- bzw. Kleinbuchstaben zurück. Wichtig ist, dass der eigentliche String unverändert bleibt. ' +
    'Die Rückgabe dieser Methoden ist der in Groß- bzw. Kleinbuchstaben umgewandelte String.' + 
    '<pre><code>var stadt = "Prag";<br>var ausgabe = stadt.toUpperCase();</code/></pre>' +
    '<code>ausgabe</code> erhält den Wert <code>"PRAG"</code>. <code>stadt</code> hat weiterhin den Wert <code>"Prag"</code>.' +
    '<pre><code>ausgabe = stadt.toLowerCase();</code/></pre>' +
    'Jetzt hat <code>ausgabe</code> den Wert <code>"prag"</code>.' +
    '<pre><code>ausgabe = "Flug 714".toUpperCase();</code/></pre>' + 
    'Hier wird <code>toUpperCase()</code> direkt auf einen String angewendet. Der Wert von <code>ausgabe</code> ist <code>"FLUG 714"</code>. ' +
    'Zahlen und auch Sonderzeichen werden nicht verändert.',

  task: 'Schreibe eine Funktion <code>toCase</code>, die bei Übergabe eines Strings diesen aneinandergehängt in Klein- und in Großschreibung zurückgibt. ' +
    'Das Trennzeichen zwischen der Klein- und Großschreibung soll <code>-</code> sein. ' +
    '<code>toCase("Code")</code> sollte <code>"code-CODE"</code> zurückgeben.',

  beforeTests: function() {
    if (typeof toCase !== "undefined") {
      toCase = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof toCase === 'function';
      var msg;
      if (ok) {
        msg = '<code>toCase</code> ist eine Funktion.';
      } else {
        msg = '<code>toCase</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = toCase('Code');
        ok = result === "code-CODE";
        if (ok) {
          msg = '<code>toCase("Code")</code> gibt <code>"code-CODE"</code> zurück.';
        } else {
          msg = '<code>toCase("Code")</code> gibt nicht <code>"code-CODE"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>toCase("Code")</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg;
      try {
        var result = toCase('Maria');
        ok = result === "maria-MARIA";
        if (ok) {
          msg = '<code>toCase("Maria")</code> gibt <code>"maria-MARIA"</code> zurück.';
        } else {
          msg = '<code>toCase("Maria")</code> gibt nicht <code>"maria-MARIA"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>toCase("Maria")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }
  ]

});
