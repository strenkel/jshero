jshero.koans.add({

  id: 'functional',

  title: 'Funktionale Programmierung',

  lesson: `Bei der <a href="https://de.wikipedia.org/wiki/Funktionale_Programmierung">funktionalen Programmierung</a>
werden Funktionen nicht nur wie bisher deklariert und aufgerufen, sondern Funktionen werden auch als Parameter
an andere Funktionen übergeben oder Funktionen werden von Funktionen zurückgegeben. Eine Stärke von JavaScript ist es, dass es
ebenso wie objektorientierte auch funktionale Programmierung unterstützt.<br><br>
In JavaScript sind Funktionen Objekte, die wie alle anderen Objekte Variablen zugeordnet werden
können. Deklariert man eine Funktion mit dem Schlüsselwort <code>function</code> und anschließendem Funktionsnamen,
so wird automatisch eine Variable mit dem Namen der Funktion erzeugt. Diese Variable enthält als Wert die Funktion.<br><br>
Schauen wir uns das Ganze nun am Beispiel der Array-Methode <code>map()</code> (engl.: abbilden) an:

<pre><code>function addOne(x) {
  return x + 1;
}

let startNumbers = [1, 2, 3];
let newNumbers = startNumbers.map(addOne);

console.log(startNumbers); // [1, 2, 3]
console.log(newNumbers); // [2, 3, 4]</code></pre>

Die Methode <code>map()</code> verlangt als Parameter eine Funktion. In den ersten drei Zeilen haben wir eine Funktion
mit dem Namen <code>addOne</code> deklariert. Mit dieser Deklaration wurde gleichzeitig eine Variable mit dem Namen
<code>addOne</code> erzeugt. Die Variable <code>addOne</code> enthält die Funktion <code>addOne()</code>. Diese Funktion
wird nun der Methode <code>map()</code> übergeben. Intern ruft jetzt <code>map()</code> die Funktion <code>addOne()</code>
für jedes Array-Element auf. Dabei werden die Array-Elemente <code>addOne()</code> nacheinander als Parameter übergeben.
<code>addOne()</code> wird also sukzessive mit den Werten <code>1</code>, <code>2</code> und <code>3</code> aufgerufen.
Als Ergbnis erhält man die Werte <code>2</code>, <code>3</code> und <code>4</code>.
Diese Werte werden von <code>map()</code> als neues Array zurückgegeben. Das ursprüngliche Array bleibt dabei unverändert.
Die Methode <code>map()</code> hat also zusammen mit
der Funktion <code>addOne()</code> das Array <code>[1, 2, 3]</code> auf das Array <code>[2, 3, 4]</code> abgebildet.<br><br>
Eine Funktion, die einer anderen Funktion als Parameter übergeben wird und von dieser dann aufgerufen wird, bezeichnet man in der
Informatik als <a href="https://de.wikipedia.org/wiki/R%C3%BCckruffunktion">Callback</a>.`,

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
