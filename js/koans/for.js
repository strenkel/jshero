(function(array) {

jshero.koans.add({

  id: 'for',

  title: 'for - Schleife',

  lesson: 'Mit Schleifen können wir einen Code-Abschnitt mehrmals durchlaufen. JavaScript kennt mehrere Schleifenarten. Die einfachste ist die <code>for</code>-Schleife.' +
    '<pre><code>var summe = 0;<br>' +
    'for (var i = 1; i < 3; i++) {<br>' +
    '  summe = summe + i;<br>' +
    '}</code></pre>' +
    'Die <code>for</code>-Schleife wird über drei Anweisungen, der Start-Anweisung, einer Bedingung und der Schleifen-Anweisung, gesteuert. ' +
    'Zunächst wird die Start-Anweisung ausgeführt. Hier wird normalerweise eine Variable initialisiert. ' +
    'Diese Variable nennt man auch Schleifenvariable. Anschließend wird die Bedingung ausgewertet. ' +
    'Ist sie <code>true</code>, wird der Schleifen-Code ausgeführt. Der Schleifen-Code steht wie bei der <code>if</code>-Anweisung zwischen den beiden Mengenklammern. ' +
    'Nach Ausführung des Schleifen-Codes wird die Schleifen-Anweisung ausgeführt. Hier wird normalerweise die Schleifenvariable erhöht. ' +
    'Anschließend wird wieder die Schleifen-Bedingung ausgewertet. ' +
    'Sobald die Bedingung <code>false</code> ergibt, wird die Schleife beendet und die Programmausführung wird nach der Schleife fortgesetzt. ' +
    'In unserem Beispiel hat <code>summe</code> zunächst den Wert <code>0</code>. <code>i</code> startet mit dem Wert <code>1</code>. ' +
    'Da <code>1 < 3</code> erfüllt ist, wird der Schleifen-Code ausgeführt. <code>summe</code> erhält den Wert <code>0 + 1</code>, also <code>1</code>. ' +
    'Nun wird <code>i</code> um <code>1</code> erhöht (<code>i++</code> ist identisch mit <code>i = i + 1</code>). ' +
    'Es hat also den Wert <code>2</code>. Die Schleifenbedingung <code>2 < 3</code> ist immer noch erfüllt. ' +
    '<code>summe</code> erhält jetzt der Wert <code>1 + 2</code>, also <code>3</code>. <code>i</code> wird jetzt abermals erhöht und hat dann den Wert <code>3</code>. ' +
    'Die Schleifenbedingung <code>3 < 3</code> ist jetzt nicht mehr erfüllt. Die Programmausführung wird nach der Schleife fortgesetzt. ' +
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
      var ok, msg;
      try {
        var result = addiereBis(4);
        ok = result === 6
        if (ok) {
          msg = '<code>addiereBis(4)</code> gibt <code>6</code> zurück.';
        } else {
          msg = '<code>addiereBis(4)</code> gibt nicht <code>6</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereBis(4)</code>.';
        console.log(msg, e);
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = addiereBis(2);
        ok = result === 1
        if (ok) {
          msg = '<code>addiereBis(2)</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>addiereBis(2)</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>addiereBis(2)</code>.';
        console.log(msg, e);
      }
      return {
        ok: ok,
        msg: msg
      };
    }
   
    

  ]

});

})(jshero.array);
