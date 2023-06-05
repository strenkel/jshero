jshero.koans.add({

  id: 'array2',

  title: 'Get array elements',

  lesson: `The elements of an array are accessed by an index beginning with 0.

<pre><code>let languages = ['C', 'C++', 'Java'];
let c = languages[0];
let cPlusPlus = languages[1];
let java = languages[2];</code></pre>`,

  task: `Write a function <code>getFirstElement</code> that takes an array and returns the first element of the array.<br><br>
Example: <code>getFirstElement([1, 2])</code> should return <code>1</code>.`,

  hint: `<pre><code>function getFirstElement(arr) {
  return ...
}</code></pre>`,

  solution: `<pre><code>function getFirstElement(arr) {
  return arr[0];
}</code></pre>`,

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('getFirstElement');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('getFirstElement', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('getFirstElement([1, 2])', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("getFirstElement(['Firefox', 'Chrome'])", 'Firefox');
    }

  ]

});
