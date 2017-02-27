jshero.koans.add({

  id: 'even',

  title: 'Gerade Zahlen',

  lesson: 'Diese Aufgabe soll das Zusammenspiel von strikter Gleichheit und dem Modulo-Operator vertiefen.',
        
  task: 'Schreibe eine Funktion <code>istGerade</code>, die angibt, ob eine übergebene Zahl gerade oder ungerade ist. ' +
    'Ist die übergebene Zahl gerade, so soll die Funktion <code>true</code> zurückgeben, andernfalls <code>false</code>. ' +
    '<code>istGerade(6)</code> soll <code>true</code> ergeben und <code>istGerade(7)</code> soll <code>false</code> zurückgeben. ',

  beforeTests: function() {
    if (typeof istGerade !== "undefined") {
      gleich = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof istGerade === 'function';
      var msg;
      if (ok) {
        msg = '<code>istGerade</code> ist eine Funktion.';
      } else {
        msg = '<code>istGerade</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = istGerade.length === 1;
      var msg;
      if (ok) {
        msg = '<code>istGerade</code> hat 1 Parameter.';
      } else {
        msg = '<code>istGerade</code> hat nicht 1, sondern ' + istGerade.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = istGerade(10);
        ok = result === true;
        if (ok) {
          msg = '<code>istGerade(10)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>istGerade(10)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>istGerade(10)</code>.';
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
        var result = istGerade(15);
        ok = result === false;
        if (ok) {
          msg = '<code>istGerade(15)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>istGerade(15)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>istGerade(15)</code>.';
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
