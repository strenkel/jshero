jshero.koans.add({

  id: 'arguments',

  title: 'The arguments object',

  lesson: `Inside every function an <code>arguments</code> object is accessible.
It is an Array-like object that contains the values of the arguments passed to the function.

<pre><code>function add() {
  let arg0 = arguments[0];
  let arg1 = arguments[1];
  return arg0 + arg1;
}

let sum = add(1, 2);</code></pre>

<code>add</code> is called with arguments <code>1</code> and <code>2</code>.
So <code>arguments[0]</code> contains the value <code>1</code> and <code>arguments[1]</code> contains the value
<code>2</code>.<br><br>
With the <code>arguments</code> object you can access the passed arguments without parameters.
This is useful, for example, if you want to write a function that processes an arbitrary number of arguments.

<pre><code>function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

let s1 = add(2, 4);
let s2 = add(2, 3, 5, 7);</code></pre>

We iterate over all passed arguments and sum them up.
Thereby <code>arguments.length</code> returns the number of passed arguments.
Now we can call <code>add</code> with an arbitrary number of arguments.`,

  task: `Write a function <code>max</code> that calculates the maximum of an arbitrary number of numbers.
<code>max(1, 2)</code> should return <code>2</code> and <code>max(2, 3, 1)</code> should return <code>3</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('max');
    },

    function() {
      return jshero.testutil.assert_functionReturns('max(1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('max(15, 2)', 15);
    },

    function() {
      return jshero.testutil.assert_functionReturns('max(1, 15, 3)', 15);
    },

    function() {
      return jshero.testutil.assert_functionReturns('max(-1, 0, 9, 8)', 9);
    }
  ]

});
