jshero.koans.add({

  id: "pi",

  title: "Math.PI",

  lesson: 'Neben Funktionen bietet <code>Math</code> auch einige mathematische Konstanten an. ' +
    '<code>Math.PI</code> liefert die Kreiszahl &pi; (gerundet 3.14) und <code>Math.E</code> die Eulersche Zahl e (gerundet 2.71). ' +
    'Beachte: Die Konstanten werden im Gegensatz zu Funktionen ohne anschließende Klammern aufgerufen.',
        
  task: 'Schreibe eine Funktion <code>flaeche</code>, die die Fläche eines Kreises berechnet. ' +
    'Übergeben wird der Funktion als Parameter der Radius des Kreises. Tipp: Die Fläche eines Kreises ist &pi; * r&sup2;. ' +
    'Dabei ist r der Radius des Kreises.',

  beforeTests: function() {
    if (typeof flaeche !== "undefined") {
      flaeche = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof flaeche === 'function';
      var msg;
      if (ok) {
        msg = "<code>flaeche</code> ist eine Funktion.";
      } else {
        msg = "<code>flaeche</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = flaeche.length === 1;
      var msg;
      if (ok) {
        msg = "<code>flaeche</code> hat einen Parameter.";
      } else {
        msg = "<code>flaeche</code> hat nicht 1, sondern " + flaeche.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = flaeche(1);
        ok = result === Math.PI;
        if (ok) {
          msg = '<code>flaeche(1)</code> ergibt <code>' + Math.PI + '</code>.';
        } else {
          msg = '<code>flaeche(1)</code> ergibt nicht <code>' + Math.PI + '</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>flaeche(1)</code>.";
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
        var result = flaeche(2);
        ok = result === Math.PI * 4;
        if (ok) {
          msg = '<code>flaeche(2)</code> ergibt <code>' + (Math.PI * 4) + '</code>.';
        } else {
          msg = '<code>flaeche(2)</code> ergibt nicht <code>' + (Math.PI *4) + '</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>flaeche(2)</code>.";
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
