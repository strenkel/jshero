(function(testutil) {

  jshero.koans.add({

    id: 'array',

    title: 'Arrays',

    lesson: `Arrays sind Objekte zur Speicherung vieler, meist ähnlicher Werte. Diese sogenannten Elemente werden
in einem Array der Reihe nach abgelegt. Arrays erzeugt man am besten mit eckigen Klammern.

<pre><code>let sprachen = ['C', 'C++', 'Java', 'JavaScript'];
let primzahlen = [2, 3, 5, 7, 11];
let leeresArray = [];
let a = 'Douglas';
let b = 12;
let c = true;
let allesMoegliche = [a, b, c];</code></pre>

Die Elemente eines Arrays können, wie das letzte Beispiel zeigt, alle einen anderen Datentyp besitzen.`,

    task: `Schreibe eine Funktion <code>toArray</code>, die 2 Paramter entgegennimmt und diese als Array zurückgibt.
<br><br>Beispiel: <code>toArray(5, 9)</code> sollte das Array <code>[5, 9]</code> ergeben.`,

    hint: `<pre><code>function toArray(a, b) {
  return [...];
}</code></pre>`,

    solution: `<pre><code>function toArray(a, b) {
  return [a, b];
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('toArray');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('toArray', 2);
      },

      function() {
        return testutil.assert_functionReturnsType('toArray(1, 2)', 'Array');
      },

      function() {
        return testutil.assert_functionReturns('toArray(1, 2)', [1, 2]);
      },

      function() {
        return testutil.assert_functionReturns("toArray('Hänsel', 'Gretel')", ['Hänsel', 'Gretel']);
      },

      function() {
        return testutil.assert_functionReturns("toArray(1, 'Maus')", [1, 'Maus']);
      }

    ]

  });

})(jshero.testutil);