jshero.koans.add({

  id: 'greaterthan',

  title: 'Zahlen vergleichen',

  lesson: `Zahlen kann man mit den aus der Mathematik bekannten Zeichen
<code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code> und <code>&lt;=</code>
auf größer, größer gleich, kleiner und kleiner gleich vergleichen.
Im folgenden Beispiel liefern alle Ausdrücke den Wert <code>true</code>:
<pre><code>let v1 = 5 > 4;
let v2 = 5 >= 5;
let v3 = 5 < 6;
let v4 = 5 <= 5;</code></pre>`,

  task: `Schreibe eine Funktion <code>istDreistellig</code>, die prüft, ob eine Zahl größer gleich 100 und kleiner 1000
ist.<br><br>Beispiel: <code>istDreistellig(500)</code> sollte <code>true</code> zurückgeben,
<code>istDreistellig(50)</code> sollte <code>false</code> ergeben.`,

  hint: `<pre><code>function istDreistellig(x) {
  return x >= 100 && ...
}</code></pre>`,

  solution: `<pre><code>function istDreistellig(x) {
  return x >= 100 && x < 1000;
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('istDreistellig');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('istDreistellig', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istDreistellig(100)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istDreistellig(709)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istDreistellig(999)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istDreistellig(99)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('istDreistellig(1000)', false);
    }

  ]

});
