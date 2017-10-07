jshero.koans.add({

  id: 'arraylength',

  title: 'Array: length',

  lesson: 'Like strings, arrays have the property <code>length</code>. It returns the number of elements in the array:' +
    '<pre><code>var languages = [];<br>' +
    'var l0 = languages.length;<br>' +
    'languages[0] = "C";<br>' +
    'var l1 = languages.length;<br>' +
    'languages[1] = "C++";<br>' +
    'var l2 = languages.length;</code></pre>' +
    'The empty array contains no elements. <code>l0</code> is <code>0</code>. ' +
    'Now we fill the array step by step. <code>l1</code> is <code>1</code> and <code>l2</code> is <code>2</code>.',
        
  task: 'Write a function <code>getLastElement</code>, that takes an array and returns the last element of the array. ' +
    '<code>getLastElement([1, 2])</code> should return <code>2</code>.',

  beforeTests: function() {
    if (typeof setFirstElement !== "undefined") {
      setFirstElement = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof getLastElement === 'function';
      var msg;
      if (ok) {
        msg = '<code>getLastElement</code> is a function.';
      } else {
        msg = '<code>getLastElement</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = getLastElement.length === 1;
      var msg;
      if (ok) {
        msg = '<code>getLastElement</code> has 1 parameter.';
      } else {
        msg = '<code>getLastElement</code> has not 1 parameter, but ' + getLastElement.length + '.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
   
    function() {
      var ok, msg, e;
      try {
        var result = getLastElement([1, 2]);
        ok = result === 2;
        if (ok) {
          msg = '<code>getLastElement([1, 2])</code> returns <code>2</code>.';
        } else {
          msg = '<code>getLastElement([1, 2])</code> does not return <code>2</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>getLastElement([1, 2])</code>.';
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
        var result = getLastElement(["a", "b", "c"]);
        ok = result === "c";
        if (ok) {
          msg = '<code>getLastElement(["a", "b", "c"])</code> returns <code>"c"</code>.';
        } else {
          msg = '<code>getLastElement(["a", "b", "c"])</code> does not return <code>"c"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>getLastElement(["a", "b", "c"])</code>.';
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
