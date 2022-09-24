jshero.koans.add({

  id: 'parseint',

  title: 'parseInt()',

  lesson: `Sometimes you want to read a number from a string. In case of an integer (..., -2, -1, 0, 1, 2, ..) you can
use the <code>parseInt</code> function. The following examples return <code>19</code> or <code>-19</code>:

<pre><code>let n1 = parseInt('19', 10);
let n2 = parseInt('+19', 10);
let n3 = parseInt('-19', 10);
let n4 = parseInt('19 Grad', 10);
let n5 = parseInt('19.1', 10);
let n6 = parseInt('019', 10);
let n7 = parseInt(' 19', 10);</code></pre>

Besides the direct reading of integers with or without sign (n1, n2, n3), <code>parseInt</code> can also handle some
more complex cases. Non-numeric characters after (n4, n5) as well as zeros (n6) and spaces (n7) before the integer
will be ignored.<br><br>

In all examples, the second parameter passed to <code>parseInt</code> is <code>10</code>.
This parameter specifies the radix (the base in mathematical numeral systems) on which the number is to be interpreted.
<code>10</code> represents the usual decimal system. If you omit the second parameter, the decimal system is normally
used as default. Since there are exceptions to this rule, you should always specify the radix!<br><br>

If <code>parseInt</code> cannot read an integer, it returns <code>NaN</code> (Not a Number).

<pre><code>let n1 = parseInt('text', 10);
let n2 = parseInt('No. 10', 10);</code></pre>

In the first case there is no number at all. In the second case, there are non-numeric characters before the number.
This is not allowed and results in <code>NaN</code>.<br><br>

A detailed documentation of <code>parseInt</code> can be found at
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt'>Mozilla web docs</a>.`,

  task: `Write a function <code>add</code> that takes a string with a summation task and returns its result as a number.
Two natural numbers should be added. The summation task is a string of the form '102+17'.<br><br>
Example: <code>add('102+17')</code> should return <code>119</code>.`,

  hint: `Determine the first summand with <code>parseInt</code>.
Use <code>indexOf</code> to determine the position of the plus sign.
Determine with <code>substr</code> the substring after the plus sign.
Use <code>parseInt</code> to determine the second summand from this substring.`,

  solution: `<pre><code>function add(s) {
  let summand1 = parseInt(s, 10);
  let indexPlus = s.indexOf('+');
  let sAfterPlus = s.substr(indexPlus + 1);
  let summand2 = parseInt(sAfterPlus, 10);
  return summand1 + summand2;
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('add');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('add', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('1+2')", 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('10+100')", 110);
    },

    function() {
      return jshero.testutil.assert_functionReturns("add('10123+456')", 10579);
    }
  ]

});
