jshero.koans.add({

  id: 'break',

  title: 'break und continue',

  lesson: `Mit <code>break</code> wird eine Schleife beendet. Das Programm wird nach der Schleife fortgesetzt.

<pre><code>let words = 'blau weiß rot';
let indexFirstSpace = -1;
for (let i = 0; i < words.length; i++) {
  if (words.charAt(i) === ' ') {
    indexFirstSpace = i;
    break;
  }
}</code></pre>

Ist das Zeichen mit dem Index <code>i</code> in <code>words</code> das Leerzeichen, so ist die
<code>if</code>-Bedingung erfüllt. <code>indexFirstSpace</code> bekommt den Laufindex <code>i</code> zugewisen
und der <code>break</code>-Befehl wird ausgeführt. Die Schleife wird beendet.
Die Codeausführung wird nach der Schleife fortgesetzt. In unserem Beispiel ist das Zeichen mit dem Index <code>4</code>
das Leerzeichen. Sobald die Schleifenvariable <code>i</code> den Wert <code>4</code> erreicht hat,
bekommt <code>indexFirstSpace</code> den Wert <code>4</code> zugewiesen und die Schleife wird beendet.<br><br>

Mit <code>continue</code> wird der aktuelle Schleifendurchlauf beendet. Die Programmausführung springt zum Schleifenkopf.

<pre><code>let sum = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum = sum + i;
}</code></pre>

Ist <code>i</code> eine ungerade Zahl, so gilt: i modulo 2 = 1. Die <code>if</code> - Bedingung ist nicht erfüllt.
Die Codeausführung wird nach dem <code>if</code> fortgesetzt und <code>i</code> wird zu <code>sum</code> hinzugezählt.
Ist <code>i</code> eine gerade Zahl, so gilt: i modulo 2 = 0. Die <code>if</code> - Bedingung ist erfüllt und
<code>continue</code> wird ausgeführt. Die Code-Ausführung springt direkt zum Schleifenkopf. <code>i</code> wird nicht
zu <code>sum</code> hinzugezählt. So werden alle ungeraden Zahlen kleiner 10 aufaddiert.<br><br>
<code>break</code> und <code>continue</code> kann man in allen Schleifen (for, while, do...while) verwenden.`,

  task: `Schreibe eine Funktion <code>isPrime</code>. Sie soll prüfen, ob eine übergebene Zahl eine Primzahl ist oder
nicht. Ist die Zahl prim, so soll <code>true</code> zurückgegeben werden, im anderen Fall <code>false</code>. Eine
<a href='https://de.wikipedia.org/wiki/Primzahl'>Primzahl</a> ist eine natürliche Zahl, die größer als 1 und nur durch
sich selbst und durch 1 teilbar ist.<br><br>
Beispiel: <code>isPrime(2)</code> soll <code>true</code> und <code>isPrime(4)</code> soll <code>false</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('isPrime');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('isPrime', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(2)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(3)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(4)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(11)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(281)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(351)', false);
    }

  ]

});
