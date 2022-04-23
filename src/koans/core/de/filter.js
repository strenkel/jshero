jshero.koans.add({

    id: 'filter',
  
    title: 'Array: filter()',
  
    lesson: `Eine weitere wichtige Array-Funktion mit Funktionsparamter ist <code>filter()</code>. Sie filtert aus einem Array alle
Elemente heraus, die einen durch die Callback-Funktion implementierten Test bestehen, und gibt diese als neues Array zurück.
Die Callback-Funktion muss dabei bei Aufruf mit einem Array-Element entweder <code>true</code> oder <code>false</code>
ergeben. Array-Elemente, die <code>true</code> ergeben, landen im gefilterten Array.
  
<pre><code>let numbers = [7, -6, 120, -21, 2];

// [7, 120, 2]
let postiveNumbers = numbers.filter(x => x > 0);

// [-6, -21]
let negativeNumbers = numbers.filter(x => x < 0);

// [-6, 120, 2]
let evenNumbers = numbers.filter(x => x % 2 === 0);</code></pre>

Läßt sich die Filterbedingung wie hier in einem kurzen Ausdruck darstellen, so kann man die Callback-Funktion elegant
als Pfeilfunktion übergeben. In komplexeren Fällen ist eine eigenständige Funktion sinnvoll:

<pre><code>const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
   
  if (num < 2) {
    return false; // nicht prim, weil zu klein
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false; // nicht prim, weil teilbar
    }
  }
  return true; // prim
}

const primes = numbers.filter(isPrime); // [2, 3, 5, 7]</code></pre>`,
  
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
      }
      
    ]
     
  });
  