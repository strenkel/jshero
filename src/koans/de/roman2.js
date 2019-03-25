(function(testutil) {

  jshero.koans.add({

    id: 'roman2',

    title: 'Römische Zahlen II',

    lesson: `Nun wollen wir es andersherum probieren. Versuche auch hier eine iterative und eine rekursive Lösung zu finden.`,

    task: `Schreibe eine Funktion <code>roman</code>, die eine arabische Zahl (bis 1000) in eine römische Zahl umwandelt.
<code>roman(483)</code> sollte <code>"CDLXXXVIII"</code> ergeben.`,

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
        return testutil.assert_functionReturns('roman(1)', "I");
      },

      function() {
        return testutil.assert_functionReturns('roman(2)', "II");
      },

      function() {
        return testutil.assert_functionReturns('roman(3)', "III");
      },

      function() {
        return testutil.assert_functionReturns('roman(4)', "IV");
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
        return testutil.assert_functionReturns('roman(666)', "DCLXVI");
      },

      function() {
        return testutil.assert_functionReturns('roman(999)', "CMXCIX");
      },

      function() {
        return testutil.assert_functionReturns('roman(1000)', "M");
      }

    ]

  });

})(jshero.testutil);