jshero.koans.add({

  id: "stringlength",

  title: "String.length",

  lesson: 'Strings besitzen die Eigenschaft <code>length</code>. Diese Eigenschaft liefert die Anzahl der Zeichen eines Strings. ' +
    'Dazu muss man dem String  oder der Variablen, die den String enthält, <code>.length</code> anhängen:' +
    '<pre><code>var laenge1 = "Franz".length;<br>var stadt = "Prag";<br>var laenge2 = stadt.length;</code/></pre>' +
    '<code>laenge1</code> erhält den Wert <code>5</code> und <code>laenge2</code> den Wert <code>4</code>.<br>' +
    'Der leere String <code>""</code> hat die Länge <code>0</code>.',

  task: 'Schreibe eine Funktion <code>laenge</code>, die bei Übergabe eines Strings die Anzahl der Zeichen dieses Strings zurückgibt. ' +
    '<code>laenge("Franz")</code> sollte <code>5</code> zurückgeben.',

  beforeTests: function() {
    if (typeof echo !== "undefined") {
      echo = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof laenge === 'function';
      var msg;
      if (ok) {
        msg = '<code>laenge</code> ist eine Funktion.';
      } else {
        msg = '<code>laenge</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = laenge('Hallo Welt!');
        ok = result === 11;
        if (ok) {
          msg = '<code>laenge("Hallo Welt!")</code> gibt <code>11</code> zurück.';
        } else {
          msg = '<code>laenge("Hallo Welt!")</code> gibt nicht <code>11</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>laenge("Hallo Welt!")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = laenge('');
        ok = result === 0;
        if (ok) {
          msg = '<code>laenge("")</code> gibt <code>0</code> zurück.';
        } else {
          msg = '<code>laenge("")</code> gibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>laenge("")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }
  ]

});
