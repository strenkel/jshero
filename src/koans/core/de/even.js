jshero.koans.add({

  id: 'even',

  title: 'Gerade Zahlen',

  task: `Schreibe eine Funktion <code>isEven</code>, die prüft, ob eine Zahl gerade oder ungerade ist.
Ist die Zahl gerade, so soll die Funktion <code>true</code> zurückgeben, andernfalls <code>false</code>.<br><br>
Beispiel: Der Aufruf <code>isEven(6)</code> soll <code>true</code> ergeben und <code>isEven(7)</code> soll
<code>false</code> zurückgeben.`,

  hint: `Verwende den Modulo-Operator zusammen mit strikter Gleichheit, um zu bestimmen, ob eine Zahl gerade ist.`,

  solution: `<pre><code>var isEven = function(n) {
  return n % 2 === 0;
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('isEven');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('isEven', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(0)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(2)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(37)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(208)', true);
    }
  ]

});
