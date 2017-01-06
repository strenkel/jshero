jshero.koans.add({

  id: 'break',

  title: 'break und continue',

  lesson: 'Mit <code>break</code> wird eine Schleife beendet. Das Programm wird nach der Schleife fortgesetzt. ' +
    '<pre><code>var satz = "So ist das.";<br>' +
    'for (var i = 0; i < satz.length; i++) {<br>' +
    '  if (satz.charAt(i) === " ") {<br>' +
    '    break;<br>' +
    '  }<br>' +
    '}<br>' +
    'var laengeErstesWort = i;</code></pre>' +
    'Ist das i-te Zeichen in <code>satz</code> das Leerzeichen, wird der <code>break</code> - Befehl ausgeführt. Die Schleife wird beendet und die Codeausführung ' +
    'nach der Schleife fortgesetzt.<br>' +
    'Mit <code>continue</code> wird der aktuelle Schleifendurchlauf beendet. Das Programmausführung springt zum Schleifenkopf.' +
    '<pre><code>var summe = 0;<br>' +
    'for (var i = 0; i < 10; i++) {<br>' +
    '  if (i % 2 === 0) {<br>' +
    '    continue;<br>' +
    '  }<br>' +
    '  summe = summe + i;<br>' +
    '}<br></code></pre>',

  task: '',

  beforeTests: function() {
    if (typeof einer !== "undefined") {
      einer = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof einer === 'function';
      var msg;
      if (ok) {
        msg = "<code>einer</code> ist eine Funktion.";
      } else {
        msg = "<code>einer</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = einer.length === 1;
      var msg;
      if (ok) {
        msg = "<code>einer</code> hat 1 Parameter.";
      } else {
        msg = "<code>einer</code> hat nicht 1, sondern " + einer.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = einer(0);
        ok = result === 0;
        if (ok) {
          msg = '<code>einer(0)</code> gibt <code>0</code> zurück.';
        } else {
          msg = '<code>einer(0)</code> gibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>einer(0)</code>.';
        e = exc;
        console.log(msg, e);
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
        var result = einer(17);
        ok = result === 7;
        if (ok) {
          msg = '<code>einer(17)</code> gibt <code>7</code> zurück.';
        } else {
          msg = '<code>einer(17)</code> gibt nicht <code>7</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>einer(17)</code>.';
        e = exc;
        console.log(msg, e);
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});
