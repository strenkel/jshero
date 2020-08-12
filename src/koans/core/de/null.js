jshero.koans.add({

  id: 'null',

  title: 'null',

  lesson: `Neben <code>undefined</code> kennt JavaScript einen weiteren Wert für die Abwesentheit eines sinnvollen
Werts: <code>null</code>. Man kann einer Variablen den Wert <code>null</code> zuordnen und testet mit strikter
Gleichheit auf diesen Wert:

<pre><code>let foo = null;
if (foo === null) {
  foo = 1;
}</code></pre>

Es ist ein Design-Fehler, dass JavaScript zwei Werte für "kein Wert" besitzt. Wenn möglich, sollte man
<code>undefined</code> und <code>null</code> gleich behandeln.`,

  task: `Schreibe eine Funktion <code>cutComment</code>, die eine Zeile JavaScript entgegennimmt
und einen möglichen Zeilenkommentar getrimmt zurückgibt. Enthält die Zeile keinen Kommentar, soll <code>null</code>
zurückgegeben werden. Ein­fach­heits­hal­ber gehen wir davon aus, dass der Code kein Kommentar-Zeichen innerhalb
eines Strings enthält.<br><br>
Beispiel: <code>cutCommt('let foo; // bar')</code> sollte <code>'bar'</code> zurückgeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('cutComment');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('cutComment', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("cutComment('let foo; // bar')", 'bar');
    },

    function() {
      return jshero.testutil.assert_functionReturns("cutComment('let n; // Number')", 'Number');
    },

    function() {
      return jshero.testutil.assert_functionReturns("cutComment('let i;')", null);
    }

  ]

});
