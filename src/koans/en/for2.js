jshero.koans.add({

  id: 'for2',

  title: 'Loops and arrays',

  lesson: `<code>for</code> loops are handy for traversing arrays.
In the following example, the elements of an array are added together:

<pre><code>var sum = 0;
for (var i = 0; i < myArray.length; i++) {
  sum = sum + myArray[i];
}</code></pre>`,

  task: `Write a function <code>mean</code> that accepts an array filled with numbers
and returns the arithmetic mean of those numbers. <code>mean([1, 2, 3])</code> should return <code>(1+2+3)/3</code> = <code>2</code>.`,

  beforeTests: function() {
    if (typeof mean !== 'undefined') {
      mean = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('mean');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('mean', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([0])', 0);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([1, 2])', 1.5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([1, 2, 3])', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('mean([-2, -4, 17, 34])', 11.25);
    }
  ]

});


