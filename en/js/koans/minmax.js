jshero.koans.add({

  id: "minmax",

  title: "min and max",

  lesson: `The minimum and maximum of a set of numbers can be calculated with
<code>Math.min()</code> and <code>Math.max()</code>:

<pre><code>var min = Math.min(5, 7);
var max = Math.max(3, 9, 2);</code></pre>

<code>min</code> receives the value <code>5</code> and <code>max</code> the value <code>9</code>.
The special: Both functions can be called with an arbitrary number of arguments.`,

  task: `Write a function <code>midrange</code>, that calculates the midrange of 3 numbers.
The <a href="https://en.wikipedia.org/wiki/Mid-range">midrange</a>
is the mean of the smallest and largest number.
<code>midrange(3, 9, 1)</code> should return <code>(9+1)/2</code> = <code>5</code>.`,

  beforeTests: function() {
    if (typeof midrange !== "undefined") {
      midrange = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('midrange');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('midrange', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('midrange(3, 9, 1)', 5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('midrange(5, -5, 2)', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('midrange(7, 3, 0)', 3.5);
    }

  ]
});
