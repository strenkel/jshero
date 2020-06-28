jshero.koans.add({

  id: 'numbertostring',

  title: 'Number: toString()',

  lesson: `Die Number-Methode <code>toString</code> wandelt eine Zahl in den entsprechenden String um.
Der Dezimalpunkt wird dabei als Punkt dargestellt. Das kann man z.B. dazu verwenden, eine Zahl im deutschen Format,
also mit Komma als Dezimalpunkt, auszugeben:

<code><pre>let number = 7.25;
let numberInEnglish = number.toString();
let numberInGerman = numberInEnglish.replace('.', ',');</code></pre>

<code>numberInEnglish</code> enthält den String <code>'7.25'</code>. Da wir jetzt unsere Zahl als String vorliegen haben,
können wir auf ihr die String-Methode <code>replace</code> anwenden. <code>numberInGerman</code> enthält so den String
<code>'7,25'</code>.`,

  task: `Schreibe eine Funktion <code>digitLength</code>, die die Anzahl der Ziffern einer natürlichen Zahl berechnet.
<br><br>Beispiel: <code>digitLength(709)</code> sollte 3 zurückgeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('digitLength');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('digitLength', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('digitLength(1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('digitLength(709)', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('digitLength(123456)', 6);
    }
  ]

});
