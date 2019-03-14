(function(testutil) {

  jshero.koans.add({

    id: 'fakultaet',
    title: 'Fakultät',

    lesson: `Die <code>for</code>-Schleife soll nochmal anhand der in der Mathematik verwendeten Funktion
<a href="https://de.wikipedia.org/wiki/Fakult%C3%A4t_(Mathematik)">Fakultät</a> geübt werden.
Die Fakultät einer natürlichen Zahl n ist das Produkt aller natürlichen Zahlen (ohne Null) kleiner oder gleich n.
Sie wird durch ein nachgestelltes Ausrufezeichen abgekürzt: 3! = 1*2*3 = 6. Per Definition gilt 0! = 1.`,

    task: `Schreibe eine Funktion <code>fakultaet</code>, die die Fakultät einer natürlichen Zahl berechnet.
<code>fakultaet(3)</code> sollte <code>1*2*3</code> = <code>6</code> ergeben.`,

    hint: `<pre><code>var fakultaet = function(n) {
      var result = 1;
      for (...) {
        ...
      }
      return result;
    };</pre></code>`,

    solution: `<pre><code>var fakultaet = function(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};</pre></code>`,

    beforeTests: function() {
      if (typeof fakultaet !== "undefined") {
        addiereBis = undefined;
      }
    },

    tests: [
      function() {
        return testutil.assert_isFunction('fakultaet');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('fakultaet', 1);
      },

      function() {
        return testutil.assert_functionReturns('fakultaet(0)', 1);
      },

      function() {
        return testutil.assert_functionReturns('fakultaet(1)', 1);
      },

      function() {
        return testutil.assert_functionReturns('fakultaet(2)', 2);
      },

      function() {
        return testutil.assert_functionReturns('fakultaet(3)', 6);
      },

      function() {
        return testutil.assert_functionReturns('fakultaet(4)', 24);
      },

      function() {
        return testutil.assert_functionReturns('fakultaet(9)', 362880);
      }
    ]

  });

})(jshero.testutil);