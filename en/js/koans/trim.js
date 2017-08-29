jshero.koans.add({

  id: "trim",

  title: "String: trim()",

  lesson: 'The <code>trim</code> method removes whitespaces from both ends of a string.' +
    '<pre><code>' +
    'var input = " Rosa Parks ";<br>' +
    'var name = input.trim();' +
    '</code></pre>' +
    '<code>name</code> contains the string <code>"Rosa Parks"</code>. <code>input</code> still contains the string <code>" Rosa Parks "</code>.',

  task: 'Write a function <code>firstChar</code>, which returns the first character that is not a space when a string is passed. ' +
    '<code>firstChar(" Rosa Parks ")</code> should return <code>"R"</code>.',

  beforeTests: function() {
    if (typeof firstChar !== "undefined") {
      firstChar = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof firstChar === 'function';
      var msg;
      if (ok) {
        msg = '<code>firstChar</code> is a function.';
      } else {
        msg = '<code>firstChar</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var result = firstChar.length;
      var ok = result === 1;
      var msg;
      if (ok) {
        msg = '<code>firstChar</code> has 1 parameter';
      } else {
        msg = '<code>firstChar</code> does not have 1, but ' + result + ' parameters.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = firstChar(' Rosa');
        ok = result === "R";
        if (ok) {
          msg = '<code>firstChar(" Rosa")</code> returns <code>"R"</code>.';
        } else {
          msg = '<code>firstChar(" Rosa")</code> does not return <code>"R"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>firstChar(" Rosa")</code>.';
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
        var result = firstChar(' Parks');
        ok = result === "P";
        if (ok) {
          msg = '<code>firstChar(" Parks")</code> returns <code>"P"</code>.';
        } else {
          msg = '<code>firstChar(" Parks")</code> does not return <code>"P"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>firstChar(" Parks")</code>.';
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
