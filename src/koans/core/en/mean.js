(function(testutil) {

  jshero.koans.add({

    id: 'mean',

    title: 'Parentheses',

    lesson: `Just as in mathematics, the order of operations rules are valid in JavaScript. Multiplication and
division are performed before addition and subtraction. With parentheses you can specify the order of operations.

<pre><code>let x1 = 3 + 4 * 2;
let x2 = (3 + 4) * 2;</code></pre>

<code>x1</code> is <code>11</code> and <code>x2</code> is <code>14</code>.`,

    task: `Write a function <code>mean</code> that takes 2 numbers and returns their mean value.
<code>mean(1, 2)</code> should return <code>1.5</code>.`,

    hint: `<pre><code>The mean value of two numbers
x and y is (x + y) / 2.</code></pre>`,

    solution: `<pre><code>let mean = function(x, y) {
  return (x + y) / 2;
};</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('mean');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('mean', 2);
      },

      function() {
        return testutil.assert_functionReturns('mean(1, 2)', 1.5);
      },

      function() {
        return testutil.assert_functionReturns('mean(0, 0)', 0);
      }

    ]
  });

})(jshero.testutil);