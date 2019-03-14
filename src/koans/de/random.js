(function(testutil, evaluator) {

  var evalDice = function() {
    return evaluator.evalTest("dice()");
  };

  var isOneToSix = function(x) {
    return x === 1 || x === 2 || x === 3 || x === 4 || x === 5 || x === 6;
  };

  var throwA = function(x) {
    var result;
    for (var i = 0; i < 1000; i++) {
      result = evalDice();
      if (result === x) {
        return true;
      }
    }
    return false;
  };

  var testWith = function(x) {
    var ok, msg, e;
    try {
      ok = throwA(x);
      if (ok) {
        msg = '<code>dice()</code> gab bei 1000 Aufrufen mindestens einmal <code>' + x + '</code> zurück.';
      } else {
        msg = '<code>dice()</code> gab bei 1000 Aufrufen keine <code>' + x + '</code> zurück.';
      }
    } catch (exc) {
      ok = false;
      msg = "Fehler beim Aufruf von <code>dice()</code>.";
      e = exc;
    }
    return {
      ok: ok,
      msg: msg,
      e: e
    };
  };

  jshero.koans.add({

    id: 'random',

    title: 'Zufallszahlen',

    lesson: `Mit <code>Math.random()</code> erzeugt man eine Pseudozufallszahl zwischen 0 (inklusive) und 1 (exklusive).

<pre><code>var x = Math.random();</code></pre>

<code>x</code> könnte z.B. den Wert <code>0.6206372241429993</code> erhalten.
Jeder Aufruf von <code>Math.random()</code> generiert eine neue Pseudozufallszahl.
Die Zahlen sind zwischen 0 und 1 gleichverteilt. Sie heißen Pseudozufallszahlen,
weil sie zufällig aussehen, aber dennoch berechnet werden.
Möchte man Zufallszahlen in einem anderen Wertebereich oder mit einer anderen Verteilung erhalten,
muss man die von <code>Math.random()</code> generierten Zahlen
geeignet umrechnen. Das soll jetzt gleich geübt werden.`,

    task: 'Schreibe eine Funktion <code>dice</code>, die wie ein Würfel eine Zufallszahl zwischen 1 und 6 zurückgibt.',

    beforeTests: function() {
      if (typeof dice !== "undefined") {
        dice = undefined;
      }
    },

    tests: [
      function() {
          return testutil.assert_isFunction('dice');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('dice', 0);
      },

      function() {
        var ok, msg, e;
        try {
          ok = true;
          var result;
          for (var i = 0; i < 1000; i++) {
            result = evalDice();
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
        } catch (exc) {
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
        return testWith(1);
      },
      function() {
        return testWith(2);
      },
      function() {
        return testWith(3);
      },
      function() {
        return testWith(4);
      },
      function() {
        return testWith(5);
      },
      function() {
        return testWith(6);
      }

    ]

  });

})(jshero.testutil, jshero.evaluator);
