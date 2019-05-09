jshero.koans.add({

  id: 'further',

  title: 'To be continued ...',

  lesson: 'JS Hero will be continued. Here\'s one last exercise.',

  task: `Write a function <code>digitsum</code> that calculates the digit sum of an integer.
The digit sum of an integer is the sum of all its digits.
<code>digitsum(192)</code> should return <code>12</code>.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('digitsum');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('digitsum', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('digitsum(1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('digitsum(192)', 12);
    },

    function() {
      return jshero.testutil.assert_functionReturns('digitsum(1234567890)', 45);
    }
  ]

});
