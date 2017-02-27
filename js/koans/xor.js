jshero.koans.add({

  id: "xor",

  title: "XOR",

  lesson: 'In der letzten Aufgabe hast du ein sogenanntes NAND-Gatter (engl.: Not AND - nicht und) programmiert. ' +
    'NAND-Gatter sind in der Digitaltechnik ein sogenannter Standardbaustein. Mit ihm lassen sich alle logischen Verknüpfungen zusammenstellen. ' +
    'Hier sollst du ein weiteres wichtiges Gatter, das XOR-Gatter (engl.: eXclusive OR - exklusives Oder), programmieren.',
        
  task: 'Schreibe eine Funktion <code>xor</code>, die zwei boolesche Werte als Parameter entgegennimmt. Die Rückgabe der Funktion soll <code>true</code> sein, ' +
    'wenn beide Paramter verschieden sind. In den anderen Fällen soll die Rückgabe <code>false</code> sein. <code>xor(true, false)</code> und ' +
    '<code>xor(false, true)</code> sollen <code>true</code> liefern, <code>xor(true, true)</code> und <code>xor(false, false)</code> sollen <code>false</code> zurückgeben.',

  beforeTests: function() {
    if (typeof nand !== "undefined") {
      nand = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof xor === 'function';
      var msg;
      if (ok) {
        msg = "<code>xor</code> ist eine Funktion.";
      } else {
        msg = "<code>xor</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = xor.length === 2;
      var msg;
      if (ok) {
        msg = "<code>xor</code> hat zwei Parameter.";
      } else {
        msg = "<code>xor</code> hat nicht 2, sondern " + xor.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = xor(true, true);
        ok = result === false;
        if (ok) {
          msg = '<code>xor(true, true)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>xor(true, true)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>xor(true, true)</code>.";
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
        var result = xor(false, false);
        ok = result === false;
        if (ok) {
          msg = '<code>xor(false, false)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>xor(false, false)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>xor(false, false)</code>.";
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
        var result = xor(true, false);
        ok = result === true;
        if (ok) {
          msg = '<code>xor(true, false)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>xor(true, false)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>xor(true, false)</code>.";
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
        var result = xor(false, true);
        ok = result === true;
        if (ok) {
          msg = '<code>xor(false, true)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>xor(false, true)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>xor(false, true)</code>.";
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
