jshero.koans.add({

  id: 'if2',

  title: 'Two returns',

  lesson: `With <code>if</code> you can write functions with two return statements:

<pre><code>function prize(number) {
  if (number === 6) {
    return 100;
  }
  return 0;
}</code></pre>

If <code>number</code> has the value <code>6</code>, the <code>if</code> condition is fulfilled and the first <code>return</code>
statement will be executed. The function terminates and returns <code>100</code>. If <code>number</code> does not have the
value <code>6</code>, the <code>if</code> condition is not fulfilled. The code execution continues after the <code>if</code> block.
The second return statement will be executed. The function terminates and returns <code>0</code>.<br><br>
However, be careful using two or more return statements in a function. Such code can become obscure.`,

  task: `Write a function <code>repdigit</code> that determines whether a two-digit decimal is a
<a href="https://en.wikipedia.org/wiki/Repdigit">repdigit</a> or not.
If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.<br><br>
Example: <code>repdigit(22)</code> should return <code>'Repdigit!'</code> and
<code>repdigit(23)</code> should return <code>'No Repdigit!'</code>.`,

  hint: `<pre><code>function repdigit(n) {
// Calculate the ones digit
// of n with modulo 10.
// Calculate the tens digit
// of n by dividing by 10
// and rounding down.
// Compare ones and tens digits.
}</code></pre>`,

  solution: `<pre><code>function repdigit(n) {
  let ones = n % 10;
  let tens = Math.floor(n / 10);
  if (ones === tens) {
    return 'Repdigit!';
  }
  return 'No Repdigit!';
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('repdigit');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('repdigit', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('repdigit(11)', 'Repdigit!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('repdigit(55)', 'Repdigit!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('repdigit(99)', 'Repdigit!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('repdigit(10)', 'No Repdigit!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('repdigit(12)', 'No Repdigit!');
    },

    function() {
      return jshero.testutil.assert_functionReturns('repdigit(98)', 'No Repdigit!');
    }
  ]

});
