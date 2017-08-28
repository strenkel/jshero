jshero.koans.add({

  id: 'stringcharat',

  title: 'String: charAt()',

  lesson: 'Um aus einem String das Zeichen an einer bestimmten Stelle zu erhalten, verwendet man die Methode ' +
  '<code>charAt(index)</code>. Der Paramter <code>index</code> gibt die Stelle des Zeichens innerhalb der Zeichenkette an. ' +
  'Dabei hat das erste Zeichen einer Zeichenkette den Index 0:' +
  '<pre><code>var n1 = "Maria".charAt(0);<br>var n2 = "Maria".charAt(1);<br>var n3 = "Maria".charAt(5);<br>var n4 = "Maria".charAt();</code></pre>' +
  '<code>n1</code> hat den Wert <code>"M"</code> und <code>n2</code> hat den Wert <code>"a"</code>. Ist der Index größer als der Index des letzten Zeichens, ' +
  'wird der leere String zurückgegeben. <code>n3</code> hat also den Wert <code>""</code>. ' +
  'Wird kein Parameter übergeben, so wird das Zeichen mit dem Index <code>0</code> zurückgegeben. Man sagt: der Default-Wert für <code>index</code> ' +
  'ist <code>0</code>. Der Wert von <code>n4</code> ist also auch <code>"M"</code>.',

  task: 'Schreibe eine Funktion <code>abkuerzung</code>, die zwei Strings als Parameter entgegennimmt und als Rückgabe die Anfangsbuchstaben ' +
  'dieser Strings zurückgibt. <code>abkuerzung("Hansestadt", "Bremen")</code> sollte <code>"HB"</code> zurückliefern.',

  beforeTests: function() {
    if (typeof abkuerzung !== "undefined") {
      abkuerzung = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof abkuerzung === 'function';
      var msg;
      if (ok) {
        msg = '<code>abkuerzung</code> ist eine Funktion.';
      } else {
        msg = '<code>abkuerzung</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = abkuerzung.length === 2;
      var msg;
      if (ok) {
        msg = "<code>abkuerzung</code> hat zwei Parameter.";
      } else {
        msg = "<code>abkuerzung</code> hat nicht 2, sondern " + abkuerzung.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = abkuerzung('Hansestadt', 'Bremen');
        ok = result === "HB";
        if (ok) {
          msg = '<code>abkuerzung("Hansestadt", "Bremen")</code> gibt <code>"HB"</code> zurück.';
        } else {
          msg = '<code>abkuerzung("Hansestadt", "Bremen")</code> gibt nicht <code>"HB"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        e = exc;
        ok = false;
        msg = 'Fehler beim Aufruf von <code>abkuerzung("Hansestadt", "Bremen")</code>.';
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
        var result = abkuerzung('Java', 'Script');
        ok = result === "JS";
        if (ok) {
          msg = '<code>abkuerzung("Java", "Script")</code> gibt <code>"JS"</code> zurück.';
        } else {
          msg = '<code>abkuerzung("Java", "Script")</code> gibt nicht <code>"JS"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>abkuerzung("Java", "Script")</code>.';
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
