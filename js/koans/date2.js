jshero.koans.add({

  id: 'date2',

  title: 'Datum und Uhrzeit ausgeben',

  lesson: 'Zur Ausgabe der Daten eines Date-Objekts gibt es sieben sogenannte Getter-Methoden:' +
    '<pre><code>' +
    'var startFastnacht = new Date(2017, 10, 11, 11, 11);<br>' +
    'var jahr = startFastnacht.getFullYear();<br>' +
    'var monat = startFastnacht.getMonth();<br>' +
    'var tag = startFastnacht.getDate();<br>' +
    'var stunde = startFastnacht.getHours();<br>' +
    'var minute = startFastnacht.getMinutes();<br>' +
    'var sekunde = startFastnacht.getSeconds();<br>' +
    'var millisekunde = startFastnacht.getMilliseconds();<br>' +
    '</code></pre>' +
    'Man erhält die erwarteten Werte: <code>2017</code> für das Jahr, <code>10</code> für den Monat, <code>11</code> für den Tag, die Stunde und die Minute, ' +
    'sowie <code>0</code> für die Sekunde und die Millisekunde. ' +
    'Die Monatszählung beginnt wie beim Erzeugen eines Date-Objektes mit <code>0</code>. <code>10</code> steht für den November.',

  task: 'Schreibe eine Funktion <code>toGerman</code>, die ein Date-Objekt entgegennimmt und dessen Datum im Format "d.M.YYYY" zurückgibt. ' +
    'Mit <code>date = new Date(2017, 2, 8)</code> sollte <code>toGerman(date)</code> den String <code>"8.3.2017"</code> zurückgeben.',

  beforeTests: function() {
    if (typeof toGerman !== "undefined") {
      toGerman = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('toGerman');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('toGerman', 1);
    },
    function() {
      return jshero.testutil.assert_functionReturns('toGerman(new Date(2017, 2, 8))', '8.3.2017');
    },

    function() {
      return jshero.testutil.assert_functionReturns('toGerman(new Date(1724, 3, 22))', '22.4.1724');
    }
  ]

});
