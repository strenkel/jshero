(function() {

jshero.koans.add({

  id: 'ggt',

  title: 'ggT',

  lesson: 'Das Gegenstück zum kleinsten gemeinsamen Vielfachen ist der größte gemeinsamer Teiler (ggT). ' +
    'Der größte gemeinsame Teiler zweier Zahlen a und b ist die größte Zahl, durch die sich sowohl a als auch b teilen läßt.',
        
  task: 'Schreibe eine Funktion <code>ggT</code>, die zwei natürliche Zahlen als Parameter entgegennimmt und deren ggT berechnet. ' +
    '<code>ggT(6, 15)</code> sollte <code>3</code> zurückgeben.',
 
  beforeTests: function() {
    if (typeof ggT !== "undefined") {
      ggT = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof ggT === 'function';
      var msg;
      if (ok) {
        msg = '<code>ggT</code> ist eine Funktion.';
      } else {
        msg = '<code>ggT</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = ggT.length === 2;
      var msg;
      if (ok) {
        msg = '<code>ggT</code> hat 2 Parameter.';
      } else {
        msg = '<code>ggT</code> hat nicht 2, sondern ' + ggT.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = ggT(6, 15);
        ok = result === 3;
        if (ok) {
          msg = '<code>ggT(6, 15)</code> gibt <code>3</code> zurück.';
        } else {
          msg = '<code>ggT(6, 15)</code> gibt nicht <code>3</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ggT(6, 15)</code>.';
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
        var result = ggT(5, 7);
        ok = result === 1;
        if (ok) {
          msg = '<code>ggT(5, 7)</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>ggT(5, 7)</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ggT(5, 7)</code>.';
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
        var result = ggT(7, 5);
        ok = result === 1;
        if (ok) {
          msg = '<code>ggT(7, 5)</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>ggT(7, 5)</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ggT(7, 5)</code>.';
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
        var result = ggT(2, 4);
        ok = result === 2;
        if (ok) {
          msg = '<code>ggT(2, 4)</code> gibt <code>2</code> zurück.';
        } else {
          msg = '<code>ggT(2, 4)</code> gibt nicht <code>2</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ggT(2, 4)</code>.';
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
        var result = ggT(4, 2);
        ok = result === 2;
        if (ok) {
          msg = '<code>ggT(4, 2)</code> gibt <code>2</code> zurück.';
        } else {
          msg = '<code>ggT(4, 2)</code> gibt nicht <code>2</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ggT(4, 2)</code>.';
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

})();
