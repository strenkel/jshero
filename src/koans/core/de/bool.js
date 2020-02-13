jshero.koans.add({

  id: "bool",

  title: "Wahrheitswerte",

  lesson: `Der dritte wichtige Datentyp neben Strings und Zahlen sind Wahrheitswerte. Sie werden auch boolesche Werte
genannt. Boolesche Werte kennen nur zwei Zustände: <code>true</code> und <code>false</code>. Mit booleschen Werten kann
man ähnlich "rechnen" wie mit Zahlen. JavaScript kennt drei boolesche Operatoren: '<code>&&</code> (und),
<code>||</code> (oder) und <code>!</code> (nicht). Das Ergebnis dieser Operationen ist wieder ein boolescher Wert.
<code>&&</code> verknüpft zwei boolesche Werte. Sind beide Werte <code>true</code>, ist das Ergebnis auch
<code>true</code>. In allen anderen Fällen ist es <code>false</code>. Bei <code>||</code> ist das Ergebnis
<code>false</code>, wenn beide Eingangswerte auch <code>false</code> sind. In  allen anderen Fällen ist das Ergebnis
<code>true</code>. <code>!</code> wird nur auf einen booleschen Wert angewendet und invertiert diesen Wert: aus
<code>true</code> wird <code>false</code> und aus <code>false</code> wird <code>true</code>.

<pre><code>var x1 = true && false;
var x2 = !x1;
var x3 = x1 || x2;</code></pre>

<code>x1</code> ist <code>false</code>,  <code>x2</code> ist <code>true</code> und <code>x3</code> ist ebenfalls
<code>true</code>.`,

  task: `Schreibe eine Funktion <code>nand</code>, die zwei boolesche Werte als Parameter entgegennimmt. Die Rückgabe
der Funktion soll <code>false</code> sein, wenn beide Paramter <code>true</code> sind. In den anderen Fällen soll die
Rückgabe <code>true</code> sein.<br><br>Beispiel: <code>nand(true, true)</code> soll <code>false</code> liefern,
<code>nand(true, false)</code>, <code>nand(false, true)</code> und <code>nand(false, false)</code> sollen
<code>true</code> zurückgeben.`,

  hint: `<pre><code>var nand = function(a, b) {
  var and = a && b;
  ...
};</code></pre>`,

  solution: `<pre><code>var nand = function(a, b) {
  var and = a && b;
  return !and;
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('nand');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('nand', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nand(true, true)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nand(true, false)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nand(false, true)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nand(false, false)', true);
    }
  ]

});
