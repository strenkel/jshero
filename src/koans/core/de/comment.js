jshero.koans.add({

  id: 'comment',

  title: 'Kommentare',

  lesson: `Neben dem eigentlichen Code kann man Kommentare schreiben. Kommentare dienen dazu, Programme zu erklären.
Sie helfen uns Menschen, Programme zu verstehen und zu verwenden.
Computer, die Programme ausführen, ignorieren Kommentare. In JavaScript gibt zwei Möglichkeiten, Kommentare zu schreiben:
Zeilen-Kommentare werden mit <code>//</code> eingeleitet und gelten immer bis zum Ende der Zeile.
Block-Kommentare werden mit <code>/*</code> eingeleitet und mit <code>*/</code> beendet.
Alles dazwischen ist Kommentar. Hier ein paar Beispiele:
<pre><code>// Das ist ein Zeilenkommentar.

// Dieser Zeilenkommentar geht
// über 2 Zeilen.

/* Das ist ein Blockkommentar. */

/* Dieser Blockkommentar geht
über mehrere Zeilen. */

/**
 * Auch dies ist ein Blockkommentar.
 * Die zusätzlichen Sterne zwischen
 * dem Beginn und dem Ende des
 * Blockkommentars dienen nur zur
 * Verzierung. So sieht ein längerer
 * Blockkommentar übersichtlicher aus.
 */</code></pre>

 Block-Kommentare schreibt man gerne über Funktionen, Zeilen-Kommentare in den Code-Fluss.

 <pre><code>/**
 * Prüft, ob eine String kein Zeichen
 * außer Leerzeichen enthält.
 */
let isEmpty = function(string) {
  // Die Methode trim() entfernt Leerzeichen
  // am Anfang und am Ende einer Zeichenfolge.
  let trimmedString = string.trim();
  return trimmedString.length === 0;
};</code></pre>

Da Kommentare mit den hier verwendeten Tests nicht überprüfen werden können, eine Aufgabe, bei der man vieles von dem bisher Gelernten anwenden muss.`,

  task: `Schreibe eine Funktion <code>median</code>, die ein Array von aufsteigend sortierten Zahlen entgegennimmt und die den Median dieser Zahlen zurückgibt.
<code>median([1, 2, 10])</code> sollte <code>2</code> ergeben; <code>median([1, 2, 10, 100])</code> sollte <code>6</code> ergeben.
Der Median einer sortierten Zahlenreihe ist der Wert, der an der mittleren Stelle steht. Ist die Anzahl der Werte gerade, so ist der Median der Mittelwert
der beiden mittleren Zahlen.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('median');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('median', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('median([1])', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('median([1, 2])', 1.5);
    },

    function() {
      return jshero.testutil.assert_functionReturns('median([1, 2, 10])', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('median([1, 1, 2, 10, 100, 101])', 6);
    }
  ]

});
