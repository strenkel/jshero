jshero.koans.add({

  id: 'date2',

  title: 'Datum und Uhrzeit ausgeben',

  lesson: 'Zur Ausgabe der Daten eines Date-Objekts gibt es 7 Methoden:' +
    '<pre><code>' +
    'var startFastnacht = new Date(2017, 10, 11, 11, 11);<br>' +
    'var jahr = startFastnacht.getFullYear();<br>' +
    'var monat = startFastnacht.getMonth();<br>' +
    'var tag = startFastnacht.getDate();<br>' +
    'var stunde = startFastnacht.getHour();<br>' +
    'var minute = startFastnacht.getMinutes();<br>' +
    'var sekunde = startFastnacht.getSeconds();<br>' +
    'var millisekunde = startFastnacht.getMilliseconds();<br>' +
    '</code></pre>' +
    'Man erhält die erwarteten Werte: <code>2017</code> für das Jahr, <code>10</code> für den Monat, <code>11</code> für den Tag, die Stunde und die Minute, ' +
    'sowie <code>0</code> für die Sekunde und die Millisekunde. ' +
    'Die Monatszählung beginnt wie beim Erzeugen eines Date-Objektes mit <code>0</code>. <code>10</code> steht für den November.',

  task: 'Schreibe eine Funktion <code>toGerman</code>, die ein Date-Objekt entgegennimmt und die dessen Datum im Format "d.M.YYYY" zurückgibt. ' +
    'Mit <code>date = new Date(2017, 2, 8)</code> sollte <code>toGerman(date)</code> den String <code>"8.3.2017"</code> zurückgeben.',

  beforeTests: function() {
    if (typeof toGerman !== "undefined") {
      toGerman = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof toGerman === 'function';
      var msg;
      if (ok) {
        msg = "<code>toGerman</code> ist eine Funktion.";
      } else {
        msg = "<code>toGerman</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = toGerman.length === 1;
      var msg;
      if (ok) {
        msg = "<code>toGerman</code> hat 1 Parameter.";
      } else {
        msg = "<code>toGerman</code> hat nicht 1, sondern " + toGerman.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = toGerman(new Date(2017, 2, 8));
        ok = result === "8.3.2017";
        if (ok) {
          msg = '<code>toGerman(new Date(2017, 2, 8))</code> gibt <code>"8.3.2017"</code> zurück.';
        } else {
          msg = '<code>toGerman(new Date(2017, 2, 8))</code> gibt nicht <code>"8.3.2017"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>toGerman(new Date(2017, 2, 8))</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = toGerman(new Date(1724, 3, 22));
        ok = result === "22.4.1724";
        if (ok) {
          msg = '<code>toGerman(new Date(1724, 3, 22))</code> gibt <code>"22.4.1724"</code> zurück.';
        } else {
          msg = '<code>toGerman(new Date(1724, 3, 22))</code> gibt nicht <code>"22.4.1724"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>toGerman(new Date(1724, 3, 22))</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }
  ]

});
