(function(testutil) {

  jshero.koans.add({

    id: 'euler1',

    title: 'Project Euler',

    lesson: `Die folgende Aufgabe ist dem <a href='https://projecteuler.net'>Project Euler</a> entnommen.
Es ist dort die erste Aufgabe. Das Project Euler ist eine Sammlung anspruchsvoller Aufgaben aus dem Bereich Mathematik
und Informatik. Nach Anlegen eines Account kannst Du auch dort deine Lösung überprüfen.`,

    task: `Schreibe eine Funktion <code>sumMultiples</code>, die eine natürliche Zahl n übergeben bekommt und die die Summe
aller Vielfachen von 3 und von 5, die echt kleiner als n sind, zurückgibt.<br><br>
Beispiel: Alle Vielfachen von 3 und 5 kleiner als 20 sind 3, 5, 6, 9, 10, 12, 15 und 18. Ihre Summe ist 78.
<code>sumMultiples(20)</code> sollte also <code>78</code> ergeben.`,

    tests: [

      function() {
        return testutil.assert_isFunction('sumMultiples');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('sumMultiples', 1);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('1')", 0);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('2')", 0);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('3')", 0);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('4')", 3);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('5')", 3);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('6')", 8);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('7')", 14);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('8')", 14);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('9')", 14);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('10')", 23);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('11')", 33);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('16')", 60);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('20')", 78);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('100')", 2318);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('500')", 57918);
      },

      function() {
        return testutil.assert_functionReturns("sumMultiples('1000')", 233168);
      }

    ]

  });

})(jshero.testutil);