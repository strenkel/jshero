jshero.koans.add({

  id: "parameter",

  title: "Parameters",

  lesson: 'Now we get to know functions with parameters. With <pre><code>var give = function(input) {<br>  return input;<br>};</code></pre>' +
    'we define a function which simply returns the parameter <code>input</code>. ' +
    'Parameters are variables. With' +
    '<pre><code>var result = give("apple");</code></pre>' +
    'we call the function <code>give</code> and pass it the argument <code>"apple"</code>. <code>give</code> will be executed. ' +
    'The argument <code>"apple"</code> will be assigned to the parameter <code>input</code>. <code>input</code> gets the value <code>"apple"</code>. ' +
    'The variable <code>input</code> is returned in the single code line of the function <code>give</code>. ' +
    'This return is assigned to the variable <code>result</code>. Finally, <code>result</code> has the value <code>"apple"</code>. ',
        
  task: 'Write a function <code>echo</code>, which also returns the passed parameter.',

  beforeTests: function() {
    if (typeof echo !== "undefined") {
      echo = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof echo === 'function';
      var msg;
      if (ok) {
        msg = '<code>echo</code> is a function.';
      } else {
        msg = '<code>echo</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var result = echo.length;
      var ok = result === 1;
      var msg;
      if (ok) {
        msg = '<code>echo</code> has 1 parameter.';
      } else {
        msg = '<code>echo</code> has not 1, but ' + result + ' parameters.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var ok, msg, e;
      try {
        var result = echo('Hello World!');
        ok = result === "Hello World!";
        if (ok) {
          msg = '<code>echo("Hello World!")</code> returns <code>"Hello World!"</code>.';
        } else {
          msg = '<code>echo("Hello World!")</code> does not return <code>"Hello World!"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error while calling <code>echo("Hello World!")</code>.';
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
        var result = echo('rose');
        ok = result === "rose";
        if (ok) {
          msg = '<code>echo("rose")</code> returns <code>"rose"</code>.';
        } else {
          msg = '<code>echo("rose")</code> does not return <code>"rose"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Error while calling <code>echo("rose")</code>.';
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
