(function() {

jshero.koans.add({

  id: 'while',

  title: 'while-Schleife',

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
    if (typeof mean !== "undefined") {
      mean = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof mean === 'function';
      var msg;
      if (ok) {
        msg = '<code>mean</code> ist eine Funktion.';
      } else {
        msg = '<code>mean</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = mean.length === 1;
      var msg;
      if (ok) {
        msg = '<code>mean</code> hat 1 Parameter.';
      } else {
        msg = '<code>mean</code> hat nicht 1, sondern ' + addiereBis.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = mean([0]);
        ok = result === 0;
        if (ok) {
          msg = '<code>mean([0])</code> gibt <code>0</code> zurück.';
        } else {
          msg = '<code>mean([0])</code> gibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([0])</code>.';
        e = exc;
        console.log(msg, e);
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
        var result = mean([1, 2]);
        ok = result === 1.5;
        if (ok) {
          msg = '<code>mean([1, 2])</code> gibt <code>1.5</code> zurück.';
        } else {
          msg = '<code>mean([1, 2])</code> gibt nicht <code>1.5</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([1, 2])</code>.';
        e = exc;
        console.log(msg, e);
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
