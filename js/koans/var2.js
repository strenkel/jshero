(function(testutil) {

  jshero.koans.add({

    id: "var2",

    title: "Mehrere Variablen",

    lesson: `Möchte man mehrere Variablen deklarieren und initialisieren, so kann man das in zwei Programmzeilen tun:

<pre><code>var stadt = "Prag";
var land = "Tschechien";</code></pre>

In jeder Zeile steht eine Anweisung. Jede Anweisung sollte mit einem Semikolon abgeschlossen werden.`,

    task: `Deklariere eine Variable <code>blume</code> und weise ihr den Wert <code>"Rose"</code> zu.
Deklariere eine zweite Variable <code>tier</code> und weise ihr den Wert <code>"Käfer"</code> zu.`,

    exports: ["blume", "tier"],

    beforeTests: function() {
      if (typeof blume !== "undefined") {
        blume = undefined;
      }
      if (typeof tier !== "undefined") {
        tier = undefined;
      }
    },

    tests: [
      function() {
        return testutil.assert_variableDefined('blume');
      },

      function() {
        return testutil.assert_variableHasValue(blume, 'blume', 'Rose');
      },

      function() {
        return testutil.assert_variableDefined('tier');
      },

      function() {
        return testutil.assert_variableHasValue(tier, 'tier', 'Käfer');
      }
    ]

  });

})(jshero.testutil);