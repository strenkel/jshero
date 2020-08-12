jshero.koans.add({

  id: 'null',

  title: 'null',

  lesson: `Besides <code>undefined</code> JavaScript knows another value for "no value": <code>null</code>.
You can assign the value <code>null</code> to a variable and test for <code>null</code> with strict equality:

<pre><code>let foo = null;
if (foo === null) {
  foo = 1;
}</code></pre>

It is a mistake that JavaScript has two values for "no value". One should always treat <code>undefined</code> and
<code>null</code> equally.`,

  task: `Write a function <code>cutComment</code> that takes one line of JavaScript and returns a possible line comment trimmed.
If the line contains no line comment, <code>null</code> should be returned.
For simplicity, we assume that the code does not contain the comment characters within a string.<br><br>
Example: <code>cutCommt('let foo; // bar')</code> should return <code>'bar'</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('cutComment');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('cutComment', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("cutComment('let foo; // bar')", 'bar');
    },

    function() {
      return jshero.testutil.assert_functionReturns("cutComment('let n; // number')", 'number');
    },

    function() {
      return jshero.testutil.assert_functionReturns("cutComment('let i;')", null);
    }

  ]

});
