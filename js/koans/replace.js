jshero.koans.add({

  id: 'replace',

  title: 'String: replace()',

  lesson: 'Die Methode <code>replace</code> ersetzt einen Teilstring durch einen anderen:' +
    '<pre><code>' +
    'var str = "Hallo Marcel!";<br>' +
    'var newstr = str.replace("Marcel", "Robert");' +
    '</code></pre>' +
    '"Marcel" wird durch "Robert" ersetzt. <code>newstr</code> hat also den Wert <code>"Hallo Robert!"</code>. ' +
    'Der ursprüngliche String bleibt unverändert. Nur das erste Vorkommen wird ersetzt:' +
    '<pre><code>' +
    'var newname = "Peter".replace("e", "a");' +
    '</code></pre>' +
    '<code>newname</code> enthält den Wert <code>"Pater"</code> und nicht <code>"Patar"</code>. Ein Spezialfall ergibt sich, wenn der ersetzende String ' +
    'der Leerstring ist:' +
    '<pre><code>' +
    'var nurso = "sowie so".replace("wie", "");' +
    '</code></pre>' +
    'Der zu ersetzende String wird entfernt. <code>nurso</code> enthält den Wert <code>"so so"</code>. Kommt der zu ersetzende String nicht vor, so wird der ' +
    'ursprüngliche String zurückgegeben.',

  task: 'Schreibe eine Funktion <code>convert</code>, die einen Datumsstring in englischer Schreibweise (20-05-2017 oder 20/05/2017) in ' +
    'deutsche Schreibweise (20.05.2017) umwandet. Sowohl <code>convert("20-05-2017")</code> als auch <code>convert("20/05/2017")</code> sollten <code>"20.05.2017"</code> ergeben.',

  beforeTests: function() {
    if (typeof convert !== "undefined") {
      convert = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof convert === 'function';
      var msg;
      if (ok) {
        msg = '<code>convert</code> ist eine Funktion.';
      } else {
        msg = '<code>convert</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = convert.length === 1;
      var msg;
      if (ok) {
        msg = "<code>convert</code> hat 1 Parameter.";
      } else {
        msg = "<code>convert</code> hat nicht 1, sondern " + convert.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = convert("10-07-1871");
        ok = result === "10.07.1871";
        if (ok) {
          msg = '<code>convert("10-07-1871")</code> gibt <code>"10.07.1871"</code> zurück.';
        } else {
          msg = '<code>onvert("10-07-1871")</code> gibt nicht <code>"10.07.1871"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>convert("10-07-1871")</code>.';
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
        var result = convert("18/11/1922");
        ok = result === "18.11.1922";
        if (ok) {
          msg = '<code>convert("18/11/1922")</code> gibt <code>"18.11.1922"</code> zurück.';
        } else {
          msg = '<code>convert("18/11/1922")</code> gibt nicht <code>"18.11.1922"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>convert("18/11/1922")</code>.';
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
