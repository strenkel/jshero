jshero.koans.add({

  id: 'array',

  title: 'Arrays anlegen',

  lesson: 'Arrays sind Objekte zur Speicherung vieler, meist ähnlicher Werte. Diese sogenannten Elemente werden ' +
    'in einem Array der Reihe nach abgelegt. Arrays erzeugt man am besten mit eckigen Klammern.' +
    '<pre><code>var sprachen = ["C", "C++", "Java", "JavaScript"];<br>' +
    'var primzahlen = [2, 3, 5, 7, 11];<br>' +
    'var leeresArray = [];<br>' +
    'var a = "Douglas";<br>' +
    'var b = 12;<br>' +
    'var c = true;<br>' +
    'var allesMoegliche = [a, b, c];</code></pre>' +
    'Die Elemente eines Arrays können, wie das letzte Beispiel zeigt, alle einen anderen Datentyp besitzen.',
        
  task: 'Schreibe ein Funktion <code>toArray</code>, die 2 Paramter entgegennimmt und diese als Array zurückgibt. ' +
    '<code>toArray(5, 9)</code> sollte das Array <code>[5, 9]</code> ergeben.',

  beforeTests: function() {
    if (typeof toArray !== "undefined") {
      toArray = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof toArray === 'function';
      var msg;
      if (ok) {
        msg = '<code>toArray</code> ist eine Funktion.';
      } else {
        msg = '<code>toArray</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = toArray.length === 2;
      var msg;
      if (ok) {
        msg = '<code>toArray</code> hat 2 Parameter.';
      } else {
        msg = '<code>toArray</code> hat nicht 2, sondern ' + toArray.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = toArray(1, 2);
        ok = Array.isArray(result);
        if (ok) {
          msg = '<code>toArray(1, 2)</code> gibt ein Array zurück.';
        } else {
          msg = '<code>toArray(1, 2)</code> gibt kein Array zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>toArray(1, 2)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = toArray(1, 2);
        ok = result.length === 2 && result[0] === 1 && result[1] === 2;
        if (ok) {
          msg = '<code>toArray(1, 2)</code> gibt <code>[1, 2]</code> zurück.';
        } else {
          msg = '<code>toArray(1, 2)</code> gibt nicht <code>[1, 2]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>toArray(1, 2)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = toArray("Hänsel", "Gretel");
        ok = Array.isArray(result) && result.length === 2 && result[0] === "Hänsel" && result[1] === "Gretel";
        if (ok) {
          msg = '<code>toArray("Hänsel", "Gretel")</code> gibt <code>["Hänsel", "Gretel"]</code> zurück.';
        } else {
          msg = '<code>toArray("Hänsel", "Gretel")</code> gibt nicht <code>["Hänsel", "Gretel"]</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von toArray("Hänsel", "Gretel")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
