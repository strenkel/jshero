jshero.koans.add({

  id: 'equals2',

  title: 'Drei gleiche Werte',

  lesson: 'Die folgende Aufgabe soll das Zusammenspiel von strikter Gleichheit und booleschen Operatoren vertiefen.',
        
  task: 'Schreibe eine Funktion <code>gleich</code>, die 3 Werte auf strikte Gleichheit überprüft. Die Funktion soll nur ' +
    'dann <code>true</code> ergeben, wenn alle 3 Werte gleich sind. <code>gleich(1, 1, 1)</code> soll ' +
    '<code>true</code> zurückgeben, <code>gleich(1, 1, 2)</code> soll <code>false</code> ergeben.',

  beforeTests: function() {
    if (typeof gleich !== "undefined") {
      gleich = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof gleich === 'function';
      var msg;
      if (ok) {
        msg = '<code>gleich</code> ist eine Funktion.';
      } else {
        msg = '<code>gleich</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = gleich.length === 3;
      var msg;
      if (ok) {
        msg = '<code>gleich</code> hat 3 Parameter.';
      } else {
        msg = '<code>gleich</code> hat nicht 3, sondern ' + gleich.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = gleich(1, 1, 1);
        ok = result === true;
        if (ok) {
          msg = '<code>gleich(1, 1, 1)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>gleich(1, 1, 1)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, 1, 1)</code>.';
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
        var result = gleich(1, 1, "1");
        ok = result === false;
        if (ok) {
          msg = '<code>gleich(1, 1, "1")</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>gleich(1, 1, "1")</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, 1, "1")</code>.';
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
        var result = gleich(1, "1", 1);
        ok = result === false;
        if (ok) {
          msg = '<code>gleich(1, "1", 1)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>gleich(1, "1", 1)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, "1", 1)</code>.';
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
