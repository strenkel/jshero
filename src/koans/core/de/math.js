jshero.koans.add({

  id: 'math',

  title: 'Math',

  lesson: `Viele mathematische Funktionen sind in dem Objekt <code>Math</code> zusammengefasst.
So gibt <code>Math.sqrt(x)</code> die Quadratwurzel (engl.: square root) zurück
und mit <code>Math.pow(x, y)</code> berechnet man die Potenz (engl.: power) x hoch y.

<pre><code>let y1 = Math.sqrt(9);
let y2 = Math.pow(10, 3);</code></pre>

<code>y1</code> hat den Wert <code>3</code> und <code>y2</code> den Wert <code>1000</code> (10&sup3; = 10 * 10 * 10 = 1000).`,

  task: `Schreibe eine Funktion <code>hypotenuse</code>, die die Länge der Hypotenuse eines rechtwinkligen Dreiecks berechnet.
Übergeben wird der Funktion als Parameter die Längen der beiden Katheten.
<br><br>Tipp: In einem rechtwinkligen Dreieck gilt der Satz des Pythagoras. Sind a, b die Längen der beiden
Katheten und c die Länge der Hypotenuse, so gilt: a&sup2; + b&sup2; = c&sup2;.
<br><br>Beispiel: Da 3&sup2; + 4&sup2; = 5&sup2; gilt, sollte <code>hypotenuse(3,&nbsp;4)</code> den Wert <code>5</code> liefern.`,

  hint: `<pre><code>function hypotenuse(a, b) {
  let cQuadrat = Math.pow(a, 2) + Math.pow(b, 2);
  return ...
};</code></pre>`,

  solution: `<pre><code>function hypotenuse(a, b) {
  let cQuadrat = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(cQuadrat);
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('hypotenuse');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('hypotenuse', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('hypotenuse(3, 4)', 5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('hypotenuse(5, 12)', 13);
    },

    function() {
      return jshero.testutil.assert_functionReturns('hypotenuse(1, 1)', Math.sqrt(2));
    }

  ]

});
