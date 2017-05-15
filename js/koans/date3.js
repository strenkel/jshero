(function(dateUtil) {

jshero.koans.add({

  id: 'date3',

  title: 'Datum und Uhrzeit ändern',

  lesson: 'Passend zu den sieben Getter-Methoden besitzt das Date-Objekt sieben Setter-Methoden: ' + 
    '<code>setFullYear</code>, <code>setMounth</code>, <code>setDate</code>, <code>setHours</code>, <code>setMinutes</code>, <code>setSeconds</code> und <code>setMilliseconds</code>. ' +
    'Mit diesen 7 Methoden kann man den entsprechenden Date-Eintrag setzen:' +
    '<pre><code>' +
    'var today = new Date();<br>' +
    'today.setHours(0);<br>' + 
    'today.setSeconds(0);<br>' +
    'today.setMilliseconds(0);<br>' +    
    '</code></pre>' +
    '<code>today</code> enthält zunächst den Zeitpunkt seiner Erstellung. Anschließend wird mit den vier Setter-Aufrufen die Zeit auf 0:00:00.000 Uhr gesetzt. ' +
    'So enthält <code>today</code> das aktuelle Tagesdatum mit zurückgesetzter Uhrzeit.<br><br>' +
    'Überschreitet oder unterschreitet man bei einer dieser Methoden den zulässigen Wertebereich, dann rechnen diese Methoden den Über- oder Untertrag automatisch um:<br>' +
    '<pre><code>' +
    'var someDay = new Date(2017, 3, 1);<br>' +
    'someDay.setDate(32);<br>' +
    'someDay.setDate(0);<br>' +
    '</code></pre>' +
    'Zunächst repräsentiert <code>someDay</code> den 1.4.2017. Nun wird der Tag auf den 32. gesetzt. Da der April 30 Tage hat, entspricht das dem 2.5.2017. Wird nun der Tag ' +
    'auf 0 gesetzt, erhält man den 30.4.2017.',

  task: 'Schreibe eine Funktion <code>yesterday</code>, die ein Date-Objekt entgegennimmt, dessen Datum um einen Tag zurücksetzt und dann dieses Date-Objekt zurückgibt. ' +
    'Die Uhrzeit soll dabei nicht verändert werden. Mit <code>date = new Date(1965, 8, 14)</code> sollte <code>yesterday(date)</code> ein Date-Objekt zurückgeben, das den 13.9.1965 repräsentiert.',

  beforeTests: function() {
    if (typeof yesterday !== "undefined") {
      yesterday = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof yesterday === 'function';
      var msg;
      if (ok) {
        msg = "<code>yesterday</code> ist eine Funktion.";
      } else {
        msg = "<code>yesterday</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = yesterday.length === 1;
      var msg;
      if (ok) {
        msg = "<code>yesterday</code> hat 1 Parameter.";
      } else {
        msg = "<code>yesterday</code> hat nicht 1, sondern " + yesterday.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = yesterday(new Date(1965, 8, 14));
        ok = dateUtil.isDate(result);
        if (ok) {
          msg = 'yesterday(new Date(1965, 8, 14))</code> gibt eine Date-Objekt zurück.';
        } else {
          msg = '<code>yesterday(new Date(1965, 8, 14))</code> gibt kein Date-Objekt zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>yesterday(new Date(1965, 8, 14))</code>.';
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
        var result = yesterday(new Date(1965, 8, 14));
        ok = dateUtil.isEqual(result, new Date(1965, 8, 13));
        if (ok) {
          msg = 'yesterday(new Date(1965, 8, 14))</code> gibt eine Date-Objekt zurück, das den 13.9.1965 repräsentiert. ';
        } else {
          msg = '<code>yesterday(new Date(1965, 8, 14))</code> gibt eine Date-Objekt zurück, das nicht den 13.9.1965 repräsentiert, sondern den ' + result.toLocaleString() + '.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>yesterday(new Date(1965, 8, 14))</code>.';
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
        var result = yesterday(new Date(2000, 0, 1, 12));
        ok = dateUtil.isDate(result);
        if (ok) {
          msg = 'yesterday(new Date(2000, 0, 1, 12))</code> gibt eine Date-Objekt zurück.';
        } else {
          msg = '<code>yesterday(new Date(2000, 0, 1, 12))</code> gibt kein Date-Objekt zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>yesterday(new Date(2000, 0, 1, 12))</code>.';
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
        var result = yesterday(new Date(2000, 0, 1, 12));
        ok = dateUtil.isEqual(result, new Date(1999, 11, 31, 12));
        if (ok) {
          msg = 'yesterday(new Date(2000, 0, 1, 12))</code> gibt eine Date-Objekt zurück, das den 31.12.1999, 12 Uhr repräsentiert. ';
        } else {
          msg = '<code>yesterday(new Date(2000, 0, 1, 12))</code> gibt eine Date-Objekt zurück, das nicht den 31.12.1999, 12 Uhr repräsentiert, sondern den '+ result.toLocaleString() + '.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>yesterday(new Date(2000, 0, 1, 12))</code>.';
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

})(jshero.date);
