jshero.koans.add({

  id: 'array',

  title: 'Arrays',

  lesson: `Arrays are objects for storing multiple values. Arrays are preferably created with square brackets.

<pre><code>let languages = ['C', 'C++', 'Java'];
let primes = [2, 3, 5, 7, 11];
let emptyArray = [];
let a = 'Douglas';
let b = 12;
let c = true;
let someValues = [a, b, c];</code></pre>`,

  task: `Write a function <code>toArray</code> that takes 2 values and returns these values in an array.<br><br>
Example: <code>toArray(5,&nbsp;9)</code> should return the array <code>[5,&nbsp;9]</code>.`,

  hint: `<pre><code>function toArray(a, b) {
  return [...];
}</code></pre>`,

  solution: `<pre><code>function toArray(a, b) {
  return [a, b];
}</code></pre>`,

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
