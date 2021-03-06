(function(testutil) {

  jshero.koans.add({

    id: 'modulo',

    title: 'Modulo',

    lesson: `Another arithmetic operator is modulo. It calculates the remainder of a division and is represented by <code>%</code>.

<pre><code>let x = 7 % 2;
let y = 20 % 3;</code></pre>

7 divided by 2 is 3 with remainder 1. <code>x</code> is <code>1</code>.
20 divided by 3 is 6 with remainder 2. <code>y</code> is <code>2</code>.`,

    task: `Write a function <code>onesDigit</code> that takes a natural number and returns the ones digit of that number.<br><br>
Example: <code>onesDigit(2674)</code> should return <code>4</code>.`,

    hint: `<pre><code>function onesDigit(n) {
// Use modulo 10.
}</code></pre>`,

    solution: `<pre><code>function onesDigit(n) {
  return n % 10;
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('onesDigit');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('onesDigit', 1);
      },

      function() {
        return testutil.assert_functionReturns('onesDigit(0)', 0);
      },

      function() {
        return testutil.assert_functionReturns('onesDigit(82)', 2);
      },

      function() {
        return testutil.assert_functionReturns('onesDigit(119)', 9);
      }

    ]

  });

})(jshero.testutil);
