jshero.koans.add({

  id: 'equals2',

  title: 'Three identical values',

  lesson: 'The following task can be solved by an interaction of strict equality and a Boolean operator.',
        
  task: 'Write a function <code>equals</code> that checks 3 values for strict equality. The function should only return <code>true</code> if all 3 values are equal. ' +
    '<code>equals(1, 1, 1)</code> should return <code>true</code> and <code>equals(1, 2, 1)</code> should return <code>false</code>.',

  beforeTests: function() {
    if (typeof equals !== "undefined") {
      equals = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof equals === 'function';
      var msg;
      if (ok) {
        msg = '<code>equals</code> is a function.';
      } else {
        msg = '<code>equals</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = equals.length === 3;
      var msg;
      if (ok) {
        msg = '<code>equals</code> has 3 parameters.';
      } else {
        msg = '<code>equals</code> has not 3, but ' + equals.length + ' parameters.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = equals(1, 1, 1);
        ok = result === true;
        if (ok) {
          msg = '<code>equals(1, 1, 1)</code> returns <code>true</code>.';
        } else {
          msg = '<code>equals(1, 1, 1)</code> does not return <code>true</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>equals(1, 1, 1)</code>.';
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
        var result = equals(1, 1, "1");
        ok = result === false;
        if (ok) {
          msg = '<code>equals(1, 1, "1")</code> returns <code>false</code>.';
        } else {
          msg = '<code>equals(1, 1, "1")</code> does not return <code>false</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>equals(1, 1, "1")</code>.';
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
        var result = equals(1, "1", 1);
        ok = result === false;
        if (ok) {
          msg = '<code>equals(1, "1", 1)</code> returns <code>false</code>.';
        } else {
          msg = '<code>equals(1, "1", 1)</code> does not return <code>false</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>equals(1, "1", 1)</code>.';
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
        var result = equals("1", 1, 1);
        ok = result === false;
        if (ok) {
          msg = '<code>equals("1", 1, 1)</code> returns <code>false</code>.';
        } else {
          msg = '<code>equals("1", 1, 1)</code> does not return <code>false</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>equals("1", 1, 1)</code>.';
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
