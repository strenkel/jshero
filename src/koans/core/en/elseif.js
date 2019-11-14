jshero.koans.add({

  id: 'elseif',

  title: 'else if',

  lesson: `If you want to distinguish multiple cases, you can supplement an <code>if</code> with any number of
<code>else if</code>. Finally, a single <code>else</code> can be added.

<pre><code>var message;
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
For each amount greater than <code>20</code>, the surcharge is <code>3</code>.
The call <code>addWithSurcharge(10, 30)</code> should return <code>44</code>.`,

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
      return jshero.testutil.assert_functionReturns('addWithSurcharge(10, 9)', 21);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(11, 10)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(10, 11)', 24);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(13, 20)', 37);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(20, 13)', 37);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(15, 27)', 47);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(27, 15)', 47);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(25, 5)', 34);
    },

    function() {
      return jshero.testutil.assert_functionReturns('addWithSurcharge(5, 25)', 34);
    }
  ]

});
