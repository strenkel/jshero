jshero.koans.add({

  id: 'function',

  title: 'Functions',

  lesson: `A function is a block of statements that can be executed as often as you like.
A function can have parameters and can return a value.
Functions are defined by the keyword <code>function</code>, followed by the parameters enclosed in parentheses,
followed by the instructions enclosed in curly brackets.
Use the keyword <code>return</code> to return a value. At the same time <code>return</code> terminates the function.
Functions can be assigned to a variable. With

<pre><code>let color = function() {
  return 'red';
};</code></pre>

we define a function that returns the value <code>'red'</code>. The function has no parameters (the parentheses are empty)
and contains only the return statement. The function is assigned to the variable <code>color</code>.
The function is called via this variable:

<pre><code>let result = color();</code></pre>

Now the function is executed. Its return is assigned to the variable <code>result</code>. <code>result</code> therefore
has the value <code>'red'</code>.`,

  task: `Declare a variable <code>hello</code>. Assign a function to it returning <code>'Hello world!'</code>.`,

  hint: `<pre><code>let hello = function() {
  ...
};</code></pre>`,

  solution: `<pre><code>let hello = function() {
  return 'Hello world!';
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('hello');
    },

    function() {
      return jshero.testutil.assert_functionReturns('hello()', 'Hello world!');
    }
  ]

});
