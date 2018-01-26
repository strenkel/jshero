jshero.koans.add({

  id: 'even',

  title: 'Gerade Zahlen',

  lesson: 'Diese Aufgabe soll das Zusammenspiel von strikter Gleichheit und dem Modulo-Operator vertiefen.',

  task: `Schreibe eine Funktion <code>istGerade</code>, die angibt, ob eine übergebene Zahl gerade oder ungerade ist.
Ist die übergebene Zahl gerade, so soll die Funktion <code>true</code> zurückgeben, andernfalls <code>false</code>.
<code>istGerade(6)</code> soll <code>true</code> ergeben und <code>istGerade(7)</code> soll <code>false</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof istGerade !== "undefined") {
      istGerade = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('istGerade');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('istGerade', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istGerade(0)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istGerade(1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istGerade(2)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istGerade(37)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istGerade(208)', true);
    }
  ]

});
