jshero.koans.add({

  id: "round",

  title: "Runden",

  lesson: `Möchte man eine Dezimalzahl auf- oder abrunden, stehen einem die Funktionen <code>Math.round()</code>,
<code>Math.floor()</code> (engl.: Boden) und <code>Math.ceil()</code> (engl: Decke) zur Verfügung.

<pre><code>var a = Math.round(5.49);
var b = Math.round(4.5);
var c = Math.floor(5.99);
var d = Math.ceil(4.01);</code></pre>

<code>Math.round()</code> rundet kaufmännisch. Zahlen mit der ersten Dezimalstelle kleiner gleich 4 werden abgerundet, alle anderen aufgerundet.
<code>Math.floor()</code> rundet immer ab und <code>Math.ceil()</code> rundet immer auf. Die Variablen <code>a</code> bis <code>d</code>
erhalten also alle den Wert <code>5</code>.`,

  task: `Schreibe eine Funktion <code>round100</code>, die eine Dezimalzahl kaufmännisch auf die Hunderterstelle rundet.
<code>round100(1749)</code> sollte <code>1700</code> und <code>round100(856.123)</code> sollte <code>900</code> ergeben.`,

  hint: `Verwende neben <code>Math.round()</code> noch Multiplikation und Division.`,

  solution: `<pre><code>var round100 = function(x) {
  return Math.round(x / 100) * 100;
};</code></pre>`,

  beforeTests: function() {
    if (typeof round100 !== "undefined") {
      round100 = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('round100');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('round100', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('round100(49.999)', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('round100(50)', 100);
    },

    function() {
      return jshero.testutil.assert_functionReturns('round100(349)', 300);
    },

    function() {
      return jshero.testutil.assert_functionReturns('round100(350)', 400);
    },

    function() {
      return jshero.testutil.assert_functionReturns('round100(4649)', 4600);
    },

    function() {
      return jshero.testutil.assert_functionReturns('round100(4650)', 4700);
    }

  ]

});
