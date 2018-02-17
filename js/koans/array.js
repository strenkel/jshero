jshero.koans.add({

  id: 'array',

  title: 'Arrays anlegen',

  lesson: `Arrays sind Objekte zur Speicherung vieler, meist ähnlicher Werte. Diese sogenannten Elemente werden
in einem Array der Reihe nach abgelegt. Arrays erzeugt man am besten mit eckigen Klammern.

<pre><code>var sprachen = ["C", "C++", "Java", "JavaScript"];
var primzahlen = [2, 3, 5, 7, 11];
var leeresArray = [];
var a = "Douglas";
var b = 12;
var c = true;
var allesMoegliche = [a, b, c];</code></pre>

Die Elemente eines Arrays können, wie das letzte Beispiel zeigt, alle einen anderen Datentyp besitzen.`,

  task: `Schreibe eine Funktion <code>toArray</code>, die 2 Paramter entgegennimmt und diese als Array zurückgibt.
<code>toArray(5, 9)</code> sollte das Array <code>[5, 9]</code> ergeben.`,

  beforeTests: function() {
    if (typeof toArray !== "undefined") {
      toArray = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('toArray');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('toArray', 2);
    },

    function() {
      var ok, msg, e;
      try {
        var result = toArray(1, 2);
        ok = Array.isArray(result);
        if (ok) {
          msg = '<code>toArray(1, 2)</code> gibt ein Array zurück.';
        } else {
          msg = '<code>toArray(1, 2)</code> gibt kein Array zurück.';
        }
      } catch (exc) {
        ok = false;
        msg = jshero.i18n.get('errorAtCallOf') + ' <code>toArray(1, 2)</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      return jshero.testutil.assert_functionReturns('toArray(1, 2)', [1, 2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toArray("Hänsel", "Gretel")', ["Hänsel", "Gretel"]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toArray(1, "Maus")', [1, "Maus"]);
    }

  ]

});
