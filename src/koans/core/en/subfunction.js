(function(testutil, evaluator) {

  jshero.koans.add({

    id: 'subfunction',

    title: 'Functions call functions',

    lesson: `Functions can call other functions:
<pre><code>function gross(net) {
  let vat = 20;
  let tax = net * vat / 100;
  return net + tax;
}

function addWithVat(netX, netY) {
  let grossX = gross(netX);
  let grossY = gross(netY);
  return grossX + grossY;
}</code></pre>

<code>addWithVat</code> takes two net amounts and returns the sum of the gross amounts.
<code>gross</code> calculates the gross amount from a net amount. Thereby a value added tax of 20% is assumed.
Instead of calculating the gross amount itself, <code>addWithVat</code> use the function <code>brutto</code>.
This has two advantages: The code is easier to read and the gross calculation is performed centrally in one place.`,

    task: `Write a function <code>sum</code> that takes an array of numbers and returns the sum of these numbers.
Write a function <code>mean</code> that takes an array of numbers and returns the average of these numbers.
The <code>mean</code> function should use the <code>sum</code> function.`,

    tests: [

      // --- test sum ---

      function() {
        return testutil.assert_isFunction('sum');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('sum', 1);
      },

      function() {
        return testutil.assert_functionReturns('sum([0])', 0);
      },

      function() {
        return testutil.assert_functionReturns('sum([1, 2])', 3);
      },

      function() {
        return testutil.assert_functionReturns('sum([1, 4, 10, 85])', 100);
      },

      function() {
        return testutil.assert_functionReturns('sum([-2, -4, 17, 34])', 45);
      },

      // --- test mean ---

      function() {
        return testutil.assert_isFunction('mean');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('mean', 1);
      },

      function() {
        return testutil.assert_functionReturns('mean([0])', 0);
      },

      function() {
        return testutil.assert_functionReturns('mean([1, 2])', 1.5);
      },

      function() {
        return testutil.assert_functionReturns('mean([1, 4, 10, 85])', 25);
      },

      function() {
        return testutil.assert_functionReturns('mean([-2, -4, 17, 34])', 11.25);
      }

    ]

  });

})(jshero.testutil, jshero.evaluator);