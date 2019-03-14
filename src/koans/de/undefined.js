(function(dateUtil) {

  jshero.koans.add({

    id: 'undefined',

    title: 'undefined',

    lesson: `Bisher hatten wir Variablen bei der Deklaration immer auch initialisiert.

<pre><code>// Deklaration und Initialisierung
var x = 1;</code></pre>

Man kann eine Varialbe aber auch deklarieren und ihr später einen Wert zuweisen.

<pre><code>var x; // Deklaration
x = 1; // Initialisierung</code></pre>

Variablen, die nicht initialisiert wurden, haben den Wert <code>undefined</code> (engl.: nicht definiert).
In der Praxis kommt das bei Funktionsaufrufen am häufigsten vor. Ruft man eine Funktion, die einen Parameter erwartet, ohne Argument auf,
dann erhält der Funktionsparameter den Wert <code>undefined</code>.

<pre><code>var echo = function(x) {
  return x;
};
// Aufruf ohne Argument
var y = echo();</code></pre>

<code>echo</code> wird ohne Argument aufgerufen. Dem Parameter <code>x</code> wird so kein Wert zugewiesen,
er erhält den Wert <code>undefined</code>.
Da <code>echo</code> den Parameter <code>x</code> einfach nur zurückgibt,
erhält auch <code>y</code> den Wert <code>undefined</code>. <br><br>
Eine Funktion, die einen Parameter erwartet, kann immer auch ohne Argument aufgerufen werden.
Man sollte sich beim Schreiben von Funktionen also immer überlegen,
was in diesem Fall passieren soll. Gute Praxis ist es, in einem solchen Fall dem Parameter einen Default-Wert (engl.: Vorgabe) zuzuweisen.
Das hatten wir schon bei der String-Methode <code>charAt(index)</code> kennen gelernt.
Normalerweise gibt diese Methode den Buchstaben an der Stelle <code>index</code>
zurück. Rufen wir <code>charAt</code> ohne Argument auf, erhält <code>index</code> den Default <code>0</code>.
Es wird der Buchstabe an der Stelle <code>0</code> zurückgegeben.
Um eine Varaible auf <code>undefined</code> zu überprüfen, verwendet man wie üblich die strikte Gleichkeit.
Die Methode <code>charAt</code> könnte also folgenden Code-Ausschnitt enthalten:

<pre><code>if (index === undefined) {
  index = 0;
}</code></pre>`,

    task: `Schreibe eine Funktion <code>hallo</code>, die einen String als Parameter entgegennimmt und <code>"Hallo &lt;Parameter&gt;!"</code> zurückgibt.
<code>hallo("Akgün")</code> sollte <code>"Hallo Akgün!"</code> zurückgeben.
Wird <code>hallo</code> ohne Argument aufgerufen, so soll <code>"Hallo Welt!"</code> zurückgegeben werden.`,

    beforeTests: function() {
      if (typeof hallo !== "undefined") {
        hallo = undefined;
      }
    },

    tests: [
      function() {
        return jshero.testutil.assert_isFunction('hallo');
      },

      function() {
        return jshero.testutil.assert_functionHasNumOfParameter('hallo', 1);
      },

      function() {
        return jshero.testutil.assert_functionReturns('hallo("Melek")', 'Hallo Melek!');
      },

      function() {
        return jshero.testutil.assert_functionReturns('hallo("Stefan")', 'Hallo Stefan!');
      },

      function() {
        return jshero.testutil.assert_functionReturns('hallo()', 'Hallo Welt!');
      }
    ]

  });

})(jshero.date);
