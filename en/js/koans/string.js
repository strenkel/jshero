jshero.koans.add({

  id: "string",

  title: "Strings",

  lesson: 'We have seen that a variable is a container for a value. A value can be a text like <code>"Hello world!"</code>. ' +
    'Values have a type. The type of <code>"Hello world!"</code> is string. ' +
    'Strings are always written in single or double quotes. <code>"Hello world!"</code> is the same string as <code>\'Hello world!\'</code>.<br>' +
    'You can work with strings. For example, they can be concatenated. This is done with the <code>+</code> sign. ' +
    '<code>"Java" + "Script"</code> results in the string <code>"JavaScript"</code>.<br>' +
    'The following function appends <code>" is great!"</code> to the passed parameter and returns the result:' +
    '<pre><code>var praise = function(name) {<br>  return name + " is great!";<br>};</code></pre>' +
    '<code>praise("JavaScript")</code> will return <code>"JavaScript is great!"</code>.',

  task: 'Write a function <code>greet</code> having one parameter and returning <code>"Hello &lt;parameter&gt;!"</code>. ' +
    '<code>greet("Ada")</code> should return <code>"Hello Ada!"</code> and <code>greet("Tayo")</code> should return <code>"Hello Tayo!"</code>.',

  hint: `<pre><code>var greet = function(name) {
  return ...
};`,

  solution: `<pre><code>var greet = function(name) {
  return "Hello " + name + "!";
};`,

  beforeTests: function() {
    if (typeof greet !== "undefined") {
      greet = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof greet === 'function';
      var msg;
      if (ok) {
        msg = "<code>greet</code> is a function.";
      } else {
        msg = "<code>greet</code> is not a function."
      }
      return {
        msg: msg,
        ok: ok
      };
    },

    function() {
      var ok = greet.length === 1;
      var msg;
      if (ok) {
        msg = "<code>greet</code> has 1 parameter.";
      } else {
        msg = "<code>greet</code> has not 1, but " + greet.length + " parameters.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = greet('Ada');
        if (result === "Hello Ada!") {
          ok = true;
          msg = '<code>greet("Ada")</code> returns <code>"Hello Ada!"</code>.';
        } else {
          ok = false;
          msg = '<code>greet("Ada")</code> does not return <code>"Hello Ada!"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Error when calling <code>greet("Ada")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = greet('Tayo');
        if (result === "Hello Tayo!") {
          ok = true;
          msg = '<code>greet("Tayo")</code> returns <code>"Hello Tayo!"</code>.';
        } else {
          ok = false;
          msg = '<code>greet("Tayo")</code> does not return <code>"Hello Tayo!"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Error when calling <code>greet("Tayo")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    }

  ]

});
