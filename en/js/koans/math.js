jshero.koans.add({

  id: "math",

  title: "Math",

  lesson: 'Many mathematical functions are grouped together in the <code>Math</code> object. ' +
    'For example, <code>Math.sqrt(x)</code> returns the square root ' +
    'and <code>Math.pow(x,y)</code> calculates x to the power of y.' +
    '<pre><code>var y1 = Math.sqrt(9);<br>var y2 = Math.pow(10, 3);</code></pre>' +
    '<code>y1</code> has the value <code>3</code> and <code>y2</code> has the value <code>1000</code> (10&sup3; = 10 * 10 * 10 = 1000). ',

  task: 'Write a function <code>hypotenuse</code> that calculates the length of the hypotenuse of a right triangle.' +
    'The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. ' +
    'If a and b are the lengths of the two legs and c is the length of the hypotenuse, the following is true: a&sup2; + b&sup2; = c&sup2;. ' +
    'Since 3&sup2; + 4&sup2; = 5&sup2; applies, <code>hypotenuse(3,4)</code> should return <code>5</code>.',

  beforeTests: function() {
    if (typeof hypotenuse !== "undefined") {
      hypotenuse = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof hypotenuse === 'function';
      var msg;
      if (ok) {
        msg = "<code>hypotenuse</code> is a function.";
      } else {
        msg = "<code>hypotenuse</code> is not a function.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = hypotenuse.length === 2;
      var msg;
      if (ok) {
        msg = "<code>hypotenuse</code> has 2 parameters.";
      } else {
        msg = "<code>hypotenuse</code> has not 2, but " + hypotenuse.length + " parameters.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = hypotenuse(3, 4);
        ok = result === 5;
        if (ok) {
          msg = '<code>hypotenuse(3, 4)</code> returns <code>5</code>.';
        } else {
          msg = '<code>hypotenuse(3, 4)</code> does not return <code>5</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>hypotenuse(3, 4)</code>.";
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
        var result = hypotenuse(5, 12);
        ok = result === 13;
        if (ok) {
          msg = '<code>hypotenuse(5, 12)</code> returns <code>13</code>.';
        } else {
          msg = '<code>hypotenuse(5, 12)</code> does not return <code>13</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>hypotenuse(5, 12)</code>.";
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
