jshero.koans.add({

  id: 'fahrenheit',

  title: 'Fahrenheit',

  lesson: `The following task is taken from the <a href='https://www.freecodecamp.org'>freeCodeCamp</a>.`,

  task: `Write a function <code>toFahrenheit</code> that converts a temperature from <a href='https://en.wikipedia.org/wiki/Celsius'>Celsius</a>
to <a href='https://en.wikipedia.org/wiki/Fahrenheit'>Fahrenheit</a>.<br><br>
Example: <code>toFahrenheit(0)</code> should return <code>32</code>.`,

  hint: `If C is the temperature in Celsius and F the temperature in Fahrenheit, the following applies: F = 1.8 * C + 32.`,

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
