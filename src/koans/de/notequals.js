jshero.koans.add({

  id: 'notequals',

  title: 'Strikte Ungleichtheit',

  lesson: `Mit <code>!==</code> vergleicht man zwei Werte auf strikte Ungleichheit.

<pre><code>var v1 = 'lauf' !== 'Lauf';
var v2 = 10 !== '10';</code></pre>

Beide Vergleiche ergeben <code>true</code>. Der erste, weil sich die beiden
Strings in der Groß- und Kleinschreibung unterscheiden.
Der zweite, weil sich die beiden Werte von Typ her unterscheiden.`,

  task: `Schreibe eine Funktion <code>ungleich</code>, die 3 Werte auf strikte Ungleichheit überprüft.
Die Funktion soll nur dann <code>true</code> ergeben, wenn alle drei Parameter unterschiedlich sind.
<code>ungleich(1, 2, 3)</code> soll <code>true</code> liefern, <code>ungleich(1, 1, 2)</code> soll
<code>false</code> ergeben.`,

  beforeTests: function() {
    if (typeof ungleich !== 'undefined') {
      ungleich = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('ungleich');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('ungleich', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ungleich(1, 2, 3)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ungleich(1, 2, 1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('ungleich(2, 1, 1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("ungleich('2', 2, 2)", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("ungleich('kLein', 'klein', 'kleiN')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("ungleich('1', 1, true)", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("ungleich('klein', 'klein', 'kIein')", false);
    }
  ]

});
