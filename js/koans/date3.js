
jshero.koans.add({

  id: 'date3',

  title: 'Datum und Uhrzeit ändern',

  lesson: `Passend zu den sieben Getter-Methoden besitzt das Date-Objekt sieben Setter-Methoden:
<code>setFullYear</code>, <code>setMounth</code>, <code>setDate</code>, <code>setHours</code>, <code>setMinutes</code>,
<code>setSeconds</code> und <code>setMilliseconds</code>.
Mit diesen 7 Methoden kann man den entsprechenden Date-Eintrag setzen:

<pre><code>var today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);</code></pre>

<code>today</code> enthält zunächst den Zeitpunkt seiner Erstellung.
Anschließend wird mit den vier Setter-Aufrufen die Zeit auf 0:00:00.000 Uhr gesetzt.
So enthält <code>today</code> das aktuelle Tagesdatum mit zurückgesetzter Uhrzeit.<br><br>
Überschreitet oder unterschreitet man bei einer dieser Methoden den zulässigen Wertebereich,
dann rechnen diese Methoden den Über- oder Untertrag automatisch um:

<pre><code>var someDay = new Date(2020, 3, 1);
someDay.setDate(32);
someDay.setDate(0);</code></pre>

Zunächst repräsentiert <code>someDay</code> den 1.4.2020. Nun wird der Tag auf den 32. gesetzt.
Da der April 30 Tage hat, entspricht das dem 2.5.2020. Wird nun der Tag auf 0 gesetzt, erhält man den 30.4.2020.`,

  task: `Schreibe eine Funktion <code>yesterday</code>, die ein Date-Objekt entgegennimmt, dessen Datum um einen Tag zurücksetzt
und dann dieses Date-Objekt zurückgibt. Die Uhrzeit soll dabei nicht verändert werden. Mit <code>date = new Date(1965, 8, 14)</code>
sollte <code>yesterday(date)</code> ein Date-Objekt zurückgeben, das den 13.9.1965 repräsentiert.`,

  beforeTests: function() {
    if (typeof yesterday !== "undefined") {
      yesterday = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('yesterday');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('yesterday', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('yesterday(new Date(1965, 8, 14))', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns('yesterday(new Date(1965, 8, 14))', new Date(1965, 8, 13));
    },

    function() {
      return jshero.testutil.assert_functionReturnsType('yesterday(new Date(2000, 0, 1, 12))', 'Date');
    },

    function() {
      return jshero.testutil.assert_functionReturns('yesterday(new Date(2000, 0, 1, 12))', new Date(1999, 11, 31, 12));
    }

  ]

});

