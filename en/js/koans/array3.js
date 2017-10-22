jshero.koans.add({

  id: 'array3',

  title: 'Set array elements',

  lesson: 'Just as you can get array elements by an index, you can set them by this index. ' +
    'It does not matter whether the array was previously filled or empty.' +
    '<pre><code>var languages = [];<br>' +
    'sprachen[0] = "C";<br>' +
    'sprachen[1] = "C++";<br>' +
    'sprachen[2] = "Java";<br>' +
    '</code></pre>' +
    'Here an empty array is filled successively with the listed values.',
        
  task: 'Write a function <code>setFirstElement</code> that takes an array and an arbitrary variable. ' +
    'The variable should be inserted as the first element in the array. The array should be returned. ' +
    '<code>setFirstElement([1, 2], 3)</code> should return <code>[3, 2]</code>.',

  beforeTests: function() {
    if (typeof setFirstElement !== "undefined") {
      setFirstElement = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof setFirstElement === 'function';
      var msg;
      if (ok) {
        msg = '<code>setFirstElement</code> is a function.';
      } else {
        msg = '<code>setFirstElement</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = setFirstElement.length === 2;
      var msg;
      if (ok) {
        msg = '<code>setFirstElement</code> has 2 parameters.';
      } else {
        msg = '<code>setFirstElement</code> has not 2 parameters, but ' + setFirstElement.length + '.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
   
    function() {
      var ok, msg, e;
      try {
        var result = setFirstElement([1, 2], 3);
        ok = Array.isArray(result) && result.length === 2 && result[0] === 3 && result[1] === 2;
        if (ok) {
          msg = '<code>setFirstElement([1, 2], 3)</code> returns <code>[3, 2]</code>.';
        } else {
          msg = '<code>setFirstElement([1, 2], 3)</code> does not return <code>[3, 2]</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>setFirstElement([1, 2], 3)</code>.';
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
        var result = setFirstElement([], 1);
        ok = Array.isArray(result) && result.length === 1 && result[0] === 1;
        if (ok) {
          msg = '<code>setFirstElement([], 1)</code> returns <code>[1]</code>.';
        } else {
          msg = '<code>setFirstElement([], 1)</code> does not return <code>[1]</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        e = exc;
        ok = false;
        msg = 'Error when calling <code>setFirstElement([], 1)</code>.';
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});
