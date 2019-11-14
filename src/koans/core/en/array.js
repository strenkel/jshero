jshero.koans.add({

  id: 'array',

  title: 'Creating arrays',

  lesson: `Arrays are objects for storing multiple values. Arrays are preferably created with square brackets.

<pre><code>var languages = ['C', 'C++', 'Java'];
var primes = [2, 3, 5, 7, 11];
var emptyArray = [];
var a = 'Douglas';
var b = 12;
var c = true;
var someValues = [a, b, c];</code></pre>`,

  task: `Write a function <code>toArray</code> that takes 2 values and returns these values in an array.
<code>toArray(5,&nbsp;9)</code> should return the array <code>[5,&nbsp;9]</code>.`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('toArray');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('toArray', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('toArray(1, 2)', 'Array');
    },

    function() {
      return jshero.testutil.assert_functionReturns('toArray(1, 2)', [1, 2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns("toArray('Tom', 'Huck')", ['Tom', 'Huck']);
    }

  ]

});
