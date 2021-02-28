(function(testutil) {

  jshero.koans.add({

    id: 'const',

    title: 'Konstanten',

    lesson: `Bisher haben wir Variablen mit <code>let</code> deklariert. Solchen Variablen kann man beliebig oft einen
neuen Wert zuweisen. Manchmal kommt es jedoch vor, dass eine Variable ihren Wert garnicht ändern soll.
Eine solche Variable könnte man natürlich auch mit <code>let</code> deklarieren. Man muss dann aufpassen,
dass man ihren Wert nicht aus Versehen ändert. Besser wäre es, wenn man ihren Wert erst garnicht ändern kann. Hier kommt
<code>const</code> ins Spiel:

<pre><code>const MEHRWERTSTEUER = 1.19;
let netto = 100;
let brutto = MEHRWERTSTEUER * netto;
console.log(brutto);

MEHRWERTSTEUER = 1.20; // Programmfehler!
netto = 200;
brutto = MEHRWERTSTEUER * netto;
console.log(brutto);</code></pre>

Eine Deklaration mit <code>const</code> erzeugt eine Konstante. Eine Konstante funktioniert genauso wie eine mit
<code>let</code> erzeugte Variable. Mit einem Unterschied: weist man einer Konstante einen neuen Wert zu, so kommt
es zu einem Programmfehler. Führt man obigen Code im <a href="../playground.html">JS-Hero Playground</a> aus,
so wird korrekt <code>119</code> ausgegeben. Das nächste Brutto wird allerdings nicht ausgegeben.
Stattdessen erhalten wir einen Fehler wie "invalid assignment to const 'MEHRWERTSTEUER'". In Zeile 6 haben wir der
Konstanten <code>MEHRWERTSTEUER</code> den neuen Wert <code>1.20</code> zugeordnet. Das ist nicht erlaubt. Das Programm
bricht an dieser Stelle mit dem genannten Fehler ab. Entfernt man diese Zeile, läuft das Programm korrekt durch.
<br><br>
Einer Konstante muss man direkt bei der Deklaration einen Wert zuweisen. Eine Konstante nur deklarieren und ihr
später einen Wert zuzuweisein, ist nicht zulässig.

<pre><code>const HOUR_IN_SECONDS = 3600; // Korrekt!
const NUMBER_OF_WEEKDAYS; // Programmfehler!
NUMBER_OF_WEEKDAYS = 7;</code></pre>

Das Programm bricht in der zweiten Zeile mit einen Fehler wie "missing = in const declaration" ab.
<br><br>
Noch ein stylistischer Hinweis: Wir haben Konstanten mit Großbuchstaben geschrieben. Das ist keine Vorgabe.
Wir hätten sie auch klein schreiben können. <code>mehrwertsteuer</code> geht genauso gut wie
<code>MEHRWERTSTEUER</code>. Die Großschreibung hat jedoch den Vorteil, dass man Konstanten schon an ihrer Schreibweise
erkennt.
<br><br>
Da man die Verwendung von Konstanten nicht gut testen kann, hier eine komplexere Aufgabe aus dem Bereich der
Mathematik.`,

    task: `Schreibe eine Funktion <code>primes</code>, die eine natürliche Zahl n entgegennimmt und ein Array aller
<a href="https://de.wikipedia.org/wiki/Primzahl">Primzahlen</a> kleiner gleich n zurückgibt.<br><br>
Beispiel: <code>primes(10)</code> sollte <code>[2, 3, 5, 7]</code> zurückgeben.`,

    tests: [

      function() {
        return testutil.assert_isFunction('primes');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('primes', 1);
      },

      function() {
        return testutil.assert_functionReturns('primes(1)', []);
      },

      function() {
        return testutil.assert_functionReturns('primes(2)', [2]);
      },

      function() {
        return testutil.assert_functionReturns('primes(3)', [2, 3]);
      },

      function() {
        return testutil.assert_functionReturns('primes(10)', [2, 3, 5, 7]);
      },

      function() {
        return testutil.assert_functionReturns('primes(30)', [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      }

    ]

  });

})(jshero.testutil);