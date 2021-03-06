jshero.koans.add({

  id: 'doubleloop',

  title: 'Geschachtelte Schleifen',

  lesson: `Schleifen kann man auch ineinander schachteln. Im Falle einer for-Schleife muss man zwei verschiedene
Laufindizes benutzen.

<pre><code>let a = [[1, 7, 3], [2, 8, 5], [9, 0, 4]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    sum = sum + a[i][j];
  }
}</code></pre>

Im Codeschnipsel wird die Summe aller Elemente eines zweidimensionalen Arrays berechnet.`,

  task: `Schreibe eine Funktion <code>sum</code>, die die Summe aller Elemente eines zweidimensionalen,
numerischen Arrays berechnet.<br><br>Beispiel: <code>sum([[1, 2], [3]])</code> sollte <code>6</code> zurückgeben.`,

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
