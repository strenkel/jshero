(function() {

var isOneToSix = function(x) {
  return x===1 || x===2 || x===3 || x===4 || x===5 || x===6;
};

jshero.koans.add({

  id: 'random',

  title: 'Zufallszahlen',

  lesson: 'Mit <code>Math.random()</code> erzeugt man eine Pseudozufallszahl zwischen 0 (inklusive) und 1 (exklusive).' +
    '<pre><code>' +
    'var x = Math.random();' +
    '</code></pre>' +
    '<code>x</code> könnte z.B. den Wert <code>0.6206372241429993</code> erhalten. Jeder Aufruf von <code>Math.random()</code> generiert eine neue Pseudozufallszahl. ' +
    'Die Zahlen sind zwischen 0 und 1 gleichverteilt. Sie heißen Pseudozufallszahlen, weil sie zufällig aussehen, aber dennoch berechnet werden. ' +
    'Möchte man Zufallszahlen in einem anderen Wertebereich oder mit einer anderen Verteilung erhalten, muss man die von <code>Math.random()</code> generierten Zahlen ' +
    'geeignet umrechnen. Das soll jetzt gleich probiert werden.',

  task: 'Schreibe eine Funktion <code>dice</code>, die wie ein Würfel eine Zufallszahl zwischen 1 und 6 zurückgibt.',

  beforeTests: function() {
    if (typeof dice !== "undefined") {
      dice = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof dice === 'function';
      var msg;
      if (ok) {
        msg = "<code>dice</code> ist eine Funktion.";
      } else {
        msg = "<code>dice</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = dice.length === 0;
      var msg;
      if (ok) {
        msg = "<code>dice</code> hat keinen Parameter.";
      } else {
        msg = "<code>dice</code> hat nicht 0, sondern " + dice.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        ok = true;
        var result;
        for (var i=0; i < 1000; i++) {
          result = dice();
          if (!isOneToSix(result)) {
            ok = false;
            break;
          }
        }
        if (ok) {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen nur natürliche Zahlen zwischen <code>1</code> und <code>6</code> zurück.';
        } else {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen mindestens einmal <code>' + JSON.stringify(result) + '</code> zurück. Dies ist keine natürliche Zahl zwischen <code>1</code> und <code>6</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>dice()</code>.";
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
        ok = false;
        var result;
        for (var i=0; i < 1000; i++) {
          result = dice();
          if (result === 1) {
            ok = true;
            break;
          }
        }
        if (ok) {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen mindestens einmal <code>1</code> zurück.';
        } else {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen keine <code>1</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>dice()</code>.";
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
        ok = false;
        var result;
        for (var i=0; i < 1000; i++) {
          result = dice();
          if (result === 2) {
            ok = true;
            break;
          }
        }
        if (ok) {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen mindestens einmal <code>2</code> zurück.';
        } else {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen keine <code>2</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>dice()</code>.";
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
        ok = false;
        var result;
        for (var i=0; i < 1000; i++) {
          result = dice();
          if (result === 3) {
            ok = true;
            break;
          }
        }
        if (ok) {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen mindestens einmal <code>3</code> zurück.';
        } else {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen keine <code>3</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>dice()</code>.";
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
        ok = false;
        var result;
        for (var i=0; i < 1000; i++) {
          result = dice();
          if (result === 4) {
            ok = true;
            break;
          }
        }
        if (ok) {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen mindestens einmal <code>4</code> zurück.';
        } else {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen keine <code>4</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>dice()</code>.";
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
        ok = false;
        var result;
        for (var i=0; i < 1000; i++) {
          result = dice();
          if (result === 5) {
            ok = true;
            break;
          }
        }
        if (ok) {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen mindestens einmal <code>5</code> zurück.';
        } else {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen keine <code>5</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>dice()</code>.";
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
        ok = false;
        var result;
        for (var i=0; i < 1000; i++) {
          result = dice();
          if (result === 6) {
            ok = true;
            break;
          }
        }
        if (ok) {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen mindestens einmal <code>6</code> zurück.';
        } else {
          msg = '<code>dice()</code> gab bei 1000 Aufrufen keine <code>6</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = "Fehler beim Aufruf von <code>dice()</code>.";
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
