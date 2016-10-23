jshero.koans.add({

  id: "add",

  title: "Addition",

  lesson: "Mit <code>+</code> addierst du Zahlen.", 

  task: "Schreibe eine Funktion <code>add</code>, die 2 Zahlen addiert.",

  beforeTests: function() {
    if (typeof add !== "undefined") {
      add = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof add === 'function';
      var msg;
      if (ok) {
        msg = "<code>add</code> ist eine Funktion.";
      } else {
        msg = "<code>add</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = add.length === 2;
      var msg;
      if (ok) {
        msg = "<code>add</code> hat zwei Parameter.";
      } else {
        msg = "<code>add</code> hat nicht zwei Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = add(0, 0);
        ok = result === 0;
        if (ok) {
          msg = '<code>add(0,0)</code> ergibt <code>0</code>.';
        } else {
          msg = '<code>add(0,0)</code> ergibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>add(0, 0)</code>.";
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
