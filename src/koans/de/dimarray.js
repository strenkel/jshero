jshero.koans.add({

  id: 'dimarray',

  title: 'Mehrdimensionale Arrays',

  lesson: `Bisher haben wir in Arrays Zahlen, Strings und boolsche Werte gespeichert. Man kann aber auch Arrays in Arrays speichern.

<pre><code>teams = [
  ["Ruby", "Angel", "Elif"],
  ["Zeynep", "Pari", "Merve"],
  ["Saanvi", "Giulia", " Mia"]
];

var zeile1 = [1, 2, 3];
var zeile2 = [];

</code></pre>

Hier wird ein leeres Array nacheinander mit den aufgeführten Werten gefüllt.`,

  task: `Schreibe eine Funktion <code>setFirstElement</code>, die ein Array und eine beliebige Variable entgegennimmt.
Die Variable soll als erstes Element in das Array geschrieben werden. Das Array soll dann zurückgegeben werden.
<code>setFirstElement([1, 2], 3)</code> sollte <code>[3, 2]</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof setFirstElement !== "undefined") {
      setFirstElement = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('setFirstElement');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('setFirstElement', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('setFirstElement([1, 2], 3)', [3, 2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('setFirstElement(["Hein", "Gretel"], "Hänsel")', ["Hänsel", "Gretel"]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('setFirstElement([1, "Maus"], "kleine")', ["kleine", "Maus"]);
    }
  ]

});
