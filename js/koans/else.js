jshero.koans.add({

  id: 'else',

  title: 'if ... else',

  lesson: 'Möchte man, dass ein Codeblock nur dann ausgeführt wird, wenn eine <code>if</code>-Bedingung nicht erfüllt ist, verwendet man ' +
    'zusätzlich zum <code>if</code> ein <code>else</code> (engl.: sonst).' +
    '<pre><code>var mitteilung;<br>if (betrag > 1000) {<br>  mitteilung = "Keine Auszahlung möglich!";<br>} else {<br>' +
    '  mitteilung = "Der Betrag wird ausgezahlt!";<br>}</code></pre>' +
    'Je nachdem, ob <code>betrag</code> größer oder kleiner <code>1000</code> ist, wird entweder der <code>if</code>-Zweig oder ' +
    'der <code>else</code>-Zweig ausgeführt.',

  task: 'Schreibe eine Funktion <code>addiereMitZuschlag</code>, die zwei Beträge mit Zuschlag addiert. Für jeden Betrag, der kleiner gleich <code>10</code> ' +
    'ist, beträgt der Zuschlag <code>1</code>. Für jeden Betrag, der größer <code>10</code> ist, beträgt der Zuschlag <code>2</code>. ' +
    '<code>addiereMitZuschlag(10, 20)</code> sollte <code>33</code> ergeben.',

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
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(15, 27)', 46);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addiereMitZuschlag(5, 25)', 33);
    }
  ]

});
