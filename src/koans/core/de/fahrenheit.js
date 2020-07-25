jshero.koans.add({

  id: "fahrenheit",

  title: "Fahrenheit",

  lesson: `Die folgende Aufgabe ist dem <a href="https://www.freecodecamp.org">freeCodeCamp</a> entnommen.`,

  task: `Schreibe eine Funktion <code>toFahrenheit</code>, die eine Temperaturangabe von
<a href="https://de.wikipedia.org/wiki/Grad_Celsius">Grad Celsius</a> in
<a href="https://de.wikipedia.org/wiki/Grad_Fahrenheit">Grad Fahrenheit</a> umrechnet.
<br><br>Beispiel: <code>toFahrenheit(0)</code> sollte <code>32</code> ergeben.`,

  hint: `Ist C die Temperatur in Grad Celsius und F die Temperatur in Grad Fahrenheit, so gilt: F = 1.8 * C + 32.`,

  solution: `<pre><code>function toFahrenheit(celsius) {
  return 1.8 * celsius + 32;
}</code></pre>`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('toFahrenheit');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('toFahrenheit', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toFahrenheit(0)', 32);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toFahrenheit(10)', 50);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toFahrenheit(40)', 104);
    },

    function() {
      return jshero.testutil.assert_functionReturns('toFahrenheit(100)', 212);
    }

  ]

});
