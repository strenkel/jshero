jshero.koans.add({

  id: 'pi',

  title: 'Math.PI',

  lesson: `Neben Funktionen bietet <code>Math</code> auch einige mathematische Konstanten an.
<code>Math.PI</code> liefert die Kreiszahl &pi; (gerundet 3.14) und <code>Math.E</code> die Eulersche Zahl e (gerundet 2.71).
Beachte: Die Konstanten werden im Gegensatz zu Funktionen ohne anschließende Klammern aufgerufen.`,

  task: `Schreibe eine Funktion <code>flaeche</code>, die die Fläche eines Kreises berechnet.
Übergeben wird der Funktion als Parameter der Radius des Kreises. Tipp: Die Fläche eines Kreises ist &pi; * r&sup2;.
Dabei ist r der Radius des Kreises.`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('flaeche');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('flaeche', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('flaeche(4)', Math.PI * 4 * 4);
    },

    function() {
      return jshero.testutil.assert_functionReturns('flaeche(1)', Math.PI);
    },

    function() {
      return jshero.testutil.assert_functionReturns('flaeche(0)', 0);
    }

  ]

});
