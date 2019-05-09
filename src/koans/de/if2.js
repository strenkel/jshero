jshero.koans.add({

  id: 'if2',

  title: 'Zwei return-Anweisungen',

  lesson: `Mit der <code>if</code>-Anweisung hat man die Möglichkeit, Funktionen mit zwei <code>return</code>-Anweisungen
zu schreiben:

<pre><code>var gewinn = function(zahl) {
  if (zahl === 6) {
    return 100;
  }
  return 0;
};</code></pre>

Hat <code>zahl</code> den Wert <code>6</code>, so ist die <code>if</code>-Bedingung erfüllt und die erste
<code>return</code>-Anweisung wird ausgeführt. Die Funktion wird beendet und gibt <code>100</code> zurück.
Hat <code>zahl</code> nicht den Wert <code>6</code>, so ist die <code>if</code>-Bedingung nicht erfüllt.
Die Codeausfüfrung wird hinter dem zur <code>if</code>-Anweisung gehörigen Block fortgesetzt. Die zweite
<code>return</code>-Anweisung wird ausgeführt. Die Funktion gibt <code>0</code> zurück.<br><br>
Aber Achtung: Zwei oder auch mehr <code>return</code>-Anweisungen in einer Funktion sollte man sorgsam verwenden.
Andernfalls wird der Code unübersichtlich.`,

  task: `Schreibe eine Funktion <code>schnapszahl</code>, die feststellt, ob eine zweistellige Zahl eine Schnapszahl ist
oder nicht. Ist die Zahl eine Schnapszahl, soll <code>'Schnaps!'</code> zurückgegeben werden, andernfalls
<code>'Kein Schnaps!'</code>. <code>schnapszahl(22)</code> sollte <code>'Schnaps!'</code> und
<code>schnapszahl(23)</code> sollte <code>'Kein Schnaps!'</code> zurückgeben.
<br><br>
Eine <a href='https://de.wikipedia.org/wiki/Schnapszahl'>Schnapszahl</a> ist eine mehrstellige Zahl, die ausschließlich
durch identische Ziffern dargestellt wird.`,

  hint: `<pre><code>var schnapszahl = function(n) {
// Berechne die Einerstelle
// von n mit Modulo 10.
// Berechne die Zehnerstelle
// von n mit Division
// durch 10 und Abrunden.
// Vergleiche Einer- und
// Zehnerstelle.
};</code></pre>`,

  solution: `<pre><code>var schnapszahl = function(n) {
  var einer = n % 10;
  var zehner = Math.floor(n / 10);
  if (einer === zehner) {
    return 'Schnaps!';
  }
  return 'Kein Schnaps!';
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('schnapszahl');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('schnapszahl', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('schnapszahl(11)', 'Schnaps!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('schnapszahl(55)', 'Schnaps!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('schnapszahl(99)', 'Schnaps!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('schnapszahl(10)', 'Kein Schnaps!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('schnapszahl(12)', 'Kein Schnaps!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('schnapszahl(98)', 'Kein Schnaps!');
    }
  ]

});
