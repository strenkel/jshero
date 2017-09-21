jshero.koans.add({

  id: 'equals',

  title: 'Strict equality',

  lesson: 'Two values can be checked for strict equality. The result of such a comparison is either <code>true</code>, the two values are equal, ' +
    'or <code>false</code>, the two values are not equal. The operator for strict equality is&nbsp;<code>===</code>.' + 
    '<pre><code>' +
    'var language = "JavaScript";<br>' +
    'var x = 10;<br>' +
    'var c1 = language === "Java";<br>' +
    'var c2 = x === 10;<br>' +
    'var c3 = x === "10";</code></pre>' +
    'The first comparison results in <code>false</code>, because <code>language</code> does not have the value <code>"Java"</code>. So <code>c1</code> is <code>false</code>. ' +
    'The second comparison results in <code>true</code>, because the value of <code>x</code> equals <code>10</code>. So <code>c2</code> is <code>true</code>. ' +
    'In the case of strict equality, it is also important that the two compared values has the same data type. ' +
    '<code>c3</code> is <code>false</code>, because different data types are compared here. ' + 
    'On the left side of the comparison is a number, on the right side a string.',
        
  task: 'Write a function <code>equals</code> that checks two values for strict equality. <code>equals(1, 1)</code> should return ' +
    '<code>true</code> and <code>equals(1, 2)</code> should return <code>false</code>.',

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
        msg = "<code>equals</code> has not 2, but " + equals.length + " parameters.";
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
        ok = result === true;
        if (ok) {
          msg = '<code>equals(1, 1)</code> returns <code>true</code>.';
        } else {
          msg = '<code>equals(1, 1)</code> does not return <code>true</code>, but <code>' + JSON.stringify(result) + '</code>.';
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
        ok = result === false;
        if (ok) {
          msg = '<code>equals(1, "1")</code> returns <code>false</code>.';
        } else {
          msg = '<code>equals(1, "1")</code> does not return <code>false</code>, but <code>' + JSON.stringify(result) + '</code>.';
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
