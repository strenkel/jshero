jshero.koans.add({

  id: 'stringupper',

  title: 'String: toUpperCase()',

  lesson: 'In addition to the <code>length</code> property, strings have methods. These are functions that are applied to the string. ' +
    'Like the <code>length</code> property, these methods are appended with a point to the string or to a variable that contains a string. ' +
    'The arguments enclosed in parentheses follow. ' +
    'Two of these string methods are the parameterless methods <code>toUpperCase</code> and <code>toLowerCase</code>. ' +
    'They return the string in uppercase or lowercase.' +
    '<pre><code>var town = "Mthatha";<br>var output = town.toUpperCase();</code/></pre>' +
    '<code>output</code> has the value <code>"MTHATHA"</code>. <code>town</code> still has the value <code>"Mthatha"</code>.' +
    '<pre><code>output = town.toLowerCase();</code/></pre>' +
    'Now <code>output</code> has the value <code>"mthatha"</code>.',

  task: 'Write a function <code>toCase</code> that takes a string and returns that string in lowercase and uppercase with <code>-</code> as delimiter. ' +
    '<code>toCase("Mthatha")</code> should return <code>"mthatha-MTHATHA"</code>.',

  beforeTests: function() {
    if (typeof toCase !== "undefined") {
      toCase = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof toCase === 'function';
      var msg;
      if (ok) {
        msg = '<code>toCase</code> is a function.';
      } else {
        msg = '<code>toCase</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var result = toCase.length;
      var ok = result === 1;
      var msg;
      if (ok) {
        msg = '<code>toCase</code> has 1 parameter.';
      } else {
        msg = '<code>toCase</code> has not 1, but ' + result + ' parameters.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = toCase('Mthatha');
        ok = result === "mthatha-MTHATHA";
        if (ok) {
          msg = '<code>toCase("Mthatha")</code> returns <code>"mthatha-MTHATHA"</code>.';
        } else {
          msg = '<code>toCase("Mthatha")</code> does not return <code>"mthatha-MTHATHA"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Error when calling <code>toCase("Mthatha")</code>.';
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
        var result = toCase('Johannesburg');
        ok = result === "johannesburg-JOHANNESBURG";
        if (ok) {
          msg = '<code>toCase("Johannesburg")</code> returns <code>"johannesburg-JOHANNESBURG"</code>.';
        } else {
          msg = '<code>toCase("Johannesburg")</code> does not return <code>"johannesburg-JOHANNESBURG"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Error when calling <code>toCase("Johannesburg")</code>.';
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
