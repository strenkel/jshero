jshero.koans.add({

  id: 'array',

  title: 'Creating arrays',

  lesson: 'Arrays are objects for storing multiple values. Arrays are preferably created with square brackets.' +
    '<pre><code>var languages = ["C", "C++", "Java", "JavaScript"];<br>' +
    'var primes = [2, 3, 5, 7, 11];<br>' +
    'var emptyArray = [];<br>' +
    'var a = "Douglas";<br>' +
    'var b = 12;<br>' +
    'var c = true;<br>' +
    'var someValues = [a, b, c];</code></pre>',
        
  task: 'Write a function <code>toArray</code> that takes 2 values and returns these values in an array. ' +
    '<code>toArray(5,&nbsp;9)</code> should return the array <code>[5,&nbsp;9]</code>.',

  beforeTests: function() {
    if (typeof toArray !== "undefined") {
      toArray = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof toArray === 'function';
      var msg;
      if (ok) {
        msg = '<code>toArray</code> is a function.';
      } else {
        msg = '<code>toArray</code> is not a funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = toArray.length === 2;
      var msg;
      if (ok) {
        msg = '<code>toArray</code> has 2 parameters.';
      } else {
        msg = '<code>toArray</code> has not 2, but ' + toArray.length + ' parameters.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = toArray(1, 2);
        ok = Array.isArray(result);
        if (ok) {
          msg = '<code>toArray(1, 2)</code> returns an array.';
        } else {
          msg = '<code>toArray(1, 2)</code> does not return an array.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>toArray(1, 2)</code>.';
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
        var result = toArray(1, 2);
        ok = result.length === 2 && result[0] === 1 && result[1] === 2;
        if (ok) {
          msg = '<code>toArray(1, 2)</code> returns <code>[1, 2]</code>.';
        } else {
          msg = '<code>toArray(1, 2)</code> does not return <code>[1, 2]</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>toArray(1, 2)</code>.';
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
        var result = toArray("Tom", "Huckleberry");
        ok = Array.isArray(result) && result.length === 2 && result[0] === "Tom" && result[1] === "Huckleberry";
        if (ok) {
          msg = '<code>toArray("Tom", "Huckleberry")</code> returns <code>["Tom", "Huckleberry"]</code>.';
        } else {
          msg = '<code>toArray("Tom", "Huckleberry")</code> does not return <code>["Tom", "Huckleberry"]</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling toArray("Tom", "Huckleberry")</code>.';
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
