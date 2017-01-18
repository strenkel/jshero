jshero.koans.add({

  id: 'if',

  title: 'if',

  lesson: 'Sehr häufig kommt es vor, dass Code nur dann ausgeführt werden soll, wenn eine bestimmte Bedingung erfüllt ist. ' +
    'Dazu verwendet man die <code>if</code>-Anweisung.' +
    '<pre><code>var gewinn = 0;<br>if (wuerfelzahl === 6) {<br>  gewinn = 100;<br>}</code></pre>' +
    'Diese Anweisung besteht aus dem Schlüsselwort <code>if</code> (engl: wenn) gefolgt von runden Klammern. In den runden Klammern steht ein ' +
    'Ausdruck - die Bedingung -, der zu <code>true</code> oder <code>false</code> ausgewertet wird. Ergibt die Bedingung <code>true</code>, ' +
    'werden alle Anweisungen in dem durch die geschweiften Klammern begrenzten Block ausgeführt. Ergibt die Bedingung <code>false</code>, ' +
    'wird der durch die geschweiften Klammern begrenzte Block übersprungen. ' +
    'Hat in unserem Beispiel die Variable <code>wuerfelzahl</code> den Wert <code>6</code>, so wird <code>gewinn</code> auf ' +
    '<code>100</code> gesetzt. Hat <code>wuerfelzahl</code> nicht den Wert <code>6</code>, bleibt <code>gewinn</code> bei <code>0</code>.',
        
  task: 'Schreibe eine Funktion <code>gleich</code>, die 2 Werte auf strikte Gleichheit überprüft. Sind die beiden Werte gleich, so soll ' +
    'der String "GLEICH" zurückgegeben werden. Sind sie ungleich, so soll man "UNGLEICH" erhalten. Tipp: Verwende zwei <code>return</code>' +
    '-Anweisungen. Eine innerhalb des <code>if</code>-Anweisungsblocks, eine im Anschluss an diesem Block.',

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
        msg = '<code>gleich</code> hat 2 Parameter.';
      } else {
        msg = '<code>gleich</code> hat nicht 2, sondern ' + gleich.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = gleich(1, 1);
        ok = result === "GLEICH";
        if (ok) {
          msg = '<code>gleich(1, 1)</code> ergibt <code>"GLEICH"</code>.';
        } else {
          msg = '<code>gleich(1, 1)</code> ergibt nicht <code>"GLEICH"</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, 1)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = gleich(1, "1");
        ok = result === "UNGLEICH";
        if (ok) {
          msg = '<code>gleich(1, "1")</code> ergibt <code>"UNGLEICH"</code>.';
        } else {
          msg = '<code>gleich(1, "1")</code> ergibt nicht <code>"UNGLEICH"</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, "1")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
