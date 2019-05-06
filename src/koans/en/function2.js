jshero.koans.add({

  id: 'function2',

  title: 'Multiple functions',

  lesson: `Now we define more then one function.
As a reminder: A function with name <code>color</code> returning the value
<code>'red'</code> is defined as followed:

<pre><code>var color = function() {
  return 'red';
};</code></pre>`,

  task: `Define two functions. The first function <code>a</code> should return
<code>'Hello a!'</code> and the second function <code>b</code> should return
 <code>'Hello b!'</code>.`,

  beforeTests: function() {
    a = undefined;
    b = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('a');
    },

    function() {
      return jshero.testutil.assert_isFunction('b');
    },

    function() {
      return jshero.testutil.assert_functionReturns('a()', 'Hello a!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('b()', 'Hello b!');
    }
  ]
});
