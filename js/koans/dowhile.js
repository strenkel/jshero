(function() {

  jshero.koans.add({

    id: 'dowhile',

    title: 'do...while-Schleife',

    lesson: `Die <code>do...while</code>-Schleife funktioniert ähnlich wie die <code>while</code>-Schleife.
Der Schleifen-Code wird ausgeführt, solange die Schleifenbedingung <code>true</code> ergibt.
Einziger Unterschied ist, dass die Schleifenbedingung nach dem Schleifen-Code überprüft wird.
Dadurch ist sichergestellt, dass der Schleifen-Code mindestens einmal durchlaufen wird.

<pre><code>var restDurch6;
var restDurch8;
var kgV = 0;
do {
  kgV++;
  restDurch6 = kgV % 6;
  restDurch8 = kgV % 8;
} while (restDurch6 !== 0 || restDurch8 !== 0)</code></pre>

Dieser Codeabschnitt berechnet das kleinste gemeinsame Vielfache (kgV) von 6 und 8.
Das kgV ist die kleinste Zahl, die sowohl ein Vielfaches von 6 als auch ein Vielfaches von 8 ist.
Die Vielfachen von 6 sind 6, 12, 18, 24, 30, ... und die Vielfachen von 8 sind 8, 16, 24, 32, ... .
Damit ist das kgV von 6 und 8 die Zahl 24.<br>
Unser Codebeispiel prüft beginnend mit <code>1</code>, ob <code>kgV</code> sowohl durch <code>6</code> als auch durch <code>8</code> teilbar ist.
Die Teilbarkeit wird mithilfe des Modulo-Operators überprüft. Eine Zahl ist durch 6 bzw. 8 teilbar,
wenn sie Modulo 6 bzw. Modulo 8 den Wert 0 liefert. Die Modulo-Berechnung findet im Schleifen-Code statt.
In der Schleifenbedingung wird dann überprüft, ob beide Modulo-Berechnungen <code>0</code> ergeben. Ist eine von beiden
Modulo-Berechnungen nicht <code>0</code>, ist die Schleifenbedingung <code>true</code> und der Schleifen-Code wird mit einem um 1 erhöhten <code>kgV</code>
erneut durchlaufen. Ergeben beide Modulo-Berechnungen <code>0</code>, ist die Schleifenbedingung <code>false</code> und die Schleife wird beendet.
<code>kgV</code> hat dann den gewünschten Wert (nämlich 24), da es die erste Zahl ist, die sowohl durch 6 als auch durch 8 teilbar ist.`,

    task: `Schreibe eine Funktion <code>kgV</code>, die zwei natürliche Zahlen als Parameter entgegennimmt und deren kgV berechnet.
'<code>kgV(6, 8)</code> sollte <code>24</code> zurückgeben.`,

    beforeTests: function() {
      if (typeof kgV !== "undefined") {
        kgV = undefined;
      }
    },

    tests: [
      function() {
        return jshero.testutil.assert_isFunction('kgV');
      },

      function() {
        return jshero.testutil.assert_functionHasNumOfParameter('kgV', 2);
      },

      function() {
        return jshero.testutil.assert_functionReturns('kgV(6, 8)', 24);
      },

      function() {
        return jshero.testutil.assert_functionReturns('kgV(5, 7)', 35);
      },

      function() {
        return jshero.testutil.assert_functionReturns('kgV(7, 5)', 35);
      },

      function() {
        return jshero.testutil.assert_functionReturns('kgV(15, 45)', 45);
      }
    ]

  });

})();
