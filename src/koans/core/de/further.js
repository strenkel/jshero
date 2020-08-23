jshero.koans.add({

  id: 'further',

  title: 'Quersumme',

  lesson: `Mit dieser Lektion endet die Einführung in den Sprachkern von JavaScript.
 Die folgenden Lektionen bieten einen kleinen Einstieg in das sogenannte clientseitige JavaScript.
 Zum Abschluss der Einführung in den Sprachkern noch eine Aufgabe aus dem Gebiet der Mathematik:`,

  task: `Schreibe eine Funktion <code>quersumme</code>, die die Quersumme einer natürlichen Zahl berechnet.
Die Quersumme einer Zahl ist dabei die Summe ihrer Ziffern.<br><br>Beispiel:
<code>quersumme(198)</code> sollte <code>18</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('quersumme');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('quersumme', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('quersumme(1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('quersumme(198)', 18);
    },

    function() {
      return jshero.testutil.assert_functionReturns('quersumme(123456789)', 45);
    }
  ],

  hint: `<pre><code>function quersumme(zahl) {
// Extrahiere in einer Schleife
// mit Modulo jeweils die
// Einer-Stelle und addiere
// sie auf.
}</code></pre>`,

  solution: `<pre><code>function quersumme(zahl) {
  let sum = 0;
  let rest = zahl;
  while (rest > 0) {
    let einer = rest % 10;
    sum = sum + einer;
    rest = (rest - einer)/10;
  }
  return sum;
}</code></pre>`

});
