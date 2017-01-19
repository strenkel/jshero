jshero.koans.add({

  id: "bool",

  title: "Wahrheitswerte",

  lesson: 'Der dritte wichtige Datentyp neben Strings und Zahlen sind Wahrheitswerte. Sie werden auch boolesche Werte genannt. Boolesche Werte kennen nur zwei Zustände: ' +
    '<code>true</code> und <code>false</code>. Mit booleschen Werten kann man ähnlich "rechnen" wie mit Zahlen. JavaScript kennt drei boolesche Operatoren: ' +
    '<code>&&</code> (und), <code>||</code> (oder) und <code>!</code> (nicht). Das Ergebnis dieser Operationen ist wieder ein boolescher Wert. ' +
    '<code>&&</code> verknüpft zwei boolsche Werte. Sind beide Werte <code>true</code>, ist das Ergebnis auch <code>true</code>. In allen anderen Fällen ' +
    'ist es <code>false</code>. Bei <code>||</code> ist das Ergebnis <code>false</code>, wenn beide Eingangswerte auch <code>false</code> sind. In  allen ' +
    'anderen Fällen ist das Ergebnis <code>true</code>. <code>!</code> wird nur auf einen booleschen Wert angewendet und invertiert diesen Wert: aus ' +
    '<code>true</code> wird <code>false</code> und aus <code>false</code> wird <code>true</code>.' +
    '<pre><code>var x1 = true && false;<br>var x2 = !x1;<br>var x3 = x1 || x2;</code></pre>' +
    '<code>x1</code> ist <code>false</code>,  <code>x2</code> ist <code>true</code> und <code>x3</code> ist ebenfalls <code>true</code>.',
        
  task: 'Schreibe eine Funktion <code>nand</code>, die zwei boolesche Werte als Parameter entgegennimmt. Die Rückgabe der Funktion soll <code>false</code> sein, ' +
    'wenn beide Paramter <code>true</code> sind. In den anderen Fällen soll die Rückgabe <code>true</code> sein. <code>nand(true, true)</code> ' +
    'soll <code>false</code> liefern, <code>nand(true, false)</code> soll <code>true</code> zurückgeben.',

  beforeTests: function() {
    if (typeof nand !== "undefined") {
      nand = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof nand === 'function';
      var msg;
      if (ok) {
        msg = "<code>nand</code> ist eine Funktion.";
      } else {
        msg = "<code>nand</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = nand.length === 2;
      var msg;
      if (ok) {
        msg = "<code>nand</code> hat zwei Parameter.";
      } else {
        msg = "<code>nand</code> hat nicht 2, sondern " + nand.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = nand(true, true);
        ok = result === false;
        if (ok) {
          msg = '<code>nand(true, true)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>nand(true, true)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>nand(true, true)</code>.";
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
        var result = nand(true, false);
        ok = result === true;
        if (ok) {
          msg = '<code>nand(true, false)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>nand(true, false)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>nand(true, false)</code>.";
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

  ]

});
