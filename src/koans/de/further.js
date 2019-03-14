jshero.koans.add({

  id: "further",

  title: "Fortsetzung folgt ...",

  lesson: 'JS Hero wird fortgesetzt. Weitere Übungen folgen. Zum Abschluss noch eine Aufgabe aus dem Gebiet der Mathematik.',

  task: `Schreibe eine Funktion <code>quersumme</code>, die die Quersumme einer natürlichen Zahl berechnet.
Die Quersumme einer Zahl ist dabei die Summe ihrer Ziffern. <code>quersumme(198)</code> sollte <code>18</code> ergeben.`,

  beforeTests: function() {
    if (typeof quersumme !== "undefined") {
      quersumme = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('quersumme');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('quersumme', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('quersumme(1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('quersumme(198)', 18);
    },

    function() {
      return jshero.testutil.assert_functionReturns('quersumme(123456789)', 45);
    }
  ],

  hint: `<pre><code>var quersumme = function(zahl) {
// Extrahiere in einer Schleife
// mit Modulo jeweils die
// Einer-Stelle und addiere 
// sie auf.
};</code></pre>`,

  solution: `<pre><code>var quersumme = function(zahl) {
  var sum = 0;
  var rest = zahl;
  while (rest > 0) {
    var einer = rest % 10;
    sum = sum + einer;
    rest = (rest - einer)/10;
  }
  return sum;
};</code></pre>`

});
