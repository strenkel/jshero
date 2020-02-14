jshero.koans.add({

  id: 'equals',

  title: 'Strikte Gleichheit',

  lesson: `Zwei Werte kann man auf strikte Gleichheit überprüfen. Das Ergebnis eines solchen Vergleichs ist entweder
<code>true</code>, die beiden Werte sind gleich, oder <code>false</code>, die beiden Werte sind ungleich.
Der Operator für strikte Gleichheit ist <code>===</code>.

<pre><code>var sprache = 'JavaScript';
var x = 10;
var v1 = sprache === 'Java';
var v2 = x === 10;
var v3 = x === '10';</code></pre>

<code>v1</code> bekommt das Ergebnis des Vergleichs der Variablen <code>sprache</code> mit dem Wert
<code>'Java'</code> zugewiesen. Da <code>sprache</code> zuvor den Wert <code>JavaScript</code> erhalten hat und
diese beiden Werte verschieden sind, hat <code>v1</code> den Wert <code>false</code>. <code>v2</code> ist
<code>true</code>, da der Wert von <code>x</code> gleich <code>10</code> ist. Bei der strikten Gleichheit kommt es
auch darauf an, dass die Datentypen der beiden verglichenen Werte gleich sind. <code>v3</code> ist <code>false</code>,
da hier unterschiedliche Typen verglichen werden. Auf der linken Seite des Vergleichs steht eine Zahl, auf der
rechten Seite ein String.`,

  task: `Schreibe eine Funktion <code>gleich</code>, die zwei Werte auf strikte Gleichheit überprüft.<br><br>Beispiel:
<code>gleich(1, 1)</code> soll <code>true</code> zurückgeben, <code>gleich(1, 2)</code> soll
<code>false</code> ergeben.`,

  hint: `<pre><code>var gleich = function(a, b) {
  return ...
};</code></pre>`,

  solution: `<pre><code>var gleich = function(a, b) {
  return a === b;
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('gleich');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('gleich', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich(1, 1)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("gleich(1, '1')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich(1, 2)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("gleich('klein', 'klein')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("gleich('Links', 'Rechts')", false);
    }
  ]

});
