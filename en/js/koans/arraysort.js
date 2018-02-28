jshero.koans.add({

  id: 'arraysort',

  title: 'Sorting arrays',

  lesson: 'Now we can sort arrays with given length.',

  task: `Write a function <code>sort</code> that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.
<code>sort([2,&nbsp;3,&nbsp;1])</code> should return <code>[1,&nbsp;2,&nbsp;3]</code>.`,

  beforeTests: function() {
    if (typeof sort !== "undefined") {
      sort = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('sort');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('sort', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sort([1, 2, 3])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sort([1, 3, 2])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sort([2, 1, 3])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sort([2, 3, 1])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sort([3, 1, 2])', [1, 2, 3]);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sort([3, 2, 1])', [1, 2, 3]);
    }

  ]

});
