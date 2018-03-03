
jshero.koans.add({

  id: 'dowhile',

  title: 'do...while loop',

  lesson: `The <code>do... while</code> loop works similarly to the <code>while</code> loop.
The loop code is executed as long as the loop condition results in <code>true</code>.
The only difference is that the loop condition is checked after the loop code.
This ensures that the loop code is run through at least once.

<pre><code>var threeX = "";
do {
  threeX = threeX + "x";
} while (threeX.length < 3)</code></pre>

After the loop <code>threeX</code> has the value <code>"xxx"</code>.`,

  task: `Write a function <code>lcm</code> that takes two natural numbers and calculates their
<a href="https://en.wikipedia.org/wiki/Least_common_multiple">least common multiple</a>.
<code>lcm(4, 6)</code> should return <code>12</code>.`,

  beforeTests: function() {
    if (typeof lcm !== "undefined") {
      lcm = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('lcm');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('lcm', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(1, 1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(1, 2)', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(2, 3)', 6);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(3, 2)', 6);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(4, 6)', 12);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(5, 7)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(6, 8)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(10, 20)', 20);
    },

    function() {
      return jshero.testutil.assert_functionReturns('lcm(20, 10)', 20);
    }
  ]

});