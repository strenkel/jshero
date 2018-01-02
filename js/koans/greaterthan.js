jshero.koans.add({

  id: 'greaterthan',

  title: 'Zahlen vergleichen',

  lesson: `Zahlen kann man mit den aus der Mathematik bekannten Zeichen
<code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code> und <code>&gt;=</code>
auf größer, größer gleich, kleiner und kleiner gleich vergleichen.
Im folgenden Beispiel liefern alle Ausdrücke den Wert <code>true</code>:
<pre><code>var v1 = 5 > 4;
var v2 = 5 >= 5;
var v3 = 5 < 6;
var v4 = 5 <= 5;</code></pre>`,

  task: `Schreibe eine Funktion <code>istDreistellig</code>, die prüft, ob eine Zahl größer gleich 100 und kleiner 1000 ist.
<code>istDreistellig(500)</code> sollte <code>true</code> zurückgeben, <code>istDreistellig(50)</code> sollte <code>false</code> ergeben.`,

  beforeTests: function() {
    istDreistellig = undefined;
  },

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
