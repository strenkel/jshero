jshero.koans.add({

  id: 'stringsplit',

  title: 'String: split()',

  lesson: 'Die Methode <code>split</code> zerlegt einen String anhand eines Trennstrings in Teilstrings. Die Teilstrings werden als Array zurückgegeben. ' +
    'Der ursprüngliche String wird nicht verändert.' +
    '<pre><code>' +
    'var date = "31-10-2017";<br>' +
    'var parts = date.split("-");<br>' +
    'var day = parts[0]; // "31"<br>' +
    'var month = parts[1]; // "10"<br>' +
    'var year = parts[2]; // "2017"<br>' +
    '</code></pre>' +
    'Der Trennstring ist hier der Bindestrich. Er zerlegt den Datumsstring in drei Teile. Diese drei Teile werden als Array der Variablen <code>parts</code> zugewiesen. ' +
    'Anschließend werden die einzelnen Teile aus dem Array ausgelesen und gesonderten Variablen zugewiesen. Die Variable <code>date</code> hat weiterhin den Wert <code>"31-10-2017"</code>.',

  task: 'Schreibe eine Funktion <code>add</code>, die einen String mit einer Additionsaufgabe entgegennimmt und die das Ergebnis der Addition als Zahl zurückgibt. ' +
    'Es sollen endlich viele natürliche Zahlen addiert werden. Die Additionsaufgabe ist ein String der Form "1+19+...+281". ' +
    'So soll <code>add("7+12+100")</code> die Zahl <code>119</code> zurückgeben.',

  beforeTests: function() {
    if (typeof hallo !== "undefined") {
      hallo = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof add === 'function';
      var msg;
      if (ok) {
        msg = "<code>add</code> ist eine Funktion.";
      } else {
        msg = "<code>add</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = add.length === 1;
      var msg;
      if (ok) {
        msg = "<code>add</code> hat 1 Parameter.";
      } else {
        msg = "<code>add</code> hat nicht 1, sondern " + add.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = add("1+2");
        ok = result === 3;
        if (ok) {
          msg = '<code>add("1+2")</code> gibt <code>3</code> zurück.';
        } else {
          msg = '<code>add("1+2")</code> gibt nicht <code>3</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>add("1+2")</code>.';
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
        var result = add("50000+4000+300+20+1");
        ok = result === 54321;
        if (ok) {
          msg = '<code>add("50000+4000+300+20+1")</code> gibt <code>54321</code> zurück.';
        } else {
          msg = '<code>add("50000+4000+300+20+1")</code> gibt nicht <code>54321</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>add("50000+4000+300+20+1")</code>.';
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
