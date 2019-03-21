(function(testutil, evaluator) {

  jshero.koans.add({

    id: 'roman1',

    title: 'Römische Zahlen I',

    lesson: `Die folgende Aufgabe ist anspruchsvoll. Du musst vieles von dem zuvor Gelernten benutzen.
Versuche eine iterative (Scheife) und eine rekursive Lösung zu finden.`,

    task: `Schreibe eine Funktion <code>roman</code>, die eine
<a href="https://de.wikipedia.org/wiki/R%C3%B6mische_Zahlschrift">römische Zahl</a> in eine arabische umwandelt.
<code>roman("CDLXXVI")</code> sollte <code>476</code> ergeben.`,

    beforeTests: function() {
      if (typeof roman !== "undefined") {
        reverse = undefined;
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
        return testutil.assert_functionReturns('roman("CMXCIX")', 999);
      },

      function() {
        return testutil.assert_functionReturns('roman("MDCLXVI")', 1666);
      }

    ]

  });

})(jshero.testutil);