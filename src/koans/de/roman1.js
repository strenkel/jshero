(function(testutil) {

  jshero.koans.add({

    id: 'roman1',

    title: 'Römische Zahlen I',

    lesson: `Die folgende Aufgabe ist anspruchsvoll. Versuche eine iterative (Scheife) und eine rekursive Lösung zu finden.`,

    task: `Schreibe eine Funktion <code>roman</code>, die eine
<a href="https://de.wikipedia.org/wiki/R%C3%B6mische_Zahlschrift">römische Zahl</a> (bis 1000) in eine
<a href="https://de.wikipedia.org/wiki/Arabische_Zahlschrift">arabische</a> umwandelt.
<code>roman("CDLXXXIII")</code> sollte <code>483</code> ergeben.`,

    beforeTests: function() {
      if (typeof roman !== "undefined") {
        roman = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('roman');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('roman', 1);
      },

      function() {
        return testutil.assert_functionReturns('roman("I")', 1);
      },

      function() {
        return testutil.assert_functionReturns('roman("II")', 2);
      },

      function() {
        return testutil.assert_functionReturns('roman("III")', 3);
      },

      function() {
        return testutil.assert_functionReturns('roman("IV")', 4);
      },

      function() {
        return testutil.assert_functionReturns('roman("V")', 5);
      },

      function() {
        return testutil.assert_functionReturns('roman("VI")', 6);
      },

      function() {
        return testutil.assert_functionReturns('roman("X")', 10);
      },

      function() {
        return testutil.assert_functionReturns('roman("CDLXXXIII")', 483);
      },

      function() {
        return testutil.assert_functionReturns('roman("DCLXVI")', 666);
      },

      function() {
        return testutil.assert_functionReturns('roman("CMXCIX")', 999);
      },

      function() {
        return testutil.assert_functionReturns('roman("M")', 1000);
      }

    ]

  });

})(jshero.testutil);