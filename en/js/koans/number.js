jshero.koans.add({

  id: "number",

  title: "Numbers",

  lesson: 'Numbers are represented by simple numerals. They can have a decimal point and a minus sign.' +
  '<pre><code>var x1 = 1;<br>var x2 = 1.0;<br>var x3 = 3.14;<br>var x4 = -1;</code></pre>' +
  '<code>1</code> and <code>1.0</code> are the same number. ' +
  'You can calculate with numbers. The four basic arithmetics adding, subtracting, multiplying and dividing are represented by '+
   '<code> + - * </code> and <code>/</code>.' +
  '<pre><code>var x1 = 6;<br>var x2 = 2;<br>var x3 = x1 + x2;<br>var x4 = x1 - x2;<br>var x5 = x1 * x2;<br>var x6 = x1 / x2;</code></pre>' +
  'The variables <code>x3</code> to <code>x6</code> thus have the values <code>8</code>, <code>4</code>, <code>12</code> and <code>3</code>.',
        
  task: 'Write a function <code>add</code> that takes two numbers and returns their sum. ' +
  '<code>add(1,&nbsp;2)</code> should return <code>3</code>.',

  beforeTests: function() {
    if (typeof add !== "undefined") {
      add = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof add === 'function';
      var msg;
      if (ok) {
        msg = "<code>add</code> is a function.";
      } else {
        msg = "<code>add</code> is not a function.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = add.length === 2;
      var msg;
      if (ok) {
        msg = "<code>add</code> has 2 parameters.";
      } else {
        msg = "<code>add</code> has not 2, but " + add.length + " parameters.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = add(0, 0);
        ok = result === 0;
        if (ok) {
          msg = '<code>add(0, 0)</code> returns <code>0</code>.';
        } else {
          msg = '<code>add(0, 0)</code> does not return <code>0</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error while calling <code>add(0, 0)</code>.";
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
        var result = add(2, 3);
        ok = result === 5;
        if (ok) {
          msg = '<code>add(2, 3)</code> returns <code>5</code>.';
        } else {
          msg = '<code>add(2, 3)</code> does not return <code>5</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error while calling <code>add(2, 3)</code>.";
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
