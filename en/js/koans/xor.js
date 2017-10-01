jshero.koans.add({

  id: "xor",

  title: "XOR",

  lesson: 'In the last task you have coded a so-called NAND (Not AND) gate. ' +
    'NAND gates are a standard component in digital electronics. Any boolean function can be implemented by using a combination of NAND gates. ' +
    'Here you will get to know another important gate, the XOR (eXclusive OR) gate.',
        
  task: 'Write a function <code>xor</code> that takes two Boolean values. If both values are different, the result should be <code>true</code>. ' +
    'If both values are the same, the result should be <code>false</code>. The calls <code>xor(true, false)</code> and ' +
    '<code>xor(false, true)</code> should return <code>true</code>. The calls <code>xor(true, true)</code> and <code>xor(false, false)</code> should return <code>false</code>.',

  beforeTests: function() {
    if (typeof nand !== "undefined") {
      nand = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof xor === 'function';
      var msg;
      if (ok) {
        msg = "<code>xor</code> is a function.";
      } else {
        msg = "<code>xor</code> is not a function.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = xor.length === 2;
      var msg;
      if (ok) {
        msg = "<code>xor</code> has 2 parameters.";
      } else {
        msg = "<code>xor</code> has not 2 parameters, but " + xor.length + ".";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = xor(true, true);
        ok = result === false;
        if (ok) {
          msg = '<code>xor(true, true)</code> returns <code>false</code>.';
        } else {
          msg = '<code>xor(true, true)</code> does not return <code>false</code>, but <code>' + JSON.stringify(result) + '</code>.';
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
        var result = xor(false, false);
        ok = result === false;
        if (ok) {
          msg = '<code>xor(false, false)</code> returns <code>false</code>.';
        } else {
          msg = '<code>xor(false, false)</code> does not return <code>false</code>, but <code>' + JSON.stringify(result) + '</code>.';
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
        var result = xor(true, false);
        ok = result === true;
        if (ok) {
          msg = '<code>xor(true, false)</code> returns <code>true</code>.';
        } else {
          msg = '<code>xor(true, false)</code> does not return <code>true</code>, but <code>' + JSON.stringify(result) + '</code>.';
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
        var result = xor(false, true);
        ok = result === true;
        if (ok) {
          msg = '<code>xor(false, true)</code> returns <code>true</code>.';
        } else {
          msg = '<code>xor(false, true)</code> does not return <code>true</code>, but <code>' + JSON.stringify(result) + '</code>.';
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
    }

  ]

});
