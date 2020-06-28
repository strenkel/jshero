(function(testutil, evaluator) {

  jshero.koans.add({

    id: 'method1',

    title: 'Methoden',

    lesson: `Bisher waren die Werte von Objekt-Eigenschaften Daten wie Strings oder Zahlen.
Objekt-Eigenschaften können aber auch Funktionen sein. Solche Objekt-Eigenschaften nennt man
Methoden. Methoden operieren auf den Daten eines Objekts.

<pre><code>let ware = {
  name: 'Äpfel',
  preis: 2.15,
  erhoehePreis: function(erhoehung) {
    this.preis = this.preis + erhoehung;
  }
};

let alterPreis = ware.preis;
ware.erhoehePreis(0.05);
let neuerPreis = ware.preis;</code></pre>

Das Objekt <code>ware</code> besitzt die Methode <code>erhoehePreis</code>. Diese Methode greift mithilfe von
<code>this</code> auf die Objekt-Eigenschaft <code>preis</code> zu. <code>this</code> steht innerhalb eines Objekts für
das Objekt selbst. Mit der bekannten Punkt-Notation kann man nun auf die Objekt-Eigenschaften zugreifen und sie
verändern.<br>
Von außen wird eine Methode über die zugeordnete Variable und der Punkt-Notation aufgerufen.`,

    task: `Definiere ein Objekt mit den beiden Eigenschaften <code>x</code> und <code>y</code> sowie einer Methode
<code>moveX</code>. <code>x</code> und <code>y</code> sollen den Wert <code>0</code> erhalten. <code>moveX</code>
soll den Wert von <code>x</code> um <code>1</code> erhöhen. Weise das Objekt einer Variablen <code>point</code> zu.`,

    tests: [

      function() {
        return testutil.assert_variableDefined('point');
      },

      function() {
        let out = evaluator.evalTest("point");
        let ok, msg;
        if (out === null) {
          ok = false;
          msg = "<code>point</code> ist <code>null</code>.";
        } else if (out.x === 0) {
          ok = true;
          msg = "<code>point.x</code> hat den Wert <code>0</code>."
        } else {
          ok = false;
          msg = "<code>point.x</code> hat nicht den Wert <code>0</code>, sondern <code>" + out.x + "</code>.";
        }

        return {
          ok: ok,
          msg: msg
        }

      },

      function() {
        let out = evaluator.evalTest("point");
        let ok, msg;
        if (out.y === 0) {
          ok = true;
          msg = "<code>point.y</code> hat den Wert <code>0</code>."
        } else {
          ok = false;
          msg = "<code>point.y</code> hat nicht den Wert <code>0</code>, sondern <code>" + out.y + "</code>.";
        }

        return {
          ok: ok,
          msg: msg
        }

      },

      function() {
        return testutil.assert_isFunction("point.moveX");
      },

      function() {
        let out = evaluator.evalTest("point");
        let ok, msg;
        out.moveX();
        if (out.x === 1 && out.y === 0) {
          ok = true;
          msg = "<code>moveX</code> verschiebt den Punkt von (0, 0) nach (1, 0).";
        } else {
          ok = false;
          msg = "<code>moveX</code> verschiebt den Punkt von (0, 0) nicht nach (1, 0), sondern nach (" +
            out.x + ", " + out.y + ").";
        }

        return {
          ok: ok,
          msg: msg
        };
      }

    ]

  });

})(jshero.testutil, jshero.evaluator);