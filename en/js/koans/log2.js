jshero.koans.add({

  id: "log2",

  title: "Logging variables",

  lesson: `Now let's log variables:

<pre><code>var scientist = "Ken Thompson";
console.log(scientist);</code></pre>

The variable <code>scientist</code> is logged.
The console outputs <code>"Ken Thompson"</code>.`,

  task: `Write a function <code>log</code>, that takes a parameter and logs this parameter.
<code>log("Ken Thompson")</code> should log <code>"Ken Thompson"</code>.`,

  beforeTests: function() {
    if (typeof log !== "undefined") {
      log = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('log');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('log', 1);
    },

    function() {
      var ok, msg, e;
      try {
        log("Ken Thompson");
        if (jshero.hasLog("Ken Thompson")) {
          ok = true;
          msg = '<code>log("Ken Thompson")</code> is logging <code>"Ken Thompson"</code>.';
        } else {
          ok = false;
          msg = '<code>log("Ken Thompson")</code> does not logging <code>"Ken Thompson"</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Error on call of <code>log("Ken Thompson")</code>.';
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
        log("Dennis Ritchie");
        if (jshero.hasLog("Dennis Ritchie")) {
          ok = true;
          msg = '<code>log("Dennis Ritchie")</code> is logging <code>"Dennis Ritchie"</code>.';
        } else {
          ok = false;
          msg = '<code>log("Dennis Ritchie")</code> does not logging <code>"Dennis Ritchie"</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Error on call of <code>log("Dennis Ritchie")</code>.';
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