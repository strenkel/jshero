jshero.koans.add({

  id: 'stringupper',

  title: 'String: toUpperCase()',

  lesson: `Neben der Eigenschaft <code>length</code> besitzen Strings noch eine Reihe von Methoden.
Das sind Funktionen, die direkt auf dem String angewendet werden. Wie die Eigenschaft <code>length</code>
werden diese Methoden mit einem Punkt direkt dem String oder einer Variablen, die einen String enthält, angehängt.
Da Methoden Funktionen sind, folgen in runden Klammern eingeschlossen die Argumente.
Zwei dieser String-Methoden sind die parameterlosen Methoden <code>toUpperCase</code> und <code>toLowerCase</code>.
Sie geben den String, auf dem sie angewendet werden, in Groß- bzw. Kleinbuchstaben zurück. Wichtig ist,
dass der eigentliche String unverändert bleibt. Die Rückgabe dieser Methoden ist der in Groß- bzw. Kleinbuchstaben
umgewandelte String.
<pre><code>var stadt = 'Prag';
var ausgabe = stadt.toUpperCase();</code/></pre>
<code>ausgabe</code> erhält den Wert <code>'PRAG'</code>. <code>stadt</code> hat weiterhin den Wert <code>'Prag'</code>.
<pre><code>ausgabe = stadt.toLowerCase();</code/></pre>
Jetzt hat <code>ausgabe</code> den Wert <code>'prag'</code>.
<pre><code>ausgabe = 'Flug 714'.toUpperCase();</code/></pre>
Hier wird <code>toUpperCase()</code> direkt auf einen String angewendet. Der Wert von <code>ausgabe</code> ist
<code>'FLUG 714'</code>. Zahlen und auch Sonderzeichen werden nicht verändert.`,

  task: `Schreibe eine Funktion <code>toCase</code>, die bei Übergabe eines Strings diesen aneinandergehängt
in Klein- und in Großschreibung zurückgibt. Das Trennzeichen zwischen der Klein- und Großschreibung soll
<code>-</code> sein.<br><br>Beispiel: <code>toCase('Ida')</code> sollte <code>'ida-IDA'</code> zurückgeben.`,

  hint: `<pre><code>var toCase = function(text) {
  return ... + '-' + ...;
};</code/></pre>`,

  solution: `<pre><code>var toCase = function(text) {
  return text.toLowerCase() + '-' + text.toUpperCase();
};</code/></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('toCase');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('toCase', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("toCase('Ida')", 'ida-IDA');
    },

    function() {
      return jshero.testutil.assert_functionReturns("toCase('Paris')", 'paris-PARIS');
    }
  ]

});
