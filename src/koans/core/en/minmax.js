(function(testutil) {

  jshero.koans.add({

    id: 'minmax',

    title: 'min and max',

    lesson: `The minimum and maximum of a set of numbers can be calculated with
<code>Math.min()</code> and <code>Math.max()</code>:

<pre><code>let min = Math.min(5, 7);
let max = Math.max(3, 9, 2);</code></pre>

<code>min</code> receives the value <code>5</code> and <code>max</code> the value <code>9</code>.
The special: Both functions can be called with an arbitrary number of arguments.`,

    task: `Write a function <code>midrange</code>, that calculates the midrange of 3 numbers.
The <a href='https://en.wikipedia.org/wiki/Mid-range'>midrange</a>
is the mean of the smallest and largest number.
<code>midrange(3, 9, 1)</code> should return <code>(9+1)/2</code> = <code>5</code>.`,

    hint: `<pre><code>let midrange = function(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  ...
};</code></pre>`,


    solution: `<pre><code>let midrange = function(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  return (min + max) / 2;
};</code></pre>`,

    tests: [
      function() {
        return testutil.assert_isFunction('midrange');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('midrange', 3);
      },

      function() {
        return testutil.assert_functionReturns('midrange(3, 9, 1)', 5);
      },

      function() {
        return testutil.assert_functionReturns('midrange(3, 0, 8)', 4);
      },

      function() {
        return testutil.assert_functionReturns('midrange(7, 4, 0)', 3.5);
      },

      function() {
        return testutil.assert_functionReturns('midrange(-6, -5, -2)', -4);
      },

      function() {
        return testutil.assert_functionReturns('midrange(5, -5, 2)', 0);
      },

      function() {
        return testutil.assert_functionReturns('midrange(10, 20, 17)', 15);
      }

    ]
  });

})(jshero.testutil);