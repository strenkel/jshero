(function() {

jshero.koans.add({

  id: 'dowhile',

  title: 'do...while-Schleife',

  lesson: 'Die <code>do...while</code>-Schleife funktioniert ähnlich wie die <code>while</code>-Schleife. ' +
    'Der Schleifen-Code wird ausgeführt, solange die Schleifenbedingung <code>true</code> ergibt. ' +
    'Einziger Unterschied ist, dass die Schleifenbedingung nach dem Schleifen-Code überprüft wird. ' +
    'Dadurch ist sichergestellt, dass der Schleifen-Code mindestens einmal durchlaufen wird.' +
    '<pre><code>var restDurch6;<br>' +
    'var restDurch8;<br>' +
    'var kgV = 0;<br>' +
    'do {<br>' +
    '  kgV++;<br>' +
    '  restDurch6 = kgV % 6;<br>' +
    '  restDurch8 = kgV % 8;<br>' +
    '} while (restDurch6 !== 0 || restDurch8 !== 0)</code></pre>' +
    'Dieser Codeabschnitt berechnet das kleinste gemeinsame Vielfache (kgV) von 6 und 8. ' +
    'Das kgV ist die kleinste Zahl, die sowohl ein Vielfaches von 6 als auch ein Vielfaches von 8 ist. ' +
    'Die Vielfachen von 6 sind 6, 12, 18, 24, 30, ... und die Vielfachen von 8 sind 8, 16, 24, 32, ... . ' +
    'Damit ist das kgV von 6 und 8 die Zahl 24.<br>' +
    'Unser Codebeispiel prüft beginnend mit <code>1</code>, ob <code>kgV</code> sowohl durch <code>6</code> als auch durch <code>8</code> teilbar ist. ' +
    'Die Teilbarkeit wird mithilfe des Modulo-Operators überprüft. Eine Zahl ist durch 6 bzw. 8 teilbar, ' +
    'wenn sie Modulo 6 bzw. Modulo 8 den Wert 0 liefert. Die Modulo-Berechnung findet im Schleifen-Code statt. ' +
    'In der Schleifenbedingung wird dann überprüft, ob beide Modulo-Berechnungen <code>0</code> ergeben. Ist eine von beiden ' +
    'Modulo-Berechnungen nicht <code>0</code>, ist die Schleifenbedingung <code>true</code> und der Schleifen-Code wird mit einem um 1 erhöhten <code>kgV</code> ' +
    'erneut durchlaufen. Ergeben beide Modulo-Berechnungen <code>0</code>, ist die Schleifenbedingung <code>false</code> und die Schleife wird beendet. ' +
    '<code>kgV</code> hat dann den gewünschten Wert (nämlich 24), da es die erste Zahl ist, die sowohl durch 6 als auch durch 8 teilbar ist.',

  task: 'Schreibe eine Funktion <code>kgV</code>, die zwei natürliche Zahlen als Parameter entgegennimmt und deren kgV berechnet. ' +
    '<code>kgV(6, 8)</code> sollte <code>24</code> zurückgeben.',

  beforeTests: function() {
    if (typeof kgV !== "undefined") {
      kgV = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof kgV === 'function';
      var msg;
      if (ok) {
        msg = '<code>kgV</code> ist eine Funktion.';
      } else {
        msg = '<code>kgV</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = kgV.length === 2;
      var msg;
      if (ok) {
        msg = '<code>kgV</code> hat 2 Parameter.';
      } else {
        msg = '<code>kgV</code> hat nicht 2, sondern ' + kgV.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = kgV(6, 8);
        ok = result === 24;
        if (ok) {
          msg = '<code>kgV(6, 8)</code> gibt <code>24</code> zurück.';
        } else {
          msg = '<code>kgV(6, 8)</code> gibt nicht <code>24</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>kgV(6, 8)</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = kgV(5, 7);
        ok = result === 35;
        if (ok) {
          msg = '<code>kgV(5, 7)</code> gibt <code>35</code> zurück.';
        } else {
          msg = '<code>kgV(5, 7)</code> gibt nicht <code>35</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>kgV(5, 7)</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }
  ]

});

})();
