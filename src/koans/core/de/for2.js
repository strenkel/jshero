jshero.koans.add({

  id: 'for2',

  title: 'Schleifen und Arrays',

  lesson: `<code>for</code>-Schleifen eignen sich besonders gut zum Durchlaufen von Arrays.
Im folgenden Beispiel werden die Elemente eines Arrays aufaddiert:

<pre><code>let sum = 0;
for (let i = 0; i < myArray.length; i++) {
  sum = sum + myArray[i];
}</code></pre>`,

  task: `Schreibe eine Funktion <code>mean</code>, die ein Array gefüllt mit Zahlen entgegennimmt und den
Durchschnitt dieser Zahlen zurückgibt.<br><br>
Beispiel: <code>mean([1, 2, 3])</code> sollte <code>(1+2+3)/3</code> = <code>2</code> ergeben.`,

  hint: `Um den Durchschnitt von n Zahlen zu berechnen, mußt du die Zahlen aufaddieren und die erhaltene Summe durch n teilen.`,

  solution: `<pre><code>function mean(data) {

  let sum = 0;

  for (let i = 0; i < data.length; i ++) {
    sum = sum + data[i];
  }

  return sum / data.length;
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('mean');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('mean', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([0])', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([1, 2])', 1.5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([1, 2, 3])', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([-2, -4, 17, 34])', 11.25);
    }
  ]

});
