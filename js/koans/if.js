jshero.koans.add({

  id: 'if',

  title: 'if',

  lesson: `Häufig soll Code nur dann ausgeführt werden, wenn eine bestimmte Bedingung erfüllt ist.
Dazu verwendet man die <code>if</code>-Anweisung.

<pre><code>var gewinn = 0;
if (wuerfelzahl === 6) {
  gewinn = 100;
}</code></pre>

Diese Anweisung besteht aus dem Schlüsselwort <code>if</code> (engl: wenn) gefolgt von runden Klammern. In den runden Klammern steht ein
Ausdruck - die Bedingung -, der zu <code>true</code> oder <code>false</code> ausgewertet wird. Ergibt die Bedingung <code>true</code>,
werden alle Anweisungen in dem durch die geschweiften Klammern begrenzten Block ausgeführt. Ergibt die Bedingung <code>false</code>,
wird der durch die geschweiften Klammern begrenzte Block übersprungen.
Hat in unserem Beispiel die Variable <code>wuerfelzahl</code> den Wert <code>6</code>, so wird <code>gewinn</code> auf
<code>100</code> gesetzt. Hat <code>wuerfelzahl</code> nicht den Wert <code>6</code>, bleibt <code>gewinn</code> bei <code>0</code>.`,

  task: `Schreibe eine Funktion <code>gleich</code>, die 2 Werte auf strikte Gleichheit überprüft. Sind die beiden Werte gleich, so soll
der String <code>"GLEICH"</code> zurückgegeben werden. Sind sie ungleich, so soll man <code>"UNGLEICH"</code> erhalten.`,

  beforeTests: function() {
    if (typeof gleich !== "undefined") {
      gleich = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('gleich');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('gleich', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich(1, 1)', 'GLEICH');
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich(1, 2)', 'UNGLEICH');
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich(1, "1")', 'UNGLEICH');
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich("klein", "klein")', 'GLEICH');
    },

    function() {
      return jshero.testutil.assert_functionReturns('gleich("Links", "Rechts")', 'UNGLEICH');
    }
  ]

});
