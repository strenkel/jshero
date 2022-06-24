jshero.koans.add({

  id: 'functionexpression',

  title: 'Funktionsausdrücke',

  lesson: `Wir haben bisher Funktionsdeklarationen kennen gelernt. Sie beginnen mit dem Schlüsselwort <code>function</code>
gefolgt von dem Funktionsnamen, den Parametern und dem Funktionskörper:

<pre><code>// Funktionsdeklaration
function plusOne(x) {
  return x + 1;
}</code></pre>
  
Man kann Funktionen aber auch direkt im laufenden Code definieren. Eine solche Funktionsdefinition im laufende Code nennt man Funktionsausdruck.
So kann man zum Beispiel einer Variablen oder Konstanten direkt eine Funktion zuordnen.

<pre><code>// Funktionsausdruck
const plusOne = function(x) {
  return x + 1;
};</code></pre>

Hier wurde keine Funktion deklariert, sondern wir haben einen Funktionsausdruck direkt einer Konstanten zugeordnet.
Da es sich hier um eine Variablen-Zuordnung handelt, sollte das Statement mit einem Semikolon abgeschlossen werden.
Im Gegensatz zu einer Funktionsdeklaration kann man bei einem Funktionsausdruck den Namen der Funktion weglassen.
Man spricht in diesem Fall von einer anonymen Funktion. Die Funktion wird über den zugeordneten Variablennamen
aufgerufen:

<pre><code>let foo = 1;
foo = plusOne(foo);
</code></pre>

Eine Funktionsdeklaration und ein Funktionsausdruck mit Variablendeklaration sind praktisch gleichwertig.
Welche Schreibweise man bevorzugt, ist Geschmackssache.
Wie wir noch sehen werden, spielen Funktionsausdrücke, insbesondere anonyme Funktionen, in der funktionalen Programmierung eine wichtige Rolle.
<br></br>
Da man die Verwendung von Funktionsausdrücken schwer testen kann, hier eine Aufgabe, die das Zusammenspiel von Strings
und Schleifen übt.`,

  task: `Schreibe eine Funktion <code>sperren</code>, die ein Wort entgegennimmt und dieses Wort gesperrt
zurückgibt. Das Sperren soll dabei durch Einfügen von Leerzeichen realisiert werden.<br><br>
Beispiel: <code>sperren("Juni")</code> sollte <code>"J u n i"</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('sperren');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('sperren', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sperren("Ei")', 'E i');
    },

    function() {
      return jshero.testutil.assert_functionReturns('sperren("Juni")', 'J u n i');
    },

    function() {
      return jshero.testutil.assert_functionReturns('sperren("Traum")', 'T r a u m');
    },

    function() {
      return jshero.testutil.assert_functionReturns('sperren("Blaumeise")', 'B l a u m e i s e');
    }

  ]

});
