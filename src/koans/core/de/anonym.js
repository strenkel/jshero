jshero.koans.add({

  id: 'anonym',

  title: 'Anonyme Functionen',

  lesson: `Wir haben bisher Funktionsdeklarationen kennen gelernt. Man kann Funktionen aber auch direkt im laufenden
Code definieren. Eine solche Funktionsdefinition im laufende Code nennt man Funktionsausdruck.
So kann man zum Beispiel einer Variablen direkt eine Funktion zuordnen.

<pre><code>let plusOne = function(x) {
  return x + 1;
};</code></pre>

Hier wurde keine Funktion deklariert, sondern wir haben einen Funktionsausdruck direkt einer Variablen zugeordnet.
Da es sich hier um eine Variablen-Zuordnung handelt, sollte das Statement mit einem Semikolon abgeschlossen werden.
Im Gegensatz zu einer Funktionsdeklaration kann man bei einem Funktionsausdruck den Namen der Funktion weglassen.
Man spricht in diesem Fall von einer anonymen Funktion. Eine Funktionsdeklaration und ein Funktionsausdruck mit
Variablendeklaration sind praktisch gleichwertig.

<pre><code>let startNumbers = [1, 2, 3];
let newNumbers = startNumbers.map(function (x) {
  return x + 1;
});
console.log(newNumbers); // > [2, 3, 4]</code></pre>

Die Methothe <code>map()</code> verlangt als Parameter eine Funktion. In den ersten drei Zeilen haben wir einen Funktion
mit dem Namen <code>addOne</code> deklariert. Mit dieser Deklaration wurde gleichzeitig die Variable mit dem Namen
<code>addOne</code> erzeugt. Die Variable <code>addOne</code> enthält die Funktion <code>addOne()</code>. Diese Funktion
wird nun der Methode <code>map()</code> übergeben. Intern ruft jetzt <code>map()</code> die Funktion <code>addOne()</code>
für jedes Array-Element auf. Die Funktion <code>addOne()</code> wird also sukzessive mit den Werten <code>1</code>,
<code>2</code> und <code>3</code> aufgerufen. Als Ergbnis erhält man die Werte <code>2</code>, <code>3</code> und
<code>4</code>. Diese Werte werden von <code>map()</code> als Array zurückgegeben.`,

  task: `Schreibe eine Funktion <code>double</code>, die ein Array mit Zahlen entgegennimmt und die diese Zahlen
verdoppelt als Array zurückgibt.<br><br>
Beispiel: <code>double([1, 2, 3])</code> sollte <code>[2, 4, 6]</code> ergeben.`,

  hint: `Versuche eine Lösung mit Schleife und eine Lösung mit der Array-Methode <code>map()</code> zu finden.`,

  solution: `<pre><code>// mit Schleife
function double(myNumbers) {
  let result = [];
  for (let i = 0; i < myNumbers.length; i++) {
    result.push(myNumbers[i] * 2);
  }
  return result;
}

// mit map()
function timesTwo(x) {
  return 2 * x;
}

function double(myNumbers) {
  return myNumbers.map(timesTwo);
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('double');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('double', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('double([1])', [2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('double([10, 15])', [20, 30]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('double([1, 2, 3])', [2, 4, 6]);
    }

  ]

});
