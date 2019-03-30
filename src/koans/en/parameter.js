jshero.koans.add({

  id: "parameter",

  title: "Parameters",

  lesson: `Now we get to know functions with parameters. With
<pre><code>var give = function(input) {
  return input;<br>};</code></pre>
we define a function that simply returns the parameter <code>input</code>.
Parameters are variables. With
<pre><code>var result = give("apple");</code></pre>
we call the function and pass it the argument <code>"apple"</code>. The function will be executed.
The argument <code>"apple"</code> will be assigned to the parameter <code>input</code>.
<code>input</code> gets the value <code>"apple"</code>.
The variable <code>input</code> is returned in the single code line of the function.
This return is assigned to the variable <code>result</code>. Finally, <code>result</code> has the value <code>"apple"</code>.`,

  task: `Write a function <code>echo</code> that also returns the passed parameter.
<code>echo("Greta")</code> should return <code>"Greta"</code> and <code>echo("CO2")</code> should return <code>"CO2"</code>`,

  hint: `<pre><code>var echo = function(sound) {
  ...
};</code></pre>`,

  solution: `<pre><code>var echo = function(sound) {
  return sound;
};</code></pre>`,

  beforeTests: function() {
    if (typeof echo !== "undefined") {
      echo = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('echo');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('echo', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('echo("Greta")', 'Greta');
    },

    function() {
      return jshero.testutil.assert_functionReturns('echo("CO2")', 'CO2');
    }
  ]

});
