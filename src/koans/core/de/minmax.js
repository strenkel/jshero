jshero.koans.add({

  id: 'minmax',

  title: 'Min und Max',

  lesson: `Das Minimum und Maximum einer Reihe von Zahlen bestimmt man mit
<code>Math.min()</code> und <code>Math.max()</code>:

<pre><code>var min = Math.min(5, 7);
var max = Math.max(3, 9, 2);</code></pre>

<code>min</code> erhält den Wert <code>5</code> und <code>max</code> den Wert <code>9</code>.
Das Besondere: Beide Funktionen können mit einer beliebigen Anzahl von Argumenten aufgerufen werden.`,

  task: `Schreibe eine Funktion <code>bereichsmittel</code>, die das Bereichsmittel von 3 Zahlen berechnet.
<br><br>Tipp: Das <a href='https://de.wikipedia.org/wiki/Mittelwert#Bereichsmittel'>Bereichsmittel</a>
einer Reihe von Zahlen ist der Mittelwert der kleinsten und größten Zahl.
<br><br>Beispiel: <code>bereichsmittel(3, 9, 1)</code> sollte <code>(9+1)/2</code> = <code>5</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('bereichsmittel');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('bereichsmittel', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('bereichsmittel(3, 9, 1)', 5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('bereichsmittel(3, 0, 8)', 4);
    },

    function() {
      return jshero.testutil.assert_functionReturns('bereichsmittel(7, 4, 0)', 3.5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('bereichsmittel(-6, -5, -2)', -4);
    },

    function() {
      return jshero.testutil.assert_functionReturns('bereichsmittel(5, -5, 2)', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('bereichsmittel(10, 20, 17)', 15);
    }

  ]

});
