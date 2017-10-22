jshero.koans.add({

  id: 'arraysort',

  title: 'Sorting arrays',

  lesson: 'Now we can sort arrays with given length.',
        
  task: 'Write a function <code>sort</code> that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array. ' +
    '<code>sort([2,&nbsp;3,&nbsp;1])</code> should return <code>[1,&nbsp;2,&nbsp;3]</code>.',

  beforeTests: function() {
    if (typeof sort !== "undefined") {
      sort = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof sort === 'function';
      var msg;
      if (ok) {
        msg = '<code>sort</code> is a function.';
      } else {
        msg = '<code>sort</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = sort.length === 1;
      var msg;
      if (ok) {
        msg = '<code>sort</code> has 1 parameter.';
      } else {
        msg = '<code>sort</code> has not 1 parameter, but ' + sort.length + '.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = sort([3, 2, 1]);
        ok = Array.isArray(result) && result.length === 3 && result[0] === 1 && result[1] === 2 && result[2] === 3;
        if (ok) {
          msg = '<code>sort([3, 2, 1])</code> returns <code>[1, 2, 3]</code>.';
        } else {
          msg = '<code>sort([3, 2, 1])</code> does not return <code>[1, 2, 3]</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>sort([3, 2, 1])</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },
   
    function() {
      var ok, msg, e;
      try {
        var result = sort([2, 3, 1]);
        ok = Array.isArray(result) && result.length === 3 && result[0] === 1 && result[1] === 2 && result[2] === 3;
        if (ok) {
          msg = '<code>sort([2, 3, 1])</code> returns <code>[1, 2, 3]</code>.';
        } else {
          msg = '<code>sort([2, 3, 1])</code> does not return <code>[1, 2, 3]</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>sort([2, 3, 1])</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});
