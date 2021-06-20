jshero.koans.add({

  id: 'elseif',

  title: 'else if',

  lesson: `If you want to distinguish multiple cases, you can supplement an <code>if</code> with any number of
<code>else if</code>. Finally, a single <code>else</code> can be added.

<pre><code>let message;
if (amount > 1000) {
  message = 'Too high. No payout possible!';
} else if (amount < 10) {
  message = 'Too low. No payout possible!';
} else {
  message = 'The amount will be paid out!';
}</code></pre>

First it is checked whether <code>amount</code> is greater than <code>1000</code>.
If so, the 'Too high ...' message is set and the code will be continued at the end of the entire block.
If not, it is checked whether <code>amount</code> is less than <code>10</code>.
If so, the 'Too low ...' message is set and the code will be continued at the end of the entire block.
If no condition is met, the final <code>else</code> block is executed.`,

  task: `Write a function <code>addWithSurcharge</code> that adds two amounts with surcharge.
For each amount less than or equal to <code>10</code>, the surcharge is <code>1</code>.
For each amount greater than <code>10</code> and less than or equal to <code>20</code>, the surcharge is <code>2</code>.
For each amount greater than <code>20</code>, the surcharge is <code>3</code>.<br><br>
Example: <code>addWithSurcharge(10,&nbsp;30)</code> should return <code>44</code>.`,

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
      return jshero.testutil.assert_functionReturns('addWithSurcharge(10, 20)', 33);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(20, 10)', 33);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(10, 21)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(21, 10)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(11, 20)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(20, 11)', 35);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(11, 21)', 37);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(21, 11)', 37);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(20, 20)', 44);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(21, 20)', 46);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(20, 21)', 46);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(21, 21)', 48);
    }
  ]

});
