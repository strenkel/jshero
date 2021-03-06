
jshero.koans.add({

  id: 'dowhile',

  title: 'do...while loop',

  lesson: `The <code>do...while</code> loop works similarly to the <code>while</code> loop.
The loop code is executed as long as the loop condition results in <code>true</code>.
The only difference is that the loop condition is checked after the loop code.
This ensures that the loop code is run through at least once.

<pre><code>let threeX = '';
do {
  threeX = threeX + 'x';
} while (threeX.length < 3);</code></pre>

After the loop <code>threeX</code> has the value <code>'xxx'</code>.`,

  task: `Write a function <code>lcm</code> that takes two natural numbers and calculates their
<a href='https://en.wikipedia.org/wiki/Least_common_multiple'>least common multiple (lcm)</a>.
The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.<br><br>
Example: <code>lcm(4, 6)</code> should return <code>12</code>.`,

  hint: `To calculate the lcm of a and b, take <code>1</code> and test whether it is divisible by a and b.
If so, <code>1</code> is the lcm. If not, take <code>2</code> and test again. And so forth.`,

  solution: `<pre><code>function lcm(a, b) {

  let theLCM = 0;
  let remainderA;
  let remainderB;

  do {

    theLCM++;
    remainderA = theLCM % a;
    remainderB = theLCM % b;

  } while (remainderA !== 0 || remainderB !== 0)

  return theLCM;
}</code></pre>`,

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
