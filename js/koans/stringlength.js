jshero.koans.add({

  id: "stringlength",

  title: "String.length",

  lesson: 'Strings besitzen die Eigenschaft <code>length</code>. Diese Eigenschaft liefert die Anzahl der Zeichen eines Strings. ' +
    'Dazu muss man dem String  oder der Variablen, die den String enthält, <code>.length</code> anhängen:' +
    '<pre><code>var anzahl = "Franz".length;</code/></pre>' +
    '<code>"Franz"</code> hat 5 Zeichen. Also hat <code>anzahl</code> jetzt den Wert <code>5</code>.' +
    '<pre><code>var stadt = "Prag";<br>anzahl = stadt.length;</code/></pre>' +
    '<code>"Prag"</code> hat 4 Zeichen. <code>anzahl</code> hat jetzt den Wert <code>4</code>.' +
    '<pre><code>anzahl = "".length</code/></pre>' + 
    'Der Leerstring besitzt keine Zeichen. Der Wert von <code>anzahl</code> ist jetzt <code>0</code>.',

  task: 'Schreibe eine Funktion <code>laenge</code>, die bei Übergabe eines Strings die Anzahl der Zeichen dieses Strings zurückgibt. ' +
    '<code>laenge("Franz")</code> sollte <code>5</code> zurückgeben.',

  beforeTests: function() {
    if (typeof laenge !== "undefined") {
      laenge = undefined;
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
      var result = laenge.length;
      var ok = result === 1;
      var msg;
      if (ok) {
        msg = '<code>laenge</code> hat genau 1 Parameter.';
      } else {
        msg = '<code>laenge</code> hat nicht 1, sondern ' + result + ' Parameter.';
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
