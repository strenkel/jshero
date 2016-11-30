jshero.koans.add({

  id: 'greaterthan',

  title: 'Zahlen vergleichen',

  lesson: 'Zahlen kann man mit den aus der Mathematik bekannten Zeichen <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code> und <code>&gt;=</code> ' +
    'auf größer, größer gleich, kleiner und kleiner gleich vergleichen. Im folgenden Beispiel liefern alle Ausdrücke den Wert <code>true</code>:' + 
    '<pre><code>var v1 = 5 > 4;<br>var v2 = 5 >= 5;<br>var v3 = 5 < 6;<br>var v4 = 5 <= 5;</code></pre>',
        
  task: 'Schreibe eine Funktion <code>istDreistellig</code>, die prüft, ob eine Zahl größer gleich 100 und kleiner 1000 ist. ' +
    '<code>istDreistellig(500)</code> sollte <code>true</code> zurückgeben, <code>istDreistellig(50)</code> sollte <code>false</code> ergeben.',

  beforeTests: function() {
    if (typeof istDreistellig !== "undefined") {
      istDreistellig = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof istDreistellig === 'function';
      var msg;
      if (ok) {
        msg = '<code>istDreistellig</code> ist eine Funktion.';
      } else {
        msg = '<code>istDreistellig</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = istDreistellig.length === 1;
      var msg;
      if (ok) {
        msg = '<code>istDreistellig</code> hat einen Parameter.';
      } else {
        msg = '<code>istDreistellig</code> hat nicht 1, sondern ' + istDreistellig.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = istDreistellig(100);
        ok = result === true;
        if (ok) {
          msg = '<code>istDreistellig(100)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>istDreistellig(100)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>istDreistellig(100)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = istDreistellig(999);
        ok = result === true;
        if (ok) {
          msg = '<code>istDreistellig(999)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>istDreistellig(999)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>istDreistellig(999)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = istDreistellig(99);
        ok = result === false;
        if (ok) {
          msg = '<code>istDreistellig(99)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>istDreistellig(99)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>istDreistellig(99)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = istDreistellig(1000);
        ok = result === false;
        if (ok) {
          msg = '<code>istDreistellig(1000)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>istDreistellig(1000)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>istDreistellig(1000)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
