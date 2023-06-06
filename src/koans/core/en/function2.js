jshero.koans.add({

  id: 'function2',

  title: 'Multiple functions',

  lesson: `Now we define more then one function.
As a reminder: A function with name <code>color</code> returning the value
<code>'red'</code> is defined as followed:

<pre><code>function color() {
  return 'red';
}</code></pre>`,

  task: `Define two functions. The first function <code>a</code> should return
<code>'Hello a!'</code> and the second function <code>b</code> should return
<code>'Hello b!'</code>.`,

  hint: `<pre><code>function a() {
  return ...
}

function b() {
  return ...
}</code></pre>`,

solution: `<pre><code>function a() {
  return 'Hello a!';
}

function b() {
  return 'Hello b!';
}</code></pre>`,

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
