jshero.koans.add({

  id: "math",

  title: "Math",

  lesson: 'Einige nützliche mathematische Konstanten und Funktionen sind in dem Objekt <code>Math</code> zusammengefasst. ' +
    'Unter <code>Math.PI</code> findet sich die Kreiszahl &pi; (gerundet 3.14), <code>Math.sqrt(x)</code> gibt die Qudratwurzel (engl.: square root) zurück ' +
    'und mit <code>Math.pow(x, y)</code> berechnet man die Potenz (engl.: power) x hoch y.' +
    '<pre><code>var y1 = Math.sqrt(9);<br>var y2 = Math.pow(10, 3);</code></pre>' +
    '<code>y1</code> hat den Wert <code>3</code> und <code>y2</code> den Wert <code>1000</code> (10&sup3; = 10 * 10 * 10 = 1000). ' +
    'Weitere Konstanten und Funktionen von <code>Math</code> werden wir bei Bedarf kennen lernen.',
        
  task: 'Schreibe eine Funktion <code>hypotenuse</code>, die die Länge der Hypotenuse eines rechtwinkligen Dreiecks berechnet. ' +
    'Übergeben wird der Funktion als Parameter die Längen der beiden Katheten. Tipp: In einem rechtwinkligen Dreieck gilt der Satz ' +
    'des Pythagoras. Sind a, b die Längen der beiden Katheten und c die Länge der Hypotenuse, so gilt: a&sup2; + b&sup2; = c&sup2;. ' +
    'Da 3&sup2; + 4&sup2; = 5&sup2; gilt, sollte <code>hypotenuse(3, 4)</code> den Wert <code>5</code> liefern.',

  beforeTests: function() {
    if (typeof mittelwert !== "undefined") {
      mittelwert = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof mittelwert === 'function';
      var msg;
      if (ok) {
        msg = "<code>mittelwert</code> ist eine Funktion.";
      } else {
        msg = "<code>mittelwert</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = mittelwert.length === 2;
      var msg;
      if (ok) {
        msg = "<code>mittelwert</code> hat zwei Parameter.";
      } else {
        msg = "<code>mittelwert</code> hat nicht 2, sondern " + mittelwert.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = mittelwert(1, 2);
        ok = result === 1.5;
        if (ok) {
          msg = '<code>mittelwert(1, 2)</code> ergibt <code>1.5</code>.';
        } else {
          msg = '<code>mittelwert(1, 2)</code> ergibt nicht <code>1.5</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>mittelwert(1, 2)</code>.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = mittelwert(0, 0);
        ok = result === 0;
        if (ok) {
          msg = '<code>mittelwert(0, 0)</code> ergibt <code>0</code>.';
        } else {
          msg = '<code>mittelwert(0, 0)</code> ergibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>mittelwert(0, 0)</code>.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

  ]

});
