jshero.koans.add({

  id: "mean",

  title: "Klammern",

  lesson: 'Ebenso wie in der Mathematik gilt in JavaScript die Punkt-vor-Strichrechnung. Multiplikation und Division werden vor Addition und Subtraktion ' +
  'ausgeführt. Möchte man zuerst die Strichrechnung ausführen, verwendet man genauso wie in der Mathematik Klammern.' +
  '<pre><code>var x1 = 3 + 4 * 2;<br>var x2 = (3 + 4) * 2;</code></pre>' +
  '<code>x1</code> hat den Wert <code>11</code>, der Wert von <code>x2</code> ist <code>14</code>.',
        
  task: 'Schreibe eine Funktion <code>mittelwert</code>, die zwei Zahlen als Parameter entgegennimmt und deren Mittelwert zurückgibt. ' +
  '<code>mittelwert(1, 2)</code> sollte <code>1.5</code> ergeben.',

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
