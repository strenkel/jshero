jshero.koans.add({

  id: 'xor',

  title: 'XOR',

  lesson: `Die logischen Operatoren kennen, ähnlich der Punkt- vor Strich-Rechnung, eine Reihenfolge:
NICHT zuerst, anschließend UND, zuletzt ODER. Möchte man diese Reihenfolge ändern, verwendet man Klammern:

<pre><code>var x1 = true || false && false;
var x2 = (true || false) && false;
var x3 = !false && false;
var x4 = !(false && false);</code></pre>

In der ersten Zeile wird zuerst UND ausgewertet. <code>x1</code> wird <code>true</code>.
In der zweiten Zeile wird zuerst ODER ausgewertet. <code>x2</code> wird <code>false</code>.
In der dritten Zeile wird zuerst NICHT ausgewertet. <code>x3</code> wird <code>false</code>.
Und in der vierten Zeile wird zuerst UND ausgewertet. <code>x4</code> wird <code>true</code>.<br><br>
In der folgenden Aufgabe sollst du ein weiteres wichtiges Gatter, das XOR-Gatter (engl.: eXclusive OR - exklusives oder),
programmieren.`,

  task: `Schreibe eine Funktion <code>xor</code>, die zwei boolesche Werte als Parameter entgegennimmt.
Die Rückgabe der Funktion soll <code>true</code> sein, wenn beide Paramter verschieden sind.
In den anderen Fällen soll die Rückgabe <code>false</code> sein.<br><br>D.h.: <code>xor(true, false)</code> und
<code>xor(false, true)</code> sollen <code>true</code> liefern, <code>xor(true, true)</code> und
<code>xor(false, false)</code> sollen <code>false</code> zurückgeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('xor');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('xor', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(true, true)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(true, false)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(false, true)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('xor(false, false)', false);
    }
  ]

});
