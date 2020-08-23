(function(testutil) {

  jshero.koans.add({

    id: 'gettime',

    title: 'Date: getTime()',

    lesson: `Die Date-Methode <code>getTime</code> liefert die Millisekunden, die zwischen dem 1.1.1970, 0:00 UTC
und dem Zeitpunkt des Datumsobjekts liegen.

<pre><code>let date = new Date(Date.UTC(1970, 0, 1, 0, 0, 1));
let time = date.getTime();</code></pre>

Zwischen dem 1.1.1970, 0:00:00 UTC und dem 1.1.1970, 0:00:01 UTC liegen 1000 Millisekunden.
<code>time</code> erhält den Wert <code>1000</code>.`,

    task: `Schreibe eine Funktion <code>days</code>, die die Differenz in Tagen zwischen zwei Date-Objekten berechnet.
Es sollen nur volle Tage gezählt werden.<br><br>Beispiel:
<code>days(new Date(2018, 0, 1), new Date(2018, 0, 2))</code> und
<code>days(new Date(2018, 0, 1), new Date(2018, 0, 2, 12))</code> sollten <code>1</code> zurückgeben.`,

    tests: [

      function() {
        return testutil.assert_isFunction('days');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('days', 2);
      },

      function() {
        return testutil.assert_functionReturns('days(new Date(2018, 0, 1), new Date(2018, 0, 1))', 0);
      },

      function() {
        return testutil.assert_functionReturns('days(new Date(2018, 0, 1), new Date(2018, 0, 2))', 1);
      },

      function() {
        return testutil.assert_functionReturns('days(new Date(2018, 0, 1), new Date(2018, 0, 3))', 2);
      },

      function() {
        return testutil.assert_functionReturns('days(new Date(2018, 0, 1), new Date(2018, 0, 4))', 3);
      },

      function() {
        return testutil.assert_functionReturns('days(new Date(2018, 0, 1), new Date(2018, 0, 4, 23, 59))', 3);
      },

      function() {
        return testutil.assert_functionReturns('days(new Date(2018, 0, 1), new Date(2019, 0, 1))', 365);
      }

    ]

  });

})(jshero.testutil);