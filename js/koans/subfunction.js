(function(testutil) {

  jshero.koans.add({

    id: 'subfunction',

    title: 'Funktionen benutzen Funktionen',

    lesson: `Funktionen können weitere Funktionen aufrufen:
<pre><code>var brutto = function(netto) {
  var steuersatz = 19;
  var steuer = netto * steuersatz / 100;
  return netto + steuer;
};

var addiereMitMehrwertsteuer = function(nettoX, nettoY) {
  var bruttoX = brutto(nettoX);
  var bruttoY = brutto(nettoY);
  return bruttoX + bruttoY;
};</code></pre>

<code>addiereMitMehrwertsteuer</code> nimmt 2 Nettobeträge entgegen und gibt die Summe der Bruttobeträge zurück.
<code>brutto</code>berechnet aus einem Nettobetrag den Bruttobetrag. Dabei wird eine Mehrwertsteuer von 19% zugrunde
gelegt. Anstatt den Bruttobetrag selbst zu berechnen, ruft <code>addiereMitMehrwertsteuer</code> die Funktion
<code>brutto</code> auf. Das hat zwei Vorteile: Der Code ist besser lesbar und die Bruttoberechnung wird zentral
an einer Stelle durchgeführt.`,

    task: `Schreibe eine Funktion <code>sum</code>, die ein Array gefüllt mit Zahlen entgegennimmt und die Summe dieser
Zahlen zurückgibt. Schreibe eine Funktion <code>mean</code>, die ein Array gefüllt mit Zahlen entgegennimmt und den
Durchschnitt dieser Zahlen zurückgibt. Die Funktion <code>mean</code> soll dabei die Funktion <code>sum</code> benutzen.`,

    exports: ["sum", "mean"],

    beforeTests: function() {
      if (typeof sum !== "undefined") {
        mean = undefined;
      }
      if (typeof mean !== "undefined") {
        mean = undefined;
      }
    },

    tests: [

      // --- test sum ---

      function() {
        return testutil.assert_isFunction('sum');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('sum', 1);
      },

      function() {
        return testutil.assert_functionReturns('sum([0])', 0);
      },

      function() {
        return testutil.assert_functionReturns('sum([1, 2])', 3);
      },

      function() {
        return testutil.assert_functionReturns('sum([1, 4, 10, 85])', 100);
      },

      function() {
        return testutil.assert_functionReturns('sum([-2, -4, 17, 34])', 45);
      },

      // --- test mean ---

      function() {
        return testutil.assert_isFunction('mean');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('mean', 1);
      },

      function() {
        return testutil.assert_functionReturns('mean([0])', 0);
      },

      function() {
        return testutil.assert_functionReturns('mean([1, 2])', 1.5);
      },

      function() {
        return testutil.assert_functionReturns('mean([1, 4, 10, 85])', 25);
      },

      function() {
        return testutil.assert_functionReturns('mean([-2, -4, 17, 34])', 11.25);
      }
    ]

  });

})(jshero.testutil);