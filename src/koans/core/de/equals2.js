jshero.koans.add({

  id: 'equals2',

  title: 'Drei gleiche Werte',

  lesson: 'Die folgende Aufgabe soll das Zusammenspiel von strikter Gleichheit und booleschen Operatoren vertiefen.',

  task: `Schreibe eine Funktion <code>equals</code>, die 3 Werte auf strikte Gleichheit überprüft. Die Funktion soll nur
dann <code>true</code> ergeben, wenn alle 3 Werte strikt gleich sind.<br><br>
Beispiel: <code>equals(1, 1, 1)</code> soll <code>true</code> und <code>equals(1, 1, 2)</code> soll <code>false</code> ergeben.`,

  hint: `<pre><code>function equals(a, b, c) {
  // Vergleiche a und b sowie a und c.
  // Verknüpfe das Ergebnis beider Vergleiche mit &&.
}</code></pre>`,

  solution: `<pre><code>function equals(a, b, c) {
  return a === b && a === c;
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('equals');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('equals', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('equals(1, 1, 1)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('equals(1, 1, 2)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('1', 1, 1)", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals(1, '1', 1)", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals(1, 1, '1')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('klein', 'klein', 'klein')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('klein', 'klein', 'groß')", false);
    }
  ]

});
