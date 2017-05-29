jshero.koans.add({

  id: 'arraysort',

  title: 'Arrays sortieren',

  lesson: 'Mit dem Gelernten können wir Arrays mit vorgegebener Länge sortieren.',
        
  task: 'Schreibe eine Funktion <code>sortiere</code>, die ein mit 3 Zahlen gefülltes Array entgegennimmt und die diese 3 Zahlen aufsteigend sortiert als Array  zurückgibt. ' +
    '<code>sortiere([2,&nbsp;3,&nbsp;1])</code> sollte <code>[1,&nbsp;2,&nbsp;3]</code> ergeben.',

  beforeTests: function() {
    if (typeof sortiere !== "undefined") {
      sortieren = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof sortiere === 'function';
      var msg;
      if (ok) {
        msg = '<code>sortiere</code> ist eine Funktion.';
      } else {
        msg = '<code>sortiere</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = sortiere.length === 1;
      var msg;
      if (ok) {
        msg = '<code>sortiere</code> hat 1 Parameter.';
      } else {
        msg = '<code>sortiere</code> hat nicht 1, sondern ' + sortiere.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = sortiere([3, 2, 1]);
        ok = Array.isArray(result) && result.length === 3 && result[0] === 1 && result[1] === 2 && result[2] === 3;
        if (ok) {
          msg = '<code>sortiere([3, 2, 1])</code> gibt <code>[1, 2, 3]</code> zurück.';
        } else {
          msg = '<code>sortiere([3, 2, 1])</code> gibt nicht <code>[1, 2, 3]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sortiere([3, 2, 1])</code>.';
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
        var result = sortiere([2, 3, 1]);
        ok = Array.isArray(result) && result.length === 3 && result[0] === 1 && result[1] === 2 && result[2] === 3;
        if (ok) {
          msg = '<code>sortiere([2, 3, 1])</code> gibt <code>[1, 2, 3]</code> zurück.';
        } else {
          msg = '<code>sortiere([2, 3, 1])</code> gibt nicht <code>[1, 2, 3]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>sortiere([2, 3, 1])</code>.';
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
