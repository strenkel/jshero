jshero.koans.add({

  id: 'notequals',

  title: 'Strict inequality',

  lesson: `With <code>!==</code> two values are compared for strict inequality.

<pre><code>let c1 = 'rose' !== 'Rose';
let c2 = 10 !== '10';</code></pre>

Both comparisons result in <code>true</code>.
The first one, because the two strings differ in upper and lower case.
The second, because the two values differ in type.`,

  task: `Write a function <code>unequal</code> that checks 3 values for strict inequality.
The function should return <code>true</code> if all three parameters are strict unequal.
Otherwise <code>false</code>. The call <code>unequal(1, 2, 3)</code> should return <code>true</code>
and <code>unequal(1, 1, 2)</code> should return <code>false</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('unequal');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('unequal', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('unequal(1, 2, 3)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('unequal(2, 1, 1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('unequal(1, 2, 1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('unequal(1, 1, 2)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("unequal('rose', 'Rose', 'ROSE')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("unequal('1', 1, true)", true);
    }
  ]

});
