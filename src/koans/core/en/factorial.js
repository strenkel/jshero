(function(testutil) {

  jshero.koans.add({

    id: 'factorial',

    title: 'Factorial',

    lesson: `Let us practice the <code>for</code> loop with the
<a href='https://en.wikipedia.org/wiki/Factorial'>factorial</a> used in mathematics.
The factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n.
For example, 3! = 1*2*3 = 6. By definition, 0! = 1.`,

    task: `Write a function <code>factorial</code> that calculates the factorial of a positive integer.
<code>factorial(3)</code> should return <code>6</code>.`,

    hint: `<pre><code>let factorial = function(n) {
      let result = 1;
      for (...) {
        ...
      }
      return result;
    };</pre></code>`,

    solution: `<pre><code>let factorial = function(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};</pre></code>`,

    tests: [
      function() {
        return testutil.assert_isFunction('factorial');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('factorial', 1);
      },

      function() {
        return testutil.assert_functionReturns('factorial(0)', 1);
      },

      function() {
        return testutil.assert_functionReturns('factorial(1)', 1);
      },

      function() {
        return testutil.assert_functionReturns('factorial(2)', 2);
      },

      function() {
        return testutil.assert_functionReturns('factorial(3)', 6);
      },

      function() {
        return testutil.assert_functionReturns('factorial(4)', 24);
      },

      function() {
        return testutil.assert_functionReturns('factorial(9)', 362880);
      }
    ]

  });

})(jshero.testutil);