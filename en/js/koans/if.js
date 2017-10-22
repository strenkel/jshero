jshero.koans.add({

  id: 'if',

  title: 'if',

  lesson: 'Often code should only be executed if a certain condition is true. ' +
    'To do this, use the <code>if</code> statement.' +
    '<pre><code>' +
    'var win = 0;<br>' +
    'if (dice === 6) {<br>' +
    '  win = 100;<br>' +
    '}</code></pre>' +
    'This statement consists of the keyword <code>if</code> followed by parentheses. The parentheses contain an expression - the condition - ' +
    'that is evaluated to <code>true</code> or <code>false</code>. If the condition results in <code>true</code>, all statements in the block delimited by the curly brackets will be executed. ' +
    'If the condition results in <code>false</code>, the block bounded by the curly brackets will be skipped. ' +
    'In our example, if <code>dice</code> has the value <code>6</code>, then <code>win</code> is set to <code>100</code>. ' +
    'If <code>dice</code> does not have the value <code>6</code>, then <code>win</code> remains at <code>0</code>.',
        
  task: 'Write a function <code>equals</code> that checks two values for strict equality. If the two values are equal, the string <code>"EQUAL"</code> should be returned. ' +
    'If they are unequal, you should get <code>"UNEQUAL"</code>. The call <code>equals(1, 1)</code> should return <code>"EQUAL"</code>, the call <code>equals(1, 2)</code> ' +
    'should return <code>"UNEQUAL"</code>.',

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
      var ok = equals.length === 2;
      var msg;
      if (ok) {
        msg = '<code>equals</code> has 2 parameters.';
      } else {
        msg = '<code>equals</code> has not 2 parameters, but ' + equals.length + '.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = equals(1, 1);
        ok = result === "EQUAL";
        if (ok) {
          msg = '<code>equals(1, 1)</code> returns <code>"EQUAL"</code>.';
        } else {
          msg = '<code>equals(1, 1)</code> does not return <code>"EQUAL"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>equals(1, 1)</code>.';
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
        var result = equals(1, "1");
        ok = result === "UNEQUAL";
        if (ok) {
          msg = '<code>equals(1, "1")</code> returns <code>"UNEQUAL"</code>.';
        } else {
          msg = '<code>equals(1, "1")</code> does not return <code>"UNEQUAL"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>equals(1, "1")</code>.';
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
