(function(testutil) {

  jshero.koans.add({

    id: "modulo",

    title: "Modulo",

    lesson: 'Another arithmetic operator is modulo. It calculates the remainder of a division and is represented by <code>%</code>.' +
      '<pre><code>var x = 7 % 2;<br>' +
      'var y = 20 % 3;</code></pre>' +
      '7 divided by 2 is 3 with remainder 1. <code>x</code> is <code>1</code>.<br>' +
      '20 divided by 3 is 6 with remainder 2. <code>y</code> is <code>2</code>.',

    task: 'Write a function <code>firstDigit</code> that takes a natural number and returns the first digit of that number. ' +
      '<code>firstDigit(2674)</code> should return <code>4</code>.',

    beforeTests: function() {
      if (typeof einer !== "undefined") {
        einer = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('firstDigit');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('firstDigit', 1);
      },

      function() {
        return testutil.assert_functionReturns('firstDigit(0)', 0);
      },

      function() {
        return testutil.assert_functionReturns('firstDigit(82)', 2);
      },

      function() {
        return testutil.assert_functionReturns('firstDigit(119)', 9);
      }

    ]

  });

})(jshero.testutil);