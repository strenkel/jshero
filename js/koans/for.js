(function() {

jshero.koans.add({

  id: 'for',

  title: 'for - Schleife',

  lesson: 'Mit Schleifen können Code-Abschnitte mehrmals durchlaufen werden. JavaScript kennt mehrere Schleifenarten. Die einfachste ist die <code>for</code>-Schleife.' +
    '<pre><code>var summe = 0;<br>' +
    'for (var i = 1; i < 3; i++) {<br>' +
    '  summe = summe + i;<br>' +
    '}</code></pre>' +
    'Die <code>for</code>-Schleife besteht aus drei Steuer-Anweisungen und dem Schleifen-Code. Die drei Anweisungen folgen dem <code>for</code> in runden Klammern.' +
    'Sie werden durch Semikolons voneinander getrennt. Die erste Anweisung ist die Start-Anweisung. Sie wird einmal zu Beginn der Schleife ausgeführt. ' +
    'Hier wird normalerweise eine Variable, die sogenannte Schleifenvariable, initialisiert. Die zweite Anweisung ist die Schleifen-Bedingung. ' +
    'Sie wird vor jedem Schleifendurchlauf zu <code>true</code> oder <code>false</code> ausgewertet. Ist der Ausdruck <code>true</code>, wird der Schleifen-Code ausgeführt. ' +
    'Ist er <code>false</code>, wird die Schleife beendet und die Programmausführung wird nach der Schleife fortgesetzt. ' +
    'Nach jedem Schleifen-Durchlauf wird die dritte Anweisung, die sogenannten End-Anweisung, ausgeführt. Hier wird normalerweise die Schleifenvariable erhöht. ' +
    'Anschließend beginnt ein neuer Schleifendurchlauf mit erneuter Auswertung der Schleifen-Bedingung. ' +
    'Der Schleifen-Code folgt in Mengenklammern den drei Steueranweisungen.<br>' +
    'In unserem Beispiel hat <code>summe</code> zunächst den Wert <code>0</code>. In der Start-Anweisung wird <code>i</code> mit <code>1</code> initialisiert. ' +
    'Die Schleifenbedingung <code>1 < 3</code> ist erfüllt, also wird der Schleifen-Code ausgeführt. <code>summe</code> erhält den Wert <code>0 + 1</code>, also <code>1</code>. ' +
    'Nun wird in der End-Anweisung <code>i</code> um <code>1</code> erhöht (<code>i++</code> ist identisch mit <code>i = i + 1</code>). ' +
    'Es erhällt also den Wert <code>2</code>. Der zweite Schleifendurchlauf startet mit Auswertung der Schleifenbedingung. Diese Bedingung (<code>2 < 3</code>) ist immer noch erfüllt. ' +
    'Der Schleifen-Code wird erneut ausgeführt und <code>summe</code> erhält jetzt den Wert <code>1 + 2</code>, also <code>3</code>. ' +
    '<code>i</code> wird abermals erhöht und hat nun den Wert <code>3</code>. ' +
    'Die Schleifenbedingung <code>3 < 3</code> ist jetzt nicht mehr erfüllt. Die Schleife wird beendet und die Programmausführung wird nach der Schleife fortgesetzt. ' +
    'Unser Codebespiel hat also alle natürlichen Zahlen echt kleiner 3 addiert.',
        
  task: 'Schreibe eine Funktion <code>addiereBis</code>, die eine Zahl als Parameter entgegennimmt und die ' +
    'alle natürlichen Zahlen echt kleiner dem Paramter aufaddiert. Das Ergebnis der Addition soll zurückgegeben werden. ' +
    '<code>addiereBis(4)</code> sollte <code>6</code> ergeben.',

  beforeTests: function() {
    if (typeof addiereBis !== "undefined") {
      rotiere = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof addiereBis === 'function';
      var msg;
      if (ok) {
        msg = '<code>addiereBis</code> ist eine Funktion.';
      } else {
        msg = '<code>addiereBis</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = addiereBis.length === 1;
      var msg;
      if (ok) {
        msg = '<code>addiereBis</code> hat 1 Parameter.';
      } else {
        msg = '<code>addiereBis</code> hat nicht 1, sondern ' + addiereBis.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

function() {
      var ok, msg, e;
      try {
        var result = addiereBis(2);
        ok = result === 1
        if (ok) {
          msg = '<code>addiereBis(2)</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>addiereBis(2)</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereBis(2)</code>.';
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
        var result = addiereBis(4);
        ok = result === 6
        if (ok) {
          msg = '<code>addiereBis(4)</code> gibt <code>6</code> zurück.';
        } else {
          msg = '<code>addiereBis(4)</code> gibt nicht <code>6</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereBis(4)</code>.';
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

})();
