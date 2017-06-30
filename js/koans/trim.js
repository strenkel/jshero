jshero.koans.add({

  id: "trim",

  title: "String: trim()",

  lesson: 'Die Methode <code>trim</code> entfernt Leerzeichen an beiden Enden eines Strings. Der an den Enden um Leerzeichen bereinigte String wird zurückgegeben. ' +
    'Der ursprügliche String bleib unverändert.' +
    '<pre><code>' +
    'var eingabe = " Rosa Parks ";<br>' +
    'var name = eingabe.trim();' +
    '</code></pre>' +
    '<code>name</code> enthält den String <code>"Rosa Parks"</code>. Wie angedeutet werden häufig Benutzereingaben vor der Verarbeitung getrimmt.',

  task: 'Schreibe eine Funktion <code>firstChar</code>, die bei Übergabe eines Strings das erste Zeichen, das kein Leerzeichen ist, zurückgibt. ' +
    '<code>firstChar(" Rosa")</code> sollte <code>"R"</code> zurückgeben.',

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
        msg = '<code>firstChar</code> ist eine Funktion.';
      } else {
        msg = '<code>firstChar</code> ist keine Funktion.';
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
        msg = '<code>firstChar</code> hat genau 1 Parameter.';
      } else {
        msg = '<code>firstChar</code> hat nicht 1, sondern ' + result + ' Parameter.';
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
          msg = '<code>firstChar(" Rosa")</code> gibt <code>"R"</code> zurück.';
        } else {
          msg = '<code>firstChar(" Rosa")</code> gibt nicht <code>"R"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>firstChar(" Rosa")</code>.';
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
        var result = firstChar('Parks');
        ok = result === "P";
        if (ok) {
          msg = '<code>firstChar("Parks")</code> gibt <code>"P"</code> zurück.';
        } else {
          msg = '<code>firstChar("Parks")</code> gibt nicht <code>"P"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>firstChar("Parks")</code>.';
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
