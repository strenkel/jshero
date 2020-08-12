jshero.koans.add({

  id: 'numbertofixed',

  title: 'Number: toFixed()',

  lesson: `Eine weitere Number-Methode ist <code>toFixed</code>. Sie gibt die Zahl als String mit festen Nachkommastellen zurück.

<code><pre>let n = 7.25
let zeroDigits = n.toFixed(0);
let oneDigit = n.toFixed(1);
let twoDigits = n.toFixed(2);
let threeDigits = n.toFixed(3);</code></pre>

<code>zeroDigits</code> hat den Wert <code>'7'</code>. Es hat keine Nachkommastellen. <code>oneDigit</code> hat den Wert
<code>'7.3'</code>. Es wird wie bei <code>Math.round()</code> kaufmänisch gerundet. <code>twoDigits</code> hat den Wert
<code>'7.25'</code>. Und <code>threeDigits</code> hat den Wert <code>'7.250'</code>. Hier werden fehlende Nachkommastellen
mit 0 aufgefüllt.`,

  task: `Schreibe eine Funktion <code>toEuro</code>, die eine Zahl als Euro-Betrag ausgibt. Der Betrag soll zwei
Nachkommastellen und ein angehängtes Euro-Zeichen besitzen. Dezimalpunkt soll das Komma sein.<br><br>
Beispiel: <code>toEuro(1)</code> soll '1,00 €' ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('toEuro');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('toEuro', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toEuro(0)', '0,00 €');
    },

    function() {
      return jshero.testutil.assert_functionReturns('toEuro(1)', '1,00 €');
    },

    function() {
      return jshero.testutil.assert_functionReturns('toEuro(1.2555)', '1,26 €');
    },

    function() {
      return jshero.testutil.assert_functionReturns('toEuro(123.4)', '123,40 €');
    }
  ]

});
