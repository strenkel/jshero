(function(testutil) {

  jshero.koans.add({

    id: 'recursion',

    title: 'Recursion',

    lesson: `Functions can call themselves. This is called
<a href='https://en.wikipedia.org/wiki/Recursion_(computer_science)'>recursion</a>.
The best known example is the calculation of the factorial:

<pre><code>function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}</code></pre>

The <a href='https://en.wikipedia.org/wiki/Factorial'>factorial</a> of a natural number is the product of all natural numbers
(excluding zero) less than or equal to that number. It is marked by a trailing exclamation mark: n! = 1 * 2 * 3 ... (n-1) * n.
You can see that you can use the factorial of n-1 to calculate the factorial of n: n! = (n-1)! * n.
The code above is the implementation of this equation. To calculate the factorial of n, you have to calculate the factorial
of n-1 and multiply the result by n. So the function calls itself repeatedly with a value reduced by 1.
Now you need a termination condition so that the recursion does not continue infinitely. This termination condition
is implemented by the <code>if</code> condition. If n has reached 0, the function no longer calls itself, but the result,
namely 0! = 1, is returned directly.`,

    task: `Write a function <code>reverse</code> that reverses the order of the characters in a string.
The function should be recursive.<br><br>
Example: <code>reverse('live')</code> should return <code>'evil'</code>.`,

    tests: [

      // --- test sum ---

      function() {
        return testutil.assert_isFunction('reverse');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('reverse', 1);
      },

      function() {
        return testutil.assert_functionReturns("reverse('')", '');
      },

      function() {
        return testutil.assert_functionReturns("reverse('X')", 'X');
      },

      function() {
        return testutil.assert_functionReturns("reverse('az')", 'za');
      },

      function() {
        return testutil.assert_functionReturns("reverse('12345')", '54321');
      },

      function() {
        return testutil.assert_functionReturns("reverse('live')", 'evil');
      }

    ]

  });

})(jshero.testutil);