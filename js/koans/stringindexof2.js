jshero.koans.add({

  id: 'stringindexof2',

  title: '... String.indexOf()',

  lesson: 'Der Methode <code>indexOf</code> kann man als zweiten Paramter noch die Stelle mitgeben, ab der der Suchstring im aufrufenden String gesucht werden soll. ' +
    '<pre><code>' +
    'var n1 = "Fred Feuerstein".indexOf("e", 2);<br>' +
    'var n2 = "Fred Feuerstein".indexOf("e", 3);<br>' +
    'var n3 = "Fred Feuerstein".indexOf("e", 7);<br>' +
    '</code></pre>' +
    'Das erste <code>"e"</code> befindet sich in <code>"Fred Feuerstein"</code> an 2. Stelle. Es wird bei einer Suche ab der 2. Stelle gefunden. <code>n1</code> ' +
    'ist also 2. Das zweite <code>"e"</code> in <code>"Fred Feuerstein"</code> befindet sich an der 6. Stelle. Es wird bei der Suche ab der 3. Stelle gefunden. ' +
    '<code>n2</code> ist <code>6</code>. Mit der dritten Codezeile wird das dritte <code>"e"</code> in <code>"Fred Feuerstein"</code> gefunden. ' +
    '<code>n3</code> ist <code>8</code>.',

  task: 'Schreibe eine Funktion <code>secondIndexOf</code>, die 2 Strings entgegennimmt und die zweite Position des ' +
    'zweiten Strings im ersten String bestimmt. Kommt der Suchstring nicht zweimal vor, so soll <code>-1</code> zurückgegeben werden. ' +
    '<code>secondIndexOf("Maria Maria", "Maria")</code> soll <code>6</code> zurückgeben.',

  beforeTests: function() {
    if (typeof secondIndexOf !== "undefined") {
      secondIndexOf = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof secondIndexOf === 'function';
      var msg;
      if (ok) {
        msg = '<code>secondIndexOf</code> ist eine Funktion.';
      } else {
        msg = '<code>secondIndexOf</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = secondIndexOf.length === 2;
      var msg;
      if (ok) {
        msg = "<code>secondIndexOf</code> hat 2 Parameter.";
      } else {
        msg = "<code>secondIndexOf</code> hat nicht 2, sondern " + secondIndexOf.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = secondIndexOf("Maria Maria", "Maria");
        ok = result === 6;
        if (ok) {
          msg = '<code>secondIndexOf("Maria Maria", "Maria")</code> gibt <code>6</code> zurück.';
        } else {
          msg = '<code>secondIndexOf("Maria Maria", "Maria")</code> gibt nicht <code>6</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>secondIndexOf("Maria Maria", "Maria")</code>.';
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
        var result = secondIndexOf("xxXX", "X");
        ok = result === 3;
        if (ok) {
          msg = '<code>secondIndexOf("xxXX", "X")</code> gibt <code>3</code> zurück.';
        } else {
          msg = '<code>secondIndexOf("xxXX", "X")</code> gibt nicht <code>3</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>secondIndexOf("xxXX", "X")</code>.';
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
        var result = secondIndexOf("O ja!", "ja");
        ok = result === -1;
        if (ok) {
          msg = '<code>secondIndexOf("O ja!", "ja")</code> gibt <code>-1</code> zurück.';
        } else {
          msg = '<code>secondIndexOf("O ja!", "ja")</code> gibt nicht <code>-1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>secondIndexOf("O ja!", "ja")</code>.';
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
