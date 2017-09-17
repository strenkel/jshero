jshero.koans.add({

  id: "bool",

  title: "Boolean",

  lesson: 'Another important data type next to strings and numbers are Boolean values. They have only two values: ' +
    '<code>true</code> and <code>false</code>. You can calculate with Boolean values similar to numbers. JavaScript has three Boolean operators: ' +
    '<code>&&</code> (and), <code>||</code> (or) and <code>!</code> (not). ' +
    '<code>&&</code> links two Boolean values. If both values are <code>true</code>, the result is <code>true</code>. In all other cases it is <code>false</code>. ' +
    'With <code>||</code> the result is <code>true</code>, if at least one of the two input values is <code>true</code>. If both input values are <code>false</code>, ' +
    'the result is <code>false</code>. <code>!</code> is applied to a single Boolean value and inverts this value: ' +
    '<code>!true</code> is <code>false</code> and <code>!false</code> is <code>true</code>.' +
    '<pre><code>var x1 = true && false;<br>var x2 = !x1;<br>var x3 = x1 || x2;</code></pre>' +
    '<code>x1</code> is <code>false</code>,  <code>x2</code> is <code>true</code> and <code>x3</code> is <code>true</code>.',
        
  task: 'Write a function <code>nand</code> that takes two Boolean values. If both values are <code>true</code>, the result should be <code>false</code>. ' +
    'In the other cases the return should be <code>true</code>. <code>nand(true, true)</code> ' +
    'should return <code>false</code>. <code>nand(true, false)</code>, <code>nand(false, true)</code> and <code>nand(false, false)</code> should return <code>true</code>.',

  beforeTests: function() {
    if (typeof nand !== "undefined") {
      nand = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof nand === 'function';
      var msg;
      if (ok) {
        msg = "<code>nand</code> is a function.";
      } else {
        msg = "<code>nand</code> is not a function.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = nand.length === 2;
      var msg;
      if (ok) {
        msg = "<code>nand</code> has 2 parameters.";
      } else {
        msg = "<code>nand</code> has not 2, but " + nand.length + " parameters.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = nand(true, true);
        ok = result === false;
        if (ok) {
          msg = '<code>nand(true, true)</code> returns <code>false</code>.';
        } else {
          msg = '<code>nand(true, true)</code> does not return <code>false</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>nand(true, true)</code>.";
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
        var result = nand(true, false);
        ok = result === true;
        if (ok) {
          msg = '<code>nand(true, false)</code> returns <code>true</code>.';
        } else {
          msg = '<code>nand(true, false)</code> does not return <code>true</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>nand(true, false)</code>.";
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
        var result = nand(false, true);
        ok = result === true;
        if (ok) {
          msg = '<code>nand(false, true)</code> returns <code>true</code>.';
        } else {
          msg = '<code>nand(false, true)</code> does not return <code>true</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>nand(false, true)</code>.";
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
        var result = nand(false, false);
        ok = result === true;
        if (ok) {
          msg = '<code>nand(false, false)</code> returns <code>true</code>.';
        } else {
          msg = '<code>nand(false, false)</code> does not return <code>true</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>nand(false, false)</code>.";
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
