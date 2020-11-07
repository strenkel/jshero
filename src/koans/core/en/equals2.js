jshero.koans.add({

  id: 'equals2',

  title: 'Three identical values',

  lesson: 'The following task can be solved by an interaction of strict equality and a Boolean operator.',

  task: `Write a function <code>equals</code> that checks 3 values for strict equality.
The function should only return <code>true</code> if all 3 values are equal.<br><br>
Example: <code>equals(1,&nbsp;1,&nbsp;1)</code> should return <code>true</code> and
<code>equals(1,&nbsp;2,&nbsp;1)</code> should return <code>false</code>.`,

hint: `<pre><code>function equals(a, b, c) {
  // Compare a with b and a with c.
  // Connect the result of both comparisons with &&.
}</code></pre>`,

  solution: `<pre><code>function equals(a, b, c) {
  return a === b && a === c;
}</code></pre>`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('equals');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('equals', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('equals(1, 1, 1)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('1', 1, 1)", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals(1, '1', 1)", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals(1, 1, '1')", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('A', 'B', 'C')", false);
    }

  ]

});
