jshero.koans.add({

  id: 'stringsplit',

  title: 'String: split()',

  lesson: 'Die Methode <code>split</code> zerlegt einen String anhand eines Trennstrings in Teilstrings. Die Teilstrings werden als Array zurückgegeben. ' +
    'Der ursprüngliche String wird nicht verändert.' +
    '<pre><code>' +
    'var ',

  task: 'Schreibe eine Funktion <code>hallo</code>, die einen String als Parameter entgegennimmt und <code>"Hallo &lt;Parameter&gt;!"</code> zurückgibt. ' +
    '<code>hallo("Akgün")</code> sollte <code>"Hallo Akgün!"</code> zurückgeben. Wird <code>hallo</code> ohne Argument aufgerufen, so soll <code>"Hallo Welt!"</code> zurückgegeben werden.',

  beforeTests: function() {
    if (typeof hallo !== "undefined") {
      hallo = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof hallo === 'function';
      var msg;
      if (ok) {
        msg = "<code>hallo</code> ist eine Funktion.";
      } else {
        msg = "<code>hallo</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = hallo.length === 1;
      var msg;
      if (ok) {
        msg = "<code>hallo</code> hat 1 Parameter.";
      } else {
        msg = "<code>hallo</code> hat nicht 1, sondern " + hallo.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = hallo();
        ok = result === "Hallo Welt!"
        if (ok) {
          msg = '<code>hallo()</code> gibt <code>"Hallo Welt!"</code> zurück.';
        } else {
          msg = '<code>hallo()</code> gibt nicht <code>"Hallo Welt!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>hallo()</code>.';
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
        var result = hallo("Melek");
        ok = result === "Hallo Melek!"
        if (ok) {
          msg = '<code>hallo("Melek")</code> gibt <code>"Hallo Melek!"</code> zurück.';
        } else {
          msg = '<code>hallo("Melek")</code> gibt nicht <code>"Hallo Melek!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>hallo("Melek")</code>.';
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
