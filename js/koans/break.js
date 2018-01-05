jshero.koans.add({

  id: 'break',

  title: 'break und continue',

  lesson: 'Mit <code>break</code> wird eine Schleife beendet. Das Programm wird nach der Schleife fortgesetzt. ' +
    '<pre><code>var satz = "So ist das.";<br>' +
    'var i;<br>' +
    'for (i = 0; i < satz.length; i++) {<br>' +
    '  if (satz.charAt(i) === " ") {<br>' +
    '    break;<br>' +
    '  }<br>' +
    '}<br>' +
    'var laengeErstesWort = i;</code></pre>' +
    'Ist das Zeichen mit dem Index <code>i</code> in <code>satz</code> das Leerzeichen, ist die <code>if</code>-Bedingung erfüllt ' +
    'und der <code>break</code>-Befehl wird ausgeführt. Die Schleife wird beendet und die Codeausführung wird ' +
    'nach der Schleife fortgesetzt. In unserem Beispiel ist das Zeichen mit dem Index <code>2</code> das Leerzeichen. Sobald die Schleifenvariable <code>i</code> ' +
    'den Wert <code>2</code> erreicht hat, wird die Schleife beendet. <code>laengeErstesWort</code> bekommt dann den Wert <code>2</code> zugewiesen.<br><br>' +
    'Mit <code>continue</code> wird der aktuelle Schleifendurchlauf beendet. Die Programmausführung springt zum Schleifenkopf.' +
    '<pre><code>var summe = 0;<br>' +
    'for (var i = 0; i < 10; i++) {<br>' +
    '  if (i % 2 === 0) {<br>' +
    '    continue;<br>' +
    '  }<br>' +
    '  summe = summe + i;<br>' +
    '}<br></code></pre>' +
    'Ist <code>i</code> eine ungerade Zahl, so gilt: i modulo 2 = 1. Die <code>if</code> - Bedingung ist nicht erfüllt. ' +
    'Die Codeausführung wird nach dem <code>if</code> fortgesetzt und <code>i</code> wird zu <code>summe</code> hinzugezählt. ' +
    'Ist <code>i</code> eine gerade Zahl, so gilt: i modulo 2 = 0. Die <code>if</code> - Bedingung ist erfüllt und <code>continue</code> wird ausgeführt. ' +
    'Die Code-Ausführung springt direkt zum Schleifenkopf. <code>i</code> wird nicht zu <code>summe</code> hinzugezählt. ' +
    'So werden alle ungeraden Zahlen kleiner 10 aufaddiert.<br>' +
    '<code>break</code> und <code>continue</code> kann man in allen Schleifen (for, while, do...while) verwenden.',

  task: 'Schreibe eine Funktion <code>isPrime</code>. Sie soll prüfen, ob eine übergebene Zahl eine Primzahl ist oder nicht. Ist die ' +
    'Zahl prim, so soll <code>true</code> zurückgegeben werden, im anderen Fall <code>false</code>. ' +
    'Der Aufruf <code>isPrime(2)</code> soll <code>true</code> zurückgeben, <code>isPrime(4)</code> soll <code>false</code> ergeben. ' +
    'Eine Primzahl ist eine natürliche Zahl, die größer als 1 und nur durch sich selbst und durch 1 teilbar ist.',

  beforeTests: function() {
    if (typeof isPrime !== "undefined") {
      isPrime = undefined;
    }
  },

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
      return jshero.testutil.assert_functionReturns('isPrime(351)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isPrime(281)', true);
    }
  ]

});
