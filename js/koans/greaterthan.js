jshero.koans.add({

  id: 'greaterthan',

  title: 'Zahlen vergleichen',

  lesson: 'Zahlen kann man auch au',
        
  task: 'Schreibe eine Funktion <code>gleich</code>, die zwei Werte auf strikte Gleichheit überprüft. <code>gleich(1, 1)</code> soll ' +
    '<code>true</code> zurückgeben, <code>gleich(1, 2)</code> soll <code>false</code> ergeben.',

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
      var ok = gleich.length === 2;
      var msg;
      if (ok) {
        msg = '<code>gleich</code> hat zwei Parameter.';
      } else {
        msg = '<code>gleich</code> hat nicht 2, sondern ' + gleich.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = gleich(1, 1);
        ok = result === true;
        if (ok) {
          msg = '<code>gleich(1, 1)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>gleich(1, 1)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, 1)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = gleich(1, "1");
        ok = result === false;
        if (ok) {
          msg = '<code>gleich(1, "1")</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>gleich(1, "1")</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, "1")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
