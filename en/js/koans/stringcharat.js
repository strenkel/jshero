jshero.koans.add({

  id: 'stringcharat',

  title: 'String: charAt()',

  lesson: 'To get a character from a string at a specified index, use the <code>charAt(index)</code> method: ' +
  '<pre><code>var char0 = "Frantz".charAt(0);<br>var char1 = "Frantz".charAt(1);<br>var char9 = "Frantz".charAt(9);</code></pre>' +
  'The first character has the index 0. So <code>char0</code> has the value <code>"F"</code> and <code>char1</code> has the value <code>"r"</code>. ' +
  'If the index is larger than the index of the last character, the empty string is returned. So <code>char9</code> has the value <code>""</code>.',

  task: 'Write a function <code>shortcut</code> that takes two strings and returns the initial letters of theses strings. ' +
    '<code>shortcut("Amnesty", "International")</code> should return <code>"AI"</code>.',

  beforeTests: function() {
    if (typeof shortcut !== "undefined") {
      shortcut = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof shortcut === 'function';
      var msg;
      if (ok) {
        msg = '<code>shortcut</code> is a function.';
      } else {
        msg = '<code>shortcut</code> is not a function.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = shortcut.length === 2;
      var msg;
      if (ok) {
        msg = "<code>shortcut</code> has 2 parameters.";
      } else {
        msg = "<code>shortcut</code> has not 2, but " + shortcut.length + " parameters.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = shortcut("Amnesty", "International");
        ok = result === "AI";
        if (ok) {
          msg = '<code>shortcut("Amnesty", "International")</code> returns <code>"AI"</code> zurück.';
        } else {
          msg = '<code>shortcut("Amnesty", "International")</code> does not return <code>"AI"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        e = exc;
        ok = false;
        msg = 'Error when calling <code>shortcut("Amnesty", "International")</code>.';
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
        var result = shortcut("Java", "Script");
        ok = result === "JS";
        if (ok) {
          msg = '<code>shortcut("Java", "Script")</code> returns <code>"JS"</code> zurück.';
        } else {
          msg = '<code>shortcut("Java", "Script")</code> does not return <code>"JS"</code>, but <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        e = exc;
        ok = false;
        msg = 'Error when calling <code>shortcut("Java", "Script")</code>.';
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }
  ]

});
