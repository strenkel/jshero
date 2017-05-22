jshero.koans.add({

  id: "random",

  title: "Zufallszahlen",

  lesson: '',

  task: 'Schreibe eine Funktion <code>dice</code>, die wie ein Würfel eine Zufallszahl zwischen 1 und 6 zurückgibt.',

  beforeTests: function() {
    if (typeof round100 !== "undefined") {
      round100 = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof round100 === 'function';
      var msg;
      if (ok) {
        msg = "<code>round100</code> ist eine Funktion.";
      } else {
        msg = "<code>round100</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = round100.length === 1;
      var msg;
      if (ok) {
        msg = "<code>round100</code> hat einen Parameter.";
      } else {
        msg = "<code>round100</code> hat nicht 1, sondern " + round100.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = round100(49.999);
        ok = result === 0;
        if (ok) {
          msg = '<code>round100(49.999)</code> ergibt <code>0</code>.';
        } else {
          msg = '<code>round100(49.999)</code> ergibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>round100(49.999)</code>.";
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
        var result = round100(4650);
        ok = result === 4700;
        if (ok) {
          msg = '<code>round100(4650)</code> ergibt <code>4700</code>.';
        } else {
          msg = '<code>round100(4650)</code> ergibt nicht <code>4700</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>round100(4650)</code>.";
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },


  ]

});
