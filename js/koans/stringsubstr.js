jshero.koans.add({

  id: 'stringsubstr',

  title: 'String: substr()',

  lesson: `Die Methode <code>substr</code> extrahiert aus einen String einen Teilstring:

<pre><code>var see = "see and stop".substr(0, 3);
var and = "see and stop".substr(4, 3);
var stop = "see and stop".substr(8);</code></pre>

Der erste Parameter gibt an, von welcher Stelle an der Substring extrahiert werden soll.
Der zweite Parameter gibt an, wieviel Zeichen ab der festgelegten Stelle extrahiert werden sollen.
Ist der zweite Paramter nicht angegeben, so wird immer bis zum Ende des ursprüglichen Strings extrahiert.`,

  task: `Schreibe eine Funktion <code>firstWord</code>, die einen String entgegennimmt und das erste Wort
in diesem String zurückgibt. Das erste Wort sind dabei alle Zeichen bis zum ersten Leerzeichen.
<code>firstWord("Wo ist hier")</code> sollte <code>"Wo"</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof firstWord !== "undefined") {
      firstWord = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof firstWord === 'function';
      var msg;
      if (ok) {
        msg = '<code>firstWord</code> ist eine Funktion.';
      } else {
        msg = '<code>firstWord</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = firstWord.length === 1;
      var msg;
      if (ok) {
        msg = "<code>firstWord</code> hat 1 Parameter.";
      } else {
        msg = "<code>firstWord</code> hat nicht 1, sondern " + firstWord.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = firstWord("Wo ist hier");
        ok = result === "Wo";
        if (ok) {
          msg = '<code>firstWord("Wo ist hier")</code> gibt <code>"Wo"</code> zurück.';
        } else {
          msg = '<code>firstWord("Wo ist hier")</code> gibt nicht <code>"Wo"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>firstWord("Wo ist hier")</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = firstWord("Irres Licht");
        ok = result === "Irres";
        if (ok) {
          msg = '<code>firstWord("Irres Licht")</code> gibt <code>"Irres"</code> zurück.';
        } else {
          msg = '<code>firstWord("Irres Licht")</code> gibt nicht <code>"Irres"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>firstWord("Irres Licht")</code>.';
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
