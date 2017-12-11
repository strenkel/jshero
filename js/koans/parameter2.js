jshero.koans.add({

  id: "parameter2",

  title: "Parameternamen",

  lesson: `Bitte achte darauf, dass du eventuelle Parameter deiner Funktion anders nennst als die Funktion selbst.
  Die Funktion <code>f1</code> zum Beispiel

<pre><code>var f1 = function(f1) {
  return f1;
};</code></pre>

  macht das gleiche wie diese Funktion:

<pre><code>var f2 = function(eingabe) {
  return eingabe;
};</code></pre>

  Die zweite Funktionsdefinition ist aber besser, weil der Parameter <code>eingabe</code> heißt
  und damit anders als die Funktion selbst.
  `,

  task: `Schreibe eine Funktion <code>echo</code>, die einen Parameter hat und dessen Wert einfach zurückgibt.
  Achte darauf, dass der Parameter anders heißt, als die Funktion selbst.
  `,

  beforeTests: function() {
    echo = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('echo');
    },

    function() {
      var result = echo.length;
      var ok = result === 1;
      var msg;
      if (ok) {
        msg = '<code>echo</code> hat genau 1 Parameter.';
      } else {
        msg = '<code>echo</code> hat nicht 1, sondern ' + result + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      return jshero.testutil.assert_de_functionReturns('echo("Test")', "Test");
    },

    function() {
      return jshero.testutil.assert_de_functionReturns('echo("Hallo Welt!")', "Hallo Welt!");
    }
  ]

});
