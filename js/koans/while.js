(function() {

jshero.koans.add({

  id: 'while',

  title: 'while - Schleife',

  lesson: 'Die <code>while</code>-Schleife besitzt nur eine Schleifen-Bedingung. Der Schleifen-Code wird ausgeführt, solange die Bedingung <code>true</code> ergibt. ' +
    'Ergibt die Bedingung <code>false</code>, wird die Schleife beendet und die Codeausführung wird nach der Schleife fortgesetzt.' +
    '<pre><code>var space = "";<br>' +
    'while (space.length < 3) {<br>' +
    '  space = space + "x";<br>' +  
    '}</code></pre>' +
    'Solange <code>space</code> weniger als 3 Zeichen besitzt, wird es um <code>"x"</code> ergänzt. ' +
    'Hat <code>space</code> die Länge 3, wird die Schleife beendet. <code>space</code> hat dann den Wert <code>"xxx"</code>.',
        
  task: 'Schreibe eine Funktion <code>abstand</code>, die eine natürliche Zahl n als Parameter entgegennimmt und die einen String bestehend aus ' +
    'n Leerzeichen zurückgibt. <code>abstand(1)</code> sollte <code>" "</code> ergeben.',

  beforeTests: function() {
    if (typeof abstand !== "undefined") {
      abstand = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof abstand === 'function';
      var msg;
      if (ok) {
        msg = '<code>abstand</code> ist eine Funktion.';
      } else {
        msg = '<code>abstand</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = abstand.length === 1;
      var msg;
      if (ok) {
        msg = '<code>abstand</code> hat 1 Parameter.';
      } else {
        msg = '<code>abstand</code> hat nicht 1, sondern ' + abstand.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = abstand(0);
        ok = result === "";
        if (ok) {
          msg = '<code>abstand(0)</code> gibt <code>""</code> zurück.';
        } else {
          msg = '<code>abstand(0)</code> gibt nicht <code>""</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>abstand(0)</code>.';
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
        var result = abstand(2);
        ok = result === "  ";
        if (ok) {
          msg = '<code>abstand(2)</code> gibt <code>"&nbsp;&nbsp;"</code> zurück.';
        } else {
          msg = '<code>abstand(2)</code> gibt nicht <code>"&nbsp;&nbsp;"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>abstand(2)</code>.';
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

})();
