(function(testutil) {

  jshero.koans.add({

    id: 'undefined',

    title: 'undefined',

    lesson: `Up to now we had always initialized variables at declaration.

<pre><code>// declaration and initialization
let x = 1;</code></pre>

However, you can also declare a variable and initialize it later.

<pre><code>let x; // declaration
x = 1; // initialization</code></pre>

Variables that were not initialized have the value <code>undefined</code>.<br><br>
Uninitialized variables can also occur on function calls.
If you call a function with a parameter without an argument, the parameter gets the value <code>undefined</code>:

<pre><code>function echo(x) {
  return x;
}

// function call without argument
let y = echo();</code></pre>

<code>echo</code> is called without any argument.
The parameter <code>x</code> receives the value <code>undefined</code>. Since <code>echo</code> simply returns
it's parameter, <code>y</code> also gets the value <code>undefined</code>.<br><br>
A function that expects a parameter can be called without an argument.
When writing functions, you should always consider what should happen in this case.
It is good practice in such a case to assign a default value to the parameter.
We had seen this with the string method <code><a href="stringcharat.html">charAt(index)</a></code>.
Normally this method returns the character at position <code>index</code>.
If we call <code>charAt</code> without an argument, <code>index</code> gets the default <code>0</code>.
The character at position <code>0</code> is returned.<br><br>
To check for <code>undefined</code>, use  <a href='equals.html'>strict&nbsp;equality</a>.
Therefore, <code>charAt</code> could contain the following code snippet:

<pre><code>if (index === undefined) {
  index = 0;
}</code></pre>`,

    task: `Write a function <code>hello</code> having one parameter and returning <code>'Hello &lt;parameter&gt;!'</code>.
If <code>hello</code> is called without an argument, <code>'Hello world!'</code> should be returned.<br><br>
Example: <code>hello('Nala')</code> should return <code>'Hello Nala!'</code>.`,

    tests: [
      function() {
        return testutil.assert_isFunction('hello');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('hello', 1);
      },

      function() {
        return testutil.assert_functionReturns("hello('Nala')", 'Hello Nala!');
      },

      function() {
        return testutil.assert_functionReturns("hello('Badu')", 'Hello Badu!');
      },

      function() {
        return testutil.assert_functionReturns('hello()', 'Hello world!');
      }
    ]

  });

})(jshero.testutil);
