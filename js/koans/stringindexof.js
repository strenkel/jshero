jshero.koans.add({

  id: 'stringindexof',

  title: 'String.indexOf()',

  lesson: 'Um die Position eines Strings innerhalb eines anderen Strings zu bestimmen, verwendet man die Methode <code>indexOf()</code>:' +
    '<pre><code>' +
    'var n1 = "Fred Feuerstein".indexOf("Feuer");<br>' +
    'var n2 = "Fred Feuerstein".indexOf("Rauch");<br>' +
    'var n3 = "Fred Feuerstein".indexOf("FEUER");<br>' +
    '</code></pre>' +
    '<code>n1</code> ist <code>5</code>, da <code>"Feuer"</code> in <code>"Fred Feuerstein"</code> an der 5. Stelle beginnt. Wie üblich werden Strings von 0 an durchnummeriert. ' +
    'Kommt das Suchwort im aufrufenden String nicht vor, wird <code>-1</code> zurückgegeben. <code>n2</code> ist also <code>-1</code>. ' +
    'Die Methode <code>indexOf()</code> unterscheidet zwischen Groß- und Kleinschreibung. <code>n3</code> ist also auch <code>-1</code>.',

  task: 'Schreibe eine Funktion <code>indexOfIgnoreCase</code>, die 2 Strings entgegennimmt und wie die Methode <code>indexOf()</code> die Position des ' +
    'zweiten Strings im ersten String bestimmt. Im Unterschied zur Methode <code>indexOf()</code> soll die Groß- oder Kleinschreibung keine Rolle spielen. ' +
    'Sowohl <code>indexOfIgnoreCase("So", "so")</code> als auch <code>indexOfIgnoreCase("so", "So")</code> sollen <code>0</code> ergeben.',

  beforeTests: function() {
    if (typeof abkuerzung !== "undefined") {
      abkuerzung = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof indexOfIgnoreCase === 'function';
      var msg;
      if (ok) {
        msg = '<code>indexOfIgnoreCase</code> ist eine Funktion.';
      } else {
        msg = '<code>indexOfIgnoreCase</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = indexOfIgnoreCase.length === 2;
      var msg;
      if (ok) {
        msg = "<code>indexOfIgnoreCase</code> hat 2 Parameter.";
      } else {
        msg = "<code>abkuerzung</code> hat nicht 2, sondern " + indexOfIgnoreCase.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = indexOfIgnoreCase("Fred Feuerstein", "FEUER");
        ok = result === 5;
        if (ok) {
          msg = '<code>indexOfIgnoreCase("Fred Feuerstein", "FEUER")</code> gibt <code>5</code> zurück.';
        } else {
          msg = '<code>indexOfIgnoreCase("Fred Feuerstein", "FEUER")</code> gibt nicht <code>5</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>indexOfIgnoreCase("Fred Feuerstein", "FEUER")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = indexOfIgnoreCase("WILMA FEUERSTEIN", "feuer");
        ok = result === 6;
        if (ok) {
          msg = '<code>indexOfIgnoreCase("WILMA FEUERSTEIN", "feuer")</code> gibt <code>6</code> zurück.';
        } else {
          msg = '<code>indexOfIgnoreCase("WILMA FEUERSTEIN", "feuer")</code> gibt nicht <code>6</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>indexOfIgnoreCase("WILMA FEUERSTEIN", "feuer")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
