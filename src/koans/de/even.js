jshero.koans.add({

  id: 'even',

  title: 'Gerade Zahlen',

  task: `Schreibe eine Funktion <code>istGerade</code>, die prüft, ob eine Zahl gerade oder ungerade ist.
Ist die Zahl gerade, so soll die Funktion <code>true</code> zurückgeben, andernfalls <code>false</code>.
Der Aufruf <code>istGerade(6)</code> soll <code>true</code> ergeben und <code>istGerade(7)</code> soll <code>false</code>
zurückgeben.`,

  hint: `Verwende den Modulo-Operator zusammen mit strikter Gleichheit, um zu bestimmen, ob eine Zahl gerade ist.`,

  solution: `<pre><code>var istGerade = function(n) {
  return n % 2 === 0;
};</code></pre>`,

  beforeTests: function() {
    if (typeof istGerade !== 'undefined') {
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
