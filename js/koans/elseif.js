jshero.koans.add({

  id: 'elseif',

  title: 'else if',

  lesson: 'Möchte man mehrere Fälle unterscheiden, kann man ein <code>if</code> mit beliebig vielen <code>else if</code> ' +
    'ergänzen. Zum Schluss kann bei Bedarf noch ein einzelnes <code>else</code> stehen.' +
    '<pre><code>var mitteilung;<br>if (betrag > 1000) {<br>  mitteilung = "Zu groß. Keine Auszahlung möglich!";<br>' +
    '} else if (betrag < 10) {<br>  mitteilung = "Zu klein. Keine Auszahlung möglich!";<br>} else {<br>' +
    '  mitteilung = "Der Betrag wird ausgezahlt!";<br>}</code></pre>' +
    'Zuerst wird geprüft, ob <code>betrag</code> größer <code>1000</code> ist. Ist das der Fall, wird die "Zu groß..."-Mitteilung ' +
    'gesetzt und der Code am Ende des gesamten Blocks fortgesetzt. Ist das nicht der Fall, wird die <code>else if</code>-Bedingung ' +
    'geprüft. Ist diese erfüllt, wird die "Zu klein..."-Mitteilung gesetzt und der Code am Ende des gesamten Blocks fortgesetzt. ' +
    'Erst wenn keine Bedingung erfüllt ist, wird der abschließenden <code>else</code>-Block ausgeführt.',

  task: 'Schreibe eine Funktion <code>addiereMitZuschlag</code>, die zwei Beträge mit Zuschlag addiert. Für jeden Betrag, der kleiner gleich <code>10</code> ' +
    'ist, beträgt der Zuschlag <code>1</code>. Für jeden Betrag, der größer <code>10</code> und kleiner gleich <code>20</code> ist, beträgt der Zuschlag <code>2</code>. ' +
    'Für jeden Betrag, der größer <code>20</code> ist, beträgt der Zuschlag 3. <code>addiereMitZuschlag(10, 30)</code> sollte <code>44</code> ergeben.',

  beforeTests: function() {
    if (typeof addiereMitZuschlag !== "undefined") {
      addiereMitZuschlag = undefined;
    }
  },

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
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(10, 9)', 21);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(11, 10)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(10, 11)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(13, 20)', 37);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(20, 13)', 37);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(15, 27)', 47);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(27, 15)', 47);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(25, 5)', 34);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(5, 25)', 34);
    }
  ]

});
