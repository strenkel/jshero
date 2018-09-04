jshero.koans.add({

  id: "log2",

  title: "Variablen loggen",

  lesson: `Nun wollen wir Variablen loggen:

<pre><code>var informatiker = "Ken Thompson";
console.log(informatiker);</code></pre>

Hier wird die Variable <code>informatiker</code> mit <code>console.log</code> geloggt.
In der Konsole erscheint <code>"Ken Thompson"</code>. Das ist der Wert der Variablen <code>informatiker</code>.`,

  task: `Schreibe eine Funktion <code>logge</code>, die einen Parameter entgegennimmt und diesen Parameter loggt.
Der Aufruf von <code>logge("Ken Thompson")</code> sollte <code>"Ken Thompson"</code> loggen.`,

  hint: `<pre><code>var logge = function(wert) {
  ...
};`,

  solution: `<pre><code>var logge = function(wert) {
  console.log(wert);
};`,

  beforeTests: function() {
    if (typeof logge !== "undefined") {
      logge = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('logge');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('logge', 1);
    },

    function() {
      var ok, msg, e;
      try {
        logge("Ken Thompson");
        if (jshero.log.hasLog("Ken Thompson")) {
          ok = true;
          msg = '<code>logge("Ken Thompson")</code> loggt <code>"Ken Thompson"</code>.';
        } else {
          ok = false;
          msg = '<code>logge("Ken Thompson")</code> loggt nicht <code>"Ken Thompson"</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>logge("Ken Thompson")</code>.';
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
        logge("Dennis Ritchie");
        if (jshero.log.hasLog("Dennis Ritchie")) {
          ok = true;
          msg = '<code>logge("Dennis Ritchie")</code> loggt <code>"Dennis Ritchie"</code>.';
        } else {
          ok = false;
          msg = '<code>logge("Dennis Ritchie")</code> loggt nicht <code>"Dennis Ritchie"</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>logge("Dennis Ritchie")</code>.';
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