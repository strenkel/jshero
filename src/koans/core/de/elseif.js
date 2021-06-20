jshero.koans.add({

  id: 'elseif',

  title: 'else if',

  lesson: `Möchte man mehrere Fälle unterscheiden, kann man ein <code>if</code> mit beliebig vielen <code>else if</code>
ergänzen. Zum Schluss kann bei Bedarf noch ein einzelnes <code>else</code> stehen.

<pre><code>let mitteilung;
if (betrag > 1000) {
  mitteilung = 'Zu groß. Keine Auszahlung möglich!';
} else if (betrag < 10) {
  mitteilung = 'Zu klein. Keine Auszahlung möglich!';
} else {
  mitteilung = 'Der Betrag wird ausgezahlt!';
}</code></pre>

Zuerst wird geprüft, ob <code>betrag</code> größer <code>1000</code> ist. Ist das der Fall, wird die 'Zu groß...'-Mitteilung
gesetzt und der Code am Ende des gesamten Blocks fortgesetzt. Ist das nicht der Fall, wird die <code>else if</code>-Bedingung
geprüft. Ist diese erfüllt, wird die 'Zu klein...'-Mitteilung gesetzt und der Code am Ende des gesamten Blocks fortgesetzt.
Erst wenn keine Bedingung erfüllt ist, wird der abschließenden <code>else</code>-Block ausgeführt.`,

  task: `Schreibe eine Funktion <code>addiereMitZuschlag</code>, die zwei Beträge mit Zuschlag addiert.
Für jeden Betrag, der kleiner gleich <code>10</code> ist, beträgt der Zuschlag <code>1</code>. Für jeden
Betrag, der größer <code>10</code> und kleiner gleich <code>20</code> ist, beträgt der Zuschlag <code>2</code>.
Für jeden Betrag, der größer <code>20</code> ist, beträgt der Zuschlag <code>3</code>.<br><br>Beispiel:
<code>addiereMitZuschlag(10, 30)</code> sollte <code>44</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('addiereMitZuschlag');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('addiereMitZuschlag', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(1, 1)', 4);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(10, 10)', 22);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(11, 10)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(10, 11)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(11, 11)', 26);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(10, 20)', 33);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(20, 10)', 33);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(10, 21)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(21, 10)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(11, 20)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(20, 11)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(11, 21)', 37);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(21, 11)', 37);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(20, 20)', 44);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(21, 20)', 46);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(20, 21)', 46);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(21, 21)', 48);
    }
  ]

});
