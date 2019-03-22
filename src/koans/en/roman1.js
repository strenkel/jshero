(function(testutil) {

  jshero.koans.add({

    id: 'roman1',

    title: 'Roman numerals I',

    lesson: `Die folgende Aufgabe ist anspruchsvoll. Du musst vieles von dem zuvor Gelernten benutzen.
Versuche eine iterative (Scheife) und eine rekursive Lösung zu finden.`,

    task: `Schreibe eine Funktion <code>roman</code>, die eine
<a href="https://en.wikipedia.org/wiki/Roman_numerals">römische Zahl</a> (bis 1000) in eine arabische umwandelt.
<code>roman("CDLXXXIII")</code> sollte <code>483</code> ergeben.`,

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