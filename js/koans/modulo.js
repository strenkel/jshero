jshero.koans.add({

  id: "modulo",

  title: "Modulo",

  lesson: 'Ein weiterer arithmetischer Operator ist Modulo. Er berechnet den Rest einer Division und wird mit dem Prozentzeichen <code>%</code> notiert.' +
    '<pre><code>var x = 7 % 2;<br>' +
    'var y = 20 % 3;</code></pre>' +
    '7 geteilt durch 2 ergibt 3 Rest 1. <code>x</code> ist also <code>1</code>. 20 geteilt durch 3 ergibt 6 Rest 2. <code>y</code> ist also <code>2</code>.',

  task: 'Schreibe eine Funktion <code>einer</code>, die eine natürliche Zahl entgegenimmt und die Ziffer der Einer-Stelle zurückgibt. ' +
    '<code>einer(2674)</code> sollte <code>4</code> zurückgeben.',

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
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});
