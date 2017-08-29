jshero.koans.add({

  id: "function",

  title: "Functions",

  lesson: 'A function is a block of statements that can be executed as often as you like. ' +
    'A function can have parameters and can return a value. ' +
    'Functions are defined by the keyword <code>function</code>, followed by the parameters enclosed in parentheses, followed by the instructions enclosed in curly brackets. ' +
    'Use the keyword <code>return</code> to return a value. At the same time <code>return</code> terminates the function. ' +
    'Functions can be assigned to a variable. With ' +
    '<pre><code>var color = function() {<br>  return "red";<br>};</code></pre> we define a function ' +
    'that returns the value <code>"red"</code>. The function has no parameters (the parentheses are empty) and contains only the return statement. ' +
    'The function is assigned to the variable <code>color</code>. The function is called via this variable:' +
    '<pre><code>var result = color();</code></pre>' +
    'Now the function is executed. Its return is assigned to the variable <code>result</code>. <code>result</code> therefore has the value <code>"red"</code>.',
        
  task: 'Declare a variable <code>hello</code>. Assign a function to it, that returns <code>"Hello world!"</code>.',

  beforeTests: function() {
    if (typeof hello !== "undefined") {
      hello = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof hello === 'function';
      var msg;
      if (ok) {
        msg = '<code>hello</code> is a function.';
      } else {
        msg = '<code>hello</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var ok, msg, e;
      try {
        var result = hello();
        ok = result === "Hello world!";
        if (ok) {
          msg = '<code>hello()</code> returns <code>"Hello world!"</code>.';
        } else {
          msg = '<code>hello()</code> does not return <code>"Hello world!"</code> but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Error when calling <code>hello()</code>.";
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
