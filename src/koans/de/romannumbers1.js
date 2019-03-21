(function(testutil, evaluator) {

  jshero.koans.add({

    id: 'romannumbers1',

    title: 'Römische Zahlen I',

    lesson: `Die folgende Aufgabe ist anspruchsvoll. Du musst vieles von dem zuvor Gelernten benutzen.
Versuche eine iterative (for-Schleife) und eine rekursive Lösung zu finden.`,

    task: `Schreibe eine Funktion <code>roman</code>, die eine
<a href="https://de.wikipedia.org/wiki/R%C3%B6mische_Zahlschrift">römische Zahl</a> in eine arabische Zahl umwandelt.
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
        return testutil.assert_functionReturns('roman(5)', "V");
      },

      function() {
        return testutil.assert_functionReturns('roman(6)', "VI");
      },

      function() {
        return testutil.assert_functionReturns('roman(10)', "X");
      },

      function() {
        return testutil.assert_functionReturns('roman(483)', "CDLXXXIII");
      },
     
      function() {
        return testutil.assert_functionReturns('roman(999)', "CMXCIX");
      },

      function() {
        return testutil.assert_functionReturns('roman(1666)', "MDCLXVI");
      }

    ]

  });

})(jshero.testutil);