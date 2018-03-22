jshero.koans.add({

  id: 'array2',

  title: 'Get array elements',

  lesson: `The elements of an array are accessed by an index beginning with 0.

<pre><code>var languages = ["C", "C++", "Java"];
var c = languages[0];
var cPlusPlus = languages[1];
var java = languages[2];</code></pre>`,

  task: `Write a function <code>getFirstElement</code> that takes an array and returns the first element of the array.
<code>getFirstElement([1, 2])</code> should return <code>1</code>.`,

  beforeTests: function() {
    if (typeof getFirstElement !== "undefined") {
      getFirstElement = undefined;
    }
  },

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
      return jshero.testutil.assert_functionReturns('getFirstElement(["Firefox", "Chrome"])', "Firefox");
    }

  ]

});
