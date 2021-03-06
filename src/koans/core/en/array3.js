jshero.koans.add({

  id: 'array3',

  title: 'Set array elements',

  lesson: `Just as you can get array elements by an index, you can set them by this index.
It does not matter whether the array was previously filled or empty.

<pre><code>let languages = [];
languages[0] = 'C';
languages[1] = 'C++';
languages[2] = 'Java';</code></pre>

Here an empty array is filled successively with the listed values.`,

  task: `Write a function <code>setFirstElement</code> that takes an array and an arbitrary variable.
The variable should be inserted as the first element in the array. The array should be returned.<br><br>
Example: <code>setFirstElement([1,&nbsp;2],&nbsp;3)</code> should return <code>[3,&nbsp;2]</code>.`,


  hint: `<pre><code>function setFirstElement(anArray, firstElement) {
  ...
  return anArray;
}</code></pre>`,

  solution: `<pre><code>function setFirstElement(anArray, firstElement) {
  anArray[0] = firstElement;
  return anArray;
}</code></pre>`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('setFirstElement');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('setFirstElement', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('setFirstElement([1, 2], 3)', [3, 2]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('setFirstElement([], 1)', [1]);
    },

    function() {
      return jshero.testutil.assert_functionReturns("setFirstElement(['a', 'b', 'c'], 'x')", ['x', 'b', 'c']);
    }

  ]

});
