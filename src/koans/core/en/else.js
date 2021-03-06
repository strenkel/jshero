jshero.koans.add({

  id: 'else',

  title: 'if...else',

  lesson: `If a code block should be executed if an <code>if</code> condition
is not fulfilled, an <code>else</code> is added.

<pre><code>let message;
if (amount > 1000) {
  message = 'No payout possible!';
} else {
  message = 'The amount will be paid out!';
}</code></pre>

Depending on whether <code>amount</code> is greater or smaller <code>1000</code>,
either the <code>if</code> branch or the <code>else</code> branch is executed.`,

  task: `Write a function <code>addWithSurcharge</code> that adds two amounts with surcharge.
For each amount less than or equal to <code>10</code>, the surcharge is <code>1</code>.
For each amount greater than <code>10</code>, the surcharge is <code>2</code>.<br><br>
Example: <code>addWithSurcharge(5,&nbsp;15)</code> should return <code>23</code>.`,

  hint: `<pre><code>function addWithSurcharge(a, b) {

  let surcharge = 0;

  if (a <= 10) {
    surcharge = surcharge + 1;
  } else ...

  ...

  return a + b + surcharge;
}</code></pre>`,

  solution: `<pre><code>function addWithSurcharge(a, b) {

  let surcharge = 0;

  if (a <= 10) {
    surcharge = surcharge + 1;
  } else {
    surcharge = surcharge + 2;
  }

  if (b <= 10) {
    surcharge = surcharge + 1;
  } else {
    surcharge = surcharge + 2;
  }

  return a + b + surcharge;
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('addWithSurcharge');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('addWithSurcharge', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(1, 1)', 4);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(10, 10)', 22);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(11, 10)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(10, 11)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(11, 11)', 26);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(15, 27)', 46);
    }
  ]

});
