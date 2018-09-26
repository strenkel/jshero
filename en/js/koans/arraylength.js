(function(testutil) {

  jshero.koans.add({

    id: 'arraylength',

    title: 'Array: length',

    lesson: 'Like strings, arrays have the property <code>length</code>. Here it returns the number of elements in the array:' +
      '<pre><code>var languages = [];<br>' +
      'var l0 = languages.length;<br>' +
      'languages[0] = "C";<br>' +
      'var l1 = languages.length;<br>' +
      'languages[1] = "C++";<br>' +
      'var l2 = languages.length;</code></pre>' +
      'The empty array contains no elements. <code>l0</code> is <code>0</code>. ' +
      'Now we fill the array step by step. <code>l1</code> is <code>1</code> and <code>l2</code> is <code>2</code>.',

    task: 'Write a function <code>getLastElement</code> that takes an array and returns the last element of the array. ' +
      '<code>getLastElement([1, 2])</code> should return <code>2</code>.',

    beforeTests: function() {
      if (typeof setFirstElement !== "undefined") {
        setFirstElement = undefined;
      }
    },

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
        return testutil.assert_functionReturns('getLastElement(["a", "b", "c"])', "c");
      }

    ]
  });

})(jshero.testutil);