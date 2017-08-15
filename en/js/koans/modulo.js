jshero.koans.add({

  id: "modulo",

  title: "Modulo",

  lesson: 'Another arithmetic operator is modulo. It calculates the remainder of a division and is represented by <code>%</code>.' +
    '<pre><code>var x = 7 % 2;<br>' +
    'var y = 20 % 3;</code></pre>' +
    '7 divided by 2 is 3 with remainder 1. <code>x</code> is <code>1</code>.<br>' +
    '20 divided by 3 is 6 with remainder 2. <code>y</code> is <code>2</code>.',

  task: 'Write a function <code>firstDigit</code> that takes a natural number and returns the first digit of that number. ' +
    '<code>firstDigit(2674)</code> should return <code>4</code>.',

  beforeTests: function() {
    if (typeof einer !== "undefined") {
      einer = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof firstDigit === 'function';
      var msg;
      if (ok) {
        msg = "<code>firstDigit</code> is a function.";
      } else {
        msg = "<code>firstDigit</code> is not a function.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = firstDigit.length === 1;
      var msg;
      if (ok) {
        msg = "<code>firstDigit</code> has 1 parameter.";
      } else {
        msg = "<code>firstDigit</code> has not 1, but " + firstDigit.length + " parameters.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = firstDigit(0);
        ok = result === 0;
        if (ok) {
          msg = '<code>firstDigit(0)</code> returns <code>0</code>.';
        } else {
          msg = '<code>firstDigit(0)</code> does not return <code>0</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error while calling <code>firstDigit(0)</code>.';
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
        var result = firstDigit(217);
        ok = result === 7;
        if (ok) {
          msg = '<code>firstDigit(217)</code> returns <code>7</code>.';
        } else {
          msg = '<code>firstDigit(217)</code> does not return <code>7</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error while calling <code>firstDigit(217)</code>.';
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
