
jshero.koans.add({

  id: 'ggt',

  title: 'gcd',

  lesson: `The counterpart to the least common multiple is the
<a href='https://en.wikipedia.org/wiki/Greatest_common_divisor'>greatest common divisor (gcd)</a>.
The greatest common divisor of two natural numbers a and b is the largest natural numbers that divides a and b.`,

  task: `Write a function <code>gcd</code> that takes two natural numbers and calculates their gcd.
<code>gcd(6, 15)</code> should return <code>3</code>.`,

  beforeTests: function() {
    if (typeof gcd !== 'undefined') {
      gcd = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('gcd');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('gcd', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(1, 1)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(1, 2)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(2, 3)', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(2, 4)', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(6, 15)', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(12, 18)', 6);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(18, 12)', 6);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(15, 45)', 15);
    },

    function() {
      return jshero.testutil.assert_functionReturns('gcd(45, 15)', 15);
    }

  ]

});
