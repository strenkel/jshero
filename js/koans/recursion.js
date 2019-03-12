(function(testutil) {

  jshero.koans.add({

    id: 'recursion',

    title: 'Rekursion',

    lesson: `Funktionen können sich auch selbst aufrufen. Das nennt man <a href="https://de.wikipedia.org/wiki/Rekursive_Programmierung">Rekursion</a>.
Das berühmteste Beispiel ist Berechnung der Fakultät:

<pre><code>var fakultaet = function(n) {
  if (n === 0) {
    return 1;
  }
  return fakultaet(n - 1) * n;
};</code></pre>

Die <a href="https://de.wikipedia.org/wiki/Fakult%C3%A4t_(Mathematik)">Fakultät</a> einer natürlichen Zahl ist das Produkt aller
natürlichen Zahlen (ohne Null) kleiner oder gleich dieser Zahl. Sie wird durch ein nachgestelltes Ausrufezeichen abgekürzt:
n! = 1 * 2 * 3 ... (n-1) * n. Man sieht, dass man für die Berechnung der Fakultät von n die Fakultät von n-1 benutzen kann: n! = (n-1)! * n.
Das Beispielprogramm ist die Umsetzung dieser Formel. Um die Fakultät von n zu berechnen, muss man die Fakultät von n-1 berechnen und
das Ergebnis mit n multiplizieren. So ruft sich die Funktion <code>fakultaet</code> immer wieder selbst mit einem um 1 verminderten Wert auf.
Nun benötigt man noch eine Abbruchbedingung, damit die Rekursion nicht unendlich weiterläuft. Diese Abbruchbedingung steht in der zweiten Codezeile.
Ist n bei 0 angekommen, kennen wir das Ergebnis. Die Fakultät von 0 ist 1. Dieser Wert wird direkt zurückgegeben.`,

    task: `Schreibe eine Funktion <code>reverse</code>, die die Reihenfolge der Zeichen in einem String umkehrt.
<code>reverse("Nebel")</code> sollte <code>"lebeN"</code> zurückgeben. Die Lösung soll rekursiv sein.`,

    beforeTests: function() {
      if (typeof reverse !== "undefined") {
        reverse = undefined;
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