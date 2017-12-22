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
        return jshero.testutil.assert_isFunction('mittelwert');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('mittelwert', 2);
    },

    function() {
        return jshero.testutil.assert_functionReturns('mittelwert(1, 2)', 1.5);
    },

    function() {
        return jshero.testutil.assert_functionReturns('mittelwert(0, 0)', 0);
    },

    function() {
        return jshero.testutil.assert_functionReturns('mittelwert(3, -1)', 1);
    }
    
  ]

});
