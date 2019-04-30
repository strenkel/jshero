jshero.koans.add({

  id: 'equals2',

  title: 'Drei gleiche Werte',

  lesson: 'Die folgende Aufgabe soll das Zusammenspiel von strikter Gleichheit und booleschen Operatoren vertiefen.',

  task: 'Schreibe eine Funktion <code>gleich</code>, die 3 Werte auf strikte Gleichheit überprüft. Die Funktion soll nur ' +
    'dann <code>true</code> ergeben, wenn alle 3 Werte strikt gleich sind. <code>gleich(1, 1, 1)</code> soll ' +
    '<code>true</code> zurückgeben, <code>gleich(1, 1, 2)</code> soll <code>false</code> ergeben.',

  beforeTests: function() {
    if (typeof gleich !== 'undefined') {
      gleich = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('gleich');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('gleich', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich(1, 1, 1)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich(1, 1, 2)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("gleich('1', 1, 1)", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("gleich(1, '1', 1)", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("gleich(1, 1, '1')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("gleich('klein', 'klein', 'klein')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("gleich('klein', 'klein', 'groß')", false);
    }
  ]

});
