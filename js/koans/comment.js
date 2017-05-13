jshero.koans.add({

  id: 'comment',

  title: 'Kommentare',

  lesson: 'Neben dem eigentlichen Code kann man Kommentare schreiben. Kommentare dienen dazu, Programme zu erklären. Sie helfen uns Menschen, Programme zu verstehen und zu verwenden. ' +
    'Computer, die Programme ausführen, ignorieren Kommentare. In JavaScript gibt zwei Möglichkeiten, Kommentare zu schreiben: ' +
    'Zeilen-Kommentare werden mit <code>//</code> eingeleitet und gelten immer bis zum Ende der Zeile. Block-Kommentare werden mit <code>/*</code> eingeleitet und mit <code>*/</code> beendet. ' +
    'Alles dazwischen ist Kommentar. Hier ein paar Beispiele:' +
    '<pre><code>' +
    '// Das ist ein Zeilenkommentar.<br><br>' +
    '// Dieser Zeilenkommentar geht<br>' +
    '// über 2 Zeilen.<br><br>' +
    '/* Das ist ein Blockkommentar. */<br><br>' +
    '/* Dieser Blockkommentar geht<br>' +
    'über mehrere Zeilen. */<br><br>' +
    '/**<br>' +
    ' * Auch dies ist ein Blockkommentar.<br>' +
    ' * Die zusätzlichen Sterne zwischen<br>' +
    ' * dem Beginn und dem Ende des<br>' +
    ' * Blockkommentars dienen nur zur<br>' +
    ' * Verzierung. So sieht ein längerer <br>' +
    ' * Blockkommentar übersichtlicher aus.<br>' +
    ' */</code></pre>' +
    'Block-Kommentare schreibt man gerne über Funktionen, Zeilen-Kommentare in den Code-Fluss.' +
    '<pre><code>' +
    '/**<br>' +
    ' * Prüft, ob eine String kein Zeichen<br>' +
    ' * außer Leerzeichen enthält.<br>' +
    ' */<br>' +
    'var isEmpty = function(string) {<br>' +
    '  // Die Methode trim() entfernt Leerzeichen<br>' +
    '  // am Anfang und am Ende einer Zeichenfolge.<br>' +
    '  var trimmedString = string.trim();<br>' +
    '  return trimmedString.length === 0;<br>' +
    '};</code></pre>' +
    'Da Kommentare mit den hier verwendeten Tests nicht überprüfen werden können, eine Aufgabe, bei der man vieles von dem bisher Gelernten anwenden muss.',
        
  task: 'Schreibe ein Funktion <code>median</code>, die ein Array von aufsteigend sortierten Zahlen entgegennimmt und die den Median dieser Zahlen zurückgibt. ' +
    '<code>median([1, 2, 10])</code> sollte <code>2</code> ergeben; <code>median([1, 2, 10, 100])</code> sollte <code>6</code> ergeben. ' +
    'Der Median einer sortierten Zahlenreihe ist der Wert, der an der mittleren Stelle steht. Ist die Anzahl der Werte gerade, so ist der Median der Mittelwert ' +
    'der beiden mittleren Zahlen.',

  beforeTests: function() {
    if (typeof median !== "undefined") {
      median = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof median === 'function';
      var msg;
      if (ok) {
        msg = '<code>median</code> ist eine Funktion.';
      } else {
        msg = '<code>median</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = median.length === 1;
      var msg;
      if (ok) {
        msg = '<code>median</code> hat 1 Parameter.';
      } else {
        msg = '<code>median</code> hat nicht 1, sondern ' + median.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
   
    function() {
      var ok, msg, e;
      try {
        var result = median([1]);
        ok = result === 1;
        if (ok) {
          msg = '<code>median([1])</code> gibt <code>1</code> zurück.';
        } else {
          msg = '<code>median([1])</code> gibt nicht <code>1</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>median([1])</code>.';
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
        var result = median([1, 2]);
        ok = result === 1.5;
        if (ok) {
          msg = '<code>median([1, 2])</code> gibt <code>1.5</code> zurück.';
        } else {
          msg = '<code>median([1, 2])</code> gibt nicht <code>1.5</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>median([1, 2])</code>.';
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
        var result = median([1, 2, 10]);
        ok = result === 2;
        if (ok) {
          msg = '<code>median([1, 2, 10])</code> gibt <code>2</code> zurück.';
        } else {
          msg = '<code>median([1, 2, 10])</code> gibt nicht <code>2</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>median([1, 2, 10])</code>.';
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
