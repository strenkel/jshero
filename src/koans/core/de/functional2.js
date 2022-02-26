jshero.koans.add({

    id: 'functional2',
  
    title: 'Funktionale Programmierung 2',
  
    lesson: `<a href="functionexpression.html">Funktionsausdrücke</a> hatten wir schon kennengelernt. Dort wurde einer
Variablen eine anonyme Funktion zugeordnet. Anonyme Funktionen kann man aber auch direkt, ohne vorherige Variablenzuodnung,
an Funktionen übergeben, die Funktionen als Argument verlangen. Das <code>map</code>-Beispiel aus der vorherigen Lektion sieht dann so aus:
  
<pre><code>let startNumbers = [1, 2, 3];

let newNumbers = startNumbers.map(function(x) {
  return x+1;
});
  
console.log(newNumbers); // [2, 3, 4]</code></pre>

Verwendet man jetzt auch noch <a href="arrow.html">Pfeilfunktionen</a>, so sieht man gewissermaßen direkt,
mit welcher Operation das Array gemappt wird:

<pre><code>let startNumbers = [1, 2, 3];
let newNumbers = startNumbers.map(x => x + 1);
console.log(newNumbers); // [2, 3, 4]</code></pre>`,
  
    task: `Schreibe eine Funktion <code>toX</code>, die ein Array mit Punkten wie <code>{x: 1, y: 2}</code> entgegennimmt
und die x-Werte dieser Punkte als Array zurückgibt.<br><br>
Beispiel: <code>toX([{x: -1, y: -5}, {x: 2, y: 7}])</code> sollte <code>[-1, 2]</code> liefern.`,
  
    tests: [
      function() {
        return jshero.testutil.assert_isFunction('toX');
      },
  
      function() {
        return jshero.testutil.assert_functionHasNumOfParameter('toX', 1);
      },
  
      function() {
        return jshero.testutil.assert_functionReturns('toX([{x: -1, y: 2}])', [-1]);
      },

      function() {
        return jshero.testutil.assert_functionReturns('toX([{x: 2, y: 3}, {x: 4, y: 5}])', [2, 4]);
      },

      function() {
        return jshero.testutil.assert_functionReturns('toX([{x: 9, y: 1}, {x: 8, y: 2}, {x: 7, y: 3}])', [9, 8, 7]);
      }  
    ]
     
  });
  