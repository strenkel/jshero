jshero.koans.add({

  id: "mean",

  title: "Parentheses",

  lesson: 'Just as in mathematics, the order of operations rules are valid in JavaScript. Multiplication and division are performed before addition and subtraction. ' +
  'With parentheses you can specify the order of operations.' +
  '<pre><code>var x1 = 3 + 4 * 2;<br>var x2 = (3 + 4) * 2;</code></pre>' +
  '<code>x1</code> is <code>11</code> and <code>x2</code> is <code>14</code>.',
        
  task: 'Write a function <code>mean</code> that takes 2 numbers and returns their mean value. ' +
  '<code>mean(1, 2)</code> should return <code>1.5</code>.',

  beforeTests: function() {
    if (typeof mean !== "undefined") {
      mean = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof mean === 'function';
      var msg;
      if (ok) {
        msg = "<code>mean</code> is a function.";
      } else {
        msg = "<code>mean</code> is not a funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = mean.length === 2;
      var msg;
      if (ok) {
        msg = "<code>mean</code> has 2 parameters.";
      } else {
        msg = "<code>mean</code> has not 2, but " + mean.length + " parameters.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = mean(1, 2);
        ok = result === 1.5;
        if (ok) {
          msg = '<code>mean(1, 2)</code> returns <code>1.5</code>.';
        } else {
          msg = '<code>mean(1, 2)</code> does not return <code>1.5</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error while calling <code>mean(1, 2)</code>.";
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
        var result = mean(0, 0);
        ok = result === 0;
        if (ok) {
          msg = '<code>mean(0, 0)</code> returns <code>0</code>.';
        } else {
          msg = '<code>mean(0, 0)</code> does not return <code>0</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error while calling <code>mean(0, 0)</code>.";
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
