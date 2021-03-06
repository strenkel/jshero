(function(testutil) {

  jshero.koans.add({

    id: 'euler1',

    title: 'Project Euler',

    lesson: `The following task is taken from <a href='https://projecteuler.net'>Project Euler</a>.
It's the first task there. Project Euler is a series of challenging mathematical and computer programming problems.`,

    task: `Write a function <code>sumMultiples</code> taking a natural number n and returning the sum of all
multiples of 3 and of 5 that are truly less than n.<br><br>
Example: All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78.
<code>sumMultiples(20)</code> should return <code>78</code>.`,

    tests: [

      function() {
        return testutil.assert_isFunction('sumMultiples');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('sumMultiples', 1);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(1)", 0);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(2)", 0);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(3)", 0);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(4)", 3);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(5)", 3);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(6)", 8);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(7)", 14);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(8)", 14);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(9)", 14);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(10)", 23);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(11)", 33);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(16)", 60);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(20)", 78);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(100)", 2318);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(500)", 57918);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples(1000)", 233168);
      }

    ]

  });

})(jshero.testutil);