jshero.koans.add({

  id: "log",

  title: "Loggen und Strings",

  lesson: "Jetzt wollen wir das Loggen zusammen mit dem Verketten von Strings üben.",

  task: `Schreibe eine Funktion <code>rufe</code>, die einen String als Parameter entgegennimmt und diesen String verdoppelt zurückgibt.
  Gleichzeitig soll die Rückgabe geloggt werden. Der Aufruf <code>rufe("Werder")</code>
  sollte <code>"WerderWerder"</code> zurückgeben und er sollte <code>"WerderWerder"</code> loggen.`,

  beforeTests: function() {
    if (typeof rufe !== "undefined") {
      rufe = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('rufe');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('rufe', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('rufe("Werder")', 'WerderWerder');
    },

    function() {
      return jshero.testutil.assert_functionReturns('rufe("Kickers")', 'KickersKickers');
    },

    function() {
      var ok, msg, e;
      try {
        rufe("Werder");
        if (jshero.hasLog("WerderWerder")) {
          ok = true;
          msg = '<code>rufe("Werder")</code> loggt <code>"WerderWerder"</code>.';
        } else {
          ok = false;
          msg = '<code>rufe("Werder")</code> loggt nicht <code>"WerderWerder"</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Werder")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        rufe("Kickers");
        if (jshero.hasLog("KickersKickers")) {
          ok = true;
          msg = '<code>rufe("Kickers")</code> loggt <code>"KickersKickers"</code>.';
        } else {
          ok = false;
          msg = '<code>rufe("Kickers")</code> loggt nicht <code>"KickersKickers"</code>.';
        }
      } catch (exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Kickers")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    }

  ]

});
