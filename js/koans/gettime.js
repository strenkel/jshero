jshero.koans.add({

  id: 'gettime',

  title: 'Date: getTime()',

  lesson: `Die Date-Methode <code>getTime</code> liefert die Millisekunden, die zwischen dem 1.1.1970 0:00 Uhr und dem Zeitpunkt des
Datumsobjekts liegen.

<pre><code>// 1.1.1970 0:00:01 Uhr
var date = new Date(1970, 0, 1, 0, 1);
var time = date.getTime();</code></pre>

Zwischen dem 1.1.1970 0:00 Uhr und dem 1.1.1970 0:00:01 Uhr liegen 1000 Millisekunden.
<code>time</code> erhält den Wert <code>1000</code>.`,

  task: `Schreibe eine Funktion <code>periodInSeconds</code>, die die Differenz in Sekunden zwischen zwei Date-Objekten berechnet.
<code>periodInSeconds(new Date(2018, 2, 28, 9, 46), new Date(2018, 2, 28, 9, 47))</code> sollte 60 zurückgeben.`,

  beforeTests: function() {
    if (typeof periodInSeconds !== "undefined") {
      periodInSeconds = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('periodInSeconds');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('periodInSeconds', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('periodInSeconds(new Date(2018, 2, 28), new Date(2018, 2, 28, 0, 0, 1))', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('periodInSeconds(new Date(2018, 2, 28), new Date(2018, 2, 28, 0, 1))', 60);
    },

    function() {
      return jshero.testutil.assert_functionReturns('periodInSeconds(new Date(2018, 2, 28), new Date(2018, 2, 28, 1))', 3600);
    }

  ]

});
