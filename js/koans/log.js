(function(testutil) {

  jshero.koans.add({

    id: "log",

    title: "Loggen und Strings",

    lesson: "Jetzt wollen wir das Loggen zusammen mit dem Verketten von Strings üben.",

    task: `Schreibe eine Funktion <code>rufe</code>, die einen String als Parameter entgegennimmt und diesen String verdoppelt zurückgibt.
  Gleichzeitig soll die Rückgabe geloggt werden. Der Aufruf <code>rufe("Werder")</code>
  sollte <code>"WerderWerder"</code> zurückgeben und er sollte <code>"WerderWerder"</code> loggen.`,

    hint: `<pre><code>var rufe = function(name) {
  var ruf = name + name;
  ...
};`,

    solution: `<pre><code>var rufe = function(name) {
  var ruf = name + name;
  console.log(ruf);
  return ruf;
};`,

    beforeTests: function() {
      if (typeof rufe !== "undefined") {
        rufe = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('rufe');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('rufe', 1);
      },

      function() {
        return testutil.assert_functionReturns('rufe("Werder")', 'WerderWerder');
      },

      function() {
        return testutil.assert_functionReturns('rufe("Kickers")', 'KickersKickers');
      },

      function() {
        return testutil.assert_functionLogs('rufe("Werder")', "WerderWerder");
      },

      function() {
        return testutil.assert_functionLogs('rufe("Kickers")', "KickersKickers");
      }

    ]

  });

})(jshero.testutil);
