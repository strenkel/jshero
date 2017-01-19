jshero.koans.add({

  id: "math",

  title: "Math",

  lesson: 'Viele mathematische Funktionen sind in dem Objekt <code>Math</code> zusammengefasst. ' +
    'So gibt <code>Math.sqrt(x)</code> die Quadratwurzel (engl.: square root) zurück ' +
    'und mit <code>Math.pow(x, y)</code> berechnet man die Potenz (engl.: power) x hoch y.' +
    '<pre><code>var y1 = Math.sqrt(9);<br>var y2 = Math.pow(10, 3);</code></pre>' +
    '<code>y1</code> hat den Wert <code>3</code> und <code>y2</code> den Wert <code>1000</code> (10&sup3; = 10 * 10 * 10 = 1000). ',
        
  task: 'Schreibe eine Funktion <code>hypotenuse</code>, die die Länge der Hypotenuse eines rechtwinkligen Dreiecks berechnet. ' +
    'Übergeben wird der Funktion als Parameter die Längen der beiden Katheten. Tipp: In einem rechtwinkligen Dreieck gilt der Satz ' +
    'des Pythagoras. Sind a, b die Längen der beiden Katheten und c die Länge der Hypotenuse, so gilt: a&sup2; + b&sup2; = c&sup2;. ' +
    'Da 3&sup2; + 4&sup2; = 5&sup2; gilt, sollte <code>hypotenuse(3, 4)</code> den Wert <code>5</code> liefern.',

  beforeTests: function() {
    if (typeof hypotenuse !== "undefined") {
      hypotenuse = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof hypotenuse === 'function';
      var msg;
      if (ok) {
        msg = "<code>hypotenuse</code> ist eine Funktion.";
      } else {
        msg = "<code>hypotenuse</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = hypotenuse.length === 2;
      var msg;
      if (ok) {
        msg = "<code>hypotenuse</code> hat zwei Parameter.";
      } else {
        msg = "<code>hypotenuse</code> hat nicht 2, sondern " + hypotenuse.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = hypotenuse(3, 4);
        ok = result === 5;
        if (ok) {
          msg = '<code>hypotenuse(3, 4)</code> ergibt <code>5</code>.';
        } else {
          msg = '<code>hypotenuse(3, 4)</code> ergibt nicht <code>5</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>hypotenuse(3, 4)</code>.";
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
        var result = hypotenuse(5, 12);
        ok = result === 13;
        if (ok) {
          msg = '<code>hypotenuse(5, 12)</code> ergibt <code>13</code>.';
        } else {
          msg = '<code>hypotenuse(5, 12)</code> ergibt nicht <code>13</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>hypotenuse(5, 12)</code>.";
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
