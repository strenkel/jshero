jshero.koans.add({

  id: "further",

  title: "... wird fortgesetzt ...",

  lesson: 'JS Hero wird fortgesetzt. Weitere Übungen folgen in Kürze. Zum Abschluss noch eine anspruchsvolle Aufgabe aus dem Gebiet der Mathematik.' ,
        
  task: 'Schreibe eine Funktion <code>quersumme</code>, die die Quersumme einer natürlichen Zahl berechnet. ' +
    'Die Quersumme einer Zahl ist dabei die Summe ihrer Ziffern. <code>quersumme(198)</code> sollte <code>18</code> ergeben.',

  beforeTests: function() {
    if (typeof quersumme !== "undefined") {
      quersumme = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof quersumme === 'function';
      var msg;
      if (ok) {
        msg = '<code>quersumme</code> ist eine Funktion.';
      } else {
        msg = '<code>quersumme</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var ok = quersumme.length === 1;
      var msg;
      if (ok) {
        msg = '<code>quersumme</code> hat 1 Parameter.';
      } else {
        msg = '<code>quersumme</code> hat nicht 1, sondern ' + quersumme.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = quersumme(1);
        ok = result === 1;
        if (ok) {
          msg = '<code>quersumme(1)</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>quersumme(1)</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>quersumme(1)</code>.";
        e: exc;
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
        var result = quersumme(198);
        ok = result === 18;
        if (ok) {
          msg = '<code>quersumme(198)</code> gibt <code>18</code> zurück.';
        } else {
          msg = '<code>quersumme(198)</code> gibt nicht <code>18</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>quersumme(198)</code>.";
        e: exc;
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
        var result = quersumme(123456789);
        ok = result === 45;
        if (ok) {
          msg = '<code>quersumme(123456789)</code> gibt <code>45</code> zurück.';
        } else {
          msg = '<code>quersumme(123456789)</code> gibt nicht <code>45</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>quersumme(123456789)</code>.";
        e: exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }
  ]

});
