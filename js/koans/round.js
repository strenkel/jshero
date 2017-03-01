jshero.koans.add({

  id: "round",

  title: "Runden",

  lesson: 'Möchte man eine Dezimalzahl auf- oder abrunden, stehen einem die Methoden <code>Math.round()</code>, ' +
    '<code>Math.floor()</code> (engl.: Boden) und <code>Math.ceil()</code> (engl: Decke) zur Verfügung.' +
    '<pre><code>' +
    'var a = Math.round(5.49);<br>' +
    'var b = Math.round(4.5);<br>' +
    'var c = Math.floor(5.99);<br>' +
    'var d = Math.ceil(4.01);' +
    '</code></pre>' +
    '<code>Math.round()</code> rundet kaufmännisch. Zahlen mit der ersten Dezimalstelle kleiner gleich 4 werden abgerundet, alle anderen aufgerundet. ' +
    '<code>Math.floor()</code> rundet immer ab und <code>Math.ceil()</code> rundet immer auf. Die Variablen <code>a</code> bis <code>d</code> ' +
    'werden also alle auf <code>5</code> gerundet.',

  task: 'Schreibe eine Funktion <code>round100</code>, die eine Dezimalzahl kaufmännisch auf die Hunderterstelle rundet. ' +
    '<code>round100(1749)</code> sollte <code>1700</code> und <code>round100(856.123)</code> sollte <code>900</code> ergeben.<br>' +
    'Tipp: Verwende neben <code>Math.round()</code> noch Multiplikation und Division.',

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
