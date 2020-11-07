(function(testutil) {

  jshero.koans.add({

    id: 'arraylength',

    title: 'Array: length',

    lesson: `Like strings, arrays have the property <code>length</code>. Here it returns the number of elements in the array:

<pre><code>let languages = [];
let len0 = languages.length;
languages[0] = 'C';
let len1 = languages.length;
languages[1] = 'C++';
let len2 = languages.length;</code></pre>

The empty array contains no elements. <code>len0</code> is <code>0</code>.
Now we fill the array step by step. <code>len1</code> is <code>1</code> and <code>len2</code> is <code>2</code>.`,

    task: `Write a function <code>getLastElement</code> that takes an array and returns the last element of the array.<br><br>
Example: <code>getLastElement([1,&nbsp;2])</code> should return <code>2</code>.`,

    hint: `Determine the index of the last element with the <code>length</code> property.
Take into account that the first element in the array has the index <code>0</code>.`,

    solution: `<pre><code>function getLastElement(anArray) {
  let lastIndex = anArray.length - 1;
  return anArray[lastIndex];
}</code></pre>`,

    tests: [

      function() {
        return testutil.assert_isFunction('getLastElement');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('getLastElement', 1);
      },

      function() {
        return testutil.assert_functionReturns('getLastElement([1, 2])', 2);
      },

      function() {
        return testutil.assert_functionReturns("getLastElement(['a', 'b', 'c'])", 'c');
      }

    ]
  });

})(jshero.testutil);
