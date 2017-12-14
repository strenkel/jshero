jshero.koans.add({

  id: "functioncall",

  title: "Function calls",

  lesson: `The difference between the definition and the call of a function is important.
  The following definition of a function

<pre><code>var f = function() {
  return "hello";
};</code></pre>

  says what the function will do: Return "hello", if called. The function will not be executed, but only provided.
  Only with its call

<pre><code>var x = f();</code></pre>

  the function is executed. Every instruction in the function block is executed in order. The result of the function in the example above will be assigned to the variable <code>x</code>.
  To define a function use the keyword <code>function</code>.
  If the function is assigned to a variable, the function is called via this variable.
  Functions are defined once so that they can be used multiple times at different program points by calling them.`,

  task: `1. Define a function <code>greet</code> returning the value <code>"Haydo!"</code>.
  <br/>
    2. Declare a variable <code>salutation</code>. Call the functon  <code>greet</code> and assigne the result of the call to the variable <code>salutation</code>.`,

  beforeTests: function() {
      greet = undefined;
      salutation = undefined;
  },

  tests: [

    function() {
        return jshero.testutil.assert_isFunction('greet');
    },

    function() {
        return jshero.testutil.assert_functionReturns('greet()', 'Haydo!');
    },

    function() {
        return jshero.testutil.assert_variableDefined(salutation, 'salutation');
    },

    function() {
        return jshero.testutil.assert_de_variableHasValue(salutation, 'salutation', 'Haydo!');
    }
  ]

});
