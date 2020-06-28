(function(testutil) {

  jshero.koans.add({

    id: 'dimarray',

    title: 'Mehrdimensionale Arrays',

    lesson: `Bisher haben wir in Arrays Zahlen, Strings und boolsche Werte gespeichert.
Man kann aber auch Arrays in Arrays speichern.

<pre><code>let teams = [
  ['Ruby', 'Angel'],
  ['Mia', 'Yui', 'Merve', 'Elif'],
  ['Saanvi', 'Giulia', 'Zeynep']
];

let zeile1 = [4, 9, 2];
let zeile2 = [3, 5, 7];
let zeile3 = [8, 1, 6];
let loshu = [zeile1, zeile2, zeile3];</code></pre>

Im ersten Beispiel werden 3 Teams in einem Array gespeichert. Jedes Team ist wiederum ein Array aus Namen.
Die einzelnen Teams sind verschieden groß. Mit <pre><code>let team = teams[0];</code></pre> greift man auf ein Team zu
und mit <pre><code>let member = teams[0][0];</code></pre> kann man auf die einzelnen Teammitglieder zugreifen.<br><br>
Arrays, die Arrays enthalten, nennt man auch zweidimensionals Arrays. Treibt man dies weiter, erhält man
drei- bzw. mehrdimensionale Arrays.<br><br>
Im zweiten Beispiel wird das <a href='https://de.wikipedia.org/wiki/Magisches_Quadrat'>magische Quadrat</a> Lo-Shu in einem
zweidimensionalen Array gespeichert.`,

    task: `Schreibe eine Funktion <code>flat</code>, die ein zweidimensionales Array mit 3 Einträgen in ein
einfaches Array überführt. <code>flat(loshu)</code> sollte <code>[4, 9, 2, 3, 5, 7, 8, 1, 6]</code> ergeben.
Dabei ist <code>loshu</code> das magische Quadrat aus dem obigen Beispiel.`,

    tests: [
      function() {
        return testutil.assert_isFunction('flat');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('flat', 1);
      },

      function() {
        return testutil.assert_functionReturns('flat([[], [], []])', []);
      },

      function() {
        return testutil.assert_functionReturns('flat([[1], [], []])', [1]);
      },

      function() {
        return testutil.assert_functionReturns('flat([[1], [2], [3]])', [1, 2, 3]);
      },

      function() {
        return testutil.assert_functionReturns('flat([[1, 2], [3, 4], [5, 6]])', [1, 2, 3, 4, 5, 6]);
      },

      function() {
        return testutil.assert_functionReturns("flat([['a'], ['b', 'c'], ['d', 'e', 'f']])", ['a', 'b', 'c', 'd', 'e', 'f']);
      }

    ]

  });

})(jshero.testutil);

