jshero.koans.add({

  id: "stringlength",

  title: "String: length",

  lesson: 'Strings have the <code>length</code> property. This property represents the number of characters in a string. ' +
    'To do this, you must append <code>.length</code> to the string or to the variable that contains the string:' +
    '<pre><code>var charNumber = "Ai".length;</code/></pre>' +
    '<code>"Ai"</code> has 2 characters. So <code>charNumber</code> has the value <code>2</code>.' +
    '<pre><code>var name = "Weiwei";<br>charNumber = name.length;</code/></pre>' +
    '<code>"Weiwei"</code> has 6 characters. <code>charNumber</code> now has the value <code>6</code>.' +
    '<pre><code>charNumber = "".length;</code/></pre>' +
    'The empty string has no characters. The value of <code>charNumber</code> is <code>0</code>.',

  task: 'Write a function <code>length</code> that takes a string and returns the number of characters of the string. ' +
    '<code>length("sun")</code> should return <code>3</code>.',

  beforeTests: function() {
    if (typeof length !== "undefined") {
      length = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof length === 'function';
      var msg;
      if (ok) {
        msg = '<code>length</code> is a function.';
      } else {
        msg = '<code>length</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var result = length.length;
      var ok = result === 1;
      var msg;
      if (ok) {
        msg = '<code>length</code> has 1 parameter.';
      } else {
        msg = '<code>length</code> has not 1, but ' + result + ' parameters.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = length('Hello world!');
        ok = result === 12;
        if (ok) {
          msg = '<code>length("Hello world!")</code> returns <code>12</code>.';
        } else {
          msg = '<code>length("Hello world!")</code> does not return <code>12</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>length("Hello world!")</code>.';
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
        var result = length('');
        ok = result === 0;
        if (ok) {
          msg = '<code>length("")</code> returns <code>0</code>.';
        } else {
          msg = '<code>length("")</code> does not return <code>0</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error when calling <code>length("")</code>.';
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
