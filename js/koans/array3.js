jshero.koans.add({

  id: 'array3',

  title: 'Array-Elemente setzen',

  lesson: 'Ebenso wie man Array-Elemente über einen Index auslesen kann, kann man sie über diesen Index auch setzen. ' +
    'Dabei spielt es keine Rolle, ob das Array vorher gefüllt oder leer war.' +
    '<pre><code>var sprachen = [];<br>' +
    'sprachen[0] = "C";<br>' +
    'sprachen[1] = "C++";<br>' +
    'sprachen[2] = "Java";<br>' +
    'sprachen[3] = "JavaScript";</code></pre>' +
    'Hier wird ein leeres Array nacheinander mit den aufgeführten Werten gefüllt.',
        
  task: 'Schreibe ein Funktion <code>setFirstElement</code>, die ein Array und eine beliebige Variable entgegennimmt. ' +
    'Die Variable soll als erstes Element in das Array geschrieben werden. Das Array soll dann zurückgegeben werden. ' +
    '<code>setFirstElement([1, 2], 3)</code> sollte <code>[3, 2]</code> zurückgeben.',

  beforeTests: function() {
    if (typeof setFirstElement !== "undefined") {
      setFirstElement = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof setFirstElement === 'function';
      var msg;
      if (ok) {
        msg = '<code>setFirstElement</code> ist eine Funktion.';
      } else {
        msg = '<code>setFirstElement</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = setFirstElement.length === 2;
      var msg;
      if (ok) {
        msg = '<code>setFirstElement</code> hat 2 Parameter.';
      } else {
        msg = '<code>setFirstElement</code> hat nicht 2, sondern ' + setFirstElement.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
   
    function() {
      var ok, msg, e;
      try {
        var result = setFirstElement([1, 2], 3);
        ok = Array.isArray(result) && result.length === 2 && result[0] === 3 && result[1] === 2;
        if (ok) {
          msg = '<code>setFirstElement([1, 2], 3)</code> gibt <code>[3, 2]</code> zurück.';
        } else {
          msg = '<code>setFirstElement([1, 2], 3)</code> gibt nicht <code>[3, 2]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>setFirstElement([1, 2], 3)</code>.';
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
        var result = setFirstElement([], 1);
        ok = Array.isArray(result) && result.length === 1 && result[0] === 1;
        if (ok) {
          msg = '<code>setFirstElement([], 1)</code> gibt <code>[1]</code> zurück.';
        } else {
          msg = '<code>setFirstElement([], 1)</code> gibt nicht <code>[1]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        e = exc;
        ok = false;
        msg = 'Fehler beim Aufruf von <code>setFirstElement([], 1)</code>.';
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }

  ]

});
