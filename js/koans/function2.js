jshero.koans.add({

  id: "function2",

  title: "Mehrere Funktionen",

  lesson: `Wir definieren nun mehr als eine Funktion.

  Wiederholung: So wird eine Funktion mit Namen <code>farbe</code> definiert, die den Wert <code>"rot"</code>
  zurückgibt:

<pre><code>var farbe = function() {
  return "rot";
};</code></pre>

  `,

  task: `Definiere zwei Funktionen. Die erste Funktion <code>a</code> soll <code>"Hallo a!"</code>
  zurückgeben. Die zweite Funktion <code>b</code> soll <code>"Hallo b!"</code> zurückgeben.
  `,

  beforeTests: function() {
      a = undefined;
      b = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_de_isFunction('a');
    },

    function() {
      return jshero.testutil.assert_de_isFunction('b');
    },

    function() {
      return jshero.testutil.assert_de_functionReturns('a()', "Hallo a!");
    },

    function() {
      return jshero.testutil.assert_de_functionReturns('b()', "Hallo b!");
    }
  ]
});
