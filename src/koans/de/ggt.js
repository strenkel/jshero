
jshero.koans.add({

  id: 'ggt',

  title: 'ggT',

  lesson: `Das Gegenstück zum kleinsten gemeinsamen Vielfachen (kgV) ist der
<a href='https://de.wikipedia.org/wiki/Gr%C3%B6%C3%9Fter_gemeinsamer_Teiler'>größte gemeinsamer Teiler (ggT)</a>.
Der größte gemeinsame Teiler zweier Zahlen a und b ist die größte Zahl, durch die sich sowohl a als auch b teilen läßt.`,

  task: `Schreibe eine Funktion <code>ggT</code>, die zwei natürliche Zahlen als Parameter entgegennimmt und deren ggT berechnet.
<code>ggT(6, 15)</code> sollte <code>3</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof ggT !== 'undefined') {
      ggT = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('ggT');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('ggT', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(1, 1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(1, 2)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(2, 3)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(2, 4)', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(6, 15)', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(12, 18)', 6);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(18, 12)', 6);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(15, 45)', 15);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ggT(45, 15)', 15);
    }

  ]

});
