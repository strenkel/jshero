jshero.koans.add({

  id: 'even',

  title: 'Even numbers',

  lesson: 'The following task can be solved by an interaction of strict equality and the modulo operator.',

  task: `Write a function <code>isEven</code> that checks if a passed number is even.
If the given number is even, <code>true</code> should be returned, otherwise <code>false</code>.<br><br>
Example: <code>isEven(2)</code> should return <code>true</code> and <code>isEven(3)</code> should
return <code>false</code>.`,

solution: `<pre><code>function isEven(num) {
  return num % 2 === 0;
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('isEven');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('isEven', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(0)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(2)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(37)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('isEven(208)', true);
    }
  ]

});
