jshero.koans.add({

  id: 'while',

  title: 'while loop',

  lesson: `The <code>while</code> loop has only a loop condition.
The loop code is executed as long as the condition is <code>true</code>.
If the condition results in <code>false</code>, the loop is terminated
and the code execution proceeds after the loop.

<pre><code>let threeX = '';
while (threeX.length < 3) {
  threeX = threeX + 'x';
}</code></pre>

As long as <code>threeX</code> has less than 3 characters, it is supplemented by <code>'x'</code>.
If <code>threeX</code> has the length 3, the loop is terminated.
<code>threeX</code> has the value <code>'xxx'</code>.`,

  task: `Write a function <code>spaces</code> that takes a natural number n and returns a string of n spaces.
<code>spaces(1)</code> should return <code>' '</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('spaces');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('spaces', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('spaces(0)', '');
    },

    function() {
      return jshero.testutil.assert_functionReturns('spaces(1)', ' ');
    },

    function() {
      return jshero.testutil.assert_functionReturns('spaces(2)', '  ');
    },

    function() {
      return jshero.testutil.assert_functionReturns('spaces(3)', '   ');
    }
  ]

});
