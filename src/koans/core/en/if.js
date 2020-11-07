jshero.koans.add({

  id: 'if',

  title: 'if',

  lesson: `Often code should only be executed if a certain condition is true.
To do this, use the <code>if</code> statement.

<pre><code>let win = 0;
if (dice === 6) {
  win = 100;
}</code></pre>

This statement consists of the keyword <code>if</code> followed by parentheses.
The parentheses contain an expression - the condition - that is evaluated to <code>true</code> or <code>false</code>.
If the condition results in <code>true</code>, all statements in the block delimited by the curly brackets will be executed.
If the condition results in <code>false</code>, the block bounded by the curly brackets will be skipped.
In our example, if <code>dice</code> has the value <code>6</code>, then <code>win</code> is set to <code>100</code>.
If <code>dice</code> does not have the value <code>6</code>, then <code>win</code> remains at <code>0</code>.`,

  task: `Write a function <code>equals</code> that checks two values for strict equality.
If the two values are equal, the string <code>'EQUAL'</code> should be returned.
If they are unequal, you should get <code>'UNEQUAL'</code>.<br><br>
Example: <code>equals(1,&nbsp;1)</code> should return <code>'EQUAL'</code> and
<code>equals(1,&nbsp;2)</code> should return <code>'UNEQUAL'</code>.`,

hint: `<pre><code>function equals(a, b) {
// Initialize a variable with 'UNEQUAL'.
// Use 'if' to set the variable to 'EQUAL' if necessary.
// Return the variable.
}</code></pre>`,

    solution: `<pre><code>function equals(a, b) {
  let result = 'UNEQUAL';
  if (a === b) {
    result = 'EQUAL';
  }
  return result;
}</code></pre>`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('equals');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('equals', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('equals(1, 1)', 'EQUAL');
    },

    function() {
      return jshero.testutil.assert_functionReturns('equals(1, 2)', 'UNEQUAL');
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals(1, '1')", 'UNEQUAL');
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('JS', 'JS')", 'EQUAL');
    },

    function() {
      return jshero.testutil.assert_functionReturns("equals('left', 'right')", 'UNEQUAL');
    }

  ]

});
