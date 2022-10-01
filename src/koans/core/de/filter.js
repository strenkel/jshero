jshero.koans.add({

    id: 'filter',
  
    title: 'Array: filter()',
  
    lesson: `Eine weitere wichtige Array-Methode mit Funktionsparamter ist <code>filter()</code>. Sie filtert aus einem Array alle
Elemente heraus, die einen durch die Callback-Funktion implementierten Test bestehen, und gibt diese als neues Array zurück.
Die Callback-Funktion muss dabei bei Aufruf mit einem Array-Element entweder <code>true</code> oder <code>false</code>
ergeben. Array-Elemente, die <code>true</code> ergeben, landen im gefilterten Array. Das ursprüngliche Array wird wie bei <code>map()</code>
nicht verändert.
  
<pre><code>let numbers = [7, -6, 120, -21, 2];

// [7, 120, 2]
let positiveNumbers = numbers.filter(x => x > 0);

// [-6, -21]
let negativeNumbers = numbers.filter(x => x < 0);

// [-6, 120, 2]
let evenNumbers = numbers.filter(x => x % 2 === 0);</code></pre>

Läßt sich die Filterbedingung wie hier in einem kurzen Ausdruck darstellen, so kann man die Callback-Funktion elegant
als Pfeilfunktion übergeben. In komplexeren Fällen ist eine eigenständige Funktion sinnvoll:

<pre><code>const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
   
  if (num < 2) {
    // nicht prim, weil zu klein
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // nicht prim, weil teilbar
      return false;
    }
  }
  // prim
  return true;
}

// [2, 3, 5, 7]
const primes = numbers.filter(isPrime);</code></pre>`,

    hint: `Schreibe zunächst eine Funktion <code>containsBlau()</code>, die einen String entgegennimmt und <code>true</code> zurückgibt,
wenn der String <code>'blau'</code> enhält. Enthält er nicht <code>'blau'</code>, soll <code>false</code> zurückgegeben werden. Groß- und Kleinschreibung
soll keine Rolle spielen. Verwende dann die Array-Funktion <code>filter()</code> zusammen mit <code>containsBlau()</code>, um die geforderte Funktion
<code>filterBlau()</code> zu schreiben.`,

    solution: `<pre><code>function containsBlau(word) {
  return word.toLowerCase().indexOf('blau') >= 0;
}

function filterBlau(words) {
  return words.filter(containsBlau);
}</pre></code>`,
  
    task: `Schreibe eine Funktion <code>filterBlau</code>, die ein Array mit Strings entgegennimmt
und alle Array-Elemente, die den String <code>'blau'</code> enthalten, als Array zurückgibt. Groß- und Kleinschreibung
soll keine Rolle spielen.<br><br>
Beispiel: <code>filterBlau(['Korngelb', 'Tannenblau', 'Rosenrot'])</code> sollte
<code>['Tannenblau']</code> ergeben.`,
  
    tests: [
      function() {
        return jshero.testutil.assert_isFunction('filterBlau');
      },
  
      function() {
        return jshero.testutil.assert_functionHasNumOfParameter('filterBlau', 1);
      },
  
      function() {
        return jshero.testutil.assert_functionReturns("filterBlau(['Himmelblau'])", ['Himmelblau']);
      },

      function() {
        return jshero.testutil.assert_functionReturns("filterBlau(['Korngelb', 'Tannenblau', 'Rosenrot'])", ['Tannenblau']);
      },

      function() {
        return jshero.testutil.assert_functionReturns("filterBlau(['Blau', 'Gelb'])", ['Blau']);
      },

      function() {
        return jshero.testutil.assert_functionReturns("filterBlau(['ROTKELCHEN', 'BLAUMEISE'])", ['BLAUMEISE']);
      },

      function() {
        return jshero.testutil.assert_functionReturns("filterBlau(['grün', 'weiß'])", []);
      },

      function() {
        return jshero.testutil.assert_functionReturns("filterBlau([])", []);
      }
      
    ]
     
  });
  