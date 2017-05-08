jshero.koans.add({

  id: 'notequals',

  title: 'Strikte Ungleichtheit',

  lesson: 'Mit <code>!==</code> vergleicht man zwei Werte auf strikte Ungleichheit.' + 
    '<pre><code>var v1 = "lauf" !== "Lauf";<br>var v2 = 10 !== "10";</code></pre>' +
    'Beide Vergleiche ergeben <code>true</code>. Der erste, weil sich die beiden Strings in der Groß- und Kleinschreibung unterscheiden. ' + 
    'Der zweite, weil sich die beiden Werte von Typ her unterscheiden.',
        
  task: 'Schreibe eine Funktion <code>ungleich</code>, die 3 Werte auf strikte Ungleichheit überprüft. Die Funktion soll nur dann ' +
    '<code>true</code> ergeben, wenn alle drei Parameter unterschiedlich sind. <code>ungleich(1, 2, 3)</code> soll ' +
    '<code>true</code> liefern, <code>ungleich(1, 1, 2)</code> soll <code>false</code> ergeben.',

  beforeTests: function() {
    if (typeof ungleich !== "undefined") {
      ungleich = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof ungleich === 'function';
      var msg;
      if (ok) {
        msg = '<code>ungleich</code> ist eine Funktion.';
      } else {
        msg = '<code>ungleich</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = ungleich.length === 3;
      var msg;
      if (ok) {
        msg = '<code>ungleich</code> hat 3 Parameter.';
      } else {
        msg = '<code>ungleich</code> hat nicht 3, sondern ' + ungleich.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = ungleich(1, 2, 3);
        ok = result === true;
        if (ok) {
          msg = '<code>ungleich(1, 2, 3)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>ungleich(1, 2, 3)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ungleich(1, 2, 3)</code>.';
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
        var result = ungleich(1, 1, 2);
        ok = result === false;
        if (ok) {
          msg = '<code>ungleich(1, 1, 2)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>ungleich(1, 1, 2)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ungleich(1, 1, 2)</code>.';
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
        var result = ungleich(1, 2, 1);
        ok = result === false;
        if (ok) {
          msg = '<code>ungleich(1, 2, 1)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>ungleich(1, 2, 1)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ungleich(1, 2, 1)</code>.';
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
        var result = ungleich(2, 1, 1);
        ok = result === false;
        if (ok) {
          msg = '<code>ungleich(2, 1, 1)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>ungleich(2, 1, 1)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ungleich(2, 1, 1)</code>.';
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
        var result = ungleich("1", 1, true);
        ok = result === true;
        if (ok) {
          msg = '<code>ungleich("1", 1, true)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>ungleich("1", 1, true)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>ungleich("1", 1, true)</code>.';
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
