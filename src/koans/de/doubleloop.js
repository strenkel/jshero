jshero.koans.add({

  id: 'doubleloop',

  title: 'Geschachtelte Schleifen',

  lesson: `Scheifen kann man auch ineinander schachteln. Im Falle einer for-Schleife muss man zwei verschiedene Laufindizes benutzen.

<pre><code>var a = [[1, 7, 3], [2, 8, 5], [9, 0, 4]];
var sum = 0;
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    sum = sum + a[i][j];
  }
}
</code></pre>

Im Codeschnipsel wird die Summe aller Elemente eines zweidimensionalen Arrays berechnet.`,

  task: `Schreibe eine Funktion <code>sum</code>, die die Summe aller Elemente eines zweidimensionalen, numerischen Arrays berechnet.
<code>sum([[1, 2], [3]])</code> sollte <code>6</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof sum !== 'undefined') {
      sum = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('sum');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('sum', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([[1]])', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([[1, 2], [3]])', 6);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sum([[1, 2, 3], [1, 2], [1, 2, 3, 4]])', 19);
    }

  ]

});
