jshero.koans.add({

  id: "numbertostring",

  title: "Number: toString()",

  lesson: '', 
        
  task: '',

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
        msg = "<code>add</code> hat nicht 2, sondern " + add.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = add(0, 0);
        ok = result === 0;
        if (ok) {
          msg = '<code>add(0, 0)</code> ergibt <code>0</code>.';
        } else {
          msg = '<code>add(0, 0)</code> ergibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>add(0, 0)</code>.";
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
        var result = add(2, 3);
        ok = result === 5;
        if (ok) {
          msg = '<code>add(2, 3)</code> ergibt <code>5</code>.';
        } else {
          msg = '<code>add(2, 3)</code> ergibt nicht <code>5</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>add(2, 3)</code>.";
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
