jshero.koans.add({

  id: 'array2',

  title: 'Get array elements',

  lesson: 'The elements of an array are accessed by an index beginning with 0. ' +
    '<pre><code>var languages = ["C", "C++", "Java"];<br>' +
    'var c = languages[0];<br>' +
    'var cPlusPlus = languages[1];<br>' +
    'var java = languages[2];' +
    '</code></pre>',
        
  task: 'Write a function <code>getFirstElement</code> that takes an array and returns the first element of the array. ' +
    '<code>getFirstElement([1, 2])</code> should return <code>1</code>.',

  beforeTests: function() {
    if (typeof getFirstElement !== "undefined") {
      getFirstElement = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof getFirstElement === 'function';
      var msg;
      if (ok) {
        msg = '<code>getFirstElement</code> is a function.';
      } else {
        msg = '<code>getFirstElement</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = getFirstElement.length === 1;
      var msg;
      if (ok) {
        msg = '<code>getFirstElement</code> has 1 parameter.';
      } else {
        msg = '<code>getFirstElement</code> has not 1 parameter, but ' + getFirstElement.length + '.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
   
    function() {
      var ok, msg, e;
      try {
        var result = getFirstElement([1, 2]);
        ok = result === 1;
        if (ok) {
          msg = '<code>getFirstElement([1, 2])</code> returns <code>1</code>.';
        } else {
          msg = '<code>getFirstElement([1, 2])</code> does not return <code>1</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>getFirstElement([1, 2])</code>.';
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
        var result = getFirstElement(["Firefox", "Chrome"]);
        ok = result === "Firefox";
        if (ok) {
          msg = '<code>getFirstElement(["Firefox", "Chrome"])</code> returns <code>"Firefox"</code>.';
        } else {
          msg = '<code>getFirstElement(["Firefox", "Chrome"])</code> does not return <code>"Firefox"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>getFirstElement(["Firefox", "Chrome"])</code>.';
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
