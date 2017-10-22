jshero.koans.add({

  id: "log",

  title: "Loggen",

  lesson: 'Wenn man Programme schreibt, laufen die Dinge manchmal nicht so wie man will. Es kommt einfach nicht das ' +
    'gewünschte Ergebnis heraus und man weiß nicht warum. Eine Möglichkeit hier weiter ' +
    'zu kommen ist das Loggen. Man läßt sich den Wert von Variablen während der Programmausführung ausgeben. In JavaScript macht man ' +
    'das mit der Funktion <code>console.log</code>.' +
    '<pre><code>' +
    'var mitteilung = "Hallo";<br>' +
    'console.log(mitteilung);<br>' +
    'mitteilung = mitteilung + " Franz!";<br>' +
    'console.log(mitteilung);<br>' +
    '</code></pre>' +
    'Wir geben den Wert von <code>mitteilung</code> zweimal mit <code>console.log</code> aus. Beim ersten Log wird der initiale Werte von ' +
    '<code>mitteilung</code> ausgegeben. Beim zweiten Log sehen wir, welchen Wert <code>mitteilung</code> nach der Änderung hat. ' +
    'So können wir feststellen, welchen Wert Variablen an bestimmen Stellen des Programmsablaufs besitzen und wie sich dieser Wert im Ablauf ändert. ' +
    'In unserem Beispiel erhalten wir nacheinander die Ausgaben <code>"Hallo"</code> und <code>"Hallo Franz!"</code>.<br><br>' +
    'Wo man das Log zu sehen bekommt, hängt von der JavaScript-Umgebung ab. Node.js wird in einer klassischen Konsole gestartet. Dort wird auch das Log ausgegeben. ' +
    'In Browsern sieht man die Log-Ausgabe im normalen Betrieb nicht. Doch jeder Browser besitzt sogenannte Entwickler-Werkzeuge. Das sind mächtige Tools zur Unterstützung ' +
    'von Webentwicklern. Eines dieser Tools ist die Konsole. Dort wird das Log ausgegeben. Wie man die Entwickler-Werkzeuge öffnet hängt vom jeweiligen Browser ab. ' +
    'Bei vielen Desktop-Browsern (z.B. Firefox) wird sie mit der Taste F12 geöffnet. Die Konsole kannst du dann als Reiter auswählen. ' +
    'Benutzt du JavaScript Hero im Browser auf einem PC oder Laptop, dann kannst du das sofort ausprobieren. Öffne die Entwickler-Konsole (im Firefox mit F12), schreibe unten in das Lösungsfeld ' +
    '<code>console.log("Hallo Konsole!")</code> und führe die Tests aus. In der Entwickler-Konsole erscheint "Hallo Konsole!".<br><br>' +
    'Da es sinnvoll ist, das Log direkt in der Testausgabe zu sehen, besitzt JavaScript Hero eine eigene Log-Funktion: <code>jshero.log</code>. ' +
    'Diese Funktion loggt so wie oben <code>console.log</code>. Die Ausgabe wird allerdings nicht in die Entwickler-Konsole, sondern in die Testausgabe geschrieben. ' +
    'So sieht man genau, was bei welchem Testaufruf geloggt wird. <code>jshero.log</code> kannst du in jeder Lektion verwenden! Der Vollständigkeit halber seien zwei Unterschiede zwischen dem ' +
    'Loggen mit <code>console.log</code> und <code>jshero.log</code> genannt: (i)&nbsp;<code>console.log</code> kann mehrere Paramter gleichzeitig loggen ' +
    'und es loggt Objekte (diese werden wir später kennen lernen) in ihrer Objekt-Notation. (ii)&nbsp;<code>jshero.log</code> loggt nicht beim Einlesen deines Lösungs-Codes. ' + 
    'Es ist nur beim Aufruf deiner Lösungsfunktion aktiv. Dadurch werden Log-Aufrufe außerhalb deiner Lösungsfunktion mit <code>jshero.log</code> nicht geloggt, während sie ' +
    'mit <code>console.log</code> geloggt werden.',
        
  task: 'Schreibe eine Funktion <code>rufe</code>, die einen String als Parameter entgegennimmt und diesen String verdoppelt zurückgibt. ' +
    'Gleichzeitig soll der Eingangsparameter und die Rückgabe mit <code>jshero.log</code> geloggt werden. Der Aufruf <code>rufe("Werder")</code> ' +
    'sollte <code>"WerderWerder"</code> zurückgeben und es sollte nacheinander <code>"Werder"</code> und <code>"WerderWerder"</code> geloggt werden.',

  beforeTests: function() {
    if (typeof rufe !== "undefined") {
      rufe = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof rufe === 'function';
      var msg;
      if (ok) {
        msg = "<code>rufe</code> ist eine Funktion.";
      } else {
        msg = "<code>rufe</code> ist keine Funktion."
      }
      return {
        msg: msg,
        ok: ok
      };
    },
    
    function() {
      var ok = rufe.length === 1;
      var msg;
      if (ok) {
        msg = "<code>rufe</code> hat 1 Parameter.";
      } else {
        msg = "<code>rufe</code> hat nicht 1, sondern " + rufe.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = rufe("Werder");
        if (result === "WerderWerder") {
          ok = true;
          msg = '<code>rufe("Werder")</code> gibt <code>"WerderWerder"</code> zurück.';
        } else {
          ok = false;
          msg = '<code>rufe("Werder")</code> gibt nicht <code>"WerderWerder"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Werder")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        rufe("Werder");
        var result = jshero.getLogs().length;
        if (result === 2) {
          ok = true;
          msg = '<code>rufe("Werder")</code> loggt mit <code>jshero.log</code> genau 2 mal.';
        } else {
          ok = false;
          msg = '<code>rufe("Werder")</code> loggt mit <code>jshero.log</code> nicht 2 mal, sondern ' + result + ' mal.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Werder")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        rufe("Werder");
        var result = jshero.getLogs()[0];
        if (result === "Werder") {
          ok = true;
          msg = '<code>rufe("Werder")</code> loggt als erstes die Übergabe <code>"Werder"</code>.';
        } else {
          ok = false;
          msg = '<code>rufe("Werder")</code> loggt als erstes nicht die Übergabe <code>"Werder"</code>, sondern es wird <code>' +
              JSON.stringify(result) + '</code> geloggt.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Werder")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },
  
    function() {
      var ok, msg, e;
      try {
        rufe("Werder");
        var result = jshero.getLogs()[1];
        if (result === "WerderWerder") {
          ok = true;
          msg = '<code>rufe("Werder")</code> loggt als zweites die Rückgabe <code>"WerderWerder"</code>.';
        } else {
          ok = false;
          msg = '<code>rufe("Werder")</code> loggt als zweites nicht die Rückgabe <code>"WerderWerder"</code>, sondern es wird <code>' +
              JSON.stringify(result) + '</code> geloggt.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Werder")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = rufe("Kickers");
        if (result === "KickersKickers") {
          ok = true;
          msg = '<code>rufe("Kickers")</code> gibt <code>"KickersKickers"</code> zurück.';
        } else {
          ok = false;
          msg = '<code>rufe("Kickers")</code> gibt nicht <code>"KickersKickers"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Kickers")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        rufe("Kickers");
        var result = jshero.getLogs()[0];
        if (result === "Kickers") {
          ok = true;
          msg = '<code>rufe("Kickers")</code> loggt als erstes die Übergabe <code>"Kickers"</code>.';
        } else {
          ok = false;
          msg = '<code>rufe("Kickers")</code> loggt als erstes nicht die Übergabe <code>"Kickers"</code>, sondern es wird <code>' +
              JSON.stringify(result) + '</code> geloggt.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Kickers")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    },
  
    function() {
      var ok, msg, e;
      try {
        rufe("Kickers");
        var result = jshero.getLogs()[1];
        if (result === "KickersKickers") {
          ok = true;
          msg = '<code>rufe("Kickers")</code> loggt als zweites die Rückgabe <code>"KickersKickers"</code>.';
        } else {
          ok = false;
          msg = '<code>rufe("Kickers")</code> loggt als zweites nicht die Rückgabe <code>"KickersKickers"</code>, sondern es wird <code>' +
              JSON.stringify(result) + '</code> geloggt.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>rufe("Werder")</code>.';
        e = exc;
      }
      return {
        msg: msg,
        ok: ok,
        e: e
      };
    }
    
  ]

});
