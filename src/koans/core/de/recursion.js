(function(testutil, evaluator) {

  jshero.koans.add({

    id: 'recursion',

    title: 'Rekursion',

    lesson: `Funktionen können sich auch selbst aufrufen. Das nennt man <a href='https://de.wikipedia.org/wiki/Rekursive_Programmierung'>Rekursion</a>.
Das bekannteste Beispiel ist die Berechnung der Fakultät:

<pre><code>let fakultaet = function(n) {
  if (n === 0) {
    return 1;
  }
  return fakultaet(n - 1) * n;
};</code></pre>

Die <a href='https://de.wikipedia.org/wiki/Fakult%C3%A4t_(Mathematik)'>Fakultät</a> einer natürlichen Zahl ist das Produkt aller
natürlichen Zahlen (ohne Null) kleiner oder gleich dieser Zahl. Sie wird durch ein nachgestelltes Ausrufezeichen abgekürzt:
n! = 1 * 2 * 3 ... (n-1) * n. Man sieht, dass man für die Berechnung der Fakultät von n die Fakultät von n-1 benutzen kann: n! = (n-1)! * n.
Das Beispielprogramm ist die Umsetzung dieser Formel. Um die Fakultät von n zu berechnen, muss man die Fakultät von n-1 berechnen und
das Ergebnis mit n multiplizieren. So ruft sich die Funktion <code>fakultaet</code> immer wieder selbst mit einem um 1 verminderten Wert auf.
Nun benötigt man noch eine Abbruchbedingung, damit die Rekursion nicht unendlich weiterläuft. Diese Abbruchbedingung ist mit der
<code>if</code>-Bedingung formuliert. Ist n bei 0 angekommen, ruft sich <code>fakultaet</code> nicht mehr selbst auf,
sondern das Ergebnis, nämlich 0! = 1, wird direkt zurückgegeben.`,

    task: `Schreibe eine Funktion <code>reverse</code>, die die Reihenfolge der Zeichen in einem String umkehrt.
<code>reverse('Nebel')</code> sollte <code>'lebeN'</code> zurückgeben. Die Funktion sollte rekursiv sein.`,

    tests: [

      // --- test sum ---

      function() {
        return testutil.assert_isFunction('reverse');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('reverse', 1);
      },

      function() {
        return testutil.assert_functionReturns("reverse('')", '');
      },

      function() {
        return testutil.assert_functionReturns("reverse('X')", 'X');
      },

      function() {
        return testutil.assert_functionReturns("reverse('az')", 'za');
      },

      function() {
        return testutil.assert_functionReturns("reverse('Nebel')", 'lebeN');
      }

    ]

  });

})(jshero.testutil, jshero.evaluator);