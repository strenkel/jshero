jshero.koans.add({

  id: 'equals',

  title: 'Strikte Gleichheit',

  lesson: 'Zwei Werte kann man auf strikte Gleichheit überprüfen. Das Ergebnis eines solchen Vergleichs ist entweder <code>true</code>, ' +
    'die beiden Werte sind gleich, oder <code>false</code>, die beiden Werte sind ungleich. Der Operator für strikte Gleichheit ist ' +
    '<code>===</code>.' + 
    '<pre><code>var sprache = "JavaScript";<br>var x = 10;<br>var v1 = sprache === "Java";<br>var v2 = x === 10;<br>' +
    'var v3 = x === "10";</code></pre><code>v1</code> bekommt das Ergebnis des Vergleichs der Variablen <code>sprache</code> ' +
    'mit dem Wert <code>"Java"</code> zugewiesen. Da <code>sprache</code> zuvor den Wert <code>JavaScript</code> erhalten hat und ' +
    'diese beiden Werte verschieden sind, hat <code>v1</code> den Wert <code>false</code>. <code>v2</code> ist <code>true</code>, ' +
    'da der Wert von <code>x</code> gleich <code>10</code> ist. Bei der strikten Gleichheit kommt es auch darauf an, dass die ' +
    'Datentypen der beiden verglichenen Werte gleich sind. <code>v3</code> ist <code>false</code>, da hier unterschiedliche Typen ' + 
    'verglichen werden. Auf der linken Seite des Vergleichs steht eine Zahl, auf der rechten Seite ein String.',
        
  task: 'Schreibe eine Funktion <code>gleich</code>, die zwei Werte auf strikte Gleichheit überprüft. <code>gleich(1, 1)</code> soll ' +
    '<code>true</code> zurückgeben, <code>gleich(1, 2)</code> soll <code>false</code> ergeben.',

  beforeTests: function() {
    if (typeof gleich !== "undefined") {
      gleich = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof gleich === 'function';
      var msg;
      if (ok) {
        msg = '<code>gleich</code> ist eine Funktion.';
      } else {
        msg = '<code>gleich</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = gleich.length === 2;
      var msg;
      if (ok) {
        msg = '<code>gleich</code> hat zwei Parameter.';
      } else {
        msg = '<code>gleich</code> hat nicht 2, sondern ' + gleich.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = gleich(1, 1);
        ok = result === true;
        if (ok) {
          msg = '<code>gleich(1, 1)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>gleich(1, 1)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, 1)</code>.';
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
        var result = gleich(1, "1");
        ok = result === false;
        if (ok) {
          msg = '<code>gleich(1, "1")</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>gleich(1, "1")</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, "1")</code>.';
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
